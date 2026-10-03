// === Module 601: ? ===

// Module 601
import baseGet from "baseGet" /* 602 */;


export default function get(arg0, arg1, arg2) {
  let tmp;
  if (null != arg0) {
    tmp = baseGet(arg0, arg1);
  }
  if (undefined === tmp) {
    tmp = arg2;
  }
  return tmp;
};