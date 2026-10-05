// === Module 14639: GoreMediaFiltersFriendsDMsSetting ===

// Module 14639 (GoreMediaFiltersFriendsDMsSetting)
import react from "react" /* 576 */;
import intl4 from "intl" /* 1126 */;
import SensitiveMediaGoreRedactionSettingsUtils from "SensitiveMediaGoreRedactionSettingsUtils" /* 6804 */;
import ExplicitMediaRedactionUtils from "ExplicitMediaRedactionUtils" /* 7109 */;
import SettingsConstants from "SettingsConstants" /* 7634 */;
import useExplicitContentSettingsOrDefault from "useExplicitContentSettingsOrDefault" /* 14633 */;
import ExplicitMediaRedactionNativeUtils from "ExplicitMediaRedactionNativeUtils" /* 14634 */;
import useSensitiveMediaSettingDisabled from "useSensitiveMediaSettingDisabled" /* 14636 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 11129 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
function getTitle() {
  const intl = intl4.intl;
  return intl.string(intl4.t["+uI23H"]);
}
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let tmp4;
  const obj = react;
  const cResult = obj.c(2);
  const obj2 = useExplicitContentSettingsOrDefault;
  const goreContentFriendDm = obj2.useGoreContentSettingOrDefault().goreContentFriendDm;
  if (cResult[0] !== goreContentFriendDm) {
    const tmpResult = ExplicitMediaRedactionUtils;
    const tmp5 = tmpResult.redactionSettingToRenderedString(goreContentFriendDm)();
    cResult[0] = goreContentFriendDm;
    cResult[1] = tmp5;
    tmp4 = tmp5;
  } else {
    tmp4 = cResult[1];
  }
  return tmp4;
}) : (() => {
  const obj = useExplicitContentSettingsOrDefault;
  const goreContentFriendDm = obj.useGoreContentSettingOrDefault().goreContentFriendDm;
  const obj2 = ExplicitMediaRedactionUtils;
  return obj2.redactionSettingToRenderedString(goreContentFriendDm)();
});
let obj = {
  useTitle: getTitle,
  parent: MobileUserSettings.SENSITIVE_CONTENT_FILTERS,
  useTrailing: tmp2,
  onPress: function onGoreContentFriendsDmOnPress() {
    let intl;
    let intl2;
    let obj = SensitiveMediaGoreRedactionSettingsUtils;
    const goreContentFriendDm = obj.getGoreContentSettingOrDefault().goreContentFriendDm;
    let obj2 = {
      title: intl.string(intl4.t["16/3Bi"]),
      subtitle: intl2.string(intl4.t["+uI23H"]),
      handlePress(goreContentFriendDm) {
        const obj = SensitiveMediaGoreRedactionSettingsUtils;
        const obj2 = { goreContentFriendDm };
        return obj.updateGoreContentSetting(obj2);
      },
      currentValue: goreContentFriendDm
    };
    const handleSensitiveMediaFilterPress = ExplicitMediaRedactionNativeUtils.handleSensitiveMediaFilterPress;
    ExplicitMediaRedactionNativeUtils;
    intl = intl4.intl;
    intl2 = intl4.intl;
    const result = handleSensitiveMediaFilterPress(obj2);
  },
  useSearchTerms() {
    const intl = intl4.intl;
    const items = [intl.string(intl4.t["N/oRI+"]), , ];
    const intl2 = intl4.intl;
    items[1] = intl2.string(intl4.t.QVdYsK);
    const intl3 = intl4.intl;
    items[2] = intl3.string(intl4.t["K0OWP+"]);
    return items;
  },
  useIsDisabled: useSensitiveMediaSettingDisabled.useSensitiveMediaSettingDisabled
};
const pressable = SettingBuilders.createPressable(obj);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/GoreMediaFiltersFriendsDMsSetting.tsx");

export default pressable;