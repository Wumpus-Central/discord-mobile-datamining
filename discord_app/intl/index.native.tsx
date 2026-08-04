import "noop";
import { Fonts } from "ME";
import { jsx } from "jsxProd";
import get_ActivityIndicator from "get ActivityIndicator";
import set from "set";
import getAvailableLocales from "getAvailableLocales";
import module_1274 from "module_1274";
import set from "jsxProd";

const require = arg1;
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
  const tmp3 = require(17) /* get ActivityIndicator */;
  if (obj.isAndroid()) {
    let LocalizationManager = tmp(666).default;
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
    return jsx(require(1297) /* Button */.LegacyText, { style: closure_3.italic, children }, arg1);
  },
  $b(children) {
    return jsx(require(1297) /* Button */.LegacyText, { style: closure_3.strong, children }, arg1);
  },
  $del(children) {
    return jsx(require(1297) /* Button */.LegacyText, { style: closure_3.del, children }, arg1);
  },
  $p(children) {
    return jsx(require(1297) /* Button */.LegacyText, { children }, arg1);
  },
  $code(children) {
    return jsx(require(1297) /* Button */.LegacyText, { style: closure_3.code, children }, arg1);
  },
  $link(children) {
    let tmp;
    [tmp] = arg2;
    return jsx(require(13352) /* IntlLink */.IntlLink, { target: tmp, children }, arg1);
  }
};
const reactFormatter = module_1274.makeReactFormatter(obj);
const intlManager = new require("module_1274").IntlManager({ initialLocale: normalizedLocale, defaultLocale: "en-US" });
set = { format: reactFormatter, formatToPlainString: require("module_1274").stringFormatter, formatToMarkdownString: require("module_1274").markdownFormatter, formatToParts: require("module_1274").astFormatter };
set = intlManager.withFormatters(set);
const result = set.fileFinishedImporting("intl/index.native.tsx");

export const intl = set;
export { getSystemLocale };
export const getAvailableLocales = require("getAvailableLocales").getAvailableLocales;
export const getLanguages = require("getAvailableLocales").getLanguages;
export const useSyncMessages = function useSyncMessages(arg0) {
  return require(1237) /* getAvailableLocales */.useSyncMessages(arg0, set);
};
export const t = require("_defaultMessages")._defaultMessages;
export const international = require("messagesProxy");
export const systemLocale = str;
export const initialLocale = normalizedLocale;