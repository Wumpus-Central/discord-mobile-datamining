// === Module 15467: ? ===

// Module 15467
import _mod15451 from "module_15451" /* 15451 */;
import _mod15452 from "module_15452" /* 15452 */;
import _mod15468 from "module_15468" /* 15468 */;

let prop = _mod15451["__core-js_shared__"];
if (!prop) {
  prop = _mod15452("__core-js_shared__", {});
}
let versions = prop.versions;
if (!versions) {
  const items = [];
  prop.versions = items;
  versions = items;
}
let str2 = "global";
if (_mod15468) {
  str2 = "pure";
}
versions.push({ version: "3.41.0", mode: str2, copyright: "\u00A9 2014-2025 Denis Pushkarev (zloirock.ru)", license: "https://github.com/zloirock/core-js/blob/v3.41.0/LICENSE", source: "https://github.com/zloirock/core-js" });

export default prop;