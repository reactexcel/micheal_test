import { useState } from "react";
import { ICONS } from "../assets";
import AccordionComponent from "../components/Accordian";
import Avtar from "../components/Avtar";
import InputField from "../components/InputField";
import {
  accordianData,
  jobTemplate,
  seniority,
  subsidiary,
  location,
} from "../constant";
import Dropdown from "../components/Dropdown";

export default function DocumentSelector() {
  const [allSelectedDoc, setAllSelectedDoc] = useState([]);
  const [searchSelectedDoc, setSearchSelectedDoc] = useState("");
  const [searchAvailableDoc, setSearchAvailableDoc] = useState("");

  const handleSelectedDoc = (doc) => {
    if (!allSelectedDoc.some((selectedDoc) => selectedDoc.id === doc.id)) {
      setAllSelectedDoc([...allSelectedDoc, doc]);
    }
  };

  const deleteSelectedDoc = (doc) => {
    setAllSelectedDoc(
      allSelectedDoc.filter((item) => {
        return item.id !== doc.id;
      })
    );
  };

  return (
    <div className="flex p-3 gap-6  min-h-screen">
      <div className="w-[50%] border border-solid border-gray-300 rounded-lg p-3 flex flex-col ">
        <span className="text-gray-900 font-medium text-base">
          Available Documents
        </span>
        <div className="flex flex-col gap-4">
          <InputField
            placeholder="Search"
            value={searchAvailableDoc}
            onChange={(e) => setSearchAvailableDoc(e.target.value)}
            icon={ICONS.searchIcon.svg}
          />
          <div className=" pt-2">
            <span className=" text-gray-900 font-medium text-base">
              Filter by:
            </span>
            <div className="w-full flex flex-wrap flex-row justify-between">
              <Dropdown options={jobTemplate} />
              <Dropdown options={location} />
              <Dropdown options={subsidiary} />
              <Dropdown options={seniority} />
            </div>
          </div>
          <div>
            <AccordionComponent
              accordianData={accordianData}
              handleSelectedDoc={handleSelectedDoc}
            />
          </div>
        </div>
      </div>
      <div className="w-[50%] flex flex-1 flex-col border border-solid border-gray-300 rounded-lg p-3">
        <span className="text-gray-900 font-medium text-base">
          Selected Documents
        </span>
        <div className="flex flex-col gap-4 h-full">
          <InputField
            placeholder="Search"
            value={searchSelectedDoc}
            onChange={(e) => setSearchSelectedDoc(e.target.value)}
            icon={ICONS.searchIcon.svg}
          />
          <div className={`${allSelectedDoc?.length > 0 ? "" : "flex flex-1"}`}>
            {allSelectedDoc?.length > 0 ? (
              <div className="border border-solid border-green-500 rounded-lg p-2">
                {allSelectedDoc.map((doc) => {
                  return (
                    <div className="flex justify-between mb-1 p-2 ">
                      <div className="flex gap-2 text-center w-full ">
                        <Avtar
                          src={ICONS.greenCheckIcon.svg}
                          width="15px"
                          height="15px"
                        />
                        <span className="font-medium text-sm">{doc.title}</span>
                      </div>
                      <button
                        className="border border-solid border-gray-400 rounded px-2 py-1.5 bg-[#fff]"
                        onClick={() => deleteSelectedDoc(doc)}
                      >
                        <Avtar src={ICONS.cutIcon.svg} />
                      </button>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="p-10 flex justify-start flex-col gap-4 items-center bg-gray-100 rounded-lg h-full">
                <Avtar
                  src={ICONS.leftArrow.svg}
                  width={"100px"}
                  height={"100px"}
                />
                <p className="text-gray-500">
                  Select documents from the left panel to have employees review
                  them and provide a signature acknowledging review
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
