// === Module 16640: ? ===

// Module 16640
import _mod16624 from "module_16624" /* 16624 */;
import _mod16625 from "module_16625" /* 16625 */;
import _mod16641 from "module_16641" /* 16641 */;

let prop = _mod16624["__core-js_shared__"];
if (!prop) {
  prop = _mod16625("__core-js_shared__", {});
}
let versions = prop.versions;
if (!versions) {
  const items = [];
  prop.versions = items;
  versions = items;
}
let str2 = "global";
if (_mod16641) {
  str2 = "pure";
}
versions.push({ version: "3.41.0", mode: str2, copyright: "\u00A9 2014-2025 Denis Pushkarev (zloirock.ru)", license: "https://github.com/zloirock/core-js/blob/v3.41.0/LICENSE", source: "https://github.com/zloirock/core-js" });

export default prop;