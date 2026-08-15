// discord_app/modules/in_app_notifications/native/InAppNotificationContainer.tsx
import _slicedToArray from "_slicedToArray";
import initialize from "initialize";
import { StyleSheet } from "MessageRequestInAppNotification";
import closure_6 from "initialize";
import set from "set";
import ME from "ME";
import { jsx } from "CONFIG_NEVER_ANIMATE_TIMING";
import { Easing } from "module_4115";
import createCacheKey from "createCacheKey";
import set from "get ActivityIndicator";
import { BugReporterNotification } from "../../bug_reporter/native/BugReporterNotification.tsx";
import { AlertNotification } from "AlertNotification.tsx";
import { ForumThreadCreatedNotification } from "ForumThreadCreatedNotification.tsx";
import { MessageFailedToSendNotification } from "MessageFailedToSendNotification.tsx";
import { MessageNotification } from "MessageNotification.tsx";
import { MessageRequestInAppNotification } from "MessageRequestNotification.tsx";
import { ReactionNotificationBody } from "ReactionNotification.tsx";
import { NotificationAvatar } from "ReminderNotification.tsx";
import { RestrictedHoursWarningNotification } from "RestrictedHoursWarningNotification.tsx";

let NOTIFICATION_CONTAINER_MARGIN;
let c10;
let c9;
let closure_12;
let error;
let map1;
let metroImportAll;
let unpackModuleId;
const require = arg1;
function NotificationWrapper(notification) {
  notification = notification.notification;
  const type = notification.type;
  if (constants.MESSAGE === type) {
    let obj = { notification: null };
    obj[0] = notification;
    return jsx(MessageNotification, { notification: null });
  } else if (tmp.MESSAGE_FAILED_TO_SEND === type) {
    obj = { notification: null };
    obj[0] = notification;
    return jsx(MessageFailedToSendNotification, { notification: null });
  } else if (tmp.FORUM_THREAD_CREATED === type) {
    const obj1 = { notification: null };
    obj1[0] = notification;
    return jsx(ForumThreadCreatedNotification, { notification: null });
  } else if (tmp.BUG_REPORTER === type) {
    const obj2 = { notification: null };
    obj2[0] = notification;
    return jsx(BugReporterNotification.BugReporterNotification, { notification: null });
  } else if (tmp.ALERT === type) {
    const obj3 = { notification: null };
    obj3[0] = notification;
    return jsx(AlertNotification, { notification: null });
  } else if (tmp.REACTION === type) {
    const obj4 = { notification: null };
    obj4[0] = notification;
    return jsx(ReactionNotificationBody, { notification: null });
  } else if (tmp.MESSAGE_REMINDER === type) {
    const obj5 = { notification: null };
    obj5[0] = notification;
    return jsx(NotificationAvatar, { notification: null });
  } else {
    if (tmp.RESTRICTED_HOURS_WARNING !== type) {
      if (tmp.RESTRICTED_SCHEDULE_UPDATED !== type) {
        if (tmp.MESSAGE_REQUEST === type) {
          obj = { notification: null };
          obj[0] = notification;
          return jsx(MessageRequestInAppNotification, { notification: null });
        } else {
          return null;
        }
      }
    }
    const obj6 = { notification: null };
    obj6[0] = notification;
    return jsx(RestrictedHoursWarningNotification, { notification: null });
  }
}
({ DEFAULT_ANIMATION_TIMING: error, extrapolateConfig: metroImportAll, MIN_SWIPE_DISTANCE: c9, MIN_SWIPE_VELOCITY: c10, PAN_INPUT_RANGE: unpackModuleId, NOTIFICATION_CONTAINER_MARGIN } = set);
({ InAppNotificationTypes: closure_12, AnalyticEvents: map1 } = ME);
let obj = { duration: 200, easing: null };
obj[1] = Easing.in(require("module_4115").Easing.ease);
let closure_16 = createCacheKey.createStyles({ safeAreaContainer: { position: "absolute", left: 0, right: 0, backgroundColor: "transparent", marginTop: 8, top: 0, bottom: 0 }, animatedContainer: { marginLeft: NOTIFICATION_CONTAINER_MARGIN, marginRight: NOTIFICATION_CONTAINER_MARGIN } });
let closure_18 = { code: "function InAppNotificationContainerTsx1(){const{runOnJS,setInitialized}=this.__closure;return runOnJS(setInitialized)(true);}" };
let closure_19 = { code: "function InAppNotificationContainerTsx2(){const{runOnJS,setPanning}=this.__closure;runOnJS(setPanning)(false);}" };
let closure_20 = { code: "function InAppNotificationContainerTsx3(event){const{velocityY,MIN_SWIPE_VELOCITY,MIN_SWIPE_DISTANCE,notificationGestureY,withTiming,PAN_INPUT_RANGE,DEFAULT_ANIMATION_TIMING,runOnJS,handleDismissNotification,setPanning,withSpring}=this.__closure;const shouldDismiss=Math.abs(velocityY.get())>=MIN_SWIPE_VELOCITY||Math.abs(event.translationY)>=MIN_SWIPE_DISTANCE;if(shouldDismiss&&event.translationY<=0){notificationGestureY.set(withTiming(event.translationY>0?PAN_INPUT_RANGE[2]:PAN_INPUT_RANGE[0],DEFAULT_ANIMATION_TIMING,'animate-always',function(finished){if(finished){runOnJS(handleDismissNotification)('swipe');}}));}else{runOnJS(setPanning)(false);notificationGestureY.set(withSpring(0,{damping:10,mass:1,stiffness:100,velocity:velocityY.get()},'animate-always'));}}" };
let closure_21 = { code: "function InAppNotificationContainerTsx4(event){const{startY,notificationGestureY,velocityY}=this.__closure;const rawY=startY.get()+event.translationY;const newY=Math.min(rawY,startY.get());notificationGestureY.set(newY);velocityY.set(event.velocityY);}" };
let closure_22 = { code: "function InAppNotificationContainerTsx5(){const{startY,notificationGestureY,velocityY,runOnJS,setPanning}=this.__closure;startY.set(notificationGestureY.get());velocityY.set(0);runOnJS(setPanning)(true);}" };
let closure_23 = { code: "function InAppNotificationContainerTsx6(finished){const{runOnJS,handleDismissNotification}=this.__closure;if(finished){runOnJS(handleDismissNotification)('swipe');}}" };
let closure_24 = { code: "function InAppNotificationContainerTsx7(){const{notificationGestureY,scale,initialized,interpolate,PAN_INPUT_RANGE,extrapolateConfig}=this.__closure;const gestureY=notificationGestureY.get();const scaleValue=scale.get();const scaleTransform=initialized?interpolate(gestureY,PAN_INPUT_RANGE,[0.3,1,0.3],extrapolateConfig):scaleValue;const opacityTransform=initialized?interpolate(gestureY,PAN_INPUT_RANGE,[0,1,0],extrapolateConfig):scaleValue;return{transform:[{translateY:gestureY},{scale:scaleTransform}],opacity:opacityTransform};}" };
let result = set.fileFinishedImporting("modules/in_app_notifications/native/InAppNotificationContainer.tsx");

export default function InAppNotificationContainer(notification) {
  notification = notification.notification;
  let guildId;
  let channelId;
  let messageId;
  let channelType;
  let sharedValue;
  let sharedValue1;
  let sharedValue2;
  let sharedValue3;
  let first;
  let closure_10;
  let first1;
  let c12;
  let callback;
  const tmp = callback();
  let items = [notification];
  const memo = channelType.useMemo(() => notification(channelId[18]).extractMetadataFromNotification(notification), items);
  guildId = memo.guildId;
  channelId = memo.channelId;
  messageId = memo.messageId;
  channelType = memo.channelType;
  let obj = notification(channelId[7]);
  sharedValue = obj.useSharedValue(0);
  let obj1 = notification(channelId[7]);
  sharedValue1 = obj1.useSharedValue(0);
  let obj2 = notification(channelId[7]);
  sharedValue2 = obj2.useSharedValue(0);
  let obj3 = notification(channelId[7]);
  sharedValue3 = obj3.useSharedValue(0);
  const tmp9 = messageId(channelType.useState(false), 2);
  first = tmp9[0];
  closure_10 = tmp9[1];
  const tmp11 = messageId(channelType.useState(false), 2);
  first1 = tmp11[0];
  c12 = tmp13;
  let obj4 = notification(channelId[19]);
  const items1 = [sharedValue1];
  const items2 = [notification, guildId, channelId, messageId];
  const stateFromStores = obj4.useStateFromStores(items1, () => sharedValue1.isOpen());
  callback = channelType.useCallback((arg0) => {
    if (null != arg0) {
      let obj = notification(channelId[18]);
      obj = { type: null, guildId: null, channelId: null, dismissReason: null, inAppNotificationId: null, messageId: null };
      obj[0] = notification.type;
      obj[1] = guildId;
      obj[2] = channelId;
      obj[3] = arg0;
      obj[4] = notification.inAppNotificationId;
      obj[5] = messageId;
      obj.trackDismissed(obj);
    }
    const onDismiss = notification.onDismiss;
    if (onDismiss != null) {
      onDismiss();
    }
  }, items2);
  guildId(channelId[20])(() => {
    let obj = notification(channelId[21]);
    const fn = function t() {
      return outer1_0(outer1_2[7]).runOnJS(closure_10)(true);
    };
    obj = { runOnJS: notification(channelId[7]).runOnJS, setInitialized: closure_10 };
    fn.__closure = obj;
    fn.__workletHash = 16158991995287;
    fn.__initData = outer1_18;
    const result = sharedValue3.set(obj.withTiming(1, outer1_15, "respect-motion-settings", fn));
    return () => outer1_0(outer1_2[7]).cancelAnimation(closure_8);
  });
  const items3 = [first, notification.type, guildId, channelId, notification.inAppNotificationId, messageId, channelType];
  const effect = channelType.useEffect(() => {
    if (first) {
      let obj = guildId(channelId[22]);
      obj = { type: null, guild_id: null, channel_id: null, in_app_notification_id: null, message_id: null, channel_type: null };
      obj[0] = notification.type;
      obj[1] = guildId;
      obj[2] = channelId;
      obj[3] = notification.inAppNotificationId;
      obj[4] = messageId;
      obj[5] = channelType;
      obj.track(callback.IN_APP_NOTIFICATION_SHOWN, obj);
    }
  }, items3);
  const Gesture = notification(channelId[23]).Gesture;
  class X {
    constructor() {
      result = c7.set(c5.get());
      result1 = c6.set(0);
      obj = notification(channelId[7]);
      tmp3 = obj.runOnJS(c12)(true);
      return;
    }
  }
  obj = { startY: sharedValue2, notificationGestureY: sharedValue, velocityY: sharedValue1, runOnJS: notification(channelId[7]).runOnJS, setPanning: tmp13 };
  X.__closure = obj;
  X.__workletHash = 16480026707740;
  X.__initData = closure_22;
  const PanResult = Gesture.Pan();
  const tmp16 = guildId;
  class K {
    constructor(arg0) {
      sum = c7.get() + notification.translationY;
      result = c5.set(Math.min(sum, c7.get()));
      result1 = c6.set(notification.velocityY);
      return;
    }
  }
  K.__closure = { startY: sharedValue2, notificationGestureY: sharedValue, velocityY: sharedValue1 };
  K.__workletHash = 4467653619554;
  K.__initData = closure_21;
  const onBeginResult = Gesture.Pan().onBegin(X);
  let fn = function q(translationY) {
    let obj = sharedValue1;
    if (Math.abs(sharedValue1.get()) >= closure_10) {
      if (translationY.translationY <= 0) {
        let runOnJS = channelId;
        const obj5 = notification(channelId[21]);
        if (translationY.translationY > 0) {
          let first = first1[2];
        } else {
          first = first1[0];
        }
        const fn = function n(arg0) {
          if (arg0) {
            outer1_0(outer1_2[7]).runOnJS(closure_13)("swipe");
            const obj = outer1_0(outer1_2[7]);
          }
        };
        obj = { runOnJS: null, handleDismissNotification: null };
        runOnJS = notification(runOnJS[7]).runOnJS;
        obj[0] = runOnJS;
        obj[1] = callback;
        fn.__closure = obj;
        fn.__workletHash = 3243235500892;
        fn.__initData = outer1_23;
        const result = sharedValue.set(obj5.withTiming(first, sharedValue2, "animate-always", fn));
        const tmp5 = notification;
      }
    } else {
      const _Math = Math;
    }
    notification(channelId[7]).runOnJS(c12)(false);
    const obj2 = notification(channelId[7]);
    obj = { damping: 10, mass: 1, stiffness: 100, velocity: obj.get() };
    const result1 = sharedValue.set(notification(channelId[24]).withSpring(0, obj, "animate-always"));
  };
  obj = { velocityY: sharedValue1, MIN_SWIPE_VELOCITY: closure_10, MIN_SWIPE_DISTANCE: first, notificationGestureY: sharedValue, withTiming: notification(channelId[21]).withTiming, PAN_INPUT_RANGE: first1, DEFAULT_ANIMATION_TIMING: sharedValue2, runOnJS: notification(channelId[7]).runOnJS, handleDismissNotification: callback, setPanning: tmp13, withSpring: notification(channelId[24]).withSpring };
  fn.__closure = obj;
  fn.__workletHash = 12181654548715;
  fn.__initData = closure_20;
  const onUpdateResult = Gesture.Pan().onBegin(X).onUpdate(K);
  class Q {
    constructor() {
      obj = notification(channelId[7]);
      tmp = obj.runOnJS(c12)(false);
      return;
    }
  }
  obj1 = { runOnJS: notification(channelId[7]).runOnJS, setPanning: tmp13 };
  Q.__closure = obj1;
  Q.__workletHash = 7413448149557;
  Q.__initData = closure_19;
  const onEndResult = Gesture.Pan().onBegin(X).onUpdate(K).onEnd(fn);
  const onFinalizeResult = Gesture.Pan().onBegin(X).onUpdate(K).onEnd(fn).onFinalize(Q);
  class Z {
    constructor() {
      value = c5.get();
      value1 = c8.get();
      items = [, ];
      items[0] = { translateY: value };
      interpolateResult = value1;
      tmp3 = c9;
      if (c9) {
        tmp5 = notification;
        tmp6 = channelId;
        obj = notification(channelId[7]);
        tmp7 = useMemo;
        tmp8 = c8;
        tmp9 = obj;
        tmp10 = value;
        interpolateResult = obj.interpolate(value, useMemo, [0.3, 1, 0.3], c8);
      }
      obj = { transform: items, opacity: null };
      items[1] = { scale: interpolateResult };
      if (tmp3) {
        tmp11 = notification;
        tmp12 = channelId;
        obj3 = notification(channelId[7]);
        tmp13 = useMemo;
        tmp14 = c8;
        tmp15 = obj3;
        tmp16 = value;
        value1 = obj3.interpolate(value, useMemo, [0, 1, 0], c8);
      }
      obj[1] = value1;
      return obj;
    }
  }
  obj2 = { notificationGestureY: sharedValue, scale: sharedValue3, initialized: first, interpolate: notification(channelId[7]).interpolate, PAN_INPUT_RANGE: first1, extrapolateConfig: sharedValue3 };
  Z.__closure = obj2;
  Z.__workletHash = 1564072865992;
  Z.__initData = closure_24;
  const items4 = [callback, first, sharedValue, sharedValue1, first1];
  const animatedStyle = notification(channelId[7]).useAnimatedStyle(Z);
  const memo1 = channelType.useMemo(() => ({ notificationGestureY: sharedValue, velocityY: sharedValue1, initialized: first, handleDismissNotification: callback, panning: first1 }), items4);
  obj3 = { style: sharedValue.absoluteFill, pointerEvents: "box-none", children: null };
  obj4 = { top: true, bottom: true, left: true, right: true, style: tmp.safeAreaContainer, pointerEvents: "box-none", importantForAccessibility: null, children: null };
  let str;
  if (stateFromStores) {
    str = "no-hide-descendants";
  }
  obj4[6] = str;
  let obj5 = { value: memo1, children: null };
  const obj6 = { gesture: onFinalizeResult, children: null };
  const obj7 = { style: items5, pointerEvents: "box-none", children: null };
  items5 = [tmp.animatedContainer, animatedStyle];
  obj7[2] = <NotificationWrapper notification={notification} />;
  obj6[1] = jsx(tmp16(channelId[7]).View, { style: items5, pointerEvents: "box-none", children: null });
  obj5[1] = jsx(notification(channelId[23]).GestureDetector, { gesture: onFinalizeResult, children: null });
  obj4[7] = jsx(notification(channelId[27]).InAppNotificationContext.Provider, { value: memo1, children: null });
  obj3[2] = jsx(notification(channelId[26]).SafeAreaPaddingView, { top: true, bottom: true, left: true, right: true, style: tmp.safeAreaContainer, pointerEvents: "box-none", importantForAccessibility: null, children: null });
  return jsx(notification(channelId[25]).OverlayView, { style: sharedValue.absoluteFill, pointerEvents: "box-none", children: null });
};