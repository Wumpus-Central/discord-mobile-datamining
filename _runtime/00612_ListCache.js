// === Module 612: ListCache ===

// Module 612 (ListCache)
import listCacheClear from "listCacheClear" /* 613 */;
import listCacheDelete from "listCacheDelete" /* 614 */;
import listCacheGet from "listCacheGet" /* 617 */;
import listCacheHas from "listCacheHas" /* 618 */;
import listCacheSet from "listCacheSet" /* 619 */;

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