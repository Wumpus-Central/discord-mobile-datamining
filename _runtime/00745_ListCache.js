// _runtime/00745_ListCache.js
import listCacheClear from "00746_listCacheClear.js";
import listCacheDelete from "00747_listCacheDelete.js";
import listCacheGet from "00750_listCacheGet.js";
import listCacheHas from "00751_listCacheHas.js";
import listCacheSet from "00752_listCacheSet.js";

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
