// _runtime/04457_cloneDeep.js
import { baseClone } from "04458_baseClone.js";

export default function cloneDeep(arg0) {
  return baseClone(arg0, 5);
};