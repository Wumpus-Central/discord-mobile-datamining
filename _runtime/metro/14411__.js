// _runtime/metro/14411__.js
import _mod14395 from "14395__.js";
import _mod14396 from "14396__.js";
import _mod14412 from "14412__.js";

let prop = _mod14395["__core-js_shared__"];
if (!prop) {
  prop = _mod14396("__core-js_shared__", {});
}
let versions = prop.versions;
if (!versions) {
  const items = [];
  prop.versions = items;
  versions = items;
}
let str2 = "global";
if (_mod14412) {
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
