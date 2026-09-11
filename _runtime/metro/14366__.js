// _runtime/metro/14366__.js
import _mod14350 from "14350__.js";
import _mod14351 from "14351__.js";
import _mod14367 from "14367__.js";

let prop = _mod14350["__core-js_shared__"];
if (!prop) {
  prop = _mod14351("__core-js_shared__", {});
}
let versions = prop.versions;
if (!versions) {
  const items = [];
  prop.versions = items;
  versions = items;
}
let str2 = "global";
if (_mod14367) {
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
