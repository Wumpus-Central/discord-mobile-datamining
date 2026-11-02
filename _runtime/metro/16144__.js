// _runtime/metro/16144__.js
import _mod16128 from "16128__.js";
import _mod16129 from "16129__.js";
import _mod16145 from "16145__.js";

let prop = _mod16128["__core-js_shared__"];
if (!prop) {
  prop = _mod16129("__core-js_shared__", {});
}
let versions = prop.versions;
if (!versions) {
  const items = [];
  prop.versions = items;
  versions = items;
}
let str2 = "global";
if (_mod16145) {
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
