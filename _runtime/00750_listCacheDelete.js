// === Module 750: listCacheDelete ===

// Module 750 (listCacheDelete)

export default function listCacheDelete(arg0) {
  const self = this;
  const __data__ = this.__data__;
  const tmp = require(751) /* assocIndexOf */(__data__, arg0);
  if (!tmp >= 0) {
    return tmp2;
  } else {
    if (tmp == __data__.length - 1) {
      __data__.pop();
      let diff = self.size - 1;
      self.size = diff;
    } else {
      diff = splice;
      const call = splice.call;
      if (typeof call !== "unknown") {
        call(__data__, tmp, 1);
      }
    }
    diff(tmp, 1);
  }
};