// discord_app/modules/quests/native/VideoQuestModal/VideoQuestModalContentInProgress.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import asyncRequireImpl from "../../../../../_runtime/01980_asyncRequireImpl.js";
import ReanimatedRexport from "../../../reanimated/ReanimatedRexport.tsx";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import timing from "../../../../design/animation/reanimated/timing/timing.tsx";
import Pressables from "../../../../design/void/Pressables/native/Pressables.tsx";
import QuestTypes from "../../QuestTypes.tsx";
import AdAnalyticsInterfaceExperiment from "../../experiments/AdAnalyticsInterfaceExperiment.tsx";
import AssetUtils from "../../lib/AssetUtils.tsx";
import QuestUtils from "../QuestUtils.native.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import n_mod from "../../../../../_runtime/metro/00672__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, StyleSheet: metroRequire, ScrollView: closure_7 } = get_ActivityIndicator);
const QuestConstants = fn(5749);
({ DEFAULT_PORTRAIT_ASPECT_RATIO: closure_8, QuestsExperimentLocations: closure_9 } = QuestConstants);
const ThemeTypes = fn(1085).ThemeTypes;
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
const start = { x: 0, y: 0 };
const end = { x: 0, y: 1 };
let n = n_mod;
const importDefaultResultResult = n(nativeDefault.unsafe_rawColors.PLUM_23);
let items = [n(nativeDefault.unsafe_rawColors.PLUM_23).alpha(0.4).hex()];
let n = n_mod;
const alphaResult = n(nativeDefault.unsafe_rawColors.PLUM_23).alpha(0.4);
const importDefaultResult1Result = n(nativeDefault.unsafe_rawColors.PLUM_23);
items[1] = n(nativeDefault.unsafe_rawColors.PLUM_23).alpha(0).hex();
let n = n_mod;
const alphaResult1 = n(nativeDefault.unsafe_rawColors.PLUM_23).alpha(0);
const importDefaultResult2Result = n(nativeDefault.unsafe_rawColors.PLUM_23);
let items1 = [n(nativeDefault.unsafe_rawColors.PLUM_23).alpha(0).hex()];
let n = n_mod;
const alphaResult2 = n(nativeDefault.unsafe_rawColors.PLUM_23).alpha(0);
const importDefaultResult3Result = n(nativeDefault.unsafe_rawColors.PLUM_23);
items1[1] = n(nativeDefault.unsafe_rawColors.PLUM_23).alpha(0.4).hex();
const contentInsets = { bottom: 158, top: 64, left: 16, right: 16 };
const contentInsets2 = { bottom: 16, left: 16, right: 16 };
let createStyles = fn(4829);
let closure_19 = createStyles.createStyles((arg0) => {
  const obj = {
    wrapper: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, flex: 1 },
    wrapperPortrait: null,
    videoLandscape: null,
    videoLandscape9by16: null,
    landscapeContentScroll: null,
    landscapeContentScrollContent: null,
    videoLandscapeFullscreen: null,
    videoWrapper: null,
    videoWrapperLandscape: null,
    videoWrapperFullscreen: null,
    videoContentWrapper: null,
    videoContentWrapperLandscape: null,
    videoContentWrapperPortrait: null,
    rewardContainer: null,
    rewardContentCentered: null,
    modalBackground: null,
    questDetailsLandscape: null,
    questDetailsPrimary: null,
    questDetailsSecondary: null,
    footer: null,
    icon: null,
    iconDisabled: null,
    closeButtonLandscape: null,
    gradientTop: null,
    gradientBottom: null,
    textShadow: null,
    viewRewardBtn: null,
    playerThumbnail: null,
    cloudsBackground: null,
    questDetailsSubheader: null,
  };
  const obj3 = {
    borderTopLeftRadius: nativeDefault.radii.lg,
    borderTopRightRadius: nativeDefault.radii.lg,
    justifyContent: null,
  };
  let str = "center";
  if (arg0) {
    str = "flex-start";
  }
  obj3.justifyContent = str;
  obj.wrapperPortrait = obj3;
  obj.videoLandscape = { width: "100%", position: "relative" };
  obj.videoLandscape9by16 = { aspectRatio: 1.7777777777777777, flexShrink: 0 };
  obj.landscapeContentScroll = { flex: 1 };
  obj.landscapeContentScrollContent = { flexGrow: 1 };
  obj.videoLandscapeFullscreen = { flexGrow: 1, flexShrink: 1 };
  const obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, flex: 1 };
  obj.videoWrapper = { borderRadius: nativeDefault.radii.lg, flexGrow: 0, flexShrink: 0, overflow: "hidden" };
  const obj4 = { borderRadius: nativeDefault.radii.lg, flexGrow: 0, flexShrink: 0, overflow: "hidden" };
  obj.videoWrapperLandscape = {
    flexGrow: 1,
    borderTopLeftRadius: nativeDefault.radii.none,
    borderTopRightRadius: nativeDefault.radii.none,
  };
  const obj5 = {
    flexGrow: 1,
    borderTopLeftRadius: nativeDefault.radii.none,
    borderTopRightRadius: nativeDefault.radii.none,
  };
  obj.videoWrapperFullscreen = { borderRadius: nativeDefault.radii.none };
  const obj6 = { borderRadius: nativeDefault.radii.none };
  obj.videoContentWrapper = {
    flexDirection: "column",
    pointerEvents: "box-none",
    flexGrow: 1,
    flexShrink: 0,
    justifyContent: "space-between",
    padding: nativeDefault.space.PX_16,
  };
  obj.videoContentWrapperLandscape = { padding: 0 };
  const merged = Object.assign(timestampProducer.absoluteFillObject);
  obj.videoContentWrapperPortrait = {};
  obj.rewardContainer = { justifyContent: "center", flexGrow: 1, flexShrink: 0 };
  const rect = {
    position: "absolute",
    top: nativeDefault.space.PX_16,
    left: nativeDefault.space.PX_16,
    right: nativeDefault.space.PX_16,
    bottom: nativeDefault.space.PX_16,
    alignItems: "center",
    justifyContent: "center",
  };
  obj.rewardContentCentered = rect;
  const obj7 = {
    flexDirection: "column",
    pointerEvents: "box-none",
    flexGrow: 1,
    flexShrink: 0,
    justifyContent: "space-between",
    padding: nativeDefault.space.PX_16,
  };
  const obj8 = {};
  obj.modalBackground = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
  const obj9 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
  obj.questDetailsLandscape = {
    borderTopWidth: 1,
    borderColor: nativeDefault.colors.BACKGROUND_MOD_STRONG,
    paddingHorizontal: nativeDefault.space.PX_16,
    paddingTop: nativeDefault.space.PX_24,
  };
  obj.questDetailsPrimary = { flexGrow: 0, flexShrink: 1 };
  obj.questDetailsSecondary = { flexGrow: 0, flexShrink: 0 };
  const obj10 = {
    borderTopWidth: 1,
    borderColor: nativeDefault.colors.BACKGROUND_MOD_STRONG,
    paddingHorizontal: nativeDefault.space.PX_16,
    paddingTop: nativeDefault.space.PX_24,
  };
  obj.footer = { paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_8 };
  const obj11 = { paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_8 };
  obj.icon = { color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE };
  const obj12 = { color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE };
  obj.iconDisabled = { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
  const rect1 = { position: "absolute", top: nativeDefault.space.PX_16, left: nativeDefault.space.PX_16 };
  obj.closeButtonLandscape = rect1;
  const obj14 = {};
  const merged1 = Object.assign(timestampProducer.absoluteFillObject);
  obj14.bottom = undefined;
  obj14.height = 70;
  obj.gradientTop = obj14;
  const obj15 = {};
  const merged2 = Object.assign(timestampProducer.absoluteFillObject);
  obj15.top = undefined;
  obj15.height = 150;
  obj.gradientBottom = obj15;
  const obj13 = { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
  obj.textShadow = {
    margin: -15,
    padding: 15,
    textShadowColor: nativeDefault.colors.BLACK,
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 15,
  };
  obj.viewRewardBtn = { marginRight: "auto" };
  const size = { borderRadius: nativeDefault.radii.lg, height: 96, width: "100%" };
  obj.playerThumbnail = size;
  obj.cloudsBackground = { zIndex: -1 };
  obj.questDetailsSubheader = { opacity: 0.6 };
  return obj;
});
const __initData = {
  code: "function VideoQuestModalContentInProgressTsx1(){const{withDelay,LOGO_REWARD_TRANSITION_DELAY_MS,withTiming,isComponentMounted,LOGO_REWARD_TRANSITION_DURATION_MS}=this.__closure;return withDelay(LOGO_REWARD_TRANSITION_DELAY_MS,withTiming(isComponentMounted.get(),{duration:LOGO_REWARD_TRANSITION_DURATION_MS}));}",
};
const __initData2 = {
  code: "function VideoQuestModalContentInProgressTsx2(){const{animation}=this.__closure;return{opacity:animation.get()};}",
};
const __initData3 = {
  code: "function VideoQuestModalContentInProgressTsx3(){const{animation}=this.__closure;return{opacity:1-animation.get()};}",
};
const __initData4 = {
  code: "function VideoQuestModalContentInProgressTsx4(){const{animation}=this.__closure;return{pointerEvents:animation.get()>0.3?'auto':'none'};}",
};
let closure_24 = noop.memo((quest) => {
  quest = quest.quest;
  ({ handleAdvertiserDetailsPress, isFullscreen } = quest);
  const setIsFullscreen = quest.setIsFullscreen;
  ({ sourceQuestContent, isShareable } = quest);
  _slicedToArray = undefined;
  noop = undefined;
  let sharedValue;
  let derivedValue;
  let tmp2 = setIsFullscreen;
  ({
    captionsEnabled,
    contentWidth,
    handleClose,
    handlePrimaryCtaPress,
    handleShareQuest,
    handleOpenTranscript,
    handleToggleCaptions,
    onNavigateToPostWatchVideo,
    onEnd,
    externallyPaused,
    hasCaptionAsset,
    hasTranscriptAsset,
  } = quest);
  const tmp3 = closure_19(quest(setIsFullscreen[10]).isAndroid());
  items = [quest];
  const memo = noop.useMemo(() => AssetUtils.getQuestAsset(quest, AssetUtils.QuestAssetType.HERO), items);
  const userStatus = quest.userStatus;
  let completedAt;
  if (userStatus != null) {
    completedAt = userStatus.completedAt;
  }
  let tmp25Result3 = null != completedAt;
  let obj = quest(setIsFullscreen[10]);
  [tmp8, c3] = noop.useState(null);
  const callback = obj2.useCallback((nativeEvent) => {
    _undefined(nativeEvent.nativeEvent.layout.height);
  }, []);
  const tmp7 = _slicedToArray(noop.useState(null), 2);
  [num, c4] = noop.useState(null);
  let diff = null;
  const callback1 = obj2.useCallback((nativeEvent) => {
    _undefined2(nativeDefault.space.PX_24 + nativeEvent.nativeEvent.layout.height);
  }, []);
  if (null != tmp8) {
    diff = tmp8 - 2 * isFullscreen(tmp2[7]).space.PX_16;
  }
  let str = "md";
  let str2 = "md";
  if (null != diff) {
    str2 = str;
    if (null != num) {
      let str3 = "lg";
      if (diff < tmp(tmp2[8]).QUEST_PROGRESS_DIAMETER_BY_SIZE.lg + num) {
        if (diff >= tmp(tmp2[8]).QUEST_PROGRESS_DIAMETER_BY_SIZE["md-lg"] + num) {
          str = "md-lg";
        }
        str3 = str;
      }
      str2 = str3;
    }
  }
  const sum = tmp(tmp2[8]).QUEST_PROGRESS_DIAMETER_BY_SIZE.md + num;
  const sum1 = sum + 2 * isFullscreen(tmp2[7]).space.PX_16;
  const tmp10 = _slicedToArray(noop.useState(null), 2);
  sharedValue = quest(tmp2[12]).useSharedValue(0);
  items1 = [sharedValue];
  const effect = obj2.useEffect(() => {
    const result = sharedValue.set(1);
  }, items1);
  const tmpResult = quest(tmp2[12]);
  function te() {
    const obj = ReanimatedRexport;
    return obj.withDelay(3000, timing.withTiming(sharedValue.get(), { duration: 1000 }));
  }
  const tmpResult9 = quest(tmp2[12]);
  te.__closure = {
    withDelay: quest(tmp2[12]).withDelay,
    LOGO_REWARD_TRANSITION_DELAY_MS: 3000,
    withTiming: quest(tmp2[13]).withTiming,
    isComponentMounted: sharedValue,
    LOGO_REWARD_TRANSITION_DURATION_MS: 1000,
  };
  te.__workletHash = 12561024953493;
  te.__initData = __initData;
  derivedValue = tmpResult9.useDerivedValue(te);
  const obj3 = {
    withDelay: quest(tmp2[12]).withDelay,
    LOGO_REWARD_TRANSITION_DELAY_MS: 3000,
    withTiming: quest(tmp2[13]).withTiming,
    isComponentMounted: sharedValue,
    LOGO_REWARD_TRANSITION_DURATION_MS: 1000,
  };
  function ne() {
    return { opacity: derivedValue.get() };
  }
  ne.__closure = { animation: derivedValue };
  ne.__workletHash = 17463485679217;
  ne.__initData = __initData2;
  const animatedStyle = quest(tmp2[12]).useAnimatedStyle(ne);
  const tmpResult10 = quest(tmp2[12]);
  function se() {
    return { opacity: 1 - derivedValue.get() };
  }
  se.__closure = { animation: derivedValue };
  se.__workletHash = 9103187579788;
  se.__initData = __initData3;
  const animatedStyle1 = quest(tmp2[12]).useAnimatedStyle(se);
  const tmpResult11 = quest(tmp2[12]);
  function oe() {
    let pointerEvents = "none";
    if (derivedValue.get() > 0.3) {
      pointerEvents = "auto";
    }
    return { pointerEvents };
  }
  oe.__closure = { animation: derivedValue };
  oe.__workletHash = 11833431315705;
  oe.__initData = __initData4;
  const animatedProps = quest(tmp2[12]).useAnimatedProps(oe);
  const tmp23 = isFullscreen(tmp2[14])();
  const items2 = [isFullscreen, setIsFullscreen];
  const callback2 = obj2.useCallback((arg0) => {
    let tmp2 = isFullscreen;
    if (!isFullscreen) {
      tmp2 = "landscape" !== tmp;
    }
    let str2 = "PORTRAIT";
    if (!tmp2) {
      str2 = "LANDSCAPE";
    }
    setIsFullscreen("LANDSCAPE" === str2);
  }, items2);
  const obj4 = { bottom: true, style: tmp3.wrapper, children: null };
  const items3 = [, ,];
  ({ videoWrapper: arr4[0], videoWrapperLandscape: arr4[1] } = tmp3);
  let videoWrapperFullscreen = isFullscreen;
  if (isFullscreen) {
    videoWrapperFullscreen = tmp3.videoWrapperFullscreen;
  }
  const obj5 = { style: items3, children: null };
  items3[2] = videoWrapperFullscreen;
  const obj6 = { theme: ThemeTypes.DARK, children: null };
  const obj7 = {
    captionsEnabled,
    orientation: "landscape",
    style: null,
    contentInsets: null,
    handleOpenTranscript: null,
    handleToggleCaptions: null,
    isFullscreen: null,
    externallyPaused: null,
    onEnd: null,
    onToggleFullscreen: null,
    sourceQuestContent: null,
    hasCaptionAsset: null,
    hasTranscriptAsset: null,
  };
  const items4 = [tmp3.videoLandscape, ,];
  let videoLandscape9by16 = !isFullscreen;
  if (!isFullscreen) {
    videoLandscape9by16 = tmp3.videoLandscape9by16;
  }
  items4[1] = videoLandscape9by16;
  let videoLandscapeFullscreen = isFullscreen;
  if (isFullscreen) {
    videoLandscapeFullscreen = tmp3.videoLandscapeFullscreen;
  }
  items4[2] = videoLandscapeFullscreen;
  obj7.style = items4;
  obj7.contentInsets = contentInsets2;
  obj7.handleOpenTranscript = handleOpenTranscript;
  obj7.handleToggleCaptions = handleToggleCaptions;
  obj7.isFullscreen = isFullscreen;
  obj7.externallyPaused = externallyPaused;
  obj7.onEnd = onEnd;
  obj7.onToggleFullscreen = callback2;
  obj7.sourceQuestContent = sourceQuestContent;
  obj7.hasCaptionAsset = hasCaptionAsset;
  obj7.hasTranscriptAsset = hasTranscriptAsset;
  const items5 = [closure_11(quest(tmp2[17]).VideoQuestPlayer, obj7)];
  const obj8 = { onClose: handleClose, style: null };
  const items6 = [tmp3.closeButtonLandscape];
  let tmp29 = isFullscreen;
  const tmpResult12 = quest(tmp2[12]);
  if (isFullscreen) {
    tmp29 = null != tmp23;
  }
  if (tmp29) {
    const obj9 = { left: tmp23.left };
    tmp29 = obj9;
  }
  items6[1] = tmp29;
  obj8.style = items6;
  items5[1] = closure_11(isFullscreen(tmp2[18]), obj8);
  obj6.children = items5;
  const items7 = [closure_12(quest(tmp2[16]).ThemeContextProvider, obj6)];
  let tmp25Result4 = !isFullscreen;
  if (!isFullscreen) {
    const obj10 = {
      style: null,
      contentContainerStyle: null,
      showsVerticalScrollIndicator: false,
      alwaysBounceVertical: false,
      children: null,
    };
    ({ landscapeContentScroll: obj15.style, landscapeContentScrollContent: obj15.contentContainerStyle } = tmp3);
    const obj11 = { style: null, children: null };
    const items8 = [,];
    ({ videoContentWrapper: arr9[0], videoContentWrapperLandscape: arr9[1] } = tmp3);
    obj11.style = items8;
    const obj12 = { style: null, onLayout: null, children: null };
    const items9 = [tmp3.rewardContainer];
    const obj13 = { minHeight: sum1 };
    items9[1] = obj13;
    obj12.style = items9;
    obj12.onLayout = callback;
    const obj14 = { style: null, animatedProps: null, children: null };
    const items10 = [tmp3.rewardContentCentered, animatedStyle];
    obj14.style = items10;
    obj14.animatedProps = animatedProps;
    const obj16 = { size: str2, onTextBlockLayout: callback1 };
    obj14.children = closure_11(isFullscreen(tmp2[20]), obj16);
    const items11 = [closure_11(isFullscreen(tmp2[19]), obj14)];
    const items12 = [tmp3.rewardContentCentered, ,];
    const tmp15Result4 = isFullscreen(tmp2[19]);
    const tmp15Result5 = isFullscreen(tmp2[19]);
    const tmpResult13 = tmp(tmp2[10]);
    const obj17 = { style: null, pointerEvents: "none", children: null };
    items12[1] = tmp(tmp2[10]).isAndroid() && tmp3.modalBackground;
    items12[2] = animatedStyle1;
    obj17.style = items12;
    const tmp34 = tmp(tmp2[10]).isAndroid() && tmp3.modalBackground;
    let isAndroidResult = tmp(tmp2[10]).isAndroid();
    if (isAndroidResult) {
      const obj18 = { align: "top", style: tmp3.cloudsBackground };
      isAndroidResult = closure_11(isFullscreen(tmp2[21]), obj18);
    }
    const items13 = [isAndroidResult];
    const obj19 = { assetUrl: null, maxHeight: 90, maxWidth: null };
    const tmpResult14 = tmp(tmp2[10]);
    const tmp15Result6 = isFullscreen(tmp2[22]);
    obj19.assetUrl = tmp(tmp2[11]).getQuestAsset(quest, tmp(tmp2[11]).QuestAssetType.LOGO_TYPE, "dark").url;
    obj19.maxWidth = contentWidth - 120;
    items13[1] = closure_11(tmp15Result6, obj19);
    obj17.children = items13;
    items11[1] = closure_12(tmp15Result5, obj17);
    obj12.children = items11;
    const items14 = [closure_12(tmp27, obj12), ,];
    const obj20 = { align: "top", style: tmp3.cloudsBackground };
    items14[1] = closure_11(isFullscreen(tmp2[21]), obj20);
    const obj21 = {
      direction: "vertical",
      spacing: isFullscreen(tmp2[7]).space.PX_24,
      style: tmp3.questDetailsLandscape,
      children: null,
    };
    const obj22 = {
      direction: "horizontal",
      justify: "space-between",
      spacing: isFullscreen(tmp2[7]).space.PX_8,
      children: null,
    };
    const obj23 = { style: tmp3.questDetailsPrimary, onPress: handleAdvertiserDetailsPress, children: null };
    const obj24 = {
      variant: "heading-lg/semibold",
      color: "mobile-text-heading-primary",
      accessibilityRole: "header",
      children: quest.config.messages.gameTitle,
    };
    const items15 = [closure_11(tmp(tmp2[25]).Text, obj24)];
    const obj25 = {
      variant: "heading-sm/semibold",
      color: "text-subtle",
      children: quest.config.messages.gamePublisher,
    };
    items15[1] = closure_11(tmp(tmp2[25]).Text, obj25);
    obj23.children = items15;
    const items16 = [closure_12(tmp(tmp2[24]).PressableOpacity, obj23)];
    const obj26 = { style: tmp3.questDetailsSecondary, children: null };
    const obj27 = { quest, location: constants.VIDEO_MODAL_MOBILE, sourceQuestContent };
    obj26.children = closure_11(isFullscreen(tmp2[26]), obj27);
    items16[1] = closure_11(tmp27, obj26);
    obj22.children = items16;
    const items17 = [closure_12(tmp(tmp2[23]).Stack, obj22), ,];
    let tmp25Result = null != memo;
    if (tmp25Result) {
      const obj28 = { onPress: handleAdvertiserDetailsPress, children: null };
      const obj29 = { source: null, style: null };
      const obj30 = { uri: memo.url };
      obj29.source = obj30;
      obj29.style = tmp3.playerThumbnail;
      obj28.children = closure_11(isFullscreen(tmp2[27]), obj29);
      tmp25Result = closure_11(tmp(tmp2[24]).PressableOpacity, obj28);
    }
    items17[1] = tmp25Result;
    const obj31 = { direction: "horizontal", spacing: isFullscreen(tmp2[7]).space.PX_16, children: null };
    const obj32 = { grow: true, variant: "expressive", onPress: handlePrimaryCtaPress, text: null };
    const tmpResult15 = tmp(tmp2[11]);
    obj32.text = tmp(tmp2[29]).getExternalCtaLabel(quest);
    const items18 = [closure_11(tmp(tmp2[28]).Button, obj32), ,];
    if (isShareable) {
      const obj33 = { accessibilityLabel: null, icon: null, onPress: null, variant: "secondary" };
      const intl = tmp(tmp2[31]).intl;
      obj33.accessibilityLabel = intl.string(tmp(tmp2[31]).t.Ej3B3Y);
      obj33.icon = isFullscreen(tmp2[32]);
      obj33.onPress = handleShareQuest;
      isShareable = closure_11(tmp(tmp2[30]).IconButton, obj33);
    }
    items18[1] = isShareable;
    if (tmp25Result3) {
      const obj34 = { accessibilityLabel: null, icon: null, onPress: null, variant: "secondary" };
      const intl2 = tmp(tmp2[31]).intl;
      obj34.accessibilityLabel = intl2.string(tmp(tmp2[31]).t.cfY4PE);
      obj34.icon = isFullscreen(tmp2[33]);
      obj34.onPress = onNavigateToPostWatchVideo;
      tmp25Result3 = closure_11(tmp(tmp2[30]).IconButton, obj34);
    }
    items18[2] = tmp25Result3;
    obj31.children = items18;
    items17[2] = closure_12(tmp(tmp2[23]).Stack, obj31);
    obj21.children = items17;
    items14[2] = closure_12(tmp(tmp2[23]).Stack, obj21);
    obj11.children = items14;
    obj10.children = closure_12(tmp27, obj11);
    tmp25Result4 = closure_11(closure_7, obj10);
    const tmpResult16 = tmp(tmp2[29]);
  }
  items7[1] = tmp25Result4;
  obj5.children = items7;
  obj4.children = closure_12(sharedValue, obj5);
  return closure_11(quest(tmp2[15]).SafeAreaPaddingView, obj4);
});
let closure_25 = noop.memo((arg0) => {
  ({ quest, captionsEnabled, contentWidth } = arg0);
  ({
    handleOpenTranscript,
    handleToggleCaptions,
    sourceQuestContent,
    hasCaptionAsset,
    hasTranscriptAsset,
    isShareable,
  } = arg0);
  let height;
  let memo;
  _slicedToArray = undefined;
  first = undefined;
  closure_5 = undefined;
  ({
    handleClose,
    handleAdvertiserDetailsPress,
    handlePrimaryCtaPress,
    handleRewardDetailsPress,
    handleShareQuest,
    isFullscreen,
    onNavigateToPostWatchVideo,
    onEnd,
    externallyPaused,
  } = arg0);
  const questTaskDetails = contentWidth(memo[34]).useQuestTaskDetails(quest);
  const userStatus = quest.userStatus;
  let completedAt;
  if (userStatus != null) {
    completedAt = userStatus.completedAt;
  }
  let obj = contentWidth(memo[34]);
  const videoQuestProgressRemainingAccessibilityLabel = contentWidth(
    memo[35],
  ).getVideoQuestProgressRemainingAccessibilityLabel(questTaskDetails, tmp5);
  height = height(tmp2[37])(first.useContext(contentWidth(tmp2[36]).QuestDockGestureContext).windowDimensions).height;
  items = [contentWidth];
  memo = first.useMemo(() => Math.floor(contentWidth / React6), items);
  const callback = first.useCallback(() => {}, []);
  const tmp10 = height(memo[14])();
  _slicedToArray = tmp10;
  [first, closure_5] = first.useState(64);
  items1 = [memo, first, height, tmp10];
  const callback1 = first.useCallback((nativeEvent) => {
    closure_5(nativeEvent.nativeEvent.layout.height);
  }, []);
  const memo1 = first.useMemo(() => Math.min(height - closure_3.top - closure_3.bottom - first, memo), items1);
  let tmp18Result3 = closure_19(height - memo1 - first < 200);
  const obj2 = { bottom: true, style: null, children: null };
  const items2 = [,];
  ({ wrapper: arr3[0], wrapperPortrait: arr3[1] } = tmp18Result3);
  obj2.style = items2;
  const items3 = [tmp18Result3.videoWrapper];
  if (null == memo1) {
    let obj3 = { flexGrow: 1 };
  } else {
    obj3 = { height: memo1 };
  }
  const obj4 = { style: items3, children: null };
  items3[1] = obj3;
  const obj5 = {
    theme: ThemeTypes.DARK,
    children: closure_11(contentWidth(memo[17]).VideoQuestPlayer, {
      captionsEnabled,
      onLoad: callback,
      externallyPaused,
      orientation: "portrait",
      contentInsets,
      handleOpenTranscript,
      handleToggleCaptions,
      isFullscreen,
      onEnd,
      sourceQuestContent,
      hasCaptionAsset,
      hasTranscriptAsset,
    }),
  };
  const items4 = [
    closure_11(contentWidth(memo[16]).ThemeContextProvider, obj5),
    closure_11(height(memo[38]), { start, end, style: tmp18Result3.gradientTop, colors: items }),
    closure_11(height(memo[38]), { start, end, style: tmp18Result3.gradientBottom, colors: items1 }),
  ];
  const obj9 = { style: null, children: null };
  const items5 = [,];
  ({ videoContentWrapper: arr6[0], videoContentWrapperPortrait: arr6[1] } = tmp18Result3);
  obj9.style = items5;
  const obj10 = { closeButtonIconColor: null, onClose: null, showCurrentVideoTime: true, withTextShadow: true };
  const obj6 = {
    captionsEnabled,
    onLoad: callback,
    externallyPaused,
    orientation: "portrait",
    contentInsets,
    handleOpenTranscript,
    handleToggleCaptions,
    isFullscreen,
    onEnd,
    sourceQuestContent,
    hasCaptionAsset,
    hasTranscriptAsset,
  };
  const obj7 = { start, end, style: tmp18Result3.gradientTop, colors: items };
  const obj8 = { start, end, style: tmp18Result3.gradientBottom, colors: items1 };
  const tmpResult = contentWidth(memo[35]);
  obj10.closeButtonIconColor = height(memo[7]).colors.WHITE;
  obj10.onClose = handleClose;
  const items6 = [closure_11(height(memo[39]), obj10)];
  const obj11 = { direction: "vertical", spacing: height(memo[7]).space.PX_24, children: null };
  const obj12 = {
    direction: "horizontal",
    justify: "space-between",
    spacing: height(memo[7]).space.PX_8,
    children: null,
  };
  const obj13 = { style: tmp18Result3.questDetailsPrimary, onPress: handleAdvertiserDetailsPress, children: null };
  const items7 = [
    closure_11(contentWidth(memo[25]).Text, {
      variant: "heading-lg/semibold",
      color: "text-overlay-light",
      style: tmp18Result3.textShadow,
      accessibilityRole: "header",
      children: quest.config.messages.gameTitle,
    }),
  ];
  const obj15 = {
    variant: "heading-sm/semibold",
    color: "text-overlay-light",
    style: null,
    children: quest.config.messages.gamePublisher,
  };
  const items8 = [,];
  ({ textShadow: arr9[0], questDetailsSubheader: arr9[1] } = tmp18Result3);
  obj15.style = items8;
  items7[1] = closure_11(contentWidth(memo[25]).Text, obj15);
  obj13.children = items7;
  const items9 = [closure_12(contentWidth(memo[24]).PressableOpacity, obj13)];
  const obj16 = {
    style: tmp18Result3.questDetailsSecondary,
    children: closure_11(height(memo[8]), {
      quest,
      size: "x-sm",
      progress: questTaskDetails.percentComplete,
      hasConfetti: true,
      onPress: handleRewardDetailsPress,
      accessibilityLabel: videoQuestProgressRemainingAccessibilityLabel,
    }),
  };
  items9[1] = closure_11(closure_5, obj16);
  obj12.children = items9;
  const items10 = [closure_12(contentWidth(memo[23]).Stack, obj12)];
  const obj18 = { grow: true, variant: "expressive", onPress: handlePrimaryCtaPress, text: null };
  const obj14 = {
    variant: "heading-lg/semibold",
    color: "text-overlay-light",
    style: tmp18Result3.textShadow,
    accessibilityRole: "header",
    children: quest.config.messages.gameTitle,
  };
  const obj17 = {
    quest,
    size: "x-sm",
    progress: questTaskDetails.percentComplete,
    hasConfetti: true,
    onPress: handleRewardDetailsPress,
    accessibilityLabel: videoQuestProgressRemainingAccessibilityLabel,
  };
  const tmp7Result = height(memo[39]);
  obj18.text = contentWidth(memo[29]).getExternalCtaLabel(quest);
  items10[1] = closure_11(contentWidth(memo[28]).Button, obj18);
  obj11.children = items10;
  items6[1] = closure_12(contentWidth(memo[23]).Stack, obj11);
  obj9.children = items6;
  items4[3] = closure_12(closure_5, obj9);
  obj4.children = items4;
  const items11 = [closure_12(closure_5, obj4)];
  const obj19 = {
    direction: "horizontal",
    justify: "flex-end",
    align: "center",
    style: tmp18Result3.footer,
    spacing: height(memo[7]).space.PX_4,
    onLayout: callback1,
    children: null,
  };
  let tmp18Result = tmp5;
  if (null != completedAt) {
    const obj20 = { style: tmp18Result3.viewRewardBtn, children: null };
    const obj21 = {
      icon: closure_11(contentWidth(tmp2[40]).ArrowSmallRightIcon, { size: "sm" }),
      iconPosition: "end",
      onPress: onNavigateToPostWatchVideo,
      variant: "secondary",
      size: "sm",
      text: null,
    };
    let intl = contentWidth(tmp2[31]).intl;
    obj21.text = intl.string(contentWidth(tmp2[31]).t["jyYgZ+"]);
    obj20.children = closure_11(contentWidth(tmp2[28]).Button, obj21);
    tmp18Result = closure_11(tmp17, obj20);
  }
  const items12 = [tmp18Result, , , ,];
  if (hasTranscriptAsset) {
    const obj22 = { accessibilityLabel: null, onPress: null, children: null };
    const intl2 = contentWidth(tmp2[31]).intl;
    obj22.accessibilityLabel = intl2.string(contentWidth(tmp2[31]).t.KCzjTi);
    obj22.onPress = handleOpenTranscript;
    const obj23 = { color: tmp18Result3.iconDisabled.color };
    obj22.children = closure_11(contentWidth(tmp2[41]).TranscriptOutlineIcon, obj23);
    hasTranscriptAsset = closure_11(closure_27, obj22);
  }
  items12[1] = hasTranscriptAsset;
  if (!hasCaptionAsset) {
    items12[2] = hasCaptionAsset;
    if (isShareable) {
      const obj24 = { accessibilityLabel: null, onPress: null, children: null };
      const intl4 = contentWidth(tmp2[31]).intl;
      obj24.accessibilityLabel = intl4.string(contentWidth(tmp2[31]).t.Ej3B3Y);
      obj24.onPress = handleShareQuest;
      const obj25 = { color: tmp7(tmp2[7]).colors.TEXT_DEFAULT };
      obj24.children = closure_11(contentWidth(tmp2[43]).ShareIcon, obj25);
      isShareable = closure_11(closure_27, obj24);
    }
    items12[3] = isShareable;
    const obj26 = {
      quest,
      location: constants.VIDEO_MODAL_MOBILE,
      sourceQuestContent,
      children(ref) {
        const obj = { accessibilityLabel: null, ref: null };
        const merged = Object.assign(ref, Object.assign({ ref: 0 }));
        const intl = contentWidth(memo[31]).intl;
        obj.accessibilityLabel = intl.string(contentWidth(memo[31]).t.PdRCRg);
        obj.ref = ref.ref;
        const merged1 = Object.assign(merged);
        obj.children = closure_1_11(contentWidth(memo[44]).MoreHorizontalIcon, {
          color: height(memo[7]).colors.TEXT_DEFAULT,
        });
        return closure_1_11(closure_1_27, obj);
      },
    };
    items12[4] = closure_11(tmp7(tmp2[26]), obj26);
    obj19.children = items12;
    items11[1] = closure_12(contentWidth(tmp2[23]).Stack, obj19);
    obj2.children = items11;
    return closure_12(contentWidth(tmp2[15]).SafeAreaPaddingView, obj2);
  } else {
    const obj27 = { accessibilityLabel: null, onPress: null, children: null };
    const intl3 = contentWidth(tmp2[31]).intl;
    obj27.accessibilityLabel = intl3.string(contentWidth(tmp2[31]).t.bDSZO1);
    obj27.onPress = handleToggleCaptions;
    if (captionsEnabled) {
      let color = tmp18Result3.icon.color;
    } else {
      color = tmp18Result3.iconDisabled.color;
    }
    const obj28 = { color };
    tmp18Result3 = closure_11(contentWidth(tmp2[42]).ClosedCaptionsOutlineIcon, obj28);
    obj27.children = tmp18Result3;
    closure_11(closure_27, obj27);
  }
  const tmpResult2 = contentWidth(memo[29]);
});
createStyles = fn(4829);
let obj = { footerButton: null };
const alphaResult3 = n(nativeDefault.unsafe_rawColors.PLUM_23).alpha(0.4);
obj.footerButton = { padding: nativeDefault.space.PX_8 };
let closure_26 = createStyles.createStyles(obj);
let closure_27 = noop.forwardRef(function FooterButton(arg0, ref) {
  const obj = { accessibilityRole: "button", style: closure_26().footerButton };
  const merged = Object.assign(arg0);
  obj.ref = ref;
  return closure_1_11(Pressables.PressableOpacity, obj);
});
let obj2 = { padding: nativeDefault.space.PX_8 };
let size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/VideoQuestModal/VideoQuestModalContentInProgress.tsx");

export default noop.memo(function VideoQuestModalContentInProgress(arg0) {
  ({ onClose, sourceQuestContent } = arg0);
  ({ contentWidth, isFullscreen, onNavigateToPostWatchVideo, onEnd, setIsFullscreen } = arg0);
  const quest = sourceQuestContent(15462).useVideoQuestModalContext().quest;
  items = [quest];
  items1 = [quest];
  const memo = noop.useMemo(
    () => AssetUtils.getQuestAsset(quest, AssetUtils.QuestAssetType.VIDEO_PLAYER_CAPTION, undefined, true),
    items,
  );
  const memo1 = noop.useMemo(
    () => AssetUtils.getQuestAsset(quest, AssetUtils.QuestAssetType.VIDEO_PLAYER_TRANSCRIPT, undefined, true),
    items1,
  );
  let obj = sourceQuestContent(15462);
  [tmp6, dependencyMap] = getQuestImpressionId(noop.useState(false), 2);
  const items2 = [quest];
  const callback = noop.useCallback(() => dependencyMap((arg0) => !arg0), []);
  const callback1 = noop.useCallback(() => {
    const obj = ActionSheetActionCreatorsDefault;
    obj.openLazy(asyncRequireImpl(15490, dependencyMap.paths), "transcript-" + quest.id, { quest });
  }, items2);
  const tmp5 = getQuestImpressionId(noop.useState(false), 2);
  getQuestImpressionId = sourceQuestContent(11829).useGetQuestImpressionId();
  let obj2 = sourceQuestContent(11829);
  [tmp11, noop] = getQuestImpressionId(noop.useState(false), 2);
  const tmp10 = getQuestImpressionId(noop.useState(false), 2);
  const isShareableQuestResult = sourceQuestContent(8045).isShareableQuest(quest.config);
  closure_5 = isShareableQuestResult;
  const items3 = [isShareableQuestResult, quest.id, getQuestImpressionId, sourceQuestContent];
  const callback2 = noop.useCallback(() => {
    if (isShareableQuestResult) {
      let getQuestUrl = require;
      let id = dependencyMap;
      if (
        obj.shouldMigrateToAdAnalyticsInterface(
          AdAnalyticsInterfaceExperiment.AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL,
          "video_quest_modal_in_progress",
        )
      ) {
        const questUrl = getQuestUrl(8052);
        const obj2 = {
          type: getQuestUrl(8062).AdUserActionType.CLICK_INTERNAL,
          adCreativeType: getQuestUrl(5756).AdCreativeType.QUEST,
          adCreativeId: quest.id,
          questContentCTA: getQuestUrl(8051).QuestContentCTA.MOBILE_SHARESHEET,
          surfaceId: getQuestUrl(5752).QuestContent.VIDEO_MODAL_MOBILE,
          sourceQuestContent,
          impressionId: getQuestImpressionId(),
        };
        questUrl.captureAdUserAction(obj2);
        let tmp = quest;
      } else {
        const questUrl1 = getQuestUrl(8041);
        const obj3 = {
          questId: null,
          questContent: null,
          questContentCTA: null,
          impressionId: null,
          sourceQuestContent: null,
        };
        tmp = quest;
        obj3.questId = quest.id;
        obj3.questContent = getQuestUrl(5752).QuestContent.VIDEO_MODAL_MOBILE;
        obj3.questContentCTA = getQuestUrl(8051).QuestContentCTA.MOBILE_SHARESHEET;
        obj3.impressionId = getQuestImpressionId();
        obj3.sourceQuestContent = sourceQuestContent;
        const result = questUrl1.trackQuestContentClicked(obj3);
      }
      noop(true);
      const questUrl2 = getQuestUrl(8711);
      const obj4 = { message: null, iOSOnlyShareCallback: null };
      const questUrl3 = getQuestUrl(11644);
      getQuestUrl = questUrl3.getQuestUrl;
      obj4.message = getQuestUrl(tmp.id);
      obj4.iOSOnlyShareCallback = function iOSOnlyShareCallback() {
        return closure_1_4(false);
      };
      id = tmp.id;
      const _HermesInternal = HermesInternal;
      questUrl2.showShareActionSheet(obj4, "Video Quest Modal - " + id);
      obj = AdAnalyticsInterfaceExperiment;
    }
  }, items3);
  let obj3 = sourceQuestContent(8045);
  const videoQuestClickCtaAndMaybeCloseModal = sourceQuestContent(15491).useVideoQuestClickCtaAndMaybeCloseModal({
    quest,
    onClose,
    sourceQuestContent,
  });
  const items4 = [videoQuestClickCtaAndMaybeCloseModal];
  const items5 = [videoQuestClickCtaAndMaybeCloseModal];
  const callback3 = noop.useCallback(
    () => videoQuestClickCtaAndMaybeCloseModal(QuestTypes.QuestContent.VIDEO_MODAL_MOBILE_FOOTER),
    items4,
  );
  const items6 = [quest.id];
  const callback4 = noop.useCallback(
    () => videoQuestClickCtaAndMaybeCloseModal(QuestTypes.QuestContent.VIDEO_MODAL_MOBILE),
    items5,
  );
  const callback5 = noop.useCallback(() => {
    const result = QuestUtils.openRewardDetailsBottomSheet({ questId: quest.id });
  }, items6);
  let obj4 = sourceQuestContent(15491);
  const videoExternallyPaused = sourceQuestContent(15492).useVideoExternallyPaused(quest.id, tmp11);
  const tmp19 =
    quest.config.taskConfigV2.tasks[sourceQuestContent(undefined, 5757).FirstPartyQuestTaskTypes.WATCH_VIDEO_ON_MOBILE];
  let tmp20 = null == tmp19;
  if (!tmp20) {
    tmp20 = "portrait" === sourceQuestContent(11853).getVideoOrientation(tmp19);
    const tmpResult = sourceQuestContent(11853);
  }
  return closure_11(tmp20 ? closure_25 : closure_24, {
    quest,
    captionsEnabled: tmp6,
    contentWidth,
    handleClose: onClose,
    handleAdvertiserDetailsPress: callback3,
    handlePrimaryCtaPress: callback4,
    handleRewardDetailsPress: callback5,
    handleShareQuest: callback2,
    handleOpenTranscript: callback1,
    handleToggleCaptions: callback,
    isFullscreen,
    onNavigateToPostWatchVideo,
    onEnd,
    setIsFullscreen,
    externallyPaused: videoExternallyPaused,
    sourceQuestContent,
    hasCaptionAsset: null != memo,
    hasTranscriptAsset: null != memo1,
    isShareable: isShareableQuestResult,
  });
});
