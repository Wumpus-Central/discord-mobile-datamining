// _runtime/00729_MapCache.js
import mapCacheClear from "00730_mapCacheClear.js";
import mapCacheDelete from "00753_mapCacheDelete.js";
import mapCacheGet from "00756_mapCacheGet.js";
import mapCacheHas from "00757_mapCacheHas.js";
import mapCacheSet from "00758_mapCacheSet.js";

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
