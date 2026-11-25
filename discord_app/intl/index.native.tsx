// discord_app/intl/index.native.tsx
import NativeDeviceLocaleModule from "../../discord_common/js/packages/rtn-codegen/js/NativeDeviceLocaleModule.tsx";
import intl_util from "util.tsx";
import native from "../design/void/native.tsx";
import IntlLink from "native/IntlLink.tsx";
import _modDef15571 from "messages/international.messages.js";
import noop from "../../_runtime/metro/00019__.js";

require = fn;
const Fonts = fn(1071).Fonts;
const jsx = fn(21).jsx;
let obj = {
  strong: { fontFamily: Fonts.PRIMARY_SEMIBOLD },
  italic: { fontStyle: "italic" },
  code: { fontFamily: Fonts.CODE_NORMAL },
  del: { textDecorationLine: "line-through", textDecorationStyle: "solid" },
};
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
  },
});
const intlManager = new fn(1151).IntlManager({ initialLocale: normalizedLocale, defaultLocale: "en-US" });
const withFormattersResult = intlManager.withFormatters({
  format: reactFormatter,
  formatToPlainString: fn(1151).stringFormatter,
  formatToMarkdownString: fn(1151).markdownFormatter,
  formatToParts: fn(1151).astFormatter,
});
const size = fn(2);
const result = size.fileFinishedImporting("intl/index.native.tsx");

export const intl = withFormattersResult;
export { getSystemLocale };
export const getAvailableLocales = fn(1114).getAvailableLocales;
export const getLanguages = fn(1114).getLanguages;
export function useSyncMessages(arg0) {
  return intl_util.useSyncMessages(arg0, withFormattersResult);
}
export const t = fn(15566)._defaultMessages;
export const international = _modDef15571;
export const systemLocale = str;
export const initialLocale = normalizedLocale;
