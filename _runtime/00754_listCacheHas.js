// _runtime/00754_listCacheHas.js
import assocIndexOf from "assocIndexOf" /* 751 */;


export default function listCacheHas(arg0) {
  return assocIndexOf(this.__data__, arg0) > -1;
};