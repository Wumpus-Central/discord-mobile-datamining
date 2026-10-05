// _runtime/00623_ListCache.js
import listCacheClear from "00624_listCacheClear.js";
import listCacheDelete from "00625_listCacheDelete.js";
import listCacheGet from "00628_listCacheGet.js";
import listCacheHas from "00629_listCacheHas.js";
import listCacheSet from "00630_listCacheSet.js";

class ListCache {
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
ListCache.prototype.clear = listCacheClear;
ListCache.prototype.delete = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

export default ListCache;
