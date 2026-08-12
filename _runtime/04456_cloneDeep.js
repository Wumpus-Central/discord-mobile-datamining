// _runtime/04456_cloneDeep.js
import { baseClone } from "04457_baseClone.js";

export default function cloneDeep(arg0) {
  return baseClone(arg0, 5);
};