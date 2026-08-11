// _runtime/metro/13601__.js
const tmp = require("module_13580").navigator && require("module_13580").navigator.userAgent;
let str = "";
if (tmp) {
  const _String = String;
  str = String(tmp);
}

export default str;