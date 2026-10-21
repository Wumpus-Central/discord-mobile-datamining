// === Module 15458: ? ===

// Module 15458
import _mod15442 from "module_15442" /* 15442 */;
import _mod15443 from "module_15443" /* 15443 */;
import _mod15459 from "module_15459" /* 15459 */;

let prop = _mod15442["__core-js_shared__"];
if (!prop) {
  prop = _mod15443("__core-js_shared__", {});
}
let versions = prop.versions;
if (!versions) {
  const items = [];
  prop.versions = items;
  versions = items;
}
let str2 = "global";
if (_mod15459) {
  str2 = "pure";
}
versions.push({ version: "3.41.0", mode: str2, copyright: "\u00A9 2014-2025 Denis Pushkarev (zloirock.ru)", license: "https://github.com/zloirock/core-js/blob/v3.41.0/LICENSE", source: "https://github.com/zloirock/core-js" });

export default prop;