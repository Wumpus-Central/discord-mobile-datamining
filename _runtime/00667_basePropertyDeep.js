// _runtime/00667_basePropertyDeep.js
import baseGet from "00591_baseGet.js";

export default function basePropertyDeep(arg0) {
  closure_0 = arg0;
  return (arg0) => baseGet(arg0, closure_0);
}
