// === Module 15552: ? ===

// Module 15552
import _mod15536 from "module_15536" /* 15536 */;
import _mod15537 from "module_15537" /* 15537 */;
import _mod15553 from "module_15553" /* 15553 */;

let prop = _mod15536["__core-js_shared__"];
if (!prop) {
  prop = _mod15537("__core-js_shared__", {});
}
let versions = prop.versions;
if (!versions) {
  const items = [];
  prop.versions = items;
  versions = items;
}
let str2 = "global";
if (_mod15553) {
  str2 = "pure";
}
versions.push({ version: "3.41.0", mode: str2, copyright: "\u00A9 2014-2025 Denis Pushkarev (zloirock.ru)", license: "https://github.com/zloirock/core-js/blob/v3.41.0/LICENSE", source: "https://github.com/zloirock/core-js" });

export default prop;