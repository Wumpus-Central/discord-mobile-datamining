// === Module 14930: ? ===

// Module 14930
import _mod14910 from "module_14910" /* 14910 */;
import _mod14931 from "module_14931" /* 14931 */;

let tmp = _mod14910.process && _mod14910.process.versions;
if (!tmp) {
  tmp = _mod14910.Deno && _mod14910.Deno.version;
  const tmp2 = _mod14910.Deno && _mod14910.Deno.version;
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
  _module = _mod14931;
}
if (_module) {
  const match = _mod14931.match(/Edge\/(\d+)/);
  let tmp8 = !match;
  if (match) {
    tmp8 = match[1] >= 74;
  }
  _module = tmp8;
  tmp4 = match;
}
if (_module) {
  _module = _mod14931.match(/Chrome\/(\d+)/);
  tmp4 = _module;
}
if (_module) {
  tmp3 = +tmp4[1];
}

export default tmp3;