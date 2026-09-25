// === Module 13849: ? ===

// Module 13849
import _mod13833 from "module_13833" /* 13833 */;
import _mod13834 from "module_13834" /* 13834 */;
import _mod13850 from "module_13850" /* 13850 */;

let prop = _mod13833["__core-js_shared__"];
if (!prop) {
  prop = _mod13834("__core-js_shared__", {});
}
let versions = prop.versions;
if (!versions) {
  const items = [];
  prop.versions = items;
  versions = items;
}
let str2 = "global";
if (_mod13850) {
  str2 = "pure";
}
versions.push({ version: "3.41.0", mode: str2, copyright: "\u00A9 2014-2025 Denis Pushkarev (zloirock.ru)", license: "https://github.com/zloirock/core-js/blob/v3.41.0/LICENSE", source: "https://github.com/zloirock/core-js" });

export default prop;