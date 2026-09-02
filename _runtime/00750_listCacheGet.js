// === Module 750: listCacheGet ===

// Module 750 (listCacheGet)
import assocIndexOf from "assocIndexOf" /* 748 */;


export default function listCacheGet(arg0) {
  const __data__ = this.__data__;
  const tmp = assocIndexOf(__data__, arg0);
  let tmp2;
  if (tmp >= 0) {
    tmp2 = __data__[tmp][1];
  }
  return tmp2;
};