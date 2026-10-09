// discord_app/modules/quests/native/VideoQuestModal/VideoQuestModal.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ReanimatedRexport from "../../../reanimated/ReanimatedRexport.tsx";
import spring from "../../../../design/animation/reanimated/spring/spring.tsx";
import QuestTypes from "../../QuestTypes.tsx";
import AnalyticsActions from "../../lib/analytics/AnalyticsActions.tsx";
import QuestUtils from "../QuestUtils.native.tsx";
import QuestContentImpressionTracker from "../QuestContentImpressionTracker.native.tsx";
import applyOrientationLock2 from "../../../device/native/applyOrientationLock.tsx";
import QuestDockGestureContext from "../QuestDock/QuestDockGestureContext.tsx";
import VideoQuestModalContextDefault from "VideoQuestModalContext.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, StyleSheet } = get_ActivityIndicator);
let closure_6 = fn(15285).QUEST_DOCK_LANDSCAPE_MEDIA_EXPANDED_HEIGHT;
const AnalyticEvents = fn(1085).AnalyticEvents;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
let c10 = -100;
let c11 = 0.5625;
let top = { mass: 1.9, damping: 18, stiffness: 80, overshootClamping: true };
const VideoQuestModalSteps = { WATCH_VIDEO: 0, [0]: "WATCH_VIDEO", POST_WATCH_VIDEO: 1, [1]: "POST_WATCH_VIDEO" };
const createStyles = fn(5091);
let obj2 = {
  root: { backgroundColor: nativeDefault.colors.BACKGROUND_SCRIM },
  pillarboxed: { alignSelf: "center" },
  wrapper: { flexDirection: "column", flexGrow: 1, flexShrink: 1, zIndex: 1 },
  contentWrapper: { flex: 1 },
  contentBackground: null,
  modalContentWrapper: null,
  backgroundWrapper: null,
};
let obj5 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj5.borderRadius = nativeDefault.radii.lg;
obj5.backgroundColor = nativeDefault.colors.BACKGROUND_BASE_LOWEST;
obj2.contentBackground = obj5;
obj2.modalContentWrapper = { zIndex: 2 };
let obj6 = {};
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj6.borderRadius = nativeDefault.radii.lg;
obj6.flex = 1;
obj6.overflow = "hidden";
obj6.pointerEvents = "none";
obj6.zIndex = 1;
obj2.backgroundWrapper = obj6;
let closure_14 = createStyles.createStyles(obj2);
const __initData = {
  code: "function VideoQuestModalTsx1(){const{withSpring,clamp,postWatchAnimationState,BACKGROUND_ENTRANCE_ANIMATION_SPRING_CONFIG,interpolate,CLOUDS_BACKGROUND_INVISIBLE_OFFSET_Y}=this.__closure;return{opacity:withSpring(clamp(postWatchAnimationState.get(),0,1),BACKGROUND_ENTRANCE_ANIMATION_SPRING_CONFIG),transform:[{translateY:withSpring(interpolate(postWatchAnimationState.get(),[0,1],[CLOUDS_BACKGROUND_INVISIBLE_OFFSET_Y,0]),BACKGROUND_ENTRANCE_ANIMATION_SPRING_CONFIG)}]};}",
};
const __initData2 = {
  code: "function VideoQuestModalTsx2(){const{withSpring,interpolate,postWatchAnimationState,safeAreaInsets,BACKGROUND_ENTRANCE_ANIMATION_SPRING_CONFIG}=this.__closure;return{transform:[{translateY:withSpring(interpolate(postWatchAnimationState.get(),[0,1],[safeAreaInsets.top,0]),BACKGROUND_ENTRANCE_ANIMATION_SPRING_CONFIG)}],opacity:withSpring(postWatchAnimationState.get(),BACKGROUND_ENTRANCE_ANIMATION_SPRING_CONFIG)};}",
};
const __initData3 = {
  code: "function VideoQuestModalTsx3(){const{withSpring,clamp,postWatchAnimationState,BACKGROUND_ENTRANCE_ANIMATION_SPRING_CONFIG,interpolate,CLOUDS_BACKGROUND_INVISIBLE_OFFSET_Y}=this.__closure;return{opacity:withSpring(clamp(postWatchAnimationState.get(),0,1),BACKGROUND_ENTRANCE_ANIMATION_SPRING_CONFIG),transform:[{translateY:withSpring(interpolate(postWatchAnimationState.get(),[0,1],[CLOUDS_BACKGROUND_INVISIBLE_OFFSET_Y,0]),BACKGROUND_ENTRANCE_ANIMATION_SPRING_CONFIG)}]};}",
};
const __initData4 = {
  code: "function VideoQuestModalTsx4(){const{withSpring,interpolate,postWatchAnimationState,safeAreaInsets,BACKGROUND_ENTRANCE_ANIMATION_SPRING_CONFIG}=this.__closure;return{transform:[{translateY:withSpring(interpolate(postWatchAnimationState.get(),[0,1],[safeAreaInsets.top,0]),BACKGROUND_ENTRANCE_ANIMATION_SPRING_CONFIG)}],opacity:withSpring(postWatchAnimationState.get(),BACKGROUND_ENTRANCE_ANIMATION_SPRING_CONFIG)};}",
};
let ReactCompilerGating = fn(558);
let closure_19 = noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function VideoQuestModalContent(sourceQuestContent) {
        let obj = initialStep(quest[9]);
        const cResult = obj.c(73);
        ({ onClose, initialStep } = sourceQuestContent);
        sourceQuestContent = sourceQuestContent.sourceQuestContent;
        const videoQuestModalContext = initialStep(quest[10]).useVideoQuestModalContext();
        quest = videoQuestModalContext.quest;
        const videoSessionId = videoQuestModalContext.videoSessionId;
        const userStatus = quest.userStatus;
        let completedAt;
        if (userStatus != null) {
          completedAt = userStatus.completedAt;
        }
        noop = tmp6;
        if (initialStep != null) {
          const tmp10 = videoSessionId(noop.useState(initialStep), 2);
          const first = tmp10[0];
          closure_6 = tmp10[1];
          [tmp13, AnalyticEvents] = videoSessionId(obj3.useState(false), 2);
          if (cResult[0] === quest.id) {
            if (cResult[1] === sourceQuestContent) {
              if (cResult[2] === videoSessionId) {
                let tmp14 = cResult[3];
              }
              closure_8 = tmp14;
              const tmp16 = closure_14();
              const tmp18 = sourceQuestContent(tmp2[14])(
                obj3.useContext(initialStep(tmp2[13]).QuestDockGestureContext).windowDimensions,
              );
              ({ width, height } = tmp18);
              let bound = null;
              if (tmp18.landscape) {
                bound = null;
                if (!tmp13) {
                  const _Math = Math;
                  const _Math2 = Math;
                  bound = Math.min(width, Math.floor(height * c11));
                }
              }
              if (cResult[4] === bound) {
                if (cResult[5] === tmp16.pillarboxed) {
                  let tmp22 = cResult[6];
                }
                if (bound == null) {
                  bound = width;
                }
                if (cResult[7] === initialStep) {
                  if (cResult[8] === tmp6) {
                    let tmp25 = cResult[9];
                    let tmp26 = cResult[10];
                  }
                  const layoutEffect = obj3.useLayoutEffect(tmp25, tmp26);
                  const _Symbol = Symbol;
                  if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
                    const fn3 = function j() {
                      closure_6(obj.WATCH_VIDEO);
                    };
                    cResult[11] = fn3;
                  }
                  if (cResult[12] !== tmp14) {
                    class J {
                      constructor() {
                        tmp = closure_8(false);
                        tmp2 = closure_6(closure_13.POST_WATCH_VIDEO);
                        return;
                      }
                    }
                    cResult[12] = tmp14;
                    cResult[13] = J;
                  } else {
                    class J {
                      constructor() {
                        tmp = closure_8(false);
                        tmp2 = closure_6(closure_13.POST_WATCH_VIDEO);
                        return;
                      }
                    }
                  }
                  if (first === obj.POST_WATCH_VIDEO) {
                    class J {
                      constructor() {
                        tmp = closure_8(false);
                        tmp2 = closure_6(closure_13.POST_WATCH_VIDEO);
                        return;
                      }
                    }
                  }
                  const sharedValue = initialStep(tmp2[15]).useSharedValue(num15);
                  const tmpResult = initialStep(tmp2[15]);
                  const fn4 = function $() {
                    const obj = { opacity: null, transform: null };
                    const obj2 = spring;
                    obj.opacity = obj2.withSpring(ReanimatedRexport.clamp(sharedValue.get(), 0, 1), closure_12);
                    const obj4 = { translateY: null };
                    const obj5 = spring;
                    const items = [c10, 0];
                    obj4.translateY = obj5.withSpring(
                      ReanimatedRexport.interpolate(sharedValue.get(), [0, 1], items),
                      closure_12,
                    );
                    const items1 = [obj4];
                    obj.transform = items1;
                    return obj;
                  };
                  let obj4 = {
                    withSpring: initialStep(tmp2[16]).withSpring,
                    clamp: initialStep(tmp2[15]).clamp,
                    postWatchAnimationState: sharedValue,
                    BACKGROUND_ENTRANCE_ANIMATION_SPRING_CONFIG: top,
                    interpolate: initialStep(tmp2[15]).interpolate,
                    CLOUDS_BACKGROUND_INVISIBLE_OFFSET_Y,
                  };
                  fn4.__closure = obj4;
                  fn4.__workletHash = 11571705142399;
                  fn4.__initData = __initData;
                  const animatedStyle = initialStep(tmp2[15]).useAnimatedStyle(fn4);
                  const tmp37 = tmp17(tmp2[17])();
                  CLOUDS_BACKGROUND_INVISIBLE_OFFSET_Y = tmp37;
                  const tmpResult3 = initialStep(tmp2[15]);
                  function ee() {
                    const obj = { transform: null, opacity: null };
                    const obj2 = { translateY: null };
                    const obj3 = spring;
                    const items = [top.top, 0];
                    obj2.translateY = obj3.withSpring(
                      ReanimatedRexport.interpolate(sharedValue.get(), [0, 1], items),
                      closure_12,
                    );
                    const items1 = [obj2];
                    obj.transform = items1;
                    obj.opacity = spring.withSpring(sharedValue.get(), closure_12);
                    return obj;
                  }
                  let obj5 = {
                    withSpring: initialStep(tmp2[16]).withSpring,
                    interpolate: initialStep(tmp2[15]).interpolate,
                    postWatchAnimationState: sharedValue,
                    safeAreaInsets: tmp37,
                    BACKGROUND_ENTRANCE_ANIMATION_SPRING_CONFIG: top,
                  };
                  ee.__closure = obj5;
                  ee.__workletHash = 9769051401109;
                  ee.__initData = __initData2;
                  const animatedStyle1 = initialStep(tmp2[15]).useAnimatedStyle(ee);
                  if (cResult[14] === sharedValue) {
                    class J {
                      constructor() {
                        tmp = closure_8(false);
                        tmp2 = closure_6(closure_13.POST_WATCH_VIDEO);
                        return;
                      }
                    }
                    const effect = obj3.useEffect(tmp40, tmp41);
                    if (cResult[18] === tmp22) {
                      class J {
                        constructor() {
                          tmp = closure_8(false);
                          tmp2 = closure_6(closure_13.POST_WATCH_VIDEO);
                          return;
                        }
                      }
                      if (cResult[21] !== height) {
                        class J {
                          constructor() {
                            tmp = closure_8(false);
                            tmp2 = closure_6(closure_13.POST_WATCH_VIDEO);
                            return;
                          }
                        }
                        tmp45[0] = height;
                        cResult[21] = height;
                        cResult[22] = tmp45;
                      } else {
                        class J {
                          constructor() {
                            tmp = closure_8(false);
                            tmp2 = closure_6(closure_13.POST_WATCH_VIDEO);
                            return;
                          }
                        }
                      }
                      if (cResult[23] === tmp16.backgroundWrapper) {
                        class J {
                          constructor() {
                            tmp = closure_8(false);
                            tmp2 = closure_6(closure_13.POST_WATCH_VIDEO);
                            return;
                          }
                        }
                        if (cResult[26] !== tmp37.top) {
                          class J {
                            constructor() {
                              tmp = closure_8(false);
                              tmp2 = closure_6(closure_13.POST_WATCH_VIDEO);
                              return;
                            }
                          }
                          tmp48[0] = tmp37.top;
                          cResult[26] = tmp37.top;
                          cResult[27] = tmp48;
                        } else {
                          class J {
                            constructor() {
                              tmp = closure_8(false);
                              tmp2 = closure_6(closure_13.POST_WATCH_VIDEO);
                              return;
                            }
                          }
                        }
                        if (cResult[28] === tmp16.contentBackground) {
                          class J {
                            constructor() {
                              tmp = closure_8(false);
                              tmp2 = closure_6(closure_13.POST_WATCH_VIDEO);
                              return;
                            }
                          }
                          if (cResult[31] === animatedStyle1) {
                            class J {
                              constructor() {
                                tmp = closure_8(false);
                                tmp2 = closure_6(closure_13.POST_WATCH_VIDEO);
                                return;
                              }
                            }
                            const _Symbol2 = Symbol;
                            if (cResult[34] === Symbol.for("react.memo_cache_sentinel")) {
                              class J {
                                constructor() {
                                  tmp = closure_8(false);
                                  tmp2 = closure_6(closure_13.POST_WATCH_VIDEO);
                                  return;
                                }
                              }
                              const tmp56 = closure_8(tmp17(tmp2[19]), { align: "top" });
                              cResult[34] = tmp56;
                              const tmp55 = tmp56;
                            } else {
                              class J {
                                constructor() {
                                  tmp = closure_8(false);
                                  tmp2 = closure_6(closure_13.POST_WATCH_VIDEO);
                                  return;
                                }
                              }
                            }
                            if (cResult[35] !== animatedStyle) {
                              class J {
                                constructor() {
                                  tmp = closure_8(false);
                                  tmp2 = closure_6(closure_13.POST_WATCH_VIDEO);
                                  return;
                                }
                              }
                              const obj6 = { style: animatedStyle, children: tmp55 };
                              const tmp58 = closure_8(tmp17(tmp2[18]), obj6);
                              cResult[35] = animatedStyle;
                              cResult[36] = tmp58;
                            } else {
                              class J {
                                constructor() {
                                  tmp = closure_8(false);
                                  tmp2 = closure_6(closure_13.POST_WATCH_VIDEO);
                                  return;
                                }
                              }
                            }
                            if (cResult[37] === tmp46) {
                              class J {
                                constructor() {
                                  tmp = closure_8(false);
                                  tmp2 = closure_6(closure_13.POST_WATCH_VIDEO);
                                  return;
                                }
                              }
                            }
                            const obj7 = { style: tmp46, children: null };
                            let items = [tmp49, tmp52, tmp57];
                            obj7.children = items;
                            const tmp62 = sharedValue(first, obj7);
                            cResult[37] = tmp46;
                            cResult[38] = tmp49;
                            cResult[39] = tmp52;
                            cResult[40] = tmp57;
                            cResult[41] = tmp62;
                          }
                          const obj8 = { style: null };
                          let items1 = [tmp16.contentBackground, animatedStyle1];
                          obj8.style = items1;
                          const tmp54 = closure_8(tmp17(tmp2[18]), obj8);
                          cResult[31] = animatedStyle1;
                          cResult[32] = tmp16.contentBackground;
                          cResult[33] = tmp54;
                        }
                        const obj9 = { style: null };
                        const items2 = [tmp16.contentBackground, tmp48];
                        obj9.style = items2;
                        const tmp51 = closure_8(tmp17(tmp2[18]), obj9);
                        cResult[28] = tmp16.contentBackground;
                        cResult[29] = tmp48;
                        cResult[30] = tmp51;
                      }
                      const items3 = [tmp16.backgroundWrapper, tmp45];
                      cResult[23] = tmp16.backgroundWrapper;
                      cResult[24] = tmp45;
                      cResult[25] = items3;
                    }
                    const items4 = [tmp16.modalContentWrapper, tmp22];
                    cResult[18] = tmp22;
                    cResult[19] = tmp16.modalContentWrapper;
                    cResult[20] = items4;
                  }
                  function te() {
                    let num = 0;
                    if (first === obj.POST_WATCH_VIDEO) {
                      num = 1;
                    }
                    const result = sharedValue.set(num);
                  }
                  const items5 = [sharedValue, first];
                  cResult[14] = sharedValue;
                  cResult[15] = first;
                  cResult[16] = te;
                  cResult[17] = items5;
                  tmp40 = te;
                  tmp41 = items5;
                  const tmpResult4 = initialStep(tmp2[15]);
                }
                const fn2 = function q() {
                  let tmp = closure_4;
                  if (closure_4) {
                    tmp = null == initialStep;
                  }
                  if (tmp) {
                    closure_6(obj.POST_WATCH_VIDEO);
                  }
                };
                const items6 = [tmp6, initialStep];
                cResult[7] = initialStep;
                cResult[8] = tmp6;
                cResult[9] = fn2;
                cResult[10] = items6;
                tmp26 = items6;
                tmp25 = fn2;
              }
              let tmp23 = null;
              if (null != bound) {
                class J {
                  constructor() {
                    tmp = closure_8(false);
                    tmp2 = closure_6(closure_13.POST_WATCH_VIDEO);
                    return;
                  }
                }
                tmp24[0] = tmp16.pillarboxed;
                const obj10 = { width: bound };
                tmp24[1] = obj10;
                tmp23 = tmp24;
              }
              cResult[4] = bound;
              cResult[5] = tmp16.pillarboxed;
              cResult[6] = tmp23;
              tmp22 = tmp23;
            }
          }
          const fn = function l(arg0) {
            const applyOrientationLock = applyOrientationLock2.applyOrientationLock;
            if (arg0) {
              applyOrientationLock("LANDSCAPE");
            } else {
              applyOrientationLock("PORTRAIT");
            }
            closure_1_7(arg0);
            const obj2 = {
              questId: quest.id,
              event: arg0
                ? AnalyticEvents.QUEST_VIDEO_FULLSCREEN_ENTERED
                : AnalyticEvents.QUEST_VIDEO_FULLSCREEN_EXITED,
              properties: { video_session_id: videoSessionId },
              sourceQuestContent,
            };
            AnalyticsActions.trackQuestEvent(obj2);
            const obj3 = { video_session_id: videoSessionId };
          };
          cResult[0] = quest.id;
          cResult[1] = sourceQuestContent;
          cResult[2] = videoSessionId;
          cResult[3] = fn;
          tmp14 = fn;
          const tmp12 = videoSessionId(obj3.useState(false), 2);
        } else {
          class J {
            constructor() {
              tmp = closure_8(false);
              tmp2 = closure_6(closure_13.POST_WATCH_VIDEO);
              return;
            }
          }
        }
        let obj2 = initialStep(quest[10]);
      }
    : function VideoQuestModalContent(sourceQuestContent) {
        ({ onClose, initialStep } = sourceQuestContent);
        sourceQuestContent = sourceQuestContent.sourceQuestContent;
        let obj = initialStep(quest[10]);
        const videoQuestModalContext = obj.useVideoQuestModalContext();
        quest = videoQuestModalContext.quest;
        const videoSessionId = videoQuestModalContext.videoSessionId;
        const userStatus = quest.userStatus;
        let completedAt;
        if (userStatus != null) {
          completedAt = userStatus.completedAt;
        }
        noop = tmp5;
        if (initialStep != null) {
          const tmp9 = videoSessionId(noop.useState(initialStep), 2);
          const first = tmp9[0];
          closure_6 = tmp9[1];
          [tmp12, AnalyticEvents] = videoSessionId(obj2.useState(false), 2);
          let items = [quest.id, videoSessionId, sourceQuestContent];
          const setIsFullscreen = obj2.useCallback((arg0) => {
            const applyOrientationLock = applyOrientationLock2.applyOrientationLock;
            if (arg0) {
              applyOrientationLock("LANDSCAPE");
            } else {
              applyOrientationLock("PORTRAIT");
            }
            closure_1_7(arg0);
            const obj2 = {
              questId: quest.id,
              event: arg0
                ? AnalyticEvents.QUEST_VIDEO_FULLSCREEN_ENTERED
                : AnalyticEvents.QUEST_VIDEO_FULLSCREEN_EXITED,
              properties: { video_session_id: videoSessionId },
              sourceQuestContent,
            };
            AnalyticsActions.trackQuestEvent(obj2);
            const obj3 = { video_session_id: videoSessionId };
          }, items);
          const tmp15 = closure_14();
          const pillarboxed = tmp15;
          const tmp17 = sourceQuestContent(tmp2[14])(
            obj2.useContext(initialStep(tmp2[13]).QuestDockGestureContext).windowDimensions,
          );
          ({ width, height } = tmp17);
          let bound = null;
          if (tmp17.landscape) {
            bound = null;
            if (!tmp12) {
              const _Math = Math;
              const _Math2 = Math;
              bound = Math.min(width, Math.floor(height * sharedValue));
            }
          }
          let items1 = [bound, tmp15.pillarboxed];
          const items2 = [tmp5, initialStep];
          const memo = obj2.useMemo(() => {
            let tmp2 = null;
            if (null != bound) {
              const items = [pillarboxed.pillarboxed];
              const obj = { width: tmp };
              items[1] = obj;
              tmp2 = items;
            }
            return tmp2;
          }, items1);
          const layoutEffect = obj2.useLayoutEffect(() => {
            let tmp = closure_4;
            if (closure_4) {
              tmp = null == initialStep;
            }
            if (tmp) {
              closure_6(obj.POST_WATCH_VIDEO);
            }
          }, items2);
          const items3 = [setIsFullscreen];
          const callback1 = obj2.useCallback(() => {
            closure_6(obj.WATCH_VIDEO);
          }, []);
          const callback2 = obj2.useCallback(() => {
            callback(false);
            closure_6(obj.POST_WATCH_VIDEO);
          }, items3);
          const tmp11 = videoSessionId(obj2.useState(false), 2);
          let num2 = 0;
          if (first === obj.POST_WATCH_VIDEO) {
            num2 = 1;
          }
          sharedValue = initialStep(tmp2[15]).useSharedValue(num2);
          const tmpResult = initialStep(tmp2[15]);
          class H {
            constructor() {
              obj = { opacity: null, transform: null };
              obj2 = closure_0(closure_2[16]);
              obj3 = closure_0(closure_2[15]);
              obj.opacity = obj2.withSpring(obj3.clamp(closure_11.get(), 0, 1), closure_12);
              obj1 = { translateY: null };
              obj5 = closure_0(closure_2[16]);
              obj6 = closure_0(closure_2[15]);
              items = [,];
              items[0] = c10;
              items[1] = 0;
              obj1.translateY = obj5.withSpring(obj6.interpolate(closure_11.get(), [0, 1], items), closure_12);
              items1 = [];
              items1[0] = obj1;
              obj.transform = items1;
              return obj;
            }
          }
          let obj3 = {
            withSpring: initialStep(tmp2[16]).withSpring,
            clamp: initialStep(tmp2[15]).clamp,
            postWatchAnimationState: sharedValue,
            BACKGROUND_ENTRANCE_ANIMATION_SPRING_CONFIG: top,
            interpolate: initialStep(tmp2[15]).interpolate,
            CLOUDS_BACKGROUND_INVISIBLE_OFFSET_Y: bound,
          };
          H.__closure = obj3;
          H.__workletHash = 15031671874877;
          H.__initData = __initData3;
          const animatedStyle = initialStep(tmp2[15]).useAnimatedStyle(H);
          const tmp31 = sourceQuestContent(tmp2[17])();
          top = tmp31;
          const tmpResult3 = initialStep(tmp2[15]);
          class K {
            constructor() {
              obj = { transform: null, opacity: null };
              obj1 = { translateY: null };
              obj3 = closure_0(closure_2[16]);
              obj4 = closure_0(closure_2[15]);
              items = [,];
              items[0] = closure_12.top;
              items[1] = 0;
              obj1.translateY = obj3.withSpring(obj4.interpolate(closure_11.get(), [0, 1], items), closure_12);
              items1 = [];
              items1[0] = obj1;
              obj.transform = items1;
              obj5 = closure_0(closure_2[16]);
              obj.opacity = obj5.withSpring(closure_11.get(), closure_12);
              return obj;
            }
          }
          let obj4 = {
            withSpring: initialStep(tmp2[16]).withSpring,
            interpolate: initialStep(tmp2[15]).interpolate,
            postWatchAnimationState: sharedValue,
            safeAreaInsets: tmp31,
            BACKGROUND_ENTRANCE_ANIMATION_SPRING_CONFIG: top,
          };
          K.__closure = obj4;
          K.__workletHash = 11085432861267;
          K.__initData = __initData4;
          const items4 = [sharedValue, first];
          const animatedStyle1 = initialStep(tmp2[15]).useAnimatedStyle(K);
          const effect = obj2.useEffect(() => {
            let num = 0;
            if (first === obj.POST_WATCH_VIDEO) {
              num = 1;
            }
            const result = sharedValue.set(num);
          }, items4);
          let obj5 = { style: tmp15.root, children: null };
          const obj6 = { style: null, children: null };
          const items5 = [tmp15.modalContentWrapper, memo];
          obj6.style = items5;
          const obj7 = { style: null, children: null };
          const items6 = [tmp15.backgroundWrapper];
          const obj8 = { height };
          items6[1] = obj8;
          obj7.style = items6;
          const tmpResult4 = initialStep(tmp2[15]);
          const obj9 = { style: null };
          const items7 = [tmp15.contentBackground];
          const obj10 = { top: tmp31.top };
          items7[1] = obj10;
          obj9.style = items7;
          const items8 = [setIsFullscreen(sourceQuestContent(tmp2[18]), obj9), ,];
          const obj11 = { style: null };
          const items9 = [tmp15.contentBackground, animatedStyle1];
          obj11.style = items9;
          items8[1] = setIsFullscreen(sourceQuestContent(tmp2[18]), obj11);
          const obj12 = { style: animatedStyle, children: null };
          const tmp16Result = sourceQuestContent(tmp2[18]);
          obj12.children = setIsFullscreen(sourceQuestContent(tmp2[19]), { align: "top" });
          items8[2] = setIsFullscreen(sourceQuestContent(tmp2[18]), obj12);
          obj7.children = items8;
          const items10 = [pillarboxed(first, obj7)];
          const obj13 = { top: true, style: null, children: null };
          const items11 = [tmp15.wrapper];
          const obj14 = { height };
          items11[1] = obj14;
          obj13.style = items11;
          const obj15 = { style: tmp15.contentWrapper, children: null };
          let tmp35Result = first === tmp25.WATCH_VIDEO;
          if (tmp35Result) {
            if (bound == null) {
              bound = width;
            }
            const obj16 = {
              contentWidth: bound,
              isFullscreen: tmp12,
              onNavigateToPostWatchVideo: callback2,
              onClose,
              onEnd: callback2,
              setIsFullscreen,
              sourceQuestContent,
            };
            tmp35Result = tmp35(tmp16(tmp2[20]), obj16);
            const tmp16Result4 = tmp16(tmp2[20]);
          }
          const items12 = [tmp35Result];
          let tmp35Result2 = first === tmp25.POST_WATCH_VIDEO;
          if (tmp35Result2) {
            const obj17 = { onClose, onRestartVideo: callback1, sourceQuestContent };
            tmp35Result2 = tmp35(tmp16(tmp2[21]), obj17);
          }
          items12[1] = tmp35Result2;
          obj15.children = items12;
          obj13.children = pillarboxed(first, obj15);
          items10[1] = setIsFullscreen(initialStep(tmp2[22]).SafeAreaPaddingView, obj13);
          obj6.children = items10;
          obj5.children = pillarboxed(tmp16Result, obj6);
          return setIsFullscreen(first, obj5);
        }
      },
);
const watch_mobile_video_quest = "watch_mobile_video_quest";
ReactCompilerGating = fn(558);
let obj4 = { backgroundColor: nativeDefault.colors.BACKGROUND_SCRIM };
const size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/VideoQuestModal/VideoQuestModal.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function VideoQuestModal(questContentPosition) {
        const cResult = questContentPosition(videoSessionId[9]).c(14);
        questContentPosition = questContentPosition.questContentPosition;
        const onClose = questContentPosition.onClose;
        videoSessionId = questContentPosition.videoSessionId;
        const initialStep = questContentPosition.initialStep;
        const sourceQuestContent = questContentPosition.sourceQuestContent;
        if (cResult[0] !== onClose) {
          const fn = function o() {
            const result = QuestUtils.showQuestUnavailableAlert();
            onClose();
          };
          cResult[0] = onClose;
          cResult[1] = fn;
          let tmp4 = fn;
        } else {
          tmp4 = cResult[1];
        }
        let obj = questContentPosition(videoSessionId[9]);
        const nonNullableQuest = questContentPosition(videoSessionId[24]).useNonNullableQuest(
          questContentPosition.questId,
          tmp4,
        );
        if (null == nonNullableQuest) {
          const _Symbol2 = Symbol;
          if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
            class T {
              constructor() {
                obj = questContentPosition(videoSessionId[11]);
                applyOrientationLockResult = obj.applyOrientationLock("PORTRAIT");
                return questContentPosition(videoSessionId[11]).restoreDefaultOrientationLock;
              }
            }
            const items = [];
            cResult[10] = T;
            cResult[11] = items;
            let tmp11 = items;
          } else {
            class T {
              constructor() {
                obj = questContentPosition(videoSessionId[11]);
                applyOrientationLockResult = obj.applyOrientationLock("PORTRAIT");
                return questContentPosition(videoSessionId[11]).restoreDefaultOrientationLock;
              }
            }
            tmp11 = cResult[11];
          }
          const layoutEffect = sourceQuestContent.useLayoutEffect(T, tmp11);
          if (null != nonNullableQuest) {
            class T {
              constructor() {
                obj = questContentPosition(videoSessionId[11]);
                applyOrientationLockResult = obj.applyOrientationLock("PORTRAIT");
                return questContentPosition(videoSessionId[11]).restoreDefaultOrientationLock;
              }
            }
            if (null != null) {
              class T {
                constructor() {
                  obj = questContentPosition(videoSessionId[11]);
                  applyOrientationLockResult = obj.applyOrientationLock("PORTRAIT");
                  return questContentPosition(videoSessionId[11]).restoreDefaultOrientationLock;
                }
              }
            }
          }
          return null;
        } else {
          class T {
            constructor() {
              obj = questContentPosition(videoSessionId[11]);
              applyOrientationLockResult = obj.applyOrientationLock("PORTRAIT");
              return questContentPosition(videoSessionId[11]).restoreDefaultOrientationLock;
            }
          }
          const _Symbol = Symbol;
          if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
            class T {
              constructor() {
                obj = questContentPosition(videoSessionId[11]);
                applyOrientationLockResult = obj.applyOrientationLock("PORTRAIT");
                return questContentPosition(videoSessionId[11]).restoreDefaultOrientationLock;
              }
            }
            cResult[2] = S;
          } else {
            class T {
              constructor() {
                obj = questContentPosition(videoSessionId[11]);
                applyOrientationLockResult = obj.applyOrientationLock("PORTRAIT");
                return questContentPosition(videoSessionId[11]).restoreDefaultOrientationLock;
              }
            }
          }
          if (cResult[3] === initialStep) {
            class T {
              constructor() {
                obj = questContentPosition(videoSessionId[11]);
                applyOrientationLockResult = obj.applyOrientationLock("PORTRAIT");
                return questContentPosition(videoSessionId[11]).restoreDefaultOrientationLock;
              }
            }
          }
          const obj2 = {};
          let obj3 = {
            fullscreen: true,
            headerLeft: S,
            render() {
              const obj = { value: { quest: nonNullableQuest, videoSessionId }, children: null };
              const obj3 = {
                expandedHeight,
                children: closure_2_8(QuestContentImpressionTracker.BillableAdPlacementImpressionTrackerNative, {
                  overrideVisibility: true,
                  questContent: QuestTypes.QuestContent.VIDEO_MODAL_MOBILE,
                  questOrQuests: nonNullableQuest,
                  questContentPosition,
                  sourceQuestContent,
                  children: function renderVideoQuestModal() {
                    return closure_2_8(closure_2_19, { initialStep, onClose, sourceQuestContent });
                  },
                }),
              };
              obj.children = closure_2_8(QuestDockGestureContext.QuestDockGestureContextProvider, obj3);
              return closure_2_8(VideoQuestModalContextDefault.Provider, obj);
            },
          };
          obj2[watch_mobile_video_quest] = obj3;
          cResult[3] = initialStep;
          cResult[4] = onClose;
          cResult[5] = nonNullableQuest;
          cResult[6] = questContentPosition;
          cResult[7] = sourceQuestContent;
          cResult[8] = videoSessionId;
          cResult[9] = obj2;
        }
        const tmpResult = questContentPosition(videoSessionId[24]);
      }
    : function VideoQuestModal(questContentPosition) {
        questContentPosition = questContentPosition.questContentPosition;
        const onClose = questContentPosition.onClose;
        const videoSessionId = questContentPosition.videoSessionId;
        const initialStep = questContentPosition.initialStep;
        const sourceQuestContent = questContentPosition.sourceQuestContent;
        const items = [onClose];
        const callback = sourceQuestContent.useCallback(() => {
          const result = QuestUtils.showQuestUnavailableAlert();
          onClose();
        }, items);
        const nonNullableQuest = questContentPosition(videoSessionId[24]).useNonNullableQuest(
          questContentPosition.questId,
          callback,
        );
        const items1 = [
          onClose,
          nonNullableQuest,
          videoSessionId,
          questContentPosition,
          initialStep,
          sourceQuestContent,
        ];
        const memo = sourceQuestContent.useMemo(() => {
          let tmp = null;
          if (null != nonNullableQuest) {
            let obj = {};
            const obj2 = {
              fullscreen: true,
              headerLeft() {
                return null;
              },
              render() {
                const obj = { value: { quest: questOrQuests, videoSessionId }, children: null };
                const obj3 = {
                  expandedHeight,
                  children: closure_2_8(
                    questContentPosition(videoSessionId[25]).BillableAdPlacementImpressionTrackerNative,
                    {
                      overrideVisibility: true,
                      questContent: questContentPosition(videoSessionId[26]).QuestContent.VIDEO_MODAL_MOBILE,
                      questOrQuests,
                      questContentPosition,
                      sourceQuestContent,
                      children: function renderVideoQuestModal() {
                        return closure_2_8(closure_2_19, { initialStep, onClose, sourceQuestContent });
                      },
                    },
                  ),
                };
                obj.children = closure_2_8(
                  questContentPosition(videoSessionId[13]).QuestDockGestureContextProvider,
                  obj3,
                );
                return closure_2_8(onClose(videoSessionId[10]).Provider, obj);
              },
            };
            obj[watch_mobile_video_quest] = obj2;
            tmp = obj;
          }
          return tmp;
        }, items1);
        const layoutEffect = sourceQuestContent.useLayoutEffect(() => {
          questContentPosition(videoSessionId[11]).applyOrientationLock("PORTRAIT");
          return questContentPosition(videoSessionId[11]).restoreDefaultOrientationLock;
        }, []);
        let tmp7 = null;
        if (null != nonNullableQuest) {
          tmp7 = null;
          if (null != memo) {
            let obj2 = { hideTitle: true, initialRouteName: watch_mobile_video_quest, screens: memo };
            tmp7 = closure_8(questContentPosition(videoSessionId[27]).Modal, obj2);
          }
        }
        return tmp7;
      },
);
export { VideoQuestModalSteps };
