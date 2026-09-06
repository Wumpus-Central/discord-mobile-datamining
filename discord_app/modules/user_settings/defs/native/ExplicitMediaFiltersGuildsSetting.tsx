// discord_app/modules/user_settings/defs/native/ExplicitMediaFiltersGuildsSetting.tsx
import util from "../../../../intl/index.native.tsx";
import preloaded_user_settings from "../../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/preloaded_user_settings.tsx";
import SensitiveMediaExplicitRedactionSettingsUtils from "../../../explicit_media_redaction/SensitiveMediaExplicitRedactionSettingsUtils.tsx";
import ExplicitMediaRedactionUtils from "../../../explicit_media_redaction/ExplicitMediaRedactionUtils.tsx";
import SettingsConstants from "../../core/native/SettingsConstants.tsx";
import useUserIsTeen from "../../../self_mod/hooks/useUserIsTeen.tsx";
import useExplicitContentSettingsOrDefault from "../../../explicit_media_redaction/hooks/useExplicitContentSettingsOrDefault.tsx";
import ExplicitMediaRedactionNativeUtils from "../../../explicit_media_redaction/native/ExplicitMediaRedactionNativeUtils.tsx";
import SettingBuilders from "../../../settings/native/renderer/SettingBuilders.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

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
    return ExplicitMediaRedactionUtils.redactionSettingToRenderedString(
      obj.useExplicitContentSettingOrDefault().explicitContentGuilds,
    )();
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
    const items = [intl.string(util.t["N/oRI+"]), ,];
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
  },
});
let result = size.fileFinishedImporting("modules/user_settings/defs/native/ExplicitMediaFiltersGuildsSetting.tsx");

export default pressable;
