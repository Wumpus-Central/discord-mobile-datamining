// === Module 13855: __core-js_shared__ ===

// Module 13855 (__core-js_shared__)
import _mod13839 from "module_13839" /* 13839 */;
import _mod13840 from "module_13840" /* 13840 */;
import _mod13856 from "module_13856" /* 13856 */;

__core_js_shared__ = _mod13839["__core-js_shared__"];
if (!__core_js_shared__) {
  __core_js_shared__ = _mod13840("__core-js_shared__", {});
}
let versions = __core_js_shared__.versions;
if (!versions) {
  const items = [];
  __core_js_shared__.versions = items;
  versions = items;
}
let str2 = "global";
if (_mod13856) {
  str2 = "pure";
}
versions.push({ version: "3.41.0", mode: str2, copyright: "\u00A9 2014-2025 Denis Pushkarev (zloirock.ru)", license: "https://github.com/zloirock/core-js/blob/v3.41.0/LICENSE", source: "https://github.com/zloirock/core-js" });

export default __core_js_shared__;