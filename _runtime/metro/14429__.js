// === Module 14429: ? ===

// Module 14429
import _mod14413 from "module_14413" /* 14413 */;
import _mod14414 from "module_14414" /* 14414 */;
import _mod14430 from "module_14430" /* 14430 */;

let prop = _mod14413["__core-js_shared__"];
if (!prop) {
  prop = _mod14414("__core-js_shared__", {});
}
let versions = prop.versions;
if (!versions) {
  const items = [];
  prop.versions = items;
  versions = items;
}
let str2 = "global";
if (_mod14430) {
  str2 = "pure";
}
versions.push({ version: "3.41.0", mode: str2, copyright: "\u00A9 2014-2025 Denis Pushkarev (zloirock.ru)", license: "https://github.com/zloirock/core-js/blob/v3.41.0/LICENSE", source: "https://github.com/zloirock/core-js" });

export default prop;