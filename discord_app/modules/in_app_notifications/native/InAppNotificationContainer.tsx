// discord_app/modules/in_app_notifications/native/InAppNotificationContainer.tsx
import DISCORD_EPOCH from "DISCORD_EPOCH";
import NotificationAvatar from "NotificationAvatar";
import get_ActivityIndicator from "AlertNotification";
import initialize from "initialize";
import generateOldThreadCutoff from "generateOldThreadCutoff";
import set from "set";
import ME from "ME";
import jsxProd from "MessageRequestInAppNotification";
import { Easing } from "module_4083";
import createCacheKey from "createCacheKey";
import set from "get ActivityIndicator";
import { BugReporterNotification } from "../../bug_reporter/native/BugReporterNotification.tsx";
import { AlertNotification } from "AlertNotification.tsx";
import { ForumThreadCreatedNotification } from "ForumThreadCreatedNotification.tsx";
import { MessageFailedToSendNotification } from "MessageFailedToSendNotification.tsx";
import { MessageNotification } from "MessageNotification.tsx";
import { MessageNotificationDetachedContent } from "MessageNotificationDetachedContent.tsx";
import { MessageRequestInAppNotification } from "MessageRequestNotification.tsx";
import { ReactionNotificationBody } from "ReactionNotification.tsx";
import { NotificationAvatar } from "ReminderNotification.tsx";
import { RestrictedHoursWarningNotification } from "RestrictedHoursWarningNotification.tsx";

let NOTIFICATION_CONTAINER_MARGIN;
let c10;
let c5;
let closure_12;
let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_18;
let closure_19;
let closure_20;
let closure_21;
let closure_22;
let closure_23;
let closure_6;
let error;
let map1;
let unpackModuleId;
const require = arg1;
function NotificationWrapper(notification) {
  notification = notification.notification;
  const type = notification.type;
  if (constants.MESSAGE === type) {
    let obj = { notification: null };
    obj[0] = notification;
    return callback(MessageNotification, obj);
  } else if (tmp.MESSAGE_FAILED_TO_SEND === type) {
    obj = { notification: null };
    obj[0] = notification;
    return callback(MessageFailedToSendNotification, obj);
  } else if (tmp.FORUM_THREAD_CREATED === type) {
    const obj1 = { notification: null };
    obj1[0] = notification;
    return callback(ForumThreadCreatedNotification, obj1);
  } else if (tmp.BUG_REPORTER === type) {
    const obj2 = { notification: null };
    obj2[0] = notification;
    return callback(BugReporterNotification.BugReporterNotification, obj2);
  } else if (tmp.ALERT === type) {
    const obj3 = { notification: null };
    obj3[0] = notification;
    return callback(AlertNotification, obj3);
  } else if (tmp.REACTION === type) {
    const obj4 = { notification: null };
    obj4[0] = notification;
    return callback(ReactionNotificationBody, obj4);
  } else if (tmp.MESSAGE_REMINDER === type) {
    const obj5 = { notification: null };
    obj5[0] = notification;
    return callback(NotificationAvatar, obj5);
  } else {
    if (tmp.RESTRICTED_HOURS_WARNING !== type) {
      if (tmp.RESTRICTED_SCHEDULE_UPDATED !== type) {
        if (tmp.MESSAGE_REQUEST === type) {
          obj = { notification: null };
          obj[0] = notification;
          return callback(MessageRequestInAppNotification, obj);
        } else {
          return null;
        }
      }
    }
    const obj6 = { notification: null };
    obj6[0] = notification;
    return callback(RestrictedHoursWarningNotification, obj6);
  }
}
function DetachedNotificationContent(notification) {
  notification = notification.notification;
  let tmp = null;
  if (notification.type === constants.MESSAGE) {
    const obj = { notification: null };
    obj[0] = notification;
    tmp = callback(MessageNotificationDetachedContent.MessageNotificationDetachedContent, obj);
  }
  return tmp;
}
({ View: c5, StyleSheet: closure_6, Keyboard: error } = get_ActivityIndicator);
({ DEFAULT_ANIMATION_TIMING: c10, extrapolateConfig: unpackModuleId, MIN_SWIPE_DISTANCE: closure_12, MIN_SWIPE_VELOCITY: map1, NOTIFICATION_BOB_RANGE: closure_14, EXPANDABLE_MIN_WINDOW_HEIGHT: closure_15, PAN_INPUT_RANGE: closure_16, NOTIFICATION_CONTAINER_MARGIN } = set);
({ InAppNotificationTypes: closure_17, AnalyticEvents: closure_18, AnalyticsSections: closure_19, AnalyticsObjects: closure_20, AnalyticsObjectTypes: closure_21 } = ME);
({ jsx: closure_22, jsxs: closure_23 } = jsxProd);
let obj = { duration: 200, easing: null };
obj[1] = Easing.in(require("module_4083").Easing.ease);
let closure_25 = createCacheKey.createStyles({ safeAreaContainer: { position: "absolute", left: 0, right: 0, backgroundColor: "transparent", marginTop: 8, top: 0, bottom: 0 }, backdrop: { position: "absolute", zIndex: 0 }, animatedContainer: { marginLeft: NOTIFICATION_CONTAINER_MARGIN, marginRight: NOTIFICATION_CONTAINER_MARGIN } });
let closure_28 = { code: "function InAppNotificationContainerTsx1(finished){const{runOnJS,handleDismissNotification}=this.__closure;if(finished){runOnJS(handleDismissNotification)('autodismissed');}}" };
let closure_29 = { code: "function InAppNotificationContainerTsx2(){const{runOnJS,setInitialized}=this.__closure;return runOnJS(setInitialized)(true);}" };
let closure_30 = { code: "function InAppNotificationContainerTsx3(){const{withTiming,expandedSV,DEFAULT_ANIMATION_TIMING}=this.__closure;return{opacity:withTiming(expandedSV.get()?1:0,DEFAULT_ANIMATION_TIMING)};}" };
let closure_31 = { code: "function InAppNotificationContainerTsx4(){const{runOnJS,setPanning}=this.__closure;runOnJS(setPanning)(false);}" };
let closure_32 = { code: "function InAppNotificationContainerTsx5(event){const{velocityY,MIN_SWIPE_VELOCITY,MIN_SWIPE_DISTANCE,isExpandableNotification,notificationGestureY,expandedSV,runOnJS,setExpanded,withTiming,PAN_INPUT_RANGE,DEFAULT_ANIMATION_TIMING,handleDismissNotification,setPanning,withSpring}=this.__closure;const shouldDismiss=Math.abs(velocityY.get())>=MIN_SWIPE_VELOCITY||Math.abs(event.translationY)>=MIN_SWIPE_DISTANCE;if(isExpandableNotification&&event.translationY>MIN_SWIPE_DISTANCE){notificationGestureY.set(0);expandedSV.set(true);runOnJS(setExpanded)(true,'swipe');}else if(shouldDismiss&&event.translationY<=0){notificationGestureY.set(withTiming(event.translationY>0?PAN_INPUT_RANGE[2]:PAN_INPUT_RANGE[0],DEFAULT_ANIMATION_TIMING,'animate-always',function(finished){if(finished){runOnJS(handleDismissNotification)('swipe');}}));}else{runOnJS(setPanning)(false);notificationGestureY.set(withSpring(0,{damping:10,mass:1,stiffness:100,velocity:velocityY.get()},'animate-always'));}}" };
let closure_33 = { code: "function InAppNotificationContainerTsx6(event){const{startY,isExpandableNotification,notificationGestureY,velocityY}=this.__closure;const rawY=startY.get()+event.translationY;const newY=isExpandableNotification&&rawY>0?rawY:Math.min(rawY,startY.get());notificationGestureY.set(newY);velocityY.set(event.velocityY);}" };
let closure_34 = { code: "function InAppNotificationContainerTsx7(){const{startY,notificationGestureY,velocityY,runOnJS,setPanning}=this.__closure;startY.set(notificationGestureY.get());velocityY.set(0);runOnJS(setPanning)(true);}" };
let closure_35 = { code: "function InAppNotificationContainerTsx8(finished){const{runOnJS,handleDismissNotification}=this.__closure;if(finished){runOnJS(handleDismissNotification)('swipe');}}" };
let closure_36 = { code: "function InAppNotificationContainerTsx9(){const{notificationGestureY,scale,isExpandableNotification,interpolate,MIN_SWIPE_DISTANCE,PAN_INPUT_RANGE,NOTIFICATION_BOB_RANGE,extrapolateConfig,initialized}=this.__closure;const gestureY=notificationGestureY.get();const scaleValue=scale.get();if(isExpandableNotification&&gestureY>0){return{transform:[{translateY:interpolate(gestureY,[0,MIN_SWIPE_DISTANCE,PAN_INPUT_RANGE[2]],[0,0,NOTIFICATION_BOB_RANGE],extrapolateConfig)},{scale:initialized?1:scaleValue}],opacity:initialized?1:scaleValue};}const scaleTransform=initialized?interpolate(gestureY,PAN_INPUT_RANGE,[0.3,1,0.3],extrapolateConfig):scaleValue;const opacityTransform=initialized?interpolate(gestureY,PAN_INPUT_RANGE,[0,1,0],extrapolateConfig):scaleValue;return{transform:[{translateY:gestureY},{scale:scaleTransform}],opacity:opacityTransform};}" };
let result = set.fileFinishedImporting("modules/in_app_notifications/native/InAppNotificationContainer.tsx");

export default function InAppNotificationContainer(notification) {
  let channel;
  let height;
  let message;
  let width;
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
  let c10;
  let first1;
  let closure_12;
  let first2;
  let closure_14;
  let sharedValue4;
  let c16;
  let first3;
  let closure_18;
  let first4;
  let c20;
  let callback;
  let callback1;
  let showReactionBar;
  let showReplyInput;
  let isExpandableNotification;
  let callback3;
  let closure_27;
  let tmp = isExpandableNotification();
  let obj = channelType;
  let items = [notification];
  const memo = channelType.useMemo(() => notification(channelId[23]).extractMetadataFromNotification(notification), items);
  guildId = memo.guildId;
  channelId = memo.channelId;
  messageId = memo.messageId;
  channelType = memo.channelType;
  let obj1 = notification(channelId[8]);
  sharedValue = obj1.useSharedValue(0);
  let obj2 = notification(channelId[8]);
  sharedValue1 = obj2.useSharedValue(0);
  let obj3 = notification(channelId[8]);
  sharedValue2 = obj3.useSharedValue(0);
  let obj4 = notification(channelId[8]);
  sharedValue3 = obj4.useSharedValue(0);
  const tmp9 = messageId(channelType.useState(null), 2);
  first = tmp9[0];
  c10 = tmp11;
  let tmp12 = messageId(channelType.useState(false), 2);
  first1 = tmp12[0];
  closure_12 = tmp12[1];
  const tmp14 = messageId(channelType.useState(false), 2);
  first2 = tmp14[0];
  closure_14 = tmp14[1];
  let obj5 = notification(channelId[8]);
  sharedValue4 = obj5.useSharedValue(false);
  const tmp18 = guildId(channelId[24])(sharedValue4);
  c16 = tmp18;
  const tmp19 = messageId(channelType.useState(false), 2);
  first3 = tmp19[0];
  closure_18 = tmp19[1];
  const tmp21 = messageId(channelType.useState(false), 2);
  first4 = tmp21[0];
  c20 = tmp23;
  let obj6 = notification(channelId[25]);
  let items1 = [sharedValue3];
  const stateFromStores = obj6.useStateFromStores(items1, () => sharedValue3.isOpen());
  callback = channelType.useCallback(() => {
    const result = notification(channelId[26]).UNSAFE_markDismissibleContentAsDismissed(notification(channelId[27]).DismissibleContent.IN_APP_NOTIFICATION_EXPAND_NUX);
  }, []);
  let items2 = [sharedValue4, notification, guildId, channelId, messageId, callback];
  callback1 = channelType.useCallback((arg0, arg1) => {
    const result = sharedValue4.set(arg0);
    if (arg0) {
      let str = arg1;
      let obj = guildId(channelId[28]);
      obj.hideAllActionSheets();
      callback();
      obj = { type: null, notif_guild_id: null, notif_channel_id: null, in_app_notification_id: null, message_id: null, expand_source: null };
      obj[0] = notification.type;
      obj[1] = guildId;
      obj[2] = channelId;
      obj[3] = notification.inAppNotificationId;
      obj[4] = messageId;
      if (arg1 == null) {
        str = "unknown";
      }
      obj[5] = str;
      guildId(channelId[29]).trackWithMetadata(constants.IN_APP_NOTIFICATION_EXPANDED, obj);
      const obj2 = guildId(channelId[29]);
    }
    let num;
    if (arg0) {
      num = 1;
    }
    guildId(channelId[28]).setActionSheetZIndex(num);
  }, items2);
  let items3 = [tmp18, callback1];
  const callback2 = channelType.useCallback(() => {
    let flag = c16;
    if (flag) {
      callback1(false);
      flag = true;
    }
    return flag;
  }, items3);
  guildId(channelId[30])(callback2, tmp18);
  ({ height, width } = guildId(channelId[31])({ ignoreKeyboard: true }));
  let obj7 = notification(channelId[10]);
  const canExpandInAppNotification = obj7.useCanExpandInAppNotification("InAppNotificationContainer");
  let canExpand = canExpandInAppNotification.canExpand;
  if (notification.type !== first3.MESSAGE) {
    obj = { showReactionBar: false, showReplyInput: false, isExpandableNotification: false };
  } else {
    ({ message, channel } = notification);
    if (canExpand) {
      canExpand = height > sharedValue4;
    }
    let tmp3Result = tmp3(tmp4[11]);
    tmp3Result = tmp3(tmp4[12]);
    let tmp35 = canExpand;
    const canReactToMessageResult = tmp3Result.canReactToMessage(message, channel);
    if (canExpand) {
      tmp35 = tmp31;
    }
    if (tmp35) {
      tmp35 = canReactToMessageResult;
    }
    obj = { showReactionBar: null, showReplyInput: null, isExpandableNotification: null };
    obj[0] = tmp35;
    if (canExpand) {
      canExpand = canReplyToMessageResult;
    }
    obj[1] = canExpand;
    if (!tmp35) {
      tmp35 = canExpand;
    }
    obj[2] = tmp35;
    canReplyToMessageResult = tmp3Result.canReplyToMessage(channel, message);
  }
  showReactionBar = obj.showReactionBar;
  showReplyInput = obj.showReplyInput;
  isExpandableNotification = obj.isExpandableNotification;
  const items4 = [first3, notification, guildId, channelId, messageId];
  callback3 = obj.useCallback((arg0) => {
    if (null != arg0) {
      let obj = notification(channelId[23]);
      obj = { type: null, guildId: null, channelId: null, dismissReason: null, inAppNotificationId: null, messageId: null };
      obj[0] = notification.type;
      obj[1] = guildId;
      obj[2] = channelId;
      obj[3] = arg0;
      obj[4] = notification.inAppNotificationId;
      obj[5] = messageId;
      obj.trackDismissed(obj);
    }
    if (first3) {
      if (notification.type === first3.MESSAGE) {
        const ackMessageIdResult = first.ackMessageId(tmp8.channel.id);
        let tmp12 = null == ackMessageIdResult;
        if (!tmp12) {
          tmp12 = guildId(channelId[32]).compare(ackMessageIdResult, tmp8.message.id) < 0;
          const obj3 = guildId(channelId[32]);
        }
        if (tmp12) {
          tmp12 = tmp8.mentionCount >= obj6.getMentionCount(tmp8.channel.id);
        }
        if (tmp12) {
          const obj4 = notification(channelId[33]);
          obj = { section: null, object: null, objectType: null };
          obj[0] = first4.IN_APP_NOTIFICATION;
          obj[1] = _undefined2.ACK_IN_APP_NOTIFICATION_ACTION;
          obj[2] = callback.ACK_SEMI_AUTOMATIC;
          obj4.ack(tmp8.channel.id, obj, true, true, tmp8.message.id);
        }
        obj6 = first;
      }
    }
    const onDismiss = notification.onDismiss;
    if (onDismiss != null) {
      onDismiss();
    }
  }, items4);
  closure_27 = obj.useRef(null);
  const items5 = [first2, sharedValue, callback3];
  const effect = obj.useEffect(() => {
    let tmp = first2;
    if (first2) {
      tmp = null == ref.current;
    }
    if (tmp) {
      const _setTimeout = setTimeout;
      ref.current = setTimeout(() => {
        let obj = outer1_0(outer1_2[34]);
        const fn = function t(arg0) {
          if (arg0) {
            outer1_0(outer1_2[8]).runOnJS(closure_26)("autodismissed");
            const obj = outer1_0(outer1_2[8]);
          }
        };
        obj = { runOnJS: outer1_0(outer1_2[8]).runOnJS, handleDismissNotification: closure_26 };
        fn.__closure = obj;
        fn.__workletHash = 1150739008183;
        fn.__initData = outer1_28;
        const result = closure_5.set(obj.withTiming(outer1_16[0], outer1_10, "respect-motion-settings", fn));
      }, 2000);
    }
  }, items5);
  const tmp29 = guildId(channelId[31])({ ignoreKeyboard: true });
  const unmountEffect = notification(channelId[35]).useUnmountEffect(() => {
    guildId(channelId[28]).setActionSheetZIndex(undefined);
    if (null != ref.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(tmp3.current);
      notification(channelId[8]).cancelAnimation(sharedValue);
      const obj2 = notification(channelId[8]);
    }
  });
  guildId(channelId[35])(() => {
    let obj = notification(channelId[34]);
    const fn = function t() {
      return outer1_0(outer1_2[8]).runOnJS(closure_12)(true);
    };
    obj = { runOnJS: notification(channelId[8]).runOnJS, setInitialized: closure_12 };
    fn.__closure = obj;
    fn.__workletHash = 11548697745556;
    fn.__initData = outer1_29;
    const result = sharedValue3.set(obj.withTiming(1, showReplyInput, "respect-motion-settings", fn));
    return () => outer1_0(outer1_2[8]).cancelAnimation(initialize);
  });
  const items6 = [first1, notification.type, guildId, channelId, notification.inAppNotificationId, messageId, channelType];
  const effect1 = obj.useEffect(() => {
    if (first1) {
      let obj = guildId(channelId[36]);
      obj = { type: null, guild_id: null, channel_id: null, in_app_notification_id: null, message_id: null, channel_type: null };
      obj[0] = notification.type;
      obj[1] = guildId;
      obj[2] = channelId;
      obj[3] = notification.inAppNotificationId;
      obj[4] = messageId;
      obj[5] = channelType;
      obj.track(constants.IN_APP_NOTIFICATION_SHOWN, obj);
    }
  }, items6);
  const tmp3Result1 = notification(channelId[35]);
  function xt() {
    let obj = notification(channelId[34]);
    let num = 0;
    if (sharedValue4.get()) {
      num = 1;
    }
    obj = { opacity: obj.withTiming(num, c10) };
    return obj;
  }
  obj = { withTiming: tmp3(tmp4[34]).withTiming, expandedSV: sharedValue4, DEFAULT_ANIMATION_TIMING: c10 };
  xt.__closure = obj;
  xt.__workletHash = 2841593511002;
  xt.__initData = closure_30;
  const animatedStyle = notification(channelId[8]).useAnimatedStyle(xt);
  const Gesture = tmp3(tmp4[37]).Gesture;
  const tmp3Result2 = notification(channelId[8]);
  const tmp41 = c10;
  let tmp43 = !tmp18;
  if (!tmp18) {
    tmp43 = !first2;
  }
  const PanResult = Gesture.Pan();
  class Rt {
    constructor() {
      result = c7.set(c5.get());
      result1 = c6.set(0);
      obj = notification(channelId[8]);
      tmp3 = obj.runOnJS(c20)(true);
      return;
    }
  }
  obj1 = { startY: sharedValue2, notificationGestureY: sharedValue, velocityY: sharedValue1, runOnJS: tmp3(tmp4[8]).runOnJS, setPanning: tmp23 };
  Rt.__closure = obj1;
  Rt.__workletHash = 11316955045022;
  Rt.__initData = closure_34;
  const enabledResult = Gesture.Pan().enabled(tmp43);
  class Gt {
    constructor(arg0) {
      obj = c7;
      sum = c7.get() + notification.translationY;
      if (!isExpandableNotification) {
        tmp3 = globalThis;
        _Math = Math;
        bound = Math.min(sum, obj.get());
      } else {
        num = 0;
        bound = sum;
      }
      result = c5.set(bound);
      result1 = c6.set(notification.velocityY);
      return;
    }
  }
  Gt.__closure = { startY: sharedValue2, isExpandableNotification, notificationGestureY: sharedValue, velocityY: sharedValue1 };
  Gt.__workletHash = 16677375054247;
  Gt.__initData = closure_33;
  const onBeginResult = Gesture.Pan().enabled(tmp43).onBegin(Rt);
  function vt(translationY) {
    let obj = sharedValue1;
    let tmp = Math.abs(sharedValue1.get()) >= first2;
    if (!tmp) {
      const _Math = Math;
      tmp = Math.abs(translationY.translationY) >= closure_12;
    }
    if (isExpandableNotification) {
      if (translationY.translationY > closure_12) {
        const result = sharedValue.set(0);
        const result1 = sharedValue4.set(true);
        notification(channelId[8]).runOnJS(callback1)(true, "swipe");
        const obj7 = notification(channelId[8]);
      }
    }
    if (tmp) {
      if (translationY.translationY <= 0) {
        const obj5 = notification(channelId[34]);
        if (translationY.translationY > 0) {
          let first = _undefined[2];
        } else {
          first = _undefined[0];
        }
        const fn = function n(arg0) {
          if (arg0) {
            outer1_0(outer1_2[8]).runOnJS(closure_26)("swipe");
            const obj = outer1_0(outer1_2[8]);
          }
        };
        obj = { runOnJS: null, handleDismissNotification: null };
        obj[0] = notification(channelId[8]).runOnJS;
        obj[1] = callback3;
        fn.__closure = obj;
        fn.__workletHash = 1684596854482;
        fn.__initData = outer1_35;
        const result2 = sharedValue.set(obj5.withTiming(first, c10, "animate-always", fn));
        const tmp7 = notification;
        const tmp8 = channelId;
      }
    }
    notification(channelId[8]).runOnJS(c20)(false);
    const obj2 = notification(channelId[8]);
    obj = { damping: 10, mass: 1, stiffness: 100, velocity: obj.get() };
    const result3 = sharedValue.set(notification(channelId[38]).withSpring(0, obj, "animate-always"));
  }
  obj2 = { velocityY: sharedValue1, MIN_SWIPE_VELOCITY: first2, MIN_SWIPE_DISTANCE: closure_12, isExpandableNotification, notificationGestureY: sharedValue, expandedSV: sharedValue4, runOnJS: tmp3(tmp4[8]).runOnJS, setExpanded: callback1, withTiming: tmp3(tmp4[34]).withTiming, PAN_INPUT_RANGE: c16, DEFAULT_ANIMATION_TIMING: tmp41, handleDismissNotification: callback3, setPanning: tmp23, withSpring: tmp3(tmp4[38]).withSpring };
  vt.__closure = obj2;
  vt.__workletHash = 5165226193044;
  vt.__initData = closure_32;
  const onUpdateResult = Gesture.Pan().enabled(tmp43).onBegin(Rt).onUpdate(Gt);
  class Mt {
    constructor() {
      obj = notification(channelId[8]);
      tmp = obj.runOnJS(c20)(false);
      return;
    }
  }
  obj3 = { runOnJS: tmp3(tmp4[8]).runOnJS, setPanning: tmp23 };
  Mt.__closure = obj3;
  Mt.__workletHash = 2178187669683;
  Mt.__initData = closure_31;
  const onEndResult = Gesture.Pan().enabled(tmp43).onBegin(Rt).onUpdate(Gt).onEnd(vt);
  const onFinalizeResult = Gesture.Pan().enabled(tmp43).onBegin(Rt).onUpdate(Gt).onEnd(vt).onFinalize(Mt);
  function bt() {
    let value = sharedValue.get();
    value = sharedValue3.get();
    if (isExpandableNotification) {
      if (value > 0) {
        let obj = { translateY: null };
        const obj5 = notification(channelId[8]);
        const items = [0, closure_12, _undefined[2]];
        const items1 = [0, 0, closure_14];
        obj[0] = obj5.interpolate(value, items, items1, first1);
        const items2 = [obj, ];
        let num2 = 1;
        let num3 = 1;
        if (!first1) {
          num3 = value;
        }
        obj = { transform: null, opacity: null };
        const obj1 = { scale: null };
        obj1[0] = num3;
        items2[1] = obj1;
        obj[0] = items2;
        if (!tmp28) {
          num2 = value;
        }
        obj[1] = num2;
        let obj2 = obj;
        tmp28 = first1;
      }
      return obj2;
    }
    const items3 = [{ translateY: value }, ];
    let interpolateResult = value;
    if (first1) {
      obj = notification(channelId[8]);
      interpolateResult = obj.interpolate(value, _undefined, [0.3, 1, 0.3], first1);
    }
    obj2 = { transform: items3, opacity: null };
    items3[1] = { scale: interpolateResult };
    let interpolateResult1 = value;
    if (first1) {
      obj2 = notification(channelId[8]);
      interpolateResult1 = obj2.interpolate(value, _undefined, [0, 1, 0], first1);
    }
    obj2[1] = interpolateResult1;
  }
  obj4 = { notificationGestureY: sharedValue, scale: sharedValue3, isExpandableNotification, interpolate: tmp3(tmp4[8]).interpolate, MIN_SWIPE_DISTANCE: closure_12, PAN_INPUT_RANGE: c16, NOTIFICATION_BOB_RANGE: closure_14, extrapolateConfig: first1, initialized: first1 };
  bt.__closure = obj4;
  bt.__workletHash = 14122965198084;
  bt.__initData = closure_36;
  const items7 = [first2, sharedValue4, callback3, first1, tmp18, sharedValue, sharedValue3, callback1, sharedValue1, first4, isExpandableNotification, showReactionBar, showReplyInput, first, tmp9[1]];
  const animatedStyle1 = notification(channelId[8]).useAnimatedStyle(bt);
  const memo1 = obj.useMemo(() => ({ notificationGestureY: sharedValue, velocityY: sharedValue1, containerScale: sharedValue3, initialized: first1, autoDismissing: first2, setAutoDismissing: closure_14, setActionTaken: closure_18, isExpanded: c16, expandedSV: sharedValue4, setExpanded: callback1, handleDismissNotification: callback3, panning: first4, isExpandableNotification, showReactionBar, showReplyInput, confirmation: first, setConfirmation: c10 }), items7);
  obj5 = { style: sharedValue1.absoluteFill, pointerEvents: "box-none", children: null };
  obj6 = { style: items8, pointerEvents: null, children: null };
  items8 = [tmp.backdrop, { width, height }];
  let str = "none";
  if (tmp18) {
    str = "auto";
  }
  obj6[1] = str;
  obj7 = {
    style: animatedStyle,
    onDismiss() {
      sharedValue2.dismiss();
      callback1(false);
    },
    accessibilityLabel: null
  };
  const intl = tmp3(tmp4[41]).intl;
  obj7[2] = intl.string(notification(channelId[41]).t["9sewOj"]);
  obj6[2] = callback1(notification(channelId[40]).Backdrop, obj7);
  const items9 = [callback1(sharedValue, obj6), ];
  const obj8 = { top: true, bottom: true, left: true, right: true, style: tmp.safeAreaContainer, pointerEvents: "box-none", importantForAccessibility: null, children: null };
  let str2;
  if (stateFromStores) {
    str2 = "no-hide-descendants";
  }
  obj8[6] = str2;
  const obj9 = { value: memo1, children: null };
  const obj10 = { gesture: onFinalizeResult, children: null };
  const obj11 = { style: items10, pointerEvents: "box-none", children: null };
  items10 = [tmp.animatedContainer, animatedStyle1];
  obj11[2] = callback1(callback3, { notification });
  obj10[1] = callback1(guildId(channelId[8]).View, obj11);
  const items11 = [callback1(notification(channelId[37]).GestureDetector, obj10), callback1(closure_27, { notification })];
  obj9[1] = items11;
  obj8[7] = showReactionBar(notification(channelId[43]).InAppNotificationContext.Provider, obj9);
  items9[1] = callback1(notification(channelId[42]).SafeAreaPaddingView, obj8);
  obj5[2] = items9;
  return showReactionBar(notification(channelId[39]).OverlayView, obj5);
};