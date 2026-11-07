// === Module 16447: ? ===

// Module 16447
import _mod16431 from "module_16431" /* 16431 */;
import _mod16432 from "module_16432" /* 16432 */;
import _mod16448 from "module_16448" /* 16448 */;

let prop = _mod16431["__core-js_shared__"];
if (!prop) {
  prop = _mod16432("__core-js_shared__", {});
}
let versions = prop.versions;
if (!versions) {
  const items = [];
  prop.versions = items;
  versions = items;
}
let str2 = "global";
if (_mod16448) {
  str2 = "pure";
}
versions.push({ version: "3.41.0", mode: str2, copyright: "\u00A9 2014-2025 Denis Pushkarev (zloirock.ru)", license: "https://github.com/zloirock/core-js/blob/v3.41.0/LICENSE", source: "https://github.com/zloirock/core-js" });

export default prop;