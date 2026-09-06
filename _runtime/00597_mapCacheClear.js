// === Module 597: mapCacheClear ===

// Module 597 (mapCacheClear)
import Hash from "Hash" /* 598 */;
import _mod611 from "module_611" /* 611 */;


export default function mapCacheClear() {
  const obj = { hash: new Hash(), map: null, string: null };
  let tmp4 = _mod611 || tmp(612);
  tmp4 = new tmp4();
  obj.map = tmp4;
  const tmp3 = new Hash();
  obj.string = new Hash();
  { size: 0 }.__data__ = obj;
};