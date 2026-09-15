// === Module 14411: ? ===

// Module 14411
import _mod14395 from "module_14395" /* 14395 */;
import _mod14396 from "module_14396" /* 14396 */;
import _mod14412 from "module_14412" /* 14412 */;

let prop = _mod14395["__core-js_shared__"];
if (!prop) {
  prop = _mod14396("__core-js_shared__", {});
}
let versions = prop.versions;
if (!versions) {
  const items = [];
  prop.versions = items;
  versions = items;
}
let str2 = "global";
if (_mod14412) {
  str2 = "pure";
}
versions.push({ version: "3.41.0", mode: str2, copyright: "\u00A9 2014-2025 Denis Pushkarev (zloirock.ru)", license: "https://github.com/zloirock/core-js/blob/v3.41.0/LICENSE", source: "https://github.com/zloirock/core-js" });

export default prop;