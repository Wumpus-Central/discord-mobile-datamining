// === Module 15027: ExplicitMediaFiltersGuildsSetting ===

// Module 15027 (ExplicitMediaFiltersGuildsSetting)
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import preloaded_user_settings from "preloaded_user_settings" /* 1209 */;
import SensitiveMediaExplicitRedactionSettingsUtils from "SensitiveMediaExplicitRedactionSettingsUtils" /* 6990 */;
import useUserIsTeen from "useUserIsTeen" /* 7719 */;
import SettingsConstants from "SettingsConstants" /* 7974 */;
import ExplicitMediaRedactionUtils from "ExplicitMediaRedactionUtils" /* 8226 */;
import useExplicitContentSettingsOrDefault from "useExplicitContentSettingsOrDefault" /* 15022 */;
import ExplicitMediaRedactionNativeUtils from "ExplicitMediaRedactionNativeUtils" /* 15023 */;
import "ReactCompilerGating";
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 10629 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useIsDisabled() {
  let userIsTeen = useUserIsTeen.useUserIsTeen();
  if (!userIsTeen) {
    userIsTeen = obj2.useIsParentallyControlled();
  }
  return userIsTeen;
}) : (function useIsDisabled() {
  let userIsTeen = useUserIsTeen.useUserIsTeen();
  if (!userIsTeen) {
    userIsTeen = obj2.useIsParentallyControlled();
  }
  return userIsTeen;
});
function getTitle() {
  const intl = util.intl;
  return intl.string(util.t["FP+a42"]);
}
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useObscuredContentGuildsSettingValue() {
  const cResult = c.c(2);
  const explicitContentGuilds = useExplicitContentSettingsOrDefault.useExplicitContentSettingOrDefault().explicitContentGuilds;
  if (cResult[0] !== explicitContentGuilds) {
    const tmp5 = ExplicitMediaRedactionUtils.redactionSettingToRenderedString(explicitContentGuilds)();
    cResult[0] = explicitContentGuilds;
    cResult[1] = tmp5;
    let tmp4 = tmp5;
    const tmpResult = ExplicitMediaRedactionUtils;
  } else {
    tmp4 = cResult[1];
  }
  return tmp4;
}) : (function useObscuredContentGuildsSettingValue() {
  const obj = useExplicitContentSettingsOrDefault;
  return ExplicitMediaRedactionUtils.redactionSettingToRenderedString(obj.useExplicitContentSettingOrDefault().explicitContentGuilds)();
});
const pressable = SettingBuilders.createPressable({
  useTitle: getTitle,
  parent() {
    return MobileUserSettings.SENSITIVE_CONTENT_FILTERS;
  },
  useTrailing: ReactCompilerGating.isReactCompilerEnabled() ? (function useObscuredContentGuildsSettingValue() {
    const cResult = c.c(2);
    const explicitContentGuilds = useExplicitContentSettingsOrDefault.useExplicitContentSettingOrDefault().explicitContentGuilds;
    if (cResult[0] !== explicitContentGuilds) {
      const tmp5 = ExplicitMediaRedactionUtils.redactionSettingToRenderedString(explicitContentGuilds)();
      cResult[0] = explicitContentGuilds;
      cResult[1] = tmp5;
      let tmp4 = tmp5;
      const tmpResult = ExplicitMediaRedactionUtils;
    } else {
      tmp4 = cResult[1];
    }
    return tmp4;
  }) : (function useObscuredContentGuildsSettingValue() {
    const obj = useExplicitContentSettingsOrDefault;
    return ExplicitMediaRedactionUtils.redactionSettingToRenderedString(obj.useExplicitContentSettingOrDefault().explicitContentGuilds)();
  }),
  onPress: function onObscuredContentGuildsOnPress() {
    const intl = util.intl;
    const obj = SensitiveMediaExplicitRedactionSettingsUtils;
    const stringResult = intl.string(util.t.GYpoAq);
    const obj3 = { title: stringResult, subtitle: null, handlePress: null, excluded: null, currentValue: null };
    const intl2 = util.intl;
    obj3.subtitle = intl2.string(util.t["FP+a42"]);
    obj3.handlePress = function handlePress(explicitContentGuilds) {
      return SensitiveMediaExplicitRedactionSettingsUtils.updateExplicitContentSetting({ explicitContentGuilds });
    };
    const items = [preloaded_user_settings.ExplicitContentRedaction.BLOCK];
    obj3.excluded = items;
    obj3.currentValue = obj.getExplicitContentSettingOrDefault().explicitContentGuilds;
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
  useIsDisabled: tmp2
});
let result = size.fileFinishedImporting("modules/user_settings/defs/native/ExplicitMediaFiltersGuildsSetting.tsx");

export default pressable;