// === Module 14313: __core-js_shared__ ===

// Module 14313 (__core-js_shared__)
import _mod14297 from "module_14297" /* 14297 */;
import _mod14298 from "module_14298" /* 14298 */;
import _mod14314 from "module_14314" /* 14314 */;

__core_js_shared__ = _mod14297["__core-js_shared__"];
if (!__core_js_shared__) {
  __core_js_shared__ = _mod14298("__core-js_shared__", {});
}
let versions = __core_js_shared__.versions;
if (!versions) {
  const items = [];
  __core_js_shared__.versions = items;
  versions = items;
}
let str2 = "global";
if (_mod14314) {
  str2 = "pure";
}
versions.push({ version: "3.41.0", mode: str2, copyright: "\u00A9 2014-2025 Denis Pushkarev (zloirock.ru)", license: "https://github.com/zloirock/core-js/blob/v3.41.0/LICENSE", source: "https://github.com/zloirock/core-js" });

export default __core_js_shared__;