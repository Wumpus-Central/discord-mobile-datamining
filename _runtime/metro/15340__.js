// === Module 15340: ? ===

// Module 15340
import _mod15324 from "module_15324" /* 15324 */;
import _mod15325 from "module_15325" /* 15325 */;
import _mod15341 from "module_15341" /* 15341 */;

let prop = _mod15324["__core-js_shared__"];
if (!prop) {
  prop = _mod15325("__core-js_shared__", {});
}
let versions = prop.versions;
if (!versions) {
  const items = [];
  prop.versions = items;
  versions = items;
}
let str2 = "global";
if (_mod15341) {
  str2 = "pure";
}
versions.push({ version: "3.41.0", mode: str2, copyright: "\u00A9 2014-2025 Denis Pushkarev (zloirock.ru)", license: "https://github.com/zloirock/core-js/blob/v3.41.0/LICENSE", source: "https://github.com/zloirock/core-js" });

export default prop;