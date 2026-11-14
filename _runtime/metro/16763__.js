// _runtime/metro/16763__.js
import _mod16747 from "16747__.js";
import _mod16748 from "16748__.js";
import _mod16764 from "16764__.js";

let prop = _mod16747["__core-js_shared__"];
if (!prop) {
  prop = _mod16748("__core-js_shared__", {});
}
let versions = prop.versions;
if (!versions) {
  const items = [];
  prop.versions = items;
  versions = items;
}
let str2 = "global";
if (_mod16764) {
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
