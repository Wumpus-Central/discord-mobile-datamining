// _runtime/metro/14390__.js
import _mod14374 from "14374__.js";
import _mod14375 from "14375__.js";
import _mod14391 from "14391__.js";

let prop = _mod14374["__core-js_shared__"];
if (!prop) {
  prop = _mod14375("__core-js_shared__", {});
}
let versions = prop.versions;
if (!versions) {
  const items = [];
  prop.versions = items;
  versions = items;
}
let str2 = "global";
if (_mod14391) {
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
