// === Module 10105: InAppNotificationContainer ===

// Module 10105 (InAppNotificationContainer)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4296 */;
import timing from "timing" /* 4561 */;
import spring from "spring" /* 4974 */;
import InAppNotificationUtils from "InAppNotificationUtils" /* 10094 */;
import MessageNotificationDefault from "MessageNotification" /* 10106 */;
import MessageFailedToSendNotificationDefault from "MessageFailedToSendNotification" /* 10179 */;
import ForumThreadCreatedNotificationDefault from "ForumThreadCreatedNotification" /* 10182 */;
import BugReporterNotification from "BugReporterNotification" /* 10183 */;
import AlertNotificationDefault from "AlertNotification" /* 10216 */;
import ReactionNotificationDefault from "ReactionNotification" /* 10217 */;
import ReminderNotificationDefault from "ReminderNotification" /* 11318 */;
import RestrictedHoursWarningNotificationDefault from "RestrictedHoursWarningNotification" /* 11319 */;
import MessageRequestNotificationDefault from "MessageRequestNotification" /* 11322 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import NativeMenuStore from "NativeMenuStore" /* 9684 */;

require = fn;
function NotificationWrapper(notification) {
  notification = notification.notification;
  const type = notification.type;
  if (constants.MESSAGE === type) {
    let obj = { notification };
    return jsx(MessageNotificationDefault, { notification });
  } else if (constants.MESSAGE_FAILED_TO_SEND === type) {
    obj = { notification };
    return jsx(MessageFailedToSendNotificationDefault, { notification });
  } else if (constants.FORUM_THREAD_CREATED === type) {
    const obj1 = { notification };
    return jsx(ForumThreadCreatedNotificationDefault, { notification });
  } else if (constants.BUG_REPORTER === type) {
    const obj2 = { notification };
    return jsx(BugReporterNotification.BugReporterNotification, { notification });
  } else if (constants.ALERT === type) {
    const obj3 = { notification };
    return jsx(AlertNotificationDefault, { notification });
  } else if (constants.REACTION === type) {
    const obj4 = { notification };
    return jsx(ReactionNotificationDefault, { notification });
  } else if (constants.MESSAGE_REMINDER === type) {
    const obj5 = { notification };
    return jsx(ReminderNotificationDefault, { notification });
  } else {
    if (constants.RESTRICTED_HOURS_WARNING !== type) {
      if (constants.RESTRICTED_SCHEDULE_UPDATED !== type) {
        if (constants.MESSAGE_REQUEST === type) {
          obj = { notification };
          return jsx(MessageRequestNotificationDefault, { notification });
        } else {
          return null;
        }
      }
    }
    const obj6 = { notification };
    return jsx(RestrictedHoursWarningNotificationDefault, { notification });
  }
}
const StyleSheet = fn(17).StyleSheet;
const InAppNotificationConstants = fn(10095);
({ DEFAULT_ANIMATION_TIMING: closure_7, extrapolateConfig: closure_8, MIN_SWIPE_DISTANCE: closure_9, MIN_SWIPE_VELOCITY: c10, PAN_INPUT_RANGE: closure_11, NOTIFICATION_CONTAINER_MARGIN } = InAppNotificationConstants);
const Constants = fn(1074);
({ InAppNotificationTypes: closure_12, AnalyticEvents: map1 } = Constants);
const jsx = fn(21).jsx;
let __closure = { duration: 200, easing: null };
const Easing = fn(4296).Easing;
__closure.easing = Easing.in(fn(4296).Easing.ease);
const createStyles = fn(4560);
__closure = { safeAreaContainer: { position: "absolute", left: 0, right: 0, backgroundColor: "transparent", marginTop: 8, top: 0, bottom: 0 }, animatedContainer: { marginLeft: NOTIFICATION_CONTAINER_MARGIN, marginRight: NOTIFICATION_CONTAINER_MARGIN } };
let closure_16 = createStyles.createStyles(__closure);
let closure_18 = { code: "function InAppNotificationContainerTsx1(){const{runOnJS,setInitialized}=this.__closure;return runOnJS(setInitialized)(true);}" };
const __initData = { code: "function InAppNotificationContainerTsx2(){const{runOnJS,setPanning}=this.__closure;runOnJS(setPanning)(false);}" };
const __initData2 = { code: "function InAppNotificationContainerTsx3(event){const{velocityY,MIN_SWIPE_VELOCITY,MIN_SWIPE_DISTANCE,notificationGestureY,withTiming,PAN_INPUT_RANGE,DEFAULT_ANIMATION_TIMING,runOnJS,handleDismissNotification,setPanning,withSpring}=this.__closure;const shouldDismiss=Math.abs(velocityY.get())>=MIN_SWIPE_VELOCITY||Math.abs(event.translationY)>=MIN_SWIPE_DISTANCE;if(shouldDismiss&&event.translationY<=0){notificationGestureY.set(withTiming(event.translationY>0?PAN_INPUT_RANGE[2]:PAN_INPUT_RANGE[0],DEFAULT_ANIMATION_TIMING,'animate-always',function(finished){if(finished){runOnJS(handleDismissNotification)('swipe');}}));}else{runOnJS(setPanning)(false);notificationGestureY.set(withSpring(0,{damping:10,mass:1,stiffness:100,velocity:velocityY.get()},'animate-always'));}}" };
const __initData3 = { code: "function InAppNotificationContainerTsx4(event){const{startY,notificationGestureY,velocityY}=this.__closure;const rawY=startY.get()+event.translationY;const newY=Math.min(rawY,startY.get());notificationGestureY.set(newY);velocityY.set(event.velocityY);}" };
const __initData4 = { code: "function InAppNotificationContainerTsx5(){const{startY,notificationGestureY,velocityY,runOnJS,setPanning}=this.__closure;startY.set(notificationGestureY.get());velocityY.set(0);runOnJS(setPanning)(true);}" };
let closure_23 = { code: "function InAppNotificationContainerTsx6(finished){const{runOnJS,handleDismissNotification}=this.__closure;if(finished){runOnJS(handleDismissNotification)('swipe');}}" };
const __initData5 = { code: "function InAppNotificationContainerTsx7(){const{notificationGestureY,scale,initialized,interpolate,PAN_INPUT_RANGE,extrapolateConfig}=this.__closure;const gestureY=notificationGestureY.get();const scaleValue=scale.get();const scaleTransform=initialized?interpolate(gestureY,PAN_INPUT_RANGE,[0.3,1,0.3],extrapolateConfig):scaleValue;const opacityTransform=initialized?interpolate(gestureY,PAN_INPUT_RANGE,[0,1,0],extrapolateConfig):scaleValue;return{transform:[{translateY:gestureY},{scale:scaleTransform}],opacity:opacityTransform};}" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/in_app_notifications/native/InAppNotificationContainer.tsx");

export default function InAppNotificationContainer(notification) {
  notification = notification.notification;
  let channelType;
  const tmp = closure_16();
  let items = [notification];
  const memo = channelType.useMemo(() => InAppNotificationUtils.extractMetadataFromNotification(notification), items);
  const guildId = memo.guildId;
  const channelId = memo.channelId;
  const messageId = memo.messageId;
  channelType = memo.channelType;
  __closure = notification(channelId[7]);
  const sharedValue = __closure.useSharedValue(0);
  let obj1 = notification(channelId[7]);
  const sharedValue1 = obj1.useSharedValue(0);
  let obj2 = notification(channelId[7]);
  const sharedValue2 = obj2.useSharedValue(0);
  let obj3 = notification(channelId[7]);
  const sharedValue3 = obj3.useSharedValue(0);
  const tmp9 = messageId(channelType.useState(false), 2);
  const initialized = tmp9[0];
  MIN_SWIPE_VELOCITY = tmp9[1];
  const tmp11 = messageId(channelType.useState(false), 2);
  const first1 = tmp11[0];
  closure_12 = tmp13;
  let obj4 = notification(channelId[19]);
  const items1 = [sharedValue1];
  const items2 = [notification, guildId, channelId, messageId];
  const stateFromStores = obj4.useStateFromStores(items1, () => sharedValue1.isOpen());
  const handleDismissNotification = channelType.useCallback((dismissReason) => {
    if (null != dismissReason) {
      const obj = { type: notification.type, guildId, channelId, dismissReason, inAppNotificationId: notification.inAppNotificationId, messageId };
      obj.trackDismissed(obj);
    }
    const onDismiss = notification.onDismiss;
    if (onDismiss != null) {
      onDismiss();
    }
  }, items2);
  guildId(channelId[20])(() => {
    const fn = function t() {
      return notification(channelId[7]).runOnJS(setInitialized)(true);
    };
    __closure = { runOnJS: ReanimatedRexport.runOnJS, setInitialized };
    fn.__closure = __closure;
    fn.__workletHash = 16158991995287;
    fn.__initData = __initData;
    const result = sharedValue3.set(__closure.withTiming(1, __closure, "respect-motion-settings", fn));
    return () => notification(channelId[7]).cancelAnimation(sharedValue3);
  });
  const items3 = [initialized, notification.type, guildId, channelId, notification.inAppNotificationId, messageId, channelType];
  const effect = channelType.useEffect(() => {
    if (first) {
      const obj = { type: notification.type, guild_id: guildId, channel_id: channelId, in_app_notification_id: notification.inAppNotificationId, message_id: messageId, channel_type: channelType };
      obj.track(constants2.IN_APP_NOTIFICATION_SHOWN, obj);
    }
  }, items3);
  const Gesture = notification(channelId[23]).Gesture;
  class X {
    constructor() {
      result = closure_7.set(closure_5.get());
      result1 = closure_6.set(0);
      obj = closure_0(closure_2[7]);
      tmp3 = obj.runOnJS(closure_12)(true);
      return;
    }
  }
  __closure = { startY: sharedValue2, notificationGestureY: sharedValue, velocityY: sharedValue1, runOnJS: notification(channelId[7]).runOnJS, setPanning: tmp13 };
  X.__closure = __closure;
  X.__workletHash = 16480026707740;
  X.__initData = __initData4;
  const PanResult = Gesture.Pan();
  const tmp16 = guildId;
  class K {
    constructor(arg0) {
      sum = closure_7.get() + notification.translationY;
      result = closure_5.set(Math.min(sum, closure_7.get()));
      result1 = closure_6.set(notification.velocityY);
      return;
    }
  }
  K.__closure = { startY: sharedValue2, notificationGestureY: sharedValue, velocityY: sharedValue1 };
  K.__workletHash = 4467653619554;
  K.__initData = __initData3;
  const onBeginResult = Gesture.Pan().onBegin(X);
  let fn = function q(translationY) {
    __closure = sharedValue1;
    if (Math.abs(sharedValue1.get()) >= MIN_SWIPE_VELOCITY) {
      if (translationY.translationY <= 0) {
        let runOnJS = dependencyMap;
        const obj5 = timing;
        if (translationY.translationY > 0) {
          first = 17;
        } else {
          first = 32;
        }
        const fn = function n(arg0) {
          if (arg0) {
            notification(channelId[7]).runOnJS(handleDismissNotification)("swipe");
            const obj = notification(channelId[7]);
          }
        };
        __closure = { runOnJS: null, handleDismissNotification: null };
        runOnJS = ReanimatedRexport.runOnJS;
        __closure.runOnJS = runOnJS;
        __closure.handleDismissNotification = handleDismissNotification;
        fn.__closure = __closure;
        fn.__workletHash = 3243235500892;
        fn.__initData = __initData2;
        const result = sharedValue.set(obj5.withTiming(first, React5, "animate-always", fn));
      }
    } else {
      const _Math = Math;
    }
    ReanimatedRexport.runOnJS(closure_12)(false);
    __closure = { damping: 10, mass: 1, stiffness: 100, velocity: __closure.get() };
    const result1 = sharedValue.set(spring.withSpring(0, __closure, "animate-always"));
  };
  __closure = { velocityY: sharedValue1, MIN_SWIPE_VELOCITY, MIN_SWIPE_DISTANCE: initialized, notificationGestureY: sharedValue, withTiming: notification(channelId[21]).withTiming, PAN_INPUT_RANGE: first1, DEFAULT_ANIMATION_TIMING: sharedValue2, runOnJS: notification(channelId[7]).runOnJS, handleDismissNotification, setPanning: tmp13, withSpring: notification(channelId[24]).withSpring };
  fn.__closure = __closure;
  fn.__workletHash = 12181654548715;
  fn.__initData = __initData2;
  const onUpdateResult = Gesture.Pan().onBegin(X).onUpdate(K);
  class Q {
    constructor() {
      obj = closure_0(closure_2[7]);
      tmp = obj.runOnJS(closure_12)(false);
      return;
    }
  }
  obj1 = { runOnJS: notification(channelId[7]).runOnJS, setPanning: tmp13 };
  Q.__closure = obj1;
  Q.__workletHash = 7413448149557;
  Q.__initData = __initData;
  const onEndResult = Gesture.Pan().onBegin(X).onUpdate(K).onEnd(fn);
  const onFinalizeResult = Gesture.Pan().onBegin(X).onUpdate(K).onEnd(fn).onFinalize(Q);
  class Z {
    constructor() {
      value = closure_5.get();
      value1 = closure_8.get();
      items = [, ];
      items[0] = { translateY: value };
      interpolateResult = value1;
      tmp3 = closure_9;
      if (closure_9) {
        tmp5 = closure_0;
        tmp6 = closure_2;
        obj = closure_0(closure_2[7]);
        tmp7 = PAN_INPUT_RANGE;
        tmp8 = extrapolateConfig;
        tmp9 = obj;
        tmp10 = value;
        interpolateResult = obj.interpolate(value, PAN_INPUT_RANGE, [0.3, 1, 0.3], extrapolateConfig);
      }
      obj = { transform: items, opacity: null };
      items[1] = { scale: interpolateResult };
      if (tmp3) {
        tmp11 = closure_0;
        tmp12 = closure_2;
        obj3 = closure_0(closure_2[7]);
        tmp13 = PAN_INPUT_RANGE;
        tmp14 = extrapolateConfig;
        tmp15 = obj3;
        tmp16 = value;
        value1 = obj3.interpolate(value, PAN_INPUT_RANGE, [0, 1, 0], extrapolateConfig);
      }
      obj.opacity = value1;
      return obj;
    }
  }
  obj2 = { notificationGestureY: sharedValue, scale: sharedValue3, initialized, interpolate: notification(channelId[7]).interpolate, PAN_INPUT_RANGE: first1, extrapolateConfig: sharedValue3 };
  Z.__closure = obj2;
  Z.__workletHash = 1564072865992;
  Z.__initData = __initData5;
  const items4 = [handleDismissNotification, initialized, sharedValue, sharedValue1, first1];
  const animatedStyle = notification(channelId[7]).useAnimatedStyle(Z);
  const memo1 = channelType.useMemo(() => ({ notificationGestureY: sharedValue, velocityY: sharedValue1, initialized, handleDismissNotification, panning: first1 }), items4);
  obj3 = { style: sharedValue.absoluteFill, pointerEvents: "box-none", children: null };
  const rect = { top: true, bottom: true, left: true, right: true, style: tmp.safeAreaContainer, pointerEvents: "box-none", importantForAccessibility: null, children: null };
  let str;
  if (stateFromStores) {
    str = "no-hide-descendants";
  }
  rect.importantForAccessibility = str;
  obj4 = { value: memo1, children: null };
  let obj5 = { gesture: onFinalizeResult, children: null };
  const obj6 = { style: null, pointerEvents: "box-none", children: <NotificationWrapper notification={notification} /> };
  const items5 = [tmp.animatedContainer, animatedStyle];
  obj6.style = items5;
  obj5.children = jsx(tmp16(channelId[7]).View, { style: null, pointerEvents: "box-none", children: <NotificationWrapper notification={notification} /> });
  obj4.children = jsx(notification(channelId[23]).GestureDetector, { gesture: onFinalizeResult, children: null });
  rect.children = jsx(notification(channelId[27]).InAppNotificationContext.Provider, { value: memo1, children: null });
  obj3.children = jsx(notification(channelId[26]).SafeAreaPaddingView, { top: true, bottom: true, left: true, right: true, style: tmp.safeAreaContainer, pointerEvents: "box-none", importantForAccessibility: null, children: null });
  return jsx(notification(channelId[25]).OverlayView, { style: sharedValue.absoluteFill, pointerEvents: "box-none", children: null });
};