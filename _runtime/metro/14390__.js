// === Module 14390: ? ===

// Module 14390
import _mod14374 from "module_14374" /* 14374 */;
import _mod14375 from "module_14375" /* 14375 */;
import _mod14391 from "module_14391" /* 14391 */;

let prop = _mod14374["__core-js_shared__"];
if (!prop) {
  prop = _mod14375("__core-js_shared__", {});
}
let versions = prop.versions;
if (!versions) {
  const items = [];
  prop.versions = items;
  versions = items;
}
let str2 = "global";
if (_mod14391) {
  str2 = "pure";
}
versions.push({ version: "3.41.0", mode: str2, copyright: "\u00A9 2014-2025 Denis Pushkarev (zloirock.ru)", license: "https://github.com/zloirock/core-js/blob/v3.41.0/LICENSE", source: "https://github.com/zloirock/core-js" });

export default prop;