// _runtime/metro/00590__.js
import baseGet from "../00591_baseGet.js";

export default function get(arg0, arg1, arg2) {
  let tmp;
  if (null != arg0) {
    tmp = baseGet(arg0, arg1);
  }
  if (undefined === tmp) {
    tmp = arg2;
  }
  return tmp;
}
