// _runtime/00612_ListCache.js
import listCacheClear from "00613_listCacheClear.js";
import listCacheDelete from "00614_listCacheDelete.js";
import listCacheGet from "00617_listCacheGet.js";
import listCacheHas from "00618_listCacheHas.js";
import listCacheSet from "00619_listCacheSet.js";

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
      result = self.set(tmp2[0], tmp2[1]);
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
