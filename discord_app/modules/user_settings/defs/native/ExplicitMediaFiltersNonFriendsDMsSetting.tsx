// discord_app/modules/user_settings/defs/native/ExplicitMediaFiltersNonFriendsDMsSetting.tsx
import obj132 from "../../../../../_runtime/00002_obj132.js";
import getSystemLocale from "../../../../intl/index.native.tsx";
import redactionSettingToRenderedString from "../../../explicit_media_redaction/ExplicitMediaRedactionUtils.tsx";
import resolveExplicitContentSettingWithDefaults from "../../../explicit_media_redaction/SensitiveMediaExplicitRedactionSettingsUtils.tsx";
import MobileUserSettings2 from "../../core/native/SettingsConstants.tsx";
import useExplicitContentSettingOrDefault from "../../../explicit_media_redaction/hooks/useExplicitContentSettingsOrDefault.tsx";
import handleSensitiveMediaFilterPress from "../../../explicit_media_redaction/native/ExplicitMediaRedactionNativeUtils.tsx";
import useSensitiveMediaSettingDisabled from "../../../explicit_media_redaction/hooks/useSensitiveMediaSettingDisabled.tsx";
import createToggle from "../../../settings/native/renderer/SettingBuilders.tsx";

function useObscuredContentNonFriendsDmSettingValue() {
  const obj = useExplicitContentSettingOrDefault;
  return redactionSettingToRenderedString.redactionSettingToRenderedString(obj.useExplicitContentSettingOrDefault().explicitContentNonFriendDm)();
}
function onObscuredContentNonFriendsDmOnPress() {
  const intl = getSystemLocale.intl;
  const stringResult = intl.string(getSystemLocale.t.GYpoAq);
  let obj = { title: stringResult, subtitle: null, handlePress: null, currentValue: null };
  const intl2 = getSystemLocale.intl;
  obj[1] = intl2.string(getSystemLocale.t["Yh+HX1"]);
  obj[2] = function handlePress(explicitContentNonFriendDm) {
    callback(table[3]);
    const obj = { explicitContentNonFriendDm };
    return obj.updateExplicitContentSetting(obj);
  };
  obj[3] = obj.getExplicitContentSettingOrDefault().explicitContentNonFriendDm;
  const result = handleSensitiveMediaFilterPress.handleSensitiveMediaFilterPress(obj);
}
const MobileUserSettings = MobileUserSettings2.MobileUserSettings;
const pressable = createToggle.createPressable({
  useTitle: function getTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["Yh+HX1"]);
  },
  parent() {
    return MobileUserSettings.SENSITIVE_CONTENT_FILTERS;
  },
  useTrailing: useObscuredContentNonFriendsDmSettingValue,
  onPress: onObscuredContentNonFriendsDmOnPress,
  useSearchTerms: function getSearchTerms() {
    const intl = getSystemLocale.intl;
    const items = [intl.string(getSystemLocale.t["N/oRI+"]), , ];
    const intl2 = getSystemLocale.intl;
    items[1] = intl2.string(getSystemLocale.t.QVdYsK);
    const intl3 = getSystemLocale.intl;
    items[2] = intl3.string(getSystemLocale.t["5mnTa7"]);
    return items;
  },
  useIsDisabled: useSensitiveMediaSettingDisabled.useSensitiveMediaSettingDisabled
});
let result = obj132.fileFinishedImporting("modules/user_settings/defs/native/ExplicitMediaFiltersNonFriendsDMsSetting.tsx");

export default pressable;
export { useObscuredContentNonFriendsDmSettingValue };
export { onObscuredContentNonFriendsDmOnPress };