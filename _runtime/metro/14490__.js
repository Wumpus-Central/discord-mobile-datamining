// _runtime/metro/14490__.js
import _mod14474 from "14474__.js";
import _mod14475 from "14475__.js";
import _mod14491 from "14491__.js";

let prop = _mod14474["__core-js_shared__"];
if (!prop) {
  prop = _mod14475("__core-js_shared__", {});
}
let versions = prop.versions;
if (!versions) {
  const items = [];
  prop.versions = items;
  versions = items;
}
let str2 = "global";
if (_mod14491) {
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
