// === Module 617: listCacheHas ===

// Module 617 (listCacheHas)
import assocIndexOf from "assocIndexOf" /* 614 */;


export default function listCacheHas(arg0) {
  return assocIndexOf(this.__data__, arg0) > -1;
};