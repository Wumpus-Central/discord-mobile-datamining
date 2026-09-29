// === Module 13977: ? ===

// Module 13977
import _mod13957 from "module_13957" /* 13957 */;
import _mod13978 from "module_13978" /* 13978 */;

let tmp = _mod13957.process && _mod13957.process.versions;
if (!tmp) {
  tmp = _mod13957.Deno && _mod13957.Deno.version;
  const tmp2 = _mod13957.Deno && _mod13957.Deno.version;
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
  _module = _mod13978;
}
if (_module) {
  const match = _mod13978.match(/Edge\/(\d+)/);
  let tmp8 = !match;
  if (match) {
    tmp8 = match[1] >= 74;
  }
  _module = tmp8;
  tmp4 = match;
}
if (_module) {
  _module = _mod13978.match(/Chrome\/(\d+)/);
  tmp4 = _module;
}
if (_module) {
  tmp3 = +tmp4[1];
}

export default tmp3;