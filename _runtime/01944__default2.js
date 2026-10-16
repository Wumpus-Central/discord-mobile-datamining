// _runtime/01944__default2.js
import CanonicalizeLocaleList from "01945_CanonicalizeLocaleList.js";
import 01343__ from "metro/01343__.js";

global.IntlPolyfill = CanonicalizeLocaleList.default;
if (!global.Intl) {
  global.Intl = CanonicalizeLocaleList.default;
  const result = CanonicalizeLocaleList.default.__applyLocaleSensitivePrototypes();
  const _default = CanonicalizeLocaleList.default;
}
const _default2 = CanonicalizeLocaleList.default;
_default2.default = CanonicalizeLocaleList.default;

export default _default2;