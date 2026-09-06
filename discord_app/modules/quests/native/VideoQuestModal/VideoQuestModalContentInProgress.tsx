// === Module 15130: VideoQuestModalContentInProgress ===

// Module 15130 (VideoQuestModalContentInProgress)
import nativeDefault from "native" /* 576 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4296 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import timing from "timing" /* 4561 */;
import Pressables from "Pressables" /* 5123 */;
import QuestTypes from "QuestTypes" /* 5447 */;
import AdAnalyticsInterfaceExperiment from "AdAnalyticsInterfaceExperiment" /* 11192 */;
import AssetUtils from "AssetUtils" /* 11285 */;
import QuestUtils from "QuestUtils" /* 11767 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import n from "module_672" /* 672 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, StyleSheet: metroRequire, ScrollView: closure_7 } = get_ActivityIndicator);
const QuestsExperimentLocations = fn(5444).QuestsExperimentLocations;
const ThemeTypes = fn(1085).ThemeTypes;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const start = { x: 0, y: 0 };
const end = { x: 0, y: 1 };
const importDefaultResultResult = n(nativeDefault.unsafe_rawColors.PLUM_23);
let items = [n(nativeDefault.unsafe_rawColors.PLUM_23).alpha(0.4).hex(), ];
const alphaResult = n(nativeDefault.unsafe_rawColors.PLUM_23).alpha(0.4);
const importDefaultResult1Result = n(nativeDefault.unsafe_rawColors.PLUM_23);
items[1] = n(nativeDefault.unsafe_rawColors.PLUM_23).alpha(0).hex();
const alphaResult1 = n(nativeDefault.unsafe_rawColors.PLUM_23).alpha(0);
const importDefaultResult2Result = n(nativeDefault.unsafe_rawColors.PLUM_23);
let items1 = [n(nativeDefault.unsafe_rawColors.PLUM_23).alpha(0).hex(), ];
const alphaResult2 = n(nativeDefault.unsafe_rawColors.PLUM_23).alpha(0);
const importDefaultResult3Result = n(nativeDefault.unsafe_rawColors.PLUM_23);
items1[1] = n(nativeDefault.unsafe_rawColors.PLUM_23).alpha(0.4).hex();
const contentInsets = { bottom: 158, top: 64, left: 16, right: 16 };
const contentInsets2 = { bottom: 16, left: 16, right: 16 };
let createStyles = fn(4560);
let closure_18 = createStyles.createStyles((arg0) => {
  let obj = { wrapper: null, wrapperPortrait: null, videoLandscape: null, videoLandscape9by16: null, landscapeContentScroll: null, landscapeContentScrollContent: null, videoLandscapeFullscreen: null, videoWrapper: null, videoWrapperLandscape: null, videoWrapperFullscreen: null, videoContentWrapper: null, videoContentWrapperLandscape: null, videoContentWrapperPortrait: null, rewardContainer: null, rewardContentCentered: null, modalBackground: null, questDetailsLandscape: null, questDetailsPrimary: null, questDetailsSecondary: null, footer: null, icon: null, iconDisabled: null, closeButtonLandscape: null, gradientTop: null, gradientBottom: null, textShadow: null, viewRewardBtn: null, playerThumbnail: null, cloudsBackground: null, questDetailsSubheader: null };
  obj = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, flex: 1 };
  obj.wrapper = obj;
  obj = { borderTopLeftRadius: nativeDefault.radii.lg, borderTopRightRadius: nativeDefault.radii.lg, justifyContent: null };
  let str = "center";
  if (arg0) {
    str = "flex-start";
  }
  obj.justifyContent = str;
  obj.wrapperPortrait = obj;
  obj.videoLandscape = { width: "100%", position: "relative" };
  obj.videoLandscape9by16 = { aspectRatio: 1.7777777777777777, flexShrink: 0 };
  obj.landscapeContentScroll = { flex: 1 };
  obj.landscapeContentScrollContent = { flexGrow: 1 };
  obj.videoLandscapeFullscreen = { flexGrow: 1, flexShrink: 1 };
  obj.videoWrapper = { borderRadius: nativeDefault.radii.lg, flexGrow: 0, flexShrink: 0, overflow: "hidden" };
  const obj1 = { borderRadius: nativeDefault.radii.lg, flexGrow: 0, flexShrink: 0, overflow: "hidden" };
  obj.videoWrapperLandscape = { flexGrow: 1, borderTopLeftRadius: nativeDefault.radii.none, borderTopRightRadius: nativeDefault.radii.none };
  const obj2 = { flexGrow: 1, borderTopLeftRadius: nativeDefault.radii.none, borderTopRightRadius: nativeDefault.radii.none };
  obj.videoWrapperFullscreen = { borderRadius: nativeDefault.radii.none };
  const obj3 = { borderRadius: nativeDefault.radii.none };
  obj.videoContentWrapper = { flexDirection: "column", pointerEvents: "box-none", flexGrow: 1, flexShrink: 0, justifyContent: "space-between", padding: nativeDefault.space.PX_16 };
  obj.videoContentWrapperLandscape = { padding: 0 };
  const merged = Object.assign(timestampProducer.absoluteFillObject);
  obj.videoContentWrapperPortrait = {};
  obj.rewardContainer = { justifyContent: "center", flexGrow: 1, flexShrink: 0 };
  const rect = { position: "absolute", top: nativeDefault.space.PX_16, left: nativeDefault.space.PX_16, right: nativeDefault.space.PX_16, bottom: nativeDefault.space.PX_16, alignItems: "center", justifyContent: "center" };
  obj.rewardContentCentered = rect;
  const obj4 = { flexDirection: "column", pointerEvents: "box-none", flexGrow: 1, flexShrink: 0, justifyContent: "space-between", padding: nativeDefault.space.PX_16 };
  const obj5 = {};
  obj.modalBackground = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
  const obj6 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
  obj.questDetailsLandscape = { borderTopWidth: 1, borderColor: nativeDefault.colors.BACKGROUND_MOD_STRONG, paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_24 };
  obj.questDetailsPrimary = { flexGrow: 0, flexShrink: 1 };
  obj.questDetailsSecondary = { flexGrow: 0, flexShrink: 0 };
  const obj7 = { borderTopWidth: 1, borderColor: nativeDefault.colors.BACKGROUND_MOD_STRONG, paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_24 };
  obj.footer = { paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_8 };
  const obj8 = { paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_8 };
  obj.icon = { color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE };
  const obj9 = { color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE };
  obj.iconDisabled = { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
  const rect1 = { position: "absolute", top: nativeDefault.space.PX_16, left: nativeDefault.space.PX_16 };
  obj.closeButtonLandscape = rect1;
  const obj11 = {};
  const merged1 = Object.assign(timestampProducer.absoluteFillObject);
  obj11.bottom = undefined;
  obj11.height = 70;
  obj.gradientTop = obj11;
  const obj12 = {};
  const merged2 = Object.assign(timestampProducer.absoluteFillObject);
  obj12.top = undefined;
  obj12.height = 150;
  obj.gradientBottom = obj12;
  const obj10 = { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
  obj.textShadow = { margin: -15, padding: 15, textShadowColor: nativeDefault.colors.BLACK, textShadowOffset: { width: 0, height: 0 }, textShadowRadius: 15 };
  obj.viewRewardBtn = { marginRight: "auto" };
  const size = { borderRadius: nativeDefault.radii.lg, height: 96, width: "100%" };
  obj.playerThumbnail = size;
  obj.cloudsBackground = { zIndex: -1 };
  obj.questDetailsSubheader = { opacity: 0.6 };
  return obj;
});
const __initData = { code: "function VideoQuestModalContentInProgressTsx1(){const{withDelay,LOGO_REWARD_TRANSITION_DELAY_MS,withTiming,isComponentMounted,LOGO_REWARD_TRANSITION_DURATION_MS}=this.__closure;return withDelay(LOGO_REWARD_TRANSITION_DELAY_MS,withTiming(isComponentMounted.get(),{duration:LOGO_REWARD_TRANSITION_DURATION_MS}));}" };
const __initData2 = { code: "function VideoQuestModalContentInProgressTsx2(){const{animation}=this.__closure;return{opacity:animation.get()};}" };
const __initData3 = { code: "function VideoQuestModalContentInProgressTsx3(){const{animation}=this.__closure;return{opacity:1-animation.get()};}" };
const __initData4 = { code: "function VideoQuestModalContentInProgressTsx4(){const{animation}=this.__closure;return{pointerEvents:animation.get()>0.3?'auto':'none'};}" };
let closure_23 = noop.memo((quest) => {
  quest = quest.quest;
  ({ handleAdvertiserDetailsPress, isFullscreen } = quest);
  const setIsFullscreen = quest.setIsFullscreen;
  ({ sourceQuestContent, isShareable } = quest);
  _slicedToArray = undefined;
  noop = undefined;
  let sharedValue;
  let derivedValue;
  let tmp2 = setIsFullscreen;
  ({ captionsEnabled, contentWidth, handleClose, handlePrimaryCtaPress, handleShareQuest, handleOpenTranscript, handleToggleCaptions, onNavigateToPostWatchVideo, onEnd, externallyPaused, hasCaptionAsset, hasTranscriptAsset } = quest);
  let obj = quest(setIsFullscreen[10]);
  const tmp3 = closure_18(obj.isAndroid());
  let obj1 = noop;
  items = [quest];
  const memo = noop.useMemo(() => AssetUtils.getQuestAsset(quest, AssetUtils.QuestAssetType.HERO), items);
  const userStatus = quest.userStatus;
  let completedAt;
  if (userStatus != null) {
    completedAt = userStatus.completedAt;
  }
  let tmp25Result = null != completedAt;
  [tmp8, c3] = _slicedToArray(obj1.useState(null), 2);
  const callback = obj1.useCallback((nativeEvent) => {
    _undefined(nativeEvent.nativeEvent.layout.height);
  }, []);
  const tmp7 = _slicedToArray(obj1.useState(null), 2);
  [num, c4] = _slicedToArray(obj1.useState(null), 2);
  let diff = null;
  const callback1 = obj1.useCallback((nativeEvent) => {
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
  let tmpResult = tmp(tmp2[12]);
  sharedValue = tmpResult.useSharedValue(0);
  items1 = [sharedValue];
  const effect = obj1.useEffect(() => {
    const result = sharedValue.set(1);
  }, items1);
  tmpResult = tmp(tmp2[12]);
  function te() {
    const obj = ReanimatedRexport;
    return obj.withDelay(3000, timing.withTiming(sharedValue.get(), { duration: 1000 }));
  }
  obj = { withDelay: tmp(tmp2[12]).withDelay, LOGO_REWARD_TRANSITION_DELAY_MS: 3000, withTiming: tmp(tmp2[13]).withTiming, isComponentMounted: sharedValue, LOGO_REWARD_TRANSITION_DURATION_MS: 1000 };
  te.__closure = obj;
  te.__workletHash = 12561024953493;
  te.__initData = __initData;
  derivedValue = tmpResult.useDerivedValue(te);
  const tmp10 = _slicedToArray(obj1.useState(null), 2);
  function ne() {
    return { opacity: derivedValue.get() };
  }
  ne.__closure = { animation: derivedValue };
  ne.__workletHash = 17463485679217;
  ne.__initData = __initData2;
  const animatedStyle = quest(tmp2[12]).useAnimatedStyle(ne);
  const tmpResult1 = quest(tmp2[12]);
  function se() {
    return { opacity: 1 - derivedValue.get() };
  }
  se.__closure = { animation: derivedValue };
  se.__workletHash = 9103187579788;
  se.__initData = __initData3;
  const animatedStyle1 = quest(tmp2[12]).useAnimatedStyle(se);
  const tmpResult2 = quest(tmp2[12]);
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
  obj = { bottom: true, style: tmp3.wrapper, children: null };
  const items3 = [, , ];
  ({ videoWrapper: arr4[0], videoWrapperLandscape: arr4[1] } = tmp3);
  let videoWrapperFullscreen = isFullscreen;
  if (isFullscreen) {
    videoWrapperFullscreen = tmp3.videoWrapperFullscreen;
  }
  obj1 = { style: items3, children: null };
  items3[2] = videoWrapperFullscreen;
  const obj2 = { theme: ThemeTypes.DARKER, children: null };
  const obj3 = { captionsEnabled, orientation: "landscape", style: null, contentInsets: null, handleOpenTranscript: null, handleToggleCaptions: null, isFullscreen: null, externallyPaused: null, onEnd: null, onToggleFullscreen: null, sourceQuestContent: null, hasCaptionAsset: null, hasTranscriptAsset: null };
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
  obj3.style = items4;
  obj3.contentInsets = contentInsets2;
  obj3.handleOpenTranscript = handleOpenTranscript;
  obj3.handleToggleCaptions = handleToggleCaptions;
  obj3.isFullscreen = isFullscreen;
  obj3.externallyPaused = externallyPaused;
  obj3.onEnd = onEnd;
  obj3.onToggleFullscreen = callback2;
  obj3.sourceQuestContent = sourceQuestContent;
  obj3.hasCaptionAsset = hasCaptionAsset;
  obj3.hasTranscriptAsset = hasTranscriptAsset;
  const items5 = [closure_10(quest(tmp2[17]).VideoQuestPlayer, obj3), ];
  const obj4 = { onClose: handleClose, style: null };
  const items6 = [tmp3.closeButtonLandscape, ];
  let tmp29 = isFullscreen;
  let tmp15Result = isFullscreen(tmp2[18]);
  if (isFullscreen) {
    tmp29 = null != tmp23;
  }
  if (tmp29) {
    const obj5 = { left: tmp23.left };
    tmp29 = obj5;
  }
  items6[1] = tmp29;
  obj4.style = items6;
  items5[1] = closure_10(tmp15Result, obj4);
  obj2.children = items5;
  const items7 = [closure_11(quest(tmp2[16]).ThemeContextProvider, obj2), ];
  let tmp25Result1 = !isFullscreen;
  if (!isFullscreen) {
    const obj6 = { style: null, contentContainerStyle: null, showsVerticalScrollIndicator: false, alwaysBounceVertical: false, children: null };
    ({ landscapeContentScroll: obj15.style, landscapeContentScrollContent: obj15.contentContainerStyle } = tmp3);
    const obj7 = { style: null, children: null };
    const items8 = [, ];
    ({ videoContentWrapper: arr9[0], videoContentWrapperLandscape: arr9[1] } = tmp3);
    obj7.style = items8;
    const obj8 = { style: null, onLayout: null, children: null };
    const items9 = [tmp3.rewardContainer, ];
    const obj9 = { minHeight: sum1 };
    items9[1] = obj9;
    obj8.style = items9;
    obj8.onLayout = callback;
    const obj10 = { style: null, animatedProps: null, children: null };
    const items10 = [tmp3.rewardContentCentered, animatedStyle];
    obj10.style = items10;
    obj10.animatedProps = animatedProps;
    tmp15Result = isFullscreen(tmp2[19]);
    const obj11 = { size: str2, onTextBlockLayout: callback1 };
    obj10.children = closure_10(isFullscreen(tmp2[20]), obj11);
    const items11 = [closure_10(tmp15Result, obj10), ];
    const items12 = [tmp3.rewardContentCentered, , ];
    const tmp15Result1 = isFullscreen(tmp2[19]);
    const tmpResult4 = tmp(tmp2[10]);
    const obj12 = { style: null, pointerEvents: "none", children: null };
    items12[1] = tmp(tmp2[10]).isAndroid() && tmp3.modalBackground;
    items12[2] = animatedStyle1;
    obj12.style = items12;
    const tmp34 = tmp(tmp2[10]).isAndroid() && tmp3.modalBackground;
    let isAndroidResult = tmp(tmp2[10]).isAndroid();
    if (isAndroidResult) {
      const obj13 = { align: "top", style: tmp3.cloudsBackground };
      isAndroidResult = closure_10(isFullscreen(tmp2[21]), obj13);
    }
    const items13 = [isAndroidResult, ];
    const obj14 = { assetUrl: null, maxHeight: 90, maxWidth: null };
    const tmpResult5 = tmp(tmp2[10]);
    const tmp15Result2 = isFullscreen(tmp2[22]);
    obj14.assetUrl = tmp(tmp2[11]).getQuestAsset(quest, tmp(tmp2[11]).QuestAssetType.LOGO_TYPE, "dark").url;
    obj14.maxWidth = contentWidth - 120;
    items13[1] = closure_10(tmp15Result2, obj14);
    obj12.children = items13;
    items11[1] = closure_11(tmp15Result1, obj12);
    obj8.children = items11;
    const items14 = [closure_11(tmp27, obj8), , ];
    const obj15 = { align: "top", style: tmp3.cloudsBackground };
    items14[1] = closure_10(isFullscreen(tmp2[21]), obj15);
    const obj16 = { direction: "vertical", spacing: isFullscreen(tmp2[7]).space.PX_24, style: tmp3.questDetailsLandscape, children: null };
    const obj17 = { direction: "horizontal", justify: "space-between", spacing: isFullscreen(tmp2[7]).space.PX_8, children: null };
    const obj18 = { style: tmp3.questDetailsPrimary, onPress: handleAdvertiserDetailsPress, children: null };
    const obj19 = { variant: "heading-lg/semibold", color: "mobile-text-heading-primary", accessibilityRole: "header", children: quest.config.messages.gameTitle };
    const items15 = [closure_10(tmp(tmp2[25]).Text, obj19), ];
    const obj20 = { variant: "heading-sm/semibold", color: "text-subtle", children: quest.config.messages.gamePublisher };
    items15[1] = closure_10(tmp(tmp2[25]).Text, obj20);
    obj18.children = items15;
    const items16 = [closure_11(tmp(tmp2[24]).PressableOpacity, obj18), ];
    const obj21 = { style: tmp3.questDetailsSecondary, children: null };
    const obj22 = { quest, location: QuestsExperimentLocations.VIDEO_MODAL_MOBILE, sourceQuestContent };
    obj21.children = closure_10(isFullscreen(tmp2[26]), obj22);
    items16[1] = closure_10(tmp27, obj21);
    obj17.children = items16;
    const items17 = [closure_11(tmp(tmp2[23]).Stack, obj17), , ];
    tmp25Result = null != memo;
    if (tmp25Result) {
      const obj23 = { onPress: handleAdvertiserDetailsPress, children: null };
      const obj24 = { source: null, style: null };
      const obj25 = { uri: memo.url };
      obj24.source = obj25;
      obj24.style = tmp3.playerThumbnail;
      obj23.children = closure_10(isFullscreen(tmp2[27]), obj24);
      tmp25Result = closure_10(tmp(tmp2[24]).PressableOpacity, obj23);
    }
    items17[1] = tmp25Result;
    const obj26 = { direction: "horizontal", spacing: isFullscreen(tmp2[7]).space.PX_16, children: null };
    const obj27 = { grow: true, variant: "expressive", onPress: handlePrimaryCtaPress, text: null };
    const tmpResult6 = tmp(tmp2[11]);
    obj27.text = tmp(tmp2[29]).getExternalCtaLabel(quest);
    const items18 = [closure_10(tmp(tmp2[28]).Button, obj27), , ];
    if (isShareable) {
      const obj28 = { accessibilityLabel: null, icon: null, onPress: null, variant: "secondary" };
      const intl = tmp(tmp2[31]).intl;
      obj28.accessibilityLabel = intl.string(tmp(tmp2[31]).t.Ej3B3Y);
      obj28.icon = isFullscreen(tmp2[32]);
      obj28.onPress = handleShareQuest;
      isShareable = closure_10(tmp(tmp2[30]).IconButton, obj28);
    }
    items18[1] = isShareable;
    if (tmp25Result) {
      const obj29 = { accessibilityLabel: null, icon: null, onPress: null, variant: "secondary" };
      const intl2 = tmp(tmp2[31]).intl;
      obj29.accessibilityLabel = intl2.string(tmp(tmp2[31]).t.cfY4PE);
      obj29.icon = isFullscreen(tmp2[33]);
      obj29.onPress = onNavigateToPostWatchVideo;
      tmp25Result = closure_10(tmp(tmp2[30]).IconButton, obj29);
    }
    items18[2] = tmp25Result;
    obj26.children = items18;
    items17[2] = closure_11(tmp(tmp2[23]).Stack, obj26);
    obj16.children = items17;
    items14[2] = closure_11(tmp(tmp2[23]).Stack, obj16);
    obj7.children = items14;
    obj6.children = closure_11(tmp27, obj7);
    tmp25Result1 = closure_10(closure_7, obj6);
    const tmpResult7 = tmp(tmp2[29]);
  }
  items7[1] = tmp25Result1;
  obj1.children = items7;
  obj.children = closure_11(sharedValue, obj1);
  return closure_10(quest(tmp2[15]).SafeAreaPaddingView, obj);
});
let closure_24 = noop.memo((arg0) => {
  ({ quest, captionsEnabled, contentWidth } = arg0);
  ({ handleOpenTranscript, handleToggleCaptions, sourceQuestContent, hasCaptionAsset, hasTranscriptAsset, isShareable } = arg0);
  let height;
  let memo;
  _slicedToArray = undefined;
  let first;
  closure_5 = undefined;
  ({ handleClose, handleAdvertiserDetailsPress, handlePrimaryCtaPress, handleRewardDetailsPress, handleShareQuest, isFullscreen, onNavigateToPostWatchVideo, onEnd, externallyPaused } = arg0);
  let obj = contentWidth(memo[34]);
  const questTaskDetails = obj.useQuestTaskDetails(quest);
  const userStatus = quest.userStatus;
  let completedAt;
  if (userStatus != null) {
    completedAt = userStatus.completedAt;
  }
  let tmpResult = contentWidth(tmp2[35]);
  const videoQuestProgressRemainingAccessibilityLabel = tmpResult.getVideoQuestProgressRemainingAccessibilityLabel(questTaskDetails, tmp5);
  height = height(tmp2[37])(first.useContext(contentWidth(tmp2[36]).QuestDockGestureContext).windowDimensions).height;
  items = [contentWidth];
  memo = first.useMemo(() => Math.floor(contentWidth / 0.5625), items);
  const callback = first.useCallback(() => {

  }, []);
  const tmp10 = height(memo[14])();
  _slicedToArray = tmp10;
  const tmp11 = _slicedToArray(first.useState(64), 2);
  first = tmp11[0];
  closure_5 = tmp11[1];
  items1 = [memo, first, height, tmp10];
  const callback1 = first.useCallback((nativeEvent) => {
    closure_5(nativeEvent.nativeEvent.layout.height);
  }, []);
  const memo1 = first.useMemo(() => Math.min(height - closure_3.top - closure_3.bottom - first, memo), items1);
  let tmp18Result = closure_18(height - memo1 - first < 200);
  obj = { bottom: true, style: null, children: null };
  const items2 = [, ];
  ({ wrapper: arr3[0], wrapperPortrait: arr3[1] } = tmp18Result);
  obj.style = items2;
  const items3 = [tmp18Result.videoWrapper, ];
  if (null == memo1) {
    obj = { flexGrow: 1 };
  } else {
    obj = { height: memo1 };
  }
  const obj1 = { style: items3, children: null };
  items3[1] = obj;
  const obj2 = { theme: ThemeTypes.DARKER, children: closure_10(contentWidth(memo[17]).VideoQuestPlayer, { captionsEnabled, onLoad: callback, externallyPaused, orientation: "portrait", contentInsets, handleOpenTranscript, handleToggleCaptions, isFullscreen, onEnd, sourceQuestContent, hasCaptionAsset, hasTranscriptAsset }) };
  const items4 = [closure_10(contentWidth(memo[16]).ThemeContextProvider, obj2), closure_10(height(memo[38]), { start, end, style: tmp18Result.gradientTop, colors: items }), closure_10(height(memo[38]), { start, end, style: tmp18Result.gradientBottom, colors: items1 }), ];
  const obj6 = { style: null, children: null };
  const items5 = [, ];
  ({ videoContentWrapper: arr6[0], videoContentWrapperPortrait: arr6[1] } = tmp18Result);
  obj6.style = items5;
  const obj7 = { closeButtonIconColor: height(memo[7]).colors.WHITE, onClose: handleClose, showCurrentVideoTime: true, withTextShadow: true };
  const items6 = [closure_10(height(memo[39]), obj7), ];
  const obj8 = { direction: "vertical", spacing: height(memo[7]).space.PX_24, children: null };
  const obj9 = { direction: "horizontal", justify: "space-between", spacing: height(memo[7]).space.PX_8, children: null };
  const obj10 = { style: tmp18Result.questDetailsPrimary, onPress: handleAdvertiserDetailsPress, children: null };
  const items7 = [closure_10(contentWidth(memo[25]).Text, { variant: "heading-lg/semibold", color: "text-overlay-light", style: tmp18Result.textShadow, accessibilityRole: "header", children: quest.config.messages.gameTitle }), ];
  const obj12 = { variant: "heading-sm/semibold", color: "text-overlay-light", style: null, children: quest.config.messages.gamePublisher };
  const items8 = [, ];
  ({ textShadow: arr9[0], questDetailsSubheader: arr9[1] } = tmp18Result);
  obj12.style = items8;
  items7[1] = closure_10(contentWidth(memo[25]).Text, obj12);
  obj10.children = items7;
  const items9 = [closure_11(contentWidth(memo[24]).PressableOpacity, obj10), ];
  const obj13 = { style: tmp18Result.questDetailsSecondary, children: closure_10(height(memo[8]), { quest, size: "x-sm", progress: questTaskDetails.percentComplete, hasConfetti: true, onPress: handleRewardDetailsPress, accessibilityLabel: videoQuestProgressRemainingAccessibilityLabel }) };
  items9[1] = closure_10(closure_5, obj13);
  obj9.children = items9;
  const items10 = [closure_11(contentWidth(memo[23]).Stack, obj9), ];
  const obj15 = { grow: true, variant: "expressive", onPress: handlePrimaryCtaPress, text: null };
  tmpResult = contentWidth(tmp2[29]);
  obj15.text = tmpResult.getExternalCtaLabel(quest);
  items10[1] = closure_10(contentWidth(memo[28]).Button, obj15);
  obj8.children = items10;
  items6[1] = closure_11(contentWidth(memo[23]).Stack, obj8);
  obj6.children = items6;
  items4[3] = closure_11(closure_5, obj6);
  obj1.children = items4;
  const items11 = [closure_11(closure_5, obj1), ];
  const obj16 = { direction: "horizontal", justify: "flex-end", align: "center", style: tmp18Result.footer, spacing: height(memo[7]).space.PX_4, onLayout: callback1, children: null };
  tmp18Result = tmp5;
  if (null != completedAt) {
    const obj17 = { style: tmp18Result.viewRewardBtn, children: null };
    const obj18 = { icon: closure_10(contentWidth(tmp2[40]).ArrowSmallRightIcon, { size: "sm" }), iconPosition: "end", onPress: onNavigateToPostWatchVideo, variant: "secondary", size: "sm", text: null };
    let intl = contentWidth(tmp2[31]).intl;
    obj18.text = intl.string(contentWidth(tmp2[31]).t["jyYgZ+"]);
    obj17.children = closure_10(contentWidth(tmp2[28]).Button, obj18);
    tmp18Result = closure_10(tmp17, obj17);
  }
  const items12 = [tmp18Result, , , , ];
  if (hasTranscriptAsset) {
    const obj19 = { accessibilityLabel: null, onPress: null, children: null };
    const intl2 = contentWidth(tmp2[31]).intl;
    obj19.accessibilityLabel = intl2.string(contentWidth(tmp2[31]).t.KCzjTi);
    obj19.onPress = handleOpenTranscript;
    const obj20 = { color: tmp18Result.iconDisabled.color };
    obj19.children = closure_10(contentWidth(tmp2[41]).TranscriptOutlineIcon, obj20);
    hasTranscriptAsset = closure_10(closure_26, obj19);
  }
  items12[1] = hasTranscriptAsset;
  if (!hasCaptionAsset) {
    items12[2] = hasCaptionAsset;
    if (isShareable) {
      const obj21 = { accessibilityLabel: null, onPress: null, children: null };
      const intl4 = contentWidth(tmp2[31]).intl;
      obj21.accessibilityLabel = intl4.string(contentWidth(tmp2[31]).t.Ej3B3Y);
      obj21.onPress = handleShareQuest;
      const obj22 = { color: tmp7(tmp2[7]).colors.TEXT_DEFAULT };
      obj21.children = closure_10(contentWidth(tmp2[43]).ShareIcon, obj22);
      isShareable = closure_10(closure_26, obj21);
    }
    items12[3] = isShareable;
    const obj23 = {
      quest,
      location: QuestsExperimentLocations.VIDEO_MODAL_MOBILE,
      sourceQuestContent,
      children(ref) {
          let obj = { accessibilityLabel: null, ref: null };
          const merged = Object.assign(ref, Object.assign({ ref: 0 }));
          const intl = contentWidth(memo[31]).intl;
          obj.accessibilityLabel = intl.string(contentWidth(memo[31]).t.PdRCRg);
          obj.ref = ref.ref;
          const merged1 = Object.assign(merged);
          obj = { color: height(memo[7]).colors.TEXT_DEFAULT };
          obj.children = closure_1_10(contentWidth(memo[44]).MoreHorizontalIcon, obj);
          return closure_1_10(closure_1_26, obj);
        }
    };
    items12[4] = closure_10(tmp7(tmp2[26]), obj23);
    obj16.children = items12;
    items11[1] = closure_11(contentWidth(tmp2[23]).Stack, obj16);
    obj.children = items11;
    return closure_11(contentWidth(tmp2[15]).SafeAreaPaddingView, obj);
  } else {
    const obj24 = { accessibilityLabel: null, onPress: null, children: null };
    const intl3 = contentWidth(tmp2[31]).intl;
    obj24.accessibilityLabel = intl3.string(contentWidth(tmp2[31]).t.bDSZO1);
    obj24.onPress = handleToggleCaptions;
    if (captionsEnabled) {
      let color = tmp18Result.icon.color;
    } else {
      color = tmp18Result.iconDisabled.color;
    }
    const obj25 = { color };
    tmp18Result = closure_10(contentWidth(tmp2[42]).ClosedCaptionsOutlineIcon, obj25);
    obj24.children = tmp18Result;
    closure_10(closure_26, obj24);
  }
  const obj11 = { variant: "heading-lg/semibold", color: "text-overlay-light", style: tmp18Result.textShadow, accessibilityRole: "header", children: quest.config.messages.gameTitle };
  const obj14 = { quest, size: "x-sm", progress: questTaskDetails.percentComplete, hasConfetti: true, onPress: handleRewardDetailsPress, accessibilityLabel: videoQuestProgressRemainingAccessibilityLabel };
  const obj3 = { captionsEnabled, onLoad: callback, externallyPaused, orientation: "portrait", contentInsets, handleOpenTranscript, handleToggleCaptions, isFullscreen, onEnd, sourceQuestContent, hasCaptionAsset, hasTranscriptAsset };
  const obj4 = { start, end, style: tmp18Result.gradientTop, colors: items };
  const obj5 = { start, end, style: tmp18Result.gradientBottom, colors: items1 };
  const tmp7Result = height(memo[39]);
});
createStyles = fn(4560);
let obj = { footerButton: null };
obj = { padding: nativeDefault.space.PX_8 };
obj.footerButton = obj;
let closure_25 = createStyles.createStyles(obj);
let closure_26 = noop.forwardRef(function FooterButton(arg0, ref) {
  const obj = { accessibilityRole: "button", style: closure_25().footerButton };
  const merged = Object.assign(arg0);
  obj.ref = ref;
  return closure_1_10(Pressables.PressableOpacity, obj);
});
const alphaResult3 = n(nativeDefault.unsafe_rawColors.PLUM_23).alpha(0.4);
let size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/VideoQuestModal/VideoQuestModalContentInProgress.tsx");

export default noop.memo(function VideoQuestModalContentInProgress(arg0) {
  ({ onClose, sourceQuestContent } = arg0);
  ({ contentWidth, isFullscreen, onNavigateToPostWatchVideo, onEnd, setIsFullscreen } = arg0);
  let obj = sourceQuestContent(15126);
  const quest = obj.useVideoQuestModalContext().quest;
  items = [quest];
  items1 = [quest];
  const memo = noop.useMemo(() => AssetUtils.getQuestAsset(quest, AssetUtils.QuestAssetType.VIDEO_PLAYER_CAPTION, undefined, true), items);
  const memo1 = noop.useMemo(() => AssetUtils.getQuestAsset(quest, AssetUtils.QuestAssetType.VIDEO_PLAYER_TRANSCRIPT, undefined, true), items1);
  [tmp6, dependencyMap] = getQuestImpressionId(noop.useState(false), 2);
  const items2 = [quest];
  const callback = noop.useCallback(() => dependencyMap((arg0) => !arg0), []);
  const callback1 = noop.useCallback(() => {
    const obj = { quest };
    obj.openLazy(asyncRequireImpl(15154, dependencyMap.paths), "transcript-" + quest.id, obj);
  }, items2);
  const tmp5 = getQuestImpressionId(noop.useState(false), 2);
  getQuestImpressionId = sourceQuestContent(11486).useGetQuestImpressionId();
  const obj2 = sourceQuestContent(11486);
  [tmp11, noop] = getQuestImpressionId(noop.useState(false), 2);
  const tmp10 = getQuestImpressionId(noop.useState(false), 2);
  const isShareableQuestResult = sourceQuestContent(7722).isShareableQuest(quest.config);
  closure_5 = isShareableQuestResult;
  const items3 = [isShareableQuestResult, quest.id, getQuestImpressionId, sourceQuestContent];
  const callback2 = noop.useCallback(() => {
    if (isShareableQuestResult) {
      let getQuestUrl = require;
      let id = dependencyMap;
      let obj = AdAnalyticsInterfaceExperiment;
      if (obj.shouldMigrateToAdAnalyticsInterface(AdAnalyticsInterfaceExperiment.AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL, "video_quest_modal_in_progress")) {
        const questUrl = getQuestUrl(11193);
        obj = { type: getQuestUrl(11197).AdUserActionType.CLICK_INTERNAL, adCreativeType: getQuestUrl(5451).AdCreativeType.QUEST, adCreativeId: quest.id, questContentCTA: getQuestUrl(7728).QuestContentCTA.MOBILE_SHARESHEET, surfaceId: getQuestUrl(5447).QuestContent.VIDEO_MODAL_MOBILE, sourceQuestContent, impressionId: getQuestImpressionId() };
        questUrl.captureAdUserAction(obj);
        let tmp = quest;
      } else {
        const questUrl1 = getQuestUrl(7718);
        obj = { questId: null, questContent: null, questContentCTA: null, impressionId: null, sourceQuestContent: null };
        tmp = quest;
        obj.questId = quest.id;
        obj.questContent = getQuestUrl(5447).QuestContent.VIDEO_MODAL_MOBILE;
        obj.questContentCTA = getQuestUrl(7728).QuestContentCTA.MOBILE_SHARESHEET;
        obj.impressionId = getQuestImpressionId();
        obj.sourceQuestContent = sourceQuestContent;
        const result = questUrl1.trackQuestContentClicked(obj);
      }
      noop(true);
      const questUrl2 = getQuestUrl(8361);
      const obj1 = { message: null, iOSOnlyShareCallback: null };
      const questUrl3 = getQuestUrl(11295);
      getQuestUrl = questUrl3.getQuestUrl;
      obj1.message = getQuestUrl(tmp.id);
      obj1.iOSOnlyShareCallback = function iOSOnlyShareCallback() {
        return closure_1_4(false);
      };
      id = tmp.id;
      const _HermesInternal = HermesInternal;
      questUrl2.showShareActionSheet(obj1, "Video Quest Modal - " + id);
    }
  }, items3);
  const obj3 = sourceQuestContent(7722);
  const videoQuestClickCtaAndMaybeCloseModal = sourceQuestContent(15155).useVideoQuestClickCtaAndMaybeCloseModal({ quest, onClose, sourceQuestContent });
  const items4 = [videoQuestClickCtaAndMaybeCloseModal];
  const items5 = [videoQuestClickCtaAndMaybeCloseModal];
  const callback3 = noop.useCallback(() => videoQuestClickCtaAndMaybeCloseModal(QuestTypes.QuestContent.VIDEO_MODAL_MOBILE_FOOTER), items4);
  const items6 = [quest.id];
  const callback4 = noop.useCallback(() => videoQuestClickCtaAndMaybeCloseModal(QuestTypes.QuestContent.VIDEO_MODAL_MOBILE), items5);
  const callback5 = noop.useCallback(() => {
    const obj = { questId: quest.id };
    const result = obj.openRewardDetailsBottomSheet(obj);
  }, items6);
  const obj4 = sourceQuestContent(15155);
  const videoExternallyPaused = sourceQuestContent(15156).useVideoExternallyPaused(quest.id, tmp11);
  const tmp19 = quest.config.taskConfigV2.tasks[sourceQuestContent(undefined, 5452).FirstPartyQuestTaskTypes.WATCH_VIDEO_ON_MOBILE];
  let tmp20 = null == tmp19;
  if (!tmp20) {
    tmp20 = "portrait" === sourceQuestContent(11512).getVideoOrientation(tmp19);
    const tmpResult = sourceQuestContent(11512);
  }
  obj = { quest, captionsEnabled: tmp6, contentWidth, handleClose: onClose, handleAdvertiserDetailsPress: callback3, handlePrimaryCtaPress: callback4, handleRewardDetailsPress: callback5, handleShareQuest: callback2, handleOpenTranscript: callback1, handleToggleCaptions: callback, isFullscreen, onNavigateToPostWatchVideo, onEnd, setIsFullscreen, externallyPaused: videoExternallyPaused, sourceQuestContent, hasCaptionAsset: null != memo, hasTranscriptAsset: null != memo1, isShareable: isShareableQuestResult };
  return closure_10(tmp20 ? closure_24 : closure_23, obj);
});