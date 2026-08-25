// _runtime/metro/13786__.js
import _mod13766 from "13766__.js";
import _mod13787 from "13787__.js";

let tmp = _mod13766.process && _mod13766.process.versions;
if (!tmp) {
  tmp = _mod13766.Deno && _mod13766.Deno.version;
  const tmp2 = _mod13766.Deno && _mod13766.Deno.version;
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
  _module = _mod13787;
}
if (_module) {
  const match = _mod13787.match(/Edge\/(\d+)/);
  let tmp8 = !match;
  if (match) {
    tmp8 = match[1] >= 74;
  }
  _module = tmp8;
  tmp4 = match;
  const str3 = _mod13787;
}
if (_module) {
  _module = _mod13787.match(/Chrome\/(\d+)/);
  tmp4 = _module;
  const str4 = _mod13787;
}
if (_module) {
  tmp3 = +tmp4[1];
}

export default tmp3;