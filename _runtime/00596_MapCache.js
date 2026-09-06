// === Module 596: MapCache ===

// Module 596 (MapCache)
import mapCacheClear from "mapCacheClear" /* 597 */;
import mapCacheDelete from "mapCacheDelete" /* 620 */;
import mapCacheGet from "mapCacheGet" /* 623 */;
import mapCacheHas from "mapCacheHas" /* 624 */;
import mapCacheSet from "mapCacheSet" /* 625 */;

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
      result = require("mapCacheClear");
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