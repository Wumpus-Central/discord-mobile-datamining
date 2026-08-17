// _runtime/00748_ListCache.js
import listCacheClear from "00749_listCacheClear.js";
import listCacheDelete from "00750_listCacheDelete.js";
import listCacheGet from "00753_listCacheGet.js";
import listCacheHas from "00754_listCacheHas.js";
import listCacheSet from "00755_listCacheSet.js";

class ListCache {
  constructor(arg0) {
    num = 0;
    if (null != global) {
      num = global.length;
    }
    self = this;
    clearResult = this.clear();
    for (let num2 = 0; num2 < num; num2 = num2 + 1) {
      tmp2 = global[num2];
      result = require("listCacheClear");
    }
    return;
  }
}
ListCache.prototype.clear = listCacheClear;
ListCache.prototype.delete = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

export default ListCache;