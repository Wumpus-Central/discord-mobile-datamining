// _runtime/metro/15467__.js
import _mod15451 from "15451__.js";
import _mod15452 from "15452__.js";
import _mod15468 from "15468__.js";

let prop = _mod15451["__core-js_shared__"];
if (!prop) {
  prop = _mod15452("__core-js_shared__", {});
}
let versions = prop.versions;
if (!versions) {
  const items = [];
  prop.versions = items;
  versions = items;
}
let str2 = "global";
if (_mod15468) {
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
