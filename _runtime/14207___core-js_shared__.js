// _runtime/14207___core-js_shared__.js
import _mod14191 from "metro/14191__.js";
import _mod14192 from "metro/14192__.js";
import _mod14208 from "metro/14208__.js";

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
versions.push({
  version: "3.41.0",
  mode: str2,
  copyright: "\u00A9 2014-2025 Denis Pushkarev (zloirock.ru)",
  license: "https://github.com/zloirock/core-js/blob/v3.41.0/LICENSE",
  source: "https://github.com/zloirock/core-js",
});

export default __core_js_shared__;
