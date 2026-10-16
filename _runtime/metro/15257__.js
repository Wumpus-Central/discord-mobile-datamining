// === Module 15257: ? ===

// Module 15257
import _mod15241 from "module_15241" /* 15241 */;
import _mod15242 from "module_15242" /* 15242 */;
import _mod15258 from "module_15258" /* 15258 */;

let prop = _mod15241["__core-js_shared__"];
if (!prop) {
  prop = _mod15242("__core-js_shared__", {});
}
let versions = prop.versions;
if (!versions) {
  const items = [];
  prop.versions = items;
  versions = items;
}
let str2 = "global";
if (_mod15258) {
  str2 = "pure";
}
versions.push({ version: "3.41.0", mode: str2, copyright: "\u00A9 2014-2025 Denis Pushkarev (zloirock.ru)", license: "https://github.com/zloirock/core-js/blob/v3.41.0/LICENSE", source: "https://github.com/zloirock/core-js" });

export default prop;