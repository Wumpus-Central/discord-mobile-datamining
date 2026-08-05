// _runtime/04367_cloneDeep.js
import { baseClone } from "04368_baseClone.js";

export default function cloneDeep(arg0) {
  return baseClone(arg0, 5);
};