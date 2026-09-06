// === Module 14831: GoreMediaFiltersFriendsDMsSetting ===

// Module 14831 (GoreMediaFiltersFriendsDMsSetting)
import util from "util" /* 1114 */;
import SensitiveMediaGoreRedactionSettingsUtils from "SensitiveMediaGoreRedactionSettingsUtils" /* 7301 */;
import ExplicitMediaRedactionUtils from "ExplicitMediaRedactionUtils" /* 7600 */;
import SettingsConstants from "SettingsConstants" /* 7975 */;
import useExplicitContentSettingsOrDefault from "useExplicitContentSettingsOrDefault" /* 14820 */;
import ExplicitMediaRedactionNativeUtils from "ExplicitMediaRedactionNativeUtils" /* 14821 */;
import useSensitiveMediaSettingDisabled from "useSensitiveMediaSettingDisabled" /* 14823 */;
import SettingBuilders from "SettingBuilders" /* 11468 */;
import size from "module_2" /* 2 */;

const pressable = SettingBuilders.createPressable({
  useTitle: function getTitle() {
    const intl = util.intl;
    return intl.string(util.t["+uI23H"]);
  },
  parent: SettingsConstants.MobileUserSettings.SENSITIVE_CONTENT_FILTERS,
  useTrailing: function useGoreContentFriendsDmSettingValue() {
    const obj = useExplicitContentSettingsOrDefault;
    return ExplicitMediaRedactionUtils.redactionSettingToRenderedString(obj.useGoreContentSettingOrDefault().goreContentFriendDm)();
  },
  onPress: function onGoreContentFriendsDmOnPress() {
    let obj = { title: null, subtitle: null, handlePress: null, currentValue: null };
    const intl = util.intl;
    obj.title = intl.string(util.t["16/3Bi"]);
    const intl2 = util.intl;
    obj.subtitle = intl2.string(util.t["+uI23H"]);
    obj.handlePress = function handlePress(goreContentFriendDm) {
      const obj = { goreContentFriendDm };
      return obj.updateGoreContentSetting(obj);
    };
    obj.currentValue = obj.getGoreContentSettingOrDefault().goreContentFriendDm;
    const result = ExplicitMediaRedactionNativeUtils.handleSensitiveMediaFilterPress(obj);
  },
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
let result = size.fileFinishedImporting("modules/user_settings/defs/native/GoreMediaFiltersFriendsDMsSetting.tsx");

export default pressable;