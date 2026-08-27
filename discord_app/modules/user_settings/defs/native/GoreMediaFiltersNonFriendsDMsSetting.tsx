// === Module 14387: useGoreContentNonFriendsDmSettingValue ===

// Module 14387 (useGoreContentNonFriendsDmSettingValue)
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import resolveGoreSettingWithDefaults from "resolveGoreSettingWithDefaults" /* 6098 */;
import redactionSettingToRenderedString from "redactionSettingToRenderedString" /* 7278 */;
import MobileUserSettings from "MobileUserSettings" /* 7816 */;
import useExplicitContentSettingOrDefault from "useExplicitContentSettingOrDefault" /* 14375 */;
import handleSensitiveMediaFilterPress from "handleSensitiveMediaFilterPress" /* 14376 */;
import useSensitiveMediaSettingDisabled from "useSensitiveMediaSettingDisabled" /* 14378 */;
import createToggle from "createToggle" /* 10988 */;

function useGoreContentNonFriendsDmSettingValue() {
  const obj = useExplicitContentSettingOrDefault;
  return redactionSettingToRenderedString.redactionSettingToRenderedString(obj.useGoreContentSettingOrDefault().goreContentNonFriendDm)();
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
    const items = [intl.string(getSystemLocale.t["N/oRI+"]), , ];
    const intl2 = getSystemLocale.intl;
    items[1] = intl2.string(getSystemLocale.t.QVdYsK);
    const intl3 = getSystemLocale.intl;
    items[2] = intl3.string(getSystemLocale.t["K0OWP+"]);
    return items;
  },
  useIsDisabled: useSensitiveMediaSettingDisabled.useSensitiveMediaSettingDisabled
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
    const items = [intl.string(getSystemLocale.t["N/oRI+"]), , ];
    const intl2 = getSystemLocale.intl;
    items[1] = intl2.string(getSystemLocale.t.QVdYsK);
    const intl3 = getSystemLocale.intl;
    items[2] = intl3.string(getSystemLocale.t["K0OWP+"]);
    return items;
  },
  useIsDisabled: useSensitiveMediaSettingDisabled.useSensitiveMediaSettingDisabled
};
let result = set.fileFinishedImporting("modules/user_settings/defs/native/GoreMediaFiltersNonFriendsDMsSetting.tsx");

export default pressable;
export { useGoreContentNonFriendsDmSettingValue };
export { onGoreContentNonFriendsDmOnPress };