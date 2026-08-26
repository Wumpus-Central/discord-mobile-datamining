// _runtime/metro/13859__.js
import _mod13839 from "13839__.js";
import _mod13860 from "13860__.js";

let tmp = _mod13839.process && _mod13839.process.versions;
if (!tmp) {
  tmp = _mod13839.Deno && _mod13839.Deno.version;
  const tmp2 = _mod13839.Deno && _mod13839.Deno.version;
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
  _module = _mod13860;
}
if (_module) {
  const match = _mod13860.match(/Edge\/(\d+)/);
  let tmp8 = !match;
  if (match) {
    tmp8 = match[1] >= 74;
  }
  _module = tmp8;
  tmp4 = match;
  const str3 = _mod13860;
}
if (_module) {
  _module = _mod13860.match(/Chrome\/(\d+)/);
  tmp4 = _module;
  const str4 = _mod13860;
}
if (_module) {
  tmp3 = +tmp4[1];
}

export default tmp3;