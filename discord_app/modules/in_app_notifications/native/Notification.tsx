// discord_app/modules/in_app_notifications/native/Notification.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import closure_3 from "../../../../_runtime/00019_noop.js";
import set from "InAppNotificationConstants.tsx";
import { AnalyticEvents } from "../../../Constants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
({ MIN_SWIPE_VELOCITY: c4, STARTED_SWIPE_THRESHOLD: c5, NOTIFICATION_MAX_WIDTH } = set);
({ jsx: error, jsxs: closure_8 } = jsxProd);
createCacheKey = { shadow: null, container: null };
createCacheKey = {};
let merged = Object.assign(ThemesDefault.shadows.SHADOW_HIGH);
createCacheKey.backgroundColor = ThemesDefault.colors.MOBILE_ALERT_BACKGROUND_DEFAULT;
createCacheKey.borderRadius = ThemesDefault.radii.lg;
createCacheKey.maxWidth = NOTIFICATION_MAX_WIDTH;
createCacheKey.width = "100%";
createCacheKey.alignSelf = "center";
createCacheKey.borderWidth = 1;
createCacheKey.borderColor = ThemesDefault.colors.BORDER_SUBTLE;
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { borderRadius: ThemesDefault.radii.lg, overflow: "hidden" };
let closure_9 = createCacheKey.createStyles(createCacheKey);
let closure_10 = { mass: 1, overshootClamping: true, damping: 27, stiffness: 300 };
let closure_11 = { code: "function NotificationTsx1(){const{withSpring,scale,ON_PRESS_SPRING_CONFIG}=this.__closure;return{transform:[{scale:withSpring(scale.get(),ON_PRESS_SPRING_CONFIG)}]};}" };
let closure_12 = { code: "function NotificationTsx2(finished){const{runOnJS,handleDismissNotification}=this.__closure;if(finished){runOnJS(handleDismissNotification)('timeout');}}" };
let result = set.fileFinishedImporting("modules/in_app_notifications/native/Notification.tsx");

export const NotificationPressable = function NotificationPressable(notification) {
  notification = notification.notification;
  const onPress = notification.onPress;
  const onSettingsPress = notification.onSettingsPress;
  let tmp = null;
  ({ icon, children, accessoryLabelNode, rightAccessory, header } = notification);
  let merged = Object.assign(notification, Object.create(null));
  let guildId;
  let channelId;
  let messageId;
  let type;
  let notificationGestureY;
  let velocityY;
  let handleDismissNotification;
  let initialized;
  let panning;
  let sharedValue;
  let sharedValue1;
  closure_14 = undefined;
  let callback2;
  let callback3;
  const tmp3 = handleDismissNotification();
  let items = [notification];
  const memo = guildId.useMemo(() => {
    const merged = Object.assign(notification(onSettingsPress[6]).extractMetadataFromNotification(notification));
    return { type: notification.type };
  }, items);
  guildId = memo.guildId;
  channelId = memo.channelId;
  messageId = memo.messageId;
  type = memo.type;
  let obj = notification(onSettingsPress[7]);
  const inAppNotificationContext = obj.useInAppNotificationContext();
  notificationGestureY = inAppNotificationContext.notificationGestureY;
  velocityY = inAppNotificationContext.velocityY;
  handleDismissNotification = inAppNotificationContext.handleDismissNotification;
  initialized = inAppNotificationContext.initialized;
  panning = inAppNotificationContext.panning;
  obj1 = notification(onSettingsPress[8]);
  sharedValue = obj1.useSharedValue(1);
  const items1 = [sharedValue];
  const items2 = [sharedValue];
  const callback = guildId.useCallback(() => sharedValue.set(0.95), items1);
  const callback1 = guildId.useCallback(() => sharedValue.set(1), items2);
  let obj2 = notification(onSettingsPress[8]);
  class A {
    constructor() {
      obj = { transform: null };
      obj = { scale: null };
      obj3 = notification(onSettingsPress[9]);
      obj[0] = obj3.withSpring(closure_12.get(), initialized);
      items = [];
      items[0] = obj;
      obj[0] = items;
      return obj;
    }
  }
  obj = { withSpring: notification(onSettingsPress[9]).withSpring, scale: sharedValue, ON_PRESS_SPRING_CONFIG: initialized };
  A.__closure = obj;
  A.__workletHash = 5485274967370;
  A.__initData = panning;
  const animatedStyle = obj2.useAnimatedStyle(A);
  const memo1 = guildId.useMemo(() => ({ foreground: true }), []);
  sharedValue1 = notification(onSettingsPress[8]).useSharedValue(100);
  closure_14 = tmp13;
  const items3 = [initialized, panning, notification, sharedValue1, handleDismissNotification, notification.duration !== Infinity];
  const effect = guildId.useEffect(() => {
    if (initialized) {
      if (!panning) {
        if (closure_14) {
          const value = sharedValue1.get();
          let obj = notification(onSettingsPress[10]);
          obj = { duration: null, easing: null };
          obj[0] = value / 100 * tmp;
          obj[1] = notification(onSettingsPress[8]).Easing.linear;
          const fn = function s(arg0) {
            if (arg0) {
              closure_1_0(closure_1_2[8]).runOnJS(closure_9)("timeout");
              const obj = closure_1_0(closure_1_2[8]);
            }
          };
          obj = { runOnJS: null, handleDismissNotification: null };
          obj[0] = notification(onSettingsPress[8]).runOnJS;
          obj[1] = handleDismissNotification;
          fn.__closure = obj;
          fn.__workletHash = 5704836747866;
          fn.__initData = sharedValue;
          const result = sharedValue1.set(obj.withTiming(0, obj, "animate-always", fn));
          return () => {
            closure_1_0(closure_1_2[8]).cancelAnimation(closure_13);
          };
        }
      }
    }
  }, items3);
  const items4 = [velocityY, notificationGestureY];
  callback2 = guildId.useCallback(() => {
    let tmp = Math.abs(velocityY.get()) >= channelId;
    if (!tmp) {
      const _Math = Math;
      tmp = Math.abs(notificationGestureY.get()) >= messageId;
    }
    return tmp;
  }, items4);
  const items5 = [callback2, type, notification.inAppNotificationId, guildId, channelId, messageId, sharedValue1, notification.duration !== Infinity];
  callback3 = guildId.useCallback((IAR_MODAL_OPEN) => {
    if (!callback2()) {
      let obj = onPress(onSettingsPress[11]);
      obj = { type: null, notif_guild_id: null, notif_channel_id: null, message_id: null, in_app_notification_id: null, percent: null };
      obj[0] = type;
      obj[1] = guildId;
      obj[2] = channelId;
      obj[3] = messageId;
      obj[4] = notification.inAppNotificationId;
      let rounded;
      if (closure_14) {
        let value = sharedValue1;
        if (typeof sharedValue1 !== "number") {
          value = obj3.get();
        }
        rounded = Math.floor(value);
        obj3 = sharedValue1;
      }
      obj[5] = rounded;
      obj.trackWithMetadata(IAR_MODAL_OPEN, obj);
      if (arg1 != null) {
        arg1();
      }
    }
  }, items5);
  const items6 = [callback3, onPress];
  const items7 = [callback3, onSettingsPress];
  const callback4 = guildId.useCallback(() => callback3(type.IN_APP_NOTIFICATION_CLICKED, onPress), items6);
  const callback5 = guildId.useCallback(() => {
    callback3(type.IN_APP_NOTIFICATION_LONG_PRESSED, onSettingsPress);
  }, items7);
  obj = { style: items8, children: null };
  items8 = [tmp3.shadow, animatedStyle];
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
  const items9 = [notificationGestureY(onPress(onSettingsPress[13]), { icon, children, accessoryLabelNode, rightAccessory, header }), ];
  if (notification.duration !== Infinity) {
    obj2 = { percent: null };
    obj2[0] = sharedValue1;
    tmp = tmp19(onPress(onSettingsPress[14]), obj2);
  }
  items9[1] = tmp;
  obj1.children = items9;
  obj[1] = velocityY(notification(onSettingsPress[12]).PressableHighlight, obj1);
  return notificationGestureY(onPress(onSettingsPress[8]).View, obj);
};