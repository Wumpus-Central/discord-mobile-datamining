// _runtime/00733_mapCacheClear.js
import { Hash } from "00734_Hash.js";
import { getNative } from "00747_getNative.js";

export default function mapCacheClear() {
  const obj = { hash: null, map: null, string: null };
  obj[0] = new Hash /* Hash */();
  let tmp4 = getNative /* getNative */ || tmp(748);
  tmp4 = new tmp4();
  obj[1] = tmp4;
  const tmp3 = new Hash /* Hash */();
  obj[2] = new Hash /* Hash */();
  { size: 0 }.__data__ = obj;
};