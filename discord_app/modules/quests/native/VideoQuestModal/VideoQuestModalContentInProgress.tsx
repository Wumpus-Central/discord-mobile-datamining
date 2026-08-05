// discord_app/modules/quests/native/VideoQuestModal/VideoQuestModalContentInProgress.tsx
import getContextualEntrypointHeading from "getContextualEntrypointHeading";
import importAllResult from "SafeAreaPaddingView";
import get_ActivityIndicator from "CONFIG_NEVER_ANIMATE_TIMING";
import { QuestsExperimentLocations } from "QuestsExperimentLocations";
import { ThemeTypes } from "sum";
import jsxProd from "VideoQuestModalCloseButton";
import importDefaultResult from "n";
import importDefaultResult1 from "n";
import alphaResult1 from "_slicedToArray";
import importDefaultResult2 from "n";
import alphaResult2 from "_slicedToArray";
import importDefaultResult3 from "n";
import createCacheKey from "createCacheKey";
import createCacheKey from "createCacheKey";
import { Themes } from "../../../../../discord_common/js/packages/tokens/native.tsx";
import { PressableBase } from "../../../../design/void/Pressables/native/Pressables.tsx";

let c10;
let c5;
let closure_6;
let error;
let unpackModuleId;
const require = arg1;
let c4 = importAllResult;
({ View: c5, StyleSheet: closure_6, ScrollView: error } = get_ActivityIndicator);
({ jsx: c10, jsxs: unpackModuleId } = jsxProd);
let closure_12 = { x: 0, y: 0 };
let closure_13 = { x: 0, y: 1 };
const importDefaultResultResult = require("n")(require("Themes").unsafe_rawColors.PLUM_23);
let items = [require("n")(require("Themes").unsafe_rawColors.PLUM_23).alpha(0.4).hex(), ];
const alphaResult = require("n")(require("Themes").unsafe_rawColors.PLUM_23).alpha(0.4);
const importDefaultResult1Result = require("n")(require("Themes").unsafe_rawColors.PLUM_23);
items[1] = require("_slicedToArray").hex();
const importDefaultResult2Result = require("n")(require("Themes").unsafe_rawColors.PLUM_23);
let items1 = [require("_slicedToArray").hex(), ];
const importDefaultResult3Result = require("n")(require("Themes").unsafe_rawColors.PLUM_23);
items1[1] = require("n")(require("Themes").unsafe_rawColors.PLUM_23).alpha(0.4).hex();
let closure_16 = { bottom: 158, top: 64, left: 16, right: 16 };
let closure_17 = { bottom: 16, left: 16, right: 16 };
let closure_18 = createCacheKey.createStyles((arg0) => {
  let obj = { wrapper: null, wrapperPortrait: null, videoLandscape: null, videoLandscape9by16: null, landscapeContentScroll: null, landscapeContentScrollContent: null, videoLandscapeFullscreen: null, videoWrapper: null, videoWrapperLandscape: null, videoWrapperFullscreen: null, videoContentWrapper: null, videoContentWrapperLandscape: null, videoContentWrapperPortrait: null, rewardContainer: null, rewardContentCentered: null, modalBackground: null, questDetailsLandscape: null, questDetailsPrimary: null, questDetailsSecondary: null, footer: null, icon: null, iconDisabled: null, closeButtonLandscape: null, gradientTop: null, gradientBottom: null, textShadow: null, viewRewardBtn: null, playerThumbnail: null, cloudsBackground: null, questDetailsSubheader: null };
  obj = { backgroundColor: Themes.colors.BACKGROUND_BASE_LOWEST, flex: 1 };
  obj[0] = obj;
  obj = { borderTopLeftRadius: Themes.radii.lg, borderTopRightRadius: Themes.radii.lg, justifyContent: null };
  let str = "center";
  if (arg0) {
    str = "flex-start";
  }
  obj[2] = str;
  obj[1] = obj;
  obj[2] = { width: "100%", position: "relative" };
  obj[3] = { aspectRatio: 1.7777777777777777, flexShrink: 0 };
  obj[4] = { flex: 1 };
  obj[5] = { flexGrow: 1 };
  obj[6] = { flexGrow: 1, flexShrink: 1 };
  obj[7] = { borderRadius: Themes.radii.lg, flexGrow: 0, flexShrink: 0, overflow: "hidden" };
  const obj1 = { borderRadius: Themes.radii.lg, flexGrow: 0, flexShrink: 0, overflow: "hidden" };
  obj[8] = { flexGrow: 1, borderTopLeftRadius: Themes.radii.none, borderTopRightRadius: Themes.radii.none };
  const obj2 = { flexGrow: 1, borderTopLeftRadius: Themes.radii.none, borderTopRightRadius: Themes.radii.none };
  obj[9] = { borderRadius: Themes.radii.none };
  const obj3 = { borderRadius: Themes.radii.none };
  obj[10] = { flexDirection: "column", pointerEvents: "box-none", flexGrow: 1, flexShrink: 0, justifyContent: "space-between", padding: Themes.space.PX_16 };
  obj[11] = { padding: 0 };
  const merged = Object.assign(closure_6.absoluteFillObject);
  obj[12] = {};
  obj[13] = { justifyContent: "center", flexGrow: 1, flexShrink: 0 };
  const obj4 = { flexDirection: "column", pointerEvents: "box-none", flexGrow: 1, flexShrink: 0, justifyContent: "space-between", padding: Themes.space.PX_16 };
  const obj5 = {};
  obj[14] = { position: "absolute", top: Themes.space.PX_16, left: Themes.space.PX_16, right: Themes.space.PX_16, bottom: Themes.space.PX_16, alignItems: "center", justifyContent: "center" };
  const obj6 = { position: "absolute", top: Themes.space.PX_16, left: Themes.space.PX_16, right: Themes.space.PX_16, bottom: Themes.space.PX_16, alignItems: "center", justifyContent: "center" };
  obj[15] = { backgroundColor: Themes.colors.BACKGROUND_BASE_LOWEST };
  const obj7 = { backgroundColor: Themes.colors.BACKGROUND_BASE_LOWEST };
  obj[16] = { borderTopWidth: 1, borderColor: Themes.colors.BACKGROUND_MOD_STRONG, paddingHorizontal: Themes.space.PX_16, paddingTop: Themes.space.PX_24 };
  obj[17] = { flexGrow: 0, flexShrink: 1 };
  obj[18] = { flexGrow: 0, flexShrink: 0 };
  const obj8 = { borderTopWidth: 1, borderColor: Themes.colors.BACKGROUND_MOD_STRONG, paddingHorizontal: Themes.space.PX_16, paddingTop: Themes.space.PX_24 };
  obj[19] = { paddingHorizontal: Themes.space.PX_16, paddingVertical: Themes.space.PX_8 };
  const obj9 = { paddingHorizontal: Themes.space.PX_16, paddingVertical: Themes.space.PX_8 };
  obj[20] = { color: Themes.colors.INTERACTIVE_TEXT_ACTIVE };
  const obj10 = { color: Themes.colors.INTERACTIVE_TEXT_ACTIVE };
  obj[21] = { color: Themes.colors.INTERACTIVE_TEXT_DEFAULT };
  const obj11 = { color: Themes.colors.INTERACTIVE_TEXT_DEFAULT };
  obj[22] = { position: "absolute", top: Themes.space.PX_16, left: Themes.space.PX_16 };
  const obj13 = {};
  const merged1 = Object.assign(closure_6.absoluteFillObject);
  obj13.bottom = undefined;
  obj13.height = 70;
  obj[23] = obj13;
  const obj14 = {};
  const merged2 = Object.assign(closure_6.absoluteFillObject);
  obj14.top = undefined;
  obj14.height = 150;
  obj[24] = obj14;
  const obj12 = { position: "absolute", top: Themes.space.PX_16, left: Themes.space.PX_16 };
  obj[25] = { margin: -15, padding: 15, textShadowColor: Themes.colors.BLACK, textShadowOffset: { width: 0, height: 0 }, textShadowRadius: 15 };
  obj[26] = { marginRight: "auto" };
  const obj15 = { margin: -15, padding: 15, textShadowColor: Themes.colors.BLACK, textShadowOffset: { width: 0, height: 0 }, textShadowRadius: 15 };
  obj[27] = { borderRadius: Themes.radii.lg, height: 96, width: "100%" };
  obj[28] = { zIndex: -1 };
  obj[29] = { opacity: 0.6 };
  return obj;
});
let closure_19 = { code: "function VideoQuestModalContentInProgressTsx1(){const{withDelay,LOGO_REWARD_TRANSITION_DELAY_MS,withTiming,isComponentMounted,LOGO_REWARD_TRANSITION_DURATION_MS}=this.__closure;return withDelay(LOGO_REWARD_TRANSITION_DELAY_MS,withTiming(isComponentMounted.get(),{duration:LOGO_REWARD_TRANSITION_DURATION_MS}));}" };
let closure_20 = { code: "function VideoQuestModalContentInProgressTsx2(){const{animation}=this.__closure;return{opacity:animation.get()};}" };
let closure_21 = { code: "function VideoQuestModalContentInProgressTsx3(){const{animation}=this.__closure;return{opacity:1-animation.get()};}" };
let closure_22 = { code: "function VideoQuestModalContentInProgressTsx4(){const{animation}=this.__closure;return{pointerEvents:animation.get()>0.3?'auto':'none'};}" };
let closure_23 = importAllResult.memo((quest) => {
  let c3;
  let c4;
  let captionsEnabled;
  let externallyPaused;
  let handleClose;
  let handleOpenTranscript;
  let handlePrimaryCtaPress;
  let handleShareQuest;
  let handleToggleCaptions;
  let hasCaptionAsset;
  let hasTranscriptAsset;
  let isFullscreen;
  let isShareable;
  let num;
  let onEnd;
  let onNavigateToPostWatchVideo;
  let sourceQuestContent;
  let tmp9;
  quest = quest.quest;
  ({ handlePrimaryCtaPress, isFullscreen } = quest);
  const setIsFullscreen = quest.setIsFullscreen;
  ({ sourceQuestContent, isShareable } = quest);
  let callback;
  let sharedValue;
  let derivedValue;
  let tmp2 = setIsFullscreen;
  ({ captionsEnabled, handleClose, handleShareQuest, handleOpenTranscript, handleToggleCaptions, onNavigateToPostWatchVideo, onEnd, externallyPaused, hasCaptionAsset, hasTranscriptAsset } = quest);
  let obj = quest(setIsFullscreen[10]);
  const tmp3 = callback3(obj.isAndroid());
  let obj1 = importAllResult;
  const items = [quest];
  const memo = importAllResult.useMemo(() => quest(setIsFullscreen[11]).getQuestAsset(quest, quest(setIsFullscreen[11]).QuestAssetType.HERO), items);
  const userStatus = quest.userStatus;
  let completedAt;
  if (userStatus != null) {
    completedAt = userStatus.completedAt;
  }
  let tmp26Result = null != completedAt;
  const VideoQuestPlayerRefactorExperiment = tmp(tmp2[12]).VideoQuestPlayerRefactorExperiment;
  obj = { location: QuestsExperimentLocations.VIDEO_MODAL_MOBILE };
  if (VideoQuestPlayerRefactorExperiment.useConfig(obj).enabled) {
    let VideoQuestPlayer = tmp(tmp2[13]).VideoQuestPlayer;
  } else {
    VideoQuestPlayer = tmp(tmp2[14]).VideoQuestPlayer;
  }
  const windowDimensions = obj1.useContext(tmp(tmp2[15]).QuestDockGestureContext).windowDimensions;
  [tmp9, c3] = callback(obj1.useState(null), 2);
  callback = obj1.useCallback((nativeEvent) => {
    _undefined(nativeEvent.nativeEvent.layout.height);
  }, []);
  const tmp7 = QuestsExperimentLocations;
  const tmp8 = callback(obj1.useState(null), 2);
  [num, c4] = callback(obj1.useState(null), 2);
  let diff = null;
  const callback1 = obj1.useCallback((nativeEvent) => {
    _undefined2(isFullscreen(setIsFullscreen[7]).space.PX_24 + nativeEvent.nativeEvent.layout.height);
  }, []);
  if (null != tmp9) {
    diff = tmp9 - 2 * isFullscreen(tmp2[7]).space.PX_16;
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
  let tmpResult = tmp(tmp2[16]);
  sharedValue = tmpResult.useSharedValue(0);
  const items1 = [sharedValue];
  const effect = obj1.useEffect(() => {
    const result = sharedValue.set(1);
  }, items1);
  tmpResult = tmp(tmp2[16]);
  function te() {
    const obj = quest(setIsFullscreen[16]);
    return obj.withDelay(3000, quest(setIsFullscreen[17]).withTiming(sharedValue.get(), { duration: 1000 }));
  }
  obj = { withDelay: tmp(tmp2[16]).withDelay, LOGO_REWARD_TRANSITION_DELAY_MS: 3000, withTiming: tmp(tmp2[17]).withTiming, isComponentMounted: sharedValue, LOGO_REWARD_TRANSITION_DURATION_MS: 1000 };
  te.__closure = obj;
  te.__workletHash = 12561024953493;
  te.__initData = closure_19;
  derivedValue = tmpResult.useDerivedValue(te);
  const tmp11 = callback(obj1.useState(null), 2);
  function ne() {
    return { opacity: derivedValue.get() };
  }
  ne.__closure = { animation: derivedValue };
  ne.__workletHash = 17463485679217;
  ne.__initData = closure_20;
  const animatedStyle = quest(tmp2[16]).useAnimatedStyle(ne);
  const tmpResult1 = quest(tmp2[16]);
  function oe() {
    return { opacity: 1 - derivedValue.get() };
  }
  oe.__closure = { animation: derivedValue };
  oe.__workletHash = 9103187579788;
  oe.__initData = closure_21;
  const animatedStyle1 = quest(tmp2[16]).useAnimatedStyle(oe);
  const tmpResult2 = quest(tmp2[16]);
  function se() {
    let pointerEvents = "none";
    if (derivedValue.get() > 0.3) {
      pointerEvents = "auto";
    }
    return { pointerEvents };
  }
  se.__closure = { animation: derivedValue };
  se.__workletHash = 11833431315705;
  se.__initData = closure_22;
  const animatedProps = quest(tmp2[16]).useAnimatedProps(se);
  const tmp24 = isFullscreen(tmp2[18])();
  const items2 = [isFullscreen, setIsFullscreen];
  const callback2 = obj1.useCallback((arg0) => {
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
  obj1 = { bottom: true, style: tmp3.wrapper, children: null };
  const items3 = [, , ];
  ({ videoWrapper: arr4[0], videoWrapperLandscape: arr4[1] } = tmp3);
  let videoWrapperFullscreen = isFullscreen;
  if (isFullscreen) {
    videoWrapperFullscreen = tmp3.videoWrapperFullscreen;
  }
  const obj2 = { style: items3, children: null };
  items3[2] = videoWrapperFullscreen;
  const obj3 = { theme: ThemeTypes.DARKER, children: null };
  const obj4 = { captionsEnabled, orientation: "landscape", style: null, contentInsets: null, handleOpenTranscript: null, handleToggleCaptions: null, isFullscreen: null, externallyPaused: null, onEnd: null, onToggleFullscreen: null, sourceQuestContent: null, hasCaptionAsset: null, hasTranscriptAsset: null };
  const items4 = [tmp3.videoLandscape, , ];
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
  obj4[2] = items4;
  obj4[3] = closure_17;
  obj4[4] = handleOpenTranscript;
  obj4[5] = handleToggleCaptions;
  obj4[6] = isFullscreen;
  obj4[7] = externallyPaused;
  obj4[8] = onEnd;
  obj4[9] = callback2;
  obj4[10] = sourceQuestContent;
  obj4[11] = hasCaptionAsset;
  obj4[12] = hasTranscriptAsset;
  const items5 = [closure_10(VideoQuestPlayer, obj4), ];
  const obj5 = { onClose: handleClose, style: null };
  const items6 = [tmp3.closeButtonLandscape, ];
  let tmp30 = isFullscreen;
  let tmp16Result = tmp16(tmp2[21]);
  if (isFullscreen) {
    tmp30 = null != tmp24;
  }
  if (tmp30) {
    const obj6 = { left: null };
    obj6[0] = tmp24.left;
    tmp30 = obj6;
  }
  items6[1] = tmp30;
  obj5[1] = items6;
  items5[1] = closure_10(tmp16Result, obj5);
  obj3[1] = items5;
  const items7 = [closure_11(quest(tmp2[20]).ThemeContextProvider, obj3), ];
  let tmp26Result1 = !isFullscreen;
  if (!isFullscreen) {
    const obj7 = { style: null, contentContainerStyle: null, showsVerticalScrollIndicator: false, alwaysBounceVertical: false, children: null };
    ({ landscapeContentScroll: obj16[0], landscapeContentScrollContent: obj16[1] } = tmp3);
    const obj8 = { style: null, children: null };
    const items8 = [, ];
    ({ videoContentWrapper: arr9[0], videoContentWrapperLandscape: arr9[1] } = tmp3);
    obj8[0] = items8;
    const obj9 = { style: null, onLayout: null, children: null };
    const items9 = [tmp3.rewardContainer, ];
    const obj10 = { minHeight: null };
    obj10[0] = sum1;
    items9[1] = obj10;
    obj9[0] = items9;
    obj9[1] = callback;
    const obj11 = { style: null, animatedProps: null, children: null };
    const items10 = [tmp3.rewardContentCentered, animatedStyle];
    obj11[0] = items10;
    obj11[1] = animatedProps;
    tmp16Result = tmp16(tmp2[22]);
    const obj12 = { size: null, onTextBlockLayout: null };
    obj12[0] = str2;
    obj12[1] = callback1;
    obj11[2] = tmp26(tmp16(tmp2[23]), obj12);
    const items11 = [tmp26(tmp16Result, obj11), ];
    const items12 = [tmp3.rewardContentCentered, , ];
    const tmp16Result1 = tmp16(tmp2[22]);
    const tmp32 = closure_7;
    const tmpResult4 = tmp(tmp2[10]);
    const obj13 = { style: null, pointerEvents: "none", children: null };
    items12[1] = tmp(tmp2[10]).isAndroid() && tmp3.modalBackground;
    items12[2] = animatedStyle1;
    obj13[0] = items12;
    const tmp35 = tmp(tmp2[10]).isAndroid() && tmp3.modalBackground;
    let isAndroidResult = tmp(tmp2[10]).isAndroid();
    if (isAndroidResult) {
      const obj14 = { align: "top", style: null };
      obj14[1] = tmp3.cloudsBackground;
      isAndroidResult = tmp26(tmp16(tmp2[24]), obj14);
    }
    const items13 = [isAndroidResult, ];
    const obj15 = { assetUrl: null, maxHeight: 90, maxWidth: null };
    const tmpResult5 = tmp(tmp2[10]);
    const tmp16Result2 = tmp16(tmp2[25]);
    obj15[0] = tmp(tmp2[11]).getQuestAsset(quest, tmp(tmp2[11]).QuestAssetType.LOGO_TYPE, "dark").url;
    obj15[2] = windowDimensions.get().width - 120;
    items13[1] = tmp26(tmp16Result2, obj15);
    obj13[2] = items13;
    items11[1] = tmp27(tmp16Result1, obj13);
    obj9[2] = items11;
    const items14 = [tmp27(tmp28, obj9), , ];
    const obj16 = { align: "top", style: null };
    obj16[1] = tmp3.cloudsBackground;
    items14[1] = tmp26(tmp16(tmp2[24]), obj16);
    const obj17 = { direction: "vertical", spacing: null, style: null, children: null };
    obj17[1] = tmp16(tmp2[7]).space.PX_24;
    obj17[2] = tmp3.questDetailsLandscape;
    const obj18 = { direction: "horizontal", justify: "space-between", spacing: null, children: null };
    obj18[2] = tmp16(tmp2[7]).space.PX_8;
    const obj19 = { style: null, onPress: null, children: null };
    obj19[0] = tmp3.questDetailsPrimary;
    obj19[1] = handlePrimaryCtaPress;
    const obj20 = { variant: "heading-lg/semibold", color: "mobile-text-heading-primary", accessibilityRole: "header", children: null };
    obj20[3] = quest.config.messages.gameTitle;
    const items15 = [tmp26(tmp(tmp2[28]).Text, obj20), ];
    const obj21 = { variant: "heading-sm/semibold", color: "text-subtle", children: null };
    obj21[2] = quest.config.messages.gamePublisher;
    items15[1] = tmp26(tmp(tmp2[28]).Text, obj21);
    obj19[2] = items15;
    const items16 = [tmp27(tmp(tmp2[27]).PressableOpacity, obj19), ];
    const obj22 = { style: null, children: null };
    obj22[0] = tmp3.questDetailsSecondary;
    const obj23 = { quest: null, location: null, sourceQuestContent: null };
    obj23[0] = quest;
    obj23[1] = tmp7.VIDEO_MODAL_MOBILE;
    obj23[2] = sourceQuestContent;
    obj22[1] = tmp26(tmp16(tmp2[29]), obj23);
    items16[1] = tmp26(tmp28, obj22);
    obj18[3] = items16;
    const items17 = [tmp27(tmp(tmp2[26]).Stack, obj18), , ];
    tmp26Result = null != memo;
    if (tmp26Result) {
      const obj24 = { onPress: null, children: null };
      obj24[0] = handlePrimaryCtaPress;
      const obj25 = { source: null, style: null };
      const obj26 = { uri: null };
      obj26[0] = memo.url;
      obj25[0] = obj26;
      obj25[1] = tmp3.playerThumbnail;
      obj24[1] = tmp26(tmp16(tmp2[30]), obj25);
      tmp26Result = tmp26(tmp(tmp2[27]).PressableOpacity, obj24);
    }
    items17[1] = tmp26Result;
    const obj27 = { direction: "horizontal", spacing: null, children: null };
    obj27[1] = tmp16(tmp2[7]).space.PX_16;
    const obj28 = { grow: true, variant: "expressive", onPress: null, text: null };
    obj28[2] = handlePrimaryCtaPress;
    const tmpResult6 = tmp(tmp2[11]);
    obj28[3] = tmp(tmp2[32]).getExternalCtaLabel(quest);
    const items18 = [tmp26(tmp(tmp2[31]).Button, obj28), , ];
    if (isShareable) {
      const obj29 = { accessibilityLabel: null, icon: null, onPress: null, variant: "secondary" };
      const intl = tmp(tmp2[34]).intl;
      obj29[0] = intl.string(tmp(tmp2[34]).t.Ej3B3Y);
      obj29[1] = tmp16(tmp2[35]);
      obj29[2] = handleShareQuest;
      isShareable = tmp26(tmp(tmp2[33]).IconButton, obj29);
    }
    items18[1] = isShareable;
    if (tmp26Result) {
      const obj30 = { accessibilityLabel: null, icon: null, onPress: null, variant: "secondary" };
      const intl2 = tmp(tmp2[34]).intl;
      obj30[0] = intl2.string(tmp(tmp2[34]).t.cfY4PE);
      obj30[1] = tmp16(tmp2[36]);
      obj30[2] = onNavigateToPostWatchVideo;
      tmp26Result = tmp26(tmp(tmp2[33]).IconButton, obj30);
    }
    items18[2] = tmp26Result;
    obj27[2] = items18;
    items17[2] = tmp27(tmp(tmp2[26]).Stack, obj27);
    obj17[3] = items17;
    items14[2] = tmp27(tmp(tmp2[26]).Stack, obj17);
    obj8[1] = items14;
    obj7[4] = tmp27(tmp28, obj8);
    tmp26Result1 = tmp26(tmp32, obj7);
    const tmpResult7 = tmp(tmp2[32]);
  }
  items7[1] = tmp26Result1;
  obj2[1] = items7;
  obj1[2] = closure_11(sharedValue, obj2);
  return closure_10(quest(tmp2[19]).SafeAreaPaddingView, obj1);
});
let closure_24 = importAllResult.memo((arg0) => {
  let captionsEnabled;
  let externallyPaused;
  let handleClose;
  let handleOpenTranscript;
  let handlePrimaryCtaPress;
  let handleRewardDetailsPress;
  let handleShareQuest;
  let handleToggleCaptions;
  let hasCaptionAsset;
  let hasTranscriptAsset;
  let isFullscreen;
  let isShareable;
  let onEnd;
  let onNavigateToPostWatchVideo;
  let quest;
  let sourceQuestContent;
  ({ quest, captionsEnabled, handlePrimaryCtaPress, handleOpenTranscript, handleToggleCaptions, sourceQuestContent, hasCaptionAsset, hasTranscriptAsset, isShareable } = arg0);
  let windowDimensions;
  let memo;
  let dependencyMap;
  let first;
  let importAllResult;
  ({ handleClose, handleRewardDetailsPress, handleShareQuest, isFullscreen, onNavigateToPostWatchVideo, onEnd, externallyPaused } = arg0);
  let obj = windowDimensions(10374);
  const questTaskDetails = obj.useQuestTaskDetails(quest);
  const userStatus = quest.userStatus;
  let completedAt;
  if (userStatus != null) {
    completedAt = userStatus.completedAt;
  }
  let tmpResult = tmp(10501);
  const videoQuestProgressRemainingAccessibilityLabel = tmpResult.getVideoQuestProgressRemainingAccessibilityLabel(questTaskDetails, tmp5);
  const VideoQuestPlayerRefactorExperiment = tmp(10499).VideoQuestPlayerRefactorExperiment;
  obj = { location: QuestsExperimentLocations.VIDEO_MODAL_MOBILE };
  if (VideoQuestPlayerRefactorExperiment.useConfig(obj).enabled) {
    let VideoQuestPlayer = tmp(14275).VideoQuestPlayer;
  } else {
    VideoQuestPlayer = tmp(14278).VideoQuestPlayer;
  }
  windowDimensions = importAllResult.useContext(tmp(14241).QuestDockGestureContext).windowDimensions;
  const items = [windowDimensions];
  memo = importAllResult.useMemo(() => Math.floor(windowDimensions.get().width / 0.5625), items);
  const callback = importAllResult.useCallback(() => {

  }, []);
  const tmp11 = memo(1581)();
  dependencyMap = tmp11;
  const tmp12 = first(importAllResult.useState(64), 2);
  first = tmp12[0];
  importAllResult = tmp12[1];
  const items1 = [memo, first, windowDimensions, tmp11];
  const callback1 = importAllResult.useCallback((nativeEvent) => {
    callback(nativeEvent.nativeEvent.layout.height);
  }, []);
  const memo1 = importAllResult.useMemo(() => Math.min(windowDimensions.get().height - _undefined.top - _undefined.bottom - first, memo), items1);
  let tmp19Result = callback3(windowDimensions.get().height - memo1 - first < 200);
  obj = { bottom: true, style: items2, children: null };
  items2 = [, ];
  ({ wrapper: arr3[0], wrapperPortrait: arr3[1] } = tmp19Result);
  const items3 = [tmp19Result.videoWrapper, ];
  if (null == memo1) {
    let obj1 = { flexGrow: 1 };
  } else {
    obj1 = { height: null };
    obj1[0] = memo1;
  }
  const obj2 = { style: items3, children: null };
  items3[1] = obj1;
  const obj3 = { theme: ThemeTypes.DARKER, children: null };
  obj3[1] = callback2(VideoQuestPlayer, { captionsEnabled, onLoad: callback, externallyPaused, orientation: "portrait", contentInsets: closure_16, handleOpenTranscript, handleToggleCaptions, isFullscreen, onEnd, sourceQuestContent, hasCaptionAsset, hasTranscriptAsset });
  const items4 = [callback2(windowDimensions(3997).ThemeContextProvider, obj3), callback2(memo(4706), { start: closure_12, end: closure_13, style: tmp19Result.gradientTop, colors: items }), callback2(memo(4706), { start: closure_12, end: closure_13, style: tmp19Result.gradientBottom, colors: items1 }), ];
  const obj7 = { style: items5, children: null };
  items5 = [, ];
  ({ videoContentWrapper: arr6[0], videoContentWrapperPortrait: arr6[1] } = tmp19Result);
  const obj8 = { closeButtonIconColor: null, onClose: null, showCurrentVideoTime: true, withTextShadow: true };
  obj8[0] = memo(712).colors.WHITE;
  obj8[1] = handleClose;
  const items6 = [callback2(memo(14296), obj8), ];
  const obj9 = { direction: "vertical", spacing: null, children: null };
  obj9[1] = memo(712).space.PX_24;
  const obj10 = { direction: "horizontal", justify: "space-between", spacing: null, children: null };
  obj10[2] = memo(712).space.PX_8;
  const obj11 = { style: tmp19Result.questDetailsPrimary, onPress: handlePrimaryCtaPress, children: null };
  const items7 = [callback2(windowDimensions(4281).Text, { variant: "heading-lg/semibold", color: "text-overlay-light", style: tmp19Result.textShadow, accessibilityRole: "header", children: quest.config.messages.gameTitle }), ];
  const items8 = [, ];
  ({ textShadow: arr9[0], questDetailsSubheader: arr9[1] } = tmp19Result);
  items7[1] = callback2(windowDimensions(4281).Text, { variant: "heading-sm/semibold", color: "text-overlay-light", style: items8, children: quest.config.messages.gamePublisher });
  obj11[2] = items7;
  const items9 = [closure_11(windowDimensions(4812).PressableOpacity, obj11), ];
  const obj12 = { variant: "heading-lg/semibold", color: "text-overlay-light", style: tmp19Result.textShadow, accessibilityRole: "header", children: quest.config.messages.gameTitle };
  const obj13 = { variant: "heading-sm/semibold", color: "text-overlay-light", style: items8, children: quest.config.messages.gamePublisher };
  const obj4 = { captionsEnabled, onLoad: callback, externallyPaused, orientation: "portrait", contentInsets: closure_16, handleOpenTranscript, handleToggleCaptions, isFullscreen, onEnd, sourceQuestContent, hasCaptionAsset, hasTranscriptAsset };
  const obj5 = { start: closure_12, end: closure_13, style: tmp19Result.gradientTop, colors: items };
  const obj6 = { start: closure_12, end: closure_13, style: tmp19Result.gradientBottom, colors: items1 };
  const tmp10Result = memo(14296);
  const tmp7 = QuestsExperimentLocations;
  items9[1] = callback2(closure_5, { style: tmp19Result.questDetailsSecondary, children: callback2(memo(14273), obj15) });
  obj10[3] = items9;
  const items10 = [closure_11(windowDimensions(4693).Stack, obj10), ];
  const obj16 = { grow: true, variant: "expressive", onPress: handlePrimaryCtaPress, text: null };
  tmpResult = tmp(10396);
  obj16[3] = tmpResult.getExternalCtaLabel(quest);
  items10[1] = callback2(windowDimensions(4695).Button, obj16);
  obj9[2] = items10;
  items6[1] = closure_11(windowDimensions(4693).Stack, obj9);
  obj7[1] = items6;
  items4[3] = closure_11(closure_5, obj7);
  obj2[1] = items4;
  const items11 = [closure_11(closure_5, obj2), ];
  const obj17 = { direction: "horizontal", justify: "flex-end", align: "center", style: tmp19Result.footer, spacing: null, onLayout: null, children: null };
  obj17[4] = memo(712).space.PX_4;
  obj17[5] = callback1;
  tmp19Result = tmp5;
  if (null != completedAt) {
    const obj18 = { style: null, children: null };
    obj18[0] = tmp19Result.viewRewardBtn;
    const obj19 = { icon: null, iconPosition: "end", onPress: null, variant: "secondary", size: "sm", text: null };
    obj19[0] = tmp19(tmp(9607).ArrowSmallRightIcon, { size: "sm" });
    obj19[2] = onNavigateToPostWatchVideo;
    let intl = tmp(1236).intl;
    obj19[5] = intl.string(tmp(1236).t["jyYgZ+"]);
    obj18[1] = tmp19(tmp(4695).Button, obj19);
    tmp19Result = tmp19(tmp18, obj18);
  }
  const items12 = [tmp19Result, , , , ];
  if (hasTranscriptAsset) {
    const obj20 = { accessibilityLabel: null, onPress: null, children: null };
    const intl2 = tmp(1236).intl;
    obj20[0] = intl2.string(tmp(1236).t.KCzjTi);
    obj20[1] = handleOpenTranscript;
    const obj21 = { color: null };
    obj21[0] = tmp19Result.iconDisabled.color;
    obj20[2] = tmp19(tmp(14176).TranscriptOutlineIcon, obj21);
    hasTranscriptAsset = tmp19(closure_26, obj20);
  }
  items12[1] = hasTranscriptAsset;
  if (!hasCaptionAsset) {
    items12[2] = hasCaptionAsset;
    if (isShareable) {
      const obj22 = { accessibilityLabel: null, onPress: null, children: null };
      const intl4 = tmp(1236).intl;
      obj22[0] = intl4.string(tmp(1236).t.Ej3B3Y);
      obj22[1] = handleShareQuest;
      const obj23 = { color: null };
      obj23[0] = tmp10(712).colors.TEXT_DEFAULT;
      obj22[2] = tmp19(tmp(12142).ShareIcon, obj23);
      isShareable = tmp19(closure_26, obj22);
    }
    items12[3] = isShareable;
    const obj24 = { quest: null, location: null, sourceQuestContent: null, children: null };
    obj24[0] = quest;
    obj24[1] = tmp7.VIDEO_MODAL_MOBILE;
    obj24[2] = sourceQuestContent;
    obj24[3] = function children(ref) {
      let obj = { accessibilityLabel: null, ref: null };
      const merged = Object.assign(ref, Object.create(null));
      const intl = windowDimensions(_undefined[34]).intl;
      obj[0] = intl.string(windowDimensions(_undefined[34]).t.PdRCRg);
      obj[1] = ref.ref;
      const merged1 = Object.assign(merged);
      obj = { color: null };
      obj[0] = memo(_undefined[7]).colors.TEXT_DEFAULT;
      obj.children = callback2(windowDimensions(_undefined[45]).MoreHorizontalIcon, obj);
      return callback2(closure_26, obj);
    };
    items12[4] = tmp19(tmp10(14294), obj24);
    obj17[6] = items12;
    items11[1] = tmp17(tmp(4693).Stack, obj17);
    obj[2] = items11;
    return tmp17(tmp(5272).SafeAreaPaddingView, obj);
  } else {
    const obj25 = { accessibilityLabel: null, onPress: null, children: null };
    const intl3 = tmp(1236).intl;
    obj25[0] = intl3.string(tmp(1236).t.bDSZO1);
    obj25[1] = handleToggleCaptions;
    if (captionsEnabled) {
      let color = tmp19Result.icon.color;
    } else {
      color = tmp19Result.iconDisabled.color;
    }
    const obj26 = { color: null };
    obj26[0] = color;
    tmp19Result = tmp19(tmp(14174).ClosedCaptionsOutlineIcon, obj26);
    obj25[2] = tmp19Result;
    tmp19(closure_26, obj25);
    const tmp23 = closure_26;
  }
});
let obj = { footerButton: null };
obj = { padding: require("Themes").space.PX_8 };
obj[0] = obj;
let closure_25 = createCacheKey.createStyles(obj);
let closure_26 = importAllResult.forwardRef(function FooterButton(arg0, ref) {
  const obj = { accessibilityRole: "button", style: callback4().footerButton };
  const merged = Object.assign(arg0);
  obj.ref = ref;
  return callback2(PressableBase.PressableOpacity, obj);
});
const alphaResult3 = require("n")(require("Themes").unsafe_rawColors.PLUM_23).alpha(0.4);
const memoResult = importAllResult.memo(function VideoQuestModalContentInProgress(arg0) {
  let closure_4;
  let dependencyMap;
  let isFullscreen;
  let onClose;
  let onEnd;
  let onNavigateToPostWatchVideo;
  let setIsFullscreen;
  let sourceQuestContent;
  let tmp11;
  let tmp6;
  ({ onClose, sourceQuestContent } = arg0);
  ({ isFullscreen, onNavigateToPostWatchVideo, onEnd, setIsFullscreen } = arg0);
  let obj = sourceQuestContent(14268);
  const quest = obj.useVideoQuestModalContext().quest;
  const items = [quest];
  const items1 = [quest];
  const memo = importAllResult.useMemo(() => sourceQuestContent(outer1_2[11]).getQuestAsset(quest, sourceQuestContent(outer1_2[11]).QuestAssetType.VIDEO_PLAYER_CAPTION, undefined, true), items);
  const memo1 = importAllResult.useMemo(() => sourceQuestContent(outer1_2[11]).getQuestAsset(quest, sourceQuestContent(outer1_2[11]).QuestAssetType.VIDEO_PLAYER_TRANSCRIPT, undefined, true), items1);
  [tmp6, dependencyMap] = getQuestImpressionId(importAllResult.useState(false), 2);
  const items2 = [quest];
  const callback = importAllResult.useCallback(() => callback((arg0) => !arg0), []);
  const callback1 = importAllResult.useCallback(() => {
    let obj = quest(outer1_2[47]);
    obj = { quest };
    obj.openLazy(sourceQuestContent(outer1_2[49])(outer1_2[48], outer1_2.paths), "transcript-" + quest.id, obj);
  }, items2);
  let tmp = sourceQuestContent;
  const tmp5 = getQuestImpressionId(importAllResult.useState(false), 2);
  getQuestImpressionId = sourceQuestContent(10403).useGetQuestImpressionId();
  const obj2 = sourceQuestContent(10403);
  [tmp11, closure_4] = getQuestImpressionId(importAllResult.useState(false), 2);
  const tmp10 = getQuestImpressionId(importAllResult.useState(false), 2);
  const isShareableQuestResult = sourceQuestContent(7101).isShareableQuest(quest.config);
  let closure_5 = isShareableQuestResult;
  const items3 = [isShareableQuestResult, quest.id, getQuestImpressionId, sourceQuestContent];
  const callback2 = importAllResult.useCallback(() => {
    if (closure_5) {
      let getQuestUrl = sourceQuestContent;
      let id = outer1_2;
      let obj = sourceQuestContent(outer1_2[52]);
      if (obj.shouldMigrateToAdAnalyticsInterface(sourceQuestContent(outer1_2[52]).AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL, "video_quest_modal_in_progress")) {
        const questUrl = getQuestUrl(id[53]);
        obj = { type: null, adCreativeType: null, adCreativeId: null, questContentCTA: null, surfaceId: null, sourceQuestContent: null, impressionId: null };
        obj[0] = getQuestUrl(id[54]).AdUserActionType.CLICK_INTERNAL;
        obj[1] = getQuestUrl(id[55]).AdCreativeType.QUEST;
        obj[2] = quest.id;
        obj[3] = getQuestUrl(id[56]).QuestContentCTA.MOBILE_SHARESHEET;
        obj[4] = getQuestUrl(id[57]).QuestContent.VIDEO_MODAL_MOBILE;
        obj[5] = sourceQuestContent;
        obj[6] = getQuestImpressionId();
        questUrl.captureAdUserAction(obj);
        let tmp = quest;
      } else {
        const questUrl1 = getQuestUrl(id[58]);
        obj = { questId: null, questContent: null, questContentCTA: null, impressionId: null, sourceQuestContent: null };
        tmp = quest;
        obj[0] = quest.id;
        obj[1] = getQuestUrl(id[57]).QuestContent.VIDEO_MODAL_MOBILE;
        obj[2] = getQuestUrl(id[56]).QuestContentCTA.MOBILE_SHARESHEET;
        obj[3] = getQuestImpressionId();
        obj[4] = sourceQuestContent;
        const result = questUrl1.trackQuestContentClicked(obj);
      }
      callback2(true);
      const questUrl2 = getQuestUrl(id[59]);
      const obj1 = { message: null, iOSOnlyShareCallback: null };
      const questUrl3 = getQuestUrl(id[32]);
      getQuestUrl = questUrl3.getQuestUrl;
      obj1[0] = getQuestUrl(tmp.id);
      obj1[1] = function iOSOnlyShareCallback() {
        return callback(false);
      };
      id = tmp.id;
      const _HermesInternal = HermesInternal;
      questUrl2.showShareActionSheet(obj1, "Video Quest Modal - " + id);
    }
  }, items3);
  const obj3 = sourceQuestContent(7101);
  const items4 = [quest.id];
  const videoQuestClickCtaAndMaybeCloseModal = sourceQuestContent(14298).useVideoQuestClickCtaAndMaybeCloseModal({ quest, onClose, sourceQuestContent });
  const callback3 = importAllResult.useCallback(() => {
    let obj = sourceQuestContent(outer1_2[61]);
    obj = { questId: quest.id };
    const result = obj.openRewardDetailsBottomSheet(obj);
  }, items4);
  const obj4 = sourceQuestContent(14298);
  const videoExternallyPaused = sourceQuestContent(14299).useVideoExternallyPaused(quest.id, tmp11);
  const tmp17 = quest.config.taskConfigV2.tasks[sourceQuestContent(undefined, 5135).FirstPartyQuestTaskTypes.WATCH_VIDEO_ON_MOBILE];
  let tmp18 = null == tmp17;
  if (!tmp18) {
    tmp18 = "portrait" === tmp(10501).getVideoOrientation(tmp17);
    const tmpResult = tmp(10501);
  }
  obj = { quest, captionsEnabled: tmp6, handleClose: onClose, handlePrimaryCtaPress: videoQuestClickCtaAndMaybeCloseModal, handleRewardDetailsPress: callback3, handleShareQuest: callback2, handleOpenTranscript: callback1, handleToggleCaptions: callback, isFullscreen, onNavigateToPostWatchVideo, onEnd, setIsFullscreen, externallyPaused: videoExternallyPaused, sourceQuestContent, hasCaptionAsset: null != memo, hasTranscriptAsset: null != memo1, isShareable: isShareableQuestResult };
  return callback2(tmp18 ? closure_24 : closure_23, obj);
});
let result = require("get ActivityIndicator").fileFinishedImporting("modules/quests/native/VideoQuestModal/VideoQuestModalContentInProgress.tsx");

export default memoResult;