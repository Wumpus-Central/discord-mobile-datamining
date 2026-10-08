// === Module 15211: VideoQuestModalContentInProgress ===

// Module 15211 (VideoQuestModalContentInProgress)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1630 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1999 */;
import native from "native" /* 4787 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4810 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5054 */;
import timing from "timing" /* 5091 */;
import QuestTypes from "QuestTypes" /* 5980 */;
import Pressables from "Pressables" /* 6189 */;
import AdAnalyticsInterfaceExperiment from "AdAnalyticsInterfaceExperiment" /* 7416 */;
import useStateFromSharedValueDefault from "useStateFromSharedValue" /* 8370 */;
import MoreHorizontalIcon from "MoreHorizontalIcon" /* 9180 */;
import AssetUtils from "AssetUtils" /* 9544 */;
import QuestUtils from "QuestUtils" /* 10572 */;
import hooks_QuestHooks from "hooks/QuestHooks" /* 10575 */;
import VideoQuestUtils from "VideoQuestUtils" /* 10604 */;
import QuestDockGestureContext from "QuestDockGestureContext" /* 15175 */;
import VideoQuestPlayer from "VideoQuestPlayer" /* 15214 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import n_mod from "module_683" /* 683 */;

require = fn;
let closure_3 = ["ref"];
let closure_4 = ["ref"];
get_ActivityIndicator = fn(17);
({ View: closure_8, StyleSheet: closure_9, ScrollView: c10 } = get_ActivityIndicator);
const QuestConstants = fn(5977);
({ DEFAULT_PORTRAIT_ASPECT_RATIO: closure_11, QuestsExperimentLocations: closure_12 } = QuestConstants);
const ThemeTypes = fn(1096).ThemeTypes;
const jsxProd = fn(21);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
let c16 = 3000;
let c17 = 1000;
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
let createStyles = fn(5090);
let closure_24 = createStyles.createStyles((arg0) => {
  const obj = { wrapper: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, flex: 1 }, wrapperPortrait: null, videoLandscape: null, videoLandscape9by16: null, landscapeContentScroll: null, landscapeContentScrollContent: null, videoLandscapeFullscreen: null, videoWrapper: null, videoWrapperLandscape: null, videoWrapperFullscreen: null, videoContentWrapper: null, videoContentWrapperLandscape: null, videoContentWrapperPortrait: null, rewardContainer: null, rewardContentCentered: null, modalBackground: null, questDetailsLandscape: null, questDetailsPrimary: null, questDetailsSecondary: null, footer: null, icon: null, iconDisabled: null, closeButtonLandscape: null, gradientTop: null, gradientBottom: null, textShadow: null, viewRewardBtn: null, playerThumbnail: null, cloudsBackground: null, questDetailsSubheader: null };
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
  const merged = Object.assign(options.absoluteFillObject);
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
  const obj11 = { paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_8 };
  obj.icon = { color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE };
  const obj12 = { color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE };
  obj.iconDisabled = { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
  const rect1 = { position: "absolute", top: nativeDefault.space.PX_16, left: nativeDefault.space.PX_16 };
  obj.closeButtonLandscape = rect1;
  const obj14 = {};
  const merged1 = Object.assign(options.absoluteFillObject);
  obj14.bottom = undefined;
  obj14.height = 70;
  obj.gradientTop = obj14;
  const obj15 = {};
  const merged2 = Object.assign(options.absoluteFillObject);
  obj15.top = undefined;
  obj15.height = 150;
  obj.gradientBottom = obj15;
  const obj13 = { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
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
const __initData4 = { code: "function VideoQuestModalContentInProgressTsx4(){const{animation}=this.__closure;return{pointerEvents:animation.get()>0.3?\"auto\":\"none\"};}" };
const __initData5 = { code: "function VideoQuestModalContentInProgressTsx5(){const{withDelay,LOGO_REWARD_TRANSITION_DELAY_MS,withTiming,isComponentMounted,LOGO_REWARD_TRANSITION_DURATION_MS}=this.__closure;return withDelay(LOGO_REWARD_TRANSITION_DELAY_MS,withTiming(isComponentMounted.get(),{duration:LOGO_REWARD_TRANSITION_DURATION_MS}));}" };
const __initData6 = { code: "function VideoQuestModalContentInProgressTsx6(){const{animation}=this.__closure;return{opacity:animation.get()};}" };
const __initData7 = { code: "function VideoQuestModalContentInProgressTsx7(){const{animation}=this.__closure;return{opacity:1-animation.get()};}" };
const __initData8 = { code: "function VideoQuestModalContentInProgressTsx8(){const{animation}=this.__closure;return{pointerEvents:animation.get()>0.3?'auto':'none'};}" };
let ReactCompilerGating = fn(558);
let closure_33 = noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function LandscapeLayout(arg0) {
  const cResult = isFullscreen(576).c(82);
  ({ quest, captionsEnabled, contentWidth, handleClose, handleAdvertiserDetailsPress, handlePrimaryCtaPress, handleShareQuest, handleOpenTranscript, handleToggleCaptions, isFullscreen } = arg0);
  ({ onNavigateToPostWatchVideo, onEnd, setIsFullscreen } = arg0);
  ({ externallyPaused, sourceQuestContent, hasCaptionAsset, hasTranscriptAsset, isShareable } = arg0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const isAndroidResult = isFullscreen(1381).isAndroid();
    cResult[0] = isAndroidResult;
    let first = isAndroidResult;
    const tmpResult = isFullscreen(1381);
  } else {
    first = cResult[0];
  }
  const tmp6 = closure_24(first);
  if (cResult[1] !== quest) {
    const questAsset = isFullscreen(9544).getQuestAsset(quest, isFullscreen(9544).QuestAssetType.HERO);
    cResult[1] = quest;
    cResult[2] = questAsset;
    const tmpResult7 = isFullscreen(9544);
  }
  const userStatus = quest.userStatus;
  if (userStatus != null) {
    const completedAt = userStatus.completedAt;
  }
  let obj = isFullscreen(576);
  [tmp11, dependencyMap] = noop.useState(null);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function z(nativeEvent) {
      dependencyMap(nativeEvent.nativeEvent.layout.height);
    };
    cResult[3] = fn;
  }
  const tmp10 = _slicedToArray(noop.useState(null), 2);
  [tmp14, closure_3] = noop.useState(null);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    class J {
      constructor(arg0) {
        tmp = closure_3(closure_1(closure_2[8]).space.PX_24 + arg0.nativeEvent.layout.height);
        return;
      }
    }
    cResult[4] = J;
  } else {
    class J {
      constructor(arg0) {
        tmp = closure_3(closure_1(closure_2[8]).space.PX_24 + arg0.nativeEvent.layout.height);
        return;
      }
    }
  }
  let diff = null;
  if (null != tmp11) {
    class J {
      constructor(arg0) {
        tmp = closure_3(closure_1(closure_2[8]).space.PX_24 + arg0.nativeEvent.layout.height);
        return;
      }
    }
    diff = tmp11 - 2 * setIsFullscreen(587).space.PX_16;
  }
  if (cResult[5] === tmp14) {
    class J {
      constructor(arg0) {
        tmp = closure_3(closure_1(closure_2[8]).space.PX_24 + arg0.nativeEvent.layout.height);
        return;
      }
    }
    if (tmp14 == null) {
      class J {
        constructor(arg0) {
          tmp = closure_3(closure_1(closure_2[8]).space.PX_24 + arg0.nativeEvent.layout.height);
          return;
        }
      }
    }
    const sum = isFullscreen(15212).QUEST_PROGRESS_DIAMETER_BY_SIZE.md + tmp14;
    const sum1 = sum + 2 * setIsFullscreen(587).space.PX_16;
    const sharedValue = isFullscreen(4810).useSharedValue(0);
    if (cResult[8] !== sharedValue) {
      class J {
        constructor(arg0) {
          tmp = closure_3(closure_1(closure_2[8]).space.PX_24 + arg0.nativeEvent.layout.height);
          return;
        }
      }
      items = [sharedValue];
      cResult[8] = sharedValue;
      cResult[9] = tmp23;
      cResult[10] = items;
      let tmp22 = items;
    } else {
      class J {
        constructor(arg0) {
          tmp = closure_3(closure_1(closure_2[8]).space.PX_24 + arg0.nativeEvent.layout.height);
          return;
        }
      }
      tmp22 = cResult[10];
    }
    const effect = noop.useEffect(tmp23, tmp22);
    const tmpResult8 = isFullscreen(4810);
    function he() {
      const obj = ReanimatedRexport;
      return obj.withDelay(c16, timing.withTiming(sharedValue.get(), { duration }));
    }
    const obj2 = { withDelay: isFullscreen(4810).withDelay, LOGO_REWARD_TRANSITION_DELAY_MS, withTiming: isFullscreen(5091).withTiming, isComponentMounted: sharedValue, LOGO_REWARD_TRANSITION_DURATION_MS };
    he.__closure = obj2;
    he.__workletHash = 12561024953493;
    he.__initData = __initData;
    const derivedValue = isFullscreen(4810).useDerivedValue(he);
    const tmpResult9 = isFullscreen(4810);
    function ge() {
      return { opacity: derivedValue.get() };
    }
    const obj3 = { animation: derivedValue };
    ge.__closure = obj3;
    ge.__workletHash = 17463485679217;
    ge.__initData = __initData2;
    const animatedStyle = isFullscreen(4810).useAnimatedStyle(ge);
    const tmpResult10 = isFullscreen(4810);
    function _e() {
      return { opacity: 1 - derivedValue.get() };
    }
    const obj5 = { animation: derivedValue };
    _e.__closure = obj5;
    _e.__workletHash = 9103187579788;
    _e.__initData = __initData3;
    const animatedStyle1 = isFullscreen(4810).useAnimatedStyle(_e);
    const tmpResult11 = isFullscreen(4810);
    function ye() {
      let pointerEvents = "none";
      if (derivedValue.get() > 0.3) {
        pointerEvents = "auto";
      }
      return { pointerEvents };
    }
    const obj6 = { animation: derivedValue };
    ye.__closure = obj6;
    ye.__workletHash = 6340268991801;
    ye.__initData = __initData4;
    const animatedProps = isFullscreen(4810).useAnimatedProps(ye);
    setIsFullscreen(1630)();
    if (cResult[11] === isFullscreen) {
      class J {
        constructor(arg0) {
          tmp = closure_3(closure_1(closure_2[8]).space.PX_24 + arg0.nativeEvent.layout.height);
          return;
        }
      }
      if (isFullscreen) {
        class J {
          constructor(arg0) {
            tmp = closure_3(closure_1(closure_2[8]).space.PX_24 + arg0.nativeEvent.layout.height);
            return;
          }
        }
      }
      if (cResult[14] === tmp6.videoWrapper) {
        class J {
          constructor(arg0) {
            tmp = closure_3(closure_1(closure_2[8]).space.PX_24 + arg0.nativeEvent.layout.height);
            return;
          }
        }
      }
      items1 = [, , ];
      ({ videoWrapper: arr2[0], videoWrapperLandscape: arr2[1] } = tmp6);
      items1[2] = isFullscreen;
      cResult[14] = tmp6.videoWrapper;
      cResult[15] = tmp6.videoWrapperLandscape;
      cResult[16] = isFullscreen;
      cResult[17] = items1;
    }
    class Ce {
      constructor(arg0) {
        tmp2 = isFullscreen;
        if (!isFullscreen) {
          str = "landscape";
          tmp2 = "landscape" !== tmp;
        }
        str2 = "PORTRAIT";
        if (!tmp2) {
          str2 = "LANDSCAPE";
        }
        tmp3 = setIsFullscreen("LANDSCAPE" === str2);
        return;
      }
    }
    cResult[11] = isFullscreen;
    cResult[12] = setIsFullscreen;
    cResult[13] = Ce;
    const tmpResult12 = isFullscreen(4810);
  }
  let str = "md";
  if (null != diff) {
    class J {
      constructor(arg0) {
        tmp = closure_3(closure_1(closure_2[8]).space.PX_24 + arg0.nativeEvent.layout.height);
        return;
      }
    }
    if (null != tmp14) {
      class J {
        constructor(arg0) {
          tmp = closure_3(closure_1(closure_2[8]).space.PX_24 + arg0.nativeEvent.layout.height);
          return;
        }
      }
      if (diff < isFullscreen(15212).QUEST_PROGRESS_DIAMETER_BY_SIZE.lg + tmp14) {
        class J {
          constructor(arg0) {
            tmp = closure_3(closure_1(closure_2[8]).space.PX_24 + arg0.nativeEvent.layout.height);
            return;
          }
        }
      }
      str = str2;
    }
  }
  cResult[6] = diff;
  cResult[7] = str;
  const tmp9Result = _slicedToArray(noop.useState(null), 2);
}) : (function LandscapeLayout(quest) {
  quest = quest.quest;
  ({ handleAdvertiserDetailsPress, isFullscreen } = quest);
  const setIsFullscreen = quest.setIsFullscreen;
  ({ sourceQuestContent, isShareable } = quest);
  c3 = undefined;
  c4 = undefined;
  let sharedValue;
  let derivedValue;
  let tmp2 = setIsFullscreen;
  ({ captionsEnabled, contentWidth, handleClose, handlePrimaryCtaPress, handleShareQuest, handleOpenTranscript, handleToggleCaptions, onNavigateToPostWatchVideo, onEnd, externallyPaused, hasCaptionAsset, hasTranscriptAsset } = quest);
  const tmp3 = closure_24(quest(setIsFullscreen[13]).isAndroid());
  items = [quest];
  const memo = noop.useMemo(() => AssetUtils.getQuestAsset(quest, AssetUtils.QuestAssetType.HERO), items);
  const userStatus = quest.userStatus;
  let completedAt;
  if (userStatus != null) {
    completedAt = userStatus.completedAt;
  }
  let tmp25Result3 = null != completedAt;
  let obj = quest(setIsFullscreen[13]);
  [tmp8, c3] = derivedValue(noop.useState(null), 2);
  const callback = noop.useCallback((nativeEvent) => {
    _undefined(nativeEvent.nativeEvent.layout.height);
  }, []);
  const tmp7 = derivedValue(noop.useState(null), 2);
  [num, c4] = derivedValue(noop.useState(null), 2);
  let diff = null;
  const callback1 = noop.useCallback((nativeEvent) => {
    _undefined2(nativeDefault.space.PX_24 + nativeEvent.nativeEvent.layout.height);
  }, []);
  if (null != tmp8) {
    diff = tmp8 - 2 * isFullscreen(tmp2[8]).space.PX_16;
  }
  let str = "md";
  let str2 = "md";
  if (null != diff) {
    str2 = str;
    if (null != num) {
      let str3 = "lg";
      if (diff < tmp(tmp2[9]).QUEST_PROGRESS_DIAMETER_BY_SIZE.lg + num) {
        if (diff >= tmp(tmp2[9]).QUEST_PROGRESS_DIAMETER_BY_SIZE["md-lg"] + num) {
          str = "md-lg";
        }
        str3 = str;
      }
      str2 = str3;
    }
  }
  const sum = tmp(tmp2[9]).QUEST_PROGRESS_DIAMETER_BY_SIZE.md + num;
  const sum1 = sum + 2 * isFullscreen(tmp2[8]).space.PX_16;
  const tmp10 = derivedValue(noop.useState(null), 2);
  sharedValue = quest(tmp2[15]).useSharedValue(0);
  items1 = [sharedValue];
  const effect = noop.useEffect(() => {
    const result = sharedValue.set(1);
  }, items1);
  const tmpResult = quest(tmp2[15]);
  function ae() {
    const obj = ReanimatedRexport;
    return obj.withDelay(c16, timing.withTiming(sharedValue.get(), { duration }));
  }
  const tmpResult9 = quest(tmp2[15]);
  ae.__closure = { withDelay: quest(tmp2[15]).withDelay, LOGO_REWARD_TRANSITION_DELAY_MS, withTiming: quest(tmp2[16]).withTiming, isComponentMounted: sharedValue, LOGO_REWARD_TRANSITION_DURATION_MS };
  ae.__workletHash = 11647045462673;
  ae.__initData = __initData5;
  derivedValue = tmpResult9.useDerivedValue(ae);
  const obj3 = { withDelay: quest(tmp2[15]).withDelay, LOGO_REWARD_TRANSITION_DELAY_MS, withTiming: quest(tmp2[16]).withTiming, isComponentMounted: sharedValue, LOGO_REWARD_TRANSITION_DURATION_MS };
  function oe() {
    return { opacity: derivedValue.get() };
  }
  oe.__closure = { animation: derivedValue };
  oe.__workletHash = 785279125621;
  oe.__initData = __initData6;
  const animatedStyle = quest(tmp2[15]).useAnimatedStyle(oe);
  const tmpResult10 = quest(tmp2[15]);
  function se() {
    return { opacity: 1 - derivedValue.get() };
  }
  se.__closure = { animation: derivedValue };
  se.__workletHash = 8189208088968;
  se.__initData = __initData7;
  const animatedStyle1 = quest(tmp2[15]).useAnimatedStyle(se);
  const tmpResult11 = quest(tmp2[15]);
  function ie() {
    let pointerEvents = "none";
    if (derivedValue.get() > 0.3) {
      pointerEvents = "auto";
    }
    return { pointerEvents };
  }
  ie.__closure = { animation: derivedValue };
  ie.__workletHash = 3265902368501;
  ie.__initData = __initData8;
  const animatedProps = quest(tmp2[15]).useAnimatedProps(ie);
  const tmp23 = isFullscreen(tmp2[17])();
  const items2 = [isFullscreen, setIsFullscreen];
  const callback2 = noop.useCallback((arg0) => {
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
  const items3 = [, , ];
  ({ videoWrapper: arr4[0], videoWrapperLandscape: arr4[1] } = tmp3);
  let videoWrapperFullscreen = isFullscreen;
  if (isFullscreen) {
    videoWrapperFullscreen = tmp3.videoWrapperFullscreen;
  }
  const obj5 = { style: items3, children: null };
  items3[2] = videoWrapperFullscreen;
  const obj6 = { theme: ThemeTypes.DARK, children: null };
  const obj7 = { captionsEnabled, orientation: "landscape", style: null, contentInsets: null, handleOpenTranscript: null, handleToggleCaptions: null, isFullscreen: null, externallyPaused: null, onEnd: null, onToggleFullscreen: null, sourceQuestContent: null, hasCaptionAsset: null, hasTranscriptAsset: null };
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
  const items5 = [closure_14(quest(tmp2[18]).VideoQuestPlayer, obj7), ];
  const obj8 = { onClose: handleClose, style: null };
  const items6 = [tmp3.closeButtonLandscape, ];
  let tmp29 = isFullscreen;
  const tmpResult12 = quest(tmp2[15]);
  if (isFullscreen) {
    tmp29 = null != tmp23;
  }
  if (tmp29) {
    const obj9 = { left: tmp23.left };
    tmp29 = obj9;
  }
  items6[1] = tmp29;
  obj8.style = items6;
  items5[1] = closure_14(isFullscreen(tmp2[19]), obj8);
  obj6.children = items5;
  const items7 = [closure_15(quest(tmp2[20]).ThemeContextProvider, obj6), ];
  let tmp25Result4 = !isFullscreen;
  if (!isFullscreen) {
    const obj10 = { style: null, contentContainerStyle: null, showsVerticalScrollIndicator: false, alwaysBounceVertical: false, children: null };
    ({ landscapeContentScroll: obj15.style, landscapeContentScrollContent: obj15.contentContainerStyle } = tmp3);
    const obj11 = { style: null, children: null };
    const items8 = [, ];
    ({ videoContentWrapper: arr9[0], videoContentWrapperLandscape: arr9[1] } = tmp3);
    obj11.style = items8;
    const obj12 = { style: null, onLayout: null, children: null };
    const items9 = [tmp3.rewardContainer, ];
    const obj13 = { minHeight: sum1 };
    items9[1] = obj13;
    obj12.style = items9;
    obj12.onLayout = callback;
    const obj14 = { style: null, animatedProps: null, children: null };
    const items10 = [tmp3.rewardContentCentered, animatedStyle];
    obj14.style = items10;
    obj14.animatedProps = animatedProps;
    const obj16 = { size: str2, onTextBlockLayout: callback1 };
    obj14.children = closure_14(isFullscreen(tmp2[22]), obj16);
    const items11 = [closure_14(isFullscreen(tmp2[21]), obj14), ];
    const items12 = [tmp3.rewardContentCentered, , ];
    const tmp15Result4 = isFullscreen(tmp2[21]);
    const tmp15Result5 = isFullscreen(tmp2[21]);
    const tmpResult13 = tmp(tmp2[13]);
    const obj17 = { style: null, pointerEvents: "none", children: null };
    items12[1] = tmp(tmp2[13]).isAndroid() && tmp3.modalBackground;
    items12[2] = animatedStyle1;
    obj17.style = items12;
    const tmp34 = tmp(tmp2[13]).isAndroid() && tmp3.modalBackground;
    let isAndroidResult = tmp(tmp2[13]).isAndroid();
    if (isAndroidResult) {
      const obj18 = { align: "top", style: tmp3.cloudsBackground };
      isAndroidResult = closure_14(isFullscreen(tmp2[23]), obj18);
    }
    const items13 = [isAndroidResult, ];
    const obj19 = { assetUrl: null, maxHeight: 90, maxWidth: null };
    const tmpResult14 = tmp(tmp2[13]);
    const tmp15Result6 = isFullscreen(tmp2[24]);
    obj19.assetUrl = tmp(tmp2[14]).getQuestAsset(quest, tmp(tmp2[14]).QuestAssetType.LOGO_TYPE, "dark").url;
    obj19.maxWidth = contentWidth - 120;
    items13[1] = closure_14(tmp15Result6, obj19);
    obj17.children = items13;
    items11[1] = closure_15(tmp15Result5, obj17);
    obj12.children = items11;
    const items14 = [closure_15(closure_8, obj12), , ];
    const obj20 = { align: "top", style: tmp3.cloudsBackground };
    items14[1] = closure_14(isFullscreen(tmp2[23]), obj20);
    const obj21 = { direction: "vertical", spacing: isFullscreen(tmp2[8]).space.PX_24, style: tmp3.questDetailsLandscape, children: null };
    const obj22 = { direction: "horizontal", justify: "space-between", spacing: isFullscreen(tmp2[8]).space.PX_8, children: null };
    const obj23 = { style: tmp3.questDetailsPrimary, onPress: handleAdvertiserDetailsPress, children: null };
    const obj24 = { variant: "heading-lg/semibold", color: "mobile-text-heading-primary", accessibilityRole: "header", children: quest.config.messages.gameTitle };
    const items15 = [closure_14(tmp(tmp2[27]).Text, obj24), ];
    const obj25 = { variant: "heading-sm/semibold", color: "text-subtle", children: quest.config.messages.gamePublisher };
    items15[1] = closure_14(tmp(tmp2[27]).Text, obj25);
    obj23.children = items15;
    const items16 = [closure_15(tmp(tmp2[26]).PressableOpacity, obj23), ];
    const obj26 = { style: tmp3.questDetailsSecondary, children: null };
    const obj27 = { quest, location: constants.VIDEO_MODAL_MOBILE, sourceQuestContent };
    obj26.children = closure_14(isFullscreen(tmp2[28]), obj27);
    items16[1] = closure_14(closure_8, obj26);
    obj22.children = items16;
    const items17 = [closure_15(tmp(tmp2[25]).Stack, obj22), , ];
    let tmp25Result = null != memo;
    if (tmp25Result) {
      const obj28 = { onPress: handleAdvertiserDetailsPress, children: null };
      const obj29 = { source: null, style: null };
      const obj30 = { uri: memo.url };
      obj29.source = obj30;
      obj29.style = tmp3.playerThumbnail;
      obj28.children = closure_14(isFullscreen(tmp2[29]), obj29);
      tmp25Result = closure_14(tmp(tmp2[26]).PressableOpacity, obj28);
    }
    items17[1] = tmp25Result;
    const obj31 = { direction: "horizontal", spacing: isFullscreen(tmp2[8]).space.PX_16, children: null };
    const obj32 = { grow: true, variant: "expressive", onPress: handlePrimaryCtaPress, text: null };
    const tmpResult15 = tmp(tmp2[14]);
    obj32.text = tmp(tmp2[31]).getExternalCtaLabel(quest);
    const items18 = [closure_14(tmp(tmp2[30]).Button, obj32), , ];
    if (isShareable) {
      const obj33 = { accessibilityLabel: null, icon: null, onPress: null, variant: "secondary" };
      const intl = tmp(tmp2[33]).intl;
      obj33.accessibilityLabel = intl.string(tmp(tmp2[33]).t.Ej3B3Y);
      obj33.icon = isFullscreen(tmp2[34]);
      obj33.onPress = handleShareQuest;
      isShareable = closure_14(tmp(tmp2[32]).IconButton, obj33);
    }
    items18[1] = isShareable;
    if (tmp25Result3) {
      const obj34 = { accessibilityLabel: null, icon: null, onPress: null, variant: "secondary" };
      const intl2 = tmp(tmp2[33]).intl;
      obj34.accessibilityLabel = intl2.string(tmp(tmp2[33]).t.cfY4PE);
      obj34.icon = isFullscreen(tmp2[35]);
      obj34.onPress = onNavigateToPostWatchVideo;
      tmp25Result3 = closure_14(tmp(tmp2[32]).IconButton, obj34);
    }
    items18[2] = tmp25Result3;
    obj31.children = items18;
    items17[2] = closure_15(tmp(tmp2[25]).Stack, obj31);
    obj21.children = items17;
    items14[2] = closure_15(tmp(tmp2[25]).Stack, obj21);
    obj11.children = items14;
    obj10.children = closure_15(closure_8, obj11);
    tmp25Result4 = closure_14(closure_10, obj10);
    const tmpResult16 = tmp(tmp2[31]);
  }
  items7[1] = tmp25Result4;
  obj5.children = items7;
  obj4.children = closure_15(closure_8, obj5);
  return closure_14(quest(tmp2[36]).SafeAreaPaddingView, obj4);
}));
ReactCompilerGating = fn(558);
let closure_34 = noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function PortraitLayout(arg0) {
  const cResult = c.c(107);
  ({ quest, captionsEnabled, handleClose, handleAdvertiserDetailsPress, handlePrimaryCtaPress, handleRewardDetailsPress, handleShareQuest, handleOpenTranscript, handleToggleCaptions, isFullscreen, onNavigateToPostWatchVideo, onEnd, externallyPaused, sourceQuestContent, hasCaptionAsset, hasTranscriptAsset, isShareable, contentWidth } = arg0);
  const questTaskDetails = hooks_QuestHooks.useQuestTaskDetails(quest);
  const userStatus = quest.userStatus;
  let completedAt;
  if (userStatus != null) {
    completedAt = userStatus.completedAt;
  }
  if (cResult[0] === null != completedAt) {
    const height = useStateFromSharedValueDefault(noop.useContext(QuestDockGestureContext.QuestDockGestureContext).windowDimensions).height;
    const _Math = Math;
    const _Symbol = Symbol;
    const rounded = Math.floor(contentWidth / closure_11);
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      class H {
        constructor() {
          return;
        }
      }
      cResult[3] = H;
    } else {
      class H {
        constructor() {
          return;
        }
      }
    }
    const rect = useSafeAreaInsetsDefault();
    [tmp16, require] = noop.useState(64);
    const _Symbol2 = Symbol;
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      class H {
        constructor() {
          return;
        }
      }
      cResult[4] = tmp18;
    } else {
      class H {
        constructor() {
          return;
        }
      }
    }
    const _Math2 = Math;
    const bound = Math.min(height - rect.top - rect.bottom - tmp16, rounded);
    const tmp21 = closure_24(height - bound - tmp16 < 200);
    if (cResult[5] === tmp21.wrapper) {
      class H {
        constructor() {
          return;
        }
      }
      if (cResult[8] !== bound) {
        class H {
          constructor() {
            return;
          }
        }
        cResult[8] = bound;
        cResult[9] = tmp24;
      } else {
        class H {
          constructor() {
            return;
          }
        }
        if (cResult[10] === tmp21.videoWrapper) {
          class H {
            constructor() {
              return;
            }
          }
          if (cResult[13] === captionsEnabled) {
            class H {
              constructor() {
                return;
              }
            }
          }
          const obj3 = { theme: ThemeTypes.DARK, children: null };
          const obj5 = { captionsEnabled, onLoad: H, externallyPaused, orientation: "portrait", contentInsets, handleOpenTranscript, handleToggleCaptions, isFullscreen, onEnd, sourceQuestContent, hasCaptionAsset, hasTranscriptAsset };
          obj3.children = closure_14(VideoQuestPlayer.VideoQuestPlayer, obj5);
          const tmp31 = closure_14(native.ThemeContextProvider, obj3);
          cResult[13] = captionsEnabled;
          cResult[14] = externallyPaused;
          cResult[15] = handleOpenTranscript;
          cResult[16] = handleToggleCaptions;
          cResult[17] = hasCaptionAsset;
          cResult[18] = hasTranscriptAsset;
          cResult[19] = isFullscreen;
          cResult[20] = onEnd;
          cResult[21] = sourceQuestContent;
          cResult[22] = tmp31;
        }
        items = [tmp21.videoWrapper, tmp23];
        cResult[10] = tmp21.videoWrapper;
        cResult[11] = tmp23;
        cResult[12] = items;
      }
    }
    items1 = [, ];
    ({ wrapper: arr[0], wrapperPortrait: arr[1] } = tmp21);
    cResult[5] = tmp21.wrapper;
    cResult[6] = tmp21.wrapperPortrait;
    cResult[7] = items1;
    const tmp15 = _slicedToArray(noop.useState(64), 2);
  }
  const videoQuestProgressRemainingAccessibilityLabel = VideoQuestUtils.getVideoQuestProgressRemainingAccessibilityLabel(questTaskDetails, tmp6);
  cResult[0] = null != completedAt;
  cResult[1] = questTaskDetails;
  cResult[2] = videoQuestProgressRemainingAccessibilityLabel;
  const tmpResult = VideoQuestUtils;
}) : (function PortraitLayout(arg0) {
  ({ quest, captionsEnabled, contentWidth } = arg0);
  ({ handleOpenTranscript, handleToggleCaptions, sourceQuestContent, hasCaptionAsset, hasTranscriptAsset, isShareable } = arg0);
  let height;
  let memo;
  closure_3 = undefined;
  first = undefined;
  closure_5 = undefined;
  ({ handleClose, handleAdvertiserDetailsPress, handlePrimaryCtaPress, handleRewardDetailsPress, handleShareQuest, isFullscreen, onNavigateToPostWatchVideo, onEnd, externallyPaused } = arg0);
  const questTaskDetails = contentWidth(memo[37]).useQuestTaskDetails(quest);
  const userStatus = quest.userStatus;
  let completedAt;
  if (userStatus != null) {
    completedAt = userStatus.completedAt;
  }
  let obj = contentWidth(memo[37]);
  const videoQuestProgressRemainingAccessibilityLabel = contentWidth(memo[38]).getVideoQuestProgressRemainingAccessibilityLabel(questTaskDetails, tmp5);
  height = height(tmp2[40])(noop.useContext(contentWidth(tmp2[39]).QuestDockGestureContext).windowDimensions).height;
  items = [contentWidth];
  memo = noop.useMemo(() => Math.floor(contentWidth / closure_2_11), items);
  const callback = noop.useCallback(() => {

  }, []);
  const tmp10 = height(memo[17])();
  closure_3 = tmp10;
  [first, closure_5] = noop.useState(64);
  items1 = [memo, first, height, tmp10];
  const callback1 = noop.useCallback((nativeEvent) => {
    closure_5(nativeEvent.nativeEvent.layout.height);
  }, []);
  const memo1 = noop.useMemo(() => Math.min(height - closure_3.top - closure_3.bottom - first, memo), items1);
  let tmp18Result3 = closure_24(height - memo1 - first < 200);
  const obj2 = { bottom: true, style: null, children: null };
  const items2 = [, ];
  ({ wrapper: arr3[0], wrapperPortrait: arr3[1] } = tmp18Result3);
  obj2.style = items2;
  const items3 = [tmp18Result3.videoWrapper, ];
  if (null == memo1) {
    let obj3 = { flexGrow: 1 };
  } else {
    obj3 = { height: memo1 };
  }
  const obj4 = { style: items3, children: null };
  items3[1] = obj3;
  const obj5 = { theme: ThemeTypes.DARK, children: closure_14(contentWidth(memo[18]).VideoQuestPlayer, { captionsEnabled, onLoad: callback, externallyPaused, orientation: "portrait", contentInsets, handleOpenTranscript, handleToggleCaptions, isFullscreen, onEnd, sourceQuestContent, hasCaptionAsset, hasTranscriptAsset }) };
  const items4 = [closure_14(contentWidth(memo[20]).ThemeContextProvider, obj5), closure_14(height(memo[41]), { start, end, style: tmp18Result3.gradientTop, colors: items }), closure_14(height(memo[41]), { start, end, style: tmp18Result3.gradientBottom, colors: items1 }), ];
  const obj9 = { style: null, children: null };
  const items5 = [, ];
  ({ videoContentWrapper: arr6[0], videoContentWrapperPortrait: arr6[1] } = tmp18Result3);
  obj9.style = items5;
  const obj10 = { closeButtonIconColor: null, onClose: null, showCurrentVideoTime: true, withTextShadow: true };
  const obj6 = { captionsEnabled, onLoad: callback, externallyPaused, orientation: "portrait", contentInsets, handleOpenTranscript, handleToggleCaptions, isFullscreen, onEnd, sourceQuestContent, hasCaptionAsset, hasTranscriptAsset };
  const obj7 = { start, end, style: tmp18Result3.gradientTop, colors: items };
  const obj8 = { start, end, style: tmp18Result3.gradientBottom, colors: items1 };
  const tmpResult = contentWidth(memo[38]);
  obj10.closeButtonIconColor = height(memo[8]).colors.WHITE;
  obj10.onClose = handleClose;
  const items6 = [closure_14(height(memo[42]), obj10), ];
  const obj11 = { direction: "vertical", spacing: height(memo[8]).space.PX_24, children: null };
  const obj12 = { direction: "horizontal", justify: "space-between", spacing: height(memo[8]).space.PX_8, children: null };
  const obj13 = { style: tmp18Result3.questDetailsPrimary, onPress: handleAdvertiserDetailsPress, children: null };
  const items7 = [closure_14(contentWidth(memo[27]).Text, { variant: "heading-lg/semibold", color: "text-overlay-light", style: tmp18Result3.textShadow, accessibilityRole: "header", children: quest.config.messages.gameTitle }), ];
  const obj15 = { variant: "heading-sm/semibold", color: "text-overlay-light", style: null, children: quest.config.messages.gamePublisher };
  const items8 = [, ];
  ({ textShadow: arr9[0], questDetailsSubheader: arr9[1] } = tmp18Result3);
  obj15.style = items8;
  items7[1] = closure_14(contentWidth(memo[27]).Text, obj15);
  obj13.children = items7;
  const items9 = [closure_15(contentWidth(memo[26]).PressableOpacity, obj13), ];
  const obj16 = { style: tmp18Result3.questDetailsSecondary, children: closure_14(height(memo[9]), { quest, size: "x-sm", progress: questTaskDetails.percentComplete, hasConfetti: true, onPress: handleRewardDetailsPress, accessibilityLabel: videoQuestProgressRemainingAccessibilityLabel }) };
  items9[1] = closure_14(closure_8, obj16);
  obj12.children = items9;
  const items10 = [closure_15(contentWidth(memo[25]).Stack, obj12), ];
  const obj18 = { grow: true, variant: "expressive", onPress: handlePrimaryCtaPress, text: null };
  const obj14 = { variant: "heading-lg/semibold", color: "text-overlay-light", style: tmp18Result3.textShadow, accessibilityRole: "header", children: quest.config.messages.gameTitle };
  const obj17 = { quest, size: "x-sm", progress: questTaskDetails.percentComplete, hasConfetti: true, onPress: handleRewardDetailsPress, accessibilityLabel: videoQuestProgressRemainingAccessibilityLabel };
  const tmp7Result = height(memo[42]);
  obj18.text = contentWidth(memo[31]).getExternalCtaLabel(quest);
  items10[1] = closure_14(contentWidth(memo[30]).Button, obj18);
  obj11.children = items10;
  items6[1] = closure_15(contentWidth(memo[25]).Stack, obj11);
  obj9.children = items6;
  items4[3] = closure_15(closure_8, obj9);
  obj4.children = items4;
  const items11 = [closure_15(closure_8, obj4), ];
  const obj19 = { direction: "horizontal", justify: "flex-end", align: "center", style: tmp18Result3.footer, spacing: height(memo[8]).space.PX_4, onLayout: callback1, children: null };
  let tmp18Result = tmp5;
  if (null != completedAt) {
    const obj20 = { style: tmp18Result3.viewRewardBtn, children: null };
    const obj21 = { icon: closure_14(contentWidth(tmp2[43]).ArrowSmallRightIcon, { size: "sm" }), iconPosition: "end", onPress: onNavigateToPostWatchVideo, variant: "secondary", size: "sm", text: null };
    let intl = contentWidth(tmp2[33]).intl;
    obj21.text = intl.string(contentWidth(tmp2[33]).t["jyYgZ+"]);
    obj20.children = closure_14(contentWidth(tmp2[30]).Button, obj21);
    tmp18Result = closure_14(closure_8, obj20);
  }
  const items12 = [tmp18Result, , , , ];
  if (hasTranscriptAsset) {
    const obj22 = { accessibilityLabel: null, onPress: null, children: null };
    const intl2 = contentWidth(tmp2[33]).intl;
    obj22.accessibilityLabel = intl2.string(contentWidth(tmp2[33]).t.KCzjTi);
    obj22.onPress = handleOpenTranscript;
    const obj23 = { color: tmp18Result3.iconDisabled.color };
    obj22.children = closure_14(contentWidth(tmp2[44]).TranscriptOutlineIcon, obj23);
    hasTranscriptAsset = closure_14(closure_36, obj22);
  }
  items12[1] = hasTranscriptAsset;
  if (!hasCaptionAsset) {
    items12[2] = hasCaptionAsset;
    if (isShareable) {
      const obj24 = { accessibilityLabel: null, onPress: null, children: null };
      const intl4 = contentWidth(tmp2[33]).intl;
      obj24.accessibilityLabel = intl4.string(contentWidth(tmp2[33]).t.Ej3B3Y);
      obj24.onPress = handleShareQuest;
      const obj25 = { color: tmp7(tmp2[8]).colors.TEXT_DEFAULT };
      obj24.children = closure_14(contentWidth(tmp2[46]).ShareIcon, obj25);
      isShareable = closure_14(closure_36, obj24);
    }
    items12[3] = isShareable;
    const obj26 = {
      quest,
      location: constants.VIDEO_MODAL_MOBILE,
      sourceQuestContent,
      children: function renderContextMenuButton(ref) {
          const obj = { accessibilityLabel: null, ref: null };
          const merged = Object.assign(ref, Object.assign({ ref: 0 }));
          const intl = contentWidth(memo[33]).intl;
          obj.accessibilityLabel = intl.string(contentWidth(memo[33]).t.PdRCRg);
          obj.ref = ref.ref;
          const merged1 = Object.assign(merged);
          obj.children = closure_1_14(contentWidth(memo[47]).MoreHorizontalIcon, { color: height(memo[8]).colors.TEXT_DEFAULT });
          return closure_1_14(closure_1_36, obj);
        }
    };
    items12[4] = closure_14(tmp7(tmp2[28]), obj26);
    obj19.children = items12;
    items11[1] = closure_15(contentWidth(tmp2[25]).Stack, obj19);
    obj2.children = items11;
    return closure_15(contentWidth(tmp2[36]).SafeAreaPaddingView, obj2);
  } else {
    const obj27 = { accessibilityLabel: null, onPress: null, children: null };
    const intl3 = contentWidth(tmp2[33]).intl;
    obj27.accessibilityLabel = intl3.string(contentWidth(tmp2[33]).t.bDSZO1);
    obj27.onPress = handleToggleCaptions;
    if (captionsEnabled) {
      let color = tmp18Result3.icon.color;
    } else {
      color = tmp18Result3.iconDisabled.color;
    }
    const obj28 = { color };
    tmp18Result3 = closure_14(contentWidth(tmp2[45]).ClosedCaptionsOutlineIcon, obj28);
    obj27.children = tmp18Result3;
    closure_14(closure_36, obj27);
  }
  const tmpResult2 = contentWidth(memo[31]);
}));
createStyles = fn(5090);
let obj = { footerButton: null };
const alphaResult3 = n(nativeDefault.unsafe_rawColors.PLUM_23).alpha(0.4);
obj.footerButton = { padding: nativeDefault.space.PX_8 };
let closure_35 = createStyles.createStyles(obj);
ReactCompilerGating = fn(558);
let closure_36 = ReactCompilerGating.isReactCompilerEnabled() ? (function FooterButton(ref) {
  const cResult = c.c(7);
  if (cResult[0] !== ref) {
    const tmp8 = _objectWithoutProperties(ref.ref, closure_4);
    cResult[0] = ref.ref;
    cResult[1] = tmp8;
    cResult[2] = ref.ref;
    let tmp5 = ref;
    let tmp4 = tmp8;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
  }
  const tmp9 = closure_35();
  if (cResult[3] === tmp4) {
    if (cResult[4] === tmp5) {
      if (cResult[5] === tmp9.footerButton) {
        let tmp10 = cResult[6];
      }
      return tmp10;
    }
  }
  const obj2 = { accessibilityRole: "button", style: tmp9.footerButton };
  const merged = Object.assign(tmp4);
  obj2.ref = tmp5;
  const tmp12 = state(Pressables.PressableOpacity, obj2);
  cResult[3] = tmp4;
  cResult[4] = tmp5;
  cResult[5] = tmp9.footerButton;
  cResult[6] = tmp12;
  tmp10 = tmp12;
}) : (function FooterButton(ref) {
  const merged = Object.assign(ref, Object.assign({ ref: 0 }));
  const obj = { accessibilityRole: "button", style: closure_35().footerButton };
  const merged1 = Object.assign(merged);
  obj.ref = ref.ref;
  return state(Pressables.PressableOpacity, obj);
});
let obj2 = { padding: nativeDefault.space.PX_8 };
let size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/VideoQuestModal/VideoQuestModalContentInProgress.tsx");

export default noop.memo(function VideoQuestModalContentInProgress(arg0) {
  ({ onClose, sourceQuestContent } = arg0);
  ({ contentWidth, isFullscreen, onNavigateToPostWatchVideo, onEnd, setIsFullscreen } = arg0);
  const quest = sourceQuestContent(15207).useVideoQuestModalContext().quest;
  items = [quest];
  items1 = [quest];
  const memo = noop.useMemo(() => AssetUtils.getQuestAsset(quest, AssetUtils.QuestAssetType.VIDEO_PLAYER_CAPTION, undefined, true), items);
  const memo1 = noop.useMemo(() => AssetUtils.getQuestAsset(quest, AssetUtils.QuestAssetType.VIDEO_PLAYER_TRANSCRIPT, undefined, true), items1);
  let obj = sourceQuestContent(15207);
  [tmp6, dependencyMap] = videoQuestClickCtaAndMaybeCloseModal(noop.useState(false), 2);
  const items2 = [quest];
  const callback = noop.useCallback(() => dependencyMap((arg0) => !arg0), []);
  const callback1 = noop.useCallback(() => {
    const obj = ActionSheetActionCreatorsDefault;
    obj.openLazy(asyncRequireImpl(15235, dependencyMap.paths), "transcript-" + quest.id, { quest });
  }, items2);
  const tmp5 = videoQuestClickCtaAndMaybeCloseModal(noop.useState(false), 2);
  const getQuestImpressionId = sourceQuestContent(10580).useGetQuestImpressionId();
  let obj2 = sourceQuestContent(10580);
  [tmp11, closure_4] = videoQuestClickCtaAndMaybeCloseModal(noop.useState(false), 2);
  const tmp10 = videoQuestClickCtaAndMaybeCloseModal(noop.useState(false), 2);
  const isShareableQuestResult = sourceQuestContent(7399).isShareableQuest(quest.config);
  _objectWithoutProperties = isShareableQuestResult;
  const items3 = [isShareableQuestResult, quest.id, getQuestImpressionId, sourceQuestContent];
  const callback2 = noop.useCallback(() => {
    if (isShareableQuestResult) {
      let getQuestUrl = require;
      let id = dependencyMap;
      if (obj.shouldMigrateToAdAnalyticsInterface(AdAnalyticsInterfaceExperiment.AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL, "video_quest_modal_in_progress")) {
        const questUrl = getQuestUrl(7405);
        const obj2 = { type: getQuestUrl(7415).AdUserActionType.CLICK_INTERNAL, adCreativeType: getQuestUrl(5984).AdCreativeType.QUEST, adCreativeId: quest.id, questContentCTA: getQuestUrl(7404).QuestContentCTA.MOBILE_SHARESHEET, surfaceId: getQuestUrl(5980).QuestContent.VIDEO_MODAL_MOBILE, sourceQuestContent, impressionId: getQuestImpressionId() };
        questUrl.captureAdUserAction(obj2);
        let tmp = quest;
      } else {
        const questUrl1 = getQuestUrl(7395);
        const obj3 = { questId: null, questContent: null, questContentCTA: null, impressionId: null, sourceQuestContent: null };
        tmp = quest;
        obj3.questId = quest.id;
        obj3.questContent = getQuestUrl(5980).QuestContent.VIDEO_MODAL_MOBILE;
        obj3.questContentCTA = getQuestUrl(7404).QuestContentCTA.MOBILE_SHARESHEET;
        obj3.impressionId = getQuestImpressionId();
        obj3.sourceQuestContent = sourceQuestContent;
        const result = questUrl1.trackQuestContentClicked(obj3);
      }
      closure_1_4(true);
      const questUrl2 = getQuestUrl(8457);
      const obj4 = { message: null, iOSOnlyShareCallback: null };
      const questUrl3 = getQuestUrl(9554);
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
  let obj3 = sourceQuestContent(7399);
  videoQuestClickCtaAndMaybeCloseModal = sourceQuestContent(15236).useVideoQuestClickCtaAndMaybeCloseModal({ quest, onClose, sourceQuestContent });
  const items4 = [videoQuestClickCtaAndMaybeCloseModal];
  const items5 = [videoQuestClickCtaAndMaybeCloseModal];
  const callback3 = noop.useCallback(() => videoQuestClickCtaAndMaybeCloseModal(QuestTypes.QuestContent.VIDEO_MODAL_MOBILE_FOOTER), items4);
  const items6 = [quest.id];
  const callback4 = noop.useCallback(() => videoQuestClickCtaAndMaybeCloseModal(QuestTypes.QuestContent.VIDEO_MODAL_MOBILE), items5);
  const callback5 = noop.useCallback(() => {
    const result = QuestUtils.openRewardDetailsBottomSheet({ questId: quest.id });
  }, items6);
  let obj4 = sourceQuestContent(15236);
  const videoExternallyPaused = sourceQuestContent(15237).useVideoExternallyPaused(quest.id, tmp11);
  const tmp19 = quest.config.taskConfigV2.tasks[sourceQuestContent(undefined, 5985).FirstPartyQuestTaskTypes.WATCH_VIDEO_ON_MOBILE];
  let tmp20 = null == tmp19;
  if (!tmp20) {
    tmp20 = "portrait" === sourceQuestContent(10604).getVideoOrientation(tmp19);
    const tmpResult = sourceQuestContent(10604);
  }
  return closure_14(tmp20 ? closure_34 : closure_33, { quest, captionsEnabled: tmp6, contentWidth, handleClose: onClose, handleAdvertiserDetailsPress: callback3, handlePrimaryCtaPress: callback4, handleRewardDetailsPress: callback5, handleShareQuest: callback2, handleOpenTranscript: callback1, handleToggleCaptions: callback, isFullscreen, onNavigateToPostWatchVideo, onEnd, setIsFullscreen, externallyPaused: videoExternallyPaused, sourceQuestContent, hasCaptionAsset: null != memo, hasTranscriptAsset: null != memo1, isShareable: isShareableQuestResult });
});