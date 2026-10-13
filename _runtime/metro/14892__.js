// _runtime/metro/14892__.js
import _mod14872 from "14872__.js";
import _mod14893 from "14893__.js";

let tmp = _mod14872.process && _mod14872.process.versions;
if (!tmp) {
  tmp = _mod14872.Deno && _mod14872.Deno.version;
  const tmp2 = _mod14872.Deno && _mod14872.Deno.version;
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
  _module = _mod14893;
}
if (_module) {
  const match = _mod14893.match(/Edge\/(\d+)/);
  let tmp8 = !match;
  if (match) {
    tmp8 = match[1] >= 74;
  }
  _module = tmp8;
  tmp4 = match;
}
if (_module) {
  _module = _mod14893.match(/Chrome\/(\d+)/);
  tmp4 = _module;
}
if (_module) {
  tmp3 = +tmp4[1];
}

export default tmp3;
