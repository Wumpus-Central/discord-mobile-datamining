// === Module 14211: ? ===

// Module 14211
import _mod14191 from "module_14191" /* 14191 */;
import _mod14212 from "module_14212" /* 14212 */;

let tmp = _mod14191.process && _mod14191.process.versions;
if (!tmp) {
  tmp = _mod14191.Deno && _mod14191.Deno.version;
  const tmp2 = _mod14191.Deno && _mod14191.Deno.version;
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
  _module = _mod14212;
}
if (_module) {
  const match = _mod14212.match(/Edge\/(\d+)/);
  let tmp8 = !match;
  if (match) {
    tmp8 = match[1] >= 74;
  }
  _module = tmp8;
  tmp4 = match;
  const str3 = _mod14212;
}
if (_module) {
  _module = _mod14212.match(/Chrome\/(\d+)/);
  tmp4 = _module;
  const str4 = _mod14212;
}
if (_module) {
  tmp3 = +tmp4[1];
}

export default tmp3;