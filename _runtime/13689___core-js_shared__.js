// === Module 13689: __core-js_shared__ ===

// Module 13689 (__core-js_shared__)
import _mod13673 from "module_13673" /* 13673 */;
import _mod13674 from "module_13674" /* 13674 */;
import _mod13690 from "module_13690" /* 13690 */;

__core_js_shared__ = _mod13673["__core-js_shared__"];
if (!__core_js_shared__) {
  __core_js_shared__ = _mod13674("__core-js_shared__", {});
}
let versions = __core_js_shared__.versions;
if (!versions) {
  const items = [];
  __core_js_shared__.versions = items;
  versions = items;
}
let str2 = "global";
if (_mod13690) {
  str2 = "pure";
}
versions.push({ version: "3.41.0", mode: str2, copyright: "\u00A9 2014-2025 Denis Pushkarev (zloirock.ru)", license: "https://github.com/zloirock/core-js/blob/v3.41.0/LICENSE", source: "https://github.com/zloirock/core-js" });

export default __core_js_shared__;