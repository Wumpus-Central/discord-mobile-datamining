// _runtime/00629_listCacheHas.js
import assocIndexOf from "00626_assocIndexOf.js";

export default function listCacheHas(arg0) {
  return assocIndexOf(this.__data__, arg0) > -1;
}
