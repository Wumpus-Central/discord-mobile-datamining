// === Module 14926: ? ===

// Module 14926
import _mod14910 from "module_14910" /* 14910 */;
import _mod14911 from "module_14911" /* 14911 */;
import _mod14927 from "module_14927" /* 14927 */;

let prop = _mod14910["__core-js_shared__"];
if (!prop) {
  prop = _mod14911("__core-js_shared__", {});
}
let versions = prop.versions;
if (!versions) {
  const items = [];
  prop.versions = items;
  versions = items;
}
let str2 = "global";
if (_mod14927) {
  str2 = "pure";
}
versions.push({ version: "3.41.0", mode: str2, copyright: "\u00A9 2014-2025 Denis Pushkarev (zloirock.ru)", license: "https://github.com/zloirock/core-js/blob/v3.41.0/LICENSE", source: "https://github.com/zloirock/core-js" });

export default prop;