// _runtime/05009_basePick.js
import hasIn from "00640_hasIn.js";

const require = globalThis.__r;
let _require;

export default function basePick(arg0, arg1) {
  let closure_0;
  _require = arg0;
  return require("basePickBy")(arg0, arg1, (arg0, arg1) => hasIn(closure_0, arg1));
}
