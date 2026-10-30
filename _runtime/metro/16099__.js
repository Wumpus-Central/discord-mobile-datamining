// === Module 16099: ? ===

// Module 16099
import _mod16083 from "module_16083" /* 16083 */;
import _mod16084 from "module_16084" /* 16084 */;
import _mod16100 from "module_16100" /* 16100 */;

let prop = _mod16083["__core-js_shared__"];
if (!prop) {
  prop = _mod16084("__core-js_shared__", {});
}
let versions = prop.versions;
if (!versions) {
  const items = [];
  prop.versions = items;
  versions = items;
}
let str2 = "global";
if (_mod16100) {
  str2 = "pure";
}
versions.push({ version: "3.41.0", mode: str2, copyright: "\u00A9 2014-2025 Denis Pushkarev (zloirock.ru)", license: "https://github.com/zloirock/core-js/blob/v3.41.0/LICENSE", source: "https://github.com/zloirock/core-js" });

export default prop;