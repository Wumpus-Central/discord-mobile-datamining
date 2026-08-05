// _runtime/00762_toString.js

export default function toString(arg0) {
  let str = "";
  if (null != arg0) {
    str = require("00763_toString.js") /* toString */(arg0);
  }
  return str;
};