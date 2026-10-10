// _runtime/metro/14544__.js
import _mod14528 from "14528__.js";
import _mod14529 from "14529__.js";
import _mod14545 from "14545__.js";

let prop = _mod14528["__core-js_shared__"];
if (!prop) {
  prop = _mod14529("__core-js_shared__", {});
}
let versions = prop.versions;
if (!versions) {
  const items = [];
  prop.versions = items;
  versions = items;
}
let str2 = "global";
if (_mod14545) {
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
