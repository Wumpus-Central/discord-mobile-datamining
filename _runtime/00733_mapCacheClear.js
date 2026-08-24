// _runtime/00733_mapCacheClear.js
import Hash from "00734_Hash.js";
import getNative from "00747_getNative.js";


export default function mapCacheClear() {
  const obj = { hash: new Hash(), map: null, string: null };
  let tmp4 = getNative || tmp(748);
  tmp4 = new tmp4();
  obj[1] = tmp4;
  const tmp3 = new Hash();
  obj[2] = new Hash();
  { size: 0 }.__data__ = obj;
};