// === Module 14567: ? ===

// Module 14567
import _mod14551 from "module_14551" /* 14551 */;
import _mod14552 from "module_14552" /* 14552 */;
import _mod14568 from "module_14568" /* 14568 */;

let prop = _mod14551["__core-js_shared__"];
if (!prop) {
  prop = _mod14552("__core-js_shared__", {});
}
let versions = prop.versions;
if (!versions) {
  const items = [];
  prop.versions = items;
  versions = items;
}
let str2 = "global";
if (_mod14568) {
  str2 = "pure";
}
versions.push({ version: "3.41.0", mode: str2, copyright: "\u00A9 2014-2025 Denis Pushkarev (zloirock.ru)", license: "https://github.com/zloirock/core-js/blob/v3.41.0/LICENSE", source: "https://github.com/zloirock/core-js" });

export default prop;