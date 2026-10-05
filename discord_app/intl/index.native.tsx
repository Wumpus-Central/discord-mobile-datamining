// discord_app/intl/index.native.tsx
import NativeDeviceLocaleModule from "../../discord_common/js/packages/rtn-codegen/js/NativeDeviceLocaleModule.tsx";
import intl_util from "util.tsx";
import native from "../design/void/native.tsx";
import migration from "native/migration.tsx";
import _modDef13952 from "messages/international.messages.js";
import noop from "../../_runtime/metro/00019__.js";

require = fn;
const Fonts = fn(1085).Fonts;
const jsx = fn(21).jsx;
let obj = {
  strong: { fontFamily: Fonts.PRIMARY_SEMIBOLD },
  italic: { fontStyle: "italic" },
  code: { fontFamily: Fonts.CODE_NORMAL },
  del: { textDecorationLine: "line-through", textDecorationStyle: "solid" },
};
let _default = fn(1127).default;
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
const util = fn(1128);
const normalizedLocale = util.getNormalizedLocale(str, "en-US");
const module_1165 = fn(1165);
const reactFormatter = module_1165.makeReactFormatter({
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
  },
});
const intlManager = new fn(1165).IntlManager({ initialLocale: normalizedLocale, defaultLocale: "en-US" });
const withFormattersResult = intlManager.withFormatters({
  format: reactFormatter,
  formatToPlainString: fn(1165).stringFormatter,
  formatToMarkdownString: fn(1165).markdownFormatter,
  formatToParts: fn(1165).astFormatter,
});
let ReactCompilerGating = fn(558);
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const size = fn(2);
const result1 = size.fileFinishedImporting("intl/index.native.tsx");

export const intl = withFormattersResult;
export { getSystemLocale };
export const getAvailableLocales = fn(1128).getAvailableLocales;
export const getLanguages = fn(1128).getLanguages;
export const useSyncMessages = (messagesLoader) => intl_util.useSyncMessages(messagesLoader, withFormattersResult);
export const t = fn(13949)._defaultMessages;
export const international = _modDef13952;
export const systemLocale = str;
export const initialLocale = normalizedLocale;
