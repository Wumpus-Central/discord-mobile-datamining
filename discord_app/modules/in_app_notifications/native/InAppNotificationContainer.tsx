// discord_app/modules/in_app_notifications/native/InAppNotificationContainer.tsx
import c from "../../../../_runtime/00576_c.js";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import ReanimatedRexport from "../../reanimated/ReanimatedRexport.tsx";
import timing from "../../../design/animation/reanimated/timing/timing.tsx";
import spring from "../../../design/animation/reanimated/spring/spring.tsx";
import InAppNotificationUtils from "InAppNotificationUtils.tsx";
import MessageNotificationDefault from "MessageNotification.tsx";
import MessageFailedToSendNotificationDefault from "MessageFailedToSendNotification.tsx";
import ForumThreadCreatedNotificationDefault from "ForumThreadCreatedNotification.tsx";
import BugReporterNotification from "../../bug_reporter/native/BugReporterNotification.tsx";
import AlertNotificationDefault from "AlertNotification.tsx";
import ReactionNotificationDefault from "ReactionNotification.tsx";
import ReminderNotificationDefault from "ReminderNotification.tsx";
import RestrictedHoursWarningNotificationDefault from "RestrictedHoursWarningNotification.tsx";
import MessageRequestNotificationDefault from "MessageRequestNotification.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import NativeMenuStore from "../../native_menu/native/NativeMenuStore.tsx";

require = fn;
const StyleSheet = fn(17).StyleSheet;
const InAppNotificationConstants = fn(12478);
({
  DEFAULT_ANIMATION_TIMING: closure_7,
  extrapolateConfig: closure_8,
  MIN_SWIPE_DISTANCE: closure_9,
  MIN_SWIPE_VELOCITY: c10,
  PAN_INPUT_RANGE: closure_11,
  NOTIFICATION_CONTAINER_MARGIN,
} = InAppNotificationConstants);
const Constants = fn(1085);
({ InAppNotificationTypes: closure_12, AnalyticEvents: map1 } = Constants);
const jsx = fn(21).jsx;
let obj = { duration: 200, easing: null };
const Easing = fn(4612).Easing;
obj.easing = Easing.in(fn(4612).Easing.ease);
const createStyles = fn(4890);
let closure_16 = createStyles.createStyles({
  safeAreaContainer: {
    position: "absolute",
    left: 0,
    right: 0,
    backgroundColor: "transparent",
    marginTop: 8,
    top: 0,
    bottom: 0,
  },
  animatedContainer: { marginLeft: NOTIFICATION_CONTAINER_MARGIN, marginRight: NOTIFICATION_CONTAINER_MARGIN },
});
let ReactCompilerGating = fn(558);
let closure_17 = ReactCompilerGating.isReactCompilerEnabled()
  ? (notification) => {
      const cResult = c.c(18);
      notification = notification.notification;
      const type = notification.type;
      if (constants.MESSAGE === type) {
        if (cResult[0] !== notification) {
          const obj2 = { notification };
          const tmp40 = jsx(MessageNotificationDefault, { notification });
          cResult[0] = notification;
          cResult[1] = tmp40;
          let tmp37 = tmp40;
        } else {
          tmp37 = cResult[1];
        }
        return tmp37;
      } else if (constants.MESSAGE_FAILED_TO_SEND === type) {
        if (cResult[2] !== notification) {
          const obj3 = { notification };
          const tmp36 = jsx(MessageFailedToSendNotificationDefault, { notification });
          cResult[2] = notification;
          cResult[3] = tmp36;
          let tmp33 = tmp36;
        } else {
          tmp33 = cResult[3];
        }
        return tmp33;
      } else if (constants.FORUM_THREAD_CREATED === type) {
        if (cResult[4] !== notification) {
          const obj4 = { notification };
          const tmp32 = jsx(ForumThreadCreatedNotificationDefault, { notification });
          cResult[4] = notification;
          cResult[5] = tmp32;
          let tmp29 = tmp32;
        } else {
          tmp29 = cResult[5];
        }
        return tmp29;
      } else if (constants.BUG_REPORTER === type) {
        if (cResult[6] !== notification) {
          const obj5 = { notification };
          const tmp28 = jsx(BugReporterNotification.BugReporterNotification, { notification });
          cResult[6] = notification;
          cResult[7] = tmp28;
          let tmp26 = tmp28;
        } else {
          tmp26 = cResult[7];
        }
        return tmp26;
      } else if (constants.ALERT === type) {
        if (cResult[8] !== notification) {
          const obj6 = { notification };
          const tmp25 = jsx(AlertNotificationDefault, { notification });
          cResult[8] = notification;
          cResult[9] = tmp25;
          let tmp22 = tmp25;
        } else {
          tmp22 = cResult[9];
        }
        return tmp22;
      } else if (constants.REACTION === type) {
        if (cResult[10] !== notification) {
          const obj7 = { notification };
          const tmp21 = jsx(ReactionNotificationDefault, { notification });
          cResult[10] = notification;
          cResult[11] = tmp21;
          let tmp18 = tmp21;
        } else {
          tmp18 = cResult[11];
        }
        return tmp18;
      } else if (constants.MESSAGE_REMINDER === type) {
        if (cResult[12] !== notification) {
          const obj8 = { notification };
          const tmp17 = jsx(ReminderNotificationDefault, { notification });
          cResult[12] = notification;
          cResult[13] = tmp17;
          let tmp14 = tmp17;
        } else {
          tmp14 = cResult[13];
        }
        return tmp14;
      } else {
        if (constants.RESTRICTED_HOURS_WARNING !== type) {
          if (constants.RESTRICTED_SCHEDULE_UPDATED !== type) {
            if (constants.MESSAGE_REQUEST === type) {
              if (cResult[16] !== notification) {
                const obj9 = { notification };
                const tmp9 = jsx(MessageRequestNotificationDefault, { notification });
                cResult[16] = notification;
                cResult[17] = tmp9;
                let tmp6 = tmp9;
              } else {
                tmp6 = cResult[17];
              }
              return tmp6;
            } else {
              return null;
            }
          }
        }
        if (cResult[14] !== notification) {
          const obj10 = { notification };
          const tmp13 = jsx(RestrictedHoursWarningNotificationDefault, { notification });
          cResult[14] = notification;
          cResult[15] = tmp13;
          let tmp10 = tmp13;
        } else {
          tmp10 = cResult[15];
        }
        return tmp10;
      }
    }
  : (notification) => {
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
              obj = { notification };
              return jsx(MessageRequestNotificationDefault, { notification });
            } else {
              return null;
            }
          }
        }
        const obj9 = { notification };
        return jsx(RestrictedHoursWarningNotificationDefault, { notification });
      }
    };
let closure_18 = {
  code: "function InAppNotificationContainerTsx1(){const{runOnJS,setInitialized}=this.__closure;return runOnJS(setInitialized)(true);}",
};
const __initData = {
  code: "function InAppNotificationContainerTsx2(){const{runOnJS,setPanning}=this.__closure;runOnJS(setPanning)(false);}",
};
const __initData2 = {
  code: 'function InAppNotificationContainerTsx3(event_0){const{velocityY,MIN_SWIPE_VELOCITY,MIN_SWIPE_DISTANCE,notificationGestureY,withTiming,PAN_INPUT_RANGE,DEFAULT_ANIMATION_TIMING,runOnJS,handleDismissNotification,setPanning,withSpring}=this.__closure;const shouldDismiss=Math.abs(velocityY.get())>=MIN_SWIPE_VELOCITY||Math.abs(event_0.translationY)>=MIN_SWIPE_DISTANCE;if(shouldDismiss&&event_0.translationY<=0){notificationGestureY.set(withTiming(event_0.translationY>0?PAN_INPUT_RANGE[2]:PAN_INPUT_RANGE[0],DEFAULT_ANIMATION_TIMING,"animate-always",function(finished){if(finished){runOnJS(handleDismissNotification)("swipe");}}));}else{runOnJS(setPanning)(false);notificationGestureY.set(withSpring(0,{damping:10,mass:1,stiffness:100,velocity:velocityY.get()},"animate-always"));}}',
};
const __initData3 = {
  code: "function InAppNotificationContainerTsx4(event){const{startY,notificationGestureY,velocityY}=this.__closure;const rawY=startY.get()+event.translationY;const newY=Math.min(rawY,startY.get());notificationGestureY.set(newY);velocityY.set(event.velocityY);}",
};
const __initData4 = {
  code: "function InAppNotificationContainerTsx5(){const{startY,notificationGestureY,velocityY,runOnJS,setPanning}=this.__closure;startY.set(notificationGestureY.get());velocityY.set(0);runOnJS(setPanning)(true);}",
};
let closure_23 = {
  code: 'function InAppNotificationContainerTsx6(finished){const{runOnJS,handleDismissNotification}=this.__closure;if(finished){runOnJS(handleDismissNotification)("swipe");}}',
};
const __initData5 = {
  code: "function InAppNotificationContainerTsx7(){const{notificationGestureY,scale,initialized,interpolate,PAN_INPUT_RANGE,extrapolateConfig}=this.__closure;const gestureY=notificationGestureY.get();const scaleValue=scale.get();const scaleTransform=initialized?interpolate(gestureY,PAN_INPUT_RANGE,[0.3,1,0.3],extrapolateConfig):scaleValue;const opacityTransform=initialized?interpolate(gestureY,PAN_INPUT_RANGE,[0,1,0],extrapolateConfig):scaleValue;return{transform:[{translateY:gestureY},{scale:scaleTransform}],opacity:opacityTransform};}",
};
let closure_25 = {
  code: "function InAppNotificationContainerTsx8(){const{runOnJS,setInitialized}=this.__closure;return runOnJS(setInitialized)(true);}",
};
const __initData6 = {
  code: "function InAppNotificationContainerTsx9(){const{runOnJS,setPanning}=this.__closure;runOnJS(setPanning)(false);}",
};
const __initData7 = {
  code: "function InAppNotificationContainerTsx10(event_0){const{velocityY,MIN_SWIPE_VELOCITY,MIN_SWIPE_DISTANCE,notificationGestureY,withTiming,PAN_INPUT_RANGE,DEFAULT_ANIMATION_TIMING,runOnJS,handleDismissNotification,setPanning,withSpring}=this.__closure;const shouldDismiss=Math.abs(velocityY.get())>=MIN_SWIPE_VELOCITY||Math.abs(event_0.translationY)>=MIN_SWIPE_DISTANCE;if(shouldDismiss&&event_0.translationY<=0){notificationGestureY.set(withTiming(event_0.translationY>0?PAN_INPUT_RANGE[2]:PAN_INPUT_RANGE[0],DEFAULT_ANIMATION_TIMING,'animate-always',function(finished){if(finished){runOnJS(handleDismissNotification)('swipe');}}));}else{runOnJS(setPanning)(false);notificationGestureY.set(withSpring(0,{damping:10,mass:1,stiffness:100,velocity:velocityY.get()},'animate-always'));}}",
};
const __initData8 = {
  code: "function InAppNotificationContainerTsx11(event){const{startY,notificationGestureY,velocityY}=this.__closure;const rawY=startY.get()+event.translationY;const newY=Math.min(rawY,startY.get());notificationGestureY.set(newY);velocityY.set(event.velocityY);}",
};
const __initData9 = {
  code: "function InAppNotificationContainerTsx12(){const{startY,notificationGestureY,velocityY,runOnJS,setPanning}=this.__closure;startY.set(notificationGestureY.get());velocityY.set(0);runOnJS(setPanning)(true);}",
};
const __initData10 = {
  code: "function InAppNotificationContainerTsx13(finished){const{runOnJS,handleDismissNotification}=this.__closure;if(finished){runOnJS(handleDismissNotification)('swipe');}}",
};
const __initData11 = {
  code: "function InAppNotificationContainerTsx14(){const{notificationGestureY,scale,initialized,interpolate,PAN_INPUT_RANGE,extrapolateConfig}=this.__closure;const gestureY=notificationGestureY.get();const scaleValue=scale.get();const scaleTransform=initialized?interpolate(gestureY,PAN_INPUT_RANGE,[0.3,1,0.3],extrapolateConfig):scaleValue;const opacityTransform=initialized?interpolate(gestureY,PAN_INPUT_RANGE,[0,1,0],extrapolateConfig):scaleValue;return{transform:[{translateY:gestureY},{scale:scaleTransform}],opacity:opacityTransform};}",
};
ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/in_app_notifications/native/InAppNotificationContainer.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (notification) => {
      const cResult = notification(channelId[10]).c(45);
      notification = notification.notification;
      closure_16();
      if (cResult[0] !== notification) {
        let result = tmp(tmp2[20]).extractMetadataFromNotification(notification);
        cResult[0] = notification;
        cResult[1] = result;
        let tmp5 = result;
        const tmpResult = tmp(tmp2[20]);
      } else {
        tmp5 = cResult[1];
      }
      const guildId = tmp5.guildId;
      channelId = tmp5.channelId;
      const messageId = tmp5.messageId;
      const channelType = tmp5.channelType;
      obj = notification(channelId[10]);
      const sharedValue = notification(channelId[7]).useSharedValue(0);
      const tmpResult7 = notification(channelId[7]);
      const sharedValue1 = notification(channelId[7]).useSharedValue(0);
      const tmpResult8 = notification(channelId[7]);
      const sharedValue2 = notification(channelId[7]).useSharedValue(0);
      const tmpResult9 = notification(channelId[7]);
      const sharedValue3 = notification(channelId[7]).useSharedValue(0);
      const tmp11 = messageId(channelType.useState(false), 2);
      const initialized = tmp11[0];
      MIN_SWIPE_VELOCITY = tmp11[1];
      const obj7 = channelType;
      const tmpResult10 = notification(channelId[7]);
      [tmp14, tmp15] = messageId(channelType.useState(false), 2);
      PAN_INPUT_RANGE = tmp15;
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [sharedValue1];
        class M {
          constructor() {
            return closure_6.isOpen();
          }
        }
        cResult[2] = items;
        cResult[3] = M;
      }
      notification(channelId[21]);
      if (cResult[4] === channelId) {
        if (cResult[5] === guildId) {
          if (cResult[6] === messageId) {
            if (cResult[7] === notification) {
              let tmp20 = cResult[8];
            }
            handleDismissNotification = tmp20;
            if (cResult[9] !== sharedValue3) {
              function tt() {
                obj = timing;
                const fn = function t() {
                  return notification(channelId[7]).runOnJS(setInitialized)(true);
                };
                fn.__closure = { runOnJS: ReanimatedRexport.runOnJS, setInitialized };
                fn.__workletHash = 16158991995287;
                fn.__initData = __initData;
                const result = sharedValue3.set(obj.withTiming(1, obj, "respect-motion-settings", fn));
                return () => notification(channelId[7]).cancelAnimation(sharedValue3);
              }
              cResult[9] = sharedValue3;
              class M {
                constructor() {
                  return closure_6.isOpen();
                }
              }
              cResult[10] = tt;
              let tmp21 = tt;
            } else {
              tmp21 = cResult[10];
            }
            class M {
              constructor() {
                return closure_6.isOpen();
              }
            }
            guildId(tmp2[23])(tmp21);
            if (cResult[11] === channelId) {
              if (cResult[12] === channelType) {
                if (cResult[13] === guildId) {
                  if (cResult[14] === initialized) {
                    if (cResult[15] === messageId) {
                      if (cResult[16] === notification.inAppNotificationId) {
                        if (cResult[17] === notification.type) {
                          let tmp23 = cResult[18];
                          let tmp24 = cResult[19];
                        }
                        const effect = obj7.useEffect(tmp23, tmp24);
                        const _Symbol = Symbol;
                        class M {
                          constructor() {
                            return closure_6.isOpen();
                          }
                        }
                        if (tmp26 === Symbol.for("react.memo_cache_sentinel")) {
                          class InAppNotificationContainerTsx2 {
                            constructor() {
                              obj = closure_0(closure_2[7]);
                              tmp = obj.runOnJS(closure_11)(false);
                              return;
                            }
                          }
                          let obj2 = { runOnJS: tmp(tmp2[7]).runOnJS, setPanning: null };
                          class M {
                            constructor() {
                              return closure_6.isOpen();
                            }
                          }
                          InAppNotificationContainerTsx2.__closure = obj2;
                          InAppNotificationContainerTsx2.__workletHash = 7413448149557;
                          InAppNotificationContainerTsx2.__initData = __initData;
                          cResult[20] = InAppNotificationContainerTsx2;
                        } else {
                          class InAppNotificationContainerTsx2 {
                            constructor() {
                              obj = closure_0(closure_2[7]);
                              tmp = obj.runOnJS(closure_11)(false);
                              return;
                            }
                          }
                        }
                        const Gesture = tmp(tmp2[25]).Gesture;
                        function rt() {
                          const result = sharedValue2.set(sharedValue.get());
                          const result1 = sharedValue1.set(0);
                          ReanimatedRexport.runOnJS(closure_11)(true);
                        }
                        let obj3 = {
                          startY: sharedValue2,
                          notificationGestureY: sharedValue,
                          velocityY: sharedValue1,
                          runOnJS: tmp(tmp2[7]).runOnJS,
                          setPanning: tmp15,
                        };
                        rt.__closure = obj3;
                        rt.__workletHash = 16480026707740;
                        rt.__initData = __initData4;
                        const PanResult = Gesture.Pan();
                        function st(translationY) {
                          const sum = sharedValue2.get() + translationY.translationY;
                          const result = sharedValue.set(Math.min(sum, sharedValue2.get()));
                          const result1 = sharedValue1.set(translationY.velocityY);
                        }
                        let obj4 = { startY: sharedValue2, notificationGestureY: sharedValue, velocityY: sharedValue1 };
                        st.__closure = obj4;
                        st.__workletHash = 4467653619554;
                        st.__initData = __initData3;
                        const onBeginResult = Gesture.Pan().onBegin(rt);
                        function ot(translationY) {
                          if (Math.abs(sharedValue1.get()) >= MIN_SWIPE_VELOCITY) {
                            if (translationY.translationY <= 0) {
                              let runOnJS = dependencyMap;
                              const obj5 = timing;
                              if (translationY.translationY > 0) {
                                first = PAN_INPUT_RANGE[2];
                              } else {
                                first = PAN_INPUT_RANGE[0];
                              }
                              const fn = function n(arg0) {
                                if (arg0) {
                                  notification(channelId[7]).runOnJS(handleDismissNotification)("swipe");
                                  obj = notification(channelId[7]);
                                }
                              };
                              const obj4 = { runOnJS: null, handleDismissNotification: null };
                              runOnJS = ReanimatedRexport.runOnJS;
                              obj4.runOnJS = runOnJS;
                              obj4.handleDismissNotification = handleDismissNotification;
                              fn.__closure = obj4;
                              fn.__workletHash = 7723597479708;
                              fn.__initData = __initData2;
                              const result = sharedValue.set(obj5.withTiming(first, React5, "animate-always", fn));
                            }
                          } else {
                            const _Math = Math;
                          }
                          ReanimatedRexport.runOnJS(closure_11)(false);
                          const obj3 = spring;
                          const result1 = sharedValue.set(
                            obj3.withSpring(
                              0,
                              { damping: 10, mass: 1, stiffness: 100, velocity: sharedValue1.get() },
                              "animate-always",
                            ),
                          );
                          const obj6 = { damping: 10, mass: 1, stiffness: 100, velocity: sharedValue1.get() };
                        }
                        let obj5 = {
                          velocityY: sharedValue1,
                          MIN_SWIPE_VELOCITY,
                          MIN_SWIPE_DISTANCE: initialized,
                          notificationGestureY: sharedValue,
                          withTiming: tmp(tmp2[22]).withTiming,
                          PAN_INPUT_RANGE,
                          DEFAULT_ANIMATION_TIMING: sharedValue2,
                          runOnJS: tmp(tmp2[7]).runOnJS,
                          handleDismissNotification: tmp20,
                          setPanning: tmp15,
                          withSpring: tmp(tmp2[26]).withSpring,
                        };
                        ot.__closure = obj5;
                        class Z {
                          constructor(arg0) {
                            if (null != notification) {
                              tmp = closure_0;
                              tmp2 = closure_2;
                              obj = closure_0(closure_2[20]);
                              obj1 = {
                                type: null,
                                guildId: null,
                                channelId: null,
                                dismissReason: null,
                                inAppNotificationId: null,
                                messageId: null,
                              };
                              tmp3 = notification;
                              obj1.type = notification.type;
                              tmp4 = guildId;
                              obj1.guildId = guildId;
                              tmp5 = channelId;
                              obj1.channelId = channelId;
                              obj1.dismissReason = notification;
                              obj1.inAppNotificationId = notification.inAppNotificationId;
                              tmp6 = messageId;
                              obj1.messageId = messageId;
                              trackDismissedResult = obj.trackDismissed(obj1);
                            }
                            onDismiss = notification.onDismiss;
                            if (onDismiss != null) {
                              onDismissResult = onDismiss();
                            }
                            return;
                          }
                        }
                        ot.__initData = __initData2;
                        const onUpdateResult = Gesture.Pan().onBegin(rt).onUpdate(st);
                        Gesture.Pan().onBegin(rt).onUpdate(st).onEnd(ot).onFinalize(InAppNotificationContainerTsx2);
                        const onEndResult = Gesture.Pan().onBegin(rt).onUpdate(st).onEnd(ot);
                        function ct() {
                          value = sharedValue.get();
                          value2 = sharedValue3.get();
                          const items = [{ translateY: value }];
                          let interpolateResult = value2;
                          if (first) {
                            obj = ReanimatedRexport;
                            interpolateResult = obj.interpolate(value, PAN_INPUT_RANGE, [0.3, 1, 0.3], closure_2_8);
                          }
                          const obj2 = { transform: items, opacity: null };
                          items[1] = { scale: interpolateResult };
                          if (first) {
                            const obj3 = ReanimatedRexport;
                            value2 = obj3.interpolate(value, PAN_INPUT_RANGE, [0, 1, 0], closure_2_8);
                          }
                          obj2.opacity = value2;
                          return obj2;
                        }
                        let obj6 = {
                          notificationGestureY: sharedValue,
                          scale: sharedValue3,
                          initialized,
                          interpolate: tmp(tmp2[7]).interpolate,
                          PAN_INPUT_RANGE,
                          extrapolateConfig: sharedValue3,
                        };
                        ct.__closure = obj6;
                        ct.__workletHash = 1564072865992;
                        ct.__initData = __initData5;
                        const animatedStyle = tmp(tmp2[7]).useAnimatedStyle(ct);
                        if (cResult[21] === tmp20) {
                          class InAppNotificationContainerTsx2 {
                            constructor() {
                              obj = closure_0(closure_2[7]);
                              tmp = obj.runOnJS(closure_11)(false);
                              return;
                            }
                          }
                        }
                        const obj8 = {
                          notificationGestureY: sharedValue,
                          velocityY: sharedValue1,
                          initialized,
                          handleDismissNotification: tmp20,
                          panning: tmp14,
                        };
                        cResult[21] = tmp20;
                        cResult[22] = initialized;
                        cResult[23] = sharedValue;
                        cResult[24] = tmp14;
                        cResult[25] = sharedValue1;
                        cResult[26] = obj8;
                        const tmpResult12 = tmp(tmp2[7]);
                      }
                    }
                  }
                }
              }
            }
            function nt() {
              if (first) {
                const obj2 = {
                  type: notification.type,
                  guild_id: guildId,
                  channel_id: channelId,
                  in_app_notification_id: notification.inAppNotificationId,
                  message_id: messageId,
                  channel_type: channelType,
                };
                AnalyticsUtilsDefault.track(handleDismissNotification.IN_APP_NOTIFICATION_SHOWN, obj2);
              }
            }
            const items1 = [
              initialized,
              notification.type,
              guildId,
              channelId,
              notification.inAppNotificationId,
              messageId,
              channelType,
            ];
            cResult[11] = channelId;
            cResult[12] = channelType;
            cResult[13] = guildId;
            cResult[14] = initialized;
            cResult[15] = messageId;
            cResult[16] = notification.inAppNotificationId;
            cResult[17] = notification.type;
            cResult[18] = nt;
            cResult[19] = items1;
            tmp24 = items1;
            tmp23 = nt;
          }
        }
      }
      class Z {
        constructor(arg0) {
          if (null != notification) {
            tmp = closure_0;
            tmp2 = closure_2;
            obj = closure_0(closure_2[20]);
            obj1 = {
              type: null,
              guildId: null,
              channelId: null,
              dismissReason: null,
              inAppNotificationId: null,
              messageId: null,
            };
            tmp3 = notification;
            obj1.type = notification.type;
            tmp4 = guildId;
            obj1.guildId = guildId;
            tmp5 = channelId;
            obj1.channelId = channelId;
            obj1.dismissReason = notification;
            obj1.inAppNotificationId = notification.inAppNotificationId;
            tmp6 = messageId;
            obj1.messageId = messageId;
            trackDismissedResult = obj.trackDismissed(obj1);
          }
          onDismiss = notification.onDismiss;
          if (onDismiss != null) {
            onDismissResult = onDismiss();
          }
          return;
        }
      }
      cResult[4] = channelId;
      cResult[5] = guildId;
      cResult[6] = messageId;
      cResult[7] = notification;
      cResult[8] = Z;
      tmp20 = Z;
      const tmp13 = messageId(channelType.useState(false), 2);
    }
  : (notification) => {
      notification = notification.notification;
      let channelType;
      const tmp = closure_16();
      let items = [notification];
      const memo = channelType.useMemo(
        () => InAppNotificationUtils.extractMetadataFromNotification(notification),
        items,
      );
      const guildId = memo.guildId;
      const channelId = memo.channelId;
      const messageId = memo.messageId;
      channelType = memo.channelType;
      const sharedValue = notification(channelId[7]).useSharedValue(0);
      obj = notification(channelId[7]);
      const sharedValue1 = notification(channelId[7]).useSharedValue(0);
      let obj2 = notification(channelId[7]);
      const sharedValue2 = notification(channelId[7]).useSharedValue(0);
      let obj3 = notification(channelId[7]);
      const sharedValue3 = notification(channelId[7]).useSharedValue(0);
      const tmp9 = messageId(channelType.useState(false), 2);
      const initialized = tmp9[0];
      MIN_SWIPE_VELOCITY = tmp9[1];
      const tmp11 = messageId(channelType.useState(false), 2);
      const first1 = tmp11[0];
      closure_12 = tmp13;
      let obj4 = notification(channelId[7]);
      const items1 = [sharedValue1];
      const items2 = [notification, guildId, channelId, messageId];
      const stateFromStores = notification(channelId[21]).useStateFromStores(items1, () => sharedValue1.isOpen());
      handleDismissNotification = channelType.useCallback((dismissReason) => {
        if (null != dismissReason) {
          const obj2 = {
            type: notification.type,
            guildId,
            channelId,
            dismissReason,
            inAppNotificationId: notification.inAppNotificationId,
            messageId,
          };
          InAppNotificationUtils.trackDismissed(obj2);
        }
        const onDismiss = notification.onDismiss;
        if (onDismiss != null) {
          onDismiss();
        }
      }, items2);
      guildId(channelId[23])(() => {
        obj = timing;
        const fn = function t() {
          return notification(channelId[7]).runOnJS(setInitialized)(true);
        };
        fn.__closure = { runOnJS: ReanimatedRexport.runOnJS, setInitialized };
        fn.__workletHash = 14437131800094;
        fn.__initData = __initData;
        const result = sharedValue3.set(obj.withTiming(1, obj, "respect-motion-settings", fn));
        return () => notification(channelId[7]).cancelAnimation(sharedValue3);
      });
      const items3 = [
        initialized,
        notification.type,
        guildId,
        channelId,
        notification.inAppNotificationId,
        messageId,
        channelType,
      ];
      const effect = channelType.useEffect(() => {
        if (first) {
          const obj2 = {
            type: notification.type,
            guild_id: guildId,
            channel_id: channelId,
            in_app_notification_id: notification.inAppNotificationId,
            message_id: messageId,
            channel_type: channelType,
          };
          AnalyticsUtilsDefault.track(handleDismissNotification.IN_APP_NOTIFICATION_SHOWN, obj2);
        }
      }, items3);
      const Gesture = notification(channelId[25]).Gesture;
      let obj5 = notification(channelId[21]);
      const tmp16 = guildId;
      class Z {
        constructor() {
          result = closure_7.set(closure_5.get());
          result1 = closure_6.set(0);
          obj = closure_0(closure_2[7]);
          tmp3 = obj.runOnJS(closure_12)(true);
          return;
        }
      }
      const PanResult = Gesture.Pan();
      Z.__closure = {
        startY: sharedValue2,
        notificationGestureY: sharedValue,
        velocityY: sharedValue1,
        runOnJS: notification(channelId[7]).runOnJS,
        setPanning: tmp11[1],
      };
      Z.__workletHash = 12748509853098;
      Z.__initData = __initData9;
      let obj6 = {
        startY: sharedValue2,
        notificationGestureY: sharedValue,
        velocityY: sharedValue1,
        runOnJS: notification(channelId[7]).runOnJS,
        setPanning: tmp11[1],
      };
      class X {
        constructor(arg0) {
          sum = closure_7.get() + notification.translationY;
          result = closure_5.set(Math.min(sum, closure_7.get()));
          result1 = closure_6.set(notification.velocityY);
          return;
        }
      }
      X.__closure = { startY: sharedValue2, notificationGestureY: sharedValue, velocityY: sharedValue1 };
      X.__workletHash = 1995603255126;
      X.__initData = __initData8;
      const onBeginResult = PanResult.onBegin(Z);
      class K {
        constructor(arg0) {
          obj = closure_6;
          if (Math.abs(closure_6.get()) >= MIN_SWIPE_VELOCITY) {
            num = 0;
            if (notification.translationY <= 0) {
              runOnJS = closure_2;
              tmp4 = closure_5;
              tmp5 = closure_0;
              obj5 = closure_0(closure_2[22]);
              if (notification.translationY > 0) {
                tmp8 = PAN_INPUT_RANGE;
                first = PAN_INPUT_RANGE[2];
              } else {
                tmp6 = PAN_INPUT_RANGE;
                first = PAN_INPUT_RANGE[0];
              }
              tmp9 = DEFAULT_ANIMATION_TIMING;
              fn = function n(arg0) {
                if (arg0) {
                  notification(channelId[7]).runOnJS(handleDismissNotification)("swipe");
                  obj = notification(channelId[7]);
                }
              };
              obj1 = { runOnJS: null, handleDismissNotification: null };
              runOnJS = tmp5(runOnJS[7]).runOnJS;
              obj1.runOnJS = runOnJS;
              tmp10 = closure_13;
              obj1.handleDismissNotification = closure_13;
              fn.__closure = obj1;
              num2 = 16021757113512;
              fn.__workletHash = 16021757113512;
              tmp11 = closure_30;
              fn.__initData = closure_30;
              str = "animate-always";
              tmp12 = obj5;
              tmp13 = first;
              tmp14 = fn;
              result = closure_5.set(obj5.withTiming(first, DEFAULT_ANIMATION_TIMING, "animate-always", fn));
            }
          } else {
            _Math = Math;
            tmp = MIN_SWIPE_DISTANCE;
          }
          obj2 = closure_0(closure_2[7]);
          tmp2 = obj2.runOnJS(closure_12)(false);
          obj3 = closure_0(closure_2[26]);
          obj7 = { damping: 10, mass: 1, stiffness: 100, velocity: obj.get() };
          result1 = closure_5.set(obj3.withSpring(0, obj7, "animate-always"));
          return;
        }
      }
      const onUpdateResult = PanResult.onBegin(Z).onUpdate(X);
      K.__closure = {
        velocityY: sharedValue1,
        MIN_SWIPE_VELOCITY,
        MIN_SWIPE_DISTANCE: initialized,
        notificationGestureY: sharedValue,
        withTiming: notification(channelId[22]).withTiming,
        PAN_INPUT_RANGE: first1,
        DEFAULT_ANIMATION_TIMING: sharedValue2,
        runOnJS: notification(channelId[7]).runOnJS,
        handleDismissNotification,
        setPanning: tmp11[1],
        withSpring: notification(channelId[26]).withSpring,
      };
      K.__workletHash = 4671522850073;
      K.__initData = __initData7;
      const obj7 = {
        velocityY: sharedValue1,
        MIN_SWIPE_VELOCITY,
        MIN_SWIPE_DISTANCE: initialized,
        notificationGestureY: sharedValue,
        withTiming: notification(channelId[22]).withTiming,
        PAN_INPUT_RANGE: first1,
        DEFAULT_ANIMATION_TIMING: sharedValue2,
        runOnJS: notification(channelId[7]).runOnJS,
        handleDismissNotification,
        setPanning: tmp11[1],
        withSpring: notification(channelId[26]).withSpring,
      };
      let fn = function q() {
        ReanimatedRexport.runOnJS(closure_12)(false);
      };
      const onEndResult = onUpdateResult.onEnd(K);
      fn.__closure = { runOnJS: notification(channelId[7]).runOnJS, setPanning: tmp11[1] };
      fn.__workletHash = 16271003307198;
      fn.__initData = __initData6;
      const obj8 = { runOnJS: notification(channelId[7]).runOnJS, setPanning: tmp11[1] };
      const onFinalizeResult = onEndResult.onFinalize(fn);
      const fn2 = function $() {
        value = sharedValue.get();
        value2 = sharedValue3.get();
        const items = [{ translateY: value }];
        let interpolateResult = value2;
        if (first) {
          obj = ReanimatedRexport;
          interpolateResult = obj.interpolate(value, PAN_INPUT_RANGE, [0.3, 1, 0.3], closure_2_8);
        }
        const obj2 = { transform: items, opacity: null };
        items[1] = { scale: interpolateResult };
        if (first) {
          const obj3 = ReanimatedRexport;
          value2 = obj3.interpolate(value, PAN_INPUT_RANGE, [0, 1, 0], closure_2_8);
        }
        obj2.opacity = value2;
        return obj2;
      };
      const obj13 = notification(channelId[7]);
      fn2.__closure = {
        notificationGestureY: sharedValue,
        scale: sharedValue3,
        initialized,
        interpolate: notification(channelId[7]).interpolate,
        PAN_INPUT_RANGE: first1,
        extrapolateConfig: sharedValue3,
      };
      fn2.__workletHash = 4970180488314;
      fn2.__initData = __initData11;
      const items4 = [handleDismissNotification, initialized, sharedValue, sharedValue1, first1];
      const animatedStyle = obj13.useAnimatedStyle(fn2);
      const memo1 = channelType.useMemo(
        () => ({
          notificationGestureY: sharedValue,
          velocityY: sharedValue1,
          initialized,
          handleDismissNotification,
          panning: first1,
        }),
        items4,
      );
      const obj10 = { style: sharedValue.absoluteFill, pointerEvents: "box-none", children: null };
      const rect = {
        top: true,
        bottom: true,
        left: true,
        right: true,
        style: tmp.safeAreaContainer,
        pointerEvents: "box-none",
        importantForAccessibility: null,
        children: null,
      };
      let str;
      if (stateFromStores) {
        str = "no-hide-descendants";
      }
      rect.importantForAccessibility = str;
      const obj11 = { value: memo1, children: null };
      const obj12 = { gesture: onFinalizeResult, children: null };
      const obj14 = { style: null, pointerEvents: "box-none", children: <closure_17 notification={notification} /> };
      const items5 = [tmp.animatedContainer, animatedStyle];
      obj14.style = items5;
      obj12.children = jsx(tmp16(channelId[7]).View, {
        style: null,
        pointerEvents: "box-none",
        children: <closure_17 notification={notification} />,
      });
      obj11.children = jsx(notification(channelId[25]).GestureDetector, { gesture: onFinalizeResult, children: null });
      rect.children = jsx(notification(channelId[27]).InAppNotificationContext.Provider, {
        value: memo1,
        children: null,
      });
      obj10.children = jsx(notification(channelId[29]).SafeAreaPaddingView, {
        top: true,
        bottom: true,
        left: true,
        right: true,
        style: tmp.safeAreaContainer,
        pointerEvents: "box-none",
        importantForAccessibility: null,
        children: null,
      });
      return jsx(notification(channelId[28]).OverlayView, {
        style: sharedValue.absoluteFill,
        pointerEvents: "box-none",
        children: null,
      });
    };
