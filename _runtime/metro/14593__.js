// _runtime/metro/14593__.js
import _mod14577 from "14577__.js";
import _mod14578 from "14578__.js";
import _mod14594 from "14594__.js";

let prop = _mod14577["__core-js_shared__"];
if (!prop) {
  prop = _mod14578("__core-js_shared__", {});
}
let versions = prop.versions;
if (!versions) {
  const items = [];
  prop.versions = items;
  versions = items;
}
let str2 = "global";
if (_mod14594) {
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
