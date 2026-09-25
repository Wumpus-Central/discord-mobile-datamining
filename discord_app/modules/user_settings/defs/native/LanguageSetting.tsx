// discord_app/modules/user_settings/defs/native/LanguageSetting.tsx
import util from "../../../../intl/index.native.tsx";
import LocaleStore from "../../LocaleStore.tsx";

require = fn;
const SettingBuilders = fn(10993);
const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.IHMsPn);
  },
  parent: null,
  IconComponent: fn(14944).LanguageIcon,
  useTrailing: function useLanguageSettingTrailing() {
    const items = [LocaleStore];
    _require = require("initialize").useStateFromStores(items, () => locale.locale);
    const obj = require("initialize");
    const tmp = _require;
    const availableLocales = require("util").getAvailableLocales();
    const found = availableLocales.find((value) => value.value === closure_0);
    let stringResult = null;
    if (null != found) {
      const intl = tmp(1115).intl;
      stringResult = intl.string(found.localizedName);
    }
    return stringResult;
  },
  screen: {
    route: fn(1074).UserSettingsSections.LANGUAGE,
    getComponent() {
      return require("UserSettingsLocale").default;
    },
  },
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/LanguageSetting.tsx");

export default route;
