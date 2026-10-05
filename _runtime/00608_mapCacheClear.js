// _runtime/00608_mapCacheClear.js
import Hash from "00609_Hash.js";
import getNative from "00622_getNative.js";
import ListCache from "00623_ListCache.js";

export default function mapCacheClear() {
  let tmp4;
  const obj = { hash: new Hash(), map: new tmp4(), string: new Hash() };
  new Hash();
  tmp4 = getNative || ListCache;
  new tmp4();
  ({ size: 0 }).__data__ = obj;
  new Hash();
}
