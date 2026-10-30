// _runtime/00666_basePropertyDeep.js
import baseGet from "00590_baseGet.js";

export default function basePropertyDeep(arg0) {
  closure_0 = arg0;
  return (arg0) => baseGet(arg0, closure_0);
}
