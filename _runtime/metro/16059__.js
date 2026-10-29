// _runtime/metro/16059__.js
import _mod16043 from "16043__.js";
import _mod16044 from "16044__.js";
import _mod16060 from "16060__.js";

let prop = _mod16043["__core-js_shared__"];
if (!prop) {
  prop = _mod16044("__core-js_shared__", {});
}
let versions = prop.versions;
if (!versions) {
  const items = [];
  prop.versions = items;
  versions = items;
}
let str2 = "global";
if (_mod16060) {
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
