// === Module 733: mapCacheClear ===

// Module 733 (mapCacheClear)
import Hash from "Hash" /* 734 */;
import getNative from "getNative" /* 747 */;
import ListCache from "ListCache" /* 748 */;


export default function mapCacheClear() {
  const obj = { hash: new Hash(), map: null, string: null };
  let tmp4 = getNative || ListCache;
  tmp4 = new tmp4();
  obj[1] = tmp4;
  const tmp3 = new Hash();
  obj[2] = new Hash();
  { size: 0 }.__data__ = obj;
  const tmp6 = new Hash();
};