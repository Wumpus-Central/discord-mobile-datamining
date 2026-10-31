// === Module 17402: LanguageSetting ===

// Module 17402 (LanguageSetting)
import util from "util" /* 1113 */;
import LocaleStore from "LocaleStore" /* 2062 */;

require = fn;
const SettingBuilders = fn(11539);
const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.IHMsPn);
  },
  parent: null,
  IconComponent: fn(9620).LanguageIcon,
  useTrailing: function useLanguageSettingTrailing() {
    const items = [LocaleStore];
    _require = require("initialize").useStateFromStores(items, () => locale.locale);
    const obj = require("initialize");
    const tmp = _require;
    const availableLocales = require("util").getAvailableLocales();
    const found = availableLocales.find((value) => value.value === closure_0);
    let stringResult = null;
    if (null != found) {
      const intl = tmp(1113).intl;
      stringResult = intl.string(found.localizedName);
    }
    return stringResult;
  },
  screen: {
    route: fn(1072).UserSettingsSections.LANGUAGE,
    getComponent() {
      return require("UserSettingsLocale").default;
    }
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/LanguageSetting.tsx");

export default route;