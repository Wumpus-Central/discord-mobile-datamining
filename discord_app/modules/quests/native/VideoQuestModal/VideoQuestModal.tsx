// discord_app/modules/quests/native/VideoQuestModal/VideoQuestModal.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ReanimatedRexport from "../../../reanimated/ReanimatedRexport.tsx";
import spring from "../../../../design/animation/reanimated/spring/spring.tsx";
import AnalyticsActions from "../../lib/analytics/AnalyticsActions.tsx";
import QuestUtils from "../QuestUtils.native.tsx";
import applyOrientationLock2 from "../../../device/native/applyOrientationLock.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, StyleSheet } = get_ActivityIndicator);
let closure_6 = fn(14624).QUEST_DOCK_LANDSCAPE_MEDIA_EXPANDED_HEIGHT;
const AnalyticEvents = fn(1074).AnalyticEvents;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
let closure_10 = { mass: 1.9, damping: 18, stiffness: 80, overshootClamping: true };
const VideoQuestModalSteps = { WATCH_VIDEO: 0, [0]: "WATCH_VIDEO", POST_WATCH_VIDEO: 1, [1]: "POST_WATCH_VIDEO" };
const createStyles = fn(4836);
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
let top = createStyles.createStyles(obj2);
const __initData = {
  code: "function VideoQuestModalTsx1(){const{withSpring,clamp,postWatchAnimationState,BACKGROUND_ENTRANCE_ANIMATION_SPRING_CONFIG,interpolate,CLOUDS_BACKGROUND_INVISIBLE_OFFSET_Y}=this.__closure;return{opacity:withSpring(clamp(postWatchAnimationState.get(),0,1),BACKGROUND_ENTRANCE_ANIMATION_SPRING_CONFIG),transform:[{translateY:withSpring(interpolate(postWatchAnimationState.get(),[0,1],[CLOUDS_BACKGROUND_INVISIBLE_OFFSET_Y,0]),BACKGROUND_ENTRANCE_ANIMATION_SPRING_CONFIG)}]};}",
};
const __initData2 = {
  code: "function VideoQuestModalTsx2(){const{withSpring,interpolate,postWatchAnimationState,safeAreaInsets,BACKGROUND_ENTRANCE_ANIMATION_SPRING_CONFIG}=this.__closure;return{transform:[{translateY:withSpring(interpolate(postWatchAnimationState.get(),[0,1],[safeAreaInsets.top,0]),BACKGROUND_ENTRANCE_ANIMATION_SPRING_CONFIG)}],opacity:withSpring(postWatchAnimationState.get(),BACKGROUND_ENTRANCE_ANIMATION_SPRING_CONFIG)};}",
};
let closure_15 = noop.memo((sourceQuestContent) => {
  ({ onClose, initialStep } = sourceQuestContent);
  sourceQuestContent = sourceQuestContent.sourceQuestContent;
  const videoQuestModalContext = initialStep(quest[8]).useVideoQuestModalContext();
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
        event: arg0 ? AnalyticEvents.QUEST_VIDEO_FULLSCREEN_ENTERED : AnalyticEvents.QUEST_VIDEO_FULLSCREEN_EXITED,
        properties: { video_session_id: videoSessionId },
        sourceQuestContent,
      };
      AnalyticsActions.trackQuestEvent(obj2);
      const obj3 = { video_session_id: videoSessionId };
    }, items);
    const tmp15 = top();
    const pillarboxed = tmp15;
    const tmp17 = sourceQuestContent(tmp2[12])(
      obj2.useContext(initialStep(tmp2[11]).QuestDockGestureContext).windowDimensions,
    );
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
    let num3 = 0;
    if (first === sharedValue.POST_WATCH_VIDEO) {
      num3 = 1;
    }
    sharedValue = initialStep(tmp2[13]).useSharedValue(num3);
    const tmpResult = initialStep(tmp2[13]);
    class U {
      constructor() {
        obj = { opacity: null, transform: null };
        obj2 = closure_0(closure_2[14]);
        obj3 = closure_0(closure_2[13]);
        obj.opacity = obj2.withSpring(obj3.clamp(closure_11.get(), 0, 1), closure_10);
        obj1 = { translateY: null };
        obj5 = closure_0(closure_2[14]);
        obj6 = closure_0(closure_2[13]);
        obj1.translateY = obj5.withSpring(obj6.interpolate(closure_11.get(), [0, 1], [-100, 0]), closure_10);
        items = [];
        items[0] = obj1;
        obj.transform = items;
        return obj;
      }
    }
    let obj3 = {
      withSpring: initialStep(tmp2[14]).withSpring,
      clamp: initialStep(tmp2[13]).clamp,
      postWatchAnimationState: sharedValue,
      BACKGROUND_ENTRANCE_ANIMATION_SPRING_CONFIG: bound,
      interpolate: initialStep(tmp2[13]).interpolate,
      CLOUDS_BACKGROUND_INVISIBLE_OFFSET_Y: -100,
    };
    U.__closure = obj3;
    U.__workletHash = 11571705142399;
    U.__initData = __initData;
    const animatedStyle = initialStep(tmp2[13]).useAnimatedStyle(U);
    const tmp29 = sourceQuestContent(tmp2[15])();
    top = tmp29;
    const tmpResult3 = initialStep(tmp2[13]);
    class F {
      constructor() {
        obj = { transform: null, opacity: null };
        obj1 = { translateY: null };
        obj3 = closure_0(closure_2[14]);
        obj4 = closure_0(closure_2[13]);
        items = [,];
        items[0] = closure_12.top;
        items[1] = 0;
        obj1.translateY = obj3.withSpring(obj4.interpolate(closure_11.get(), [0, 1], items), closure_10);
        items1 = [];
        items1[0] = obj1;
        obj.transform = items1;
        obj5 = closure_0(closure_2[14]);
        obj.opacity = obj5.withSpring(closure_11.get(), closure_10);
        return obj;
      }
    }
    let obj4 = {
      withSpring: initialStep(tmp2[14]).withSpring,
      interpolate: initialStep(tmp2[13]).interpolate,
      postWatchAnimationState: sharedValue,
      safeAreaInsets: tmp29,
      BACKGROUND_ENTRANCE_ANIMATION_SPRING_CONFIG: bound,
    };
    F.__closure = obj4;
    F.__workletHash = 9769051401109;
    F.__initData = __initData2;
    const items4 = [sharedValue, first];
    const animatedStyle1 = initialStep(tmp2[13]).useAnimatedStyle(F);
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
    const tmpResult4 = initialStep(tmp2[13]);
    const obj9 = { style: null };
    const items7 = [tmp15.contentBackground];
    const obj10 = { top: tmp29.top };
    items7[1] = obj10;
    obj9.style = items7;
    const items8 = [setIsFullscreen(sourceQuestContent(tmp2[16]), obj9), ,];
    const obj11 = { style: null };
    const items9 = [tmp15.contentBackground, animatedStyle1];
    obj11.style = items9;
    items8[1] = setIsFullscreen(sourceQuestContent(tmp2[16]), obj11);
    const obj12 = { style: animatedStyle, children: null };
    const tmp16Result = sourceQuestContent(tmp2[16]);
    obj12.children = setIsFullscreen(sourceQuestContent(tmp2[17]), { align: "top" });
    items8[2] = setIsFullscreen(sourceQuestContent(tmp2[16]), obj12);
    obj7.children = items8;
    const items10 = [pillarboxed(first, obj7)];
    const obj13 = { top: true, style: null, children: null };
    const items11 = [tmp15.wrapper];
    const obj14 = { height };
    items11[1] = obj14;
    obj13.style = items11;
    const obj15 = { style: tmp15.contentWrapper, children: null };
    let tmp33Result = first === tmp24.WATCH_VIDEO;
    if (tmp33Result) {
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
      tmp33Result = tmp33(tmp16(tmp2[19]), obj16);
      const tmp16Result4 = tmp16(tmp2[19]);
    }
    const items12 = [tmp33Result];
    let tmp33Result2 = first === tmp24.POST_WATCH_VIDEO;
    if (tmp33Result2) {
      const obj17 = { onClose, onRestartVideo: callback1, sourceQuestContent };
      tmp33Result2 = tmp33(tmp16(tmp2[20]), obj17);
    }
    items12[1] = tmp33Result2;
    obj15.children = items12;
    obj13.children = pillarboxed(first, obj15);
    items10[1] = setIsFullscreen(initialStep(tmp2[18]).SafeAreaPaddingView, obj13);
    obj6.children = items10;
    obj5.children = pillarboxed(tmp16Result, obj6);
    return setIsFullscreen(first, obj5);
  }
  let obj = initialStep(quest[8]);
});
const watch_mobile_video_quest = "watch_mobile_video_quest";
let obj4 = { backgroundColor: nativeDefault.colors.BACKGROUND_SCRIM };
const size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/VideoQuestModal/VideoQuestModal.tsx");

export default noop.memo(function VideoQuestModal(questContentPosition) {
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
  const nonNullableQuest = questContentPosition(videoSessionId[22]).useNonNullableQuest(
    questContentPosition.questId,
    callback,
  );
  const items1 = [onClose, nonNullableQuest, videoSessionId, questContentPosition, initialStep, sourceQuestContent];
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
            children: closure_2_8(questContentPosition(videoSessionId[23]).BillableAdPlacementImpressionTrackerNative, {
              overrideVisibility: true,
              questContent: questContentPosition(videoSessionId[24]).QuestContent.VIDEO_MODAL_MOBILE,
              questOrQuests,
              questContentPosition,
              sourceQuestContent,
              children() {
                return closure_2_8(closure_2_15, { initialStep, onClose, sourceQuestContent });
              },
            }),
          };
          obj.children = closure_2_8(questContentPosition(videoSessionId[11]).QuestDockGestureContextProvider, obj3);
          return closure_2_8(onClose(videoSessionId[8]).Provider, obj);
        },
      };
      obj[watch_mobile_video_quest] = obj2;
      tmp = obj;
    }
    return tmp;
  }, items1);
  const layoutEffect = sourceQuestContent.useLayoutEffect(() => {
    questContentPosition(videoSessionId[9]).applyOrientationLock("PORTRAIT");
    return questContentPosition(videoSessionId[9]).restoreDefaultOrientationLock;
  }, []);
  let tmp7 = null;
  if (null != nonNullableQuest) {
    tmp7 = null;
    if (null != memo) {
      let obj2 = { hideTitle: true, initialRouteName: watch_mobile_video_quest, screens: memo };
      tmp7 = closure_8(questContentPosition(videoSessionId[25]).Modal, obj2);
    }
  }
  return tmp7;
});
export { VideoQuestModalSteps };
