// _runtime/metro/16640__.js
import _mod16624 from "16624__.js";
import _mod16625 from "16625__.js";
import _mod16641 from "16641__.js";

let prop = _mod16624["__core-js_shared__"];
if (!prop) {
  prop = _mod16625("__core-js_shared__", {});
}
let versions = prop.versions;
if (!versions) {
  const items = [];
  prop.versions = items;
  versions = items;
}
let str2 = "global";
if (_mod16641) {
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
