// _runtime/04585_cloneDeep.js
import { baseClone } from "04586_baseClone.js";

export default function cloneDeep(arg0) {
  return baseClone(arg0, 5);
};