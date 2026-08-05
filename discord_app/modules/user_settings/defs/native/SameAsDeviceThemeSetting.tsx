// discord_app/modules/user_settings/defs/native/SameAsDeviceThemeSetting.tsx
import handleThemeChange from "handleThemeChange";
import createToggle from "createToggle";

const require = arg1;
createToggle = {
  useTitle() {
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.c445ix);
  },
  parent: require("MobileSetting").MobileSetting.APPEARANCE,
  usePredicate() {
    return require("../../../themes/experiments/MobileVisualRefreshExperiment.tsx")("SameAsDeviceThemeSetting");
  },
  useValue: function useSameAsDeviceThemeValue() {
    const items = [handleThemeChange];
    return require("../../../../../discord_common/js/packages/flux/index.tsx") /* initialize */.useStateFromStores(items, () => sameAsDeviceThemeEnabled.isSameAsDeviceThemeEnabled());
  },
  onValueChange: function onSameAsDeviceThemeValueChange(arg0) {
    const obj = require("../../appearance/native/UserSettingsAppearanceThemeUtils.tsx") /* handleSaveTheme */;
    if (arg0) {
      const result = obj.enableSameAsDeviceTheme();
    } else {
      const result1 = obj.disableSameAsDeviceTheme();
    }
  },
  useDescription() {
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t["+tBsvs"]);
  }
};
createToggle = createToggle.createToggle(createToggle);
let result = require("initialize").fileFinishedImporting("modules/user_settings/defs/native/SameAsDeviceThemeSetting.tsx");

export default createToggle;