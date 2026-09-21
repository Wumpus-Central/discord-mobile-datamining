// === Module 14593: ? ===

// Module 14593
import _mod14577 from "module_14577" /* 14577 */;
import _mod14578 from "module_14578" /* 14578 */;
import _mod14594 from "module_14594" /* 14594 */;

let prop = _mod14577["__core-js_shared__"];
if (!prop) {
  prop = _mod14578("__core-js_shared__", {});
}
let versions = prop.versions;
if (!versions) {
  const items = [];
  prop.versions = items;
  versions = items;
}
let str2 = "global";
if (_mod14594) {
  str2 = "pure";
}
versions.push({ version: "3.41.0", mode: str2, copyright: "\u00A9 2014-2025 Denis Pushkarev (zloirock.ru)", license: "https://github.com/zloirock/core-js/blob/v3.41.0/LICENSE", source: "https://github.com/zloirock/core-js" });

export default prop;