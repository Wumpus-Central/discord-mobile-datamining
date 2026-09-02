// === Module 15727: pressable ===

// Module 15727 (pressable)
import getSystemLocale from "getSystemLocale" /* 1233 */;
import redactionSettingToRenderedString from "redactionSettingToRenderedString" /* 7354 */;
import useParentalControlledExplicitContentSettings from "useParentalControlledExplicitContentSettings" /* 14653 */;
import closure_2 from "freshTeenActivityWithMap" /* 7291 */;
import createToggle from "createToggle" /* 11288 */;

require = arg1;
createToggle = {
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
      let obj = selectedTeenId(14657);
      obj = { title: null, subtitle: null, handlePress: null, currentValue: null, excluded: null };
      const intl = selectedTeenId(1233).intl;
      obj[0] = intl.string(selectedTeenId(1233).t["16/3Bi"]);
      const intl2 = selectedTeenId(1233).intl;
      obj[1] = intl2.string(selectedTeenId(1233).t["+uI23H"]);
      obj[2] = function handlePress(goreContentFriendDm) {
        let obj = selectedTeenId(closure_1_1[4]);
        obj = { goreContentFriendDm };
        return obj.updateGoreContentSetting(selectedTeenId, obj);
      };
      obj[3] = obj.getGoreContentSettingOrDefault(selectedTeenId).goreContentFriendDm;
      const items = [selectedTeenId(1305).ExplicitContentRedaction.SHOW];
      obj[4] = items;
      const result = selectedTeenId(14650).handleSensitiveMediaFilterPress(obj);
      const obj2 = selectedTeenId(14650);
    }
  },
  unsearchable: true
};
createToggle = createToggle.createPressable(createToggle);
let result = require("set").fileFinishedImporting("modules/user_settings/defs/native/ParentalControlsGoreMediaFiltersFriendsDMsSetting.tsx");

export default createToggle;