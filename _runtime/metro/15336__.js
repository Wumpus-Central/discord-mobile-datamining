// === Module 15336: ? ===

// Module 15336
import _mod15320 from "module_15320" /* 15320 */;
import _mod15321 from "module_15321" /* 15321 */;
import _mod15337 from "module_15337" /* 15337 */;

let prop = _mod15320["__core-js_shared__"];
if (!prop) {
  prop = _mod15321("__core-js_shared__", {});
}
let versions = prop.versions;
if (!versions) {
  const items = [];
  prop.versions = items;
  versions = items;
}
let str2 = "global";
if (_mod15337) {
  str2 = "pure";
}
versions.push({ version: "3.41.0", mode: str2, copyright: "\u00A9 2014-2025 Denis Pushkarev (zloirock.ru)", license: "https://github.com/zloirock/core-js/blob/v3.41.0/LICENSE", source: "https://github.com/zloirock/core-js" });

export default prop;