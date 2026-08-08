// discord_app/modules/quests/native/VideoQuestModal/VideoQuestModal.tsx
import _slicedToArray from "_slicedToArray";
import importAllResult from "module_14398";
import get_ActivityIndicator from "SafeAreaPaddingView";
import { AnalyticEvents } from "ME";
import jsxProd from "useQuests";
import createCacheKey from "createCacheKey";

let StyleSheet;
let c5;
let error;
let metroImportAll;
const require = arg1;
let c4 = importAllResult;
({ View: c5, StyleSheet } = get_ActivityIndicator);
({ jsx: error, jsxs: metroImportAll } = jsxProd);
let closure_9 = { mass: 1.9, damping: 18, stiffness: 80, overshootClamping: true };
let obj = { WATCH_VIDEO: 0, [0]: "WATCH_VIDEO", POST_WATCH_VIDEO: 1, [1]: "POST_WATCH_VIDEO" };
obj = { wrapper: { flexDirection: "column", flexGrow: 1, flexShrink: 1, zIndex: 1 }, contentWrapper: { flex: 1 }, contentBackground: null, modalContentWrapper: null, backgroundWrapper: null };
let obj1 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj1.borderRadius = require("Themes").radii.lg;
obj1.backgroundColor = require("Themes").colors.BACKGROUND_BASE_LOWEST;
obj[2] = obj1;
obj[3] = { zIndex: 2 };
createCacheKey = {};
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
createCacheKey.borderRadius = require("Themes").radii.lg;
createCacheKey.flex = 1;
createCacheKey.overflow = "hidden";
createCacheKey.pointerEvents = "none";
createCacheKey.zIndex = 1;
obj[4] = createCacheKey;
let closure_11 = createCacheKey.createStyles(obj);
let closure_12 = { code: "function VideoQuestModalTsx1(){const{withSpring,clamp,postWatchAnimationState,BACKGROUND_ENTRANCE_ANIMATION_SPRING_CONFIG,interpolate,CLOUDS_BACKGROUND_INVISIBLE_OFFSET_Y}=this.__closure;return{opacity:withSpring(clamp(postWatchAnimationState.get(),0,1),BACKGROUND_ENTRANCE_ANIMATION_SPRING_CONFIG),transform:[{translateY:withSpring(interpolate(postWatchAnimationState.get(),[0,1],[CLOUDS_BACKGROUND_INVISIBLE_OFFSET_Y,0]),BACKGROUND_ENTRANCE_ANIMATION_SPRING_CONFIG)}]};}" };
let closure_13 = { code: "function VideoQuestModalTsx2(){const{withSpring,interpolate,postWatchAnimationState,safeAreaInsets,BACKGROUND_ENTRANCE_ANIMATION_SPRING_CONFIG}=this.__closure;return{transform:[{translateY:withSpring(interpolate(postWatchAnimationState.get(),[0,1],[safeAreaInsets.top,0]),BACKGROUND_ENTRANCE_ANIMATION_SPRING_CONFIG)}],opacity:withSpring(postWatchAnimationState.get(),BACKGROUND_ENTRANCE_ANIMATION_SPRING_CONFIG)};}" };
let closure_14 = importAllResult.memo((sourceQuestContent) => {
  let initialStep;
  let onClose;
  ({ onClose, initialStep } = sourceQuestContent);
  sourceQuestContent = sourceQuestContent.sourceQuestContent;
  let obj = initialStep(quest[7]);
  const videoQuestModalContext = obj.useVideoQuestModalContext();
  quest = videoQuestModalContext.quest;
  const videoSessionId = videoQuestModalContext.videoSessionId;
  const userStatus = quest.userStatus;
  let completedAt;
  if (userStatus != null) {
    completedAt = userStatus.completedAt;
  }
  let obj1 = importAllResult;
  if (initialStep != null) {
    const tmp9 = videoSessionId(importAllResult.useState(initialStep), 2);
    const first = tmp9[0];
    let closure_6 = tmp9[1];
    const tmp11 = videoSessionId(obj1.useState(false), 2);
    let callback = tmp11[1];
    let items = [quest.id, videoSessionId, sourceQuestContent];
    callback = obj1.useCallback((arg0) => {
      const lockOrientation = initialStep(quest[8]).lockOrientation;
      if (arg0) {
        lockOrientation("LANDSCAPE", true);
      } else {
        lockOrientation("PORTRAIT", true);
      }
      callback2(arg0);
      let obj = initialStep(quest[9]);
      obj = { questId: quest.id, event: arg0 ? tmp5.QUEST_VIDEO_FULLSCREEN_ENTERED : tmp5.QUEST_VIDEO_FULLSCREEN_EXITED, properties: obj, sourceQuestContent };
      obj = { video_session_id: videoSessionId };
      obj.trackQuestEvent(obj);
    }, items);
    const tmp14 = callback2();
    const height = sourceQuestContent(tmp2[11])(obj1.useContext(tmp(tmp2[10]).QuestDockGestureContext).windowDimensions).height;
    let items1 = [tmp5, initialStep];
    const layoutEffect = obj1.useLayoutEffect(() => {
      let tmp = closure_4;
      if (closure_4) {
        tmp = null == initialStep;
      }
      if (tmp) {
        callback(tmp24.POST_WATCH_VIDEO);
      }
    }, items1);
    const items2 = [callback];
    const callback1 = obj1.useCallback(() => {
      callback(tmp24.WATCH_VIDEO);
    }, []);
    callback2 = obj1.useCallback(() => {
      callback(false);
      callback(tmp24.POST_WATCH_VIDEO);
    }, items2);
    let tmpResult = tmp(tmp2[12]);
    let num2 = 0;
    if (first === obj.POST_WATCH_VIDEO) {
      num2 = 1;
    }
    const sharedValue = tmpResult.useSharedValue(num2);
    tmpResult = tmp(tmp2[12]);
    const fn = function y() {
      let obj = { opacity: null, transform: null };
      const obj2 = initialStep(quest[13]);
      obj[0] = obj2.withSpring(initialStep(quest[12]).clamp(sharedValue.get(), 0, 1), sharedValue);
      obj = { translateY: null };
      const obj3 = initialStep(quest[12]);
      const obj5 = initialStep(quest[13]);
      obj[0] = obj5.withSpring(initialStep(quest[12]).interpolate(sharedValue.get(), [0, 1], [-100, 0]), sharedValue);
      const items = [obj];
      obj[1] = items;
      return obj;
    };
    obj = { withSpring: null, clamp: null, postWatchAnimationState: null, BACKGROUND_ENTRANCE_ANIMATION_SPRING_CONFIG: null, interpolate: null, CLOUDS_BACKGROUND_INVISIBLE_OFFSET_Y: -100 };
    obj[0] = tmp(tmp2[13]).withSpring;
    obj[1] = tmp(tmp2[12]).clamp;
    obj[2] = sharedValue;
    obj[3] = sharedValue;
    obj[4] = tmp(tmp2[12]).interpolate;
    fn.__closure = obj;
    fn.__workletHash = 11571705142399;
    fn.__initData = closure_12;
    const animatedStyle = tmpResult.useAnimatedStyle(fn);
    const tmp24 = sourceQuestContent(tmp2[14])();
    obj = tmp24;
    class M {
      constructor() {
        obj = { transform: null, opacity: null };
        obj = { translateY: null };
        obj3 = initialStep(quest[13]);
        obj4 = initialStep(quest[12]);
        items = [, ];
        items[0] = closure_10.top;
        items[1] = 0;
        obj[0] = obj3.withSpring(obj4.interpolate(POST_WATCH_VIDEO.get(), [0, 1], items), POST_WATCH_VIDEO);
        items1 = [];
        items1[0] = obj;
        obj[0] = items1;
        obj5 = initialStep(quest[13]);
        obj[1] = obj5.withSpring(POST_WATCH_VIDEO.get(), POST_WATCH_VIDEO);
        return obj;
      }
    }
    obj = { withSpring: null, interpolate: null, postWatchAnimationState: null, safeAreaInsets: null, BACKGROUND_ENTRANCE_ANIMATION_SPRING_CONFIG: null };
    obj[0] = tmp(tmp2[13]).withSpring;
    obj[1] = tmp(tmp2[12]).interpolate;
    obj[2] = sharedValue;
    obj[3] = tmp24;
    obj[4] = sharedValue;
    M.__closure = obj;
    M.__workletHash = 9769051401109;
    M.__initData = closure_13;
    const items3 = [sharedValue, first];
    const animatedStyle1 = tmp(tmp2[12]).useAnimatedStyle(M);
    const effect = obj1.useEffect(() => {
      let num = 0;
      if (first === tmp24.POST_WATCH_VIDEO) {
        num = 1;
      }
      const result = sharedValue.set(num);
    }, items3);
    obj1 = { style: null, children: null };
    obj1[0] = tmp14.modalContentWrapper;
    let obj2 = { style: null, children: null };
    const items4 = [tmp14.backgroundWrapper, ];
    let obj3 = { height: null };
    obj3[0] = height;
    items4[1] = obj3;
    obj2[0] = items4;
    let tmp15Result = tmp15(tmp2[15]);
    let obj4 = { style: null };
    const items5 = [tmp14.contentBackground, ];
    let obj5 = { top: null };
    obj5[0] = tmp24.top;
    items5[1] = obj5;
    obj4[0] = items5;
    const items6 = [callback(sourceQuestContent(tmp2[15]), obj4), , ];
    const obj6 = { style: null };
    const items7 = [tmp14.contentBackground, animatedStyle1];
    obj6[0] = items7;
    items6[1] = callback(sourceQuestContent(tmp2[15]), obj6);
    const obj7 = { style: null, children: null };
    obj7[0] = animatedStyle;
    tmp15Result = tmp15(tmp2[15]);
    obj7[1] = callback(sourceQuestContent(tmp2[16]), { align: "top" });
    items6[2] = callback(tmp15Result, obj7);
    obj2[1] = items6;
    const items8 = [callback(first, obj2), ];
    const obj8 = { top: true, style: null, children: null };
    const items9 = [tmp14.wrapper, ];
    const obj9 = { height: null };
    obj9[0] = height;
    items9[1] = obj9;
    obj8[1] = items9;
    const obj10 = { style: null, children: null };
    obj10[0] = tmp14.contentWrapper;
    let tmp28Result = first === tmp19.WATCH_VIDEO;
    if (tmp28Result) {
      const obj11 = { isFullscreen: null, onNavigateToPostWatchVideo: null, onClose: null, onEnd: null, setIsFullscreen: null, sourceQuestContent: null };
      obj11[0] = tmp11[0];
      obj11[1] = callback2;
      obj11[2] = onClose;
      obj11[3] = callback2;
      obj11[4] = callback;
      obj11[5] = sourceQuestContent;
      tmp28Result = tmp28(tmp15(tmp2[18]), obj11);
    }
    const items10 = [tmp28Result, ];
    tmp28Result = first === tmp19.POST_WATCH_VIDEO;
    if (tmp28Result) {
      const obj12 = { onClose: null, onRestartVideo: null, sourceQuestContent: null };
      obj12[0] = onClose;
      obj12[1] = callback1;
      obj12[2] = sourceQuestContent;
      tmp28Result = tmp28(tmp15(tmp2[19]), obj12);
    }
    const obj13 = { children: null };
    items10[1] = tmp28Result;
    obj10[1] = items10;
    obj8[2] = callback(first, obj10);
    items8[1] = callback(tmp(tmp2[17]).SafeAreaPaddingView, obj8);
    obj1[1] = items8;
    obj13[0] = callback(tmp15Result, obj1);
    return callback(first, obj13);
  }
});
const watch_mobile_video_quest = "watch_mobile_video_quest";
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
  let obj = questContentPosition(videoSessionId[21]);
  const nonNullableQuest = obj.useNonNullableQuest(questContentPosition.questId, callback);
  const items1 = [onClose, nonNullableQuest, videoSessionId, questContentPosition, initialStep, sourceQuestContent];
  const memo = sourceQuestContent.useMemo(() => {
    let tmp = null;
    if (null != nonNullableQuest) {
      let obj = {};
      obj = { fullscreen: true, headerLeft: null, render: null };
      obj[1] = function headerLeft() {
        return null;
      };
      obj[2] = function render() {
        obj = { value: obj, children: null };
        obj = { quest: closure_5, videoSessionId: closure_2 };
        obj = { children: null };
        const obj1 = { overrideVisibility: true, questContent: null, questOrQuests: null, questContentPosition: null, sourceQuestContent: null, children: null };
        obj1[1] = outer1_0(outer1_2[23]).QuestContent.VIDEO_MODAL_MOBILE;
        obj1[2] = closure_5;
        obj1[3] = closure_0;
        obj1[4] = closure_4;
        obj1[5] = function children() {
          return outer1_7(outer1_14, { initialStep: _slicedToArray, onClose: closure_1, sourceQuestContent: closure_4 });
        };
        obj[0] = outer1_7(outer1_0(outer1_2[22]).BillableAdPlacementImpressionTrackerNative, obj1);
        obj[1] = outer1_7(outer1_0(outer1_2[10]).QuestDockGestureContextProvider, obj);
        return outer1_7(outer1_1(outer1_2[7]).Provider, obj);
      };
      obj[outer1_15] = obj;
      tmp = obj;
    }
    return tmp;
  }, items1);
  const layoutEffect = sourceQuestContent.useLayoutEffect(() => {
    questContentPosition(videoSessionId[8]).lockOrientation("PORTRAIT", true);
    return questContentPosition(videoSessionId[8]).restoreDefaultOrientation;
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
let result = require("get ActivityIndicator").fileFinishedImporting("modules/quests/native/VideoQuestModal/VideoQuestModal.tsx");

export default memoResult;
export const VideoQuestModalSteps = obj;