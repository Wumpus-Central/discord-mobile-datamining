// _runtime/01941__default2.js
import CanonicalizeLocaleList from "01942_CanonicalizeLocaleList.js";
import 01340__ from "metro/01340__.js";

global.IntlPolyfill = CanonicalizeLocaleList.default;
if (!global.Intl) {
  global.Intl = CanonicalizeLocaleList.default;
  const result = CanonicalizeLocaleList.default.__applyLocaleSensitivePrototypes();
  const _default = CanonicalizeLocaleList.default;
}
const _default2 = CanonicalizeLocaleList.default;
_default2.default = CanonicalizeLocaleList.default;

export default _default2;