// === Module 15039: pressable ===

// Module 15039 (pressable)
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
  useTrailing: function useObscuredContentFriendsDmSettingValue() {
    const parentalControlledExplicitContentSettings = useParentalControlledExplicitContentSettings.useParentalControlledExplicitContentSettings();
    let prop;
    if (parentalControlledExplicitContentSettings != null) {
      prop = parentalControlledExplicitContentSettings.explicitContentFriendDm;
    }
    let tmp5 = null;
    if (null != prop) {
      tmp5 = redactionSettingToRenderedString.redactionSettingToRenderedString(prop)();
      const tmpResult = redactionSettingToRenderedString;
    }
    return tmp5;
  },
  onPress: function onObscuredContentFriendsDmOnPress() {
    selectedTeenId = selectedTeenId.getSelectedTeenId();
    if (null != selectedTeenId) {
      selectedTeenId(14185);
      const intl = selectedTeenId(1236).intl;
      const stringResult = intl.string(selectedTeenId(1236).t.GYpoAq);
      let obj = { title: null, subtitle: null, handlePress: null, currentValue: null, excluded: null };
      obj[0] = stringResult;
      const intl2 = selectedTeenId(1236).intl;
      obj[1] = intl2.string(selectedTeenId(1236).t["+uI23H"]);
      obj[2] = function handlePress(explicitContentFriendDm) {
        selectedTeenId(dependencyMap[4]);
        const obj = { explicitContentFriendDm };
        return obj.updateExplicitContentSetting(selectedTeenId, obj);
      };
      obj[3] = obj.getExplicitContentSettingOrDefault(selectedTeenId).explicitContentFriendDm;
      const items = [selectedTeenId(1306).ExplicitContentRedaction.SHOW];
      obj[4] = items;
      const result = selectedTeenId(14178).handleSensitiveMediaFilterPress(obj);
      const obj2 = selectedTeenId(14178);
    }
  },
  unsearchable: true
};
createToggle = createToggle.createPressable(createToggle);
let result = require("obj132").fileFinishedImporting("modules/user_settings/defs/native/ParentalControlsExplicitMediaFiltersFriendsDMsSetting.tsx");

export default createToggle;