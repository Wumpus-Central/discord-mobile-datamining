// _runtime/00617_listCacheHas.js
import assocIndexOf from "00614_assocIndexOf.js";

export default function listCacheHas(arg0) {
  return assocIndexOf(this.__data__, arg0) > -1;
}
