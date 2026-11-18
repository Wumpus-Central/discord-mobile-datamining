// === Module 15481: ? ===

// Module 15481
import _mod15465 from "module_15465" /* 15465 */;
import _mod15466 from "module_15466" /* 15466 */;
import _mod15482 from "module_15482" /* 15482 */;

let prop = _mod15465["__core-js_shared__"];
if (!prop) {
  prop = _mod15466("__core-js_shared__", {});
}
let versions = prop.versions;
if (!versions) {
  const items = [];
  prop.versions = items;
  versions = items;
}
let str2 = "global";
if (_mod15482) {
  str2 = "pure";
}
versions.push({ version: "3.41.0", mode: str2, copyright: "\u00A9 2014-2025 Denis Pushkarev (zloirock.ru)", license: "https://github.com/zloirock/core-js/blob/v3.41.0/LICENSE", source: "https://github.com/zloirock/core-js" });

export default prop;