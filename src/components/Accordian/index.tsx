import { useMemo, useState } from "react";
import { ICONS } from "../../assets";
import Avtar from "../Avtar";
import ToggleButton from "../SwitchButton";

interface propsSummery {
  id: string;
  title: string;
}

interface propsAccordion {
  accordianData: { id: string; title: string; summery: propsSummery[] }[];
  handleSelectedDoc: (e: propsSummery) => void;
}

export default function AccordionComponent({
  accordianData,
  handleSelectedDoc,
}: propsAccordion) {
  const [openIndex, setOpenIndex] = useState<string | null>(null);
  const toggleItem = (id: string) => {
    setOpenIndex((prevIndex: string | null) => (prevIndex === id ? null : id));
  };
  const totalDoc = useMemo(() => {
    return accordianData.reduce((cum, item) => cum + item.summery.length, 0);
  }, [accordianData]);

  return (
    <>
      <div className="flex px-1.5 py-2 justify-between mb-4">
        <span className="text-sm font-medium">
          {totalDoc} Available Documents
        </span>
        <div className="flex gap-3 text-center">
          <ToggleButton />
          <span className="text-base font-medium text-gray-600">
            Select All
          </span>
        </div>
      </div>
      <div className=" border border-solid border-orange-500 rounded-lg mx-auto  bg-white min-h-sceen">
        <div className="mx-auto ">
          {accordianData.map((item) => {
            return (
              <div className="py-4 border-b-2 border-gray-300 border-solid">
                <details className="group ">
                  <summary
                    className="flex px-5 justify-between items-center font-medium cursor-pointer list-none"
                    onClick={() => toggleItem(item.id)}
                  >
                    <span
                      className={`text-base font-medium ${
                        openIndex == item.id ? "text-gray-900" : "text-gray-600"
                      }`}
                    >
                      {item.title}
                    </span>
                    <div className="transition group-open:rotate-180">
                      <svg
                        fill="none"
                        height="24"
                        shape-rendering="geometricPrecision"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </div>
                  </summary>
                  {openIndex == item.id && (
                    <div className="border-t-2 border-solid border-gray-300 mt-4">
                      {item?.summery.map((subItem) => {
                        return (
                          <div className="py-3 px-5 flex text-center justify-between">
                            <span className="text-sm font-medium">
                              {subItem.title}
                            </span>
                            <span>
                              <button
                                className="border border-solid border-gray-400 rounded p-1 bg-[#fff]"
                                onClick={() => handleSelectedDoc(subItem)}
                              >
                                <Avtar src={ICONS.rightArrow.svg} />
                              </button>
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </details>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
