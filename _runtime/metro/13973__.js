// _runtime/metro/13973__.js
import _mod13957 from "13957__.js";
import _mod13958 from "13958__.js";
import _mod13974 from "13974__.js";

let prop = _mod13957["__core-js_shared__"];
if (!prop) {
  prop = _mod13958("__core-js_shared__", {});
}
let versions = prop.versions;
if (!versions) {
  const items = [];
  prop.versions = items;
  versions = items;
}
let str2 = "global";
if (_mod13974) {
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
