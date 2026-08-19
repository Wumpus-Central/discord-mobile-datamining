// === Module 14188: pressable ===

// Module 14188 (pressable)
import obj132 from "obj132" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import redactionSettingToRenderedString from "redactionSettingToRenderedString" /* 5001 */;
import resolveGoreSettingWithDefaults from "resolveGoreSettingWithDefaults" /* 5025 */;
import MobileUserSettings from "MobileUserSettings" /* 8198 */;
import useExplicitContentSettingOrDefault from "useExplicitContentSettingOrDefault" /* 14177 */;
import handleSensitiveMediaFilterPress from "handleSensitiveMediaFilterPress" /* 14178 */;
import useSensitiveMediaSettingDisabled from "useSensitiveMediaSettingDisabled" /* 14180 */;
import createToggle from "createToggle" /* 10669 */;

const pressable = createToggle.createPressable({
  useTitle: function getTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["+uI23H"]);
  },
  parent: MobileUserSettings.MobileUserSettings.SENSITIVE_CONTENT_FILTERS,
  useTrailing: function useGoreContentFriendsDmSettingValue() {
    const obj = useExplicitContentSettingOrDefault;
    return redactionSettingToRenderedString.redactionSettingToRenderedString(obj.useGoreContentSettingOrDefault().goreContentFriendDm)();
  },
  onPress: function onGoreContentFriendsDmOnPress() {
    let obj = { title: null, subtitle: null, handlePress: null, currentValue: null };
    const intl = getSystemLocale.intl;
    obj[0] = intl.string(getSystemLocale.t["16/3Bi"]);
    const intl2 = getSystemLocale.intl;
    obj[1] = intl2.string(getSystemLocale.t["+uI23H"]);
    obj[2] = function handlePress(goreContentFriendDm) {
      callback(table[3]);
      const obj = { goreContentFriendDm };
      return obj.updateGoreContentSetting(obj);
    };
    obj[3] = obj.getGoreContentSettingOrDefault().goreContentFriendDm;
    const result = handleSensitiveMediaFilterPress.handleSensitiveMediaFilterPress(obj);
  },
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
let result = obj132.fileFinishedImporting("modules/user_settings/defs/native/GoreMediaFiltersFriendsDMsSetting.tsx");

export default pressable;