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
MapCache.prototype.clear = require("mapCacheClear");
MapCache.prototype.delete = require("mapCacheDelete");
MapCache.prototype.get = require("mapCacheGet");
MapCache.prototype.has = require("mapCacheHas");
MapCache.prototype.set = require("mapCacheSet");

export default MapCache;