// === Module 596: mapCacheClear ===

// Module 596 (mapCacheClear)
import Hash from "Hash" /* 597 */;
import _mod610 from "module_610" /* 610 */;
import ListCache from "ListCache" /* 611 */;


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