// discord_app/modules/user_settings/defs/native/LanguageSetting.tsx
import getSystemLocale from "../../../../intl/index.native.tsx";
import _getSystemLocale from "../../LocaleStore.tsx";
import createToggle from "../../../settings/native/renderer/SettingBuilders.tsx";
import { initialize } from "../../../../../discord_common/js/packages/flux/index.tsx";
import { handleLanguageChange } from "../../language_and_time/native/UserSettingsLocale.tsx";

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
    _require = require("../../../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items, () => locale.locale);
    const obj = initialize;
    const tmp = _require;
    const availableLocales = require("../../../../intl/index.native.tsx").getAvailableLocales();
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
    return handleLanguageChange /* handleLanguageChange */.default;
  }
};
createToggle = createToggle.createRoute(createToggle);
const result = require("obj132").fileFinishedImporting("modules/user_settings/defs/native/LanguageSetting.tsx");

export default createToggle;