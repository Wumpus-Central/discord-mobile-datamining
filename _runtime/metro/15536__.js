// === Module 15536: ? ===

// Module 15536
import _mod15520 from "module_15520" /* 15520 */;
import _mod15521 from "module_15521" /* 15521 */;
import _mod15537 from "module_15537" /* 15537 */;

let prop = _mod15520["__core-js_shared__"];
if (!prop) {
  prop = _mod15521("__core-js_shared__", {});
}
let versions = prop.versions;
if (!versions) {
  const items = [];
  prop.versions = items;
  versions = items;
}
let str2 = "global";
if (_mod15537) {
  str2 = "pure";
}
versions.push({ version: "3.41.0", mode: str2, copyright: "\u00A9 2014-2025 Denis Pushkarev (zloirock.ru)", license: "https://github.com/zloirock/core-js/blob/v3.41.0/LICENSE", source: "https://github.com/zloirock/core-js" });

export default prop;