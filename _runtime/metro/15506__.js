// _runtime/metro/15506__.js
import _mod15486 from "15486__.js";
import _mod15507 from "15507__.js";

let tmp = _mod15486.process && _mod15486.process.versions;
if (!tmp) {
  tmp = _mod15486.Deno && _mod15486.Deno.version;
  const tmp2 = _mod15486.Deno && _mod15486.Deno.version;
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
  _module = _mod15507;
}
if (_module) {
  const match = _mod15507.match(/Edge\/(\d+)/);
  let tmp8 = !match;
  if (match) {
    tmp8 = match[1] >= 74;
  }
  _module = tmp8;
  tmp4 = match;
}
if (_module) {
  _module = _mod15507.match(/Chrome\/(\d+)/);
  tmp4 = _module;
}
if (_module) {
  tmp3 = +tmp4[1];
}

export default tmp3;
