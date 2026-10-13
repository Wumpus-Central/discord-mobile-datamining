// _runtime/metro/14888__.js
import _mod14872 from "14872__.js";
import _mod14873 from "14873__.js";
import _mod14889 from "14889__.js";

let prop = _mod14872["__core-js_shared__"];
if (!prop) {
  prop = _mod14873("__core-js_shared__", {});
}
let versions = prop.versions;
if (!versions) {
  const items = [];
  prop.versions = items;
  versions = items;
}
let str2 = "global";
if (_mod14889) {
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
