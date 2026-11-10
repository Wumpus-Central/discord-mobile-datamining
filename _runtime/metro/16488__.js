// === Module 16488: ? ===

// Module 16488
import _mod16468 from "module_16468" /* 16468 */;
import _mod16489 from "module_16489" /* 16489 */;

let tmp = _mod16468.process && _mod16468.process.versions;
if (!tmp) {
  tmp = _mod16468.Deno && _mod16468.Deno.version;
  const tmp2 = _mod16468.Deno && _mod16468.Deno.version;
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
  _module = _mod16489;
}
if (_module) {
  const match = _mod16489.match(/Edge\/(\d+)/);
  let tmp8 = !match;
  if (match) {
    tmp8 = match[1] >= 74;
  }
  _module = tmp8;
  tmp4 = match;
}
if (_module) {
  _module = _mod16489.match(/Chrome\/(\d+)/);
  tmp4 = _module;
}
if (_module) {
  tmp3 = +tmp4[1];
}

export default tmp3;