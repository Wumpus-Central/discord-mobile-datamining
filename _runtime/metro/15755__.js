// _runtime/metro/15755__.js
import _mod15739 from "15739__.js";
import _mod15740 from "15740__.js";
import _mod15756 from "15756__.js";

let prop = _mod15739["__core-js_shared__"];
if (!prop) {
  prop = _mod15740("__core-js_shared__", {});
}
let versions = prop.versions;
if (!versions) {
  const items = [];
  prop.versions = items;
  versions = items;
}
let str2 = "global";
if (_mod15756) {
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
