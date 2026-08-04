// _runtime/16110__default2.js
import module_576 from "module_576";
import { default as _default2 } from "CanonicalizeLocaleList";

global.IntlPolyfill = require("CanonicalizeLocaleList").default;
if (!global.Intl) {
  global.Intl = require("CanonicalizeLocaleList").default;
  const result = require("CanonicalizeLocaleList").default.__applyLocaleSensitivePrototypes();
  const _default = require("CanonicalizeLocaleList").default;
}
_default2.default = require("CanonicalizeLocaleList").default;

export default _default2;