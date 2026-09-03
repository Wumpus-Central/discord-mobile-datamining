// === Module 15742: useGoreContentNonFriendsDmSettingValue ===

// Module 15742 (useGoreContentNonFriendsDmSettingValue)
import getSystemLocale from "getSystemLocale" /* 1233 */;
import redactionSettingToRenderedString from "redactionSettingToRenderedString" /* 7355 */;
import useParentalControlledExplicitContentSettings from "useParentalControlledExplicitContentSettings" /* 14668 */;
import closure_2 from "freshTeenActivityWithMap" /* 7292 */;
import createToggle from "createToggle" /* 11292 */;

require = arg1;
function useGoreContentNonFriendsDmSettingValue() {
  const parentalControlledGoreContentSettings = useParentalControlledExplicitContentSettings.useParentalControlledGoreContentSettings();
  let prop;
  if (parentalControlledGoreContentSettings != null) {
    prop = parentalControlledGoreContentSettings.goreContentNonFriendDm;
  }
  let tmp5 = null;
  if (null != prop) {
    tmp5 = redactionSettingToRenderedString.redactionSettingToRenderedString(prop)();
    const tmpResult = redactionSettingToRenderedString;
  }
  return tmp5;
}
function onGoreContentNonFriendsDmOnPress() {
  selectedTeenId = selectedTeenId.getSelectedTeenId();
  if (null != selectedTeenId) {
    let obj = selectedTeenId(14672);
    obj = { title: null, subtitle: null, handlePress: null, currentValue: null, excluded: null };
    const intl = selectedTeenId(1233).intl;
    obj[0] = intl.string(selectedTeenId(1233).t["16/3Bi"]);
    const intl2 = selectedTeenId(1233).intl;
    obj[1] = intl2.string(selectedTeenId(1233).t["Yh+HX1"]);
    obj[2] = function handlePress(goreContentNonFriendDm) {
      let obj = selectedTeenId(closure_1_1[4]);
      obj = { goreContentNonFriendDm };
      return obj.updateGoreContentSetting(selectedTeenId, obj);
    };
    obj[3] = obj.getGoreContentSettingOrDefault(selectedTeenId).goreContentNonFriendDm;
    const items = [selectedTeenId(1305).ExplicitContentRedaction.SHOW];
    obj[4] = items;
    const result = selectedTeenId(14665).handleSensitiveMediaFilterPress(obj);
    const obj2 = selectedTeenId(14665);
  }
}
createToggle = {
  useTitle: function getTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["Yh+HX1"]);
  },
  parent: require("MobileUserSettings").MobileUserSettings.PARENTAL_CONTROLS_SENSITIVE_CONTENT_FILTERS,
  useTrailing: useGoreContentNonFriendsDmSettingValue,
  onPress: onGoreContentNonFriendsDmOnPress,
  unsearchable: true
};
createToggle = createToggle.createPressable(createToggle);
let result = require("set").fileFinishedImporting("modules/user_settings/defs/native/ParentalControlsGoreMediaFiltersNonFriendsDMsSetting.tsx");

export default createToggle;
export { useGoreContentNonFriendsDmSettingValue };
export { onGoreContentNonFriendsDmOnPress };