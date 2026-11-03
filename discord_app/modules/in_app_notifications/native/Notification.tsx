// === Module 11213: Notification ===

// Module 11213 (Notification)
import nativeDefault from "native" /* 575 */;
import _mod1652 from "module_1652" /* 1652 */;
import _mod1705 from "module_1705" /* 1705 */;
import timing_timing from "timing/timing" /* 5377 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 5880 */;
import InAppNotificationUtils from "InAppNotificationUtils" /* 11155 */;
import NotificationContentDefault from "NotificationContent" /* 11214 */;
import NotificationProgressDefault from "NotificationProgress" /* 11216 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;
const _modDef1652 = _mod1652;

require = fn;
const InAppNotificationConstants = fn(11156);
({ MIN_SWIPE_VELOCITY: closure_4, STARTED_SWIPE_THRESHOLD: hasOwnProperty, NOTIFICATION_MAX_WIDTH } = InAppNotificationConstants);
const AnalyticEvents = fn(1072).AnalyticEvents;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(5141);
let obj2 = { shadow: null, container: null };
let obj3 = {};
let merged = Object.assign(nativeDefault.shadows.SHADOW_HIGH);
obj3.backgroundColor = nativeDefault.colors.MOBILE_ALERT_BACKGROUND_DEFAULT;
obj3.borderRadius = nativeDefault.radii.lg;
obj3.maxWidth = NOTIFICATION_MAX_WIDTH;
obj3.width = "100%";
obj3.alignSelf = "center";
obj3.borderWidth = 1;
obj3.borderColor = nativeDefault.colors.BORDER_SUBTLE;
obj2.shadow = obj3;
obj2.container = { borderRadius: nativeDefault.radii.lg, overflow: "hidden" };
let closure_9 = createStyles.createStyles(obj2);
let closure_10 = { mass: 1, overshootClamping: true, damping: 27, stiffness: 300 };
let closure_11 = { code: "(function NotificationTsx1(){let[withSpring,scale,ON_PRESS_SPRING_CONFIG]=this.__closure;return{transform:[{scale:withSpring(scale.get(),ON_PRESS_SPRING_CONFIG)}]};})" };
let closure_12 = { code: "(function NotificationTsx2(finished){let[scheduleOnRN,handleDismissNotification]=this.__closure;if(finished){scheduleOnRN(handleDismissNotification,'timeout');}})" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/in_app_notifications/native/Notification.tsx");

export function NotificationPressable(notification) {
  notification = notification.notification;
  _require = notification;
  const onPress = notification.onPress;
  const onSettingsPress = notification.onSettingsPress;
  ({ icon, children, accessoryLabelNode, rightAccessory, header } = notification);
  let merged = Object.assign(notification, Object.assign({ notification: 0, icon: 0, children: 0, accessoryLabelNode: 0, rightAccessory: 0, header: 0, onPress: 0, onSettingsPress: 0 }));
  let guildId;
  let handleDismissNotification;
  let sharedValue1;
  closure_14 = undefined;
  let callback2;
  let callback3;
  const tmp2 = handleDismissNotification();
  items = [notification];
  const memo = guildId.useMemo(() => {
    const merged = Object.assign(InAppNotificationUtils.extractMetadataFromNotification(_undefined));
    return { type: _undefined.type };
  }, items);
  guildId = memo.guildId;
  const channelId = memo.channelId;
  const messageId = memo.messageId;
  const type = memo.type;
  const inAppNotificationContext = require("InAppNotificationContext").useInAppNotificationContext();
  const notificationGestureY = inAppNotificationContext.notificationGestureY;
  const velocityY = inAppNotificationContext.velocityY;
  handleDismissNotification = inAppNotificationContext.handleDismissNotification;
  const initialized = inAppNotificationContext.initialized;
  const panning = inAppNotificationContext.panning;
  let obj2 = require("InAppNotificationContext");
  const sharedValue = require("module_1652").useSharedValue(1);
  let items1 = [sharedValue];
  const items2 = [sharedValue];
  const callback = guildId.useCallback(() => sharedValue.set(0.95), items1);
  const callback1 = guildId.useCallback(() => sharedValue.set(1), items2);
  const obj3 = require("module_1652");
  const items3 = [panning, require("spring/spring").withSpring, sharedValue, initialized];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  [tmp10, tmp11, tmp12, tmp13] = items3;
  class NotificationTsx1 {
    constructor() {
      obj = { transform: null };
      obj1 = { scale: closure_0(closure_1.get(), closure_2) };
      items = [];
      items[0] = obj1;
      obj.transform = items;
      return obj;
    }
  }
  const items4 = [tmp11, tmp12, tmp13];
  NotificationTsx1.__closure = items4;
  NotificationTsx1.__workletHash = 8384259234867;
  NotificationTsx1.__initData = tmp10;
  const animatedStyle = require("module_1652").useAnimatedStyle(NotificationTsx1);
  const memo1 = obj.useMemo(() => ({ foreground: true }), []);
  const obj4 = require("module_1652");
  sharedValue1 = require("module_1652").useSharedValue(100);
  closure_14 = tmp17;
  const items5 = [initialized, panning, notification, sharedValue1, handleDismissNotification, notification.duration !== Infinity];
  const effect = obj.useEffect(() => {
    if (initialized) {
      if (!panning) {
        if (closure_14) {
          value = sharedValue1.get();
          const obj = timing_timing;
          const obj2 = { duration: value / 100 * tmp, easing: _mod1652.Easing.linear };
          items = [closure_12, _mod1705.scheduleOnRN, handleDismissNotification];
          c0 = undefined;
          c1 = undefined;
          [tmp11, tmp12, tmp13] = items;
          class NotificationTsx2 {
            constructor(arg0) {
              if (arg0) {
                tmp = closure_0;
                tmp2 = closure_1;
                str = "timeout";
                tmp3 = closure_0(closure_1, "timeout");
              }
              return;
            }
          }
          const items1 = [tmp12, tmp13];
          NotificationTsx2.__closure = items1;
          NotificationTsx2.__workletHash = 15850789902158;
          NotificationTsx2.__initData = tmp11;
          const result = sharedValue1.set(obj.withTiming(0, obj2, "animate-always", NotificationTsx2));
          return () => {
            _undefined(c2[8]).cancelAnimation(sharedValue1);
          };
        }
      }
    }
  }, items5);
  const items6 = [velocityY, notificationGestureY];
  callback2 = obj.useCallback(() => {
    let tmp = Math.abs(velocityY.get()) >= React4;
    if (!tmp) {
      const _Math = Math;
      tmp = Math.abs(notificationGestureY.get()) >= hasOwnProperty;
    }
    return tmp;
  }, items6);
  const items7 = [callback2, type, notification.inAppNotificationId, guildId, channelId, messageId, sharedValue1, notification.duration !== Infinity];
  callback3 = obj.useCallback((IAR_MODAL_OPEN, fn) => {
    if (!callback2()) {
      const obj2 = { type, notif_guild_id: guildId, notif_channel_id: channelId, message_id: messageId, in_app_notification_id: _undefined.inAppNotificationId, percent: null };
      let rounded;
      if (closure_14) {
        value = sharedValue1;
        if (typeof sharedValue1 !== "number") {
          value = sharedValue1.get();
        }
        rounded = Math.floor(value);
      }
      obj2.percent = rounded;
      AppAnalyticsUtilsDefault.trackWithMetadata(IAR_MODAL_OPEN, obj2);
      if (fn != null) {
        fn();
      }
    }
  }, items7);
  const items8 = [callback3, onPress];
  const items9 = [callback3, onSettingsPress];
  const callback4 = obj.useCallback(() => callback3(AnalyticEvents.IN_APP_NOTIFICATION_CLICKED, c1), items8);
  const callback5 = obj.useCallback(() => {
    callback3(AnalyticEvents.IN_APP_NOTIFICATION_LONG_PRESSED, c2);
  }, items9);
  const obj5 = { style: null, children: null };
  const items10 = [tmp2.shadow, animatedStyle];
  obj5.style = items10;
  const obj6 = {};
  const merged1 = Object.assign(merged);
  obj6.onAccessibilityEscape = function onAccessibilityEscape() {
    return handleDismissNotification("accessibility_escape");
  };
  obj6.style = tmp2.container;
  obj6.androidRippleConfig = memo1;
  obj6.onPress = callback4;
  obj6.onPressIn = callback;
  obj6.onPressOut = callback1;
  obj6.onLongPress = callback5;
  obj6.accessibilityRole = "button";
  const items11 = [notificationGestureY(NotificationContentDefault, { icon, children, accessoryLabelNode, rightAccessory, header }), ];
  let tmp23Result = null;
  if (notification.duration !== Infinity) {
    const obj7 = { percent: sharedValue1 };
    tmp23Result = tmp23(NotificationProgressDefault, obj7);
  }
  items11[1] = tmp23Result;
  obj6.children = items11;
  obj5.children = velocityY(require("Pressables").PressableHighlight, obj6);
  return notificationGestureY(_modDef1652.View, obj5);
}