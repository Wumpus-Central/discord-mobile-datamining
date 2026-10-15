// _runtime/05231_baseAssign.js
import _mod531 from "metro/00531__.js";
import copyObject from "05223_copyObject.js";

export default function baseAssign(arg0, arg1) {
  let tmp = arg0;
  if (arg0) {
    tmp = copyObject(arg1, _mod531(arg1), arg0);
  }
  return tmp;
}
