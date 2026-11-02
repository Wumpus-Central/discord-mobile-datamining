// === Module 16148: ? ===

// Module 16148
import _mod16128 from "module_16128" /* 16128 */;
import _mod16149 from "module_16149" /* 16149 */;

let tmp = _mod16128.process && _mod16128.process.versions;
if (!tmp) {
  tmp = _mod16128.Deno && _mod16128.Deno.version;
  const tmp2 = _mod16128.Deno && _mod16128.Deno.version;
}
let str = tmp;
if (tmp) {
  str = tmp.v8;
}
let tmp3;
if (str) {
  const parts = str.split(".");
  if (parts[0] <= 0) {
    let num3 = +parts[0] + parts[1];
  } else {
    num3 = 1;
  }
  tmp3 = num3;
  let tmp4 = parts;
}
let _module = !tmp3;
if (!tmp3) {
  _module = _mod16149;
}
if (_module) {
  const match = _mod16149.match(/Edge\/(\d+)/);
  let tmp8 = !match;
  if (match) {
    tmp8 = match[1] >= 74;
  }
  _module = tmp8;
  tmp4 = match;
}
if (_module) {
  _module = _mod16149.match(/Chrome\/(\d+)/);
  tmp4 = _module;
}
if (_module) {
  tmp3 = +tmp4[1];
}

export default tmp3;