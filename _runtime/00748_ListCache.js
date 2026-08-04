// _runtime/00748_ListCache.js
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
ListCache.prototype.clear = require("listCacheClear");
ListCache.prototype.delete = require("listCacheDelete");
ListCache.prototype.get = require("listCacheGet");
ListCache.prototype.has = require("listCacheHas");
ListCache.prototype.set = require("listCacheSet");

export default ListCache;