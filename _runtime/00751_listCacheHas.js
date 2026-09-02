// === Module 751: listCacheHas ===

// Module 751 (listCacheHas)
import assocIndexOf from "assocIndexOf" /* 748 */;


export default function listCacheHas(arg0) {
  return assocIndexOf(this.__data__, arg0) > -1;
};