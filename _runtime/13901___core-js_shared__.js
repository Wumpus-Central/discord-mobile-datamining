// === Module 13901: __core-js_shared__ ===

// Module 13901 (__core-js_shared__)
import _mod13885 from "module_13885" /* 13885 */;
import _mod13886 from "module_13886" /* 13886 */;
import _mod13902 from "module_13902" /* 13902 */;

__core_js_shared__ = _mod13885["__core-js_shared__"];
if (!__core_js_shared__) {
  __core_js_shared__ = _mod13886("__core-js_shared__", {});
}
let versions = __core_js_shared__.versions;
if (!versions) {
  const items = [];
  __core_js_shared__.versions = items;
  versions = items;
}
let str2 = "global";
if (_mod13902) {
  str2 = "pure";
}
versions.push({ version: "3.41.0", mode: str2, copyright: "\u00A9 2014-2025 Denis Pushkarev (zloirock.ru)", license: "https://github.com/zloirock/core-js/blob/v3.41.0/LICENSE", source: "https://github.com/zloirock/core-js" });

export default __core_js_shared__;