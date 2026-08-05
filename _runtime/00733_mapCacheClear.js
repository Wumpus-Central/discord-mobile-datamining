// _runtime/00733_mapCacheClear.js

export default function mapCacheClear() {
  const obj = { hash: null, map: null, string: null };
  obj[0] = new require("00734_Hash.js") /* Hash */();
  let tmp4 = require("00747_getNative.js") /* getNative */ || tmp(748);
  tmp4 = new tmp4();
  obj[1] = tmp4;
  const tmp3 = new require("00734_Hash.js") /* Hash */();
  obj[2] = new require("00734_Hash.js") /* Hash */();
  { size: 0 }.__data__ = obj;
};