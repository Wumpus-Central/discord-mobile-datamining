// _runtime/metro/16644__.js
import _mod16624 from "16624__.js";
import _mod16645 from "16645__.js";

let tmp = _mod16624.process && _mod16624.process.versions;
if (!tmp) {
  tmp = _mod16624.Deno && _mod16624.Deno.version;
  const tmp2 = _mod16624.Deno && _mod16624.Deno.version;
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
  _module = _mod16645;
}
if (_module) {
  const match = _mod16645.match(/Edge\/(\d+)/);
  let tmp8 = !match;
  if (match) {
    tmp8 = match[1] >= 74;
  }
  _module = tmp8;
  tmp4 = match;
}
if (_module) {
  _module = _mod16645.match(/Chrome\/(\d+)/);
  tmp4 = _module;
}
if (_module) {
  tmp3 = +tmp4[1];
}

export default tmp3;
