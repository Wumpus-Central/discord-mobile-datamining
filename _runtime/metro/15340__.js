// _runtime/metro/15340__.js
import _mod15324 from "15324__.js";
import _mod15325 from "15325__.js";
import _mod15341 from "15341__.js";

let prop = _mod15324["__core-js_shared__"];
if (!prop) {
  prop = _mod15325("__core-js_shared__", {});
}
let versions = prop.versions;
if (!versions) {
  const items = [];
  prop.versions = items;
  versions = items;
}
let str2 = "global";
if (_mod15341) {
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
