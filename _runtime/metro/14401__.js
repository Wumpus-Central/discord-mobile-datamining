// === Module 14401: ? ===

// Module 14401
import _mod14385 from "module_14385" /* 14385 */;
import _mod14386 from "module_14386" /* 14386 */;
import _mod14402 from "module_14402" /* 14402 */;

let prop = _mod14385["__core-js_shared__"];
if (!prop) {
  prop = _mod14386("__core-js_shared__", {});
}
let versions = prop.versions;
if (!versions) {
  const items = [];
  prop.versions = items;
  versions = items;
}
let str2 = "global";
if (_mod14402) {
  str2 = "pure";
}
versions.push({ version: "3.41.0", mode: str2, copyright: "\u00A9 2014-2025 Denis Pushkarev (zloirock.ru)", license: "https://github.com/zloirock/core-js/blob/v3.41.0/LICENSE", source: "https://github.com/zloirock/core-js" });

export default prop;