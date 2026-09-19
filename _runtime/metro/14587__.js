// _runtime/metro/14587__.js
import _mod14571 from "14571__.js";
import _mod14572 from "14572__.js";
import _mod14588 from "14588__.js";

let prop = _mod14571["__core-js_shared__"];
if (!prop) {
  prop = _mod14572("__core-js_shared__", {});
}
let versions = prop.versions;
if (!versions) {
  const items = [];
  prop.versions = items;
  versions = items;
}
let str2 = "global";
if (_mod14588) {
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
