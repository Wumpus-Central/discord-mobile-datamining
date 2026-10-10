// discord_app/modules/in_app_notifications/native/Notification.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import ReanimatedRexport from "../../reanimated/ReanimatedRexport.tsx";
import timing from "../../../design/animation/reanimated/timing/timing.tsx";
import AppAnalyticsUtilsDefault from "../../app_analytics/AppAnalyticsUtils.tsx";
import spring from "../../../design/animation/reanimated/spring/spring.tsx";
import InAppNotificationUtils from "InAppNotificationUtils.tsx";
import _objectWithoutProperties from "../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
let closure_3 = [
  "notification",
  "icon",
  "children",
  "accessoryLabelNode",
  "rightAccessory",
  "header",
  "onPress",
  "onSettingsPress",
];
const InAppNotificationConstants = fn(12576);
({
  MIN_SWIPE_VELOCITY: metroRequire,
  STARTED_SWIPE_THRESHOLD: closure_7,
  NOTIFICATION_MAX_WIDTH,
} = InAppNotificationConstants);
const AnalyticEvents = fn(1085).AnalyticEvents;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(5092);
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
let closure_11 = createStyles.createStyles(obj2);
let closure_12 = { mass: 1, overshootClamping: true, damping: 27, stiffness: 300 };
let closure_13 = {
  code: "function NotificationTsx1(){const{withSpring,scale,ON_PRESS_SPRING_CONFIG}=this.__closure;return{transform:[{scale:withSpring(scale.get(),ON_PRESS_SPRING_CONFIG)}]};}",
};
let closure_14 = {
  code: 'function NotificationTsx2(finished){const{runOnJS,handleDismissNotification}=this.__closure;if(finished){runOnJS(handleDismissNotification)("timeout");}}',
};
let closure_15 = {
  code: "function NotificationTsx3(){const{withSpring,scale,ON_PRESS_SPRING_CONFIG}=this.__closure;return{transform:[{scale:withSpring(scale.get(),ON_PRESS_SPRING_CONFIG)}]};}",
};
let closure_16 = {
  code: "function NotificationTsx4(finished){const{runOnJS,handleDismissNotification}=this.__closure;if(finished){runOnJS(handleDismissNotification)('timeout');}}",
};
const ReactCompilerGating = fn(558);
let obj4 = { borderRadius: nativeDefault.radii.lg, overflow: "hidden" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/in_app_notifications/native/Notification.tsx");

export const NotificationPressable = ReactCompilerGating.isReactCompilerEnabled()
  ? function NotificationPressable(notification) {
      const cResult = require("c").c(79);
      if (cResult[0] !== notification) {
        notification = notification.notification;
        _require = notification;
        ({ icon, children, accessoryLabelNode, rightAccessory, header, onPress } = notification);
        closure_1 = onPress;
        const onSettingsPress = notification.onSettingsPress;
        dependencyMap = onSettingsPress;
        const tmp15 = channelId(notification, guildId);
        cResult[0] = notification;
        cResult[1] = tmp15;
        cResult[2] = accessoryLabelNode;
        cResult[3] = children;
        cResult[4] = header;
        cResult[5] = icon;
        cResult[6] = notification;
        cResult[7] = onPress;
        cResult[8] = onSettingsPress;
        cResult[9] = rightAccessory;
      } else {
        _require = cResult[6];
        closure_1 = cResult[7];
        dependencyMap = cResult[8];
      }
      panning();
      if (cResult[10] !== tmp9) {
        let result = tmp(12575).extractMetadataFromNotification(tmp9);
        cResult[10] = tmp9;
        cResult[11] = result;
        let tmp17 = result;
        const tmpResult = tmp(12575);
      } else {
        tmp17 = cResult[11];
      }
      if (cResult[12] === tmp9.type) {
        if (cResult[13] === tmp17) {
          let tmp19 = cResult[14];
        }
        guildId = tmp19.guildId;
        channelId = tmp19.channelId;
        const messageId = tmp19.messageId;
        const type = tmp19.type;
        const inAppNotificationContext = tmp(12592).useInAppNotificationContext();
        const notificationGestureY = inAppNotificationContext.notificationGestureY;
        const velocityY = inAppNotificationContext.velocityY;
        const handleDismissNotification = inAppNotificationContext.handleDismissNotification;
        const initialized = inAppNotificationContext.initialized;
        panning = inAppNotificationContext.panning;
        const tmpResult5 = tmp(12592);
        const sharedValue = tmp(4850).useSharedValue(1);
        if (cResult[15] !== sharedValue) {
          class L {
            constructor() {
              return closure_12.set(0.95);
            }
          }
          cResult[15] = sharedValue;
          cResult[16] = L;
        } else {
          class L {
            constructor() {
              return closure_12.set(0.95);
            }
          }
        }
        if (cResult[17] !== sharedValue) {
          class U {
            constructor() {
              return closure_12.set(1);
            }
          }
          cResult[17] = sharedValue;
          cResult[18] = U;
        } else {
          class U {
            constructor() {
              return closure_12.set(1);
            }
          }
        }
        const tmpResult6 = tmp(4850);
        class X {
          constructor() {
            obj = { transform: null };
            obj1 = { scale: null };
            obj3 = closure_0(closure_2[12]);
            obj1.scale = obj3.withSpring(closure_12.get(), closure_12);
            items = [];
            items[0] = obj1;
            obj.transform = items;
            return obj;
          }
        }
        let obj2 = { withSpring: tmp(5378).withSpring, scale: sharedValue, ON_PRESS_SPRING_CONFIG: sharedValue };
        X.__closure = obj2;
        X.__workletHash = 5485274967370;
        X.__initData = sharedValue1;
        const animatedStyle = tmp(4850).useAnimatedStyle(X);
        const _Symbol = Symbol;
        if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
          class U {
            constructor() {
              return closure_12.set(1);
            }
          }
          cResult[19] = tmp30;
        } else {
          class U {
            constructor() {
              return closure_12.set(1);
            }
          }
        }
        const tmpResult7 = tmp(4850);
        sharedValue1 = tmp(4850).useSharedValue(100);
        __initData = tmp32;
        if (cResult[20] === handleDismissNotification) {
          class U {
            constructor() {
              return closure_12.set(1);
            }
          }
        }
        let fn = function $() {
          if (initialized) {
            if (!panning) {
              if (__initData) {
                value = sharedValue1.get();
                let obj = timing;
                const obj2 = { duration: (value / 100) * tmp, easing: ReanimatedRexport.Easing.linear };
                const fn = function n(arg0) {
                  if (arg0) {
                    closure_0(4850).runOnJS(handleDismissNotification)("timeout");
                    const obj = closure_0(4850);
                  }
                };
                const obj3 = { runOnJS: ReanimatedRexport.runOnJS, handleDismissNotification };
                fn.__closure = obj3;
                fn.__workletHash = 7304961784538;
                fn.__initData = __initData;
                const result = sharedValue1.set(obj.withTiming(0, obj2, "animate-always", fn));
                return () => {
                  closure_0(4850).cancelAnimation(sharedValue1);
                };
              }
            }
          }
        };
        cResult[20] = handleDismissNotification;
        cResult[21] = initialized;
        cResult[22] = tmp9.duration;
        cResult[23] = panning;
        cResult[24] = sharedValue1;
        cResult[25] = tmp9.duration !== Infinity;
        cResult[26] = fn;
        const tmpResult8 = tmp(4850);
      }
      let obj3 = { type: tmp9.type };
      const merged = Object.assign(tmp17);
      cResult[12] = tmp9.type;
      cResult[13] = tmp17;
      cResult[14] = obj3;
      tmp19 = obj3;
      let obj = require("c");
    }
  : function NotificationPressable(notification) {
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
      let messageId;
      let panning;
      let sharedValue1;
      closure_14 = undefined;
      let callback2;
      let callback3;
      const tmp3 = panning();
      let items = [notification];
      const memo = messageId.useMemo(() => {
        const merged = Object.assign(InAppNotificationUtils.extractMetadataFromNotification(notification));
        return { type: notification.type };
      }, items);
      const guildId = memo.guildId;
      const channelId = memo.channelId;
      messageId = memo.messageId;
      const type = memo.type;
      const inAppNotificationContext = notification(onSettingsPress[10]).useInAppNotificationContext();
      const notificationGestureY = inAppNotificationContext.notificationGestureY;
      const velocityY = inAppNotificationContext.velocityY;
      const handleDismissNotification = inAppNotificationContext.handleDismissNotification;
      const initialized = inAppNotificationContext.initialized;
      panning = inAppNotificationContext.panning;
      let obj = notification(onSettingsPress[10]);
      const tmp5 = onSettingsPress;
      const sharedValue = notification(onSettingsPress[11]).useSharedValue(1);
      const items1 = [sharedValue];
      const items2 = [sharedValue];
      const callback = messageId.useCallback(() => sharedValue.set(0.95), items1);
      const callback1 = messageId.useCallback(() => sharedValue.set(1), items2);
      let obj2 = notification(onSettingsPress[11]);
      class C {
        constructor() {
          obj = { transform: null };
          obj1 = { scale: null };
          obj3 = closure_0(closure_2[12]);
          obj1.scale = obj3.withSpring(closure_12.get(), closure_12);
          items = [];
          items[0] = obj1;
          obj.transform = items;
          return obj;
        }
      }
      let obj3 = notification(onSettingsPress[11]);
      C.__closure = {
        withSpring: notification(onSettingsPress[12]).withSpring,
        scale: sharedValue,
        ON_PRESS_SPRING_CONFIG: sharedValue,
      };
      C.__workletHash = 11102359359048;
      C.__initData = callback2;
      const animatedStyle = obj3.useAnimatedStyle(C);
      const memo1 = messageId.useMemo(() => ({ foreground: true }), []);
      const obj4 = {
        withSpring: notification(onSettingsPress[12]).withSpring,
        scale: sharedValue,
        ON_PRESS_SPRING_CONFIG: sharedValue,
      };
      sharedValue1 = notification(onSettingsPress[11]).useSharedValue(100);
      closure_14 = tmp13;
      const items3 = [
        initialized,
        panning,
        notification,
        sharedValue1,
        handleDismissNotification,
        notification.duration !== Infinity,
      ];
      const effect = messageId.useEffect(() => {
        if (initialized) {
          if (!panning) {
            if (closure_14) {
              value = sharedValue1.get();
              let obj = timing;
              const obj2 = { duration: (value / 100) * tmp, easing: ReanimatedRexport.Easing.linear };
              const fn = function s(arg0) {
                if (arg0) {
                  notification(onSettingsPress[11]).runOnJS(handleDismissNotification)("timeout");
                  const obj = notification(onSettingsPress[11]);
                }
              };
              const obj3 = { runOnJS: ReanimatedRexport.runOnJS, handleDismissNotification };
              fn.__closure = obj3;
              fn.__workletHash = 17583634888028;
              fn.__initData = __initData;
              const result = sharedValue1.set(obj.withTiming(0, obj2, "animate-always", fn));
              return () => {
                notification(onSettingsPress[11]).cancelAnimation(sharedValue1);
              };
            }
          }
        }
      }, items3);
      const items4 = [velocityY, notificationGestureY];
      callback2 = messageId.useCallback(() => {
        let tmp = Math.abs(velocityY.get()) >= timestampProducer;
        if (!tmp) {
          const _Math = Math;
          tmp = Math.abs(notificationGestureY.get()) >= React5;
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
      callback3 = messageId.useCallback((TEXT_AREA_CTA_CLICKED, fn) => {
        if (!callback2()) {
          const obj2 = {
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
              value = sharedValue1.get();
            }
            rounded = Math.floor(value);
          }
          obj2.percent = rounded;
          AppAnalyticsUtilsDefault.trackWithMetadata(TEXT_AREA_CTA_CLICKED, obj2);
          if (fn != null) {
            fn();
          }
        }
      }, items5);
      const items6 = [callback3, onPress];
      const items7 = [callback3, onSettingsPress];
      const callback4 = messageId.useCallback(
        () => callback3(AnalyticEvents.IN_APP_NOTIFICATION_CLICKED, onPress),
        items6,
      );
      const callback5 = messageId.useCallback(() => {
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
      const items9 = [
        handleDismissNotification(onPress(onSettingsPress[15]), {
          icon,
          children,
          accessoryLabelNode,
          rightAccessory,
          header,
        }),
      ];
      if (notification.duration !== Infinity) {
        const obj8 = { percent: sharedValue1 };
        tmp = tmp19(onPress(tmp5[16]), obj8);
      }
      items9[1] = tmp;
      obj7.children = items9;
      obj6.children = initialized(notification(onSettingsPress[17]).PressableHighlight, obj7);
      return handleDismissNotification(onPress(onSettingsPress[11]).View, obj6);
    };
