// === Module 16457: ? ===

// Module 16457
import _mod16441 from "module_16441" /* 16441 */;
import _mod16442 from "module_16442" /* 16442 */;
import _mod16458 from "module_16458" /* 16458 */;

let prop = _mod16441["__core-js_shared__"];
if (!prop) {
  prop = _mod16442("__core-js_shared__", {});
}
let versions = prop.versions;
if (!versions) {
  const items = [];
  prop.versions = items;
  versions = items;
}
let str2 = "global";
if (_mod16458) {
  str2 = "pure";
}
versions.push({ version: "3.41.0", mode: str2, copyright: "\u00A9 2014-2025 Denis Pushkarev (zloirock.ru)", license: "https://github.com/zloirock/core-js/blob/v3.41.0/LICENSE", source: "https://github.com/zloirock/core-js" });

export default prop;