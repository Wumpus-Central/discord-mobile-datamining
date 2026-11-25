// _runtime/metro/15697__.js
import _mod15681 from "15681__.js";
import _mod15682 from "15682__.js";
import _mod15698 from "15698__.js";

let prop = _mod15681["__core-js_shared__"];
if (!prop) {
  prop = _mod15682("__core-js_shared__", {});
}
let versions = prop.versions;
if (!versions) {
  const items = [];
  prop.versions = items;
  versions = items;
}
let str2 = "global";
if (_mod15698) {
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
