// _runtime/metro/14679__.js
import _mod14663 from "14663__.js";
import _mod14664 from "14664__.js";
import _mod14680 from "14680__.js";

let prop = _mod14663["__core-js_shared__"];
if (!prop) {
  prop = _mod14664("__core-js_shared__", {});
}
let versions = prop.versions;
if (!versions) {
  const items = [];
  prop.versions = items;
  versions = items;
}
let str2 = "global";
if (_mod14680) {
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
