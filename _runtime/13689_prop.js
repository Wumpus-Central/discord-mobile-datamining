// _runtime/13689_prop.js
import _mod13673 from "metro/13673__.js";
import _mod13674 from "metro/13674__.js";
import _mod13690 from "metro/13690__.js";

let prop = _mod13673["__core-js_shared__"];
if (!prop) {
  prop = _mod13674("__core-js_shared__", {});
}
let versions = prop.versions;
if (!versions) {
  const items = [];
  prop.versions = items;
  versions = items;
}
let str2 = "global";
if (_mod13690) {
  str2 = "pure";
}
versions.push({ version: "3.41.0", mode: str2, copyright: "\u00A9 2014-2025 Denis Pushkarev (zloirock.ru)", license: "https://github.com/zloirock/core-js/blob/v3.41.0/LICENSE", source: "https://github.com/zloirock/core-js" });

export default prop;