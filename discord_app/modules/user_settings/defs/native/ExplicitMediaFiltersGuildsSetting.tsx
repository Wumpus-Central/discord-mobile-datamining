// === Module 14187: pressable ===

// Module 14187 (pressable)
import obj132 from "obj132" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import create from "create" /* 1306 */;
import redactionSettingToRenderedString from "redactionSettingToRenderedString" /* 5001 */;
import resolveExplicitContentSettingWithDefaults from "resolveExplicitContentSettingWithDefaults" /* 5023 */;
import useUserIsTeen from "useUserIsTeen" /* 8152 */;
import MobileUserSettings2 from "MobileUserSettings" /* 8198 */;
import useExplicitContentSettingOrDefault from "useExplicitContentSettingOrDefault" /* 14177 */;
import handleSensitiveMediaFilterPress from "handleSensitiveMediaFilterPress" /* 14178 */;
import createToggle from "createToggle" /* 10669 */;

const MobileUserSettings = MobileUserSettings2.MobileUserSettings;
const pressable = createToggle.createPressable({
  useTitle: function getTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["FP+a42"]);
  },
  parent() {
    return MobileUserSettings.SENSITIVE_CONTENT_FILTERS;
  },
  useTrailing: function useObscuredContentGuildsSettingValue() {
    const obj = useExplicitContentSettingOrDefault;
    return redactionSettingToRenderedString.redactionSettingToRenderedString(obj.useExplicitContentSettingOrDefault().explicitContentGuilds)();
  },
  onPress: function onObscuredContentGuildsOnPress() {
    const intl = getSystemLocale.intl;
    const stringResult = intl.string(getSystemLocale.t.GYpoAq);
    let obj = { title: stringResult, subtitle: null, handlePress: null, excluded: null, currentValue: null };
    const intl2 = getSystemLocale.intl;
    obj[1] = intl2.string(getSystemLocale.t["FP+a42"]);
    obj[2] = function handlePress(explicitContentGuilds) {
      callback(table[5]);
      const obj = { explicitContentGuilds };
      return obj.updateExplicitContentSetting(obj);
    };
    const items = [create.ExplicitContentRedaction.BLOCK];
    obj[3] = items;
    obj[4] = obj.getExplicitContentSettingOrDefault().explicitContentGuilds;
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
  useIsDisabled() {
    let userIsTeen = useUserIsTeen.useUserIsTeen();
    if (!userIsTeen) {
      userIsTeen = obj2.useIsParentallyControlled();
    }
    return userIsTeen;
  }
});
let result = obj132.fileFinishedImporting("modules/user_settings/defs/native/ExplicitMediaFiltersGuildsSetting.tsx");

export default pressable;