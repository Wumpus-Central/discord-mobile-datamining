// _runtime/13443_all.js
import all from "all";

let _moduleResult = all(require("module_13381").WeakMap);
if (_moduleResult) {
  const _String = String;
  _moduleResult = /native code/.test(String(require("module_13381").WeakMap));
  const obj = /native code/;
}

export default _moduleResult;