// _runtime/metro/14532__.js
import _mod14516 from "14516__.js";
import _mod14517 from "14517__.js";
import _mod14533 from "14533__.js";

let prop = _mod14516["__core-js_shared__"];
if (!prop) {
  prop = _mod14517("__core-js_shared__", {});
}
let versions = prop.versions;
if (!versions) {
  const items = [];
  prop.versions = items;
  versions = items;
}
let str2 = "global";
if (_mod14533) {
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
