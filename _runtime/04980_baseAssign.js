// _runtime/04980_baseAssign.js
import _mod531 from "metro/00531__.js";
import copyObject from "04972_copyObject.js";

export default function baseAssign(arg0, arg1) {
  let tmp = arg0;
  if (tmp) {
    const tmp5 = copyObject;
    tmp = tmp5(arg1, _mod531(arg1), arg0);
  }
  return tmp;
}
