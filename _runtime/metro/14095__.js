// _runtime/metro/14095__.js
import _mod14079 from "14079__.js";
import _mod14080 from "14080__.js";
import _mod14096 from "14096__.js";

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
push({
  version: "3.41.0",
  mode: str2,
  copyright: "\u00A9 2014-2025 Denis Pushkarev (zloirock.ru)",
  license: "https://github.com/zloirock/core-js/blob/v3.41.0/LICENSE",
  source: "https://github.com/zloirock/core-js",
});

export default prop;
