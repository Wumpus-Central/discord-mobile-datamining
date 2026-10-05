// discord_app/modules/in_app_notifications/native/Notification.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../Constants.tsx";
import ReanimatedRexport from "../../reanimated/ReanimatedRexport.tsx";
import timing from "../../../design/animation/reanimated/timing/timing.tsx";
import AppAnalyticsUtilsDefault from "../../app_analytics/AppAnalyticsUtils.tsx";
import spring from "../../../design/animation/reanimated/spring/spring.tsx";
import InAppNotificationUtils from "InAppNotificationUtils.tsx";
import _objectWithoutProperties from "../../../../_runtime/metro/00109__objectWithoutProperties.js";
import react from "../../../../_runtime/00019_react.js";
import InAppNotificationConstants from "InAppNotificationConstants.tsx";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let __initData, _require, dependencyMap, notification, set;

let NOTIFICATION_MAX_WIDTH;
let c10;
let c9;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
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
({
  MIN_SWIPE_VELOCITY: metroRequire,
  STARTED_SWIPE_THRESHOLD: metroImportDefault,
  NOTIFICATION_MAX_WIDTH,
} = InAppNotificationConstants);
const AnalyticEvents = Constants.AnalyticEvents;
({ jsx: c9, jsxs: c10 } = Fragment);
let createStyles = createStyles_mod;
let obj = { shadow: obj2, container: obj3 };
obj2 = {
  backgroundColor: nativeDefault.colors.MOBILE_ALERT_BACKGROUND_DEFAULT,
  borderRadius: nativeDefault.radii.lg,
  maxWidth: NOTIFICATION_MAX_WIDTH,
  width: "100%",
  alignSelf: "center",
  borderWidth: 1,
  borderColor: nativeDefault.colors.BORDER_SUBTLE,
};
createStyles = createStyles.createStyles;
let merged = Object.assign(nativeDefault.shadows.SHADOW_HIGH);
obj3 = { borderRadius: nativeDefault.radii.lg, overflow: "hidden" };
let closure_11 = createStyles(obj);
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
const tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? (notification) => {
      let accessoryLabelNode;
      let channelId;
      let children;
      let closure_2;
      let guildId;
      let header;
      let icon;
      let inAppNotificationId;
      let onPress;
      let panning;
      let rightAccessory;
      let sharedValue1;
      let tmp17;
      let tmp9;
      let tmp = _require;
      let obj = require("react");
      const cResult = obj.c(79);
      if (cResult[0] !== notification) {
        notification = notification.notification;
        _require = notification;
        ({ icon, children, accessoryLabelNode, rightAccessory, header, onPress } = notification);
        let closure_1 = onPress;
        const onSettingsPress = notification.onSettingsPress;
        dependencyMap = onSettingsPress;
        cResult[0] = notification;
        cResult[1] = channelId(notification, guildId);
        cResult[2] = accessoryLabelNode;
        cResult[3] = children;
        cResult[4] = header;
        cResult[5] = icon;
        cResult[6] = notification;
        cResult[7] = onPress;
        cResult[8] = onSettingsPress;
        cResult[9] = rightAccessory;
        tmp9 = notification;
        const tmp15 = channelId(notification, guildId);
      } else {
        _require = cResult[6];
        closure_1 = cResult[7];
        dependencyMap = cResult[8];
      }
      panning();
      const type = tmp9.type;
      if (cResult[10] !== tmp9) {
        const tmpResult = tmp(12477);
        let result = tmpResult.extractMetadataFromNotification(tmp9);
        cResult[10] = tmp9;
        cResult[11] = result;
        tmp17 = result;
      } else {
        tmp17 = cResult[11];
      }
      if (cResult[12] === tmp9.type) {
        let tmp19;
        if (cResult[13] === tmp17) {
          tmp19 = cResult[14];
        }
        guildId = tmp19.guildId;
        channelId = tmp19.channelId;
        const messageId = tmp19.messageId;
        const type2 = tmp19.type;
        const tmpResult5 = tmp(12494);
        const inAppNotificationContext = tmpResult5.useInAppNotificationContext();
        const notificationGestureY = inAppNotificationContext.notificationGestureY;
        const velocityY = inAppNotificationContext.velocityY;
        const handleDismissNotification = inAppNotificationContext.handleDismissNotification;
        const initialized = inAppNotificationContext.initialized;
        panning = inAppNotificationContext.panning;
        const tmpResult6 = tmp(4612);
        const sharedValue = tmpResult6.useSharedValue(1);
        if (cResult[15] !== sharedValue) {
          class L {
            constructor() {
              return sharedValue.set(0.95);
            }
          }
          cResult[15] = sharedValue;
          cResult[16] = L;
        } else {
          class L {
            constructor() {
              return sharedValue.set(0.95);
            }
          }
        }
        if (cResult[17] !== sharedValue) {
          class U {
            constructor() {
              return sharedValue.set(1);
            }
          }
          cResult[17] = sharedValue;
          cResult[18] = U;
        } else {
          class U {
            constructor() {
              return sharedValue.set(1);
            }
          }
        }
        const tmpResult7 = tmp(4612);
        class X {
          constructor() {
            let items;
            let obj3;
            const obj = { transform: items };
            const obj2 = { scale: obj3.withSpring(sharedValue.get(), closure_12) };
            items = [obj2];
            obj3 = spring;
            return obj;
          }
        }
        let obj2 = { withSpring: tmp(5597).withSpring, scale: sharedValue, ON_PRESS_SPRING_CONFIG: sharedValue };
        const useAnimatedStyle = tmpResult7.useAnimatedStyle;
        X.__closure = obj2;
        X.__workletHash = 5485274967370;
        X.__initData = sharedValue1;
        const animatedStyle = useAnimatedStyle(X);
        const _Symbol = Symbol;
        const str = "react.memo_cache_sentinel";
        if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
          class U {
            constructor() {
              return sharedValue.set(1);
            }
          }
          cResult[19] = tmp31;
        } else {
          class U {
            constructor() {
              return sharedValue.set(1);
            }
          }
        }
        const tmpResult8 = tmp(4612);
        sharedValue1 = tmpResult8.useSharedValue(100);
        __initData = tmp33;
        if (cResult[20] === handleDismissNotification) {
          class U {
            constructor() {
              return sharedValue.set(1);
            }
          }
        }
        let fn = function $() {
          let tmp;
          if (initialized) {
            if (!panning) {
              if (__initData) {
                const value = sharedValue1.get();
                set = sharedValue1.set;
                const tmp9 = timing;
                let obj = { duration: (value / 100) * tmp, easing: ReanimatedRexport.Easing.linear };
                const withTiming = tmp9.withTiming;
                const fn = function n(arg0) {
                  const tmp = arg0;
                  if (tmp) {
                    const obj = inAppNotificationId(closure_2[11]);
                    obj.runOnJS(handleDismissNotification)("timeout");
                  }
                };
                fn.__closure = { runOnJS: ReanimatedRexport.runOnJS, handleDismissNotification };
                fn.__workletHash = 7304961784538;
                fn.__initData = __initData;
                const obj2 = { runOnJS: ReanimatedRexport.runOnJS, handleDismissNotification };
                const result = set(withTiming(0, obj, "animate-always", fn));
                return () => {
                  const obj = inAppNotificationId(closure_2[11]);
                  obj.cancelAnimation(sharedValue1);
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
      }
      let obj3 = { type };
      const merged = Object.assign(tmp17);
      cResult[12] = tmp9.type;
      cResult[13] = tmp17;
      cResult[14] = obj3;
      tmp19 = obj3;
    }
  : (notification) => {
      let PressableHighlight;
      let accessoryLabelNode;
      let children;
      let header;
      let icon;
      let items8;
      let items9;
      let obj7;
      let rightAccessory;
      let tmp21;
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
        const obj = { type: notification.type };
        const obj2 = InAppNotificationUtils;
        const merged = Object.assign(obj2.extractMetadataFromNotification(notification));
        return obj;
      }, items);
      const guildId = memo.guildId;
      const channelId = memo.channelId;
      messageId = memo.messageId;
      const type = memo.type;
      let obj = notification(onSettingsPress[10]);
      const inAppNotificationContext = obj.useInAppNotificationContext();
      const notificationGestureY = inAppNotificationContext.notificationGestureY;
      const velocityY = inAppNotificationContext.velocityY;
      const handleDismissNotification = inAppNotificationContext.handleDismissNotification;
      const initialized = inAppNotificationContext.initialized;
      panning = inAppNotificationContext.panning;
      let obj2 = notification(onSettingsPress[11]);
      const sharedValue = obj2.useSharedValue(1);
      const items1 = [sharedValue];
      const items2 = [sharedValue];
      const callback = messageId.useCallback(() => sharedValue.set(0.95), items1);
      const callback1 = messageId.useCallback(() => sharedValue.set(1), items2);
      let obj3 = notification(onSettingsPress[11]);
      const tmp5 = onSettingsPress;
      class C {
        constructor() {
          let items;
          let obj3;
          const obj = { transform: items };
          const obj2 = { scale: obj3.withSpring(sharedValue.get(), closure_12) };
          items = [obj2];
          obj3 = spring;
          return obj;
        }
      }
      C.__closure = {
        withSpring: notification(onSettingsPress[12]).withSpring,
        scale: sharedValue,
        ON_PRESS_SPRING_CONFIG: sharedValue,
      };
      C.__workletHash = 11102359359048;
      C.__initData = callback2;
      ({
        withSpring: notification(onSettingsPress[12]).withSpring,
        scale: sharedValue,
        ON_PRESS_SPRING_CONFIG: sharedValue,
      });
      const animatedStyle = obj3.useAnimatedStyle(C);
      const memo1 = messageId.useMemo(() => ({ foreground: true }), []);
      const obj5 = notification(onSettingsPress[11]);
      sharedValue1 = obj5.useSharedValue(100);
      closure_14 = tmp13;
      const items3 = [initialized, panning, notification, sharedValue1, handleDismissNotification, tmp13];
      const effect = messageId.useEffect(() => {
        let tmp;
        if (initialized) {
          if (!panning) {
            if (closure_14) {
              const value = sharedValue1.get();
              set = sharedValue1.set;
              const tmp9 = timing;
              let obj = { duration: (value / 100) * tmp, easing: ReanimatedRexport.Easing.linear };
              const withTiming = tmp9.withTiming;
              const fn = function s(arg0) {
                const tmp = arg0;
                if (tmp) {
                  const obj = notification(onSettingsPress[11]);
                  obj.runOnJS(handleDismissNotification)("timeout");
                }
              };
              fn.__closure = { runOnJS: ReanimatedRexport.runOnJS, handleDismissNotification };
              fn.__workletHash = 17583634888028;
              fn.__initData = __initData;
              const obj2 = { runOnJS: ReanimatedRexport.runOnJS, handleDismissNotification };
              const result = set(withTiming(0, obj, "animate-always", fn));
              return () => {
                const obj = notification(onSettingsPress[11]);
                obj.cancelAnimation(sharedValue1);
              };
            }
          }
        }
      }, items3);
      const items4 = [velocityY, notificationGestureY];
      callback2 = messageId.useCallback(() => {
        let tmp = Math.abs(velocityY.get()) >= metroRequire;
        if (!tmp) {
          const _Math = Math;
          tmp = Math.abs(notificationGestureY.get()) >= metroImportDefault;
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
        tmp13,
      ];
      callback3 = messageId.useCallback((TEXT_AREA_CTA_CLICKED, fn) => {
        let floorResult;
        if (!callback2()) {
          const obj = {
            type,
            notif_guild_id: guildId,
            notif_channel_id: channelId,
            message_id: messageId,
            in_app_notification_id: notification.inAppNotificationId,
            percent: floorResult,
          };
          floorResult = undefined;
          const trackWithMetadata = AppAnalyticsUtilsDefault.trackWithMetadata;
          AppAnalyticsUtilsDefault;
          if (closure_14) {
            let value = sharedValue1;
            const _Math = Math;
            if (typeof sharedValue1 !== "number") {
              value = sharedValue1.get();
            }
            floorResult = floor(value);
          }
          trackWithMetadata(TEXT_AREA_CTA_CLICKED, obj);
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
      const obj6 = { style: items8, children: tmp21(PressableHighlight, obj7) };
      items8 = [tmp3.shadow, animatedStyle];
      const View = onPress(onSettingsPress[11]).View;
      obj7 = {
        onAccessibilityEscape() {
          return handleDismissNotification("accessibility_escape");
        },
        style: tmp3.container,
        androidRippleConfig: memo1,
        onPress: callback4,
        onPressIn: callback,
        onPressOut: callback1,
        onLongPress: callback5,
        accessibilityRole: "button",
        children: items9,
      };
      PressableHighlight = notification(onSettingsPress[17]).PressableHighlight;
      const merged1 = Object.assign(merged);
      items9 = [
        handleDismissNotification(onPress(onSettingsPress[15]), {
          icon,
          children,
          accessoryLabelNode,
          rightAccessory,
          header,
        }),
      ];
      const tmp20 = onPress;
      tmp21 = initialized;
      if (notification.duration !== Infinity) {
        const obj8 = { percent: sharedValue1 };
        tmp = tmp19(tmp20(tmp5[16]), obj8);
      }
      items9[1] = tmp;
      return handleDismissNotification(View, obj6);
    };
let result = size.fileFinishedImporting("modules/in_app_notifications/native/Notification.tsx");

export const NotificationPressable = tmp6;
