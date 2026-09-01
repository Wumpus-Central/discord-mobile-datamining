// === Module 13968: __core-js_shared__ ===

// Module 13968 (__core-js_shared__)
import _mod13952 from "module_13952" /* 13952 */;
import _mod13953 from "module_13953" /* 13953 */;
import _mod13969 from "module_13969" /* 13969 */;

__core_js_shared__ = _mod13952["__core-js_shared__"];
if (!__core_js_shared__) {
  __core_js_shared__ = _mod13953("__core-js_shared__", {});
}
let versions = __core_js_shared__.versions;
if (!versions) {
  const items = [];
  __core_js_shared__.versions = items;
  versions = items;
}
let str2 = "global";
if (_mod13969) {
  str2 = "pure";
}
versions.push({ version: "3.41.0", mode: str2, copyright: "\u00A9 2014-2025 Denis Pushkarev (zloirock.ru)", license: "https://github.com/zloirock/core-js/blob/v3.41.0/LICENSE", source: "https://github.com/zloirock/core-js" });

export default __core_js_shared__;