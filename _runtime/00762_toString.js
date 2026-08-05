import { toString } from "00763_toString.js";
// _runtime/00762_toString.js

export default function toString(arg0) {
  let str = "";
  if (null != arg0) {
    str = toString /* toString */(arg0);
  }
  return str;
};