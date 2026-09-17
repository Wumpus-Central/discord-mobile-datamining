// === Module 14437: ? ===

// Module 14437
import _mod14421 from "module_14421" /* 14421 */;
import _mod14422 from "module_14422" /* 14422 */;
import _mod14438 from "module_14438" /* 14438 */;

let prop = _mod14421["__core-js_shared__"];
if (!prop) {
  prop = _mod14422("__core-js_shared__", {});
}
let versions = prop.versions;
if (!versions) {
  const items = [];
  prop.versions = items;
  versions = items;
}
let str2 = "global";
if (_mod14438) {
  str2 = "pure";
}
versions.push({ version: "3.41.0", mode: str2, copyright: "\u00A9 2014-2025 Denis Pushkarev (zloirock.ru)", license: "https://github.com/zloirock/core-js/blob/v3.41.0/LICENSE", source: "https://github.com/zloirock/core-js" });

export default prop;