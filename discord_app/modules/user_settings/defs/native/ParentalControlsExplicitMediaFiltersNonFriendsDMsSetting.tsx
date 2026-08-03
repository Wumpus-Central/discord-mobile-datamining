// === Module 14774: useObscuredContentNonFriendsDmSettingValue ===

// Module 14774 (useObscuredContentNonFriendsDmSettingValue)
import freshTeenActivityWithMap from "freshTeenActivityWithMap";
import createToggle from "createToggle";

const require = arg1;
function useObscuredContentNonFriendsDmSettingValue() {
  const parentalControlledExplicitContentSettings = require(13941) /* useParentalControlledExplicitContentSettings */.useParentalControlledExplicitContentSettings();
  let prop;
  if (parentalControlledExplicitContentSettings != null) {
    prop = parentalControlledExplicitContentSettings.explicitContentNonFriendDm;
  }
  let tmp5 = null;
  if (null != prop) {
    tmp5 = require(6956) /* redactionSettingToRenderedString */.redactionSettingToRenderedString(prop)();
    const tmpResult = require(6956) /* redactionSettingToRenderedString */;
  }
  return tmp5;
}
function onObscuredContentNonFriendsDmOnPress() {
  selectedTeenId = selectedTeenId.getSelectedTeenId();
  if (null != selectedTeenId) {
    let obj = selectedTeenId(13945);
    const intl = selectedTeenId(1236).intl;
    const stringResult = intl.string(selectedTeenId(1236).t.GYpoAq);
    obj = { title: null, subtitle: null, excluded: null, handlePress: null, currentValue: null };
    obj[0] = stringResult;
    const intl2 = selectedTeenId(1236).intl;
    obj[1] = intl2.string(selectedTeenId(1236).t["Yh+HX1"]);
    const items = [selectedTeenId(1306).ExplicitContentRedaction.SHOW];
    obj[2] = items;
    obj[3] = function handlePress(explicitContentNonFriendDm) {
      let obj = selectedTeenId(outer1_1[4]);
      obj = { explicitContentNonFriendDm };
      const result = obj.updateExplicitContentSetting(selectedTeenId, obj);
    };
    obj[4] = obj.getExplicitContentSettingOrDefault(selectedTeenId).explicitContentNonFriendDm;
    let result = selectedTeenId(13938).handleSensitiveMediaFilterPress(obj);
    const obj2 = selectedTeenId(13938);
  }
}
createToggle = {
  useTitle: function getTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t["Yh+HX1"]);
  },
  parent: require("MobileSetting").MobileSetting.PARENTAL_CONTROLS_SENSITIVE_CONTENT_FILTERS,
  useTrailing: useObscuredContentNonFriendsDmSettingValue,
  onPress: onObscuredContentNonFriendsDmOnPress,
  unsearchable: true
};
createToggle = createToggle.createPressable(createToggle);
let result = require("useParentalControlledExplicitContentSettings").fileFinishedImporting("modules/user_settings/defs/native/ParentalControlsExplicitMediaFiltersNonFriendsDMsSetting.tsx");

export default createToggle;
export { useObscuredContentNonFriendsDmSettingValue };
export { onObscuredContentNonFriendsDmOnPress };