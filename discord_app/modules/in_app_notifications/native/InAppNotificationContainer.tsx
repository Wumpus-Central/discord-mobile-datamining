// === Module 11167: InAppNotificationContainer ===

// Module 11167 (InAppNotificationContainer)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import _mod1705 from "module_1705" /* 1705 */;
import timing_timing from "timing/timing" /* 5370 */;
import useMountEffectDefault from "useMountEffect" /* 5721 */;
import InAppNotificationUtils from "InAppNotificationUtils" /* 11152 */;
import MessageNotificationDefault from "MessageNotification" /* 11168 */;
import MessageFailedToSendNotificationDefault from "MessageFailedToSendNotification" /* 11214 */;
import ForumThreadCreatedNotificationDefault from "ForumThreadCreatedNotification" /* 11217 */;
import BugReporterNotification from "BugReporterNotification" /* 11218 */;
import AlertNotificationDefault from "AlertNotification" /* 11261 */;
import ReactionNotificationDefault from "ReactionNotification" /* 11262 */;
import ReminderNotificationDefault from "ReminderNotification" /* 11281 */;
import RestrictedHoursWarningNotificationDefault from "RestrictedHoursWarningNotification" /* 11320 */;
import MessageRequestNotificationDefault from "MessageRequestNotification" /* 11323 */;
import StageSpeakInviteNotificationDefault from "StageSpeakInviteNotification" /* 11324 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import NativeMenuStore from "NativeMenuStore" /* 10323 */;

const require = globalThis.__r;

const _modDef1652 = tmp17(1652);
require = fn;
function NotificationWrapper(notification) {
  notification = notification.notification;
  const type = notification.type;
  if (constants.MESSAGE === type) {
    const obj2 = { notification };
    return jsx(MessageNotificationDefault, { notification });
  } else if (constants.MESSAGE_FAILED_TO_SEND === type) {
    const obj3 = { notification };
    return jsx(MessageFailedToSendNotificationDefault, { notification });
  } else if (constants.FORUM_THREAD_CREATED === type) {
    const obj4 = { notification };
    return jsx(ForumThreadCreatedNotificationDefault, { notification });
  } else if (constants.BUG_REPORTER === type) {
    const obj5 = { notification };
    return jsx(BugReporterNotification.BugReporterNotification, { notification });
  } else if (constants.ALERT === type) {
    const obj6 = { notification };
    return jsx(AlertNotificationDefault, { notification });
  } else if (constants.REACTION === type) {
    const obj7 = { notification };
    return jsx(ReactionNotificationDefault, { notification });
  } else if (constants.MESSAGE_REMINDER === type) {
    const obj8 = { notification };
    return jsx(ReminderNotificationDefault, { notification });
  } else {
    if (constants.RESTRICTED_HOURS_WARNING !== type) {
      if (constants.RESTRICTED_SCHEDULE_UPDATED !== type) {
        if (constants.MESSAGE_REQUEST === type) {
          const obj9 = { notification };
          return jsx(MessageRequestNotificationDefault, { notification });
        } else if (constants.STAGE_SPEAK_INVITE === type) {
          obj = { notification };
          return jsx(StageSpeakInviteNotificationDefault, { notification });
        } else {
          return null;
        }
      }
    }
    const obj10 = { notification };
    return jsx(RestrictedHoursWarningNotificationDefault, { notification });
  }
}
let StyleSheet = fn(17).StyleSheet;
const InAppNotificationConstants = fn(11153);
({ DEFAULT_ANIMATION_TIMING: metroImportDefault, extrapolateConfig: closure_8, MIN_SWIPE_DISTANCE: closure_9, MIN_SWIPE_VELOCITY: closure_10, PAN_INPUT_RANGE: closure_11, NOTIFICATION_CONTAINER_MARGIN } = InAppNotificationConstants);
const Constants = fn(1072);
({ InAppNotificationTypes: closure_12, AnalyticEvents: map1 } = Constants);
const jsx = fn(21).jsx;
let obj = { duration: 200, easing: null };
const Easing = fn(1652).Easing;
obj.easing = Easing.in(fn(1652).Easing.ease);
const createStyles = fn(5140);
let closure_16 = createStyles.createStyles({ safeAreaContainer: { position: "absolute", left: 0, right: 0, backgroundColor: "transparent", marginTop: 8, top: 0, bottom: 0 }, animatedContainer: { marginLeft: NOTIFICATION_CONTAINER_MARGIN, marginRight: NOTIFICATION_CONTAINER_MARGIN } });
let closure_18 = { code: "(function InAppNotificationContainerTsx1(){let[scheduleOnRN,setInitialized]=this.__closure;return scheduleOnRN(setInitialized,true);})" };
let closure_19 = { code: "(function InAppNotificationContainerTsx2(){let[startY,notificationGestureY,velocityY,scheduleOnRN,setPanning]=this.__closure;startY.set(notificationGestureY.get());velocityY.set(0);scheduleOnRN(setPanning,true);})" };
let closure_20 = { code: "(function InAppNotificationContainerTsx3(event){let[startY,notificationGestureY,velocityY]=this.__closure;const rawY=startY.get()+event.translationY;const newY=Math.min(rawY,startY.get());notificationGestureY.set(newY);velocityY.set(event.velocityY);})" };
let closure_21 = { code: "(function InAppNotificationContainerTsx4(finished){let[scheduleOnRN,handleDismissNotification]=this.__closure;if(finished){scheduleOnRN(handleDismissNotification,'swipe');}})" };
let closure_22 = { code: "(function InAppNotificationContainerTsx5(event){let[velocityY,MIN_SWIPE_VELOCITY,MIN_SWIPE_DISTANCE,notificationGestureY,withTiming,PAN_INPUT_RANGE,DEFAULT_ANIMATION_TIMING,_worklet_14549346579562_init_data,scheduleOnRN,handleDismissNotification,setPanning,withSpring]=this.__closure;const shouldDismiss=Math.abs(velocityY.get())>=MIN_SWIPE_VELOCITY||Math.abs(event.translationY)>=MIN_SWIPE_DISTANCE;if(shouldDismiss&&event.translationY<=0){notificationGestureY.set(withTiming(event.translationY>0?PAN_INPUT_RANGE[2]:PAN_INPUT_RANGE[0],DEFAULT_ANIMATION_TIMING,'animate-always',function InAppNotificationContainerTsx4Factory([_worklet_14549346579562_init_data,scheduleOnRN,handleDismissNotification]){const InAppNotificationContainerTsx4=function(finished){if(finished){scheduleOnRN(handleDismissNotification,'swipe');}};InAppNotificationContainerTsx4.__closure=[scheduleOnRN,handleDismissNotification];InAppNotificationContainerTsx4.__workletHash=14549346579562;InAppNotificationContainerTsx4.__initData=_worklet_14549346579562_init_data;return InAppNotificationContainerTsx4;}([_worklet_14549346579562_init_data,scheduleOnRN,handleDismissNotification])));}else{scheduleOnRN(setPanning,false);notificationGestureY.set(withSpring(0,{damping:10,mass:1,stiffness:100,velocity:velocityY.get()},'animate-always'));}})" };
let closure_23 = { code: "(function InAppNotificationContainerTsx6(){let[scheduleOnRN,setPanning]=this.__closure;scheduleOnRN(setPanning,false);})" };
let closure_24 = { code: "(function InAppNotificationContainerTsx7(){let[notificationGestureY,scale,initialized,interpolate,PAN_INPUT_RANGE,extrapolateConfig,usesFullScaleEntrance]=this.__closure;const gestureY=notificationGestureY.get();const scaleValue=scale.get();const scaleTransform=initialized?interpolate(gestureY,PAN_INPUT_RANGE,[0.3,1,0.3],extrapolateConfig):usesFullScaleEntrance?1:scaleValue;const opacityTransform=initialized?interpolate(gestureY,PAN_INPUT_RANGE,[0,1,0],extrapolateConfig):scaleValue;return{transform:[{translateY:gestureY},{scale:scaleTransform}],opacity:opacityTransform};})" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/in_app_notifications/native/InAppNotificationContainer.tsx");

export default function InAppNotificationContainer(notification) {
  notification = notification.notification;
  _require = notification;
  importDefault = undefined;
  dependencyMap = undefined;
  c3 = undefined;
  noop = undefined;
  StyleSheet = undefined;
  c6 = undefined;
  c7 = undefined;
  c8 = undefined;
  c9 = undefined;
  c10 = undefined;
  c11 = undefined;
  const tmp = closure_16();
  let isIOSResult = require("utils/PlatformUtils").isIOS();
  if (isIOSResult) {
    isIOSResult = tmp2(11331).shouldEnableYYTextReplacement({ location: "InAppNotificationContainer" });
    const tmp2Result = tmp2(11331);
  }
  items = [notification];
  const memo = noop.useMemo(() => InAppNotificationUtils.extractMetadataFromNotification(c0), items);
  const guildId = memo.guildId;
  importDefault = guildId;
  const channelId = memo.channelId;
  const messageId = memo.messageId;
  c3 = messageId;
  const channelType = memo.channelType;
  noop = channelType;
  obj = require("utils/PlatformUtils");
  const obj3 = noop;
  const sharedValue = require("module_1652").useSharedValue(0);
  StyleSheet = sharedValue;
  const tmp2Result7 = require("module_1652");
  const sharedValue1 = require("module_1652").useSharedValue(0);
  c6 = sharedValue1;
  const tmp2Result8 = require("module_1652");
  const sharedValue2 = require("module_1652").useSharedValue(0);
  const tmp2Result9 = require("module_1652");
  const sharedValue3 = require("module_1652").useSharedValue(0);
  c7 = sharedValue3;
  const tmp10 = c3(noop.useState(false), 2);
  let first = tmp10[0];
  c8 = first;
  c9 = tmp10[1];
  const tmp12 = c3(noop.useState(false), 2);
  const first1 = tmp12[0];
  c10 = first1;
  const tmp2Result10 = require("module_1652");
  let items1 = [c6];
  const items2 = [notification, guildId, channelId, messageId];
  const stateFromStores = require("initialize").useStateFromStores(items1, () => velocityY.isOpen());
  const callback = noop.useCallback((dismissReason) => {
    if (null != dismissReason) {
      const obj2 = { type: _undefined.type, guildId: _undefined2, channelId: _undefined3, dismissReason, inAppNotificationId: _undefined.inAppNotificationId, messageId: _undefined4 };
      InAppNotificationUtils.trackDismissed(obj2);
    }
    const onDismiss = _undefined.onDismiss;
    if (onDismiss != null) {
      onDismiss();
    }
  }, items2);
  c11 = callback;
  useMountEffectDefault(() => {
    obj = timing_timing;
    items = [closure_18, _mod1705.scheduleOnRN, c9];
    c0 = undefined;
    c1 = undefined;
    [tmp3, tmp4, tmp5] = items;
    class InAppNotificationContainerTsx1 {
      constructor() {
        return closure_0(closure_1, true);
      }
    }
    const items1 = [tmp4, tmp5];
    InAppNotificationContainerTsx1.__closure = items1;
    InAppNotificationContainerTsx1.__workletHash = 4111779721667;
    InAppNotificationContainerTsx1.__initData = tmp3;
    const result = _undefined5.set(obj.withTiming(1, obj, "respect-motion-settings", InAppNotificationContainerTsx1));
    return () => _undefined(c2[7]).cancelAnimation(_undefined5);
  });
  const items3 = [first, notification.type, guildId, channelId, notification.inAppNotificationId, messageId, channelType];
  const effect = noop.useEffect(() => {
    if (c8) {
      const obj2 = { type: _undefined.type, guild_id: _undefined2, channel_id: _undefined3, in_app_notification_id: _undefined.inAppNotificationId, message_id: _undefined4, channel_type };
      AnalyticsUtilsDefault.track(constants2.IN_APP_NOTIFICATION_SHOWN, obj2);
    }
  }, items3);
  const Gesture = tmp2(5420).Gesture;
  const tmp2Result11 = require("initialize");
  const items4 = [closure_19, sharedValue2, sharedValue, sharedValue1, require("module_1705").scheduleOnRN, tmp12[1]];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  c3 = undefined;
  noop = undefined;
  [tmp20, tmp21, tmp22, tmp23, tmp24, tmp25] = items4;
  class InAppNotificationContainerTsx2 {
    constructor() {
      result = closure_0.set(closure_1.get());
      result1 = closure_2.set(0);
      tmp3 = closure_3(closure_4, true);
      return;
    }
  }
  const items5 = [tmp21, tmp22, tmp23, tmp24, tmp25];
  InAppNotificationContainerTsx2.__closure = items5;
  InAppNotificationContainerTsx2.__workletHash = 9958676486255;
  InAppNotificationContainerTsx2.__initData = tmp20;
  const PanResult = Gesture.Pan();
  const items6 = [closure_20, sharedValue2, sharedValue, sharedValue1];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  [tmp26, tmp27, tmp28, tmp29] = items6;
  class InAppNotificationContainerTsx3 {
    constructor(arg0) {
      sum = closure_0.get() + notification.translationY;
      result = closure_1.set(Math.min(sum, closure_0.get()));
      result1 = closure_2.set(notification.velocityY);
      return;
    }
  }
  const items7 = [tmp27, tmp28, tmp29];
  InAppNotificationContainerTsx3.__closure = items7;
  InAppNotificationContainerTsx3.__workletHash = 8301292753596;
  InAppNotificationContainerTsx3.__initData = tmp26;
  const onBeginResult = Gesture.Pan().onBegin(InAppNotificationContainerTsx2);
  const items8 = [closure_22, sharedValue1, c10, c9, sharedValue, require("timing/timing").withTiming, c11, c7, closure_21, require("module_1705").scheduleOnRN, callback, tmp12[1], require("spring/spring").withSpring];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  c3 = undefined;
  noop = undefined;
  StyleSheet = undefined;
  c6 = undefined;
  c7 = undefined;
  c8 = undefined;
  c9 = undefined;
  c10 = undefined;
  c11 = undefined;
  [tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43] = items8;
  class InAppNotificationContainerTsx5 {
    constructor(arg0) {
      obj = closure_0;
      if (Math.abs(closure_0.get()) >= closure_1) {
        num = 0;
        if (notification.translationY <= 0) {
          tmp5 = closure_3;
          tmp6 = closure_4;
          if (notification.translationY > 0) {
            tmp9 = closure_5;
            first = closure_5[2];
          } else {
            tmp7 = closure_5;
            first = closure_5[0];
          }
          tmp10 = closure_6;
          tmp11 = closure_7;
          items = [, , ];
          items[0] = closure_7;
          tmp12 = closure_8;
          items[1] = closure_8;
          tmp13 = closure_9;
          items[2] = closure_9;
          tmp14 = items;
          [tmp15, tmp16, tmp17] = items;
          class InAppNotificationContainerTsx4 {
            constructor(arg0) {
              if (notification) {
                tmp = closure_0;
                tmp2 = closure_1;
                str = "swipe";
                tmp3 = closure_0(closure_1, "swipe");
              }
              return;
            }
          }
          items1 = [, ];
          items1[0] = tmp16;
          items1[1] = tmp17;
          InAppNotificationContainerTsx4.__closure = items1;
          num2 = 14549346579562;
          InAppNotificationContainerTsx4.__workletHash = 14549346579562;
          InAppNotificationContainerTsx4.__initData = tmp15;
          str = "animate-always";
          tmp18 = first;
          tmp19 = tmp10;
          tmp20 = InAppNotificationContainerTsx4;
          result = closure_3.set(tmp6(first, tmp10, "animate-always", InAppNotificationContainerTsx4));
        }
        return;
      } else {
        _Math = Math;
        tmp = closure_2;
      }
      tmp2 = closure_8(closure_10, false);
      tmp3[3] = obj.get();
      result1 = closure_3.set(closure_11(0, tmp3, "animate-always"));
      return;
    }
  }
  const items9 = [tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43];
  InAppNotificationContainerTsx5.__closure = items9;
  InAppNotificationContainerTsx5.__workletHash = 3427472707207;
  InAppNotificationContainerTsx5.__initData = tmp31;
  const onUpdateResult = Gesture.Pan().onBegin(InAppNotificationContainerTsx2).onUpdate(InAppNotificationContainerTsx3);
  const tmp30 = c11;
  const items10 = [closure_23, require("module_1705").scheduleOnRN, tmp12[1]];
  _require = undefined;
  importDefault = undefined;
  [tmp44, tmp45, tmp46] = items10;
  class InAppNotificationContainerTsx6 {
    constructor() {
      tmp = closure_0(closure_1, false);
      return;
    }
  }
  const items11 = [tmp45, tmp46];
  InAppNotificationContainerTsx6.__closure = items11;
  InAppNotificationContainerTsx6.__workletHash = 1825489770853;
  InAppNotificationContainerTsx6.__initData = tmp44;
  const onEndResult = Gesture.Pan().onBegin(InAppNotificationContainerTsx2).onUpdate(InAppNotificationContainerTsx3).onEnd(InAppNotificationContainerTsx5);
  const onFinalizeResult = Gesture.Pan().onBegin(InAppNotificationContainerTsx2).onUpdate(InAppNotificationContainerTsx3).onEnd(InAppNotificationContainerTsx5).onFinalize(InAppNotificationContainerTsx6);
  const items12 = [closure_24, sharedValue, sharedValue3, first, require("module_1652").interpolate, tmp30, c8, isIOSResult];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  c3 = undefined;
  noop = undefined;
  StyleSheet = undefined;
  c6 = undefined;
  [tmp48, tmp49, tmp50, tmp51, tmp52, tmp53, tmp54, tmp55] = items12;
  class InAppNotificationContainerTsx7 {
    constructor() {
      value = closure_0.get();
      value1 = closure_1.get();
      items = [, ];
      items[0] = { translateY: value };
      tmp3 = closure_2;
      if (closure_2) {
        tmp5 = closure_3;
        tmp6 = closure_4;
        tmp7 = closure_5;
        tmp8 = value;
        num = closure_3(value, closure_4, [0.3, 1, 0.3], closure_5);
      } else {
        tmp4 = closure_6;
        num = 1;
        if (!closure_6) {
          num = value1;
        }
      }
      obj = { transform: items, opacity: null };
      items[1] = { scale: num };
      if (tmp3) {
        tmp9 = closure_3;
        tmp10 = closure_4;
        tmp11 = closure_5;
        tmp12 = value;
        value1 = closure_3(value, closure_4, [0, 1, 0], closure_5);
      }
      obj.opacity = value1;
      return obj;
    }
  }
  const items13 = [tmp49, tmp50, tmp51, tmp52, tmp53, tmp54, tmp55];
  InAppNotificationContainerTsx7.__closure = items13;
  InAppNotificationContainerTsx7.__workletHash = 9732012167849;
  InAppNotificationContainerTsx7.__initData = tmp48;
  const items14 = [callback, first, sharedValue, sharedValue1, first1];
  const animatedStyle = require("module_1652").useAnimatedStyle(InAppNotificationContainerTsx7);
  const memo1 = obj3.useMemo(() => ({ notificationGestureY, velocityY, initialized, handleDismissNotification, panning }), items14);
  let obj2 = { style: StyleSheet.absoluteFill, pointerEvents: "box-none", children: null };
  const rect = { top: true, bottom: true, left: true, right: true, style: tmp.safeAreaContainer, pointerEvents: "box-none", importantForAccessibility: null, children: null };
  let str;
  if (stateFromStores) {
    str = "no-hide-descendants";
  }
  rect.importantForAccessibility = str;
  const obj4 = { value: memo1, children: null };
  const obj5 = { gesture: onFinalizeResult, children: null };
  const obj6 = { style: null, pointerEvents: "box-none", children: <NotificationWrapper notification={notification} /> };
  const items15 = [tmp.animatedContainer, animatedStyle];
  obj6.style = items15;
  obj5.children = jsx(_modDef1652.View, { style: null, pointerEvents: "box-none", children: <NotificationWrapper notification={notification} /> });
  obj4.children = jsx(require("LegacyBaseButton").GestureDetector, { gesture: onFinalizeResult, children: null });
  rect.children = jsx(require("InAppNotificationContext").InAppNotificationContext.Provider, { value: memo1, children: null });
  obj2.children = jsx(require("common/SafeAreaView").SafeAreaPaddingView, { top: true, bottom: true, left: true, right: true, style: tmp.safeAreaContainer, pointerEvents: "box-none", importantForAccessibility: null, children: null });
  return jsx(require("native").OverlayView, { style: StyleSheet.absoluteFill, pointerEvents: "box-none", children: null });
};