// === Module 625: listCacheDelete ===

// Module 625 (listCacheDelete)
import assocIndexOf from "assocIndexOf" /* 626 */;


export default function listCacheDelete(arg0) {
  const self = this;
  const __data__ = this.__data__;
  const tmp = assocIndexOf(__data__, arg0);
  let flag = tmp >= 0;
  if (flag) {
    if (tmp == __data__.length - 1) {
      __data__.pop();
    } else {
      splice.call(__data__, tmp, 1);
    }
    self.size = self.size - 1;
    flag = true;
  }
  return flag;
};