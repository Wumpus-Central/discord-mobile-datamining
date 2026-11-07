// _runtime/metro/16447__.js
import _mod16431 from "16431__.js";
import _mod16432 from "16432__.js";
import _mod16448 from "16448__.js";

let prop = _mod16431["__core-js_shared__"];
if (!prop) {
  prop = _mod16432("__core-js_shared__", {});
}
let versions = prop.versions;
if (!versions) {
  const items = [];
  prop.versions = items;
  versions = items;
}
let str2 = "global";
if (_mod16448) {
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
