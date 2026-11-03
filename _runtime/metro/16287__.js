// === Module 16287: ? ===

// Module 16287
import _mod16271 from "module_16271" /* 16271 */;
import _mod16272 from "module_16272" /* 16272 */;
import _mod16288 from "module_16288" /* 16288 */;

let prop = _mod16271["__core-js_shared__"];
if (!prop) {
  prop = _mod16272("__core-js_shared__", {});
}
let versions = prop.versions;
if (!versions) {
  const items = [];
  prop.versions = items;
  versions = items;
}
let str2 = "global";
if (_mod16288) {
  str2 = "pure";
}
versions.push({ version: "3.41.0", mode: str2, copyright: "\u00A9 2014-2025 Denis Pushkarev (zloirock.ru)", license: "https://github.com/zloirock/core-js/blob/v3.41.0/LICENSE", source: "https://github.com/zloirock/core-js" });

export default prop;