// _runtime/metro/15597__.js
import _mod15581 from "15581__.js";
import _mod15582 from "15582__.js";
import _mod15598 from "15598__.js";

let prop = _mod15581["__core-js_shared__"];
if (!prop) {
  prop = _mod15582("__core-js_shared__", {});
}
let versions = prop.versions;
if (!versions) {
  const items = [];
  prop.versions = items;
  versions = items;
}
let str2 = "global";
if (_mod15598) {
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
