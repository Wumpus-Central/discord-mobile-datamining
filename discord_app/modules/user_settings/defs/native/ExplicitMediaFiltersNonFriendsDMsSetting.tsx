// === Module 17051: ExplicitMediaFiltersNonFriendsDMsSetting ===

// Module 17051 (ExplicitMediaFiltersNonFriendsDMsSetting)
import util from "util" /* 1113 */;
import SensitiveMediaExplicitRedactionSettingsUtils from "SensitiveMediaExplicitRedactionSettingsUtils" /* 7534 */;
import SettingsConstants from "SettingsConstants" /* 8503 */;
import ExplicitMediaRedactionUtils from "ExplicitMediaRedactionUtils" /* 8758 */;
import useExplicitContentSettingsOrDefault from "useExplicitContentSettingsOrDefault" /* 17047 */;
import ExplicitMediaRedactionNativeUtils from "ExplicitMediaRedactionNativeUtils" /* 17048 */;
import useSensitiveMediaSettingDisabled from "useSensitiveMediaSettingDisabled" /* 17050 */;
import SettingBuilders from "SettingBuilders" /* 11685 */;
import size from "module_2" /* 2 */;

function useObscuredContentNonFriendsDmSettingValue() {
  const obj = useExplicitContentSettingsOrDefault;
  return ExplicitMediaRedactionUtils.redactionSettingToRenderedString(obj.useExplicitContentSettingOrDefault().explicitContentNonFriendDm)();
}
function onObscuredContentNonFriendsDmOnPress() {
  const intl = util.intl;
  const obj = SensitiveMediaExplicitRedactionSettingsUtils;
  const stringResult = intl.string(util.t.GYpoAq);
  const obj3 = { title: stringResult, subtitle: null, handlePress: null, currentValue: null };
  const intl2 = util.intl;
  obj3.subtitle = intl2.string(util.t["Yh+HX1"]);
  obj3.handlePress = function handlePress(explicitContentNonFriendDm) {
    return SensitiveMediaExplicitRedactionSettingsUtils.updateExplicitContentSetting({ explicitContentNonFriendDm });
  };
  obj3.currentValue = obj.getExplicitContentSettingOrDefault().explicitContentNonFriendDm;
  const result = ExplicitMediaRedactionNativeUtils.handleSensitiveMediaFilterPress(obj3);
}
const MobileUserSettings = SettingsConstants.MobileUserSettings;
const pressable = SettingBuilders.createPressable({
  useTitle: function getTitle() {
    const intl = util.intl;
    return intl.string(util.t["Yh+HX1"]);
  },
  parent() {
    return MobileUserSettings.SENSITIVE_CONTENT_FILTERS;
  },
  useTrailing: useObscuredContentNonFriendsDmSettingValue,
  onPress: onObscuredContentNonFriendsDmOnPress,
  useSearchTerms: function getSearchTerms() {
    const intl = util.intl;
    items = [intl.string(util.t["N/oRI+"]), , ];
    const intl2 = util.intl;
    items[1] = intl2.string(util.t.QVdYsK);
    const intl3 = util.intl;
    items[2] = intl3.string(util.t["5mnTa7"]);
    return items;
  },
  useIsDisabled: useSensitiveMediaSettingDisabled.useSensitiveMediaSettingDisabled
});
let result = size.fileFinishedImporting("modules/user_settings/defs/native/ExplicitMediaFiltersNonFriendsDMsSetting.tsx");

export default pressable;
export { useObscuredContentNonFriendsDmSettingValue };
export { onObscuredContentNonFriendsDmOnPress };