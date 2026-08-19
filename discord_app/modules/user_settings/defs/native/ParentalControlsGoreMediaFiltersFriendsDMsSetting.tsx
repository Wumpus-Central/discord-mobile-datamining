// === Module 15041: pressable ===

// Module 15041 (pressable)
import getSystemLocale from "getSystemLocale" /* 1236 */;
import redactionSettingToRenderedString from "redactionSettingToRenderedString" /* 5001 */;
import useParentalControlledExplicitContentSettings from "useParentalControlledExplicitContentSettings" /* 14181 */;
import freshTeenActivityWithMap from "freshTeenActivityWithMap" /* 5296 */;
import "createToggle";

require = fn;
let createToggle = {
  useTitle: function getTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["+uI23H"]);
  },
  parent: require("MobileUserSettings").MobileUserSettings.PARENTAL_CONTROLS_SENSITIVE_CONTENT_FILTERS,
  useTrailing: function useGoreContentFriendsDmSettingValue() {
    const parentalControlledGoreContentSettings = useParentalControlledExplicitContentSettings.useParentalControlledGoreContentSettings();
    let goreContentFriendDm;
    if (parentalControlledGoreContentSettings != null) {
      goreContentFriendDm = parentalControlledGoreContentSettings.goreContentFriendDm;
    }
    let tmp5 = null;
    if (null != goreContentFriendDm) {
      tmp5 = redactionSettingToRenderedString.redactionSettingToRenderedString(goreContentFriendDm)();
      const tmpResult = redactionSettingToRenderedString;
    }
    return tmp5;
  },
  onPress: function onGoreContentFriendsDmOnPress() {
    selectedTeenId = selectedTeenId.getSelectedTeenId();
    if (null != selectedTeenId) {
      selectedTeenId(14185);
      let obj = { title: null, subtitle: null, handlePress: null, currentValue: null, excluded: null };
      const intl = selectedTeenId(1236).intl;
      obj[0] = intl.string(selectedTeenId(1236).t["16/3Bi"]);
      const intl2 = selectedTeenId(1236).intl;
      obj[1] = intl2.string(selectedTeenId(1236).t["+uI23H"]);
      obj[2] = function handlePress(goreContentFriendDm) {
        selectedTeenId(dependencyMap[4]);
        const obj = { goreContentFriendDm };
        return obj.updateGoreContentSetting(selectedTeenId, obj);
      };
      obj[3] = obj.getGoreContentSettingOrDefault(selectedTeenId).goreContentFriendDm;
      const items = [selectedTeenId(1306).ExplicitContentRedaction.SHOW];
      obj[4] = items;
      const result = selectedTeenId(14178).handleSensitiveMediaFilterPress(obj);
      const obj2 = selectedTeenId(14178);
    }
  },
  unsearchable: true
};
createToggle = createToggle.createPressable(createToggle);
let result = require("obj132").fileFinishedImporting("modules/user_settings/defs/native/ParentalControlsGoreMediaFiltersFriendsDMsSetting.tsx");

export default createToggle;