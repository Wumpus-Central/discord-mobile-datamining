// === Module 14313: ? ===

// Module 14313
import _mod14297 from "module_14297" /* 14297 */;
import _mod14298 from "module_14298" /* 14298 */;
import _mod14314 from "module_14314" /* 14314 */;

let prop = _mod14297["__core-js_shared__"];
if (!prop) {
  prop = _mod14298("__core-js_shared__", {});
}
let versions = prop.versions;
if (!versions) {
  const items = [];
  prop.versions = items;
  versions = items;
}
let str2 = "global";
if (_mod14314) {
  str2 = "pure";
}
versions.push({ version: "3.41.0", mode: str2, copyright: "\u00A9 2014-2025 Denis Pushkarev (zloirock.ru)", license: "https://github.com/zloirock/core-js/blob/v3.41.0/LICENSE", source: "https://github.com/zloirock/core-js" });

export default prop;