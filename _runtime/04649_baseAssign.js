// _runtime/04649_baseAssign.js
import _mod531 from "metro/00531__.js";
import copyObject from "04641_copyObject.js";

export default function baseAssign(arg0, arg1) {
  let tmp = arg0;
  if (arg0) {
    tmp = copyObject(arg1, _mod531(arg1), arg0);
  }
  return tmp;
}
