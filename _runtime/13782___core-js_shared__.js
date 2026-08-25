// === Module 13782: __core-js_shared__ ===

// Module 13782 (__core-js_shared__)
import _mod13766 from "module_13766" /* 13766 */;
import _mod13767 from "module_13767" /* 13767 */;
import _mod13783 from "module_13783" /* 13783 */;

__core_js_shared__ = _mod13766["__core-js_shared__"];
if (!__core_js_shared__) {
  __core_js_shared__ = _mod13767("__core-js_shared__", {});
}
let versions = __core_js_shared__.versions;
if (!versions) {
  const items = [];
  __core_js_shared__.versions = items;
  versions = items;
}
let str2 = "global";
if (_mod13783) {
  str2 = "pure";
}
versions.push({ version: "3.41.0", mode: str2, copyright: "\u00A9 2014-2025 Denis Pushkarev (zloirock.ru)", license: "https://github.com/zloirock/core-js/blob/v3.41.0/LICENSE", source: "https://github.com/zloirock/core-js" });

export default __core_js_shared__;