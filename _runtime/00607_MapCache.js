// === Module 607: MapCache ===

// Module 607 (MapCache)
import mapCacheClear from "mapCacheClear" /* 608 */;
import mapCacheDelete from "mapCacheDelete" /* 631 */;
import mapCacheGet from "mapCacheGet" /* 634 */;
import mapCacheHas from "mapCacheHas" /* 635 */;
import mapCacheSet from "mapCacheSet" /* 636 */;

class MapCache {
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
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype.delete = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

export default MapCache;