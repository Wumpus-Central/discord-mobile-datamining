// === Module 14316: ? ===

// Module 14316
import _mod14300 from "module_14300" /* 14300 */;
import _mod14301 from "module_14301" /* 14301 */;
import _mod14317 from "module_14317" /* 14317 */;

let prop = _mod14300["__core-js_shared__"];
if (!prop) {
  prop = _mod14301("__core-js_shared__", {});
}
let versions = prop.versions;
if (!versions) {
  const items = [];
  prop.versions = items;
  versions = items;
}
let str2 = "global";
if (_mod14317) {
  str2 = "pure";
}
versions.push({ version: "3.41.0", mode: str2, copyright: "\u00A9 2014-2025 Denis Pushkarev (zloirock.ru)", license: "https://github.com/zloirock/core-js/blob/v3.41.0/LICENSE", source: "https://github.com/zloirock/core-js" });

export default prop;