// _runtime/00596_mapCacheClear.js
import Hash from "00597_Hash.js";
import _mod610 from "metro/00610__.js";
import ListCache from "00611_ListCache.js";


export default function mapCacheClear() {
  const obj = { hash: new Hash(), map: null, string: null };
  const tmp3 = new Hash();
  const tmp4 = _mod610 || ListCache;
  obj.map = new _mod610 || ListCache();
  const tmp42 = new _mod610 || ListCache();
  obj.string = new Hash();
  { size: 0 }.__data__ = obj;
  const tmp6 = new Hash();
};