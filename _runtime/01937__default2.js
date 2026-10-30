// _runtime/01937__default2.js
import CanonicalizeLocaleList from "01938_CanonicalizeLocaleList.js";
import 01329__ from "metro/01329__.js";

global.IntlPolyfill = CanonicalizeLocaleList.default;
if (!global.Intl) {
  global.Intl = CanonicalizeLocaleList.default;
  const result = CanonicalizeLocaleList.default.__applyLocaleSensitivePrototypes();
  const _default = CanonicalizeLocaleList.default;
}
const _default2 = CanonicalizeLocaleList.default;
_default2.default = CanonicalizeLocaleList.default;

export default _default2;