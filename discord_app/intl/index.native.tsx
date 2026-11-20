// === Module 1112: util ===

// Module 1112 (util)
import NativeDeviceLocaleModule from "NativeDeviceLocaleModule" /* 1113 */;
import intl_util from "intl/util" /* 1114 */;
import native from "native" /* 1186 */;
import IntlLink from "IntlLink" /* 10513 */;
import _modDef15305 from "module_15305" /* 15305 */;
import noop from "module_19" /* 19 */;

require = fn;
const Fonts = fn(1071).Fonts;
const jsx = fn(21).jsx;
let obj = { strong: { fontFamily: Fonts.PRIMARY_SEMIBOLD }, italic: { fontStyle: "italic" }, code: { fontFamily: Fonts.CODE_NORMAL }, del: { textDecorationLine: "line-through", textDecorationStyle: "solid" } };
let _default = fn(1113).default;
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
const util = fn(1114);
const normalizedLocale = util.getNormalizedLocale(str, "en-US");
const module_1151 = fn(1151);
const reactFormatter = module_1151.makeReactFormatter({
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
    return jsx(IntlLink.IntlLink, { target: tmp, children }, key);
  }
});
const intlManager = new fn(1151).IntlManager({ initialLocale: normalizedLocale, defaultLocale: "en-US" });
const withFormattersResult = intlManager.withFormatters({ format: reactFormatter, formatToPlainString: fn(1151).stringFormatter, formatToMarkdownString: fn(1151).markdownFormatter, formatToParts: fn(1151).astFormatter });
const size = fn(2);
const result = size.fileFinishedImporting("intl/index.native.tsx");

export const intl = withFormattersResult;
export { getSystemLocale };
export const getAvailableLocales = fn(1114).getAvailableLocales;
export const getLanguages = fn(1114).getLanguages;
export function useSyncMessages(arg0) {
  return intl_util.useSyncMessages(arg0, withFormattersResult);
}
export const t = fn(15300)._defaultMessages;
export const international = _modDef15305;
export const systemLocale = str;
export const initialLocale = normalizedLocale;