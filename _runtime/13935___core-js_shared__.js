// _runtime/13935___core-js_shared__.js
import _mod13919 from "metro/13919__.js";
import _mod13920 from "metro/13920__.js";
import _mod13936 from "metro/13936__.js";

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