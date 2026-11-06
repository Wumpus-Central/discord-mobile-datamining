// _runtime/metro/16399__.js
import _mod16383 from "16383__.js";
import _mod16384 from "16384__.js";
import _mod16400 from "16400__.js";

let prop = _mod16383["__core-js_shared__"];
if (!prop) {
  prop = _mod16384("__core-js_shared__", {});
}
let versions = prop.versions;
if (!versions) {
  const items = [];
  prop.versions = items;
  versions = items;
}
let str2 = "global";
if (_mod16400) {
  str2 = "pure";
}
versions.push({
  version: "3.41.0",
  mode: str2,
  copyright: "\u00A9 2014-2025 Denis Pushkarev (zloirock.ru)",
  license: "https://github.com/zloirock/core-js/blob/v3.41.0/LICENSE",
  source: "https://github.com/zloirock/core-js",
});

export default prop;
