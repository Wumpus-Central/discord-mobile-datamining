// discord_app/modules/in_app_notifications/native/InAppNotificationContainer.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../_runtime/00576_react.js";
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
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../_runtime/00019_react.js";
import NativeMenuStore from "../../native_menu/native/NativeMenuStore.tsx";
import InAppNotificationConstants from "InAppNotificationConstants.tsx";
import Constants from "../../../Constants.tsx";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let first, notification, set, set2;

let Easing;
let NOTIFICATION_CONTAINER_MARGIN;
let c10;
let c9;
let closure_12;
let map1;
let metroImportAll;
let metroImportDefault;
let unpackModuleId;
const StyleSheet = react_native.StyleSheet;
({
  DEFAULT_ANIMATION_TIMING: metroImportDefault,
  extrapolateConfig: metroImportAll,
  MIN_SWIPE_DISTANCE: c9,
  MIN_SWIPE_VELOCITY: c10,
  PAN_INPUT_RANGE: unpackModuleId,
  NOTIFICATION_CONTAINER_MARGIN,
} = InAppNotificationConstants);
({ InAppNotificationTypes: closure_12, AnalyticEvents: map1 } = Constants);
const jsx = Fragment.jsx;
let obj = { duration: 200, easing: Easing.in(ReanimatedRexport.Easing.ease) };
Easing = ReanimatedRexport.Easing;
let obj2 = {
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
};
let closure_16 = createStyles.createStyles(obj2);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_17 = ReactCompilerGating.isReactCompilerEnabled()
  ? (notification) => {
      obj = react2;
      const cResult = obj.c(18);
      notification = notification.notification;
      const type = notification.type;
      if (constants.MESSAGE === type) {
        let tmp37;
        if (cResult[0] !== notification) {
          const tmp40 = jsx(MessageNotificationDefault, { notification });
          cResult[0] = notification;
          cResult[1] = tmp40;
          tmp37 = tmp40;
        } else {
          tmp37 = cResult[1];
        }
        return tmp37;
      } else if (constants.MESSAGE_FAILED_TO_SEND === type) {
        let tmp33;
        if (cResult[2] !== notification) {
          const tmp36 = jsx(MessageFailedToSendNotificationDefault, { notification });
          cResult[2] = notification;
          cResult[3] = tmp36;
          tmp33 = tmp36;
        } else {
          tmp33 = cResult[3];
        }
        return tmp33;
      } else if (constants.FORUM_THREAD_CREATED === type) {
        let tmp29;
        if (cResult[4] !== notification) {
          const tmp32 = jsx(ForumThreadCreatedNotificationDefault, { notification });
          cResult[4] = notification;
          cResult[5] = tmp32;
          tmp29 = tmp32;
        } else {
          tmp29 = cResult[5];
        }
        return tmp29;
      } else if (constants.BUG_REPORTER === type) {
        let tmp26;
        if (cResult[6] !== notification) {
          const tmp28 = jsx(BugReporterNotification.BugReporterNotification, { notification });
          cResult[6] = notification;
          cResult[7] = tmp28;
          tmp26 = tmp28;
        } else {
          tmp26 = cResult[7];
        }
        return tmp26;
      } else if (constants.ALERT === type) {
        let tmp22;
        if (cResult[8] !== notification) {
          const tmp25 = jsx(AlertNotificationDefault, { notification });
          cResult[8] = notification;
          cResult[9] = tmp25;
          tmp22 = tmp25;
        } else {
          tmp22 = cResult[9];
        }
        return tmp22;
      } else if (constants.REACTION === type) {
        let tmp18;
        if (cResult[10] !== notification) {
          const tmp21 = jsx(ReactionNotificationDefault, { notification });
          cResult[10] = notification;
          cResult[11] = tmp21;
          tmp18 = tmp21;
        } else {
          tmp18 = cResult[11];
        }
        return tmp18;
      } else if (constants.MESSAGE_REMINDER === type) {
        let tmp14;
        if (cResult[12] !== notification) {
          const tmp17 = jsx(ReminderNotificationDefault, { notification });
          cResult[12] = notification;
          cResult[13] = tmp17;
          tmp14 = tmp17;
        } else {
          tmp14 = cResult[13];
        }
        return tmp14;
      } else {
        let tmp10;
        if (constants.RESTRICTED_HOURS_WARNING !== type) {
          if (constants.RESTRICTED_SCHEDULE_UPDATED !== type) {
            if (constants.MESSAGE_REQUEST === type) {
              let tmp6;
              if (cResult[16] !== notification) {
                const tmp9 = jsx(MessageRequestNotificationDefault, { notification });
                cResult[16] = notification;
                cResult[17] = tmp9;
                tmp6 = tmp9;
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
          const tmp13 = jsx(RestrictedHoursWarningNotificationDefault, { notification });
          cResult[14] = notification;
          cResult[15] = tmp13;
          tmp10 = tmp13;
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
        return jsx(MessageNotificationDefault, { notification });
      } else if (constants.MESSAGE_FAILED_TO_SEND === type) {
        return jsx(MessageFailedToSendNotificationDefault, { notification });
      } else if (constants.FORUM_THREAD_CREATED === type) {
        return jsx(ForumThreadCreatedNotificationDefault, { notification });
      } else if (constants.BUG_REPORTER === type) {
        return jsx(BugReporterNotification.BugReporterNotification, { notification });
      } else if (constants.ALERT === type) {
        return jsx(AlertNotificationDefault, { notification });
      } else if (constants.REACTION === type) {
        return jsx(ReactionNotificationDefault, { notification });
      } else if (constants.MESSAGE_REMINDER === type) {
        return jsx(ReminderNotificationDefault, { notification });
      } else {
        if (constants.RESTRICTED_HOURS_WARNING !== type) {
          if (constants.RESTRICTED_SCHEDULE_UPDATED !== type) {
            if (constants.MESSAGE_REQUEST === type) {
              return jsx(MessageRequestNotificationDefault, { notification });
            } else {
              return null;
            }
          }
        }
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
ReactCompilerGating = ReactCompilerGating_mod;
const tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (notification) => {
      let channelId;
      let closure_11;
      let setInitialized;
      let tmp14;
      let tmp15;
      let tmp5;
      let tmp = notification;
      obj = notification(channelId[10]);
      const cResult = obj.c(45);
      notification = notification.notification;
      closure_16();
      if (cResult[0] !== notification) {
        const tmpResult = tmp(channelId[20]);
        let result = tmpResult.extractMetadataFromNotification(notification);
        cResult[0] = notification;
        cResult[1] = result;
        tmp5 = result;
      } else {
        tmp5 = cResult[1];
      }
      const guildId = tmp5.guildId;
      channelId = tmp5.channelId;
      const messageId = tmp5.messageId;
      const channelType = tmp5.channelType;
      const tmpResult7 = tmp(channelId[7]);
      const sharedValue = tmpResult7.useSharedValue(0);
      const tmpResult8 = tmp(channelId[7]);
      const sharedValue1 = tmpResult8.useSharedValue(0);
      const tmpResult9 = tmp(channelId[7]);
      const sharedValue2 = tmpResult9.useSharedValue(0);
      const tmpResult10 = tmp(channelId[7]);
      const sharedValue3 = tmpResult10.useSharedValue(0);
      const tmp11 = messageId(channelType.useState(false), 2);
      const initialized = tmp11[0];
      MIN_SWIPE_VELOCITY = tmp11[1];
      [tmp14, tmp15] = messageId(channelType.useState(false), 2);
      PAN_INPUT_RANGE = tmp15;
      messageId(channelType.useState(false), 2);
      const obj7 = channelType;
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [sharedValue1];
        class M {
          constructor() {
            return sharedValue1.isOpen();
          }
        }
        cResult[2] = items;
        cResult[3] = M;
      }
      tmp(channelId[21]);
      if (cResult[4] === channelId) {
        if (cResult[5] === guildId) {
          if (cResult[6] === messageId) {
            let tmp20;
            let tmp21;
            if (cResult[7] === notification) {
              tmp20 = cResult[8];
            }
            handleDismissNotification = tmp20;
            if (cResult[9] !== sharedValue3) {
              function tt() {
                set = sharedValue3.set;
                obj = timing;
                const fn = function t() {
                  obj = notification(channelId[7]);
                  return obj.runOnJS(setInitialized)(true);
                };
                fn.__closure = { runOnJS: ReanimatedRexport.runOnJS, setInitialized };
                fn.__workletHash = 16158991995287;
                fn.__initData = __initData;
                ({ runOnJS: ReanimatedRexport.runOnJS, setInitialized });
                const result = set(obj.withTiming(1, obj, "respect-motion-settings", fn));
                return () => {
                  obj = notification(channelId[7]);
                  return obj.cancelAnimation(sharedValue3);
                };
              }
              cResult[9] = sharedValue3;
              class M {
                constructor() {
                  return sharedValue1.isOpen();
                }
              }
              cResult[10] = tt;
              tmp21 = tt;
            } else {
              tmp21 = cResult[10];
            }
            class M {
              constructor() {
                return sharedValue1.isOpen();
              }
            }
            guildId(channelId[23])(tmp21);
            if (cResult[11] === channelId) {
              if (cResult[12] === channelType) {
                if (cResult[13] === guildId) {
                  if (cResult[14] === initialized) {
                    if (cResult[15] === messageId) {
                      if (cResult[16] === notification.inAppNotificationId) {
                        let tmp23;
                        let tmp24;
                        if (cResult[17] === notification.type) {
                          tmp23 = cResult[18];
                          tmp24 = cResult[19];
                        }
                        const effect = obj7.useEffect(tmp23, tmp24);
                        const _Symbol = Symbol;
                        class M {
                          constructor() {
                            return sharedValue1.isOpen();
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
                              return sharedValue1.isOpen();
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
                          obj = ReanimatedRexport;
                          obj.runOnJS(PAN_INPUT_RANGE)(true);
                        }
                        let obj3 = {
                          startY: sharedValue2,
                          notificationGestureY: sharedValue,
                          velocityY: sharedValue1,
                          runOnJS: tmp(tmp2[7]).runOnJS,
                          setPanning: tmp15,
                        };
                        const onBegin = Gesture.Pan().onBegin;
                        Gesture.Pan();
                        rt.__closure = obj3;
                        rt.__workletHash = 16480026707740;
                        rt.__initData = __initData4;
                        function st(translationY) {
                          const sum = sharedValue2.get() + translationY.translationY;
                          const result = sharedValue.set(Math.min(sum, sharedValue2.get()));
                          const result1 = sharedValue1.set(translationY.velocityY);
                        }
                        let obj4 = { startY: sharedValue2, notificationGestureY: sharedValue, velocityY: sharedValue1 };
                        st.__closure = obj4;
                        st.__workletHash = 4467653619554;
                        st.__initData = __initData3;
                        const onBeginResult = onBegin(rt);
                        function ot(translationY) {
                          if (Math.abs(sharedValue1.get()) >= c10) {
                            if (translationY.translationY <= 0) {
                              set2 = sharedValue.set;
                              const withTiming = timing.withTiming;
                              if (translationY.translationY > 0) {
                                first = unpackModuleId[2];
                              } else {
                                first = unpackModuleId[0];
                              }
                              const fn = function n(arg0) {
                                const tmp = arg0;
                                if (tmp) {
                                  obj = notification(channelId[7]);
                                  obj.runOnJS(handleDismissNotification)("swipe");
                                }
                              };
                              fn.__closure = { runOnJS: ReanimatedRexport.runOnJS, handleDismissNotification };
                              fn.__workletHash = 7723597479708;
                              fn.__initData = __initData2;
                              const obj4 = { runOnJS: ReanimatedRexport.runOnJS, handleDismissNotification };
                              set2(withTiming(first, metroImportDefault, "animate-always", fn));
                            }
                          } else {
                            const _Math = Math;
                          }
                          const obj2 = ReanimatedRexport;
                          obj2.runOnJS(PAN_INPUT_RANGE)(false);
                          set = sharedValue.set;
                          const obj3 = spring;
                          const obj5 = { damping: 10, mass: 1, stiffness: 100, velocity: sharedValue1.get() };
                          const result = set(obj3.withSpring(0, obj5, "animate-always"));
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
                        const onEnd = onBeginResult.onUpdate(st).onEnd;
                        onBeginResult.onUpdate(st);
                        ot.__closure = obj5;
                        class Z {
                          constructor(dismissReason) {
                            if (null != dismissReason) {
                              const obj2 = {
                                type: notification.type,
                                guildId,
                                channelId,
                                dismissReason,
                                inAppNotificationId: notification.inAppNotificationId,
                                messageId,
                              };
                              obj = InAppNotificationUtils;
                              obj.trackDismissed(obj2);
                            }
                            const onDismiss = notification.onDismiss;
                            if (onDismiss != null) {
                              onDismiss();
                            }
                          }
                        }
                        ot.__initData = __initData2;
                        const onEndResult = onEnd(ot);
                        onEndResult.onFinalize(InAppNotificationContainerTsx2);
                        function ct() {
                          const value = sharedValue.get();
                          let value2 = sharedValue3.get();
                          const items = [{ translateY: value }];
                          let interpolateResult = value2;
                          if (first) {
                            obj = ReanimatedRexport;
                            interpolateResult = obj.interpolate(value, unpackModuleId, [0.3, 1, 0.3], metroImportAll);
                          }
                          const obj2 = { transform: items, opacity: value2 };
                          items[1] = { scale: interpolateResult };
                          if (first) {
                            const obj3 = ReanimatedRexport;
                            value2 = obj3.interpolate(value, unpackModuleId, [0, 1, 0], metroImportAll);
                          }
                          return obj2;
                        }
                        const obj6 = {
                          notificationGestureY: sharedValue,
                          scale: sharedValue3,
                          initialized,
                          interpolate: tmp(channelId[7]).interpolate,
                          PAN_INPUT_RANGE,
                          extrapolateConfig: sharedValue3,
                        };
                        const useAnimatedStyle = tmp(tmp2[7]).useAnimatedStyle;
                        tmp(channelId[7]);
                        ct.__closure = obj6;
                        ct.__workletHash = 1564072865992;
                        ct.__initData = __initData5;
                        const animatedStyle = useAnimatedStyle(ct);
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
                obj = AnalyticsUtilsDefault;
                obj.track(map1.IN_APP_NOTIFICATION_SHOWN, obj2);
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
        constructor(dismissReason) {
          if (null != dismissReason) {
            const obj2 = {
              type: notification.type,
              guildId,
              channelId,
              dismissReason,
              inAppNotificationId: notification.inAppNotificationId,
              messageId,
            };
            obj = InAppNotificationUtils;
            obj.trackDismissed(obj2);
          }
          const onDismiss = notification.onDismiss;
          if (onDismiss != null) {
            onDismiss();
          }
        }
      }
      cResult[4] = channelId;
      cResult[5] = guildId;
      cResult[6] = messageId;
      cResult[7] = notification;
      cResult[8] = Z;
      tmp20 = Z;
    }
  : (notification) => {
      let setInitialized;
      let str;
      notification = notification.notification;
      let channelType;
      let tmp = closure_16();
      let items = [notification];
      const memo = channelType.useMemo(() => {
        obj = InAppNotificationUtils;
        return obj.extractMetadataFromNotification(notification);
      }, items);
      const guildId = memo.guildId;
      const channelId = memo.channelId;
      const messageId = memo.messageId;
      channelType = memo.channelType;
      obj = notification(channelId[7]);
      const sharedValue = obj.useSharedValue(0);
      let obj2 = notification(channelId[7]);
      const sharedValue1 = obj2.useSharedValue(0);
      let obj3 = notification(channelId[7]);
      const sharedValue2 = obj3.useSharedValue(0);
      let obj4 = notification(channelId[7]);
      const sharedValue3 = obj4.useSharedValue(0);
      const tmp9 = messageId(channelType.useState(false), 2);
      const initialized = tmp9[0];
      MIN_SWIPE_VELOCITY = tmp9[1];
      const tmp11 = messageId(channelType.useState(false), 2);
      const first1 = tmp11[0];
      closure_12 = tmp13;
      let obj5 = notification(channelId[21]);
      const items1 = [sharedValue1];
      const items2 = [notification, guildId, channelId, messageId];
      const stateFromStores = obj5.useStateFromStores(items1, () => sharedValue1.isOpen());
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
          obj = InAppNotificationUtils;
          obj.trackDismissed(obj2);
        }
        const onDismiss = notification.onDismiss;
        if (onDismiss != null) {
          onDismiss();
        }
      }, items2);
      guildId(channelId[23])(() => {
        set = sharedValue3.set;
        obj = timing;
        const fn = function t() {
          obj = notification(channelId[7]);
          return obj.runOnJS(setInitialized)(true);
        };
        fn.__closure = { runOnJS: ReanimatedRexport.runOnJS, setInitialized };
        fn.__workletHash = 14437131800094;
        fn.__initData = __initData;
        ({ runOnJS: ReanimatedRexport.runOnJS, setInitialized });
        const result = set(obj.withTiming(1, obj, "respect-motion-settings", fn));
        return () => {
          obj = notification(channelId[7]);
          return obj.cancelAnimation(sharedValue3);
        };
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
          obj = AnalyticsUtilsDefault;
          obj.track(map1.IN_APP_NOTIFICATION_SHOWN, obj2);
        }
      }, items3);
      const Gesture = notification(channelId[25]).Gesture;
      const PanResult = Gesture.Pan();
      const tmp16 = guildId;
      class Z {
        constructor() {
          const result = sharedValue2.set(sharedValue.get());
          const result1 = sharedValue1.set(0);
          obj = ReanimatedRexport;
          obj.runOnJS(closure_12)(true);
        }
      }
      Z.__closure = {
        startY: sharedValue2,
        notificationGestureY: sharedValue,
        velocityY: sharedValue1,
        runOnJS: notification(channelId[7]).runOnJS,
        setPanning: tmp11[1],
      };
      Z.__workletHash = 12748509853098;
      Z.__initData = __initData9;
      ({
        startY: sharedValue2,
        notificationGestureY: sharedValue,
        velocityY: sharedValue1,
        runOnJS: notification(channelId[7]).runOnJS,
        setPanning: tmp11[1],
      });
      const onBeginResult = PanResult.onBegin(Z);
      class X {
        constructor(translationY) {
          const sum = sharedValue2.get() + translationY.translationY;
          const result = sharedValue.set(Math.min(sum, sharedValue2.get()));
          const result1 = sharedValue1.set(translationY.velocityY);
        }
      }
      X.__closure = { startY: sharedValue2, notificationGestureY: sharedValue, velocityY: sharedValue1 };
      X.__workletHash = 1995603255126;
      X.__initData = __initData8;
      const onUpdateResult = onBeginResult.onUpdate(X);
      class K {
        constructor(translationY) {
          if (Math.abs(sharedValue1.get()) >= c10) {
            if (translationY.translationY <= 0) {
              set2 = sharedValue.set;
              const withTiming = timing.withTiming;
              if (translationY.translationY > 0) {
                first = unpackModuleId[2];
              } else {
                first = unpackModuleId[0];
              }
              const fn = function n(arg0) {
                const tmp = arg0;
                if (tmp) {
                  obj = notification(channelId[7]);
                  obj.runOnJS(handleDismissNotification)("swipe");
                }
              };
              fn.__closure = { runOnJS: ReanimatedRexport.runOnJS, handleDismissNotification };
              fn.__workletHash = 16021757113512;
              fn.__initData = __initData2;
              const obj4 = { runOnJS: ReanimatedRexport.runOnJS, handleDismissNotification };
              set2(withTiming(first, metroImportDefault, "animate-always", fn));
            }
          } else {
            const _Math = Math;
          }
          const obj2 = ReanimatedRexport;
          obj2.runOnJS(closure_12)(false);
          set = sharedValue.set;
          const obj3 = spring;
          const obj5 = { damping: 10, mass: 1, stiffness: 100, velocity: sharedValue1.get() };
          const result = set(obj3.withSpring(0, obj5, "animate-always"));
        }
      }
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
      ({
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
      });
      let fn = function q() {
        obj = ReanimatedRexport;
        obj.runOnJS(closure_12)(false);
      };
      const onEndResult = onUpdateResult.onEnd(K);
      fn.__closure = { runOnJS: notification(channelId[7]).runOnJS, setPanning: tmp11[1] };
      fn.__workletHash = 16271003307198;
      fn.__initData = __initData6;
      ({ runOnJS: notification(channelId[7]).runOnJS, setPanning: tmp11[1] });
      const fn2 = function $() {
        const value = sharedValue.get();
        let value2 = sharedValue3.get();
        const items = [{ translateY: value }];
        let interpolateResult = value2;
        if (first) {
          obj = ReanimatedRexport;
          interpolateResult = obj.interpolate(value, unpackModuleId, [0.3, 1, 0.3], metroImportAll);
        }
        const obj2 = { transform: items, opacity: value2 };
        items[1] = { scale: interpolateResult };
        if (first) {
          const obj3 = ReanimatedRexport;
          value2 = obj3.interpolate(value, unpackModuleId, [0, 1, 0], metroImportAll);
        }
        return obj2;
      };
      const onFinalizeResult = onEndResult.onFinalize(fn);
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
      ({
        notificationGestureY: sharedValue,
        scale: sharedValue3,
        initialized,
        interpolate: notification(channelId[7]).interpolate,
        PAN_INPUT_RANGE: first1,
        extrapolateConfig: sharedValue3,
      });
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
      const OverlayView = notification(channelId[28]).OverlayView;
      const rect = {
        top: true,
        bottom: true,
        left: true,
        right: true,
        style: tmp.safeAreaContainer,
        pointerEvents: "box-none",
        importantForAccessibility: str,
        children: null,
      };
      str = undefined;
      const SafeAreaPaddingView = notification(channelId[29]).SafeAreaPaddingView;
      if (stateFromStores) {
        str = "no-hide-descendants";
      }
      const Provider = tmp3(tmp4[27]).InAppNotificationContext.Provider;
      const GestureDetector = tmp3(tmp4[25]).GestureDetector;
      const items5 = [tmp.animatedContainer, animatedStyle];
      const View = tmp16(tmp4[7]).View;
      return (
        <OverlayView style={sharedValue.absoluteFill} pointerEvents="box-none">
          {null}
        </OverlayView>
      );
    };
let result = size.fileFinishedImporting("modules/in_app_notifications/native/InAppNotificationContainer.tsx");

export default tmp4;
