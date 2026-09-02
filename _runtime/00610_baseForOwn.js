// _runtime/00610_baseForOwn.js
import createBaseFor from "00611_createBaseFor.js";
import keys from "00613_keys.js";

export default function baseForOwn(arg0, arg1) {
  let tmp = arg0;
  if (arg0) {
    tmp = createBaseFor(arg0, arg1, keys);
    const tmp5 = createBaseFor;
  }
  return tmp;
}
