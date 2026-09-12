// _runtime/metro/14401__.js
import _mod14385 from "14385__.js";
import _mod14386 from "14386__.js";
import _mod14402 from "14402__.js";

let prop = _mod14385["__core-js_shared__"];
if (!prop) {
  prop = _mod14386("__core-js_shared__", {});
}
let versions = prop.versions;
if (!versions) {
  const items = [];
  prop.versions = items;
  versions = items;
}
let str2 = "global";
if (_mod14402) {
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
