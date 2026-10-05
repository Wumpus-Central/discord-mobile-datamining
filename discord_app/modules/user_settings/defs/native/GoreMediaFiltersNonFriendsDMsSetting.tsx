// discord_app/modules/user_settings/defs/native/GoreMediaFiltersNonFriendsDMsSetting.tsx
import react from "../../../../../_runtime/00576_react.js";
import intl4 from "../../../../intl/index.native.tsx";
import SensitiveMediaGoreRedactionSettingsUtils from "../../../explicit_media_redaction/SensitiveMediaGoreRedactionSettingsUtils.tsx";
import ExplicitMediaRedactionUtils from "../../../explicit_media_redaction/ExplicitMediaRedactionUtils.tsx";
import SettingsConstants from "../../core/native/SettingsConstants.tsx";
import useExplicitContentSettingsOrDefault from "../../../explicit_media_redaction/hooks/useExplicitContentSettingsOrDefault.tsx";
import ExplicitMediaRedactionNativeUtils from "../../../explicit_media_redaction/native/ExplicitMediaRedactionNativeUtils.tsx";
import useSensitiveMediaSettingDisabled from "../../../explicit_media_redaction/hooks/useSensitiveMediaSettingDisabled.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import SettingBuilders from "../../../settings/native/renderer/SettingBuilders.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let tmp4;
      const obj = react;
      const cResult = obj.c(2);
      const obj2 = useExplicitContentSettingsOrDefault;
      const goreContentNonFriendDm = obj2.useGoreContentSettingOrDefault().goreContentNonFriendDm;
      if (cResult[0] !== goreContentNonFriendDm) {
        const tmpResult = ExplicitMediaRedactionUtils;
        const tmp5 = tmpResult.redactionSettingToRenderedString(goreContentNonFriendDm)();
        cResult[0] = goreContentNonFriendDm;
        cResult[1] = tmp5;
        tmp4 = tmp5;
      } else {
        tmp4 = cResult[1];
      }
      return tmp4;
    }
  : () => {
      const obj = useExplicitContentSettingsOrDefault;
      const goreContentNonFriendDm = obj.useGoreContentSettingOrDefault().goreContentNonFriendDm;
      const obj2 = ExplicitMediaRedactionUtils;
      return obj2.redactionSettingToRenderedString(goreContentNonFriendDm)();
    };
function onGoreContentNonFriendsDmOnPress() {
  let intl;
  let intl2;
  let obj = SensitiveMediaGoreRedactionSettingsUtils;
  const goreContentNonFriendDm = obj.getGoreContentSettingOrDefault().goreContentNonFriendDm;
  let obj2 = {
    title: intl.string(intl4.t["16/3Bi"]),
    subtitle: intl2.string(intl4.t["Yh+HX1"]),
    handlePress(goreContentNonFriendDm) {
      const obj = SensitiveMediaGoreRedactionSettingsUtils;
      const obj2 = { goreContentNonFriendDm };
      return obj.updateGoreContentSetting(obj2);
    },
    currentValue: goreContentNonFriendDm,
  };
  const handleSensitiveMediaFilterPress = ExplicitMediaRedactionNativeUtils.handleSensitiveMediaFilterPress;
  ExplicitMediaRedactionNativeUtils;
  intl = intl4.intl;
  intl2 = intl4.intl;
  const result = handleSensitiveMediaFilterPress(obj2);
}
function getTitle() {
  const intl = intl4.intl;
  return intl.string(intl4.t["Yh+HX1"]);
}
let obj = {
  useTitle: getTitle,
  parent: MobileUserSettings.SENSITIVE_CONTENT_FILTERS,
  useTrailing: tmp2,
  onPress: onGoreContentNonFriendsDmOnPress,
  useSearchTerms() {
    const intl = intl4.intl;
    const items = [intl.string(intl4.t["N/oRI+"]), ,];
    const intl2 = intl4.intl;
    items[1] = intl2.string(intl4.t.QVdYsK);
    const intl3 = intl4.intl;
    items[2] = intl3.string(intl4.t["K0OWP+"]);
    return items;
  },
  useIsDisabled: useSensitiveMediaSettingDisabled.useSensitiveMediaSettingDisabled,
};
const pressable = SettingBuilders.createPressable(obj);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/GoreMediaFiltersNonFriendsDMsSetting.tsx");

export default pressable;
export const useGoreContentNonFriendsDmSettingValue = tmp2;
export { onGoreContentNonFriendsDmOnPress };
