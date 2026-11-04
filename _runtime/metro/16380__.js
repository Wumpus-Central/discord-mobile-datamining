// === Module 16380: ? ===

// Module 16380
import _mod16360 from "module_16360" /* 16360 */;
import _mod16381 from "module_16381" /* 16381 */;

let tmp = _mod16360.process && _mod16360.process.versions;
if (!tmp) {
  tmp = _mod16360.Deno && _mod16360.Deno.version;
  const tmp2 = _mod16360.Deno && _mod16360.Deno.version;
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
  _module = _mod16381;
}
if (_module) {
  const match = _mod16381.match(/Edge\/(\d+)/);
  let tmp8 = !match;
  if (match) {
    tmp8 = match[1] >= 74;
  }
  _module = tmp8;
  tmp4 = match;
}
if (_module) {
  _module = _mod16381.match(/Chrome\/(\d+)/);
  tmp4 = _module;
}
if (_module) {
  tmp3 = +tmp4[1];
}

export default tmp3;