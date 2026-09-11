// _runtime/metro/14370__.js
import _mod14350 from "14350__.js";
import _mod14371 from "14371__.js";

let tmp = _mod14350.process && _mod14350.process.versions;
if (!tmp) {
  tmp = _mod14350.Deno && _mod14350.Deno.version;
  const tmp2 = _mod14350.Deno && _mod14350.Deno.version;
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
  _module = _mod14371;
}
if (_module) {
  const match = _mod14371.match(/Edge\/(\d+)/);
  let tmp8 = !match;
  if (match) {
    tmp8 = match[1] >= 74;
  }
  _module = tmp8;
  tmp4 = match;
}
if (_module) {
  _module = _mod14371.match(/Chrome\/(\d+)/);
  tmp4 = _module;
}
if (_module) {
  tmp3 = +tmp4[1];
}

export default tmp3;
