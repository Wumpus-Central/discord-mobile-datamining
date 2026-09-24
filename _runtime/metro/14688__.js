// _runtime/metro/14688__.js
import _mod14672 from "14672__.js";
import _mod14673 from "14673__.js";
import _mod14689 from "14689__.js";

let prop = _mod14672["__core-js_shared__"];
if (!prop) {
  prop = _mod14673("__core-js_shared__", {});
}
let versions = prop.versions;
if (!versions) {
  const items = [];
  prop.versions = items;
  versions = items;
}
let str2 = "global";
if (_mod14689) {
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
