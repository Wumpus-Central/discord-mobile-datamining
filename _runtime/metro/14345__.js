// _runtime/metro/14345__.js
import _mod14325 from "14325__.js";
import _mod14346 from "14346__.js";

let tmp = _mod14325.process && _mod14325.process.versions;
if (!tmp) {
  tmp = _mod14325.Deno && _mod14325.Deno.version;
  const tmp2 = _mod14325.Deno && _mod14325.Deno.version;
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
  _module = _mod14346;
}
if (_module) {
  const match = _mod14346.match(/Edge\/(\d+)/);
  let tmp8 = !match;
  if (match) {
    tmp8 = match[1] >= 74;
  }
  _module = tmp8;
  tmp4 = match;
}
if (_module) {
  _module = _mod14346.match(/Chrome\/(\d+)/);
  tmp4 = _module;
}
if (_module) {
  tmp3 = +tmp4[1];
}

export default tmp3;
