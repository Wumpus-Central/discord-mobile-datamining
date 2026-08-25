// _runtime/13782___core-js_shared__.js
import _mod13766 from "metro/13766__.js";
import _mod13767 from "metro/13767__.js";
import _mod13783 from "metro/13783__.js";

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