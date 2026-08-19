// discord_app/modules/user_settings/defs/native/SameAsDeviceThemeSetting.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import getSystemLocale from "../../../../intl/index.native.tsx";
import useIsMobileVisualRefreshExperimentEnabledDefault from "../../../themes/experiments/MobileVisualRefreshExperiment.tsx";
import handleSaveTheme from "../../appearance/native/UserSettingsAppearanceThemeUtils.tsx";
import handleThemeChange from "../../ThemeStore.tsx";
import "createToggle";

require = fn;
let createToggle = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.c445ix);
  },
  parent: require("MobileUserSettings").MobileUserSettings.APPEARANCE,
  usePredicate() {
    return useIsMobileVisualRefreshExperimentEnabledDefault("SameAsDeviceThemeSetting");
  },
  useValue: function useSameAsDeviceThemeValue() {
    const items = [closure_3];
    return initialize.useStateFromStores(items, () => sameAsDeviceThemeEnabled.isSameAsDeviceThemeEnabled());
  },
  onValueChange: function onSameAsDeviceThemeValueChange(arg0) {
    const obj = handleSaveTheme;
    if (arg0) {
      const result = obj.enableSameAsDeviceTheme();
    } else {
      const result1 = obj.disableSameAsDeviceTheme();
    }
  },
  useDescription() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["+tBsvs"]);
  }
};
createToggle = createToggle.createToggle(createToggle);
let result = require("obj132").fileFinishedImporting("modules/user_settings/defs/native/SameAsDeviceThemeSetting.tsx");

export default createToggle;