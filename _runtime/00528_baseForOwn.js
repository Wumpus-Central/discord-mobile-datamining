// _runtime/00528_baseForOwn.js
import createBaseFor from "00529_createBaseFor.js";
import _mod531 from "metro/00531__.js";

export default function baseForOwn(arg0, arg1) {
  let tmp = arg0;
  if (tmp) {
    const tmp5 = createBaseFor;
    tmp = tmp5(arg0, arg1, _mod531);
  }
  return tmp;
}
