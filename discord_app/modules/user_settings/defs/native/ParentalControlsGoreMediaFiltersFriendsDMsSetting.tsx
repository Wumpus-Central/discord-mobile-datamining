import freshTeenActivityWithMap from "freshTeenActivityWithMap";
import createToggle from "createToggle";

const require = arg1;
createToggle = {
  useTitle: function getTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t["+uI23H"]);
  },
  parent: require("MobileSetting").MobileSetting.PARENTAL_CONTROLS_SENSITIVE_CONTENT_FILTERS,
  useTrailing: function useGoreContentFriendsDmSettingValue() {
    const parentalControlledGoreContentSettings = require(13941) /* useParentalControlledExplicitContentSettings */.useParentalControlledGoreContentSettings();
    let goreContentFriendDm;
    if (parentalControlledGoreContentSettings != null) {
      goreContentFriendDm = parentalControlledGoreContentSettings.goreContentFriendDm;
    }
    let tmp5 = null;
    if (null != goreContentFriendDm) {
      tmp5 = require(6956) /* redactionSettingToRenderedString */.redactionSettingToRenderedString(goreContentFriendDm)();
      const tmpResult = require(6956) /* redactionSettingToRenderedString */;
    }
    return tmp5;
  },
  onPress: function onGoreContentFriendsDmOnPress() {
    selectedTeenId = selectedTeenId.getSelectedTeenId();
    if (null != selectedTeenId) {
      let obj = selectedTeenId(13945);
      obj = { title: null, subtitle: null, handlePress: null, currentValue: null, excluded: null };
      const intl = selectedTeenId(1236).intl;
      obj[0] = intl.string(selectedTeenId(1236).t["16/3Bi"]);
      const intl2 = selectedTeenId(1236).intl;
      obj[1] = intl2.string(selectedTeenId(1236).t["+uI23H"]);
      obj[2] = function handlePress(goreContentFriendDm) {
        let obj = selectedTeenId(outer1_1[4]);
        obj = { goreContentFriendDm };
        return obj.updateGoreContentSetting(selectedTeenId, obj);
      };
      obj[3] = obj.getGoreContentSettingOrDefault(selectedTeenId).goreContentFriendDm;
      const items = [selectedTeenId(1306).ExplicitContentRedaction.SHOW];
      obj[4] = items;
      const result = selectedTeenId(13938).handleSensitiveMediaFilterPress(obj);
      const obj2 = selectedTeenId(13938);
    }
  },
  unsearchable: true
};
createToggle = createToggle.createPressable(createToggle);
let result = require("useParentalControlledExplicitContentSettings").fileFinishedImporting("modules/user_settings/defs/native/ParentalControlsGoreMediaFiltersFriendsDMsSetting.tsx");

export default createToggle;