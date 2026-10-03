// === Module 14075: ? ===

// Module 14075
import _mod14059 from "module_14059" /* 14059 */;
import _mod14060 from "module_14060" /* 14060 */;
import _mod14076 from "module_14076" /* 14076 */;

let prop = _mod14059["__core-js_shared__"];
if (!prop) {
  prop = _mod14060("__core-js_shared__", {});
}
let versions = prop.versions;
if (!versions) {
  const items = [];
  prop.versions = items;
  versions = items;
}
let str2 = "global";
if (_mod14076) {
  str2 = "pure";
}
versions.push({ version: "3.41.0", mode: str2, copyright: "\u00A9 2014-2025 Denis Pushkarev (zloirock.ru)", license: "https://github.com/zloirock/core-js/blob/v3.41.0/LICENSE", source: "https://github.com/zloirock/core-js" });

export default prop;