// _runtime/metro/14429__.js
import _mod14413 from "14413__.js";
import _mod14414 from "14414__.js";
import _mod14430 from "14430__.js";

let prop = _mod14413["__core-js_shared__"];
if (!prop) {
  prop = _mod14414("__core-js_shared__", {});
}
let versions = prop.versions;
if (!versions) {
  const items = [];
  prop.versions = items;
  versions = items;
}
let str2 = "global";
if (_mod14430) {
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
