// === Module 15748: ? ===

// Module 15748
import _mod15732 from "module_15732" /* 15732 */;
import _mod15733 from "module_15733" /* 15733 */;
import _mod15749 from "module_15749" /* 15749 */;

let prop = _mod15732["__core-js_shared__"];
if (!prop) {
  prop = _mod15733("__core-js_shared__", {});
}
let versions = prop.versions;
if (!versions) {
  const items = [];
  prop.versions = items;
  versions = items;
}
let str2 = "global";
if (_mod15749) {
  str2 = "pure";
}
versions.push({ version: "3.41.0", mode: str2, copyright: "\u00A9 2014-2025 Denis Pushkarev (zloirock.ru)", license: "https://github.com/zloirock/core-js/blob/v3.41.0/LICENSE", source: "https://github.com/zloirock/core-js" });

export default prop;