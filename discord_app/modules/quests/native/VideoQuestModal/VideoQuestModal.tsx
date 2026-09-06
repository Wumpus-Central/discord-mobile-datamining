// === Module 15125: VideoQuestModal ===

// Module 15125 (VideoQuestModal)
import nativeDefault from "native" /* 576 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4296 */;
import spring from "spring" /* 4974 */;
import AnalyticsActions from "AnalyticsActions" /* 7718 */;
import QuestUtils from "QuestUtils" /* 11767 */;
import applyOrientationLock2 from "applyOrientationLock" /* 11785 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, StyleSheet } = get_ActivityIndicator);
const AnalyticEvents = fn(1074).AnalyticEvents;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
let closure_9 = { mass: 1.9, damping: 18, stiffness: 80, overshootClamping: true };
let VideoQuestModalSteps = { WATCH_VIDEO: 0, [0]: "WATCH_VIDEO", POST_WATCH_VIDEO: 1, [1]: "POST_WATCH_VIDEO" };
fn(4560);
VideoQuestModalSteps = { root: { backgroundColor: nativeDefault.colors.BACKGROUND_SCRIM }, pillarboxed: { alignSelf: "center" }, wrapper: { flexDirection: "column", flexGrow: 1, flexShrink: 1, zIndex: 1 }, contentWrapper: { flex: 1 }, contentBackground: null, modalContentWrapper: null, backgroundWrapper: null };
const createStyles = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
createStyles.borderRadius = nativeDefault.radii.lg;
createStyles.backgroundColor = nativeDefault.colors.BACKGROUND_BASE_LOWEST;
VideoQuestModalSteps.contentBackground = createStyles;
VideoQuestModalSteps.modalContentWrapper = { zIndex: 2 };
let obj3 = {};
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj3.borderRadius = nativeDefault.radii.lg;
obj3.flex = 1;
obj3.overflow = "hidden";
obj3.pointerEvents = "none";
obj3.zIndex = 1;
VideoQuestModalSteps.backgroundWrapper = obj3;
let closure_11 = createStyles.createStyles(VideoQuestModalSteps);
let __initData = { code: "function VideoQuestModalTsx1(){const{withSpring,clamp,postWatchAnimationState,BACKGROUND_ENTRANCE_ANIMATION_SPRING_CONFIG,interpolate,CLOUDS_BACKGROUND_INVISIBLE_OFFSET_Y}=this.__closure;return{opacity:withSpring(clamp(postWatchAnimationState.get(),0,1),BACKGROUND_ENTRANCE_ANIMATION_SPRING_CONFIG),transform:[{translateY:withSpring(interpolate(postWatchAnimationState.get(),[0,1],[CLOUDS_BACKGROUND_INVISIBLE_OFFSET_Y,0]),BACKGROUND_ENTRANCE_ANIMATION_SPRING_CONFIG)}]};}" };
const __initData2 = { code: "function VideoQuestModalTsx2(){const{withSpring,interpolate,postWatchAnimationState,safeAreaInsets,BACKGROUND_ENTRANCE_ANIMATION_SPRING_CONFIG}=this.__closure;return{transform:[{translateY:withSpring(interpolate(postWatchAnimationState.get(),[0,1],[safeAreaInsets.top,0]),BACKGROUND_ENTRANCE_ANIMATION_SPRING_CONFIG)}],opacity:withSpring(postWatchAnimationState.get(),BACKGROUND_ENTRANCE_ANIMATION_SPRING_CONFIG)};}" };
let closure_14 = noop.memo((sourceQuestContent) => {
  ({ onClose, initialStep } = sourceQuestContent);
  sourceQuestContent = sourceQuestContent.sourceQuestContent;
  let __closure = initialStep(quest[7]);
  const videoQuestModalContext = __closure.useVideoQuestModalContext();
  quest = videoQuestModalContext.quest;
  const videoSessionId = videoQuestModalContext.videoSessionId;
  const userStatus = quest.userStatus;
  let completedAt;
  if (userStatus != null) {
    completedAt = userStatus.completedAt;
  }
  noop = tmp5;
  let obj1 = noop;
  if (initialStep != null) {
    const tmp9 = videoSessionId(noop.useState(initialStep), 2);
    const first = tmp9[0];
    closure_6 = tmp9[1];
    [tmp12, closure_7] = videoSessionId(obj1.useState(false), 2);
    let items = [quest.id, videoSessionId, sourceQuestContent];
    const setIsFullscreen = obj1.useCallback((arg0) => {
      const applyOrientationLock = applyOrientationLock2.applyOrientationLock;
      if (arg0) {
        applyOrientationLock("LANDSCAPE");
      } else {
        applyOrientationLock("PORTRAIT");
      }
      closure_1_7(arg0);
      let properties = { questId: quest.id, event: arg0 ? AnalyticEvents.QUEST_VIDEO_FULLSCREEN_ENTERED : AnalyticEvents.QUEST_VIDEO_FULLSCREEN_EXITED, properties: null, sourceQuestContent };
      properties = { video_session_id: videoSessionId };
      properties.properties = properties;
      properties.trackQuestEvent(properties);
    }, items);
    const tmp15 = sharedValue();
    const pillarboxed = tmp15;
    const tmp17 = sourceQuestContent(tmp2[11])(obj1.useContext(initialStep(tmp2[10]).QuestDockGestureContext).windowDimensions);
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
        obj = { width: tmp };
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
        closure_6(obj.POST_WATCH_VIDEO);
      }
    }, items2);
    const items3 = [setIsFullscreen];
    const callback1 = obj1.useCallback(() => {
      closure_6(obj.WATCH_VIDEO);
    }, []);
    const callback2 = obj1.useCallback(() => {
      callback(false);
      closure_6(obj.POST_WATCH_VIDEO);
    }, items3);
    let tmpResult = initialStep(tmp2[12]);
    let num3 = 0;
    if (first === bound.POST_WATCH_VIDEO) {
      num3 = 1;
    }
    sharedValue = tmpResult.useSharedValue(num3);
    tmpResult = initialStep(tmp2[12]);
    class L {
      constructor() {
        obj = { opacity: null, transform: null };
        obj2 = closure_0(closure_2[13]);
        obj3 = closure_0(closure_2[12]);
        obj.opacity = obj2.withSpring(obj3.clamp(closure_11.get(), 0, 1), closure_9);
        obj = { translateY: null };
        obj5 = closure_0(closure_2[13]);
        obj6 = closure_0(closure_2[12]);
        obj.translateY = obj5.withSpring(obj6.interpolate(closure_11.get(), [0, 1], [-100, 0]), closure_9);
        items = [];
        items[0] = obj;
        obj.transform = items;
        return obj;
      }
    }
    __closure = { withSpring: initialStep(tmp2[13]).withSpring, clamp: initialStep(tmp2[12]).clamp, postWatchAnimationState: sharedValue, BACKGROUND_ENTRANCE_ANIMATION_SPRING_CONFIG: pillarboxed, interpolate: initialStep(tmp2[12]).interpolate, CLOUDS_BACKGROUND_INVISIBLE_OFFSET_Y: -100 };
    L.__closure = __closure;
    L.__workletHash = 11571705142399;
    L.__initData = __initData;
    const animatedStyle = tmpResult.useAnimatedStyle(L);
    const tmp29 = sourceQuestContent(tmp2[14])();
    __initData = tmp29;
    const tmp11 = videoSessionId(obj1.useState(false), 2);
    class U {
      constructor() {
        obj = { transform: null, opacity: null };
        obj = { translateY: null };
        obj3 = closure_0(closure_2[13]);
        obj4 = closure_0(closure_2[12]);
        items = [, ];
        items[0] = closure_12.top;
        items[1] = 0;
        obj.translateY = obj3.withSpring(obj4.interpolate(closure_11.get(), [0, 1], items), closure_9);
        items1 = [];
        items1[0] = obj;
        obj.transform = items1;
        obj5 = closure_0(closure_2[13]);
        obj.opacity = obj5.withSpring(closure_11.get(), closure_9);
        return obj;
      }
    }
    __closure = { withSpring: initialStep(tmp2[13]).withSpring, interpolate: initialStep(tmp2[12]).interpolate, postWatchAnimationState: sharedValue, safeAreaInsets: tmp29, BACKGROUND_ENTRANCE_ANIMATION_SPRING_CONFIG: pillarboxed };
    U.__closure = __closure;
    U.__workletHash = 9769051401109;
    U.__initData = __initData2;
    const items4 = [sharedValue, first];
    const animatedStyle1 = initialStep(tmp2[12]).useAnimatedStyle(U);
    const effect = obj1.useEffect(() => {
      let num = 0;
      if (first === obj.POST_WATCH_VIDEO) {
        num = 1;
      }
      const result = sharedValue.set(num);
    }, items4);
    obj1 = { style: tmp15.root, children: null };
    let obj2 = { style: null, children: null };
    const items5 = [tmp15.modalContentWrapper, memo];
    obj2.style = items5;
    let obj3 = { style: null, children: null };
    const items6 = [tmp15.backgroundWrapper, ];
    let obj4 = { height };
    items6[1] = obj4;
    obj3.style = items6;
    tmp16(tmp2[15]);
    let obj5 = { style: null };
    const items7 = [tmp15.contentBackground, ];
    const obj6 = { top: tmp29.top };
    items7[1] = obj6;
    obj5.style = items7;
    const items8 = [closure_7(sourceQuestContent(tmp2[15]), obj5), , ];
    const obj7 = { style: null };
    const items9 = [tmp15.contentBackground, animatedStyle1];
    obj7.style = items9;
    items8[1] = closure_7(sourceQuestContent(tmp2[15]), obj7);
    const obj8 = { style: animatedStyle, children: null };
    const tmp16Result = tmp16(tmp2[15]);
    obj8.children = closure_7(sourceQuestContent(tmp2[16]), { align: "top" });
    items8[2] = closure_7(tmp16Result, obj8);
    obj3.children = items8;
    const items10 = [setIsFullscreen(first, obj3), ];
    const obj9 = { top: true, style: null, children: null };
    const items11 = [tmp15.wrapper, ];
    const obj10 = { height };
    items11[1] = obj10;
    obj9.style = items11;
    const obj11 = { style: tmp15.contentWrapper, children: null };
    let tmp33Result = first === tmp24.WATCH_VIDEO;
    if (tmp33Result) {
      if (bound == null) {
        bound = width;
      }
      const obj12 = { contentWidth: bound, isFullscreen: tmp12, onNavigateToPostWatchVideo: callback2, onClose, onEnd: callback2, setIsFullscreen, sourceQuestContent };
      tmp33Result = closure_7(tmp16(tmp2[18]), obj12);
      const tmp16Result1 = tmp16(tmp2[18]);
    }
    const items12 = [tmp33Result, ];
    tmp33Result = first === tmp24.POST_WATCH_VIDEO;
    if (tmp33Result) {
      const obj13 = { onClose, onRestartVideo: callback1, sourceQuestContent };
      tmp33Result = closure_7(tmp16(tmp2[19]), obj13);
    }
    items12[1] = tmp33Result;
    obj11.children = items12;
    obj9.children = setIsFullscreen(first, obj11);
    items10[1] = closure_7(initialStep(tmp2[17]).SafeAreaPaddingView, obj9);
    obj2.children = items10;
    obj1.children = setIsFullscreen(tmp16Result, obj2);
    return closure_7(first, obj1);
  }
});
const watch_mobile_video_quest = "watch_mobile_video_quest";
let obj1 = { backgroundColor: nativeDefault.colors.BACKGROUND_SCRIM };
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
  obj = questContentPosition(videoSessionId[21]);
  const nonNullableQuest = obj.useNonNullableQuest(questContentPosition.questId, callback);
  const items1 = [onClose, nonNullableQuest, videoSessionId, questContentPosition, initialStep, sourceQuestContent];
  const memo = sourceQuestContent.useMemo(() => {
    let tmp = null;
    if (null != nonNullableQuest) {
      obj = {};
      obj = {
        fullscreen: true,
        headerLeft() {
            return null;
          },
        render() {
            value = { value: null, children: null };
            value = { quest: questOrQuests, videoSessionId };
            value.value = value;
            value = {
              children: closure_2_7(questContentPosition(videoSessionId[22]).BillableAdPlacementImpressionTrackerNative, {
                overrideVisibility: true,
                questContent: questContentPosition(videoSessionId[23]).QuestContent.VIDEO_MODAL_MOBILE,
                questOrQuests,
                questContentPosition,
                sourceQuestContent,
                children() {
                  return closure_2_7(closure_2_14, { initialStep, onClose, sourceQuestContent });
                }
              })
            };
            value.children = closure_2_7(questContentPosition(videoSessionId[10]).QuestDockGestureContextProvider, value);
            return closure_2_7(onClose(videoSessionId[7]).Provider, value);
          }
      };
      obj[watch_mobile_video_quest] = obj;
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
      obj = { hideTitle: true, initialRouteName: watch_mobile_video_quest, screens: memo };
      tmp7 = closure_7(questContentPosition(videoSessionId[24]).Modal, obj);
    }
  }
  return tmp7;
});
export { VideoQuestModalSteps };