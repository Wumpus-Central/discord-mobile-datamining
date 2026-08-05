import { hasPath } from "00766_hasPath.js";
import { baseHasIn } from "00767_baseHasIn.js";
// _runtime/00765_hasIn.js

export default function hasIn(arg0, arg1) {
  let tmp = null != arg0;
  if (tmp) {
    tmp = hasPath /* hasPath */(arg0, arg1, baseHasIn /* baseHasIn */);
    const tmp5 = hasPath /* hasPath */;
  }
  return tmp;
};