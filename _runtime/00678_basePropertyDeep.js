// _runtime/00678_basePropertyDeep.js
import baseGet from "00602_baseGet.js";

export default function basePropertyDeep(arg0) {
  closure_0 = arg0;
  return (arg0) => baseGet(arg0, closure_0);
}
