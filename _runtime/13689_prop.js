// === Module 13689: prop ===

// Module 13689 (prop)
import _mod13673 from "module_13673" /* 13673 */;
import _mod13674 from "module_13674" /* 13674 */;
import _mod13690 from "module_13690" /* 13690 */;

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