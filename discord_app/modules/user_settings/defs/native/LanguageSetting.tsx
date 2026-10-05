// === Module 15242: LanguageSetting ===

// Module 15242 (LanguageSetting)
import Constants from "Constants" /* 1085 */;
import intl2 from "intl" /* 1126 */;
import LanguageIcon from "LanguageIcon" /* 15243 */;
import LocaleStore from "LocaleStore" /* 2116 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 11129 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const UserSettingsSections = Constants.UserSettingsSections;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let locale;
  let stateFromStores;
  let tmp4;
  let tmp5;
  let tmp8;
  const obj = stateFromStores(576);
  const cResult = obj.c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [LocaleStore];
    const fn = function l() {
      return locale.locale;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = stateFromStores(504);
  stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  if (cResult[2] !== stateFromStores) {
    const tmpResult2 = stateFromStores(1126);
    const availableLocales = tmpResult2.getAvailableLocales();
    const found = availableLocales.find((value) => value.value === stateFromStores);
    let stringResult = null;
    if (null != found) {
      const intl = tmp(1126).intl;
      stringResult = intl.string(found.localizedName);
    }
    cResult[2] = stateFromStores;
    cResult[3] = stringResult;
    tmp8 = stringResult;
  } else {
    tmp8 = cResult[3];
  }
  return tmp8;
}) : (() => {
  let closure_0;
  let locale;
  const items = [LocaleStore];
  const obj = require("get initialized");
  const tmp = _require;
  _require = obj.useStateFromStores(items, () => locale.locale);
  const obj2 = require("intl");
  const availableLocales = obj2.getAvailableLocales();
  const found = availableLocales.find((value) => value.value === closure_0);
  let stringResult = null;
  if (null != found) {
    const intl = tmp(1126).intl;
    stringResult = intl.string(found.localizedName);
  }
  return stringResult;
});
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t.IHMsPn);
  },
  parent: null,
  IconComponent: LanguageIcon.LanguageIcon,
  useTrailing: tmp2,
  screen: {
    route: UserSettingsSections.LANGUAGE,
    getComponent() {
      return require("UserSettingsLocale").default;
    }
  }
};
const route = SettingBuilders.createRoute(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/LanguageSetting.tsx");

export default route;