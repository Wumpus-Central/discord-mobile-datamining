// discord_app/intl/index.native.tsx
import _mod17 from "../../_runtime/metro/00017__.js";
import NativeDeviceLocaleModule from "../../discord_common/js/packages/rtn-codegen/js/NativeDeviceLocaleModule.tsx";
import intl_util from "util.tsx";
import native from "../design/void/native.tsx";
import migration from "native/migration.tsx";
import _modDef14188 from "messages/international.messages.js";
import noop from "../../_runtime/metro/00019__.js";

require = fn;
const Fonts = fn(1074).Fonts;
const jsx = fn(21).jsx;
let obj = {
  strong: { fontFamily: Fonts.PRIMARY_SEMIBOLD },
  italic: { fontStyle: "italic" },
  code: { fontFamily: Fonts.CODE_NORMAL },
  del: { textDecorationLine: "line-through", textDecorationStyle: "solid" },
};
get_ActivityIndicator = fn(17);
let PlatformUtils = fn(1115);
if (PlatformUtils.isAndroid()) {
  let LocalizationManager = fn(1117).default;
} else {
  LocalizationManager = get_ActivityIndicator.NativeModules.LocalizationManager;
}
let str = "en-US";
if (null != LocalizationManager) {
  str = LocalizationManager.getConstants().Language;
}
function getSystemLocale(arg0) {
  const tmp3 = _mod17;
  if (obj.isAndroid()) {
    let LocalizationManager = NativeDeviceLocaleModule.default;
  } else {
    LocalizationManager = tmp3.NativeModules.LocalizationManager;
  }
  let Language = arg0;
  if (null != LocalizationManager) {
    Language = LocalizationManager.getConstants().Language;
  }
  return Language;
}
const util = fn(1118);
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
  },
};
const reactFormatter = module_1155.makeReactFormatter(obj);
obj = { initialLocale: normalizedLocale, defaultLocale: "en-US" };
const intlManager = new fn(1155).IntlManager(obj);
PlatformUtils = {
  format: reactFormatter,
  formatToPlainString: fn(1155).stringFormatter,
  formatToMarkdownString: fn(1155).markdownFormatter,
  formatToParts: fn(1155).astFormatter,
};
PlatformUtils = intlManager.withFormatters(PlatformUtils);
const size = fn(2);
const result = size.fileFinishedImporting("intl/index.native.tsx");

export const intl = PlatformUtils;
export { getSystemLocale };
export const getAvailableLocales = fn(1118).getAvailableLocales;
export const getLanguages = fn(1118).getLanguages;
export const useSyncMessages = function useSyncMessages(arg0) {
  return intl_util.useSyncMessages(arg0, PlatformUtils);
};
export const t = fn(14185)._defaultMessages;
export const international = _modDef14188;
export const systemLocale = str;
export const initialLocale = normalizedLocale;
