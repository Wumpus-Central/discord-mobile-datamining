// === Module 14341: ? ===

// Module 14341
import _mod14325 from "module_14325" /* 14325 */;
import _mod14326 from "module_14326" /* 14326 */;
import _mod14342 from "module_14342" /* 14342 */;

let prop = _mod14325["__core-js_shared__"];
if (!prop) {
  prop = _mod14326("__core-js_shared__", {});
}
let versions = prop.versions;
if (!versions) {
  const items = [];
  prop.versions = items;
  versions = items;
}
let str2 = "global";
if (_mod14342) {
  str2 = "pure";
}
versions.push({ version: "3.41.0", mode: str2, copyright: "\u00A9 2014-2025 Denis Pushkarev (zloirock.ru)", license: "https://github.com/zloirock/core-js/blob/v3.41.0/LICENSE", source: "https://github.com/zloirock/core-js" });

export default prop;