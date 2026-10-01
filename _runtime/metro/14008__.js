// _runtime/metro/14008__.js
import _mod13992 from "13992__.js";
import _mod13993 from "13993__.js";
import _mod14009 from "14009__.js";

let prop = _mod13992["__core-js_shared__"];
if (!prop) {
  prop = _mod13993("__core-js_shared__", {});
}
let versions = prop.versions;
if (!versions) {
  const items = [];
  prop.versions = items;
  versions = items;
}
let str2 = "global";
if (_mod14009) {
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
