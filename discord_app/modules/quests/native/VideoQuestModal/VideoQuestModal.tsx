// === Module 14659: VideoQuestModalSteps ===

// Module 14659 (VideoQuestModalSteps)
import ThemesDefault from "Themes" /* 712 */;
import closure_3 from "_slicedToArray" /* 32 */;
import importAllResult from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import { AnalyticEvents } from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4446 */;

const require = arg1;
let c4 = importAllResult;
({ View: c5, StyleSheet } = get_ActivityIndicator);
({ jsx: error, jsxs: closure_8 } = jsxProd);
let closure_9 = { mass: 1.9, damping: 18, stiffness: 80, overshootClamping: true };
let obj = { WATCH_VIDEO: 0, [0]: "WATCH_VIDEO", POST_WATCH_VIDEO: 1, [1]: "POST_WATCH_VIDEO" };
obj = { root: { backgroundColor: ThemesDefault.colors.BACKGROUND_SCRIM }, pillarboxed: { alignSelf: "center" }, wrapper: { flexDirection: "column", flexGrow: 1, flexShrink: 1, zIndex: 1 }, contentWrapper: { flex: 1 }, contentBackground: null, modalContentWrapper: null, backgroundWrapper: null };
createCacheKey = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
createCacheKey.borderRadius = ThemesDefault.radii.lg;
createCacheKey.backgroundColor = ThemesDefault.colors.BACKGROUND_BASE_LOWEST;
obj[4] = createCacheKey;
obj[5] = { zIndex: 2 };
let obj3 = {};
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj3.borderRadius = ThemesDefault.radii.lg;
obj3.flex = 1;
obj3.overflow = "hidden";
obj3.pointerEvents = "none";
obj3.zIndex = 1;
obj[6] = obj3;
let closure_11 = createCacheKey.createStyles(obj);
let closure_12 = { code: "function VideoQuestModalTsx1(){const{withSpring,clamp,postWatchAnimationState,BACKGROUND_ENTRANCE_ANIMATION_SPRING_CONFIG,interpolate,CLOUDS_BACKGROUND_INVISIBLE_OFFSET_Y}=this.__closure;return{opacity:withSpring(clamp(postWatchAnimationState.get(),0,1),BACKGROUND_ENTRANCE_ANIMATION_SPRING_CONFIG),transform:[{translateY:withSpring(interpolate(postWatchAnimationState.get(),[0,1],[CLOUDS_BACKGROUND_INVISIBLE_OFFSET_Y,0]),BACKGROUND_ENTRANCE_ANIMATION_SPRING_CONFIG)}]};}" };
let closure_13 = { code: "function VideoQuestModalTsx2(){const{withSpring,interpolate,postWatchAnimationState,safeAreaInsets,BACKGROUND_ENTRANCE_ANIMATION_SPRING_CONFIG}=this.__closure;return{transform:[{translateY:withSpring(interpolate(postWatchAnimationState.get(),[0,1],[safeAreaInsets.top,0]),BACKGROUND_ENTRANCE_ANIMATION_SPRING_CONFIG)}],opacity:withSpring(postWatchAnimationState.get(),BACKGROUND_ENTRANCE_ANIMATION_SPRING_CONFIG)};}" };
let closure_14 = importAllResult.memo((sourceQuestContent) => {
  ({ onClose, initialStep } = sourceQuestContent);
  sourceQuestContent = sourceQuestContent.sourceQuestContent;
  obj = initialStep(quest[7]);
  const videoQuestModalContext = obj.useVideoQuestModalContext();
  quest = videoQuestModalContext.quest;
  const videoSessionId = videoQuestModalContext.videoSessionId;
  const userStatus = quest.userStatus;
  let completedAt;
  if (userStatus != null) {
    completedAt = userStatus.completedAt;
  }
  obj1 = importAllResult;
  if (initialStep != null) {
    const tmp9 = videoSessionId(importAllResult.useState(initialStep), 2);
    const first = tmp9[0];
    closure_6 = tmp9[1];
    [tmp12, closure_7] = videoSessionId(obj1.useState(false), 2);
    let items = [quest.id, videoSessionId, sourceQuestContent];
    const callback = obj1.useCallback((arg0) => {
      const applyOrientationLock = initialStep(quest[8]).applyOrientationLock;
      if (arg0) {
        applyOrientationLock("LANDSCAPE");
      } else {
        applyOrientationLock("PORTRAIT");
      }
      callback2(arg0);
      obj = initialStep(quest[9]);
      obj = { questId: quest.id, event: arg0 ? tmp5.QUEST_VIDEO_FULLSCREEN_ENTERED : tmp5.QUEST_VIDEO_FULLSCREEN_EXITED, properties: obj, sourceQuestContent };
      obj = { video_session_id: videoSessionId };
      obj.trackQuestEvent(obj);
    }, items);
    const tmp15 = sharedValue();
    closure_9 = tmp15;
    const tmp17 = sourceQuestContent(tmp2[11])(obj1.useContext(tmp(tmp2[10]).QuestDockGestureContext).windowDimensions);
    ({ width, height } = tmp17);
    let bound = null;
    if (tmp17.landscape) {
      bound = null;
      if (!tmp12) {
        const _Math = Math;
        const _Math2 = Math;
        bound = Math.min(width, Math.floor(0.5625 * height));
      }
    }
    let items1 = [bound, tmp15.pillarboxed];
    const items2 = [tmp5, initialStep];
    const memo = obj1.useMemo(() => {
      let tmp2 = null;
      if (null != bound) {
        const items = [pillarboxed.pillarboxed, ];
        obj = { width: null };
        obj[0] = tmp;
        items[1] = obj;
        tmp2 = items;
      }
      return tmp2;
    }, items1);
    const layoutEffect = obj1.useLayoutEffect(() => {
      let tmp = closure_4;
      if (closure_4) {
        tmp = null == initialStep;
      }
      if (tmp) {
        callback(bound.POST_WATCH_VIDEO);
      }
    }, items2);
    const items3 = [callback];
    const callback1 = obj1.useCallback(() => {
      callback(bound.WATCH_VIDEO);
    }, []);
    const callback2 = obj1.useCallback(() => {
      callback(false);
      callback(bound.POST_WATCH_VIDEO);
    }, items3);
    let tmpResult = tmp(tmp2[12]);
    let num3 = 0;
    if (first === bound.POST_WATCH_VIDEO) {
      num3 = 1;
    }
    sharedValue = tmpResult.useSharedValue(num3);
    tmpResult = tmp(tmp2[12]);
    class L {
      constructor() {
        obj = { opacity: null, transform: null };
        obj2 = initialStep(quest[13]);
        obj3 = initialStep(quest[12]);
        obj[0] = obj2.withSpring(obj3.clamp(closure_11.get(), 0, 1), closure_9);
        obj = { translateY: null };
        obj5 = initialStep(quest[13]);
        obj6 = initialStep(quest[12]);
        obj[0] = obj5.withSpring(obj6.interpolate(closure_11.get(), [0, 1], [-100, 0]), closure_9);
        items = [];
        items[0] = obj;
        obj[1] = items;
        return obj;
      }
    }
    obj = { withSpring: null, clamp: null, postWatchAnimationState: null, BACKGROUND_ENTRANCE_ANIMATION_SPRING_CONFIG: null, interpolate: null, CLOUDS_BACKGROUND_INVISIBLE_OFFSET_Y: -100 };
    obj[0] = tmp(tmp2[13]).withSpring;
    obj[1] = tmp(tmp2[12]).clamp;
    obj[2] = sharedValue;
    obj[3] = closure_9;
    obj[4] = tmp(tmp2[12]).interpolate;
    L.__closure = obj;
    L.__workletHash = 11571705142399;
    L.__initData = closure_12;
    const animatedStyle = tmpResult.useAnimatedStyle(L);
    const tmp29 = sourceQuestContent(tmp2[14])();
    closure_12 = tmp29;
    const tmp11 = videoSessionId(obj1.useState(false), 2);
    class U {
      constructor() {
        obj = { transform: null, opacity: null };
        obj = { translateY: null };
        obj3 = initialStep(quest[13]);
        obj4 = initialStep(quest[12]);
        items = [, ];
        items[0] = closure_12.top;
        items[1] = 0;
        obj[0] = obj3.withSpring(obj4.interpolate(closure_11.get(), [0, 1], items), closure_9);
        items1 = [];
        items1[0] = obj;
        obj[0] = items1;
        obj5 = initialStep(quest[13]);
        obj[1] = obj5.withSpring(closure_11.get(), closure_9);
        return obj;
      }
    }
    obj = { withSpring: null, interpolate: null, postWatchAnimationState: null, safeAreaInsets: null, BACKGROUND_ENTRANCE_ANIMATION_SPRING_CONFIG: null };
    obj[0] = tmp(tmp2[13]).withSpring;
    obj[1] = tmp(tmp2[12]).interpolate;
    obj[2] = sharedValue;
    obj[3] = tmp29;
    obj[4] = closure_9;
    U.__closure = obj;
    U.__workletHash = 9769051401109;
    U.__initData = closure_13;
    const items4 = [sharedValue, first];
    const animatedStyle1 = tmp(tmp2[12]).useAnimatedStyle(U);
    const effect = obj1.useEffect(() => {
      let num = 0;
      if (first === bound.POST_WATCH_VIDEO) {
        num = 1;
      }
      const result = sharedValue.set(num);
    }, items4);
    obj1 = { style: null, children: null };
    obj1[0] = tmp15.root;
    let obj2 = { style: null, children: null };
    const items5 = [tmp15.modalContentWrapper, memo];
    obj2[0] = items5;
    let obj3 = { style: null, children: null };
    const items6 = [tmp15.backgroundWrapper, ];
    let obj4 = { height: null };
    obj4[0] = height;
    items6[1] = obj4;
    obj3[0] = items6;
    let tmp16Result = tmp16(tmp2[15]);
    let obj5 = { style: null };
    const items7 = [tmp15.contentBackground, ];
    const obj6 = { top: null };
    obj6[0] = tmp29.top;
    items7[1] = obj6;
    obj5[0] = items7;
    const items8 = [callback(sourceQuestContent(tmp2[15]), obj5), , ];
    const obj7 = { style: null };
    const items9 = [tmp15.contentBackground, animatedStyle1];
    obj7[0] = items9;
    items8[1] = callback(sourceQuestContent(tmp2[15]), obj7);
    const obj8 = { style: null, children: null };
    obj8[0] = animatedStyle;
    tmp16Result = tmp16(tmp2[15]);
    obj8[1] = callback(sourceQuestContent(tmp2[16]), { align: "top" });
    items8[2] = callback(tmp16Result, obj8);
    obj3[1] = items8;
    const items10 = [callback(first, obj3), ];
    const obj9 = { top: true, style: null, children: null };
    const items11 = [tmp15.wrapper, ];
    const obj10 = { height: null };
    obj10[0] = height;
    items11[1] = obj10;
    obj9[1] = items11;
    const obj11 = { style: null, children: null };
    obj11[0] = tmp15.contentWrapper;
    let tmp33Result = first === tmp24.WATCH_VIDEO;
    if (tmp33Result) {
      if (bound == null) {
        bound = width;
      }
      const obj12 = { contentWidth: null, isFullscreen: null, onNavigateToPostWatchVideo: null, onClose: null, onEnd: null, setIsFullscreen: null, sourceQuestContent: null };
      obj12[0] = bound;
      obj12[1] = tmp12;
      obj12[2] = callback2;
      obj12[3] = onClose;
      obj12[4] = callback2;
      obj12[5] = callback;
      obj12[6] = sourceQuestContent;
      tmp33Result = tmp33(tmp16(tmp2[18]), obj12);
      const tmp16Result1 = tmp16(tmp2[18]);
    }
    const items12 = [tmp33Result, ];
    tmp33Result = first === tmp24.POST_WATCH_VIDEO;
    if (tmp33Result) {
      const obj13 = { onClose: null, onRestartVideo: null, sourceQuestContent: null };
      obj13[0] = onClose;
      obj13[1] = callback1;
      obj13[2] = sourceQuestContent;
      tmp33Result = tmp33(tmp16(tmp2[19]), obj13);
    }
    items12[1] = tmp33Result;
    obj11[1] = items12;
    obj9[2] = callback(first, obj11);
    items10[1] = callback(tmp(tmp2[17]).SafeAreaPaddingView, obj9);
    obj2[1] = items10;
    obj1[1] = callback(tmp16Result, obj2);
    return callback(first, obj1);
  }
});
const watch_mobile_video_quest = "watch_mobile_video_quest";
let obj1 = { backgroundColor: ThemesDefault.colors.BACKGROUND_SCRIM };
const memoResult = importAllResult.memo(function VideoQuestModal(questContentPosition) {
  questContentPosition = questContentPosition.questContentPosition;
  const onClose = questContentPosition.onClose;
  const videoSessionId = questContentPosition.videoSessionId;
  const initialStep = questContentPosition.initialStep;
  const sourceQuestContent = questContentPosition.sourceQuestContent;
  const items = [onClose];
  const callback = sourceQuestContent.useCallback(() => {
    const result = questContentPosition(videoSessionId[20]).showQuestUnavailableAlert();
    onClose();
  }, items);
  obj = questContentPosition(videoSessionId[21]);
  const nonNullableQuest = obj.useNonNullableQuest(questContentPosition.questId, callback);
  const items1 = [onClose, nonNullableQuest, videoSessionId, questContentPosition, initialStep, sourceQuestContent];
  const memo = sourceQuestContent.useMemo(() => {
    let tmp = null;
    if (null != nonNullableQuest) {
      obj = {};
      obj = { fullscreen: true, headerLeft: null, render: null };
      obj[1] = function headerLeft() {
        return null;
      };
      obj[2] = function render() {
        obj = { value: obj, children: null };
        obj = { quest: closure_5, videoSessionId: closure_2 };
        obj = {
          children: closure_1_7(closure_1_0(closure_1_2[22]).BillableAdPlacementImpressionTrackerNative, {
            overrideVisibility: true,
            questContent: closure_1_0(closure_1_2[23]).QuestContent.VIDEO_MODAL_MOBILE,
            questOrQuests: closure_5,
            questContentPosition: closure_0,
            sourceQuestContent: closure_4,
            children() {
              return closure_1_7(closure_1_14, { initialStep: closure_3, onClose: closure_1, sourceQuestContent: closure_4 });
            }
          })
        };
        obj[1] = closure_1_7(closure_1_0(closure_1_2[10]).QuestDockGestureContextProvider, obj);
        return closure_1_7(closure_1_1(closure_1_2[7]).Provider, obj);
      };
      obj[closure_1_15] = obj;
      tmp = obj;
    }
    return tmp;
  }, items1);
  const layoutEffect = sourceQuestContent.useLayoutEffect(() => {
    questContentPosition(videoSessionId[8]).applyOrientationLock("PORTRAIT");
    return questContentPosition(videoSessionId[8]).restoreDefaultOrientationLock;
  }, []);
  let tmp7 = null;
  if (null != nonNullableQuest) {
    tmp7 = null;
    if (null != memo) {
      obj = { hideTitle: true, initialRouteName: null, screens: null };
      obj[1] = watch_mobile_video_quest;
      obj[2] = memo;
      tmp7 = callback(questContentPosition(videoSessionId[24]).Modal, obj);
    }
  }
  return tmp7;
});
let result = require("set").fileFinishedImporting("modules/quests/native/VideoQuestModal/VideoQuestModal.tsx");

export default memoResult;
export const VideoQuestModalSteps = obj;