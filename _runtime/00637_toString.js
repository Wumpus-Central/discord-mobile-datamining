// _runtime/00637_toString.js
import baseToString from "00638_baseToString.js";

export default function toString(arg0) {
  let str = "";
  if (null != arg0) {
    str = baseToString(arg0);
  }
  return str;
}
