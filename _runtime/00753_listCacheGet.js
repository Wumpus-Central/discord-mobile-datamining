// _runtime/00753_listCacheGet.js
import { assocIndexOf } from "00751_assocIndexOf.js";

export default function listCacheGet(arg0) {
  const __data__ = this.__data__;
  const tmp = assocIndexOf /* assocIndexOf */(__data__, arg0);
  let tmp2;
  if (tmp >= 0) {
    tmp2 = __data__[tmp][1];
  }
  return tmp2;
};