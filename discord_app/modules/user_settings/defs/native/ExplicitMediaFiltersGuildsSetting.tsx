// === Module 14885: ExplicitMediaFiltersGuildsSetting ===

// Module 14885 (ExplicitMediaFiltersGuildsSetting)
import util from "util" /* 1114 */;
import preloaded_user_settings from "preloaded_user_settings" /* 1187 */;
import SensitiveMediaExplicitRedactionSettingsUtils from "SensitiveMediaExplicitRedactionSettingsUtils" /* 7371 */;
import ExplicitMediaRedactionUtils from "ExplicitMediaRedactionUtils" /* 7672 */;
import SettingsConstants from "SettingsConstants" /* 8049 */;
import useUserIsTeen from "useUserIsTeen" /* 8735 */;
import useExplicitContentSettingsOrDefault from "useExplicitContentSettingsOrDefault" /* 14875 */;
import ExplicitMediaRedactionNativeUtils from "ExplicitMediaRedactionNativeUtils" /* 14876 */;
import SettingBuilders from "SettingBuilders" /* 11562 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const pressable = SettingBuilders.createPressable({
  useTitle: function getTitle() {
    const intl = util.intl;
    return intl.string(util.t["FP+a42"]);
  },
  parent() {
    return MobileUserSettings.SENSITIVE_CONTENT_FILTERS;
  },
  useTrailing: function useObscuredContentGuildsSettingValue() {
    const obj = useExplicitContentSettingsOrDefault;
    return ExplicitMediaRedactionUtils.redactionSettingToRenderedString(obj.useExplicitContentSettingOrDefault().explicitContentGuilds)();
  },
  onPress: function onObscuredContentGuildsOnPress() {
    const intl = util.intl;
    const stringResult = intl.string(util.t.GYpoAq);
    let obj = { title: stringResult, subtitle: null, handlePress: null, excluded: null, currentValue: null };
    const intl2 = util.intl;
    obj.subtitle = intl2.string(util.t["FP+a42"]);
    obj.handlePress = function handlePress(explicitContentGuilds) {
      const obj = { explicitContentGuilds };
      return obj.updateExplicitContentSetting(obj);
    };
    const items = [preloaded_user_settings.ExplicitContentRedaction.BLOCK];
    obj.excluded = items;
    obj.currentValue = obj.getExplicitContentSettingOrDefault().explicitContentGuilds;
    const result = ExplicitMediaRedactionNativeUtils.handleSensitiveMediaFilterPress(obj);
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
  useIsDisabled() {
    let userIsTeen = useUserIsTeen.useUserIsTeen();
    if (!userIsTeen) {
      userIsTeen = obj2.useIsParentallyControlled();
    }
    return userIsTeen;
  }
});
let result = size.fileFinishedImporting("modules/user_settings/defs/native/ExplicitMediaFiltersGuildsSetting.tsx");

export default pressable;