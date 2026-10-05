// discord_app/intl/index.native.tsx
import Fragment from "../../_runtime/react/00021_Fragment.js";
import Constants from "../Constants.tsx";
import react_native from "../../discord_common/js/packages/rtn-codegen/js/NativeDeviceLocaleModule.tsx";
import native from "../design/void/native.tsx";
import migration from "native/migration.tsx";
import defaultMessageProxy from "defaultMessageProxy.tsx";
import _modDef13952 from "messages/international.messages.js";
import react from "../../_runtime/00019_react.js";
import util from "util.tsx";
import 01165__ from "../../_runtime/metro/01165__.js";
import ReactCompilerGating_mod from "../modules/react_compiler/ReactCompilerGating.tsx";
import size from "../../_runtime/metro/00002__.js";

const Fonts = Constants.Fonts;
const jsx = Fragment.jsx;
let obj = { strong: { fontFamily: Fonts.PRIMARY_SEMIBOLD }, italic: { fontStyle: "italic" }, code: { fontFamily: Fonts.CODE_NORMAL }, del: { textDecorationLine: "line-through", textDecorationStyle: "solid" } };
let _default = react_native.default;
let str = "en-US";
if (null != _default) {
  str = _default.getConstants().Language;
}
function getSystemLocale(arg0) {
  let Language = arg0;
  const _default = react_native.default;
  if (null != _default) {
    Language = _default.getConstants().Language;
  }
  return Language;
}
const normalizedLocale = util.getNormalizedLocale(str, "en-US");
const obj2 = {
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
    let tmp;
    [tmp] = arg2;
    return jsx(migration.IntlLink, { target: tmp, children }, key);
  }
};
const reactFormatter = module_1165.makeReactFormatter(obj2);
const obj3 = { initialLocale: normalizedLocale, defaultLocale: "en-US" };
const intlManager = new module_1165.IntlManager(obj3);
const obj4 = { format: reactFormatter, formatToPlainString: module_1165.stringFormatter, formatToMarkdownString: module_1165.markdownFormatter, formatToParts: module_1165.astFormatter };
const withFormattersResult = intlManager.withFormatters(obj4);
let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const result1 = size.fileFinishedImporting("intl/index.native.tsx");

export const intl = withFormattersResult;
export { getSystemLocale };
export const getAvailableLocales = util.getAvailableLocales;
export const getLanguages = util.getLanguages;
export const useSyncMessages = (messagesLoader) => {
  obj = util;
  return obj.useSyncMessages(messagesLoader, withFormattersResult);
};
export const t = defaultMessageProxy._defaultMessages;
export const international = _modDef13952;
export const systemLocale = str;
export const initialLocale = normalizedLocale;