// _runtime/metro/16402__.js
import _mod16386 from "16386__.js";
import _mod16387 from "16387__.js";
import _mod16403 from "16403__.js";

let prop = _mod16386["__core-js_shared__"];
if (!prop) {
  prop = _mod16387("__core-js_shared__", {});
}
let versions = prop.versions;
if (!versions) {
  const items = [];
  prop.versions = items;
  versions = items;
}
let str2 = "global";
if (_mod16403) {
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
