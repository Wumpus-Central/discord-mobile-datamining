// _runtime/00751_listCacheHas.js
import assocIndexOf from "00748_assocIndexOf.js";

export default function listCacheHas(arg0) {
  return assocIndexOf(this.__data__, arg0) > -1;
}
