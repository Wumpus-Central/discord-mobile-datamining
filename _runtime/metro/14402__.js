// === Module 14402: ? ===

// Module 14402
import _mod14386 from "module_14386" /* 14386 */;
import _mod14387 from "module_14387" /* 14387 */;
import _mod14403 from "module_14403" /* 14403 */;

let prop = _mod14386["__core-js_shared__"];
if (!prop) {
  prop = _mod14387("__core-js_shared__", {});
}
let versions = prop.versions;
if (!versions) {
  const items = [];
  prop.versions = items;
  versions = items;
}
let str2 = "global";
if (_mod14403) {
  str2 = "pure";
}
versions.push({ version: "3.41.0", mode: str2, copyright: "\u00A9 2014-2025 Denis Pushkarev (zloirock.ru)", license: "https://github.com/zloirock/core-js/blob/v3.41.0/LICENSE", source: "https://github.com/zloirock/core-js" });

export default prop;