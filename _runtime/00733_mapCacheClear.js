// === Module 733: mapCacheClear ===

// Module 733 (mapCacheClear)

export default function mapCacheClear() {
  const obj = { hash: null, map: null, string: null };
  obj[0] = new require(734) /* Hash */();
  let tmp4 = require(747) /* getNative */ || tmp(748);
  tmp4 = new tmp4();
  obj[1] = tmp4;
  const tmp3 = new require(734) /* Hash */();
  obj[2] = new require(734) /* Hash */();
  { size: 0 }.__data__ = obj;
};