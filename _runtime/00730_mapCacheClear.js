// === Module 730: mapCacheClear ===

// Module 730 (mapCacheClear)
import Hash from "Hash" /* 731 */;
import getNative from "getNative" /* 744 */;


export default function mapCacheClear() {
  const obj = { hash: new Hash(), map: null, string: null };
  let tmp4 = getNative || tmp(745);
  tmp4 = new tmp4();
  obj[1] = tmp4;
  const tmp3 = new Hash();
  obj[2] = new Hash();
  { size: 0 }.__data__ = obj;
};