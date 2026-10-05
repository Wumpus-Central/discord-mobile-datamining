// === Module 5003: basePick ===

// Module 5003 (basePick)
import hasIn from "hasIn" /* 640 */;

const require = globalThis.__r;
let _require;


export default function basePick(arg0, arg1) {
  let closure_0;
  _require = arg0;
  return require("basePickBy")(arg0, arg1, (arg0, arg1) => hasIn(closure_0, arg1));
};