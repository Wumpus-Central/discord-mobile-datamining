// discord_app/intl/index.native.tsx
import get_ActivityIndicator from "../../_runtime/00017_get_ActivityIndicator.js";
import noopAll from "../../_runtime/00019_noop.js";
import enforcing from "../../discord_common/js/packages/rtn-codegen/js/NativeDeviceLocaleModule.tsx";
import getAvailableLocales2 from "util.tsx";
import Button from "../design/void/native.tsx";
import IntlLink from "native/migration.tsx";
import messagesProxyDefault from "messages/international.messages.js";
import { Fonts } from "../Constants.tsx";
import { jsx } from "../../_runtime/react/00021_jsxProd.js";
import set from "../utils/PlatformUtils.tsx";
import getAvailableLocales from "util.tsx";
import 01155__ from "../../_runtime/metro/01155__.js";

require = arg1;
noopAll;
let obj = { fontFamily: Fonts.PRIMARY_SEMIBOLD };
obj = { fontFamily: Fonts.CODE_NORMAL };
let closure_3 = { strong: obj, italic: { fontStyle: "italic" }, code: obj, del: { textDecorationLine: "line-through", textDecorationStyle: "solid" } };
if (set.isAndroid()) {
  let LocalizationManager = require("enforcing").default;
} else {
  LocalizationManager = get_ActivityIndicator.NativeModules.LocalizationManager;
}
let str = "en-US";
if (null != LocalizationManager) {
  str = LocalizationManager.getConstants().Language;
}
function getSystemLocale(arg0) {
  const tmp = require;
  const tmp3 = get_ActivityIndicator;
  if (obj.isAndroid()) {
    let LocalizationManager = enforcing.default;
  } else {
    LocalizationManager = tmp3.NativeModules.LocalizationManager;
  }
  let Language = arg0;
  if (null != LocalizationManager) {
    Language = LocalizationManager.getConstants().Language;
  }
  return Language;
}
const normalizedLocale = getAvailableLocales.getNormalizedLocale(str, "en-US");
obj = {
  $i(children) {
    return jsx(Button.LegacyText, { style: closure_3.italic, children }, arg1);
  },
  $b(children) {
    return jsx(Button.LegacyText, { style: closure_3.strong, children }, arg1);
  },
  $del(children) {
    return jsx(Button.LegacyText, { style: closure_3.del, children }, arg1);
  },
  $p(children) {
    return jsx(Button.LegacyText, { children }, arg1);
  },
  $code(children) {
    return jsx(Button.LegacyText, { style: closure_3.code, children }, arg1);
  },
  $link(children) {
    [tmp] = arg2;
    return jsx(IntlLink.IntlLink, { target: tmp, children }, arg1);
  }
};
const reactFormatter = module_1155.makeReactFormatter(obj);
const intlManager = new require("../../_runtime/metro/01155__.js").IntlManager({ initialLocale: normalizedLocale, defaultLocale: "en-US" });
set = { format: reactFormatter, formatToPlainString: require("../../_runtime/metro/01155__.js").stringFormatter, formatToMarkdownString: require("../../_runtime/metro/01155__.js").markdownFormatter, formatToParts: require("../../_runtime/metro/01155__.js").astFormatter };
set = intlManager.withFormatters(set);
const result = set.fileFinishedImporting("intl/index.native.tsx");

export const intl = set;
export { getSystemLocale };
export const getAvailableLocales = require("getAvailableLocales").getAvailableLocales;
export const getLanguages = require("getAvailableLocales").getLanguages;
export const useSyncMessages = function useSyncMessages(arg0) {
  return getAvailableLocales2.useSyncMessages(arg0, set);
};
export const t = require("_defaultMessages")._defaultMessages;
export const international = messagesProxyDefault;
export const systemLocale = str;
export const initialLocale = normalizedLocale;