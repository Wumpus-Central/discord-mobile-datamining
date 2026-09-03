// === Module 14207: __core-js_shared__ ===

// Module 14207 (__core-js_shared__)
import _mod14191 from "module_14191" /* 14191 */;
import _mod14192 from "module_14192" /* 14192 */;
import _mod14208 from "module_14208" /* 14208 */;

__core_js_shared__ = _mod14191["__core-js_shared__"];
if (!__core_js_shared__) {
  __core_js_shared__ = _mod14192("__core-js_shared__", {});
}
let versions = __core_js_shared__.versions;
if (!versions) {
  const items = [];
  __core_js_shared__.versions = items;
  versions = items;
}
let str2 = "global";
if (_mod14208) {
  str2 = "pure";
}
versions.push({ version: "3.41.0", mode: str2, copyright: "\u00A9 2014-2025 Denis Pushkarev (zloirock.ru)", license: "https://github.com/zloirock/core-js/blob/v3.41.0/LICENSE", source: "https://github.com/zloirock/core-js" });

export default __core_js_shared__;