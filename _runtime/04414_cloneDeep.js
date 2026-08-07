// _runtime/04414_cloneDeep.js
import { baseClone } from "04415_baseClone.js";

export default function cloneDeep(arg0) {
  return baseClone(arg0, 5);
};