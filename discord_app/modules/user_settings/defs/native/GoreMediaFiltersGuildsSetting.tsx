// discord_app/modules/user_settings/defs/native/GoreMediaFiltersGuildsSetting.tsx
import c from "../../../../../_runtime/00576_c.js";
import util from "../../../../intl/index.native.tsx";
import preloaded_user_settings from "../../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/preloaded_user_settings.tsx";
import SensitiveMediaGoreRedactionSettingsUtils from "../../../explicit_media_redaction/SensitiveMediaGoreRedactionSettingsUtils.tsx";
import useUserIsTeen from "../../../self_mod/hooks/useUserIsTeen.tsx";
import SettingsConstants from "../../core/native/SettingsConstants.tsx";
import ExplicitMediaRedactionUtils from "../../../explicit_media_redaction/ExplicitMediaRedactionUtils.tsx";
import useExplicitContentSettingsOrDefault from "../../../explicit_media_redaction/hooks/useExplicitContentSettingsOrDefault.tsx";
import ExplicitMediaRedactionNativeUtils from "../../../explicit_media_redaction/native/ExplicitMediaRedactionNativeUtils.tsx";
import "ReactCompilerGating";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import SettingBuilders from "../../../settings/native/renderer/SettingBuilders.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useIsDisabled() {
      let userIsTeen = useUserIsTeen.useUserIsTeen();
      if (!userIsTeen) {
        userIsTeen = obj2.useIsParentallyControlled();
      }
      return userIsTeen;
    }
  : function useIsDisabled() {
      let userIsTeen = useUserIsTeen.useUserIsTeen();
      if (!userIsTeen) {
        userIsTeen = obj2.useIsParentallyControlled();
      }
      return userIsTeen;
    };
function getTitle() {
  const intl = util.intl;
  return intl.string(util.t["FP+a42"]);
}
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useGoreContentGuildsSettingValue() {
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
    }
  : function useGoreContentGuildsSettingValue() {
      const obj = useExplicitContentSettingsOrDefault;
      return ExplicitMediaRedactionUtils.redactionSettingToRenderedString(
        obj.useGoreContentSettingOrDefault().goreContentGuilds,
      )();
    };
const pressable = SettingBuilders.createPressable({
  useTitle: getTitle,
  parent: SettingsConstants.MobileUserSettings.SENSITIVE_CONTENT_FILTERS,
  useTrailing: ReactCompilerGating.isReactCompilerEnabled()
    ? function useGoreContentGuildsSettingValue() {
        const cResult = c.c(2);
        const goreContentGuilds =
          useExplicitContentSettingsOrDefault.useGoreContentSettingOrDefault().goreContentGuilds;
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
      }
    : function useGoreContentGuildsSettingValue() {
        const obj = useExplicitContentSettingsOrDefault;
        return ExplicitMediaRedactionUtils.redactionSettingToRenderedString(
          obj.useGoreContentSettingOrDefault().goreContentGuilds,
        )();
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
  useIsDisabled: tmp2,
  useSearchTerms() {
    const intl = util.intl;
    const items = [intl.string(util.t["N/oRI+"]), ,];
    const intl2 = util.intl;
    items[1] = intl2.string(util.t.QVdYsK);
    const intl3 = util.intl;
    items[2] = intl3.string(util.t["K0OWP+"]);
    return items;
  },
});
let result = size.fileFinishedImporting("modules/user_settings/defs/native/GoreMediaFiltersGuildsSetting.tsx");

export default pressable;
