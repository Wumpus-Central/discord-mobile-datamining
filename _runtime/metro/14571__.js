// === Module 14571: ? ===

// Module 14571
import _mod14551 from "module_14551" /* 14551 */;
import _mod14572 from "module_14572" /* 14572 */;

let tmp = _mod14551.process && _mod14551.process.versions;
if (!tmp) {
  tmp = _mod14551.Deno && _mod14551.Deno.version;
  const tmp2 = _mod14551.Deno && _mod14551.Deno.version;
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
  _module = _mod14572;
}
if (_module) {
  const match = _mod14572.match(/Edge\/(\d+)/);
  let tmp8 = !match;
  if (match) {
    tmp8 = match[1] >= 74;
  }
  _module = tmp8;
  tmp4 = match;
}
if (_module) {
  _module = _mod14572.match(/Chrome\/(\d+)/);
  tmp4 = _module;
}
if (_module) {
  tmp3 = +tmp4[1];
}

export default tmp3;