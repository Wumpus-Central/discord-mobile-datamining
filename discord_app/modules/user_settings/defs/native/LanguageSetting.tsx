// === Module 15420: LanguageSetting ===

// Module 15420 (LanguageSetting)
import util from "util" /* 1114 */;
import LocaleStore from "LocaleStore" /* 2025 */;

require = fn;
fn(11468);
let SettingBuilders = {
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.IHMsPn);
  },
  parent: null,
  IconComponent: fn(15421).LanguageIcon,
  useTrailing: function useLanguageSettingTrailing() {
    const items = [LocaleStore];
    _require = require("initialize").useStateFromStores(items, () => locale.locale);
    const obj = require("initialize");
    const tmp = _require;
    const availableLocales = require("util").getAvailableLocales();
    const found = availableLocales.find((value) => value.value === closure_0);
    let stringResult = null;
    if (null != found) {
      const intl = tmp(1114).intl;
      stringResult = intl.string(found.localizedName);
    }
    return stringResult;
  },
  screen: {
    route: fn(1074).UserSettingsSections.LANGUAGE,
    getComponent() {
      return require("UserSettingsLocale").default;
    }
  }
};
SettingBuilders = SettingBuilders.createRoute(SettingBuilders);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/LanguageSetting.tsx");

export default SettingBuilders;