// === Module 14917: GoreMediaFiltersNonFriendsDMsSetting ===

// Module 14917 (GoreMediaFiltersNonFriendsDMsSetting)
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import SensitiveMediaGoreRedactionSettingsUtils from "SensitiveMediaGoreRedactionSettingsUtils" /* 6986 */;
import SettingsConstants from "SettingsConstants" /* 7966 */;
import ExplicitMediaRedactionUtils from "ExplicitMediaRedactionUtils" /* 8218 */;
import useExplicitContentSettingsOrDefault from "useExplicitContentSettingsOrDefault" /* 14910 */;
import ExplicitMediaRedactionNativeUtils from "ExplicitMediaRedactionNativeUtils" /* 14911 */;
import useSensitiveMediaSettingDisabled from "useSensitiveMediaSettingDisabled" /* 14913 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 11262 */;
import size from "module_2" /* 2 */;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useGoreContentNonFriendsDmSettingValue() {
  const cResult = c.c(2);
  const goreContentNonFriendDm = useExplicitContentSettingsOrDefault.useGoreContentSettingOrDefault().goreContentNonFriendDm;
  if (cResult[0] !== goreContentNonFriendDm) {
    const tmp5 = ExplicitMediaRedactionUtils.redactionSettingToRenderedString(goreContentNonFriendDm)();
    cResult[0] = goreContentNonFriendDm;
    cResult[1] = tmp5;
    let tmp4 = tmp5;
    const tmpResult = ExplicitMediaRedactionUtils;
  } else {
    tmp4 = cResult[1];
  }
  return tmp4;
}) : (function useGoreContentNonFriendsDmSettingValue() {
  const obj = useExplicitContentSettingsOrDefault;
  return ExplicitMediaRedactionUtils.redactionSettingToRenderedString(obj.useGoreContentSettingOrDefault().goreContentNonFriendDm)();
});
function onGoreContentNonFriendsDmOnPress() {
  const obj = SensitiveMediaGoreRedactionSettingsUtils;
  const obj3 = { title: null, subtitle: null, handlePress: null, currentValue: null };
  const intl = util.intl;
  obj3.title = intl.string(util.t["16/3Bi"]);
  const intl2 = util.intl;
  obj3.subtitle = intl2.string(util.t["Yh+HX1"]);
  obj3.handlePress = function handlePress(goreContentNonFriendDm) {
    return SensitiveMediaGoreRedactionSettingsUtils.updateGoreContentSetting({ goreContentNonFriendDm });
  };
  obj3.currentValue = obj.getGoreContentSettingOrDefault().goreContentNonFriendDm;
  const result = ExplicitMediaRedactionNativeUtils.handleSensitiveMediaFilterPress(obj3);
}
function getTitle() {
  const intl = util.intl;
  return intl.string(util.t["Yh+HX1"]);
}
const pressable = SettingBuilders.createPressable({
  useTitle: getTitle,
  parent: SettingsConstants.MobileUserSettings.SENSITIVE_CONTENT_FILTERS,
  useTrailing: tmp2,
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
export const useGoreContentNonFriendsDmSettingValue = tmp2;
export { onGoreContentNonFriendsDmOnPress };