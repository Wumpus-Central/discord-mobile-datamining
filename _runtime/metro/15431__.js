// === Module 15431: ? ===

// Module 15431
import _mod15415 from "module_15415" /* 15415 */;
import _mod15416 from "module_15416" /* 15416 */;
import _mod15432 from "module_15432" /* 15432 */;

let prop = _mod15415["__core-js_shared__"];
if (!prop) {
  prop = _mod15416("__core-js_shared__", {});
}
let versions = prop.versions;
if (!versions) {
  const items = [];
  prop.versions = items;
  versions = items;
}
let str2 = "global";
if (_mod15432) {
  str2 = "pure";
}
versions.push({ version: "3.41.0", mode: str2, copyright: "\u00A9 2014-2025 Denis Pushkarev (zloirock.ru)", license: "https://github.com/zloirock/core-js/blob/v3.41.0/LICENSE", source: "https://github.com/zloirock/core-js" });

export default prop;