// === Module 15515: ? ===

// Module 15515
import _mod15499 from "module_15499" /* 15499 */;
import _mod15500 from "module_15500" /* 15500 */;
import _mod15516 from "module_15516" /* 15516 */;

let prop = _mod15499["__core-js_shared__"];
if (!prop) {
  prop = _mod15500("__core-js_shared__", {});
}
let versions = prop.versions;
if (!versions) {
  const items = [];
  prop.versions = items;
  versions = items;
}
let str2 = "global";
if (_mod15516) {
  str2 = "pure";
}
versions.push({ version: "3.41.0", mode: str2, copyright: "\u00A9 2014-2025 Denis Pushkarev (zloirock.ru)", license: "https://github.com/zloirock/core-js/blob/v3.41.0/LICENSE", source: "https://github.com/zloirock/core-js" });

export default prop;