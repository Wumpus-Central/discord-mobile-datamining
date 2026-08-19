// === Module 15040: useObscuredContentNonFriendsDmSettingValue ===

// Module 15040 (useObscuredContentNonFriendsDmSettingValue)
import getSystemLocale from "getSystemLocale" /* 1236 */;
import redactionSettingToRenderedString from "redactionSettingToRenderedString" /* 5001 */;
import useParentalControlledExplicitContentSettings from "useParentalControlledExplicitContentSettings" /* 14181 */;
import freshTeenActivityWithMap from "freshTeenActivityWithMap" /* 5296 */;
import "createToggle";

require = fn;
function useObscuredContentNonFriendsDmSettingValue() {
  const parentalControlledExplicitContentSettings = useParentalControlledExplicitContentSettings.useParentalControlledExplicitContentSettings();
  let prop;
  if (parentalControlledExplicitContentSettings != null) {
    prop = parentalControlledExplicitContentSettings.explicitContentNonFriendDm;
  }
  let tmp5 = null;
  if (null != prop) {
    tmp5 = redactionSettingToRenderedString.redactionSettingToRenderedString(prop)();
    const tmpResult = redactionSettingToRenderedString;
  }
  return tmp5;
}
function onObscuredContentNonFriendsDmOnPress() {
  selectedTeenId = selectedTeenId.getSelectedTeenId();
  if (null != selectedTeenId) {
    selectedTeenId(14185);
    const intl = selectedTeenId(1236).intl;
    const stringResult = intl.string(selectedTeenId(1236).t.GYpoAq);
    let obj = { title: null, subtitle: null, excluded: null, handlePress: null, currentValue: null };
    obj[0] = stringResult;
    const intl2 = selectedTeenId(1236).intl;
    obj[1] = intl2.string(selectedTeenId(1236).t["Yh+HX1"]);
    const items = [selectedTeenId(1306).ExplicitContentRedaction.SHOW];
    obj[2] = items;
    obj[3] = function handlePress(explicitContentNonFriendDm) {
      selectedTeenId(dependencyMap[4]);
      const obj = { explicitContentNonFriendDm };
      const result = obj.updateExplicitContentSetting(selectedTeenId, obj);
    };
    obj[4] = obj.getExplicitContentSettingOrDefault(selectedTeenId).explicitContentNonFriendDm;
    let result = selectedTeenId(14178).handleSensitiveMediaFilterPress(obj);
    const obj2 = selectedTeenId(14178);
  }
}
let createToggle = {
  useTitle: function getTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["Yh+HX1"]);
  },
  parent: require("MobileUserSettings").MobileUserSettings.PARENTAL_CONTROLS_SENSITIVE_CONTENT_FILTERS,
  useTrailing: useObscuredContentNonFriendsDmSettingValue,
  onPress: onObscuredContentNonFriendsDmOnPress,
  unsearchable: true
};
createToggle = createToggle.createPressable(createToggle);
let result = require("obj132").fileFinishedImporting("modules/user_settings/defs/native/ParentalControlsExplicitMediaFiltersNonFriendsDMsSetting.tsx");

export default createToggle;
export { useObscuredContentNonFriendsDmSettingValue };
export { onObscuredContentNonFriendsDmOnPress };