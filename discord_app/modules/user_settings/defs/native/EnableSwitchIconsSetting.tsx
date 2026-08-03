// === Module 14457: useEnableSwitchIconsSettingValue ===

// Module 14457 (useEnableSwitchIconsSettingValue)
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme";
import createToggle from "createToggle";

const require = arg1;
function useEnableSwitchIconsSettingValue() {
  const items = [maybeApplyNoTextColorForLightCustomTheme];
  return require(589) /* initialize */.useStateFromStores(items, () => isSwitchIconsEnabled.isSwitchIconsEnabled);
}
createToggle = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t["S3z+pV"]);
  },
  parent: require("MobileSetting").MobileSetting.ACCESSIBILITY,
  useValue: useEnableSwitchIconsSettingValue,
  onValueChange: require("setFontSize").setSwitchIconsEnabled,
  usePredicate: function useShowSwitchIconsSetting() {
    return importDefault(1348)("SettingsAccessibilityScreen");
  },
  hasIcon: true
};
createToggle = createToggle.createToggle(createToggle);
const result = require("initialize").fileFinishedImporting("modules/user_settings/defs/native/EnableSwitchIconsSetting.tsx");

export default createToggle;
export { useEnableSwitchIconsSettingValue };