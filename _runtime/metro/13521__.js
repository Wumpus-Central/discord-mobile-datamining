// _runtime/metro/13521__.js
const tmp = require("module_13500").navigator && require("module_13500").navigator.userAgent;
let str = "";
if (tmp) {
  const _String = String;
  str = String(tmp);
}

export default str;