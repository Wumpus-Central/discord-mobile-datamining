// _runtime/00762_toString.js
import toString from "toString" /* 763 */;


export default function toString(arg0) {
  let str = "";
  if (null != arg0) {
    str = toString(arg0);
  }
  return str;
};