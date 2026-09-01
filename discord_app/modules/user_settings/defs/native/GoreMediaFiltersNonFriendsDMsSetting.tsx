// discord_app/modules/user_settings/defs/native/GoreMediaFiltersNonFriendsDMsSetting.tsx
import set from "../../../../../_runtime/00002_set.js";
import getSystemLocale from "../../../../intl/index.native.tsx";
import resolveGoreSettingWithDefaults from "../../../explicit_media_redaction/SensitiveMediaGoreRedactionSettingsUtils.tsx";
import redactionSettingToRenderedString from "../../../explicit_media_redaction/ExplicitMediaRedactionUtils.tsx";
import MobileUserSettings from "../../core/native/SettingsConstants.tsx";
import useExplicitContentSettingOrDefault from "../../../explicit_media_redaction/hooks/useExplicitContentSettingsOrDefault.tsx";
import handleSensitiveMediaFilterPress from "../../../explicit_media_redaction/native/ExplicitMediaRedactionNativeUtils.tsx";
import useSensitiveMediaSettingDisabled from "../../../explicit_media_redaction/hooks/useSensitiveMediaSettingDisabled.tsx";
import createToggle from "../../../settings/native/renderer/SettingBuilders.tsx";

function useGoreContentNonFriendsDmSettingValue() {
  const obj = useExplicitContentSettingOrDefault;
  return redactionSettingToRenderedString.redactionSettingToRenderedString(
    obj.useGoreContentSettingOrDefault().goreContentNonFriendDm,
  )();
}
function onGoreContentNonFriendsDmOnPress() {
  let obj = resolveGoreSettingWithDefaults;
  obj = { title: null, subtitle: null, handlePress: null, currentValue: null };
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(getSystemLocale.t["16/3Bi"]);
  const intl2 = getSystemLocale.intl;
  obj[1] = intl2.string(getSystemLocale.t["Yh+HX1"]);
  obj[2] = function handlePress(goreContentNonFriendDm) {
    let obj = callback(table[3]);
    obj = { goreContentNonFriendDm };
    return obj.updateGoreContentSetting(obj);
  };
  obj[3] = obj.getGoreContentSettingOrDefault().goreContentNonFriendDm;
  const result = handleSensitiveMediaFilterPress.handleSensitiveMediaFilterPress(obj);
}
const pressable = createToggle.createPressable({
  useTitle: function getTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["Yh+HX1"]);
  },
  parent: MobileUserSettings.MobileUserSettings.SENSITIVE_CONTENT_FILTERS,
  useTrailing: useGoreContentNonFriendsDmSettingValue,
  onPress: onGoreContentNonFriendsDmOnPress,
  useSearchTerms() {
    const intl = getSystemLocale.intl;
    const items = [intl.string(getSystemLocale.t["N/oRI+"]), ,];
    const intl2 = getSystemLocale.intl;
    items[1] = intl2.string(getSystemLocale.t.QVdYsK);
    const intl3 = getSystemLocale.intl;
    items[2] = intl3.string(getSystemLocale.t["K0OWP+"]);
    return items;
  },
  useIsDisabled: useSensitiveMediaSettingDisabled.useSensitiveMediaSettingDisabled,
});
let obj = {
  useTitle: function getTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["Yh+HX1"]);
  },
  parent: MobileUserSettings.MobileUserSettings.SENSITIVE_CONTENT_FILTERS,
  useTrailing: useGoreContentNonFriendsDmSettingValue,
  onPress: onGoreContentNonFriendsDmOnPress,
  useSearchTerms() {
    const intl = getSystemLocale.intl;
    const items = [intl.string(getSystemLocale.t["N/oRI+"]), ,];
    const intl2 = getSystemLocale.intl;
    items[1] = intl2.string(getSystemLocale.t.QVdYsK);
    const intl3 = getSystemLocale.intl;
    items[2] = intl3.string(getSystemLocale.t["K0OWP+"]);
    return items;
  },
  useIsDisabled: useSensitiveMediaSettingDisabled.useSensitiveMediaSettingDisabled,
};
let result = set.fileFinishedImporting("modules/user_settings/defs/native/GoreMediaFiltersNonFriendsDMsSetting.tsx");

export default pressable;
export { useGoreContentNonFriendsDmSettingValue };
export { onGoreContentNonFriendsDmOnPress };
