// _runtime/metro/14077__.js
import _mod14061 from "14061__.js";
import _mod14062 from "14062__.js";
import _mod14078 from "14078__.js";

let prop = _mod14061["__core-js_shared__"];
if (!prop) {
  prop = _mod14062("__core-js_shared__", {});
}
let versions = prop.versions;
if (!versions) {
  const items = [];
  prop.versions = items;
  versions = items;
}
let str2 = "global";
if (_mod14078) {
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
