// === Module 14077: ? ===

// Module 14077
import _mod14061 from "module_14061" /* 14061 */;
import _mod14062 from "module_14062" /* 14062 */;
import _mod14078 from "module_14078" /* 14078 */;

let prop = _mod14061["__core-js_shared__"];
if (!prop) {
  prop = _mod14062("__core-js_shared__", {});
}
let versions = prop.versions;
if (!versions) {
  const items = [];
  prop.versions = items;
  versions = items;
}
let str2 = "global";
if (_mod14078) {
  str2 = "pure";
}
versions.push({ version: "3.41.0", mode: str2, copyright: "\u00A9 2014-2025 Denis Pushkarev (zloirock.ru)", license: "https://github.com/zloirock/core-js/blob/v3.41.0/LICENSE", source: "https://github.com/zloirock/core-js" });

export default prop;