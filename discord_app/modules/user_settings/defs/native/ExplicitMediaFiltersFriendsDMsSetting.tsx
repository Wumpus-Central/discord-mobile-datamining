// discord_app/modules/user_settings/defs/native/ExplicitMediaFiltersFriendsDMsSetting.tsx
import { MobileSetting } from "MobileSetting";
import createToggle from "createToggle";

const pressable = createToggle.createPressable({
  useTitle: function getTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t["+uI23H"]);
  },
  parent() {
    return MobileSetting.SENSITIVE_CONTENT_FILTERS;
  },
  useTrailing: function useObscuredContentFriendsDmSettingValue() {
    const obj = require(13870) /* useExplicitContentSettingOrDefault */;
    return require(5865) /* redactionSettingToRenderedString */.redactionSettingToRenderedString(obj.useExplicitContentSettingOrDefault().explicitContentFriendDm)();
  },
  onPress: function onObscuredContentFriendsDmOnPress() {
    let obj = require(5884) /* resolveExplicitContentSettingWithDefaults */;
    const intl = require(1236) /* getSystemLocale */.intl;
    const stringResult = intl.string(require(1236) /* getSystemLocale */.t.GYpoAq);
    obj = { title: stringResult, subtitle: null, handlePress: null, currentValue: null };
    const intl2 = require(1236) /* getSystemLocale */.intl;
    obj[1] = intl2.string(require(1236) /* getSystemLocale */.t["+uI23H"]);
    obj[2] = function handlePress(explicitContentFriendDm) {
      let obj = callback(table[3]);
      obj = { explicitContentFriendDm };
      return obj.updateExplicitContentSetting(obj);
    };
    obj[3] = obj.getExplicitContentSettingOrDefault().explicitContentFriendDm;
    const result = require(13871) /* handleSensitiveMediaFilterPress */.handleSensitiveMediaFilterPress(obj);
  },
  useSearchTerms: function getSearchTerms() {
    const intl = require(1236) /* getSystemLocale */.intl;
    const items = [intl.string(require(1236) /* getSystemLocale */.t["N/oRI+"]), , ];
    const intl2 = require(1236) /* getSystemLocale */.intl;
    items[1] = intl2.string(require(1236) /* getSystemLocale */.t.QVdYsK);
    const intl3 = require(1236) /* getSystemLocale */.intl;
    items[2] = intl3.string(require(1236) /* getSystemLocale */.t["5mnTa7"]);
    return items;
  },
  useIsDisabled: require("useSensitiveMediaSettingDisabled").useSensitiveMediaSettingDisabled
});
let obj = {
  useTitle: function getTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t["+uI23H"]);
  },
  parent() {
    return MobileSetting.SENSITIVE_CONTENT_FILTERS;
  },
  useTrailing: function useObscuredContentFriendsDmSettingValue() {
    const obj = require(13870) /* useExplicitContentSettingOrDefault */;
    return require(5865) /* redactionSettingToRenderedString */.redactionSettingToRenderedString(obj.useExplicitContentSettingOrDefault().explicitContentFriendDm)();
  },
  onPress: function onObscuredContentFriendsDmOnPress() {
    let obj = require(5884) /* resolveExplicitContentSettingWithDefaults */;
    const intl = require(1236) /* getSystemLocale */.intl;
    const stringResult = intl.string(require(1236) /* getSystemLocale */.t.GYpoAq);
    obj = { title: stringResult, subtitle: null, handlePress: null, currentValue: null };
    const intl2 = require(1236) /* getSystemLocale */.intl;
    obj[1] = intl2.string(require(1236) /* getSystemLocale */.t["+uI23H"]);
    obj[2] = function handlePress(explicitContentFriendDm) {
      let obj = callback(table[3]);
      obj = { explicitContentFriendDm };
      return obj.updateExplicitContentSetting(obj);
    };
    obj[3] = obj.getExplicitContentSettingOrDefault().explicitContentFriendDm;
    const result = require(13871) /* handleSensitiveMediaFilterPress */.handleSensitiveMediaFilterPress(obj);
  },
  useSearchTerms: function getSearchTerms() {
    const intl = require(1236) /* getSystemLocale */.intl;
    const items = [intl.string(require(1236) /* getSystemLocale */.t["N/oRI+"]), , ];
    const intl2 = require(1236) /* getSystemLocale */.intl;
    items[1] = intl2.string(require(1236) /* getSystemLocale */.t.QVdYsK);
    const intl3 = require(1236) /* getSystemLocale */.intl;
    items[2] = intl3.string(require(1236) /* getSystemLocale */.t["5mnTa7"]);
    return items;
  },
  useIsDisabled: require("useSensitiveMediaSettingDisabled").useSensitiveMediaSettingDisabled
};
let result = require("redactionSettingToRenderedString").fileFinishedImporting("modules/user_settings/defs/native/ExplicitMediaFiltersFriendsDMsSetting.tsx");

export default pressable;