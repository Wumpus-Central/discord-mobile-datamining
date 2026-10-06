// === Module 14095: ? ===

// Module 14095
import _mod14079 from "module_14079" /* 14079 */;
import _mod14080 from "module_14080" /* 14080 */;
import _mod14096 from "module_14096" /* 14096 */;

const prop = _mod14079["__core-js_shared__"] || _mod14080("__core-js_shared__", {});
let versions = prop.versions;
if (!versions) {
  const items = [];
  prop.versions = items;
  versions = items;
}
const push = versions.push;
let str2 = "global";
if (_mod14096) {
  str2 = "pure";
}
push({ version: "3.41.0", mode: str2, copyright: "\u00A9 2014-2025 Denis Pushkarev (zloirock.ru)", license: "https://github.com/zloirock/core-js/blob/v3.41.0/LICENSE", source: "https://github.com/zloirock/core-js" });

export default prop;