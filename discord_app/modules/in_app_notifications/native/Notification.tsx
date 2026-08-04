import noop from "noop";
import set from "set";
import { AnalyticEvents } from "ME";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import set from "ME";

let NOTIFICATION_MAX_WIDTH;
let c4;
let c5;
let error;
let metroImportAll;
const require = arg1;
({ MIN_SWIPE_VELOCITY: c4, STARTED_SWIPE_THRESHOLD: c5, NOTIFICATION_MAX_WIDTH } = set);
({ jsx: error, jsxs: metroImportAll } = jsxProd);
createCacheKey = { shadow: null, container: null };
createCacheKey = {};
let merged = Object.assign(require("Themes").shadows.SHADOW_HIGH);
createCacheKey.backgroundColor = require("Themes").colors.MOBILE_ALERT_BACKGROUND_DEFAULT;
createCacheKey.borderRadius = require("Themes").radii.lg;
createCacheKey.maxWidth = NOTIFICATION_MAX_WIDTH;
createCacheKey.width = "100%";
createCacheKey.alignSelf = "center";
createCacheKey.borderWidth = 1;
createCacheKey.borderColor = require("Themes").colors.BORDER_SUBTLE;
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { borderRadius: require("Themes").radii.lg, overflow: "hidden" };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let closure_10 = { mass: 1, overshootClamping: true, damping: 27, stiffness: 300 };
let closure_11 = { code: "function NotificationTsx1(){const{withSpring,scale,ON_PRESS_SPRING_CONFIG}=this.__closure;return{transform:[{scale:withSpring(scale.get(),ON_PRESS_SPRING_CONFIG)}]};}" };
let closure_12 = { code: "function NotificationTsx2(finished){const{runOnJS,handleDismissNotification}=this.__closure;if(finished){runOnJS(handleDismissNotification)('timeout');}}" };
let closure_13 = { code: "function NotificationTsx3(){const{withTiming,expandedSV,tokens,Easing}=this.__closure;return{borderRadius:withTiming(expandedSV.get()?tokens.radii.xl:tokens.radii.lg,{duration:220,easing:Easing.bezier(0.16,1,0.3,1)})};}" };
let result = set.fileFinishedImporting("modules/in_app_notifications/native/Notification.tsx");

export const NotificationPressable = function NotificationPressable(notification) {
  let accessoryLabelNode;
  let bodyStyle;
  let children;
  let expandableContent;
  let expandedContentVisible;
  let header;
  let icon;
  let onAccessibilityExpand;
  let rightAccessory;
  notification = notification.notification;
  let flag = notification.showDragHandle;
  ({ expandableContent, icon, children, accessoryLabelNode, rightAccessory, header } = notification);
  if (flag === undefined) {
    flag = false;
  }
  ({ expandedContentVisible, onAccessibilityExpand, bodyStyle } = notification);
  if (expandedContentVisible === undefined) {
    expandedContentVisible = false;
  }
  const onPress = notification.onPress;
  const onSettingsPress = notification.onSettingsPress;
  let merged = Object.assign(notification, Object.create(null));
  let guildId;
  let channelId;
  let messageId;
  let type;
  let notificationGestureY;
  let velocityY;
  let autoDismissing;
  let isExpanded;
  let expandedSV;
  let setExpanded;
  let handleDismissNotification;
  let initialized;
  let panning;
  let isExpandableNotification;
  let sharedValue;
  let sharedValue1;
  let c19;
  let callback2;
  let callback3;
  let tmp2 = autoDismissing();
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
  autoDismissing = inAppNotificationContext.autoDismissing;
  isExpanded = inAppNotificationContext.isExpanded;
  expandedSV = inAppNotificationContext.expandedSV;
  setExpanded = inAppNotificationContext.setExpanded;
  handleDismissNotification = inAppNotificationContext.handleDismissNotification;
  initialized = inAppNotificationContext.initialized;
  panning = inAppNotificationContext.panning;
  isExpandableNotification = inAppNotificationContext.isExpandableNotification;
  let obj1 = notification(onSettingsPress[8]);
  sharedValue = obj1.useSharedValue(1);
  const items1 = [sharedValue];
  const items2 = [sharedValue];
  const callback = guildId.useCallback(() => sharedValue.set(0.95), items1);
  const callback1 = guildId.useCallback(() => sharedValue.set(1), items2);
  let obj2 = notification(onSettingsPress[8]);
  class R {
    constructor() {
      obj = { transform: null };
      obj = { scale: null };
      obj3 = notification(onSettingsPress[9]);
      obj[0] = obj3.withSpring(c17.get(), isExpanded);
      items = [];
      items[0] = obj;
      obj[0] = items;
      return obj;
    }
  }
  obj = { withSpring: notification(onSettingsPress[9]).withSpring, scale: sharedValue, ON_PRESS_SPRING_CONFIG: isExpanded };
  R.__closure = obj;
  R.__workletHash = 5485274967370;
  R.__initData = expandedSV;
  let animatedStyle = obj2.useAnimatedStyle(R);
  const memo1 = guildId.useMemo(() => ({ foreground: true }), []);
  const obj5 = notification(onSettingsPress[10]);
  const tmp4 = notification;
  sharedValue1 = notification(onSettingsPress[8]).useSharedValue(100);
  c19 = tmp13;
  const items3 = [initialized, panning, notification, sharedValue1, handleDismissNotification, isExpanded, autoDismissing, notification.duration !== Infinity];
  const effect = guildId.useEffect(() => {
    if (initialized) {
      if (!panning) {
        if (c19) {
          if (!isExpanded) {
            if (!autoDismissing) {
              const value = sharedValue1.get();
              let obj = notification(onSettingsPress[11]);
              obj = { duration: null, easing: null };
              obj[0] = value / 100 * tmp;
              obj[1] = notification(onSettingsPress[8]).Easing.linear;
              const fn = function s(arg0) {
                if (arg0) {
                  outer1_0(outer1_2[8]).runOnJS(closure_13)("timeout");
                  const obj = outer1_0(outer1_2[8]);
                }
              };
              obj = { runOnJS: null, handleDismissNotification: null };
              obj[0] = notification(onSettingsPress[8]).runOnJS;
              obj[1] = handleDismissNotification;
              fn.__closure = obj;
              fn.__workletHash = 5704836747866;
              fn.__initData = setExpanded;
              const result = sharedValue1.set(obj.withTiming(0, obj, "animate-always", fn));
              return () => {
                outer1_0(outer1_2[8]).cancelAnimation(closure_18);
              };
            }
          }
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
  const items5 = [callback2, autoDismissing, type, notification.inAppNotificationId, guildId, channelId, messageId, sharedValue1, isExpanded, notification.duration !== Infinity];
  callback3 = guildId.useCallback((IAR_MODAL_OPEN) => {
    const tmp = callback2();
    let tmp2 = !tmp;
    if (tmp) {
      tmp2 = isExpanded;
    }
    if (!tmp2) {
      tmp2 = autoDismissing;
    }
    if (tmp2) {
      let obj = onPress(onSettingsPress[12]);
      obj = { type: null, notif_guild_id: null, notif_channel_id: null, message_id: null, in_app_notification_id: null, percent: null };
      obj[0] = type;
      obj[1] = guildId;
      obj[2] = channelId;
      obj[3] = messageId;
      obj[4] = notification.inAppNotificationId;
      let rounded;
      if (c19) {
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
  const items7 = [callback3, isExpandableNotification, onSettingsPress, setExpanded];
  const callback4 = guildId.useCallback(() => callback3(type.IN_APP_NOTIFICATION_CLICKED, onPress), items6);
  const callback5 = guildId.useCallback(() => {
    if (isExpandableNotification) {
      setExpanded(true, "long_press");
    } else {
      callback3(type.IN_APP_NOTIFICATION_LONG_PRESSED, onSettingsPress);
    }
  }, items7);
  const obj6 = notification(onSettingsPress[8]);
  function ai() {
    let obj = notification(onSettingsPress[11]);
    const value = expandedSV.get();
    const radii = onPress(onSettingsPress[5]).radii;
    obj = { borderRadius: null };
    obj = { duration: 220, easing: null };
    const Easing = notification(onSettingsPress[8]).Easing;
    obj[1] = Easing.bezier(0.16, 1, 0.3, 1);
    obj[0] = obj.withTiming(value ? radii.xl : radii.lg, obj);
    return obj;
  }
  obj = { withTiming: notification(onSettingsPress[11]).withTiming, expandedSV, tokens: onPress(onSettingsPress[5]), Easing: notification(onSettingsPress[8]).Easing };
  ai.__closure = obj;
  ai.__workletHash = 15276203537259;
  ai.__initData = handleDismissNotification;
  const animatedStyle1 = notification(onSettingsPress[8]).useAnimatedStyle(ai);
  const items8 = [tmp2.shadow, ];
  if (isExpandableNotification) {
    animatedStyle = animatedStyle1;
  }
  obj1 = { style: items8, children: null };
  items8[1] = animatedStyle;
  obj2 = {};
  const merged1 = Object.assign(merged);
  obj2.onAccessibilityEscape = function onAccessibilityEscape() {
    return handleDismissNotification("accessibility_escape");
  };
  obj2.style = tmp2.container;
  obj2.androidRippleConfig = memo1;
  obj2.onPress = callback4;
  obj2.onPressIn = callback;
  obj2.onPressOut = callback1;
  obj2.onLongPress = callback5;
  obj2.accessibilityRole = "button";
  const items9 = [notificationGestureY(onPress(onSettingsPress[14]), { icon, children, accessoryLabelNode, rightAccessory, header, showDragHandle: flag, onAccessibilityExpand, bodyStyle, expandedContentVisible }), , ];
  let tmp21Result = null;
  if (notification.duration !== Infinity) {
    let obj3 = { canExpand: null, percent: null, type: null };
    obj3[0] = obj5.useCanExpandInAppNotification("NotificationPressable").canExpand;
    obj3[1] = sharedValue1;
    obj3[2] = type;
    tmp21Result = tmp21(tmp19(tmp5[15]), obj3);
  }
  items9[1] = tmp21Result;
  items9[2] = expandableContent;
  obj2.children = items9;
  obj1[1] = velocityY(tmp4(onSettingsPress[13]).PressableHighlight, obj2);
  return notificationGestureY(onPress(onSettingsPress[8]).View, obj1);
};