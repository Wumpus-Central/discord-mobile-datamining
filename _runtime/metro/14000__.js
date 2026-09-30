// _runtime/metro/14000__.js
import _mod13984 from "13984__.js";
import _mod13985 from "13985__.js";
import _mod14001 from "14001__.js";

let prop = _mod13984["__core-js_shared__"];
if (!prop) {
  prop = _mod13985("__core-js_shared__", {});
}
let versions = prop.versions;
if (!versions) {
  const items = [];
  prop.versions = items;
  versions = items;
}
let str2 = "global";
if (_mod14001) {
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
