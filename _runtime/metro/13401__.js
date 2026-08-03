let tmp = require("module_13381").process && require("module_13381").process.versions;
if (!tmp) {
  tmp = require("module_13381").Deno && require("module_13381").Deno.version;
  const tmp2 = require("module_13381").Deno && require("module_13381").Deno.version;
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
  _module = require("module_13402");
}
if (_module) {
  const match = require("module_13402").match(/Edge\/(\d+)/);
  let tmp8 = !match;
  if (match) {
    tmp8 = match[1] >= 74;
  }
  _module = tmp8;
  tmp4 = match;
  const str3 = require("module_13402");
}
if (_module) {
  _module = require("module_13402").match(/Chrome\/(\d+)/);
  tmp4 = _module;
  const str4 = require("module_13402");
}
if (_module) {
  tmp3 = +tmp4[1];
}

export default tmp3;