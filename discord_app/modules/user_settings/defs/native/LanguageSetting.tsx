// === Module 14728: route ===

// Module 14728 (route)
import getSystemLocale from "getSystemLocale" /* 1236 */;
import _getSystemLocale from "_getSystemLocale" /* 1994 */;
import createToggle from "createToggle" /* 10669 */;

require = fn;
{
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.IHMsPn);
  },
  parent: null,
  IconComponent: require("LanguageIcon").LanguageIcon,
  useTrailing: function useLanguageSettingTrailing() {
    const items = [closure_2];
    _require = _require(589).useStateFromStores(items, () => locale.locale);
    const obj = _require(589);
    const tmp = _require;
    const availableLocales = _require(1236).getAvailableLocales();
    const found = availableLocales.find((item, index) => item.value === closure_0);
    let stringResult = null;
    if (null != found) {
      const intl = tmp(1236).intl;
      stringResult = intl.string(found.localizedName);
    }
    return stringResult;
  },
  screen: createToggle
};
createToggle = {
  route: require("ME").UserSettingsSections.LANGUAGE,
  getComponent() {
    return require(14731) /* handleLanguageChange */.default;
  }
};
createToggle = createToggle.createRoute(createToggle);
const result = require("obj132").fileFinishedImporting("modules/user_settings/defs/native/LanguageSetting.tsx");

export default createToggle;