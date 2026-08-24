// === Module 14176: pressable ===

// Module 14176 (pressable)
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import redactionSettingToRenderedString from "redactionSettingToRenderedString" /* 5001 */;
import resolveExplicitContentSettingWithDefaults from "resolveExplicitContentSettingWithDefaults" /* 5023 */;
import MobileUserSettings2 from "MobileUserSettings" /* 8198 */;
import useExplicitContentSettingOrDefault from "useExplicitContentSettingOrDefault" /* 14177 */;
import handleSensitiveMediaFilterPress from "handleSensitiveMediaFilterPress" /* 14178 */;
import useSensitiveMediaSettingDisabled from "useSensitiveMediaSettingDisabled" /* 14180 */;
import createToggle from "createToggle" /* 10669 */;

const MobileUserSettings = MobileUserSettings2.MobileUserSettings;
const pressable = createToggle.createPressable({
  useTitle: function getTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["+uI23H"]);
  },
  parent() {
    return MobileUserSettings.SENSITIVE_CONTENT_FILTERS;
  },
  useTrailing: function useObscuredContentFriendsDmSettingValue() {
    const obj = useExplicitContentSettingOrDefault;
    return redactionSettingToRenderedString.redactionSettingToRenderedString(obj.useExplicitContentSettingOrDefault().explicitContentFriendDm)();
  },
  onPress: function onObscuredContentFriendsDmOnPress() {
    let obj = resolveExplicitContentSettingWithDefaults;
    const intl = getSystemLocale.intl;
    const stringResult = intl.string(getSystemLocale.t.GYpoAq);
    obj = { title: stringResult, subtitle: null, handlePress: null, currentValue: null };
    const intl2 = getSystemLocale.intl;
    obj[1] = intl2.string(getSystemLocale.t["+uI23H"]);
    obj[2] = function handlePress(explicitContentFriendDm) {
      let obj = callback(table[3]);
      obj = { explicitContentFriendDm };
      return obj.updateExplicitContentSetting(obj);
    };
    obj[3] = obj.getExplicitContentSettingOrDefault().explicitContentFriendDm;
    const result = handleSensitiveMediaFilterPress.handleSensitiveMediaFilterPress(obj);
  },
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
    return intl.string(getSystemLocale.t["+uI23H"]);
  },
  parent() {
    return MobileUserSettings.SENSITIVE_CONTENT_FILTERS;
  },
  useTrailing: function useObscuredContentFriendsDmSettingValue() {
    const obj = useExplicitContentSettingOrDefault;
    return redactionSettingToRenderedString.redactionSettingToRenderedString(obj.useExplicitContentSettingOrDefault().explicitContentFriendDm)();
  },
  onPress: function onObscuredContentFriendsDmOnPress() {
    let obj = resolveExplicitContentSettingWithDefaults;
    const intl = getSystemLocale.intl;
    const stringResult = intl.string(getSystemLocale.t.GYpoAq);
    obj = { title: stringResult, subtitle: null, handlePress: null, currentValue: null };
    const intl2 = getSystemLocale.intl;
    obj[1] = intl2.string(getSystemLocale.t["+uI23H"]);
    obj[2] = function handlePress(explicitContentFriendDm) {
      let obj = callback(table[3]);
      obj = { explicitContentFriendDm };
      return obj.updateExplicitContentSetting(obj);
    };
    obj[3] = obj.getExplicitContentSettingOrDefault().explicitContentFriendDm;
    const result = handleSensitiveMediaFilterPress.handleSensitiveMediaFilterPress(obj);
  },
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
let result = set.fileFinishedImporting("modules/user_settings/defs/native/ExplicitMediaFiltersFriendsDMsSetting.tsx");

export default pressable;