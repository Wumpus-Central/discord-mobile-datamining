// === Module 15502: ? ===

// Module 15502
import _mod15486 from "module_15486" /* 15486 */;
import _mod15487 from "module_15487" /* 15487 */;
import _mod15503 from "module_15503" /* 15503 */;

let prop = _mod15486["__core-js_shared__"];
if (!prop) {
  prop = _mod15487("__core-js_shared__", {});
}
let versions = prop.versions;
if (!versions) {
  const items = [];
  prop.versions = items;
  versions = items;
}
let str2 = "global";
if (_mod15503) {
  str2 = "pure";
}
versions.push({ version: "3.41.0", mode: str2, copyright: "\u00A9 2014-2025 Denis Pushkarev (zloirock.ru)", license: "https://github.com/zloirock/core-js/blob/v3.41.0/LICENSE", source: "https://github.com/zloirock/core-js" });

export default prop;