// _runtime/00618_listCacheHas.js
import assocIndexOf from "00615_assocIndexOf.js";

export default function listCacheHas(arg0) {
  return assocIndexOf(this.__data__, arg0) > -1;
}
