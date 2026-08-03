// === Module 10271: useSwipeToReplySettingValue ===

// Module 10271 (useSwipeToReplySettingValue)
import ME from "ME";
import createToggle from "createToggle";

let c3;
let c4;
function useSwipeToReplySettingValue() {
  const SwipeRightToLeftModeSetting = require(3928) /* explicitContentFromProto */.SwipeRightToLeftModeSetting;
  let SWIPE_RIGHT_TO_LEFT_REPLY = SwipeRightToLeftModeSetting.useSetting();
  if (SWIPE_RIGHT_TO_LEFT_REPLY === require(1306) /* create */.SwipeRightToLeftMode.SWIPE_RIGHT_TO_LEFT_UNSET) {
    SWIPE_RIGHT_TO_LEFT_REPLY = require(1306) /* create */.SwipeRightToLeftMode.SWIPE_RIGHT_TO_LEFT_REPLY;
  }
  return SWIPE_RIGHT_TO_LEFT_REPLY;
}
({ AnalyticEvents: c3, AnalyticsSections: c4 } = ME);
const radio = createToggle.createRadio({
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t["Jf0C/c"]);
  },
  useSearchTerms() {
    const intl = require(1236) /* getSystemLocale */.intl;
    const items = [intl.string(require(1236) /* getSystemLocale */.t["9BGJ1m"])];
    return items;
  },
  parent: require("MobileSetting").MobileSetting.SWIPE_RIGHT_TO_LEFT,
  useValue: useSwipeToReplySettingValue,
  onValueChange: function onSwipeToReplyValueChange(arg0) {
    const NumberResult = Number(arg0);
    let obj = importDefault(698);
    obj = { enabled: NumberResult === require(1306) /* create */.SwipeRightToLeftMode.SWIPE_RIGHT_TO_LEFT_REPLY, location: obj };
    obj = { section: constants2.SETTINGS_TEXT_AND_IMAGES };
    obj.track(constants.USER_SETTINGS_SWIPE_TO_REPLY_TOGGLE, obj);
    const SwipeRightToLeftModeSetting = require(3928) /* explicitContentFromProto */.SwipeRightToLeftModeSetting;
    SwipeRightToLeftModeSetting.updateSetting(NumberResult);
  },
  useOptions: function useHasSwipeToReplySettingOptions() {
    let obj = { value: require(1306) /* create */.SwipeRightToLeftMode.SWIPE_RIGHT_TO_LEFT_CHANNEL_DETAILS, label: null, subLabel: null };
    const intl = require(1236) /* getSystemLocale */.intl;
    obj[1] = intl.string(require(1236) /* getSystemLocale */.t["6eXLcJ"]);
    const intl2 = require(1236) /* getSystemLocale */.intl;
    obj[2] = intl2.string(require(1236) /* getSystemLocale */.t.ohhhDK);
    const items = [obj, ];
    obj = { value: require(1306) /* create */.SwipeRightToLeftMode.SWIPE_RIGHT_TO_LEFT_REPLY, label: null };
    const intl3 = require(1236) /* getSystemLocale */.intl;
    obj[1] = intl3.string(require(1236) /* getSystemLocale */.t["3tYNDS"]);
    items[1] = obj;
    return items;
  }
});
let obj = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t["Jf0C/c"]);
  },
  useSearchTerms() {
    const intl = require(1236) /* getSystemLocale */.intl;
    const items = [intl.string(require(1236) /* getSystemLocale */.t["9BGJ1m"])];
    return items;
  },
  parent: require("MobileSetting").MobileSetting.SWIPE_RIGHT_TO_LEFT,
  useValue: useSwipeToReplySettingValue,
  onValueChange: function onSwipeToReplyValueChange(arg0) {
    const NumberResult = Number(arg0);
    let obj = importDefault(698);
    obj = { enabled: NumberResult === require(1306) /* create */.SwipeRightToLeftMode.SWIPE_RIGHT_TO_LEFT_REPLY, location: obj };
    obj = { section: constants2.SETTINGS_TEXT_AND_IMAGES };
    obj.track(constants.USER_SETTINGS_SWIPE_TO_REPLY_TOGGLE, obj);
    const SwipeRightToLeftModeSetting = require(3928) /* explicitContentFromProto */.SwipeRightToLeftModeSetting;
    SwipeRightToLeftModeSetting.updateSetting(NumberResult);
  },
  useOptions: function useHasSwipeToReplySettingOptions() {
    let obj = { value: require(1306) /* create */.SwipeRightToLeftMode.SWIPE_RIGHT_TO_LEFT_CHANNEL_DETAILS, label: null, subLabel: null };
    const intl = require(1236) /* getSystemLocale */.intl;
    obj[1] = intl.string(require(1236) /* getSystemLocale */.t["6eXLcJ"]);
    const intl2 = require(1236) /* getSystemLocale */.intl;
    obj[2] = intl2.string(require(1236) /* getSystemLocale */.t.ohhhDK);
    const items = [obj, ];
    obj = { value: require(1306) /* create */.SwipeRightToLeftMode.SWIPE_RIGHT_TO_LEFT_REPLY, label: null };
    const intl3 = require(1236) /* getSystemLocale */.intl;
    obj[1] = intl3.string(require(1236) /* getSystemLocale */.t["3tYNDS"]);
    items[1] = obj;
    return items;
  }
};
const result = require("create").fileFinishedImporting("modules/user_settings/defs/native/ChatGestureSettings.tsx");

export default radio;
export { useSwipeToReplySettingValue };
export const getSwipeToReplySettingValue = function getSwipeToReplySettingValue() {
  const SwipeRightToLeftModeSetting = require(3928) /* explicitContentFromProto */.SwipeRightToLeftModeSetting;
  let SWIPE_RIGHT_TO_LEFT_REPLY = SwipeRightToLeftModeSetting.getSetting();
  if (SWIPE_RIGHT_TO_LEFT_REPLY === require(1306) /* create */.SwipeRightToLeftMode.SWIPE_RIGHT_TO_LEFT_UNSET) {
    SWIPE_RIGHT_TO_LEFT_REPLY = require(1306) /* create */.SwipeRightToLeftMode.SWIPE_RIGHT_TO_LEFT_REPLY;
  }
  return SWIPE_RIGHT_TO_LEFT_REPLY;
};