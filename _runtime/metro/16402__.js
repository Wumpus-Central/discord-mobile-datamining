// === Module 16402: ? ===

// Module 16402
import _mod16386 from "module_16386" /* 16386 */;
import _mod16387 from "module_16387" /* 16387 */;
import _mod16403 from "module_16403" /* 16403 */;

let prop = _mod16386["__core-js_shared__"];
if (!prop) {
  prop = _mod16387("__core-js_shared__", {});
}
let versions = prop.versions;
if (!versions) {
  const items = [];
  prop.versions = items;
  versions = items;
}
let str2 = "global";
if (_mod16403) {
  str2 = "pure";
}
versions.push({ version: "3.41.0", mode: str2, copyright: "\u00A9 2014-2025 Denis Pushkarev (zloirock.ru)", license: "https://github.com/zloirock/core-js/blob/v3.41.0/LICENSE", source: "https://github.com/zloirock/core-js" });

export default prop;