// === Module 14918: GoreMediaFiltersGuildsSetting ===

// Module 14918 (GoreMediaFiltersGuildsSetting)
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import preloaded_user_settings from "preloaded_user_settings" /* 1209 */;
import SensitiveMediaGoreRedactionSettingsUtils from "SensitiveMediaGoreRedactionSettingsUtils" /* 6986 */;
import useUserIsTeen from "useUserIsTeen" /* 7710 */;
import SettingsConstants from "SettingsConstants" /* 7966 */;
import ExplicitMediaRedactionUtils from "ExplicitMediaRedactionUtils" /* 8218 */;
import useExplicitContentSettingsOrDefault from "useExplicitContentSettingsOrDefault" /* 14910 */;
import ExplicitMediaRedactionNativeUtils from "ExplicitMediaRedactionNativeUtils" /* 14911 */;
import "ReactCompilerGating";
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 11262 */;
import size from "module_2" /* 2 */;

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
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useGoreContentGuildsSettingValue() {
  const cResult = c.c(2);
  const goreContentGuilds = useExplicitContentSettingsOrDefault.useGoreContentSettingOrDefault().goreContentGuilds;
  if (cResult[0] !== goreContentGuilds) {
    const tmp5 = ExplicitMediaRedactionUtils.redactionSettingToRenderedString(goreContentGuilds)();
    cResult[0] = goreContentGuilds;
    cResult[1] = tmp5;
    let tmp4 = tmp5;
    const tmpResult = ExplicitMediaRedactionUtils;
  } else {
    tmp4 = cResult[1];
  }
  return tmp4;
}) : (function useGoreContentGuildsSettingValue() {
  const obj = useExplicitContentSettingsOrDefault;
  return ExplicitMediaRedactionUtils.redactionSettingToRenderedString(obj.useGoreContentSettingOrDefault().goreContentGuilds)();
});
const pressable = SettingBuilders.createPressable({
  useTitle: getTitle,
  parent: SettingsConstants.MobileUserSettings.SENSITIVE_CONTENT_FILTERS,
  useTrailing: ReactCompilerGating.isReactCompilerEnabled() ? (function useGoreContentGuildsSettingValue() {
    const cResult = c.c(2);
    const goreContentGuilds = useExplicitContentSettingsOrDefault.useGoreContentSettingOrDefault().goreContentGuilds;
    if (cResult[0] !== goreContentGuilds) {
      const tmp5 = ExplicitMediaRedactionUtils.redactionSettingToRenderedString(goreContentGuilds)();
      cResult[0] = goreContentGuilds;
      cResult[1] = tmp5;
      let tmp4 = tmp5;
      const tmpResult = ExplicitMediaRedactionUtils;
    } else {
      tmp4 = cResult[1];
    }
    return tmp4;
  }) : (function useGoreContentGuildsSettingValue() {
    const obj = useExplicitContentSettingsOrDefault;
    return ExplicitMediaRedactionUtils.redactionSettingToRenderedString(obj.useGoreContentSettingOrDefault().goreContentGuilds)();
  }),
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
  useIsDisabled: tmp2,
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