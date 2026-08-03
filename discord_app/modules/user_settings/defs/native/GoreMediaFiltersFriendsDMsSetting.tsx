import createToggle from "createToggle";

const pressable = createToggle.createPressable({
  useTitle: function getTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t["+uI23H"]);
  },
  parent: require("MobileSetting").MobileSetting.SENSITIVE_CONTENT_FILTERS,
  useTrailing: function useGoreContentFriendsDmSettingValue() {
    const obj = require(13937) /* useExplicitContentSettingOrDefault */;
    return require(6956) /* redactionSettingToRenderedString */.redactionSettingToRenderedString(obj.useGoreContentSettingOrDefault().goreContentFriendDm)();
  },
  onPress: function onGoreContentFriendsDmOnPress() {
    let obj = require(5797) /* resolveGoreSettingWithDefaults */;
    obj = { title: null, subtitle: null, handlePress: null, currentValue: null };
    const intl = require(1236) /* getSystemLocale */.intl;
    obj[0] = intl.string(require(1236) /* getSystemLocale */.t["16/3Bi"]);
    const intl2 = require(1236) /* getSystemLocale */.intl;
    obj[1] = intl2.string(require(1236) /* getSystemLocale */.t["+uI23H"]);
    obj[2] = function handlePress(goreContentFriendDm) {
      let obj = callback(table[3]);
      obj = { goreContentFriendDm };
      return obj.updateGoreContentSetting(obj);
    };
    obj[3] = obj.getGoreContentSettingOrDefault().goreContentFriendDm;
    const result = require(13938) /* handleSensitiveMediaFilterPress */.handleSensitiveMediaFilterPress(obj);
  },
  useSearchTerms() {
    const intl = require(1236) /* getSystemLocale */.intl;
    const items = [intl.string(require(1236) /* getSystemLocale */.t["N/oRI+"]), , ];
    const intl2 = require(1236) /* getSystemLocale */.intl;
    items[1] = intl2.string(require(1236) /* getSystemLocale */.t.QVdYsK);
    const intl3 = require(1236) /* getSystemLocale */.intl;
    items[2] = intl3.string(require(1236) /* getSystemLocale */.t["K0OWP+"]);
    return items;
  },
  useIsDisabled: require("useSensitiveMediaSettingDisabled").useSensitiveMediaSettingDisabled
});
let obj = {
  useTitle: function getTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t["+uI23H"]);
  },
  parent: require("MobileSetting").MobileSetting.SENSITIVE_CONTENT_FILTERS,
  useTrailing: function useGoreContentFriendsDmSettingValue() {
    const obj = require(13937) /* useExplicitContentSettingOrDefault */;
    return require(6956) /* redactionSettingToRenderedString */.redactionSettingToRenderedString(obj.useGoreContentSettingOrDefault().goreContentFriendDm)();
  },
  onPress: function onGoreContentFriendsDmOnPress() {
    let obj = require(5797) /* resolveGoreSettingWithDefaults */;
    obj = { title: null, subtitle: null, handlePress: null, currentValue: null };
    const intl = require(1236) /* getSystemLocale */.intl;
    obj[0] = intl.string(require(1236) /* getSystemLocale */.t["16/3Bi"]);
    const intl2 = require(1236) /* getSystemLocale */.intl;
    obj[1] = intl2.string(require(1236) /* getSystemLocale */.t["+uI23H"]);
    obj[2] = function handlePress(goreContentFriendDm) {
      let obj = callback(table[3]);
      obj = { goreContentFriendDm };
      return obj.updateGoreContentSetting(obj);
    };
    obj[3] = obj.getGoreContentSettingOrDefault().goreContentFriendDm;
    const result = require(13938) /* handleSensitiveMediaFilterPress */.handleSensitiveMediaFilterPress(obj);
  },
  useSearchTerms() {
    const intl = require(1236) /* getSystemLocale */.intl;
    const items = [intl.string(require(1236) /* getSystemLocale */.t["N/oRI+"]), , ];
    const intl2 = require(1236) /* getSystemLocale */.intl;
    items[1] = intl2.string(require(1236) /* getSystemLocale */.t.QVdYsK);
    const intl3 = require(1236) /* getSystemLocale */.intl;
    items[2] = intl3.string(require(1236) /* getSystemLocale */.t["K0OWP+"]);
    return items;
  },
  useIsDisabled: require("useSensitiveMediaSettingDisabled").useSensitiveMediaSettingDisabled
};
let result = require("redactionSettingToRenderedString").fileFinishedImporting("modules/user_settings/defs/native/GoreMediaFiltersFriendsDMsSetting.tsx");

export default pressable;