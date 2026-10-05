// === Module 637: toString ===

// Module 637 (toString)
import baseToString from "baseToString" /* 638 */;


export default function toString(arg0) {
  let str = "";
  if (null != arg0) {
    str = baseToString(arg0);
  }
  return str;
};