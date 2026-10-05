// _runtime/17864_capitalize.js
import toString from "00637_toString.js";
import createCaseFirst from "17865_createCaseFirst.js";

export default function capitalize(arg0) {
  const tmp = createCaseFirst;
  const str = toString(arg0);
  return tmp(str.toLowerCase());
}
