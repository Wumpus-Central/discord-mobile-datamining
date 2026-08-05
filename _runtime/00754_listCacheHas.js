// _runtime/00754_listCacheHas.js
import { assocIndexOf } from "00751_assocIndexOf.js";

export default function listCacheHas(arg0) {
  return assocIndexOf /* assocIndexOf */(this.__data__, arg0) > -1;
};