// _runtime/04416_cloneDeep.js
import { baseClone } from "04417_baseClone.js";

export default function cloneDeep(arg0) {
  return baseClone(arg0, 5);
};