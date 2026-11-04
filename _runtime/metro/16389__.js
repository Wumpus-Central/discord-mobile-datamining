// === Module 16389: ? ===

// Module 16389
import _mod16373 from "module_16373" /* 16373 */;
import _mod16374 from "module_16374" /* 16374 */;
import _mod16390 from "module_16390" /* 16390 */;

let prop = _mod16373["__core-js_shared__"];
if (!prop) {
  prop = _mod16374("__core-js_shared__", {});
}
let versions = prop.versions;
if (!versions) {
  const items = [];
  prop.versions = items;
  versions = items;
}
let str2 = "global";
if (_mod16390) {
  str2 = "pure";
}
versions.push({ version: "3.41.0", mode: str2, copyright: "\u00A9 2014-2025 Denis Pushkarev (zloirock.ru)", license: "https://github.com/zloirock/core-js/blob/v3.41.0/LICENSE", source: "https://github.com/zloirock/core-js" });

export default prop;