// discord_app/modules/user_settings/defs/native/ExplicitMediaFiltersFriendsDMsSetting.tsx
import util from "../../../../intl/index.native.tsx";
import SensitiveMediaExplicitRedactionSettingsUtils from "../../../explicit_media_redaction/SensitiveMediaExplicitRedactionSettingsUtils.tsx";
import ExplicitMediaRedactionUtils from "../../../explicit_media_redaction/ExplicitMediaRedactionUtils.tsx";
import SettingsConstants from "../../core/native/SettingsConstants.tsx";
import useExplicitContentSettingsOrDefault from "../../../explicit_media_redaction/hooks/useExplicitContentSettingsOrDefault.tsx";
import ExplicitMediaRedactionNativeUtils from "../../../explicit_media_redaction/native/ExplicitMediaRedactionNativeUtils.tsx";
import useSensitiveMediaSettingDisabled from "../../../explicit_media_redaction/hooks/useSensitiveMediaSettingDisabled.tsx";
import SettingBuilders from "../../../settings/native/renderer/SettingBuilders.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

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
    return ExplicitMediaRedactionUtils.redactionSettingToRenderedString(
      obj.useExplicitContentSettingOrDefault().explicitContentFriendDm,
    )();
  },
  onPress: function onObscuredContentFriendsDmOnPress() {
    const intl = util.intl;
    const stringResult = intl.string(util.t.GYpoAq);
    let obj = { title: stringResult, subtitle: null, handlePress: null, currentValue: null };
    const intl2 = util.intl;
    obj.subtitle = intl2.string(util.t["+uI23H"]);
    obj.handlePress = function handlePress(explicitContentFriendDm) {
      const obj = { explicitContentFriendDm };
      return obj.updateExplicitContentSetting(obj);
    };
    obj.currentValue = obj.getExplicitContentSettingOrDefault().explicitContentFriendDm;
    const result = ExplicitMediaRedactionNativeUtils.handleSensitiveMediaFilterPress(obj);
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
