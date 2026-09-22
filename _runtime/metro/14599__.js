// _runtime/metro/14599__.js
import _mod14583 from "14583__.js";
import _mod14584 from "14584__.js";
import _mod14600 from "14600__.js";

let prop = _mod14583["__core-js_shared__"];
if (!prop) {
  prop = _mod14584("__core-js_shared__", {});
}
let versions = prop.versions;
if (!versions) {
  const items = [];
  prop.versions = items;
  versions = items;
}
let str2 = "global";
if (_mod14600) {
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
