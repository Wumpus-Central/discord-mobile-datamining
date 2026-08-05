// _runtime/04397_cloneDeep.js
import { baseClone } from "04398_baseClone.js";

export default function cloneDeep(arg0) {
  return baseClone /* baseClone */(arg0, 5);
};