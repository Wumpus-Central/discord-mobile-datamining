// === Module 15575: ? ===

// Module 15575
import _mod15559 from "module_15559" /* 15559 */;
import _mod15560 from "module_15560" /* 15560 */;
import _mod15576 from "module_15576" /* 15576 */;

let prop = _mod15559["__core-js_shared__"];
if (!prop) {
  prop = _mod15560("__core-js_shared__", {});
}
let versions = prop.versions;
if (!versions) {
  const items = [];
  prop.versions = items;
  versions = items;
}
let str2 = "global";
if (_mod15576) {
  str2 = "pure";
}
versions.push({ version: "3.41.0", mode: str2, copyright: "\u00A9 2014-2025 Denis Pushkarev (zloirock.ru)", license: "https://github.com/zloirock/core-js/blob/v3.41.0/LICENSE", source: "https://github.com/zloirock/core-js" });

export default prop;