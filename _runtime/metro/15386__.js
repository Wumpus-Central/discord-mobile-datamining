// === Module 15386: ? ===

// Module 15386
import _mod15370 from "module_15370" /* 15370 */;
import _mod15371 from "module_15371" /* 15371 */;
import _mod15387 from "module_15387" /* 15387 */;

let prop = _mod15370["__core-js_shared__"];
if (!prop) {
  prop = _mod15371("__core-js_shared__", {});
}
let versions = prop.versions;
if (!versions) {
  const items = [];
  prop.versions = items;
  versions = items;
}
let str2 = "global";
if (_mod15387) {
  str2 = "pure";
}
versions.push({ version: "3.41.0", mode: str2, copyright: "\u00A9 2014-2025 Denis Pushkarev (zloirock.ru)", license: "https://github.com/zloirock/core-js/blob/v3.41.0/LICENSE", source: "https://github.com/zloirock/core-js" });

export default prop;