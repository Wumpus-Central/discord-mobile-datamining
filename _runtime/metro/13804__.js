// _runtime/metro/13804__.js
import _mod13788 from "13788__.js";
import _mod13789 from "13789__.js";
import _mod13805 from "13805__.js";

let prop = _mod13788["__core-js_shared__"];
if (!prop) {
  prop = _mod13789("__core-js_shared__", {});
}
let versions = prop.versions;
if (!versions) {
  const items = [];
  prop.versions = items;
  versions = items;
}
let str2 = "global";
if (_mod13805) {
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
