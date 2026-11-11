// === Module 16645: ? ===

// Module 16645
import _mod16629 from "module_16629" /* 16629 */;
import _mod16630 from "module_16630" /* 16630 */;
import _mod16646 from "module_16646" /* 16646 */;

let prop = _mod16629["__core-js_shared__"];
if (!prop) {
  prop = _mod16630("__core-js_shared__", {});
}
let versions = prop.versions;
if (!versions) {
  const items = [];
  prop.versions = items;
  versions = items;
}
let str2 = "global";
if (_mod16646) {
  str2 = "pure";
}
versions.push({ version: "3.41.0", mode: str2, copyright: "\u00A9 2014-2025 Denis Pushkarev (zloirock.ru)", license: "https://github.com/zloirock/core-js/blob/v3.41.0/LICENSE", source: "https://github.com/zloirock/core-js" });

export default prop;