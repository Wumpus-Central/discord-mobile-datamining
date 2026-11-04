// _runtime/metro/16376__.js
import _mod16360 from "16360__.js";
import _mod16361 from "16361__.js";
import _mod16377 from "16377__.js";

let prop = _mod16360["__core-js_shared__"];
if (!prop) {
  prop = _mod16361("__core-js_shared__", {});
}
let versions = prop.versions;
if (!versions) {
  const items = [];
  prop.versions = items;
  versions = items;
}
let str2 = "global";
if (_mod16377) {
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
