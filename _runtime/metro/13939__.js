// === Module 13939: ? ===

// Module 13939
import _mod13919 from "module_13919" /* 13919 */;
import _mod13940 from "module_13940" /* 13940 */;

let tmp = _mod13919.process && _mod13919.process.versions;
if (!tmp) {
  tmp = _mod13919.Deno && _mod13919.Deno.version;
  const tmp2 = _mod13919.Deno && _mod13919.Deno.version;
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
  _module = _mod13940;
}
if (_module) {
  const match = _mod13940.match(/Edge\/(\d+)/);
  let tmp8 = !match;
  if (match) {
    tmp8 = match[1] >= 74;
  }
  _module = tmp8;
  tmp4 = match;
  const str3 = _mod13940;
}
if (_module) {
  _module = _mod13940.match(/Chrome\/(\d+)/);
  tmp4 = _module;
  const str4 = _mod13940;
}
if (_module) {
  tmp3 = +tmp4[1];
}

export default tmp3;