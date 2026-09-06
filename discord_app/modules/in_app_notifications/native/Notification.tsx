// discord_app/modules/in_app_notifications/native/Notification.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import ReanimatedRexport from "../../reanimated/ReanimatedRexport.tsx";
import timing from "../../../design/animation/reanimated/timing/timing.tsx";
import AppAnalyticsUtilsDefault from "../../app_analytics/AppAnalyticsUtils.tsx";
import spring from "../../../design/animation/reanimated/spring/spring.tsx";
import InAppNotificationUtils from "InAppNotificationUtils.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const InAppNotificationConstants = fn(10095);
({
  MIN_SWIPE_VELOCITY: closure_4,
  STARTED_SWIPE_THRESHOLD: hasOwnProperty,
  NOTIFICATION_MAX_WIDTH,
} = InAppNotificationConstants);
const AnalyticEvents = fn(1074).AnalyticEvents;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
fn(4560);
let createStyles = { shadow: null, container: null };
createStyles = {};
let merged = Object.assign(nativeDefault.shadows.SHADOW_HIGH);
createStyles.backgroundColor = nativeDefault.colors.MOBILE_ALERT_BACKGROUND_DEFAULT;
createStyles.borderRadius = nativeDefault.radii.lg;
createStyles.maxWidth = NOTIFICATION_MAX_WIDTH;
createStyles.width = "100%";
createStyles.alignSelf = "center";
createStyles.borderWidth = 1;
createStyles.borderColor = nativeDefault.colors.BORDER_SUBTLE;
createStyles.shadow = createStyles;
createStyles.container = { borderRadius: nativeDefault.radii.lg, overflow: "hidden" };
let closure_9 = createStyles.createStyles(createStyles);
let closure_10 = { mass: 1, overshootClamping: true, damping: 27, stiffness: 300 };
let closure_11 = {
  code: "function NotificationTsx1(){const{withSpring,scale,ON_PRESS_SPRING_CONFIG}=this.__closure;return{transform:[{scale:withSpring(scale.get(),ON_PRESS_SPRING_CONFIG)}]};}",
};
let closure_12 = {
  code: "function NotificationTsx2(finished){const{runOnJS,handleDismissNotification}=this.__closure;if(finished){runOnJS(handleDismissNotification)('timeout');}}",
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/in_app_notifications/native/Notification.tsx");

export const NotificationPressable = function NotificationPressable(notification) {
  notification = notification.notification;
  const onPress = notification.onPress;
  const onSettingsPress = notification.onSettingsPress;
  let tmp = null;
  ({ icon, children, accessoryLabelNode, rightAccessory, header } = notification);
  let merged = Object.assign(
    notification,
    Object.assign({
      notification: 0,
      icon: 0,
      children: 0,
      accessoryLabelNode: 0,
      rightAccessory: 0,
      header: 0,
      onPress: 0,
      onSettingsPress: 0,
    }),
  );
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
  let obj = notification(onSettingsPress[7]);
  const inAppNotificationContext = obj.useInAppNotificationContext();
  const notificationGestureY = inAppNotificationContext.notificationGestureY;
  const velocityY = inAppNotificationContext.velocityY;
  handleDismissNotification = inAppNotificationContext.handleDismissNotification;
  const initialized = inAppNotificationContext.initialized;
  const panning = inAppNotificationContext.panning;
  let obj1 = notification(onSettingsPress[8]);
  const sharedValue = obj1.useSharedValue(1);
  const items1 = [sharedValue];
  const items2 = [sharedValue];
  const callback = guildId.useCallback(() => sharedValue.set(0.95), items1);
  const callback1 = guildId.useCallback(() => sharedValue.set(1), items2);
  let obj2 = notification(onSettingsPress[8]);
  class A {
    constructor() {
      obj = { transform: null };
      obj = { scale: null };
      obj3 = closure_0(closure_2[9]);
      obj.scale = obj3.withSpring(closure_12.get(), closure_10);
      items = [];
      items[0] = obj;
      obj.transform = items;
      return obj;
    }
  }
  obj = {
    withSpring: notification(onSettingsPress[9]).withSpring,
    scale: sharedValue,
    ON_PRESS_SPRING_CONFIG: initialized,
  };
  A.__closure = obj;
  A.__workletHash = 5485274967370;
  A.__initData = panning;
  const animatedStyle = obj2.useAnimatedStyle(A);
  const memo1 = guildId.useMemo(() => ({ foreground: true }), []);
  sharedValue1 = notification(onSettingsPress[8]).useSharedValue(100);
  closure_14 = tmp13;
  const items3 = [
    initialized,
    panning,
    notification,
    sharedValue1,
    handleDismissNotification,
    notification.duration !== Infinity,
  ];
  const effect = guildId.useEffect(() => {
    if (initialized) {
      if (!panning) {
        if (closure_14) {
          value = sharedValue1.get();
          let obj = { duration: (value / 100) * tmp, easing: ReanimatedRexport.Easing.linear };
          const fn = function s(arg0) {
            if (arg0) {
              notification(onSettingsPress[8]).runOnJS(handleDismissNotification)("timeout");
              const obj = notification(onSettingsPress[8]);
            }
          };
          obj = { runOnJS: ReanimatedRexport.runOnJS, handleDismissNotification };
          fn.__closure = obj;
          fn.__workletHash = 5704836747866;
          fn.__initData = __initData;
          const result = sharedValue1.set(obj.withTiming(0, obj, "animate-always", fn));
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
  const items5 = [
    callback2,
    type,
    notification.inAppNotificationId,
    guildId,
    channelId,
    messageId,
    sharedValue1,
    notification.duration !== Infinity,
  ];
  callback3 = guildId.useCallback((IAR_MODAL_OPEN, fn) => {
    if (!callback2()) {
      const obj = {
        type,
        notif_guild_id: guildId,
        notif_channel_id: channelId,
        message_id: messageId,
        in_app_notification_id: notification.inAppNotificationId,
        percent: null,
      };
      let rounded;
      if (closure_14) {
        value = sharedValue1;
        if (typeof sharedValue1 !== "number") {
          value = obj3.get();
        }
        rounded = Math.floor(value);
        obj3 = sharedValue1;
      }
      obj.percent = rounded;
      obj.trackWithMetadata(IAR_MODAL_OPEN, obj);
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
  obj = { style: null, children: null };
  const items8 = [tmp3.shadow, animatedStyle];
  obj.style = items8;
  obj1 = {};
  const merged1 = Object.assign(merged);
  obj1.onAccessibilityEscape = function onAccessibilityEscape() {
    return handleDismissNotification("accessibility_escape");
  };
  obj1.style = tmp3.container;
  obj1.androidRippleConfig = memo1;
  obj1.onPress = callback4;
  obj1.onPressIn = callback;
  obj1.onPressOut = callback1;
  obj1.onLongPress = callback5;
  obj1.accessibilityRole = "button";
  const items9 = [
    notificationGestureY(onPress(onSettingsPress[13]), { icon, children, accessoryLabelNode, rightAccessory, header }),
  ];
  if (notification.duration !== Infinity) {
    obj2 = { percent: sharedValue1 };
    tmp = tmp19(onPress(onSettingsPress[14]), obj2);
  }
  items9[1] = tmp;
  obj1.children = items9;
  obj.children = velocityY(notification(onSettingsPress[12]).PressableHighlight, obj1);
  return notificationGestureY(onPress(onSettingsPress[8]).View, obj);
};
