// _runtime/metro/15368__.js
import _mod15352 from "15352__.js";
import _mod15353 from "15353__.js";
import _mod15369 from "15369__.js";

let prop = _mod15352["__core-js_shared__"];
if (!prop) {
  prop = _mod15353("__core-js_shared__", {});
}
let versions = prop.versions;
if (!versions) {
  const items = [];
  prop.versions = items;
  versions = items;
}
let str2 = "global";
if (_mod15369) {
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
