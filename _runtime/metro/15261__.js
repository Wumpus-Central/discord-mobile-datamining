// _runtime/metro/15261__.js
import _mod15241 from "15241__.js";
import _mod15262 from "15262__.js";

let tmp = _mod15241.process && _mod15241.process.versions;
if (!tmp) {
  tmp = _mod15241.Deno && _mod15241.Deno.version;
  const tmp2 = _mod15241.Deno && _mod15241.Deno.version;
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
  _module = _mod15262;
}
if (_module) {
  const match = _mod15262.match(/Edge\/(\d+)/);
  let tmp8 = !match;
  if (match) {
    tmp8 = match[1] >= 74;
  }
  _module = tmp8;
  tmp4 = match;
}
if (_module) {
  _module = _mod15262.match(/Chrome\/(\d+)/);
  tmp4 = _module;
}
if (_module) {
  tmp3 = +tmp4[1];
}

export default tmp3;
