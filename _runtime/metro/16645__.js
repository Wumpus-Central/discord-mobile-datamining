// _runtime/metro/16645__.js
import _mod16629 from "16629__.js";
import _mod16630 from "16630__.js";
import _mod16646 from "16646__.js";

let prop = _mod16629["__core-js_shared__"];
if (!prop) {
  prop = _mod16630("__core-js_shared__", {});
}
let versions = prop.versions;
if (!versions) {
  const items = [];
  prop.versions = items;
  versions = items;
}
let str2 = "global";
if (_mod16646) {
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
