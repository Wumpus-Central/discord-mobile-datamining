// _runtime/00597_mapCacheClear.js
import Hash from "00598_Hash.js";
import _mod611 from "metro/00611__.js";
import ListCache from "00612_ListCache.js";


export default function mapCacheClear() {
  const obj = { hash: new Hash(), map: null, string: null };
  let tmp4 = _mod611 || ListCache;
  tmp4 = new tmp4();
  obj.map = tmp4;
  const tmp3 = new Hash();
  obj.string = new Hash();
  { size: 0 }.__data__ = obj;
  const tmp6 = new Hash();
};