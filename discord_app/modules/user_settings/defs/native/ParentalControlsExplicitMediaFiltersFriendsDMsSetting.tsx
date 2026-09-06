// === Module 15897: pressable ===

// Module 15897 (pressable)
import getSystemLocale from "getSystemLocale" /* 1114 */;
import redactionSettingToRenderedString from "redactionSettingToRenderedString" /* 7600 */;
import useParentalControlledExplicitContentSettings from "useParentalControlledExplicitContentSettings" /* 14824 */;
import closure_2 from "freshTeenActivityWithMap" /* 7537 */;
import createToggle from "createToggle" /* 11468 */;

require = arg1;
createToggle = {
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
      let obj = selectedTeenId(14828);
      const intl = selectedTeenId(1114).intl;
      const stringResult = intl.string(selectedTeenId(1114).t.GYpoAq);
      obj = { title: null, subtitle: null, handlePress: null, currentValue: null, excluded: null };
      obj[0] = stringResult;
      const intl2 = selectedTeenId(1114).intl;
      obj[1] = intl2.string(selectedTeenId(1114).t["+uI23H"]);
      obj[2] = function handlePress(explicitContentFriendDm) {
        let obj = selectedTeenId(closure_1_1[4]);
        obj = { explicitContentFriendDm };
        return obj.updateExplicitContentSetting(selectedTeenId, obj);
      };
      obj[3] = obj.getExplicitContentSettingOrDefault(selectedTeenId).explicitContentFriendDm;
      const items = [selectedTeenId(1187).ExplicitContentRedaction.SHOW];
      obj[4] = items;
      const result = selectedTeenId(14821).handleSensitiveMediaFilterPress(obj);
      const obj2 = selectedTeenId(14821);
    }
  },
  unsearchable: true
};
createToggle = createToggle.createPressable(createToggle);
let result = require("set").fileFinishedImporting("modules/user_settings/defs/native/ParentalControlsExplicitMediaFiltersFriendsDMsSetting.tsx");

export default createToggle;