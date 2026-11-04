// _runtime/metro/16389__.js
import _mod16373 from "16373__.js";
import _mod16374 from "16374__.js";
import _mod16390 from "16390__.js";

let prop = _mod16373["__core-js_shared__"];
if (!prop) {
  prop = _mod16374("__core-js_shared__", {});
}
let versions = prop.versions;
if (!versions) {
  const items = [];
  prop.versions = items;
  versions = items;
}
let str2 = "global";
if (_mod16390) {
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
