// === Module 13935: __core-js_shared__ ===

// Module 13935 (__core-js_shared__)
import _mod13919 from "module_13919" /* 13919 */;
import _mod13920 from "module_13920" /* 13920 */;
import _mod13936 from "module_13936" /* 13936 */;

__core_js_shared__ = _mod13919["__core-js_shared__"];
if (!__core_js_shared__) {
  __core_js_shared__ = _mod13920("__core-js_shared__", {});
}
let versions = __core_js_shared__.versions;
if (!versions) {
  const items = [];
  __core_js_shared__.versions = items;
  versions = items;
}
let str2 = "global";
if (_mod13936) {
  str2 = "pure";
}
versions.push({ version: "3.41.0", mode: str2, copyright: "\u00A9 2014-2025 Denis Pushkarev (zloirock.ru)", license: "https://github.com/zloirock/core-js/blob/v3.41.0/LICENSE", source: "https://github.com/zloirock/core-js" });

export default __core_js_shared__;