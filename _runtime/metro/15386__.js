// _runtime/metro/15386__.js
import _mod15370 from "15370__.js";
import _mod15371 from "15371__.js";
import _mod15387 from "15387__.js";

let prop = _mod15370["__core-js_shared__"];
if (!prop) {
  prop = _mod15371("__core-js_shared__", {});
}
let versions = prop.versions;
if (!versions) {
  const items = [];
  prop.versions = items;
  versions = items;
}
let str2 = "global";
if (_mod15387) {
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
