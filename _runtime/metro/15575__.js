// _runtime/metro/15575__.js
import _mod15559 from "15559__.js";
import _mod15560 from "15560__.js";
import _mod15576 from "15576__.js";

let prop = _mod15559["__core-js_shared__"];
if (!prop) {
  prop = _mod15560("__core-js_shared__", {});
}
let versions = prop.versions;
if (!versions) {
  const items = [];
  prop.versions = items;
  versions = items;
}
let str2 = "global";
if (_mod15576) {
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
