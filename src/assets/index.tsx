import leftArrowSvg from "./leftArrow.svg";
import downArrowSvg from "./downArrow.svg";
import rightArrowSvg from "./rightArrow.svg";
import searchIconSvg from "./searchIcon.svg";
import cutIconSvg from "./cutIcon.svg";
import greenCheckIconSvg from "./greenCheckIcon.svg";

interface IconType {
  svg: string;
}

export const ICONS: { [key: string]: IconType } = {
  leftArrow: {
    svg: leftArrowSvg,
  },
  downArrow: {
    svg: downArrowSvg,
  },
  rightArrow: {
    svg: rightArrowSvg,
  },
  searchIcon: {
    svg: searchIconSvg,
  },
  cutIcon: {
    svg: cutIconSvg,
  },
  greenCheckIcon: {
    svg: greenCheckIconSvg,
  },
};
