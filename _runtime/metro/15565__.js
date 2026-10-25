// === Module 15565: ? ===

// Module 15565
import _mod15545 from "module_15545" /* 15545 */;
import _mod15566 from "module_15566" /* 15566 */;

let tmp = _mod15545.process && _mod15545.process.versions;
if (!tmp) {
  tmp = _mod15545.Deno && _mod15545.Deno.version;
  const tmp2 = _mod15545.Deno && _mod15545.Deno.version;
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
  _module = _mod15566;
}
if (_module) {
  const match = _mod15566.match(/Edge\/(\d+)/);
  let tmp8 = !match;
  if (match) {
    tmp8 = match[1] >= 74;
  }
  _module = tmp8;
  tmp4 = match;
}
if (_module) {
  _module = _mod15566.match(/Chrome\/(\d+)/);
  tmp4 = _module;
}
if (_module) {
  tmp3 = +tmp4[1];
}

export default tmp3;