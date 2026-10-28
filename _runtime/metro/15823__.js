// _runtime/metro/15823__.js
import _mod15807 from "15807__.js";
import _mod15808 from "15808__.js";
import _mod15824 from "15824__.js";

let prop = _mod15807["__core-js_shared__"];
if (!prop) {
  prop = _mod15808("__core-js_shared__", {});
}
let versions = prop.versions;
if (!versions) {
  const items = [];
  prop.versions = items;
  versions = items;
}
let str2 = "global";
if (_mod15824) {
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
