// === Module 10308: Notification ===

// Module 10308 (Notification)
import nativeDefault from "native" /* 576 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4374 */;
import timing from "timing" /* 4639 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 4818 */;
import spring from "spring" /* 5059 */;
import InAppNotificationUtils from "InAppNotificationUtils" /* 10233 */;
import noop from "module_19" /* 19 */;

require = fn;
const InAppNotificationConstants = fn(10234);
({ MIN_SWIPE_VELOCITY: closure_4, STARTED_SWIPE_THRESHOLD: hasOwnProperty, NOTIFICATION_MAX_WIDTH } = InAppNotificationConstants);
const AnalyticEvents = fn(1074).AnalyticEvents;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4638);
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
let closure_11 = { code: "function NotificationTsx1(){const{withSpring,scale,ON_PRESS_SPRING_CONFIG}=this.__closure;return{transform:[{scale:withSpring(scale.get(),ON_PRESS_SPRING_CONFIG)}]};}" };
let closure_12 = { code: "function NotificationTsx2(finished){const{runOnJS,handleDismissNotification}=this.__closure;if(finished){runOnJS(handleDismissNotification)('timeout');}}" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/in_app_notifications/native/Notification.tsx");

export const NotificationPressable = function NotificationPressable(notification) {
  notification = notification.notification;
  const onPress = notification.onPress;
  const onSettingsPress = notification.onSettingsPress;
  let tmp = null;
  ({ icon, children, accessoryLabelNode, rightAccessory, header } = notification);
  let merged = Object.assign(notification, Object.assign({ notification: 0, icon: 0, children: 0, accessoryLabelNode: 0, rightAccessory: 0, header: 0, onPress: 0, onSettingsPress: 0 }));
  let guildId;
  let handleDismissNotification;
  let sharedValue1;
  closure_14 = undefined;
  let callback2;
  let callback3;
  const tmp3 = handleDismissNotification();
  let items = [notification];
  const memo = guildId.useMemo(() => {
    const merged = Object.assign(InAppNotificationUtils.extractMetadataFromNotification(notification));
    return { type: notification.type };
  }, items);
  guildId = memo.guildId;
  const channelId = memo.channelId;
  const messageId = memo.messageId;
  const type = memo.type;
  const inAppNotificationContext = notification(onSettingsPress[7]).useInAppNotificationContext();
  const notificationGestureY = inAppNotificationContext.notificationGestureY;
  const velocityY = inAppNotificationContext.velocityY;
  handleDismissNotification = inAppNotificationContext.handleDismissNotification;
  const initialized = inAppNotificationContext.initialized;
  const panning = inAppNotificationContext.panning;
  let obj = notification(onSettingsPress[7]);
  const tmp5 = onSettingsPress;
  const sharedValue = notification(onSettingsPress[8]).useSharedValue(1);
  const items1 = [sharedValue];
  const items2 = [sharedValue];
  const callback = guildId.useCallback(() => sharedValue.set(0.95), items1);
  const callback1 = guildId.useCallback(() => sharedValue.set(1), items2);
  let obj2 = notification(onSettingsPress[8]);
  class A {
    constructor() {
      obj = { transform: null };
      obj1 = { scale: null };
      obj3 = closure_0(closure_2[9]);
      obj1.scale = obj3.withSpring(closure_12.get(), closure_10);
      items = [];
      items[0] = obj1;
      obj.transform = items;
      return obj;
    }
  }
  let obj3 = notification(onSettingsPress[8]);
  A.__closure = { withSpring: notification(onSettingsPress[9]).withSpring, scale: sharedValue, ON_PRESS_SPRING_CONFIG: initialized };
  A.__workletHash = 5485274967370;
  A.__initData = panning;
  const animatedStyle = obj3.useAnimatedStyle(A);
  const memo1 = guildId.useMemo(() => ({ foreground: true }), []);
  const obj4 = { withSpring: notification(onSettingsPress[9]).withSpring, scale: sharedValue, ON_PRESS_SPRING_CONFIG: initialized };
  sharedValue1 = notification(onSettingsPress[8]).useSharedValue(100);
  closure_14 = tmp13;
  const items3 = [initialized, panning, notification, sharedValue1, handleDismissNotification, notification.duration !== Infinity];
  const effect = guildId.useEffect(() => {
    if (initialized) {
      if (!panning) {
        if (closure_14) {
          value = sharedValue1.get();
          let obj = timing;
          const obj2 = { duration: value / 100 * tmp, easing: ReanimatedRexport.Easing.linear };
          const fn = function s(arg0) {
            if (arg0) {
              notification(onSettingsPress[8]).runOnJS(handleDismissNotification)("timeout");
              const obj = notification(onSettingsPress[8]);
            }
          };
          const obj3 = { runOnJS: ReanimatedRexport.runOnJS, handleDismissNotification };
          fn.__closure = obj3;
          fn.__workletHash = 5704836747866;
          fn.__initData = __initData;
          const result = sharedValue1.set(obj.withTiming(0, obj2, "animate-always", fn));
          return () => {
            notification(onSettingsPress[8]).cancelAnimation(sharedValue1);
          };
        }
      }
    }
  }, items3);
  const items4 = [velocityY, notificationGestureY];
  callback2 = guildId.useCallback(() => {
    let tmp = Math.abs(velocityY.get()) >= React4;
    if (!tmp) {
      const _Math = Math;
      tmp = Math.abs(notificationGestureY.get()) >= hasOwnProperty;
    }
    return tmp;
  }, items4);
  const items5 = [callback2, type, notification.inAppNotificationId, guildId, channelId, messageId, sharedValue1, notification.duration !== Infinity];
  callback3 = guildId.useCallback((IAR_MODAL_OPEN, fn) => {
    if (!callback2()) {
      const obj2 = { type, notif_guild_id: guildId, notif_channel_id: channelId, message_id: messageId, in_app_notification_id: notification.inAppNotificationId, percent: null };
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
  }, items5);
  const items6 = [callback3, onPress];
  const items7 = [callback3, onSettingsPress];
  const callback4 = guildId.useCallback(() => callback3(AnalyticEvents.IN_APP_NOTIFICATION_CLICKED, onPress), items6);
  const callback5 = guildId.useCallback(() => {
    callback3(AnalyticEvents.IN_APP_NOTIFICATION_LONG_PRESSED, onSettingsPress);
  }, items7);
  const obj6 = { style: null, children: null };
  const items8 = [tmp3.shadow, animatedStyle];
  obj6.style = items8;
  const obj7 = {};
  const merged1 = Object.assign(merged);
  obj7.onAccessibilityEscape = function onAccessibilityEscape() {
    return handleDismissNotification("accessibility_escape");
  };
  obj7.style = tmp3.container;
  obj7.androidRippleConfig = memo1;
  obj7.onPress = callback4;
  obj7.onPressIn = callback;
  obj7.onPressOut = callback1;
  obj7.onLongPress = callback5;
  obj7.accessibilityRole = "button";
  const items9 = [notificationGestureY(onPress(onSettingsPress[13]), { icon, children, accessoryLabelNode, rightAccessory, header }), ];
  if (notification.duration !== Infinity) {
    const obj8 = { percent: sharedValue1 };
    tmp = tmp19(onPress(tmp5[14]), obj8);
  }
  items9[1] = tmp;
  obj7.children = items9;
  obj6.children = velocityY(notification(onSettingsPress[12]).PressableHighlight, obj7);
  return notificationGestureY(onPress(onSettingsPress[8]).View, obj6);
};