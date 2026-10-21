// _runtime/metro/15458__.js
import _mod15442 from "15442__.js";
import _mod15443 from "15443__.js";
import _mod15459 from "15459__.js";

let prop = _mod15442["__core-js_shared__"];
if (!prop) {
  prop = _mod15443("__core-js_shared__", {});
}
let versions = prop.versions;
if (!versions) {
  const items = [];
  prop.versions = items;
  versions = items;
}
let str2 = "global";
if (_mod15459) {
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
