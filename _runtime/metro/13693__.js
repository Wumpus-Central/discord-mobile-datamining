// === Module 13693: ? ===

// Module 13693
import _mod13673 from "module_13673" /* 13673 */;
import _mod13694 from "module_13694" /* 13694 */;

let tmp = _mod13673.process && _mod13673.process.versions;
if (!tmp) {
  tmp = _mod13673.Deno && _mod13673.Deno.version;
  const tmp2 = _mod13673.Deno && _mod13673.Deno.version;
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
  _module = _mod13694;
}
if (_module) {
  const match = _mod13694.match(/Edge\/(\d+)/);
  let tmp8 = !match;
  if (match) {
    tmp8 = match[1] >= 74;
  }
  _module = tmp8;
  tmp4 = match;
  const str3 = _mod13694;
}
if (_module) {
  _module = _mod13694.match(/Chrome\/(\d+)/);
  tmp4 = _module;
  const str4 = _mod13694;
}
if (_module) {
  tmp3 = +tmp4[1];
}

export default tmp3;