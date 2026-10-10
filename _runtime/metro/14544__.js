// === Module 14544: ? ===

// Module 14544
import _mod14528 from "module_14528" /* 14528 */;
import _mod14529 from "module_14529" /* 14529 */;
import _mod14545 from "module_14545" /* 14545 */;

let prop = _mod14528["__core-js_shared__"];
if (!prop) {
  prop = _mod14529("__core-js_shared__", {});
}
let versions = prop.versions;
if (!versions) {
  const items = [];
  prop.versions = items;
  versions = items;
}
let str2 = "global";
if (_mod14545) {
  str2 = "pure";
}
versions.push({ version: "3.41.0", mode: str2, copyright: "\u00A9 2014-2025 Denis Pushkarev (zloirock.ru)", license: "https://github.com/zloirock/core-js/blob/v3.41.0/LICENSE", source: "https://github.com/zloirock/core-js" });

export default prop;