// === Module 15105: GoreMediaFiltersGuildsSetting ===

// Module 15105 (GoreMediaFiltersGuildsSetting)
import util from "util" /* 1115 */;
import preloaded_user_settings from "preloaded_user_settings" /* 1186 */;
import SensitiveMediaGoreRedactionSettingsUtils from "SensitiveMediaGoreRedactionSettingsUtils" /* 7541 */;
import ExplicitMediaRedactionUtils from "ExplicitMediaRedactionUtils" /* 7840 */;
import SettingsConstants from "SettingsConstants" /* 8232 */;
import useUserIsTeen from "useUserIsTeen" /* 8921 */;
import useExplicitContentSettingsOrDefault from "useExplicitContentSettingsOrDefault" /* 15092 */;
import ExplicitMediaRedactionNativeUtils from "ExplicitMediaRedactionNativeUtils" /* 15093 */;
import SettingBuilders from "SettingBuilders" /* 11723 */;
import size from "module_2" /* 2 */;

const pressable = SettingBuilders.createPressable({
  useTitle: function getTitle() {
    const intl = util.intl;
    return intl.string(util.t["FP+a42"]);
  },
  parent: SettingsConstants.MobileUserSettings.SENSITIVE_CONTENT_FILTERS,
  useTrailing: function useGoreContentGuildsSettingValue() {
    const obj = useExplicitContentSettingsOrDefault;
    return ExplicitMediaRedactionUtils.redactionSettingToRenderedString(obj.useGoreContentSettingOrDefault().goreContentGuilds)();
  },
  onPress: function onGoreContentGuildsOnPress() {
    const obj = SensitiveMediaGoreRedactionSettingsUtils;
    const obj3 = { title: null, subtitle: null, handlePress: null, excluded: null, currentValue: null };
    const intl = util.intl;
    obj3.title = intl.string(util.t["16/3Bi"]);
    const intl2 = util.intl;
    obj3.subtitle = intl2.string(util.t["FP+a42"]);
    obj3.handlePress = function handlePress(goreContentGuilds) {
      return SensitiveMediaGoreRedactionSettingsUtils.updateGoreContentSetting({ goreContentGuilds });
    };
    const items = [preloaded_user_settings.ExplicitContentRedaction.BLOCK];
    obj3.excluded = items;
    obj3.currentValue = obj.getGoreContentSettingOrDefault().goreContentGuilds;
    const result = ExplicitMediaRedactionNativeUtils.handleSensitiveMediaFilterPress(obj3);
  },
  useIsDisabled() {
    let userIsTeen = useUserIsTeen.useUserIsTeen();
    if (!userIsTeen) {
      userIsTeen = obj2.useIsParentallyControlled();
    }
    return userIsTeen;
  },
  useSearchTerms() {
    const intl = util.intl;
    const items = [intl.string(util.t["N/oRI+"]), , ];
    const intl2 = util.intl;
    items[1] = intl2.string(util.t.QVdYsK);
    const intl3 = util.intl;
    items[2] = intl3.string(util.t["K0OWP+"]);
    return items;
  }
});
let result = size.fileFinishedImporting("modules/user_settings/defs/native/GoreMediaFiltersGuildsSetting.tsx");

export default pressable;