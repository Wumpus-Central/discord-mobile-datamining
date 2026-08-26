// _runtime/13855___core-js_shared__.js
import _mod13839 from "metro/13839__.js";
import _mod13840 from "metro/13840__.js";
import _mod13856 from "metro/13856__.js";

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