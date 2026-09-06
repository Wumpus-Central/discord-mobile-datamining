// === Module 14829: ExplicitMediaFiltersNonFriendsDMsSetting ===

// Module 14829 (ExplicitMediaFiltersNonFriendsDMsSetting)
import util from "util" /* 1114 */;
import SensitiveMediaExplicitRedactionSettingsUtils from "SensitiveMediaExplicitRedactionSettingsUtils" /* 7298 */;
import ExplicitMediaRedactionUtils from "ExplicitMediaRedactionUtils" /* 7600 */;
import SettingsConstants from "SettingsConstants" /* 7975 */;
import useExplicitContentSettingsOrDefault from "useExplicitContentSettingsOrDefault" /* 14820 */;
import ExplicitMediaRedactionNativeUtils from "ExplicitMediaRedactionNativeUtils" /* 14821 */;
import useSensitiveMediaSettingDisabled from "useSensitiveMediaSettingDisabled" /* 14823 */;
import SettingBuilders from "SettingBuilders" /* 11468 */;
import size from "module_2" /* 2 */;

function useObscuredContentNonFriendsDmSettingValue() {
  const obj = useExplicitContentSettingsOrDefault;
  return ExplicitMediaRedactionUtils.redactionSettingToRenderedString(obj.useExplicitContentSettingOrDefault().explicitContentNonFriendDm)();
}
function onObscuredContentNonFriendsDmOnPress() {
  const intl = util.intl;
  const stringResult = intl.string(util.t.GYpoAq);
  let obj = { title: stringResult, subtitle: null, handlePress: null, currentValue: null };
  const intl2 = util.intl;
  obj.subtitle = intl2.string(util.t["Yh+HX1"]);
  obj.handlePress = function handlePress(explicitContentNonFriendDm) {
    const obj = { explicitContentNonFriendDm };
    return obj.updateExplicitContentSetting(obj);
  };
  obj.currentValue = obj.getExplicitContentSettingOrDefault().explicitContentNonFriendDm;
  const result = ExplicitMediaRedactionNativeUtils.handleSensitiveMediaFilterPress(obj);
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
    const items = [intl.string(util.t["N/oRI+"]), , ];
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