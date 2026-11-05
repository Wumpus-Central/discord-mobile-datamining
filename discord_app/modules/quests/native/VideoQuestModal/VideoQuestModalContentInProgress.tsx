// === Module 17382: VideoQuestModalContentInProgress ===

// Module 17382 (VideoQuestModalContentInProgress)
import nativeDefault from "native" /* 575 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1627 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2123 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5384 */;
import QuestTypes from "QuestTypes" /* 6922 */;
import AdCreativeType from "AdCreativeType" /* 6926 */;
import Pressables from "Pressables" /* 7124 */;
import AnalyticsTypes from "AnalyticsTypes" /* 8016 */;
import showShareActionSheet from "showShareActionSheet" /* 9082 */;
import QuestUtils from "QuestUtils" /* 9834 */;
import captureAdUserAction from "captureAdUserAction" /* 9840 */;
import captureAdUserActionTypes from "captureAdUserActionTypes" /* 9843 */;
import AssetUtils from "AssetUtils" /* 9851 */;
import QuestCopyUtils from "QuestCopyUtils" /* 9861 */;
import VideoQuestModalCloseButtonDefault from "VideoQuestModalCloseButton" /* 17399 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import n_mod from "module_671" /* 671 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, StyleSheet: closure_6, ScrollView: metroImportDefault } = get_ActivityIndicator);
const QuestConstants = fn(6919);
({ DEFAULT_PORTRAIT_ASPECT_RATIO: closure_8, QuestsExperimentLocations: closure_9 } = QuestConstants);
const ThemeTypes = fn(1083).ThemeTypes;
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
const start = { x: 0, y: 0 };
const end = { x: 0, y: 1 };
let n = n_mod;
const importDefaultResultResult = n(nativeDefault.unsafe_rawColors.PLUM_23);
let items = [n(nativeDefault.unsafe_rawColors.PLUM_23).alpha(0.4).hex(), ];
let n = n_mod;
const alphaResult = n(nativeDefault.unsafe_rawColors.PLUM_23).alpha(0.4);
const importDefaultResult1Result = n(nativeDefault.unsafe_rawColors.PLUM_23);
items[1] = n(nativeDefault.unsafe_rawColors.PLUM_23).alpha(0).hex();
let n = n_mod;
const alphaResult1 = n(nativeDefault.unsafe_rawColors.PLUM_23).alpha(0);
const importDefaultResult2Result = n(nativeDefault.unsafe_rawColors.PLUM_23);
let items1 = [n(nativeDefault.unsafe_rawColors.PLUM_23).alpha(0).hex(), ];
let n = n_mod;
const alphaResult2 = n(nativeDefault.unsafe_rawColors.PLUM_23).alpha(0);
const importDefaultResult3Result = n(nativeDefault.unsafe_rawColors.PLUM_23);
items1[1] = n(nativeDefault.unsafe_rawColors.PLUM_23).alpha(0.4).hex();
const contentInsets = { bottom: 158, top: 64, left: 16, right: 16 };
const contentInsets2 = { bottom: 16, left: 16, right: 16 };
let createStyles = fn(5143);
let closure_19 = createStyles.createStyles((arg0) => {
  const obj = { wrapper: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, flex: 1 }, wrapperPortrait: null, videoLandscape: null, videoLandscape9by16: null, landscapeContentScroll: null, landscapeContentScrollContent: null, videoLandscapeFullscreen: null, videoWrapper: null, videoWrapperLandscape: null, videoWrapperFullscreen: null, videoContentWrapper: null, videoContentWrapperLandscape: null, videoContentWrapperPortrait: null, rewardContainer: null, rewardContentCentered: null, modalBackground: null, questDetailsLandscape: null, questDetailsPrimary: null, questDetailsSecondary: null, footer: null, closeButtonLandscape: null, gradientTop: null, gradientBottom: null, textShadow: null, viewRewardBtn: null, playerThumbnail: null, cloudsBackground: null, questDetailsSubheader: null };
  const obj3 = { borderTopLeftRadius: nativeDefault.radii.lg, borderTopRightRadius: nativeDefault.radii.lg, justifyContent: null };
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
  obj.videoWrapperLandscape = { flexGrow: 1, borderTopLeftRadius: nativeDefault.radii.none, borderTopRightRadius: nativeDefault.radii.none };
  const obj5 = { flexGrow: 1, borderTopLeftRadius: nativeDefault.radii.none, borderTopRightRadius: nativeDefault.radii.none };
  obj.videoWrapperFullscreen = { borderRadius: nativeDefault.radii.none };
  const obj6 = { borderRadius: nativeDefault.radii.none };
  obj.videoContentWrapper = { flexDirection: "column", pointerEvents: "box-none", flexGrow: 1, flexShrink: 0, justifyContent: "space-between", padding: nativeDefault.space.PX_16 };
  obj.videoContentWrapperLandscape = { padding: 0 };
  const merged = Object.assign(timestampProducer.absoluteFillObject);
  obj.videoContentWrapperPortrait = {};
  obj.rewardContainer = { justifyContent: "center", flexGrow: 1, flexShrink: 0 };
  const rect = { position: "absolute", top: nativeDefault.space.PX_16, left: nativeDefault.space.PX_16, right: nativeDefault.space.PX_16, bottom: nativeDefault.space.PX_16, alignItems: "center", justifyContent: "center" };
  obj.rewardContentCentered = rect;
  const obj7 = { flexDirection: "column", pointerEvents: "box-none", flexGrow: 1, flexShrink: 0, justifyContent: "space-between", padding: nativeDefault.space.PX_16 };
  const obj8 = {};
  obj.modalBackground = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
  const obj9 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
  obj.questDetailsLandscape = { borderTopWidth: 1, borderColor: nativeDefault.colors.BACKGROUND_MOD_STRONG, paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_24 };
  obj.questDetailsPrimary = { flexGrow: 0, flexShrink: 1 };
  obj.questDetailsSecondary = { flexGrow: 0, flexShrink: 0 };
  const obj10 = { borderTopWidth: 1, borderColor: nativeDefault.colors.BACKGROUND_MOD_STRONG, paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_24 };
  obj.footer = { paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_8 };
  const rect1 = { position: "absolute", top: nativeDefault.space.PX_16, left: nativeDefault.space.PX_16 };
  obj.closeButtonLandscape = rect1;
  const obj12 = {};
  const merged1 = Object.assign(timestampProducer.absoluteFillObject);
  obj12.bottom = undefined;
  obj12.height = 70;
  obj.gradientTop = obj12;
  const obj13 = {};
  const merged2 = Object.assign(timestampProducer.absoluteFillObject);
  obj13.top = undefined;
  obj13.height = 150;
  obj.gradientBottom = obj13;
  const obj11 = { paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_8 };
  obj.textShadow = { margin: -15, padding: 15, textShadowColor: nativeDefault.colors.BLACK, textShadowOffset: { width: 0, height: 0 }, textShadowRadius: 15 };
  obj.viewRewardBtn = { marginRight: "auto" };
  const size = { borderRadius: nativeDefault.radii.lg, height: 96, width: "100%" };
  obj.playerThumbnail = size;
  obj.cloudsBackground = { zIndex: -1 };
  obj.questDetailsSubheader = { opacity: 0.6 };
  return obj;
});
let closure_20 = { code: "(function VideoQuestModalContentInProgressTsx1(){let[withDelay,LOGO_REWARD_TRANSITION_DELAY_MS,withTiming,isComponentMounted,LOGO_REWARD_TRANSITION_DURATION_MS]=this.__closure;return withDelay(LOGO_REWARD_TRANSITION_DELAY_MS,withTiming(isComponentMounted.get(),{duration:LOGO_REWARD_TRANSITION_DURATION_MS}));})" };
let closure_21 = { code: "(function VideoQuestModalContentInProgressTsx2(){let[animation]=this.__closure;return{opacity:animation.get()};})" };
let closure_22 = { code: "(function VideoQuestModalContentInProgressTsx3(){let[animation]=this.__closure;return{opacity:1-animation.get()};})" };
let closure_23 = { code: "(function VideoQuestModalContentInProgressTsx4(){let[animation]=this.__closure;return{pointerEvents:animation.get()>0.3?'auto':'none'};})" };
let closure_24 = noop.memo(function LandscapeLayout(quest) {
  quest = quest.quest;
  _require = quest;
  ({ handleAdvertiserDetailsPress, isFullscreen } = quest);
  importDefault = isFullscreen;
  const setIsFullscreen = quest.setIsFullscreen;
  dependencyMap = setIsFullscreen;
  ({ sourceQuestContent, isShareable } = quest);
  c3 = undefined;
  duration = undefined;
  let sharedValue;
  ({ captionsEnabled, contentWidth, handleClose, handlePrimaryCtaPress, handleShareQuest, handleOpenTranscript, handleToggleCaptions, onNavigateToPostWatchVideo, onEnd, externallyPaused, hasCaptionAsset, hasTranscriptAsset } = quest);
  const tmp3 = closure_19(require("PlatformUtils").isAndroid());
  items = [quest];
  const memo = duration.useMemo(() => AssetUtils.getQuestAsset(c0, AssetUtils.QuestAssetType.HERO), items);
  const userStatus = quest.userStatus;
  let completedAt;
  if (userStatus != null) {
    completedAt = userStatus.completedAt;
  }
  let tmp37Result3 = null != completedAt;
  const obj = require("PlatformUtils");
  [tmp8, c3] = c3(duration.useState(null), 2);
  const callback = obj2.useCallback((nativeEvent) => {
    _undefined3(nativeEvent.nativeEvent.layout.height);
  }, []);
  const tmp7 = c3(duration.useState(null), 2);
  [num, c4] = c3(duration.useState(null), 2);
  let diff = null;
  const callback1 = obj2.useCallback((nativeEvent) => {
    duration(nativeDefault.space.PX_24 + nativeEvent.nativeEvent.layout.height);
  }, []);
  if (null != tmp8) {
    diff = tmp8 - 2 * nativeDefault.space.PX_16;
  }
  let str = "md";
  let str2 = "md";
  if (null != diff) {
    str2 = str;
    if (null != num) {
      let str3 = "lg";
      if (diff < tmp(17383).QUEST_PROGRESS_DIAMETER_BY_SIZE.lg + num) {
        if (diff >= tmp(17383).QUEST_PROGRESS_DIAMETER_BY_SIZE["md-lg"] + num) {
          str = "md-lg";
        }
        str3 = str;
      }
      str2 = str3;
    }
  }
  const sum = tmp(17383).QUEST_PROGRESS_DIAMETER_BY_SIZE.md + num;
  const sum1 = sum + 2 * nativeDefault.space.PX_16;
  const tmp10 = c3(duration.useState(null), 2);
  sharedValue = require("module_1652").useSharedValue(0);
  items1 = [sharedValue];
  const effect = obj2.useEffect(() => {
    const result = sharedValue.set(1);
  }, items1);
  const tmpResult = require("module_1652");
  const items2 = [closure_20, require("module_1652").withDelay, 3000, require("timing/timing").withTiming, sharedValue, 1000];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  c3 = undefined;
  duration = undefined;
  [tmp19, tmp20, tmp21, tmp22, tmp23, tmp24] = items2;
  class VideoQuestModalContentInProgressTsx1 {
    constructor() {
      obj = { duration: closure_4 };
      return closure_0(closure_1, closure_2(closure_3.get(), obj));
    }
  }
  const items3 = [tmp20, tmp21, tmp22, tmp23, tmp24];
  VideoQuestModalContentInProgressTsx1.__closure = items3;
  VideoQuestModalContentInProgressTsx1.__workletHash = 5543062958124;
  VideoQuestModalContentInProgressTsx1.__initData = tmp19;
  const derivedValue = require("module_1652").useDerivedValue(VideoQuestModalContentInProgressTsx1);
  const tmpResult9 = require("module_1652");
  const items4 = [closure_21, derivedValue];
  _require = undefined;
  [tmp26, tmp27] = items4;
  class VideoQuestModalContentInProgressTsx2 {
    constructor() {
      obj = { opacity: closure_0.get() };
      return obj;
    }
  }
  const items5 = [tmp27];
  VideoQuestModalContentInProgressTsx2.__closure = items5;
  VideoQuestModalContentInProgressTsx2.__workletHash = 17462465943368;
  VideoQuestModalContentInProgressTsx2.__initData = tmp26;
  const animatedStyle = require("module_1652").useAnimatedStyle(VideoQuestModalContentInProgressTsx2);
  const tmpResult10 = require("module_1652");
  const items6 = [closure_22, derivedValue];
  _require = undefined;
  [tmp29, tmp30] = items6;
  class VideoQuestModalContentInProgressTsx3 {
    constructor() {
      obj = { opacity: 1 - closure_0.get() };
      return obj;
    }
  }
  const items7 = [tmp30];
  VideoQuestModalContentInProgressTsx3.__closure = items7;
  VideoQuestModalContentInProgressTsx3.__workletHash = 13717822573141;
  VideoQuestModalContentInProgressTsx3.__initData = tmp29;
  const animatedStyle1 = require("module_1652").useAnimatedStyle(VideoQuestModalContentInProgressTsx3);
  const tmpResult11 = require("module_1652");
  const items8 = [closure_23, derivedValue];
  _require = undefined;
  [tmp32, tmp33] = items8;
  class VideoQuestModalContentInProgressTsx4 {
    constructor() {
      pointerEvents = "none";
      if (closure_0.get() > 0.3) {
        pointerEvents = "auto";
      }
      return { pointerEvents };
    }
  }
  const items9 = [tmp33];
  VideoQuestModalContentInProgressTsx4.__closure = items9;
  VideoQuestModalContentInProgressTsx4.__workletHash = 10873072975680;
  VideoQuestModalContentInProgressTsx4.__initData = tmp32;
  const animatedProps = require("module_1652").useAnimatedProps(VideoQuestModalContentInProgressTsx4);
  const tmp35 = useSafeAreaInsetsDefault();
  const items10 = [isFullscreen, setIsFullscreen];
  const callback2 = obj2.useCallback((arg0) => {
    let tmp2 = c1;
    if (!c1) {
      tmp2 = "landscape" !== tmp;
    }
    let str2 = "PORTRAIT";
    if (!tmp2) {
      str2 = "LANDSCAPE";
    }
    _undefined2("LANDSCAPE" === str2);
  }, items10);
  const obj3 = { bottom: true, style: tmp3.wrapper, children: null };
  const items11 = [, , ];
  ({ videoWrapper: arr12[0], videoWrapperLandscape: arr12[1] } = tmp3);
  let videoWrapperFullscreen = isFullscreen;
  if (isFullscreen) {
    videoWrapperFullscreen = tmp3.videoWrapperFullscreen;
  }
  const obj4 = { style: items11, children: null };
  items11[2] = videoWrapperFullscreen;
  const obj5 = { theme: ThemeTypes.DARK, children: null };
  const obj6 = { captionsEnabled, orientation: "landscape", style: null, contentInsets: null, handleOpenTranscript: null, handleToggleCaptions: null, isFullscreen: null, externallyPaused: null, onEnd: null, onToggleFullscreen: null, sourceQuestContent: null, hasCaptionAsset: null, hasTranscriptAsset: null };
  const items12 = [tmp3.videoLandscape, , ];
  let videoLandscape9by16 = !isFullscreen;
  if (!isFullscreen) {
    videoLandscape9by16 = tmp3.videoLandscape9by16;
  }
  items12[1] = videoLandscape9by16;
  let videoLandscapeFullscreen = isFullscreen;
  if (isFullscreen) {
    videoLandscapeFullscreen = tmp3.videoLandscapeFullscreen;
  }
  items12[2] = videoLandscapeFullscreen;
  obj6.style = items12;
  obj6.contentInsets = contentInsets2;
  obj6.handleOpenTranscript = handleOpenTranscript;
  obj6.handleToggleCaptions = handleToggleCaptions;
  obj6.isFullscreen = isFullscreen;
  obj6.externallyPaused = externallyPaused;
  obj6.onEnd = onEnd;
  obj6.onToggleFullscreen = callback2;
  obj6.sourceQuestContent = sourceQuestContent;
  obj6.hasCaptionAsset = hasCaptionAsset;
  obj6.hasTranscriptAsset = hasTranscriptAsset;
  const items13 = [closure_11(require("VideoQuestPlayer").VideoQuestPlayer, obj6), ];
  const obj7 = { onClose: handleClose, style: null };
  const items14 = [tmp3.closeButtonLandscape, ];
  let tmp41 = isFullscreen;
  const tmpResult12 = require("module_1652");
  if (isFullscreen) {
    tmp41 = null != tmp35;
  }
  if (tmp41) {
    const obj8 = { left: tmp35.left };
    tmp41 = obj8;
  }
  items14[1] = tmp41;
  obj7.style = items14;
  items13[1] = closure_11(VideoQuestModalCloseButtonDefault, obj7);
  obj5.children = items13;
  const items15 = [closure_12(require("native").ThemeContextProvider, obj5), ];
  let tmp37Result4 = !isFullscreen;
  if (!isFullscreen) {
    const obj9 = { style: null, contentContainerStyle: null, showsVerticalScrollIndicator: false, alwaysBounceVertical: false, children: null };
    ({ landscapeContentScroll: obj14.style, landscapeContentScrollContent: obj14.contentContainerStyle } = tmp3);
    const obj10 = { style: null, children: null };
    const items16 = [, ];
    ({ videoContentWrapper: arr17[0], videoContentWrapperLandscape: arr17[1] } = tmp3);
    obj10.style = items16;
    const obj11 = { style: null, onLayout: null, children: null };
    const items17 = [tmp3.rewardContainer, ];
    const obj12 = { minHeight: sum1 };
    items17[1] = obj12;
    obj11.style = items17;
    obj11.onLayout = callback;
    const obj13 = { style: null, animatedProps: null, children: null };
    const items18 = [tmp3.rewardContentCentered, animatedStyle];
    obj13.style = items18;
    obj13.animatedProps = animatedProps;
    const obj15 = { size: str2, onTextBlockLayout: callback1 };
    obj13.children = closure_11(tmp15(17400), obj15);
    const items19 = [closure_11(tmp15(1652).View, obj13), ];
    const items20 = [tmp3.rewardContentCentered, , ];
    const tmpResult13 = tmp(1377);
    const obj16 = { style: null, pointerEvents: "none", children: null };
    items20[1] = tmp(1377).isAndroid() && tmp3.modalBackground;
    items20[2] = animatedStyle1;
    obj16.style = items20;
    const tmp44 = tmp(1377).isAndroid() && tmp3.modalBackground;
    let isAndroidResult = tmp(1377).isAndroid();
    if (isAndroidResult) {
      const obj17 = { align: "top", style: tmp3.cloudsBackground };
      isAndroidResult = closure_11(tmp15(17379), obj17);
    }
    const items21 = [isAndroidResult, ];
    const obj18 = { assetUrl: null, maxHeight: 90, maxWidth: null };
    const tmpResult14 = tmp(1377);
    const tmp15Result2 = tmp15(17401);
    obj18.assetUrl = tmp(9851).getQuestAsset(quest, tmp(9851).QuestAssetType.LOGO_TYPE, "dark").url;
    obj18.maxWidth = contentWidth - 120;
    items21[1] = closure_11(tmp15Result2, obj18);
    obj16.children = items21;
    items19[1] = closure_12(tmp15(1652).View, obj16);
    obj11.children = items19;
    const items22 = [closure_12(tmp39, obj11), , ];
    const obj19 = { align: "top", style: tmp3.cloudsBackground };
    items22[1] = closure_11(tmp15(17379), obj19);
    const obj20 = { direction: "vertical", spacing: tmp15(575).space.PX_24, style: tmp3.questDetailsLandscape, children: null };
    const obj21 = { direction: "horizontal", justify: "space-between", spacing: tmp15(575).space.PX_8, children: null };
    const obj22 = { style: tmp3.questDetailsPrimary, onPress: handleAdvertiserDetailsPress, children: null };
    const obj23 = { variant: "heading-lg/semibold", color: "mobile-text-heading-primary", accessibilityRole: "header", children: quest.config.messages.gameTitle };
    const items23 = [closure_11(tmp(5763).Text, obj23), ];
    const obj24 = { variant: "heading-xs/semibold", color: "text-subtle", children: quest.config.messages.gamePublisher };
    items23[1] = closure_11(tmp(5763).Text, obj24);
    obj22.children = items23;
    const items24 = [closure_12(tmp(7124).PressableOpacity, obj22), ];
    const obj25 = { style: tmp3.questDetailsSecondary, children: null };
    const obj26 = { quest, location: null, sourceQuestContent: null };
    class VideoQuestModalContentInProgressTsx1 {
      constructor() {
        obj = { duration: closure_4 };
        return closure_0(closure_1, closure_2(closure_3.get(), obj));
      }
    }
    obj26.location = constants.VIDEO_MODAL_MOBILE;
    obj26.sourceQuestContent = sourceQuestContent;
    obj25.children = closure_11(tmp15(17402), obj26);
    items24[1] = closure_11(tmp39, obj25);
    obj21.children = items24;
    const items25 = [closure_12(tmp(6165).Stack, obj21), , ];
    let tmp37Result = null != memo;
    if (tmp37Result) {
      const obj27 = { onPress: handleAdvertiserDetailsPress, children: null };
      const obj28 = { source: null, style: null };
      const obj29 = { uri: memo.url };
      obj28.source = obj29;
      obj28.style = tmp3.playerThumbnail;
      obj27.children = closure_11(tmp15(5854), obj28);
      tmp37Result = closure_11(tmp(7124).PressableOpacity, obj27);
    }
    items25[1] = tmp37Result;
    const obj30 = { direction: "horizontal", spacing: tmp15(575).space.PX_16, children: null };
    const obj31 = { grow: true, variant: "expressive", onPress: handlePrimaryCtaPress, text: null };
    const Button = tmp(5770).Button;
    const tmpResult15 = tmp(9851);
    obj31.text = tmp(9861).getExternalCtaLabel(quest);
    const items26 = [, , ];
    class VideoQuestModalContentInProgressTsx2 {
      constructor() {
        obj = { opacity: closure_0.get() };
        return obj;
      }
    }
    if (isShareable) {
      const obj32 = { accessibilityLabel: null, icon: null, onPress: null, variant: "secondary" };
      const intl = tmp(1113).intl;
      obj32.accessibilityLabel = intl.string(tmp(1113).t.Ej3B3Y);
      obj32.icon = tmp15(9316);
      obj32.onPress = handleShareQuest;
      isShareable = closure_11(tmp(8173).IconButton, obj32);
    }
    items26[1] = isShareable;
    if (tmp37Result3) {
      const obj33 = { accessibilityLabel: null, icon: null, onPress: null, variant: "secondary" };
      const intl2 = tmp(1113).intl;
      obj33.accessibilityLabel = intl2.string(tmp(1113).t.cfY4PE);
      obj33.icon = tmp15(10996);
      obj33.onPress = onNavigateToPostWatchVideo;
      tmp37Result3 = closure_11(tmp(8173).IconButton, obj33);
    }
    items26[2] = tmp37Result3;
    obj30.children = items26;
    items25[2] = closure_12(tmp(6165).Stack, obj30);
    obj20.children = items25;
    items22[2] = closure_12(tmp(6165).Stack, obj20);
    obj10.children = items22;
    obj9.children = closure_12(tmp39, obj10);
    tmp37Result4 = closure_11(closure_7, obj9);
    const tmpResult16 = tmp(9861);
  }
  items15[1] = tmp37Result4;
  obj4.children = items15;
  obj3.children = closure_12(sharedValue, obj4);
  return closure_11(require("common/SafeAreaView").SafeAreaPaddingView, obj3);
});
let closure_25 = noop.memo(function PortraitLayout(arg0) {
  ({ quest, captionsEnabled, contentWidth } = arg0);
  ({ handleOpenTranscript, handleToggleCaptions, sourceQuestContent, hasCaptionAsset, hasTranscriptAsset, isShareable } = arg0);
  let height;
  let memo;
  closure_3 = undefined;
  let first;
  closure_5 = undefined;
  ({ handleClose, handleAdvertiserDetailsPress, handlePrimaryCtaPress, handleRewardDetailsPress, handleShareQuest, isFullscreen, onNavigateToPostWatchVideo, onEnd, externallyPaused } = arg0);
  const questTaskDetails = contentWidth(memo[33]).useQuestTaskDetails(quest);
  const userStatus = quest.userStatus;
  let completedAt;
  if (userStatus != null) {
    completedAt = userStatus.completedAt;
  }
  let obj = contentWidth(memo[33]);
  const videoQuestProgressRemainingAccessibilityLabel = contentWidth(memo[34]).getVideoQuestProgressRemainingAccessibilityLabel(questTaskDetails, tmp5);
  height = height(tmp2[36])(first.useContext(contentWidth(tmp2[35]).QuestDockGestureContext).windowDimensions).height;
  items = [contentWidth];
  memo = first.useMemo(() => Math.floor(contentWidth / React5), items);
  const callback = first.useCallback(() => {

  }, []);
  const tmp10 = height(memo[14])();
  closure_3 = tmp10;
  const tmp11 = closure_3(first.useState(64), 2);
  first = tmp11[0];
  closure_5 = tmp11[1];
  items1 = [memo, first, height, tmp10];
  const callback1 = first.useCallback((nativeEvent) => {
    closure_5(nativeEvent.nativeEvent.layout.height);
  }, []);
  const memo1 = first.useMemo(() => Math.min(height - closure_3.top - closure_3.bottom - first, memo), items1);
  const tmp15 = closure_19(height - memo1 - first < 200);
  const obj2 = { bottom: true, style: null, children: null };
  const items2 = [, ];
  ({ wrapper: arr3[0], wrapperPortrait: arr3[1] } = tmp15);
  obj2.style = items2;
  const items3 = [tmp15.videoWrapper, ];
  if (null == memo1) {
    let obj3 = { flexGrow: 1 };
  } else {
    obj3 = { height: memo1 };
  }
  const obj4 = { style: items3, children: null };
  items3[1] = obj3;
  const obj5 = { theme: ThemeTypes.DARK, children: closure_11(contentWidth(memo[17]).VideoQuestPlayer, { captionsEnabled, onLoad: callback, externallyPaused, orientation: "portrait", contentInsets, handleOpenTranscript, handleToggleCaptions, isFullscreen, onEnd, sourceQuestContent, hasCaptionAsset, hasTranscriptAsset }) };
  const items4 = [closure_11(contentWidth(memo[16]).ThemeContextProvider, obj5), closure_11(height(memo[37]), { start, end, style: tmp15.gradientTop, colors: items }), closure_11(height(memo[37]), { start, end, style: tmp15.gradientBottom, colors: items1 }), ];
  const obj9 = { style: null, children: null };
  const items5 = [, ];
  ({ videoContentWrapper: arr6[0], videoContentWrapperPortrait: arr6[1] } = tmp15);
  obj9.style = items5;
  const obj10 = { closeButtonIconColor: null, onClose: null, showCurrentVideoTime: true, withTextShadow: true };
  const obj6 = { captionsEnabled, onLoad: callback, externallyPaused, orientation: "portrait", contentInsets, handleOpenTranscript, handleToggleCaptions, isFullscreen, onEnd, sourceQuestContent, hasCaptionAsset, hasTranscriptAsset };
  const obj7 = { start, end, style: tmp15.gradientTop, colors: items };
  const obj8 = { start, end, style: tmp15.gradientBottom, colors: items1 };
  const tmpResult = contentWidth(memo[34]);
  obj10.closeButtonIconColor = height(memo[7]).colors.WHITE;
  obj10.onClose = handleClose;
  const items6 = [closure_11(height(memo[38]), obj10), ];
  const obj11 = { direction: "vertical", spacing: height(memo[7]).space.PX_24, children: null };
  const obj12 = { direction: "horizontal", justify: "space-between", spacing: height(memo[7]).space.PX_8, children: null };
  const obj13 = { style: tmp15.questDetailsPrimary, onPress: handleAdvertiserDetailsPress, children: null };
  const items7 = [closure_11(contentWidth(memo[24]).Text, { variant: "heading-lg/semibold", color: "text-overlay-light", style: tmp15.textShadow, accessibilityRole: "header", children: quest.config.messages.gameTitle }), ];
  const obj15 = { variant: "heading-xs/semibold", color: "text-overlay-light", style: null, children: quest.config.messages.gamePublisher };
  const items8 = [, ];
  ({ textShadow: arr9[0], questDetailsSubheader: arr9[1] } = tmp15);
  obj15.style = items8;
  items7[1] = closure_11(contentWidth(memo[24]).Text, obj15);
  obj13.children = items7;
  const items9 = [closure_12(contentWidth(memo[23]).PressableOpacity, obj13), ];
  const obj16 = { style: tmp15.questDetailsSecondary, children: closure_11(height(memo[8]), { quest, size: "x-sm", progress: questTaskDetails.percentComplete, hasConfetti: true, onPress: handleRewardDetailsPress, accessibilityLabel: videoQuestProgressRemainingAccessibilityLabel }) };
  items9[1] = closure_11(closure_5, obj16);
  obj12.children = items9;
  const items10 = [closure_12(contentWidth(memo[22]).Stack, obj12), ];
  const obj18 = { grow: true, variant: "expressive", onPress: handlePrimaryCtaPress, text: null };
  const obj14 = { variant: "heading-lg/semibold", color: "text-overlay-light", style: tmp15.textShadow, accessibilityRole: "header", children: quest.config.messages.gameTitle };
  const obj17 = { quest, size: "x-sm", progress: questTaskDetails.percentComplete, hasConfetti: true, onPress: handleRewardDetailsPress, accessibilityLabel: videoQuestProgressRemainingAccessibilityLabel };
  const tmp7Result = height(memo[38]);
  obj18.text = contentWidth(memo[28]).getExternalCtaLabel(quest);
  items10[1] = closure_11(contentWidth(memo[27]).Button, obj18);
  obj11.children = items10;
  items6[1] = closure_12(contentWidth(memo[22]).Stack, obj11);
  obj9.children = items6;
  items4[3] = closure_12(closure_5, obj9);
  obj4.children = items4;
  const items11 = [closure_12(closure_5, obj4), ];
  const obj19 = { direction: "horizontal", justify: "flex-end", align: "center", style: tmp15.footer, spacing: height(memo[7]).space.PX_4, onLayout: callback1, children: null };
  let tmp18Result = tmp5;
  if (null != completedAt) {
    const obj20 = { style: tmp15.viewRewardBtn, children: null };
    const obj21 = { icon: closure_11(contentWidth(tmp2[39]).ArrowSmallRightIcon, { size: "sm" }), iconPosition: "end", onPress: onNavigateToPostWatchVideo, variant: "secondary", size: "sm", text: null };
    let intl = contentWidth(tmp2[30]).intl;
    obj21.text = intl.string(contentWidth(tmp2[30]).t["jyYgZ+"]);
    obj20.children = closure_11(contentWidth(tmp2[27]).Button, obj21);
    tmp18Result = closure_11(tmp17, obj20);
  }
  const items12 = [tmp18Result, , , , ];
  if (hasTranscriptAsset) {
    const obj22 = { accessibilityLabel: null, onPress: null, children: null };
    const intl2 = contentWidth(tmp2[30]).intl;
    obj22.accessibilityLabel = intl2.string(contentWidth(tmp2[30]).t.KCzjTi);
    obj22.onPress = handleOpenTranscript;
    const obj23 = { color: tmp7(tmp2[7]).colors.TEXT_DEFAULT };
    obj22.children = closure_11(contentWidth(tmp2[40]).TranscriptOutlineIcon, obj23);
    hasTranscriptAsset = closure_11(FooterButton, obj22);
  }
  items12[1] = hasTranscriptAsset;
  if (!hasCaptionAsset) {
    items12[2] = hasCaptionAsset;
    if (isShareable) {
      const obj24 = { accessibilityLabel: null, onPress: null, children: null };
      const intl4 = contentWidth(tmp2[30]).intl;
      obj24.accessibilityLabel = intl4.string(contentWidth(tmp2[30]).t.Ej3B3Y);
      obj24.onPress = handleShareQuest;
      const obj25 = { color: tmp7(tmp2[7]).colors.TEXT_DEFAULT };
      obj24.children = closure_11(contentWidth(tmp2[43]).ShareIcon, obj25);
      isShareable = closure_11(FooterButton, obj24);
    }
    items12[3] = isShareable;
    const obj26 = {
      quest,
      location: constants.VIDEO_MODAL_MOBILE,
      sourceQuestContent,
      children: function renderContextMenuButton(ref) {
          const obj = { accessibilityLabel: null, ref: null };
          const merged = Object.assign(ref, Object.assign({ ref: 0 }));
          const intl = contentWidth(memo[30]).intl;
          obj.accessibilityLabel = intl.string(contentWidth(memo[30]).t.PdRCRg);
          obj.ref = ref.ref;
          const merged1 = Object.assign(merged);
          obj.children = closure_1_11(contentWidth(memo[44]).MoreHorizontalIcon, { color: height(memo[7]).colors.TEXT_DEFAULT });
          return closure_1_11(FooterButton, obj);
        }
    };
    items12[4] = closure_11(tmp7(tmp2[25]), obj26);
    obj19.children = items12;
    items11[1] = closure_12(contentWidth(tmp2[22]).Stack, obj19);
    obj2.children = items11;
    return closure_12(contentWidth(tmp2[15]).SafeAreaPaddingView, obj2);
  } else {
    const obj27 = { accessibilityLabel: null, accessibilityRole: "togglebutton", accessibilityState: null, onPress: null, children: null };
    const intl3 = contentWidth(tmp2[30]).intl;
    obj27.accessibilityLabel = intl3.string(contentWidth(tmp2[30]).t.bDSZO1);
    const obj28 = { checked: captionsEnabled };
    obj27.accessibilityState = obj28;
    obj27.onPress = handleToggleCaptions;
    if (captionsEnabled) {
      let ClosedCaptionsOutlineIcon = contentWidth(tmp2[41]).ClosedCaptionsIcon;
    } else {
      ClosedCaptionsOutlineIcon = contentWidth(tmp2[42]).ClosedCaptionsOutlineIcon;
    }
    const obj29 = { color: tmp7(tmp2[7]).colors.TEXT_DEFAULT };
    obj27.children = closure_11(ClosedCaptionsOutlineIcon, obj29);
    closure_11(FooterButton, obj27);
  }
  const tmpResult2 = contentWidth(memo[28]);
});
createStyles = fn(5143);
let obj = { footerButton: null };
const alphaResult3 = n(nativeDefault.unsafe_rawColors.PLUM_23).alpha(0.4);
obj.footerButton = { padding: nativeDefault.space.PX_8 };
let closure_26 = createStyles.createStyles(obj);
function FooterButton(ref) {
  const merged = Object.assign(ref, Object.assign({ ref: 0 }));
  const obj = { accessibilityRole: "button", style: closure_26().footerButton };
  const merged1 = Object.assign(merged);
  obj.ref = ref.ref;
  return closure_1_11(Pressables.PressableOpacity, obj);
}
let obj2 = { padding: nativeDefault.space.PX_8 };
let size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/VideoQuestModal/VideoQuestModalContentInProgress.tsx");

export default noop.memo(function VideoQuestModalContentInProgress(arg0) {
  ({ onClose, sourceQuestContent } = arg0);
  ({ contentWidth, isFullscreen, onNavigateToPostWatchVideo, onEnd, setIsFullscreen } = arg0);
  const quest = sourceQuestContent(17378).useVideoQuestModalContext().quest;
  items = [quest];
  items1 = [quest];
  const memo = noop.useMemo(() => AssetUtils.getQuestAsset(quest, AssetUtils.QuestAssetType.VIDEO_PLAYER_CAPTION, undefined, true), items);
  const memo1 = noop.useMemo(() => AssetUtils.getQuestAsset(quest, AssetUtils.QuestAssetType.VIDEO_PLAYER_TRANSCRIPT, undefined, true), items1);
  let obj = sourceQuestContent(17378);
  [tmp6, dependencyMap] = getQuestImpressionId(noop.useState(false), 2);
  const items2 = [quest];
  const callback = noop.useCallback(() => dependencyMap((arg0) => !arg0), []);
  const callback1 = noop.useCallback(() => {
    const obj = ActionSheetActionCreatorsDefault;
    obj.openLazy(asyncRequireImpl(17404, dependencyMap.paths), "transcript-" + quest.id, { quest });
  }, items2);
  const tmp5 = getQuestImpressionId(noop.useState(false), 2);
  getQuestImpressionId = sourceQuestContent(9873).useGetQuestImpressionId();
  let obj2 = sourceQuestContent(9873);
  [tmp11, noop] = getQuestImpressionId(noop.useState(false), 2);
  const tmp10 = getQuestImpressionId(noop.useState(false), 2);
  const isShareableQuestResult = sourceQuestContent(8011).isShareableQuest(quest.config);
  closure_5 = isShareableQuestResult;
  const items3 = [isShareableQuestResult, quest.id, getQuestImpressionId, sourceQuestContent];
  const callback2 = noop.useCallback(() => {
    if (isShareableQuestResult) {
      const obj2 = { type: captureAdUserActionTypes.AdUserActionType.CLICK_INTERNAL, adCreativeType: AdCreativeType.AdCreativeType.QUEST, adCreativeId: quest.id, questContentCTA: AnalyticsTypes.QuestContentCTA.MOBILE_SHARESHEET, surfaceId: QuestTypes.QuestContent.VIDEO_MODAL_MOBILE, sourceQuestContent, impressionId: getQuestImpressionId() };
      captureAdUserAction.captureAdUserAction(obj2);
      duration(true);
      const obj4 = { message: null, iOSOnlyShareCallback: null };
      const obj3 = showShareActionSheet;
      obj4.message = QuestCopyUtils.getQuestUrl(quest.id);
      obj4.iOSOnlyShareCallback = function iOSOnlyShareCallback() {
        return closure_1_4(false);
      };
      const _HermesInternal = HermesInternal;
      obj3.showShareActionSheet(obj4, "Video Quest Modal - " + quest.id);
    }
  }, items3);
  let obj3 = sourceQuestContent(8011);
  const videoQuestClickCtaAndMaybeCloseModal = sourceQuestContent(17405).useVideoQuestClickCtaAndMaybeCloseModal({ quest, onClose, sourceQuestContent });
  const items4 = [videoQuestClickCtaAndMaybeCloseModal];
  const items5 = [videoQuestClickCtaAndMaybeCloseModal];
  const callback3 = noop.useCallback(() => videoQuestClickCtaAndMaybeCloseModal(QuestTypes.QuestContent.VIDEO_MODAL_MOBILE_FOOTER), items4);
  const items6 = [quest.id];
  const callback4 = noop.useCallback(() => videoQuestClickCtaAndMaybeCloseModal(QuestTypes.QuestContent.VIDEO_MODAL_MOBILE), items5);
  const callback5 = noop.useCallback(() => {
    const result = QuestUtils.openRewardDetailsBottomSheet({ questId: quest.id });
  }, items6);
  let obj4 = sourceQuestContent(17405);
  const videoExternallyPaused = sourceQuestContent(17406).useVideoExternallyPaused(quest.id, tmp11);
  const tmp19 = quest.config.taskConfigV2.tasks[sourceQuestContent(undefined, 6927).FirstPartyQuestTaskTypes.WATCH_VIDEO_ON_MOBILE];
  let tmp20 = null == tmp19;
  if (!tmp20) {
    tmp20 = "portrait" === sourceQuestContent(14909).getVideoOrientation(tmp19);
    const tmpResult = sourceQuestContent(14909);
  }
  return closure_11(tmp20 ? closure_25 : closure_24, { quest, captionsEnabled: tmp6, contentWidth, handleClose: onClose, handleAdvertiserDetailsPress: callback3, handlePrimaryCtaPress: callback4, handleRewardDetailsPress: callback5, handleShareQuest: callback2, handleOpenTranscript: callback1, handleToggleCaptions: callback, isFullscreen, onNavigateToPostWatchVideo, onEnd, setIsFullscreen, externallyPaused: videoExternallyPaused, sourceQuestContent, hasCaptionAsset: null != memo, hasTranscriptAsset: null != memo1, isShareable: isShareableQuestResult });
});