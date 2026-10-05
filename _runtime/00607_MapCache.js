// _runtime/00607_MapCache.js
import mapCacheClear from "00608_mapCacheClear.js";
import mapCacheDelete from "00631_mapCacheDelete.js";
import mapCacheGet from "00634_mapCacheGet.js";
import mapCacheHas from "00635_mapCacheHas.js";
import mapCacheSet from "00636_mapCacheSet.js";

class MapCache {
  constructor(arg0) {
    let num2;
    let num = 0;
    if (null != arg0) {
      num = arg0.length;
    }
    const self = this;
    this.clear();
    for (let num2 = 0; num2 < num; num2 = num2 + 1) {
      let tmp2 = arg0[num2];
      let result = self.set(tmp2[0], tmp2[1]);
    }
  }
}
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype.delete = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

export default MapCache;
