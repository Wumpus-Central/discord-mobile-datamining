// === Module 14402: useObscuredContentNonFriendsDmSettingValue ===

// Module 14402 (useObscuredContentNonFriendsDmSettingValue)
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import resolveExplicitContentSettingWithDefaults from "resolveExplicitContentSettingWithDefaults" /* 6112 */;
import redactionSettingToRenderedString from "redactionSettingToRenderedString" /* 7313 */;
import MobileUserSettings2 from "MobileUserSettings" /* 7852 */;
import useExplicitContentSettingOrDefault from "useExplicitContentSettingOrDefault" /* 14393 */;
import handleSensitiveMediaFilterPress from "handleSensitiveMediaFilterPress" /* 14394 */;
import useSensitiveMediaSettingDisabled from "useSensitiveMediaSettingDisabled" /* 14396 */;
import createToggle from "createToggle" /* 11031 */;

function useObscuredContentNonFriendsDmSettingValue() {
  const obj = useExplicitContentSettingOrDefault;
  return redactionSettingToRenderedString.redactionSettingToRenderedString(obj.useExplicitContentSettingOrDefault().explicitContentNonFriendDm)();
}
function onObscuredContentNonFriendsDmOnPress() {
  let obj = resolveExplicitContentSettingWithDefaults;
  const intl = getSystemLocale.intl;
  const stringResult = intl.string(getSystemLocale.t.GYpoAq);
  obj = { title: stringResult, subtitle: null, handlePress: null, currentValue: null };
  const intl2 = getSystemLocale.intl;
  obj[1] = intl2.string(getSystemLocale.t["Yh+HX1"]);
  obj[2] = function handlePress(explicitContentNonFriendDm) {
    let obj = callback(table[3]);
    obj = { explicitContentNonFriendDm };
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
let obj = {
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
};
let result = set.fileFinishedImporting("modules/user_settings/defs/native/ExplicitMediaFiltersNonFriendsDMsSetting.tsx");

export default pressable;
export { useObscuredContentNonFriendsDmSettingValue };
export { onObscuredContentNonFriendsDmOnPress };