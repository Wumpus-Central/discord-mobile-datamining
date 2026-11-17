// === Module 16798: ? ===

// Module 16798
import _mod16782 from "module_16782" /* 16782 */;
import _mod16783 from "module_16783" /* 16783 */;
import _mod16799 from "module_16799" /* 16799 */;

let prop = _mod16782["__core-js_shared__"];
if (!prop) {
  prop = _mod16783("__core-js_shared__", {});
}
let versions = prop.versions;
if (!versions) {
  const items = [];
  prop.versions = items;
  versions = items;
}
let str2 = "global";
if (_mod16799) {
  str2 = "pure";
}
versions.push({ version: "3.41.0", mode: str2, copyright: "\u00A9 2014-2025 Denis Pushkarev (zloirock.ru)", license: "https://github.com/zloirock/core-js/blob/v3.41.0/LICENSE", source: "https://github.com/zloirock/core-js" });

export default prop;