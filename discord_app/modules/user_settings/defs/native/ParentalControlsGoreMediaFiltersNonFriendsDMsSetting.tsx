// === Module 15042: useGoreContentNonFriendsDmSettingValue ===

// Module 15042 (useGoreContentNonFriendsDmSettingValue)
import getSystemLocale from "getSystemLocale" /* 1236 */;
import redactionSettingToRenderedString from "redactionSettingToRenderedString" /* 5001 */;
import useParentalControlledExplicitContentSettings from "useParentalControlledExplicitContentSettings" /* 14181 */;
import freshTeenActivityWithMap from "freshTeenActivityWithMap" /* 5296 */;
import "createToggle";

require = fn;
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
    selectedTeenId(14185);
    let obj = { title: null, subtitle: null, handlePress: null, currentValue: null, excluded: null };
    const intl = selectedTeenId(1236).intl;
    obj[0] = intl.string(selectedTeenId(1236).t["16/3Bi"]);
    const intl2 = selectedTeenId(1236).intl;
    obj[1] = intl2.string(selectedTeenId(1236).t["Yh+HX1"]);
    obj[2] = function handlePress(goreContentNonFriendDm) {
      selectedTeenId(dependencyMap[4]);
      const obj = { goreContentNonFriendDm };
      return obj.updateGoreContentSetting(selectedTeenId, obj);
    };
    obj[3] = obj.getGoreContentSettingOrDefault(selectedTeenId).goreContentNonFriendDm;
    const items = [selectedTeenId(1306).ExplicitContentRedaction.SHOW];
    obj[4] = items;
    const result = selectedTeenId(14178).handleSensitiveMediaFilterPress(obj);
    const obj2 = selectedTeenId(14178);
  }
}
let createToggle = {
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
let result = require("obj132").fileFinishedImporting("modules/user_settings/defs/native/ParentalControlsGoreMediaFiltersNonFriendsDMsSetting.tsx");

export default createToggle;
export { useGoreContentNonFriendsDmSettingValue };
export { onGoreContentNonFriendsDmOnPress };