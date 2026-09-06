// === Module 14832: GoreMediaFiltersNonFriendsDMsSetting ===

// Module 14832 (GoreMediaFiltersNonFriendsDMsSetting)
import util from "util" /* 1114 */;
import SensitiveMediaGoreRedactionSettingsUtils from "SensitiveMediaGoreRedactionSettingsUtils" /* 7301 */;
import ExplicitMediaRedactionUtils from "ExplicitMediaRedactionUtils" /* 7600 */;
import SettingsConstants from "SettingsConstants" /* 7975 */;
import useExplicitContentSettingsOrDefault from "useExplicitContentSettingsOrDefault" /* 14820 */;
import ExplicitMediaRedactionNativeUtils from "ExplicitMediaRedactionNativeUtils" /* 14821 */;
import useSensitiveMediaSettingDisabled from "useSensitiveMediaSettingDisabled" /* 14823 */;
import SettingBuilders from "SettingBuilders" /* 11468 */;
import size from "module_2" /* 2 */;

function useGoreContentNonFriendsDmSettingValue() {
  const obj = useExplicitContentSettingsOrDefault;
  return ExplicitMediaRedactionUtils.redactionSettingToRenderedString(obj.useGoreContentSettingOrDefault().goreContentNonFriendDm)();
}
function onGoreContentNonFriendsDmOnPress() {
  let obj = { title: null, subtitle: null, handlePress: null, currentValue: null };
  const intl = util.intl;
  obj.title = intl.string(util.t["16/3Bi"]);
  const intl2 = util.intl;
  obj.subtitle = intl2.string(util.t["Yh+HX1"]);
  obj.handlePress = function handlePress(goreContentNonFriendDm) {
    const obj = { goreContentNonFriendDm };
    return obj.updateGoreContentSetting(obj);
  };
  obj.currentValue = obj.getGoreContentSettingOrDefault().goreContentNonFriendDm;
  const result = ExplicitMediaRedactionNativeUtils.handleSensitiveMediaFilterPress(obj);
}
const pressable = SettingBuilders.createPressable({
  useTitle: function getTitle() {
    const intl = util.intl;
    return intl.string(util.t["Yh+HX1"]);
  },
  parent: SettingsConstants.MobileUserSettings.SENSITIVE_CONTENT_FILTERS,
  useTrailing: useGoreContentNonFriendsDmSettingValue,
  onPress: onGoreContentNonFriendsDmOnPress,
  useSearchTerms() {
    const intl = util.intl;
    const items = [intl.string(util.t["N/oRI+"]), , ];
    const intl2 = util.intl;
    items[1] = intl2.string(util.t.QVdYsK);
    const intl3 = util.intl;
    items[2] = intl3.string(util.t["K0OWP+"]);
    return items;
  },
  useIsDisabled: useSensitiveMediaSettingDisabled.useSensitiveMediaSettingDisabled
});
let result = size.fileFinishedImporting("modules/user_settings/defs/native/GoreMediaFiltersNonFriendsDMsSetting.tsx");

export default pressable;
export { useGoreContentNonFriendsDmSettingValue };
export { onGoreContentNonFriendsDmOnPress };