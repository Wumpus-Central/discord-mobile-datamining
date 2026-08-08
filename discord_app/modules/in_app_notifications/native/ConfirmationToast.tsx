// discord_app/modules/in_app_notifications/native/ConfirmationToast.tsx
import "noop";
import { View } from "get ActivityIndicator";
import set from "set";
import { EMOJI_URL_BASE_SIZE } from "set";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import set from "set";

let c4;
let c5;
let error;
let metroImportAll;
const require = arg1;
({ extrapolateConfig: c4, PAN_INPUT_RANGE: c5 } = set);
({ jsx: error, jsxs: metroImportAll } = jsxProd);
createCacheKey = { container: null, notificationRow: null, textEmoji: null, imageEmoji: null };
createCacheKey = { alignItems: "center", justifyContent: "center", marginTop: require("Themes").space.PX_12 };
createCacheKey[0] = createCacheKey;
let obj1 = {};
const merged = Object.assign(require("Themes").shadows.SHADOW_HIGH);
obj1.flexDirection = "row";
obj1.alignItems = "center";
obj1.justifyContent = "center";
obj1.gap = require("Themes").space.PX_8;
obj1.backgroundColor = require("Themes").colors.MOBILE_ALERT_BACKGROUND_DEFAULT;
obj1.paddingStart = require("Themes").space.PX_8;
obj1.paddingEnd = require("Themes").space.PX_12;
obj1.paddingVertical = require("Themes").space.PX_8;
obj1.borderRadius = require("Themes").radii.round;
obj1.overflow = "hidden";
createCacheKey[1] = obj1;
createCacheKey[2] = { fontSize: 20 };
createCacheKey[3] = { width: 20, height: 20 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let closure_10 = { code: "function ConfirmationToastTsx1(){const{animatedValue,interpolate,notificationGestureY,PAN_INPUT_RANGE,extrapolateConfig}=this.__closure;const value=animatedValue.get();const scale=interpolate(value,[0,1],[0.8,1]);const enterTranslateY=interpolate(value,[0,1],[-20,0]);const gestureY=notificationGestureY.get();const dismissOpacity=interpolate(gestureY,PAN_INPUT_RANGE,[0,1,0],extrapolateConfig);return{transform:[{translateY:enterTranslateY+gestureY},{scale:scale}],opacity:value*dismissOpacity};}" };
let result = set.fileFinishedImporting("modules/in_app_notifications/native/ConfirmationToast.tsx");

export const ConfirmationToast = function ConfirmationToast(reaction) {
  let animated;
  animated = reaction.reaction;
  let notificationGestureY;
  let sharedValue;
  const tmp = createCacheKey();
  let obj = notificationGestureY(9815);
  notificationGestureY = obj.useInAppNotificationContext().notificationGestureY;
  let obj1 = notificationGestureY(4036);
  sharedValue = obj1.useSharedValue(0);
  let getEmojiURL = sharedValue;
  sharedValue(4731)(() => {
    const result = sharedValue.set(notificationGestureY(outer1_2[10]).withTiming(1, { duration: 200 }));
  });
  let obj2 = notificationGestureY(4036);
  class A {
    constructor() {
      value = c1.get();
      obj = notificationGestureY(outer1_2[8]);
      interpolateResult = obj.interpolate(value, [0, 1], [0.8, 1]);
      obj2 = notificationGestureY(outer1_2[8]);
      interpolateResult1 = obj2.interpolate(value, [0, 1], [-20, 0]);
      value1 = notificationGestureY.get();
      obj = { transform: items, opacity: null };
      obj1 = { translateY: interpolateResult1 + value1 };
      items = [, ];
      items[0] = obj1;
      items[1] = { scale: interpolateResult };
      obj5 = notificationGestureY(outer1_2[8]);
      obj[1] = value * obj5.interpolate(value1, outer1_5, [0, 1, 0], outer1_4);
      return obj;
    }
  }
  obj = { animatedValue: sharedValue, interpolate: notificationGestureY(4036).interpolate, notificationGestureY, PAN_INPUT_RANGE: closure_5, extrapolateConfig: closure_4 };
  A.__closure = obj;
  A.__workletHash = 4654280152495;
  A.__initData = closure_10;
  const animatedStyle = obj2.useAnimatedStyle(A);
  obj = { style: items, children: null };
  items = [tmp.container, animatedStyle];
  obj1 = { style: tmp.notificationRow, children: null };
  if (null != animated) {
    obj2 = { textEmojiStyle: null, fastImageStyle: null, name: null, src: null };
    ({ textEmoji: obj8[0], imageEmoji: obj8[1] } = tmp);
    let str = "";
    const emojiURL = getEmojiURL(5360);
    if (null == animated.id) {
      str = animated.surrogates;
    }
    obj2[2] = str;
    if (null != animated.id) {
      const emojiURL1 = getEmojiURL(1416);
      getEmojiURL = emojiURL1.getEmojiURL;
      const obj3 = { id: null, animated: null, size: null };
      ({ id: obj9[0], animated } = animated);
      obj3[1] = animated;
      obj3[2] = EMOJI_URL_BASE_SIZE;
      let url = getEmojiURL(obj3);
    } else {
      url = animated.url;
    }
    obj2[3] = url;
    tmp7(emojiURL, obj2);
  } else {
    const obj4 = { size: "md", color: null };
    obj4[1] = getEmojiURL(712).colors.STATUS_POSITIVE;
    const items1 = [tmp7(tmp2(4264).CircleCheckIcon, obj4), ];
    const obj5 = { variant: "text-sm/semibold", color: "text-default", children: null };
    obj5[2] = reaction.message;
    items1[1] = tmp7(tmp2(4299).Text, obj5);
    obj1[1] = items1;
    obj[1] = tmp9(tmp10, obj1);
    return tmp7(tmp8, obj);
  }
};