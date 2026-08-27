// === Module 13882: __core-js_shared__ ===

// Module 13882 (__core-js_shared__)
import _mod13866 from "module_13866" /* 13866 */;
import _mod13867 from "module_13867" /* 13867 */;
import _mod13883 from "module_13883" /* 13883 */;

__core_js_shared__ = _mod13866["__core-js_shared__"];
if (!__core_js_shared__) {
  __core_js_shared__ = _mod13867("__core-js_shared__", {});
}
let versions = __core_js_shared__.versions;
if (!versions) {
  const items = [];
  __core_js_shared__.versions = items;
  versions = items;
}
let str2 = "global";
if (_mod13883) {
  str2 = "pure";
}
versions.push({ version: "3.41.0", mode: str2, copyright: "\u00A9 2014-2025 Denis Pushkarev (zloirock.ru)", license: "https://github.com/zloirock/core-js/blob/v3.41.0/LICENSE", source: "https://github.com/zloirock/core-js" });

export default __core_js_shared__;