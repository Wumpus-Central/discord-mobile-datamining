import { getValue } from "00738_getValue.js";
import { baseIsNative } from "00739_baseIsNative.js";
// _runtime/00737_getNative.js

export default function getNative(arg0, arg1) {
  const tmp = getValue /* getValue */(arg0, arg1);
  let tmp2;
  if (baseIsNative /* baseIsNative */(tmp)) {
    tmp2 = tmp;
  }
  return tmp2;
};