// === Module 15091: ExplicitMediaFiltersFriendsDMsSetting ===

// Module 15091 (ExplicitMediaFiltersFriendsDMsSetting)
import util from "util" /* 1115 */;
import SensitiveMediaExplicitRedactionSettingsUtils from "SensitiveMediaExplicitRedactionSettingsUtils" /* 7538 */;
import ExplicitMediaRedactionUtils from "ExplicitMediaRedactionUtils" /* 7840 */;
import SettingsConstants from "SettingsConstants" /* 8232 */;
import useExplicitContentSettingsOrDefault from "useExplicitContentSettingsOrDefault" /* 15092 */;
import ExplicitMediaRedactionNativeUtils from "ExplicitMediaRedactionNativeUtils" /* 15093 */;
import useSensitiveMediaSettingDisabled from "useSensitiveMediaSettingDisabled" /* 15095 */;
import SettingBuilders from "SettingBuilders" /* 11723 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const pressable = SettingBuilders.createPressable({
  useTitle: function getTitle() {
    const intl = util.intl;
    return intl.string(util.t["+uI23H"]);
  },
  parent() {
    return MobileUserSettings.SENSITIVE_CONTENT_FILTERS;
  },
  useTrailing: function useObscuredContentFriendsDmSettingValue() {
    const obj = useExplicitContentSettingsOrDefault;
    return ExplicitMediaRedactionUtils.redactionSettingToRenderedString(obj.useExplicitContentSettingOrDefault().explicitContentFriendDm)();
  },
  onPress: function onObscuredContentFriendsDmOnPress() {
    const intl = util.intl;
    const obj = SensitiveMediaExplicitRedactionSettingsUtils;
    const stringResult = intl.string(util.t.GYpoAq);
    const obj3 = { title: stringResult, subtitle: null, handlePress: null, currentValue: null };
    const intl2 = util.intl;
    obj3.subtitle = intl2.string(util.t["+uI23H"]);
    obj3.handlePress = function handlePress(explicitContentFriendDm) {
      return SensitiveMediaExplicitRedactionSettingsUtils.updateExplicitContentSetting({ explicitContentFriendDm });
    };
    obj3.currentValue = obj.getExplicitContentSettingOrDefault().explicitContentFriendDm;
    const result = ExplicitMediaRedactionNativeUtils.handleSensitiveMediaFilterPress(obj3);
  },
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
let result = size.fileFinishedImporting("modules/user_settings/defs/native/ExplicitMediaFiltersFriendsDMsSetting.tsx");

export default pressable;