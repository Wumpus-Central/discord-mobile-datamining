// === Module 14366: ? ===

// Module 14366
import _mod14350 from "module_14350" /* 14350 */;
import _mod14351 from "module_14351" /* 14351 */;
import _mod14367 from "module_14367" /* 14367 */;

let prop = _mod14350["__core-js_shared__"];
if (!prop) {
  prop = _mod14351("__core-js_shared__", {});
}
let versions = prop.versions;
if (!versions) {
  const items = [];
  prop.versions = items;
  versions = items;
}
let str2 = "global";
if (_mod14367) {
  str2 = "pure";
}
versions.push({ version: "3.41.0", mode: str2, copyright: "\u00A9 2014-2025 Denis Pushkarev (zloirock.ru)", license: "https://github.com/zloirock/core-js/blob/v3.41.0/LICENSE", source: "https://github.com/zloirock/core-js" });

export default prop;