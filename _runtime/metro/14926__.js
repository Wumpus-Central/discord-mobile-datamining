// _runtime/metro/14926__.js
import _mod14910 from "14910__.js";
import _mod14911 from "14911__.js";
import _mod14927 from "14927__.js";

let prop = _mod14910["__core-js_shared__"];
if (!prop) {
  prop = _mod14911("__core-js_shared__", {});
}
let versions = prop.versions;
if (!versions) {
  const items = [];
  prop.versions = items;
  versions = items;
}
let str2 = "global";
if (_mod14927) {
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
