// _runtime/metro/15554__.js
import _mod15538 from "15538__.js";
import _mod15539 from "15539__.js";
import _mod15555 from "15555__.js";

let prop = _mod15538["__core-js_shared__"];
if (!prop) {
  prop = _mod15539("__core-js_shared__", {});
}
let versions = prop.versions;
if (!versions) {
  const items = [];
  prop.versions = items;
  versions = items;
}
let str2 = "global";
if (_mod15555) {
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
