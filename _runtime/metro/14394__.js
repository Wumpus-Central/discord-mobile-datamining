// _runtime/metro/14394__.js
import _mod14378 from "14378__.js";
import _mod14379 from "14379__.js";
import _mod14395 from "14395__.js";

let prop = _mod14378["__core-js_shared__"];
if (!prop) {
  prop = _mod14379("__core-js_shared__", {});
}
let versions = prop.versions;
if (!versions) {
  const items = [];
  prop.versions = items;
  versions = items;
}
let str2 = "global";
if (_mod14395) {
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
