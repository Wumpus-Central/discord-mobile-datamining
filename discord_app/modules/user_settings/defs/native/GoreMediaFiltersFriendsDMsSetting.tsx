// discord_app/modules/user_settings/defs/native/GoreMediaFiltersFriendsDMsSetting.tsx
import util from "../../../../intl/index.native.tsx";
import SensitiveMediaGoreRedactionSettingsUtils from "../../../explicit_media_redaction/SensitiveMediaGoreRedactionSettingsUtils.tsx";
import ExplicitMediaRedactionUtils from "../../../explicit_media_redaction/ExplicitMediaRedactionUtils.tsx";
import SettingsConstants from "../../core/native/SettingsConstants.tsx";
import useExplicitContentSettingsOrDefault from "../../../explicit_media_redaction/hooks/useExplicitContentSettingsOrDefault.tsx";
import ExplicitMediaRedactionNativeUtils from "../../../explicit_media_redaction/native/ExplicitMediaRedactionNativeUtils.tsx";
import useSensitiveMediaSettingDisabled from "../../../explicit_media_redaction/hooks/useSensitiveMediaSettingDisabled.tsx";
import SettingBuilders from "../../../settings/native/renderer/SettingBuilders.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const pressable = SettingBuilders.createPressable({
  useTitle: function getTitle() {
    const intl = util.intl;
    return intl.string(util.t["+uI23H"]);
  },
  parent: SettingsConstants.MobileUserSettings.SENSITIVE_CONTENT_FILTERS,
  useTrailing: function useGoreContentFriendsDmSettingValue() {
    const obj = useExplicitContentSettingsOrDefault;
    return ExplicitMediaRedactionUtils.redactionSettingToRenderedString(
      obj.useGoreContentSettingOrDefault().goreContentFriendDm,
    )();
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
    const items = [intl.string(util.t["N/oRI+"]), ,];
    const intl2 = util.intl;
    items[1] = intl2.string(util.t.QVdYsK);
    const intl3 = util.intl;
    items[2] = intl3.string(util.t["K0OWP+"]);
    return items;
  },
  useIsDisabled: useSensitiveMediaSettingDisabled.useSensitiveMediaSettingDisabled,
});
let result = size.fileFinishedImporting("modules/user_settings/defs/native/GoreMediaFiltersFriendsDMsSetting.tsx");

export default pressable;
