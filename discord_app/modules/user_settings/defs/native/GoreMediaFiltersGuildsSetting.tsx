// === Module 14288: pressable ===

// Module 14288 (pressable)
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import create from "create" /* 1306 */;
import resolveGoreSettingWithDefaults from "resolveGoreSettingWithDefaults" /* 6024 */;
import redactionSettingToRenderedString from "redactionSettingToRenderedString" /* 7206 */;
import useUserIsTeen from "useUserIsTeen" /* 8187 */;
import MobileUserSettings from "MobileUserSettings" /* 8235 */;
import useExplicitContentSettingOrDefault from "useExplicitContentSettingOrDefault" /* 14275 */;
import handleSensitiveMediaFilterPress from "handleSensitiveMediaFilterPress" /* 14276 */;
import createToggle from "createToggle" /* 10516 */;

const pressable = createToggle.createPressable({
  useTitle: function getTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["FP+a42"]);
  },
  parent: MobileUserSettings.MobileUserSettings.SENSITIVE_CONTENT_FILTERS,
  useTrailing: function useGoreContentGuildsSettingValue() {
    const obj = useExplicitContentSettingOrDefault;
    return redactionSettingToRenderedString.redactionSettingToRenderedString(obj.useGoreContentSettingOrDefault().goreContentGuilds)();
  },
  onPress: function onGoreContentGuildsOnPress() {
    let obj = resolveGoreSettingWithDefaults;
    obj = { title: null, subtitle: null, handlePress: null, excluded: null, currentValue: null };
    const intl = getSystemLocale.intl;
    obj[0] = intl.string(getSystemLocale.t["16/3Bi"]);
    const intl2 = getSystemLocale.intl;
    obj[1] = intl2.string(getSystemLocale.t["FP+a42"]);
    obj[2] = function handlePress(goreContentGuilds) {
      let obj = callback(table[5]);
      obj = { goreContentGuilds };
      return obj.updateGoreContentSetting(obj);
    };
    const items = [create.ExplicitContentRedaction.BLOCK];
    obj[3] = items;
    obj[4] = obj.getGoreContentSettingOrDefault().goreContentGuilds;
    const result = handleSensitiveMediaFilterPress.handleSensitiveMediaFilterPress(obj);
  },
  useIsDisabled() {
    let userIsTeen = useUserIsTeen.useUserIsTeen();
    const obj = useUserIsTeen;
    if (!userIsTeen) {
      userIsTeen = obj2.useIsParentallyControlled();
    }
    return userIsTeen;
  },
  useSearchTerms() {
    const intl = getSystemLocale.intl;
    const items = [intl.string(getSystemLocale.t["N/oRI+"]), , ];
    const intl2 = getSystemLocale.intl;
    items[1] = intl2.string(getSystemLocale.t.QVdYsK);
    const intl3 = getSystemLocale.intl;
    items[2] = intl3.string(getSystemLocale.t["K0OWP+"]);
    return items;
  }
});
let obj = {
  useTitle: function getTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["FP+a42"]);
  },
  parent: MobileUserSettings.MobileUserSettings.SENSITIVE_CONTENT_FILTERS,
  useTrailing: function useGoreContentGuildsSettingValue() {
    const obj = useExplicitContentSettingOrDefault;
    return redactionSettingToRenderedString.redactionSettingToRenderedString(obj.useGoreContentSettingOrDefault().goreContentGuilds)();
  },
  onPress: function onGoreContentGuildsOnPress() {
    let obj = resolveGoreSettingWithDefaults;
    obj = { title: null, subtitle: null, handlePress: null, excluded: null, currentValue: null };
    const intl = getSystemLocale.intl;
    obj[0] = intl.string(getSystemLocale.t["16/3Bi"]);
    const intl2 = getSystemLocale.intl;
    obj[1] = intl2.string(getSystemLocale.t["FP+a42"]);
    obj[2] = function handlePress(goreContentGuilds) {
      let obj = callback(table[5]);
      obj = { goreContentGuilds };
      return obj.updateGoreContentSetting(obj);
    };
    const items = [create.ExplicitContentRedaction.BLOCK];
    obj[3] = items;
    obj[4] = obj.getGoreContentSettingOrDefault().goreContentGuilds;
    const result = handleSensitiveMediaFilterPress.handleSensitiveMediaFilterPress(obj);
  },
  useIsDisabled() {
    let userIsTeen = useUserIsTeen.useUserIsTeen();
    const obj = useUserIsTeen;
    if (!userIsTeen) {
      userIsTeen = obj2.useIsParentallyControlled();
    }
    return userIsTeen;
  },
  useSearchTerms() {
    const intl = getSystemLocale.intl;
    const items = [intl.string(getSystemLocale.t["N/oRI+"]), , ];
    const intl2 = getSystemLocale.intl;
    items[1] = intl2.string(getSystemLocale.t.QVdYsK);
    const intl3 = getSystemLocale.intl;
    items[2] = intl3.string(getSystemLocale.t["K0OWP+"]);
    return items;
  }
};
let result = set.fileFinishedImporting("modules/user_settings/defs/native/GoreMediaFiltersGuildsSetting.tsx");

export default pressable;