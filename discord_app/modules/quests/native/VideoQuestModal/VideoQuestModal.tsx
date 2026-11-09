// discord_app/modules/quests/native/VideoQuestModal/VideoQuestModal.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import useSafeAreaInsetsDefault from "../../../safe_area/useSafeAreaInsets.native.tsx";
import _modDef1652 from "../../../../../_runtime/metro/01652__.js";
import AnalyticsActions from "../../lib/analytics/AnalyticsActions.tsx";
import useStateFromSharedValueDefault from "../../../reanimated/native/useStateFromSharedValue.tsx";
import QuestUtils from "../QuestUtils.native.tsx";
import applyOrientationLock2 from "../../../device/native/applyOrientationLock.tsx";
import QuestModalContentCloudBackgroundDefault from "../QuestModalContentCloudBackground.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, StyleSheet } = get_ActivityIndicator);
let closure_6 = fn(17393).QUEST_DOCK_LANDSCAPE_MEDIA_EXPANDED_HEIGHT;
const AnalyticEvents = fn(1072).AnalyticEvents;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
let closure_10 = { mass: 1.9, damping: 18, stiffness: 80, overshootClamping: true };
const VideoQuestModalSteps = { WATCH_VIDEO: 0, [0]: "WATCH_VIDEO", POST_WATCH_VIDEO: 1, [1]: "POST_WATCH_VIDEO" };
const createStyles = fn(5140);
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
let closure_12 = createStyles.createStyles(obj2);
let closure_13 = {
  code: "(function VideoQuestModalTsx1(){let[withSpring,clamp,postWatchAnimationState,BACKGROUND_ENTRANCE_ANIMATION_SPRING_CONFIG,interpolate,CLOUDS_BACKGROUND_INVISIBLE_OFFSET_Y]=this.__closure;return{opacity:withSpring(clamp(postWatchAnimationState.get(),0,1),BACKGROUND_ENTRANCE_ANIMATION_SPRING_CONFIG),transform:[{translateY:withSpring(interpolate(postWatchAnimationState.get(),[0,1],[CLOUDS_BACKGROUND_INVISIBLE_OFFSET_Y,0]),BACKGROUND_ENTRANCE_ANIMATION_SPRING_CONFIG)}]};})",
};
let closure_14 = {
  code: "(function VideoQuestModalTsx2(){let[withSpring,interpolate,postWatchAnimationState,safeAreaInsets,BACKGROUND_ENTRANCE_ANIMATION_SPRING_CONFIG]=this.__closure;return{transform:[{translateY:withSpring(interpolate(postWatchAnimationState.get(),[0,1],[safeAreaInsets.top,0]),BACKGROUND_ENTRANCE_ANIMATION_SPRING_CONFIG)}],opacity:withSpring(postWatchAnimationState.get(),BACKGROUND_ENTRANCE_ANIMATION_SPRING_CONFIG)};})",
};
let closure_15 = noop.memo(function VideoQuestModalContent(sourceQuestContent) {
  ({ onClose, initialStep } = sourceQuestContent);
  _require = initialStep;
  sourceQuestContent = sourceQuestContent.sourceQuestContent;
  importDefault = sourceQuestContent;
  const videoQuestModalContext = require("VideoQuestModalContext").useVideoQuestModalContext();
  const quest = videoQuestModalContext.quest;
  dependencyMap = quest;
  const videoSessionId = videoQuestModalContext.videoSessionId;
  let _slicedToArray = videoSessionId;
  const userStatus = quest.userStatus;
  let completedAt;
  if (userStatus != null) {
    completedAt = userStatus.completedAt;
  }
  noop = tmp5;
  if (initialStep != null) {
    [first, closure_6] = noop.useState(initialStep);
    c5 = first;
    [tmp12, AnalyticEvents] = obj2.useState(false);
    items = [quest.id, videoSessionId, sourceQuestContent];
    const setIsFullscreen = obj2.useCallback((arg0) => {
      const applyOrientationLock = applyOrientationLock2.applyOrientationLock;
      if (arg0) {
        applyOrientationLock("LANDSCAPE");
      } else {
        applyOrientationLock("PORTRAIT");
      }
      closure_1_7(arg0);
      const obj2 = {
        questId: _undefined2.id,
        event: arg0 ? AnalyticEvents.QUEST_VIDEO_FULLSCREEN_ENTERED : AnalyticEvents.QUEST_VIDEO_FULLSCREEN_EXITED,
        properties: { video_session_id },
        sourceQuestContent,
      };
      AnalyticsActions.trackQuestEvent(obj2);
      const obj3 = { video_session_id };
    }, items);
    const tmp15 = closure_12();
    const pillarboxed = tmp15;
    const tmp17 = useStateFromSharedValueDefault(obj2.useContext(tmp(17394).QuestDockGestureContext).windowDimensions);
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
        items = [pillarboxed.pillarboxed];
        const obj = { width: tmp };
        items[1] = obj;
        tmp2 = items;
      }
      return tmp2;
    }, items1);
    const layoutEffect = obj2.useLayoutEffect(() => {
      let tmp = c4;
      if (c4) {
        tmp = null == c0;
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
    const tmp11 = _slicedToArray(obj2.useState(false), 2);
    let num3 = 0;
    if (first === sharedValue.POST_WATCH_VIDEO) {
      num3 = 1;
    }
    sharedValue = tmp(1652).useSharedValue(num3);
    const tmpResult = tmp(1652);
    const items4 = [closure_13, tmp(5761).withSpring, tmp(1652).clamp, sharedValue, bound, tmp(1652).interpolate, -100];
    _require = undefined;
    importDefault = undefined;
    dependencyMap = undefined;
    _slicedToArray = undefined;
    noop = undefined;
    c5 = undefined;
    [tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35] = items4;
    class VideoQuestModalTsx1 {
      constructor() {
        obj = { opacity: closure_0(closure_1(closure_2.get(), 0, 1), closure_3), transform: null };
        obj1 = { translateY: null };
        items = [,];
        items[0] = closure_5;
        items[1] = 0;
        obj1.translateY = closure_0(closure_4(closure_2.get(), [0, 1], items), closure_3);
        items1 = [];
        items1[0] = obj1;
        obj.transform = items1;
        return obj;
      }
    }
    const items5 = [tmp30, tmp31, tmp32, tmp33, tmp34, tmp35];
    VideoQuestModalTsx1.__closure = items5;
    VideoQuestModalTsx1.__workletHash = 9188931787878;
    VideoQuestModalTsx1.__initData = tmp29;
    const animatedStyle = tmp(1652).useAnimatedStyle(VideoQuestModalTsx1);
    const tmp37 = useSafeAreaInsetsDefault();
    const tmp27 = bound;
    const tmpResult3 = tmp(1652);
    const items6 = [closure_14, tmp(5761).withSpring, tmp(1652).interpolate, sharedValue, tmp37, tmp27];
    _require = undefined;
    importDefault = undefined;
    dependencyMap = undefined;
    _slicedToArray = undefined;
    noop = undefined;
    [tmp40, tmp41, tmp42, tmp43, tmp44, tmp45] = items6;
    class VideoQuestModalTsx2 {
      constructor() {
        obj = { transform: null, opacity: null };
        obj1 = { translateY: null };
        items = [,];
        items[0] = closure_3.top;
        items[1] = 0;
        obj1.translateY = closure_0(closure_1(closure_2.get(), [0, 1], items), closure_4);
        items1 = [];
        items1[0] = obj1;
        obj.transform = items1;
        obj.opacity = closure_0(closure_2.get(), closure_4);
        return obj;
      }
    }
    const items7 = [tmp41, tmp42, tmp43, tmp44, tmp45];
    VideoQuestModalTsx2.__closure = items7;
    VideoQuestModalTsx2.__workletHash = 10709421427500;
    VideoQuestModalTsx2.__initData = tmp40;
    const items8 = [sharedValue, first];
    const animatedStyle1 = tmp(1652).useAnimatedStyle(VideoQuestModalTsx2);
    const effect = obj2.useEffect(() => {
      let num = 0;
      if (c5 === obj.POST_WATCH_VIDEO) {
        num = 1;
      }
      const result = sharedValue.set(num);
    }, items8);
    let obj3 = { style: tmp15.root, children: null };
    const obj4 = { style: null, children: null };
    const items9 = [tmp15.modalContentWrapper, memo];
    obj4.style = items9;
    const obj5 = { style: null, children: null };
    const items10 = [tmp15.backgroundWrapper];
    const obj6 = { height };
    items10[1] = obj6;
    obj5.style = items10;
    const obj7 = { style: null };
    const items11 = [tmp15.contentBackground];
    const obj8 = { top: tmp37.top };
    items11[1] = obj8;
    obj7.style = items11;
    const items12 = [setIsFullscreen(_modDef1652.View, obj7), ,];
    const obj9 = { style: null };
    const items13 = [tmp15.contentBackground, animatedStyle1];
    obj9.style = items13;
    items12[1] = setIsFullscreen(_modDef1652.View, obj9);
    const obj10 = {
      style: animatedStyle,
      children: setIsFullscreen(QuestModalContentCloudBackgroundDefault, { align: "top" }),
    };
    items12[2] = setIsFullscreen(_modDef1652.View, obj10);
    obj5.children = items12;
    const items14 = [pillarboxed(c5, obj5)];
    const obj11 = { top: true, style: null, children: null };
    const items15 = [tmp15.wrapper];
    const obj12 = { height };
    items15[1] = obj12;
    obj11.style = items15;
    const obj13 = { style: tmp15.contentWrapper, children: null };
    let tmp48Result = first === tmp24.WATCH_VIDEO;
    if (tmp48Result) {
      if (bound == null) {
        bound = width;
      }
      const obj14 = {
        contentWidth: bound,
        isFullscreen: tmp12,
        onNavigateToPostWatchVideo: callback2,
        onClose,
        onEnd: callback2,
        setIsFullscreen,
        sourceQuestContent,
      };
      tmp48Result = tmp48(tmp16(17431), obj14);
      const tmp16Result = tmp16(17431);
    }
    const items16 = [tmp48Result];
    let tmp48Result2 = first === tmp24.POST_WATCH_VIDEO;
    if (tmp48Result2) {
      const obj15 = { onClose, onRestartVideo: callback1, sourceQuestContent };
      tmp48Result2 = tmp48(tmp16(17456), obj15);
    }
    items16[1] = tmp48Result2;
    obj13.children = items16;
    obj11.children = pillarboxed(c5, obj13);
    items14[1] = setIsFullscreen(tmp(7355).SafeAreaPaddingView, obj11);
    obj4.children = items14;
    obj3.children = pillarboxed(_modDef1652.View, obj4);
    return setIsFullscreen(c5, obj3);
  }
  let obj = require("VideoQuestModalContext");
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
  items = [onClose];
  const callback = sourceQuestContent.useCallback(() => {
    const result = QuestUtils.showQuestUnavailableAlert();
    onClose();
  }, items);
  const nonNullableQuest = questContentPosition(videoSessionId[21]).useNonNullableQuest(
    questContentPosition.questId,
    callback,
  );
  const items1 = [nonNullableQuest, videoSessionId];
  const memo = sourceQuestContent.useMemo(() => {
    let tmp2 = null;
    if (null != nonNullableQuest) {
      const obj = { quest: tmp, videoSessionId };
      tmp2 = obj;
    }
    return tmp2;
  }, items1);
  const items2 = [onClose, nonNullableQuest, memo, questContentPosition, initialStep, sourceQuestContent];
  const memo1 = sourceQuestContent.useMemo(() => {
    let tmp = null;
    if (null != nonNullableQuest) {
      tmp = null;
      if (null != memo) {
        let obj = {};
        let obj2 = {
          fullscreen: true,
          headerLeft() {
            return null;
          },
          render() {
            const obj = { value, children: null };
            const obj2 = {
              expandedHeight: memo,
              children: closure_2_8(
                questContentPosition(videoSessionId[22]).BillableAdPlacementImpressionTrackerNative,
                {
                  overrideVisibility: true,
                  questContent: questContentPosition(videoSessionId[23]).QuestContent.VIDEO_MODAL_MOBILE,
                  questOrQuests,
                  questContentPosition,
                  sourceQuestContent,
                  children: function renderVideoQuestModal() {
                    return closure_2_8(closure_2_15, { initialStep, onClose, sourceQuestContent });
                  },
                },
              ),
            };
            obj.children = closure_2_8(questContentPosition(videoSessionId[11]).QuestDockGestureContextProvider, obj2);
            return closure_2_8(onClose(videoSessionId[8]).Provider, obj);
          },
        };
        obj[watch_mobile_video_quest] = obj2;
        tmp = obj;
      }
    }
    return tmp;
  }, items2);
  const layoutEffect = sourceQuestContent.useLayoutEffect(() => {
    questContentPosition(videoSessionId[9]).applyOrientationLock("PORTRAIT");
    return questContentPosition(videoSessionId[9]).restoreDefaultOrientationLock;
  }, []);
  let tmp8 = null;
  if (null != nonNullableQuest) {
    tmp8 = null;
    if (null != memo1) {
      let obj2 = { hideTitle: true, initialRouteName: watch_mobile_video_quest, screens: memo1 };
      tmp8 = closure_8(questContentPosition(videoSessionId[24]).Modal, obj2);
    }
  }
  return tmp8;
});
export { VideoQuestModalSteps };
