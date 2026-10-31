// _runtime/metro/16140__.js
import _mod16124 from "16124__.js";
import _mod16125 from "16125__.js";
import _mod16141 from "16141__.js";

let prop = _mod16124["__core-js_shared__"];
if (!prop) {
  prop = _mod16125("__core-js_shared__", {});
}
let versions = prop.versions;
if (!versions) {
  const items = [];
  prop.versions = items;
  versions = items;
}
let str2 = "global";
if (_mod16141) {
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
