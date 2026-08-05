import { baseGet } from "00727_baseGet.js";
// _runtime/00726_get.js

export default function get(arg0, arg1, arg2) {
  let tmp;
  if (null != arg0) {
    tmp = baseGet /* baseGet */(arg0, arg1);
  }
  if (undefined === tmp) {
    tmp = arg2;
  }
  return tmp;
};