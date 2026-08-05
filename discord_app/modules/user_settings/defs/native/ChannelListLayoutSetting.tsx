// discord_app/modules/user_settings/defs/native/ChannelListLayoutSetting.tsx
import createToggle from "createToggle";

function useChannelListLayoutPredicate() {
  return false;
}
const radio = createToggle.createRadio({
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.eY1X1e);
  },
  parent: require("MobileSetting").MobileSetting.ADVANCED,
  useValue: require("explicitContentFromProto").ChannelListLayoutSetting.useSetting,
  onValueChange: function onChannelListLayoutValueChange(arg0) {
    const ChannelListLayoutSetting = require(3958) /* explicitContentFromProto */.ChannelListLayoutSetting;
    ChannelListLayoutSetting.updateSetting(arg0);
  },
  useOptions: function useChannelListLayoutOptions() {
    let obj = { label: null, value: null };
    const intl = require(1236) /* getSystemLocale */.intl;
    obj[0] = intl.string(require(1236) /* getSystemLocale */.t.T7G4Y0);
    obj[1] = require(3963) /* ChannelListLayoutTypes */.ChannelListLayoutTypes.COZY;
    const items = [obj, ];
    obj = { label: null, value: null };
    const intl2 = require(1236) /* getSystemLocale */.intl;
    obj[0] = intl2.string(require(1236) /* getSystemLocale */.t["7iegX4"]);
    obj[1] = require(3963) /* ChannelListLayoutTypes */.ChannelListLayoutTypes.COMPACT;
    items[1] = obj;
    return items;
  },
  usePredicate: useChannelListLayoutPredicate
});
let obj = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.eY1X1e);
  },
  parent: require("MobileSetting").MobileSetting.ADVANCED,
  useValue: require("explicitContentFromProto").ChannelListLayoutSetting.useSetting,
  onValueChange: function onChannelListLayoutValueChange(arg0) {
    const ChannelListLayoutSetting = require(3958) /* explicitContentFromProto */.ChannelListLayoutSetting;
    ChannelListLayoutSetting.updateSetting(arg0);
  },
  useOptions: function useChannelListLayoutOptions() {
    let obj = { label: null, value: null };
    const intl = require(1236) /* getSystemLocale */.intl;
    obj[0] = intl.string(require(1236) /* getSystemLocale */.t.T7G4Y0);
    obj[1] = require(3963) /* ChannelListLayoutTypes */.ChannelListLayoutTypes.COZY;
    const items = [obj, ];
    obj = { label: null, value: null };
    const intl2 = require(1236) /* getSystemLocale */.intl;
    obj[0] = intl2.string(require(1236) /* getSystemLocale */.t["7iegX4"]);
    obj[1] = require(3963) /* ChannelListLayoutTypes */.ChannelListLayoutTypes.COMPACT;
    items[1] = obj;
    return items;
  },
  usePredicate: useChannelListLayoutPredicate
};
const result = require("getSystemLocale").fileFinishedImporting("modules/user_settings/defs/native/ChannelListLayoutSetting.tsx");

export default radio;
export { useChannelListLayoutPredicate };