// _runtime/metro/14437__.js
import _mod14421 from "14421__.js";
import _mod14422 from "14422__.js";
import _mod14438 from "14438__.js";

let prop = _mod14421["__core-js_shared__"];
if (!prop) {
  prop = _mod14422("__core-js_shared__", {});
}
let versions = prop.versions;
if (!versions) {
  const items = [];
  prop.versions = items;
  versions = items;
}
let str2 = "global";
if (_mod14438) {
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
