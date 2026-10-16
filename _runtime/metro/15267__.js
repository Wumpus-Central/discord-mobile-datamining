// _runtime/metro/15267__.js
import _mod15251 from "15251__.js";
import _mod15252 from "15252__.js";
import _mod15268 from "15268__.js";

let prop = _mod15251["__core-js_shared__"];
if (!prop) {
  prop = _mod15252("__core-js_shared__", {});
}
let versions = prop.versions;
if (!versions) {
  const items = [];
  prop.versions = items;
  versions = items;
}
let str2 = "global";
if (_mod15268) {
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
