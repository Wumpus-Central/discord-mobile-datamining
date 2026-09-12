// === Module 1114: util ===

// Module 1114 (util)
import NativeDeviceLocaleModule from "NativeDeviceLocaleModule" /* 1115 */;
import intl_util from "intl/util" /* 1116 */;
import native from "native" /* 1178 */;
import migration from "migration" /* 14272 */;
import _modDef14276 from "module_14276" /* 14276 */;
import noop from "module_19" /* 19 */;

require = fn;
const Fonts = fn(1074).Fonts;
const jsx = fn(21).jsx;
let obj = { strong: { fontFamily: Fonts.PRIMARY_SEMIBOLD }, italic: { fontStyle: "italic" }, code: { fontFamily: Fonts.CODE_NORMAL }, del: { textDecorationLine: "line-through", textDecorationStyle: "solid" } };
let _default = fn(1115).default;
let str = "en-US";
if (null != _default) {
  str = _default.getConstants().Language;
}
function getSystemLocale(arg0) {
  let Language = arg0;
  const _default = NativeDeviceLocaleModule.default;
  if (null != _default) {
    Language = _default.getConstants().Language;
  }
  return Language;
}
let util = fn(1116);
const normalizedLocale = util.getNormalizedLocale(str, "en-US");
const module_1155 = fn(1155);
obj = {
  $i(children, key) {
    obj = { style: obj.italic, children };
    return jsx(native.LegacyText, { style: obj.italic, children }, key);
  },
  $b(children, key) {
    obj = { style: obj.strong, children };
    return jsx(native.LegacyText, { style: obj.strong, children }, key);
  },
  $del(children, key) {
    obj = { style: obj.del, children };
    return jsx(native.LegacyText, { style: obj.del, children }, key);
  },
  $p(children, key) {
    return jsx(native.LegacyText, { children }, key);
  },
  $code(children, key) {
    obj = { style: obj.code, children };
    return jsx(native.LegacyText, { style: obj.code, children }, key);
  },
  $link(children, key, arg2) {
    [tmp] = arg2;
    return jsx(migration.IntlLink, { target: tmp, children }, key);
  }
};
const reactFormatter = module_1155.makeReactFormatter(obj);
obj = { initialLocale: normalizedLocale, defaultLocale: "en-US" };
const intlManager = new fn(1155).IntlManager(obj);
util = { format: reactFormatter, formatToPlainString: fn(1155).stringFormatter, formatToMarkdownString: fn(1155).markdownFormatter, formatToParts: fn(1155).astFormatter };
util = intlManager.withFormatters(util);
const size = fn(2);
const result = size.fileFinishedImporting("intl/index.native.tsx");

export const intl = util;
export { getSystemLocale };
export const getAvailableLocales = fn(1116).getAvailableLocales;
export const getLanguages = fn(1116).getLanguages;
export const useSyncMessages = function useSyncMessages(arg0) {
  return intl_util.useSyncMessages(arg0, util);
};
export const t = fn(14273)._defaultMessages;
export const international = _modDef14276;
export const systemLocale = str;
export const initialLocale = normalizedLocale;