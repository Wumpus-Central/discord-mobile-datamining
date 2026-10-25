// === Module 15561: ? ===

// Module 15561
import _mod15545 from "module_15545" /* 15545 */;
import _mod15546 from "module_15546" /* 15546 */;
import _mod15562 from "module_15562" /* 15562 */;

let prop = _mod15545["__core-js_shared__"];
if (!prop) {
  prop = _mod15546("__core-js_shared__", {});
}
let versions = prop.versions;
if (!versions) {
  const items = [];
  prop.versions = items;
  versions = items;
}
let str2 = "global";
if (_mod15562) {
  str2 = "pure";
}
versions.push({ version: "3.41.0", mode: str2, copyright: "\u00A9 2014-2025 Denis Pushkarev (zloirock.ru)", license: "https://github.com/zloirock/core-js/blob/v3.41.0/LICENSE", source: "https://github.com/zloirock/core-js" });

export default prop;