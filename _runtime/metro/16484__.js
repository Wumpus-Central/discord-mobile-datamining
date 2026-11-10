// _runtime/metro/16484__.js
import _mod16468 from "16468__.js";
import _mod16469 from "16469__.js";
import _mod16485 from "16485__.js";

let prop = _mod16468["__core-js_shared__"];
if (!prop) {
  prop = _mod16469("__core-js_shared__", {});
}
let versions = prop.versions;
if (!versions) {
  const items = [];
  prop.versions = items;
  versions = items;
}
let str2 = "global";
if (_mod16485) {
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
