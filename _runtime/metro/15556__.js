// === Module 15556: ? ===

// Module 15556
import _mod15540 from "module_15540" /* 15540 */;
import _mod15541 from "module_15541" /* 15541 */;
import _mod15557 from "module_15557" /* 15557 */;

let prop = _mod15540["__core-js_shared__"];
if (!prop) {
  prop = _mod15541("__core-js_shared__", {});
}
let versions = prop.versions;
if (!versions) {
  const items = [];
  prop.versions = items;
  versions = items;
}
let str2 = "global";
if (_mod15557) {
  str2 = "pure";
}
versions.push({ version: "3.41.0", mode: str2, copyright: "\u00A9 2014-2025 Denis Pushkarev (zloirock.ru)", license: "https://github.com/zloirock/core-js/blob/v3.41.0/LICENSE", source: "https://github.com/zloirock/core-js" });

export default prop;