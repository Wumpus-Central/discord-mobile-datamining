// === Module 14189: useGoreContentNonFriendsDmSettingValue ===

// Module 14189 (useGoreContentNonFriendsDmSettingValue)
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import redactionSettingToRenderedString from "redactionSettingToRenderedString" /* 5001 */;
import resolveGoreSettingWithDefaults from "resolveGoreSettingWithDefaults" /* 5025 */;
import MobileUserSettings from "MobileUserSettings" /* 8198 */;
import useExplicitContentSettingOrDefault from "useExplicitContentSettingOrDefault" /* 14177 */;
import handleSensitiveMediaFilterPress from "handleSensitiveMediaFilterPress" /* 14178 */;
import useSensitiveMediaSettingDisabled from "useSensitiveMediaSettingDisabled" /* 14180 */;
import createToggle from "createToggle" /* 10669 */;

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