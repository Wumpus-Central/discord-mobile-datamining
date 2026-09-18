// === Module 14532: ? ===

// Module 14532
import _mod14516 from "module_14516" /* 14516 */;
import _mod14517 from "module_14517" /* 14517 */;
import _mod14533 from "module_14533" /* 14533 */;

let prop = _mod14516["__core-js_shared__"];
if (!prop) {
  prop = _mod14517("__core-js_shared__", {});
}
let versions = prop.versions;
if (!versions) {
  const items = [];
  prop.versions = items;
  versions = items;
}
let str2 = "global";
if (_mod14533) {
  str2 = "pure";
}
versions.push({ version: "3.41.0", mode: str2, copyright: "\u00A9 2014-2025 Denis Pushkarev (zloirock.ru)", license: "https://github.com/zloirock/core-js/blob/v3.41.0/LICENSE", source: "https://github.com/zloirock/core-js" });

export default prop;