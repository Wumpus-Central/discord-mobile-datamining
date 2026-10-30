// === Module 611: ListCache ===

// Module 611 (ListCache)
import listCacheClear from "listCacheClear" /* 612 */;
import listCacheDelete from "listCacheDelete" /* 613 */;
import listCacheGet from "listCacheGet" /* 616 */;
import listCacheHas from "listCacheHas" /* 617 */;
import listCacheSet from "listCacheSet" /* 618 */;

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