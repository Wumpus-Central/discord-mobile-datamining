// === Module 608: mapCacheClear ===

// Module 608 (mapCacheClear)
import Hash from "Hash" /* 609 */;
import _mod622 from "module_622" /* 622 */;
import ListCache from "ListCache" /* 623 */;


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