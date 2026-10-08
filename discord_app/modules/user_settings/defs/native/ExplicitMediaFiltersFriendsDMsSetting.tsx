// discord_app/modules/user_settings/defs/native/ExplicitMediaFiltersFriendsDMsSetting.tsx
import c from "../../../../../_runtime/00576_c.js";
import util from "../../../../intl/index.native.tsx";
import SensitiveMediaExplicitRedactionSettingsUtils from "../../../explicit_media_redaction/SensitiveMediaExplicitRedactionSettingsUtils.tsx";
import SettingsConstants from "../../core/native/SettingsConstants.tsx";
import ExplicitMediaRedactionUtils from "../../../explicit_media_redaction/ExplicitMediaRedactionUtils.tsx";
import useExplicitContentSettingsOrDefault from "../../../explicit_media_redaction/hooks/useExplicitContentSettingsOrDefault.tsx";
import ExplicitMediaRedactionNativeUtils from "../../../explicit_media_redaction/native/ExplicitMediaRedactionNativeUtils.tsx";
import useSensitiveMediaSettingDisabled from "../../../explicit_media_redaction/hooks/useSensitiveMediaSettingDisabled.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import SettingBuilders from "../../../settings/native/renderer/SettingBuilders.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const MobileUserSettings = SettingsConstants.MobileUserSettings;
function getTitle() {
  const intl = util.intl;
  return intl.string(util.t["+uI23H"]);
}
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useObscuredContentFriendsDmSettingValue() {
      const cResult = c.c(2);
      const explicitContentFriendDm =
        useExplicitContentSettingsOrDefault.useExplicitContentSettingOrDefault().explicitContentFriendDm;
      if (cResult[0] !== explicitContentFriendDm) {
        const tmp5 = ExplicitMediaRedactionUtils.redactionSettingToRenderedString(explicitContentFriendDm)();
        cResult[0] = explicitContentFriendDm;
        cResult[1] = tmp5;
        let tmp4 = tmp5;
        const tmpResult = ExplicitMediaRedactionUtils;
      } else {
        tmp4 = cResult[1];
      }
      return tmp4;
    }
  : function useObscuredContentFriendsDmSettingValue() {
      const obj = useExplicitContentSettingsOrDefault;
      return ExplicitMediaRedactionUtils.redactionSettingToRenderedString(
        obj.useExplicitContentSettingOrDefault().explicitContentFriendDm,
      )();
    };
const pressable = SettingBuilders.createPressable({
  useTitle: getTitle,
  parent() {
    return MobileUserSettings.SENSITIVE_CONTENT_FILTERS;
  },
  useTrailing: ReactCompilerGating.isReactCompilerEnabled()
    ? function useObscuredContentFriendsDmSettingValue() {
        const cResult = c.c(2);
        const explicitContentFriendDm =
          useExplicitContentSettingsOrDefault.useExplicitContentSettingOrDefault().explicitContentFriendDm;
        if (cResult[0] !== explicitContentFriendDm) {
          const tmp5 = ExplicitMediaRedactionUtils.redactionSettingToRenderedString(explicitContentFriendDm)();
          cResult[0] = explicitContentFriendDm;
          cResult[1] = tmp5;
          let tmp4 = tmp5;
          const tmpResult = ExplicitMediaRedactionUtils;
        } else {
          tmp4 = cResult[1];
        }
        return tmp4;
      }
    : function useObscuredContentFriendsDmSettingValue() {
        const obj = useExplicitContentSettingsOrDefault;
        return ExplicitMediaRedactionUtils.redactionSettingToRenderedString(
          obj.useExplicitContentSettingOrDefault().explicitContentFriendDm,
        )();
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
    const items = [intl.string(util.t["N/oRI+"]), ,];
    const intl2 = util.intl;
    items[1] = intl2.string(util.t.QVdYsK);
    const intl3 = util.intl;
    items[2] = intl3.string(util.t["5mnTa7"]);
    return items;
  },
  useIsDisabled: useSensitiveMediaSettingDisabled.useSensitiveMediaSettingDisabled,
});
let result = size.fileFinishedImporting("modules/user_settings/defs/native/ExplicitMediaFiltersFriendsDMsSetting.tsx");

export default pressable;
