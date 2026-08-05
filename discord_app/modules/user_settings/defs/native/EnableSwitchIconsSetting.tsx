// discord_app/modules/user_settings/defs/native/EnableSwitchIconsSetting.tsx
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme";
import createToggle from "createToggle";

const require = arg1;
function useEnableSwitchIconsSettingValue() {
  const items = [maybeApplyNoTextColorForLightCustomTheme];
  return require("../../../../../discord_common/js/packages/flux/index.tsx") /* initialize */.useStateFromStores(items, () => isSwitchIconsEnabled.isSwitchIconsEnabled);
}
createToggle = {
  useTitle() {
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t["S3z+pV"]);
  },
  parent: require("MobileSetting").MobileSetting.ACCESSIBILITY,
  useValue: useEnableSwitchIconsSettingValue,
  onValueChange: require("setFontSize").setSwitchIconsEnabled,
  usePredicate: function useShowSwitchIconsSetting() {
    return require("../../../themes/experiments/MobileVisualRefreshExperiment.tsx")("SettingsAccessibilityScreen");
  },
  hasIcon: true
};
createToggle = createToggle.createToggle(createToggle);
const result = require("initialize").fileFinishedImporting("modules/user_settings/defs/native/EnableSwitchIconsSetting.tsx");

export default createToggle;
export { useEnableSwitchIconsSettingValue };