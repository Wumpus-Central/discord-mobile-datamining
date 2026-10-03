// _runtime/00608_mapCacheClear.js
import Hash from "00609_Hash.js";
import _mod622 from "metro/00622__.js";
import ListCache from "00623_ListCache.js";


export default function mapCacheClear() {
  const obj = { hash: new Hash(), map: null, string: null };
  const tmp3 = new Hash();
  const tmp4 = _mod622 || ListCache;
  obj.map = new _mod622 || ListCache();
  const tmp42 = new _mod622 || ListCache();
  obj.string = new Hash();
  { size: 0 }.__data__ = obj;
  const tmp6 = new Hash();
};