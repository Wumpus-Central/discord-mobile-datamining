// _runtime/metro/15561__.js
import _mod15545 from "15545__.js";
import _mod15546 from "15546__.js";
import _mod15562 from "15562__.js";

let prop = _mod15545["__core-js_shared__"];
if (!prop) {
  prop = _mod15546("__core-js_shared__", {});
}
let versions = prop.versions;
if (!versions) {
  const items = [];
  prop.versions = items;
  versions = items;
}
let str2 = "global";
if (_mod15562) {
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
