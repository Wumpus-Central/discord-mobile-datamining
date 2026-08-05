// discord_app/modules/user_settings/defs/native/LanguageSetting.tsx
import _getSystemLocale from "_getSystemLocale";
import createToggle from "createToggle";

const require = arg1;
createToggle = {
  useTitle() {
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.IHMsPn);
  },
  parent: null,
  IconComponent: require("LanguageIcon").LanguageIcon,
  useTrailing: function useLanguageSettingTrailing() {
    const items = [_getSystemLocale];
    _require = _require("../../../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items, () => locale.locale);
    const obj = _require("../../../../../discord_common/js/packages/flux/index.tsx");
    const tmp = _require;
    const availableLocales = _require("../../../../intl/index.native.tsx").getAvailableLocales();
    const found = availableLocales.find((value) => value.value === closure_0);
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
    return require("../../language_and_time/native/UserSettingsLocale.tsx") /* handleLanguageChange */.default;
  }
};
createToggle = createToggle.createRoute(createToggle);
const result = require("initialize").fileFinishedImporting("modules/user_settings/defs/native/LanguageSetting.tsx");

export default createToggle;