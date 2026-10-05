// === Module 14637: ExplicitMediaFiltersNonFriendsDMsSetting ===

// Module 14637 (ExplicitMediaFiltersNonFriendsDMsSetting)
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import SensitiveMediaExplicitRedactionSettingsUtils from "SensitiveMediaExplicitRedactionSettingsUtils" /* 6801 */;
import ExplicitMediaRedactionUtils from "ExplicitMediaRedactionUtils" /* 7109 */;
import SettingsConstants from "SettingsConstants" /* 7634 */;
import useExplicitContentSettingsOrDefault from "useExplicitContentSettingsOrDefault" /* 14633 */;
import ExplicitMediaRedactionNativeUtils from "ExplicitMediaRedactionNativeUtils" /* 14634 */;
import useSensitiveMediaSettingDisabled from "useSensitiveMediaSettingDisabled" /* 14636 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 11129 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(2);
  const explicitContentNonFriendDm = useExplicitContentSettingsOrDefault.useExplicitContentSettingOrDefault().explicitContentNonFriendDm;
  if (cResult[0] !== explicitContentNonFriendDm) {
    const tmp5 = ExplicitMediaRedactionUtils.redactionSettingToRenderedString(explicitContentNonFriendDm)();
    cResult[0] = explicitContentNonFriendDm;
    cResult[1] = tmp5;
    let tmp4 = tmp5;
    const tmpResult = ExplicitMediaRedactionUtils;
  } else {
    tmp4 = cResult[1];
  }
  return tmp4;
}) : (() => {
  const obj = useExplicitContentSettingsOrDefault;
  return ExplicitMediaRedactionUtils.redactionSettingToRenderedString(obj.useExplicitContentSettingOrDefault().explicitContentNonFriendDm)();
});
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
function getTitle() {
  const intl = util.intl;
  return intl.string(util.t["Yh+HX1"]);
}
const pressable = SettingBuilders.createPressable({
  useTitle: getTitle,
  parent() {
    return MobileUserSettings.SENSITIVE_CONTENT_FILTERS;
  },
  useTrailing: tmp2,
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
export const useObscuredContentNonFriendsDmSettingValue = tmp2;
export { onObscuredContentNonFriendsDmOnPress };