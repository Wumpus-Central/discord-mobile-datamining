// discord_app/modules/quests/native/VideoQuestModal/VideoQuestModalContentInProgress.tsx
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../../../discord_common/js/shared/Constants.tsx";
import intl5 from "../../../../intl/index.native.tsx";
import useSafeAreaInsetsDefault from "../../../safe_area/useSafeAreaInsets.native.tsx";
import asyncRequire from "../../../../../_runtime/01987_asyncRequire.js";
import native from "../../../../../discord_common/js/packages/design/native.tsx";
import ReanimatedRexport from "../../../reanimated/ReanimatedRexport.tsx";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import timing from "../../../../design/animation/reanimated/timing/timing.tsx";
import QuestTypes from "../../QuestTypes.tsx";
import AdCreativeType from "../../../../../discord_common/js/shared/shared-constants/AdCreativeType.tsx";
import Pressables from "../../../../design/void/Pressables/native/Pressables.tsx";
import AnalyticsActions from "../../lib/analytics/AnalyticsActions.tsx";
import AnalyticsTypes from "../../lib/analytics/AnalyticsTypes.tsx";
import captureAdUserAction2 from "../../../ads/analytics/captureAdUserAction.tsx";
import captureAdUserActionTypes from "../../../ads/analytics/captureAdUserActionTypes.tsx";
import AdAnalyticsInterfaceExperiment from "../../experiments/AdAnalyticsInterfaceExperiment.tsx";
import MoreHorizontalIcon2 from "../../../../design/components/Icon/native/redesign/generated/MoreHorizontalIcon.tsx";
import useStateFromSharedValueDefault from "../../../reanimated/native/useStateFromSharedValue.tsx";
import showShareActionSheet2 from "../../../action_sheet/native/showShareActionSheet.tsx";
import AssetUtils from "../../lib/AssetUtils.tsx";
import QuestCopyUtils from "../../utils/QuestCopyUtils.tsx";
import QuestUtils from "../QuestUtils.native.tsx";
import hooks_QuestHooks from "../../hooks/QuestHooks.tsx";
import VideoQuestUtils from "../../utils/VideoQuestUtils.tsx";
import QuestDockGestureContext from "../QuestDock/QuestDockGestureContext.tsx";
import VideoQuestPlayer2 from "VideoQuestPlayer.tsx";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import _slicedToArray_mod from "../../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../../_runtime/00019_react.js";
import react_native from "../../../../../_runtime/00017_react-native.js";
import QuestConstants from "../../QuestConstants.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import module_683_mod from "../../../../../_runtime/metro/00683__.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../../_runtime/metro/00002__.js";

let c10;
let c9;
let closure_14;
let map1;
let metroImportAll;
let metroImportDefault;
let obj2;
let unpackModuleId;
let closure_3 = ["ref"];
let _slicedToArray = _slicedToArray_mod;
({ View: metroImportDefault, StyleSheet: metroImportAll, ScrollView: c9 } = react_native);
({ DEFAULT_PORTRAIT_ASPECT_RATIO: c10, QuestsExperimentLocations: unpackModuleId } = QuestConstants);
const ThemeTypes = Constants.ThemeTypes;
({ jsx: map1, jsxs: closure_14 } = Fragment);
let c15 = 3000;
let c16 = 1000;
const start = { x: 0, y: 0 };
const end = { x: 0, y: 1 };
let module_683 = module_683_mod;
let items = [,];
const importDefaultResultResult = module_683(nativeDefault.unsafe_rawColors.PLUM_23);
const alphaResult = importDefaultResultResult.alpha(0.4);
items[0] = alphaResult.hex();
module_683 = module_683_mod;
const importDefaultResult1Result = module_683(nativeDefault.unsafe_rawColors.PLUM_23);
const alphaResult1 = importDefaultResult1Result.alpha(0);
items[1] = alphaResult1.hex();
module_683 = module_683_mod;
let items1 = [,];
const importDefaultResult2Result = module_683(nativeDefault.unsafe_rawColors.PLUM_23);
const alphaResult2 = importDefaultResult2Result.alpha(0);
items1[0] = alphaResult2.hex();
module_683 = module_683_mod;
const importDefaultResult3Result = module_683(nativeDefault.unsafe_rawColors.PLUM_23);
const alphaResult3 = importDefaultResult3Result.alpha(0.4);
items1[1] = alphaResult3.hex();
const contentInsets = { bottom: 158, top: 64, left: 16, right: 16 };
const contentInsets2 = { bottom: 16, left: 16, right: 16 };
let createStyles = createStyles_mod;
let closure_23 = createStyles.createStyles((arg0) => {
  let obj14;
  let obj15;
  let obj3;
  let obj8;
  let rect;
  let rect1;
  let str;
  const obj = {
    wrapper: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, flex: 1 },
    wrapperPortrait: obj3,
    videoLandscape: { width: "100%", position: "relative" },
    videoLandscape9by16: { aspectRatio: 1.7777777777777777, flexShrink: 0 },
    landscapeContentScroll: { flex: 1 },
    landscapeContentScrollContent: { flexGrow: 1 },
    videoLandscapeFullscreen: { flexGrow: 1, flexShrink: 1 },
    videoWrapper: { borderRadius: nativeDefault.radii.lg, flexGrow: 0, flexShrink: 0, overflow: "hidden" },
    videoWrapperLandscape: {
      flexGrow: 1,
      borderTopLeftRadius: nativeDefault.radii.none,
      borderTopRightRadius: nativeDefault.radii.none,
    },
    videoWrapperFullscreen: { borderRadius: nativeDefault.radii.none },
    videoContentWrapper: {
      flexDirection: "column",
      pointerEvents: "box-none",
      flexGrow: 1,
      flexShrink: 0,
      justifyContent: "space-between",
      padding: nativeDefault.space.PX_16,
    },
    videoContentWrapperLandscape: { padding: 0 },
    videoContentWrapperPortrait: obj8,
    rewardContainer: { justifyContent: "center", flexGrow: 1, flexShrink: 0 },
    rewardContentCentered: rect,
    modalBackground: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST },
    questDetailsLandscape: {
      borderTopWidth: 1,
      borderColor: nativeDefault.colors.BACKGROUND_MOD_STRONG,
      paddingHorizontal: nativeDefault.space.PX_16,
      paddingTop: nativeDefault.space.PX_24,
    },
    questDetailsPrimary: { flexGrow: 0, flexShrink: 1 },
    questDetailsSecondary: { flexGrow: 0, flexShrink: 0 },
    footer: { paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_8 },
    icon: { color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE },
    iconDisabled: { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT },
    closeButtonLandscape: rect1,
    gradientTop: obj14,
    gradientBottom: obj15,
    textShadow: {
      margin: -15,
      padding: 15,
      textShadowColor: nativeDefault.colors.BLACK,
      textShadowOffset: { width: 0, height: 0 },
      textShadowRadius: 15,
    },
    viewRewardBtn: { marginRight: "auto" },
    playerThumbnail: size,
    cloudsBackground: { zIndex: -1 },
    questDetailsSubheader: { opacity: 0.6 },
  };
  ({ backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, flex: 1 });
  obj3 = {
    borderTopLeftRadius: nativeDefault.radii.lg,
    borderTopRightRadius: nativeDefault.radii.lg,
    justifyContent: str,
  };
  str = "center";
  const tmp3 = arg0;
  if (tmp3) {
    str = "flex-start";
  }
  ({ borderRadius: nativeDefault.radii.lg, flexGrow: 0, flexShrink: 0, overflow: "hidden" });
  ({ flexGrow: 1, borderTopLeftRadius: nativeDefault.radii.none, borderTopRightRadius: nativeDefault.radii.none });
  ({ borderRadius: nativeDefault.radii.none });
  ({
    flexDirection: "column",
    pointerEvents: "box-none",
    flexGrow: 1,
    flexShrink: 0,
    justifyContent: "space-between",
    padding: nativeDefault.space.PX_16,
  });
  obj8 = {};
  const merged = Object.assign(metroImportAll.absoluteFillObject);
  rect = {
    position: "absolute",
    top: nativeDefault.space.PX_16,
    left: nativeDefault.space.PX_16,
    right: nativeDefault.space.PX_16,
    bottom: nativeDefault.space.PX_16,
    alignItems: "center",
    justifyContent: "center",
  };
  ({ backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST });
  ({
    borderTopWidth: 1,
    borderColor: nativeDefault.colors.BACKGROUND_MOD_STRONG,
    paddingHorizontal: nativeDefault.space.PX_16,
    paddingTop: nativeDefault.space.PX_24,
  });
  ({ paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_8 });
  ({ color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE });
  ({ color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT });
  rect1 = { position: "absolute", top: nativeDefault.space.PX_16, left: nativeDefault.space.PX_16 };
  obj14 = { bottom: undefined, height: 70 };
  const merged1 = Object.assign(metroImportAll.absoluteFillObject);
  obj15 = { top: undefined, height: 150 };
  const merged2 = Object.assign(metroImportAll.absoluteFillObject);
  ({
    margin: -15,
    padding: 15,
    textShadowColor: nativeDefault.colors.BLACK,
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 15,
  });
  size = { borderRadius: nativeDefault.radii.lg, height: 96, width: "100%" };
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
  code: 'function VideoQuestModalContentInProgressTsx4(){const{animation}=this.__closure;return{pointerEvents:animation.get()>0.3?"auto":"none"};}',
};
const __initData5 = {
  code: "function VideoQuestModalContentInProgressTsx5(){const{withDelay,LOGO_REWARD_TRANSITION_DELAY_MS,withTiming,isComponentMounted,LOGO_REWARD_TRANSITION_DURATION_MS}=this.__closure;return withDelay(LOGO_REWARD_TRANSITION_DELAY_MS,withTiming(isComponentMounted.get(),{duration:LOGO_REWARD_TRANSITION_DURATION_MS}));}",
};
const __initData6 = {
  code: "function VideoQuestModalContentInProgressTsx6(){const{animation}=this.__closure;return{opacity:animation.get()};}",
};
const __initData7 = {
  code: "function VideoQuestModalContentInProgressTsx7(){const{animation}=this.__closure;return{opacity:1-animation.get()};}",
};
const __initData8 = {
  code: "function VideoQuestModalContentInProgressTsx8(){const{animation}=this.__closure;return{pointerEvents:animation.get()>0.3?'auto':'none'};}",
};
let memo = react.memo;
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_32 = memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (arg0) => {
        let captionsEnabled;
        let contentWidth;
        let derivedValue;
        let duration;
        let externallyPaused;
        let first;
        let handleAdvertiserDetailsPress;
        let handleClose;
        let handleOpenTranscript;
        let handlePrimaryCtaPress;
        let handleShareQuest;
        let handleToggleCaptions;
        let hasCaptionAsset;
        let hasTranscriptAsset;
        let isFullscreen;
        let isShareable;
        let onEnd;
        let onNavigateToPostWatchVideo;
        let quest;
        let setIsFullscreen;
        let sourceQuestContent;
        let tmp11;
        let tmp14;
        let obj = isFullscreen(576);
        const cResult = obj.c(82);
        ({
          quest,
          captionsEnabled,
          contentWidth,
          handleClose,
          handleAdvertiserDetailsPress,
          handlePrimaryCtaPress,
          handleShareQuest,
          handleOpenTranscript,
          handleToggleCaptions,
          isFullscreen,
        } = arg0);
        ({ onNavigateToPostWatchVideo, onEnd, setIsFullscreen } = arg0);
        ({ externallyPaused, sourceQuestContent, hasCaptionAsset, hasTranscriptAsset, isShareable } = arg0);
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const tmpResult = isFullscreen(1369);
          const isAndroidResult = tmpResult.isAndroid();
          cResult[0] = isAndroidResult;
          first = isAndroidResult;
        } else {
          first = cResult[0];
        }
        const tmp6 = closure_23(first);
        if (cResult[1] !== quest) {
          const tmpResult7 = isFullscreen(10000);
          const questAsset = tmpResult7.getQuestAsset(quest, isFullscreen(10000).QuestAssetType.HERO);
          cResult[1] = quest;
          cResult[2] = questAsset;
        }
        const userStatus = quest.userStatus;
        if (userStatus != null) {
          const completedAt = userStatus.completedAt;
        }
        [tmp11, dependencyMap] = derivedValue(react.useState(null), 2);
        derivedValue(react.useState(null), 2);
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          const fn = function z(nativeEvent) {
            dependencyMap(nativeEvent.nativeEvent.layout.height);
          };
          cResult[3] = fn;
        }
        [tmp14, closure_3] = derivedValue(react.useState(null), 2);
        derivedValue(react.useState(null), 2);
        if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
          class J {
            constructor(nativeEvent) {
              closure_3(nativeDefault.space.PX_24 + nativeEvent.nativeEvent.layout.height);
            }
          }
          cResult[4] = J;
        } else {
          class J {
            constructor(nativeEvent) {
              closure_3(nativeDefault.space.PX_24 + nativeEvent.nativeEvent.layout.height);
            }
          }
        }
        let diff = null;
        if (null != tmp11) {
          class J {
            constructor(nativeEvent) {
              closure_3(nativeDefault.space.PX_24 + nativeEvent.nativeEvent.layout.height);
            }
          }
          diff = tmp11 - 2 * setIsFullscreen(587).space.PX_16;
        }
        if (cResult[5] === tmp14) {
          let tmp22;
          class J {
            constructor(nativeEvent) {
              closure_3(nativeDefault.space.PX_24 + nativeEvent.nativeEvent.layout.height);
            }
          }
          const md = isFullscreen(14935).QUEST_PROGRESS_DIAMETER_BY_SIZE.md;
          if (tmp14 == null) {
            class J {
              constructor(nativeEvent) {
                closure_3(nativeDefault.space.PX_24 + nativeEvent.nativeEvent.layout.height);
              }
            }
          }
          const sum = md + tmp14;
          const sum1 = sum + 2 * setIsFullscreen(587).space.PX_16;
          const tmpResult8 = isFullscreen(4612);
          const sharedValue = tmpResult8.useSharedValue(0);
          if (cResult[8] !== sharedValue) {
            class J {
              constructor(nativeEvent) {
                closure_3(nativeDefault.space.PX_24 + nativeEvent.nativeEvent.layout.height);
              }
            }
            items = [sharedValue];
            cResult[8] = sharedValue;
            cResult[9] = tmp23;
            cResult[10] = items;
            tmp22 = items;
          } else {
            class J {
              constructor(nativeEvent) {
                closure_3(nativeDefault.space.PX_24 + nativeEvent.nativeEvent.layout.height);
              }
            }
            tmp22 = cResult[10];
          }
          const effect = react.useEffect(tmp23, tmp22);
          function he() {
            const withDelay = ReanimatedRexport.withDelay;
            ReanimatedRexport;
            const obj = timing;
            const obj2 = { duration };
            return withDelay(c15, obj.withTiming(sharedValue.get(), obj2));
          }
          let obj2 = {
            withDelay: isFullscreen(4612).withDelay,
            LOGO_REWARD_TRANSITION_DELAY_MS,
            withTiming: isFullscreen(4891).withTiming,
            isComponentMounted: sharedValue,
            LOGO_REWARD_TRANSITION_DURATION_MS,
          };
          const useDerivedValue = isFullscreen(4612).useDerivedValue;
          isFullscreen(4612);
          he.__closure = obj2;
          he.__workletHash = 12561024953493;
          he.__initData = __initData;
          derivedValue = useDerivedValue(he);
          function ge() {
            const obj = { opacity: derivedValue.get() };
            return obj;
          }
          const obj3 = { animation: derivedValue };
          ge.__closure = obj3;
          ge.__workletHash = 17463485679217;
          ge.__initData = __initData2;
          const tmpResult10 = isFullscreen(4612);
          const animatedStyle = tmpResult10.useAnimatedStyle(ge);
          function _e() {
            const obj = { opacity: 1 - derivedValue.get() };
            return obj;
          }
          const obj5 = { animation: derivedValue };
          _e.__closure = obj5;
          _e.__workletHash = 9103187579788;
          _e.__initData = __initData3;
          const tmpResult11 = isFullscreen(4612);
          const animatedStyle1 = tmpResult11.useAnimatedStyle(_e);
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
          const tmpResult12 = isFullscreen(4612);
          const animatedProps = tmpResult12.useAnimatedProps(ye);
          setIsFullscreen(1618)();
          if (cResult[11] === isFullscreen) {
            class J {
              constructor(nativeEvent) {
                closure_3(nativeDefault.space.PX_24 + nativeEvent.nativeEvent.layout.height);
              }
            }
            if (cResult[14] === tmp6.videoWrapper) {
              class J {
                constructor(nativeEvent) {
                  closure_3(nativeDefault.space.PX_24 + nativeEvent.nativeEvent.layout.height);
                }
              }
            }
            items1 = [, ,];
            ({ videoWrapper: arr2[0], videoWrapperLandscape: arr2[1] } = tmp6);
            items1[2] = isFullscreen && tmp6.videoWrapperFullscreen;
            cResult[14] = tmp6.videoWrapper;
            cResult[15] = tmp6.videoWrapperLandscape;
            cResult[16] = isFullscreen && tmp6.videoWrapperFullscreen;
            cResult[17] = items1;
          }
          class Ce {
            constructor(arg0) {
              let str2 = "PORTRAIT";
              const tmp2 = isFullscreen || "landscape" !== tmp;
              if (!tmp2) {
                str2 = "LANDSCAPE";
              }
              setIsFullscreen("LANDSCAPE" === str2);
            }
          }
          cResult[11] = isFullscreen;
          cResult[12] = setIsFullscreen;
          cResult[13] = Ce;
        }
        let str = "md";
        if (null != diff) {
          class J {
            constructor(nativeEvent) {
              closure_3(nativeDefault.space.PX_24 + nativeEvent.nativeEvent.layout.height);
            }
          }
          if (null != tmp14) {
            let str2;
            class J {
              constructor(nativeEvent) {
                closure_3(nativeDefault.space.PX_24 + nativeEvent.nativeEvent.layout.height);
              }
            }
            if (diff < isFullscreen(14935).QUEST_PROGRESS_DIAMETER_BY_SIZE.lg + tmp14) {
              class J {
                constructor(nativeEvent) {
                  closure_3(nativeDefault.space.PX_24 + nativeEvent.nativeEvent.layout.height);
                }
              }
              str2 = "md";
            }
            str = str2;
          }
        }
        cResult[6] = diff;
        cResult[7] = str;
      }
    : (quest) => {
        let _undefined;
        let _undefined2;
        let c3;
        let c4;
        let captionsEnabled;
        let contentWidth;
        let duration;
        let externallyPaused;
        let handleAdvertiserDetailsPress;
        let handleClose;
        let handleOpenTranscript;
        let handlePrimaryCtaPress;
        let handleShareQuest;
        let handleToggleCaptions;
        let hasCaptionAsset;
        let hasTranscriptAsset;
        let intl;
        let intl2;
        let isFullscreen;
        let isShareable;
        let items10;
        let items11;
        let items13;
        let items14;
        let items15;
        let items16;
        let items17;
        let items18;
        let items4;
        let items5;
        let items6;
        let items7;
        let items8;
        let items9;
        let num;
        let obj11;
        let obj16;
        let obj27;
        let obj29;
        let obj30;
        let obj5;
        let onEnd;
        let onNavigateToPostWatchVideo;
        let sourceQuestContent;
        let tmp8;
        let tmpResult15;
        let tmpResult16;
        quest = quest.quest;
        ({ handleAdvertiserDetailsPress, isFullscreen } = quest);
        const setIsFullscreen = quest.setIsFullscreen;
        ({ sourceQuestContent, isShareable } = quest);
        c3 = undefined;
        c4 = undefined;
        let sharedValue;
        let derivedValue;
        const tmp = quest;
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
        let obj = quest(setIsFullscreen[13]);
        const tmp3 = closure_23(obj.isAndroid());
        let obj2 = derivedValue;
        items = [quest];
        const memo = derivedValue.useMemo(() => {
          const obj = AssetUtils;
          return obj.getQuestAsset(quest, AssetUtils.QuestAssetType.HERO);
        }, items);
        const userStatus = quest.userStatus;
        let completedAt;
        if (userStatus != null) {
          completedAt = userStatus.completedAt;
        }
        let tmp25Result3 = null != completedAt;
        [tmp8, c3] = sharedValue(obj2.useState(null), 2);
        sharedValue(obj2.useState(null), 2);
        const callback = obj2.useCallback((nativeEvent) => {
          _undefined(nativeEvent.nativeEvent.layout.height);
        }, []);
        [num, c4] = sharedValue(obj2.useState(null), 2);
        let diff = null;
        sharedValue(obj2.useState(null), 2);
        const callback1 = obj2.useCallback((nativeEvent) => {
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
        const md = tmp(tmp2[9]).QUEST_PROGRESS_DIAMETER_BY_SIZE.md;
        const sum = md + num;
        const sum1 = sum + 2 * isFullscreen(tmp2[8]).space.PX_16;
        const tmpResult = tmp(tmp2[15]);
        sharedValue = tmpResult.useSharedValue(0);
        items1 = [sharedValue];
        const effect = obj2.useEffect(() => {
          const result = sharedValue.set(1);
        }, items1);
        function ae() {
          const withDelay = ReanimatedRexport.withDelay;
          ReanimatedRexport;
          const obj = timing;
          const obj2 = { duration };
          return withDelay(c15, obj.withTiming(sharedValue.get(), obj2));
        }
        const tmpResult9 = tmp(tmp2[15]);
        ae.__closure = {
          withDelay: tmp(tmp2[15]).withDelay,
          LOGO_REWARD_TRANSITION_DELAY_MS,
          withTiming: tmp(tmp2[16]).withTiming,
          isComponentMounted: sharedValue,
          LOGO_REWARD_TRANSITION_DURATION_MS,
        };
        ae.__workletHash = 11647045462673;
        ae.__initData = __initData5;
        ({
          withDelay: tmp(tmp2[15]).withDelay,
          LOGO_REWARD_TRANSITION_DELAY_MS,
          withTiming: tmp(tmp2[16]).withTiming,
          isComponentMounted: sharedValue,
          LOGO_REWARD_TRANSITION_DURATION_MS,
        });
        derivedValue = tmpResult9.useDerivedValue(ae);
        function se() {
          const obj = { opacity: derivedValue.get() };
          return obj;
        }
        se.__closure = { animation: derivedValue };
        se.__workletHash = 785279125621;
        se.__initData = __initData6;
        const tmpResult10 = tmp(tmp2[15]);
        const animatedStyle = tmpResult10.useAnimatedStyle(se);
        function oe() {
          const obj = { opacity: 1 - derivedValue.get() };
          return obj;
        }
        oe.__closure = { animation: derivedValue };
        oe.__workletHash = 8189208088968;
        oe.__initData = __initData7;
        const tmpResult11 = tmp(tmp2[15]);
        const animatedStyle1 = tmpResult11.useAnimatedStyle(oe);
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
        const tmpResult12 = tmp(tmp2[15]);
        const animatedProps = tmpResult12.useAnimatedProps(ie);
        const tmp23 = isFullscreen(tmp2[17])();
        const items2 = [isFullscreen, setIsFullscreen];
        const callback2 = obj2.useCallback((arg0) => {
          let str2 = "PORTRAIT";
          const tmp2 = isFullscreen || "landscape" !== tmp;
          if (!tmp2) {
            str2 = "LANDSCAPE";
          }
          setIsFullscreen("LANDSCAPE" === str2);
        }, items2);
        const items3 = [, ,];
        ({ videoWrapper: arr4[0], videoWrapperLandscape: arr4[1] } = tmp3);
        let videoWrapperFullscreen = isFullscreen;
        const obj4 = { bottom: true, style: tmp3.wrapper, children: closure_14(closure_7, obj5) };
        const SafeAreaPaddingView = tmp(tmp2[36]).SafeAreaPaddingView;
        if (isFullscreen) {
          videoWrapperFullscreen = tmp3.videoWrapperFullscreen;
        }
        obj5 = { style: items3, children: items7 };
        items3[2] = videoWrapperFullscreen;
        const obj6 = { theme: ThemeTypes.DARK, children: items5 };
        const ThemeContextProvider = tmp(tmp2[20]).ThemeContextProvider;
        const obj7 = {
          captionsEnabled,
          orientation: "landscape",
          style: items4,
          contentInsets: contentInsets2,
          handleOpenTranscript,
          handleToggleCaptions,
          isFullscreen,
          externallyPaused,
          onEnd,
          onToggleFullscreen: callback2,
          sourceQuestContent,
          hasCaptionAsset,
          hasTranscriptAsset,
        };
        items4 = [tmp3.videoLandscape, ,];
        let videoLandscape9by16 = !isFullscreen;
        const VideoQuestPlayer = tmp(tmp2[18]).VideoQuestPlayer;
        if (!isFullscreen) {
          videoLandscape9by16 = tmp3.videoLandscape9by16;
        }
        items4[1] = videoLandscape9by16;
        items4[2] = isFullscreen && tmp3.videoLandscapeFullscreen;
        items5 = [closure_13(VideoQuestPlayer, obj7)];
        const obj8 = { onClose: handleClose, style: items6 };
        items6 = [tmp3.closeButtonLandscape];
        let tmp29 = isFullscreen;
        const tmp15Result = isFullscreen(tmp2[19]);
        if (isFullscreen) {
          tmp29 = null != tmp23;
        }
        if (tmp29) {
          tmp29 = { left: tmp23.left };
          const obj9 = { left: tmp23.left };
        }
        items6[1] = tmp29;
        items5[1] = closure_13(tmp15Result, obj8);
        items7 = [closure_14(ThemeContextProvider, obj6)];
        let tmp25Result4 = !isFullscreen;
        if (tmp25Result4) {
          ({ landscapeContentScroll: obj15.style, landscapeContentScrollContent: obj15.contentContainerStyle } = tmp3);
          const obj10 = {
            style: null,
            contentContainerStyle: null,
            showsVerticalScrollIndicator: false,
            alwaysBounceVertical: false,
            children: closure_14(closure_7, obj11),
          };
          obj11 = { style: items8, children: items14 };
          items8 = [,];
          ({ videoContentWrapper: arr9[0], videoContentWrapperLandscape: arr9[1] } = tmp3);
          const obj12 = { style: items9, onLayout: callback, children: items11 };
          items9 = [tmp3.rewardContainer];
          const obj13 = { minHeight: sum1 };
          items9[1] = obj13;
          const obj14 = { style: items10, animatedProps, children: closure_13(isFullscreen(tmp2[22]), obj16) };
          items10 = [tmp3.rewardContentCentered, animatedStyle];
          obj16 = { size: str2, onTextBlockLayout: callback1 };
          const tmp15Result4 = isFullscreen(tmp2[21]);
          items11 = [closure_13(tmp15Result4, obj14)];
          const items12 = [tmp3.rewardContentCentered, ,];
          const tmp15Result5 = isFullscreen(tmp2[21]);
          const tmpResult13 = tmp(tmp2[13]);
          const obj17 = { style: items12, pointerEvents: "none", children: items13 };
          items12[1] = tmpResult13.isAndroid() && tmp3.modalBackground;
          items12[2] = animatedStyle1;
          tmpResult13.isAndroid() && tmp3.modalBackground;
          const tmpResult14 = tmp(tmp2[13]);
          let isAndroidResult = tmpResult14.isAndroid();
          if (isAndroidResult) {
            const obj18 = { align: "top", style: tmp3.cloudsBackground };
            isAndroidResult = closure_13(isFullscreen(tmp2[23]), obj18);
          }
          items13 = [isAndroidResult];
          const obj19 = {
            assetUrl: tmpResult15.getQuestAsset(quest, tmp(tmp2[14]).QuestAssetType.LOGO_TYPE, "dark").url,
            maxHeight: 90,
            maxWidth: contentWidth - 120,
          };
          const tmp15Result6 = isFullscreen(tmp2[24]);
          tmpResult15 = tmp(tmp2[14]);
          items13[1] = closure_13(tmp15Result6, obj19);
          items11[1] = closure_14(tmp15Result5, obj17);
          items14 = [closure_14(closure_7, obj12), ,];
          const obj20 = { align: "top", style: tmp3.cloudsBackground };
          items14[1] = closure_13(isFullscreen(tmp2[23]), obj20);
          const obj21 = {
            direction: "vertical",
            spacing: isFullscreen(tmp2[8]).space.PX_24,
            style: tmp3.questDetailsLandscape,
            children: items17,
          };
          const Stack = tmp(tmp2[25]).Stack;
          const obj22 = {
            direction: "horizontal",
            justify: "space-between",
            spacing: isFullscreen(tmp2[8]).space.PX_8,
            children: items16,
          };
          const Stack2 = tmp(tmp2[25]).Stack;
          const obj23 = { style: tmp3.questDetailsPrimary, onPress: handleAdvertiserDetailsPress, children: items15 };
          const PressableOpacity = tmp(tmp2[26]).PressableOpacity;
          const obj24 = {
            variant: "heading-lg/semibold",
            color: "mobile-text-heading-primary",
            accessibilityRole: "header",
            children: quest.config.messages.gameTitle,
          };
          items15 = [closure_13(tmp(tmp2[27]).Text, obj24)];
          const obj25 = {
            variant: "heading-sm/semibold",
            color: "text-subtle",
            children: quest.config.messages.gamePublisher,
          };
          items15[1] = closure_13(tmp(tmp2[27]).Text, obj25);
          items16 = [closure_14(PressableOpacity, obj23)];
          const obj26 = { style: tmp3.questDetailsSecondary, children: closure_13(isFullscreen(tmp2[28]), obj27) };
          obj27 = { quest, location: constants.VIDEO_MODAL_MOBILE, sourceQuestContent };
          items16[1] = closure_13(closure_7, obj26);
          items17 = [closure_14(Stack2, obj22), ,];
          let tmp25Result = null != memo;
          if (tmp25Result) {
            const obj28 = {
              onPress: handleAdvertiserDetailsPress,
              children: closure_13(isFullscreen(tmp2[29]), obj29),
            };
            const PressableOpacity2 = tmp(tmp2[26]).PressableOpacity;
            obj29 = { source: obj30, style: tmp3.playerThumbnail };
            obj30 = { uri: memo.url };
            tmp25Result = closure_13(PressableOpacity2, obj28);
          }
          items17[1] = tmp25Result;
          const obj31 = { direction: "horizontal", spacing: isFullscreen(tmp2[8]).space.PX_16, children: items18 };
          const Stack3 = tmp(tmp2[25]).Stack;
          const obj32 = {
            grow: true,
            variant: "expressive",
            onPress: handlePrimaryCtaPress,
            text: tmpResult16.getExternalCtaLabel(quest),
          };
          const Button = tmp(tmp2[30]).Button;
          tmpResult16 = tmp(tmp2[31]);
          items18 = [closure_13(Button, obj32), ,];
          if (isShareable) {
            const obj33 = {
              accessibilityLabel: intl.string(tmp(tmp2[33]).t.Ej3B3Y),
              icon: isFullscreen(tmp2[34]),
              onPress: handleShareQuest,
              variant: "secondary",
            };
            const IconButton = tmp(tmp2[32]).IconButton;
            intl = tmp(tmp2[33]).intl;
            isShareable = closure_13(IconButton, obj33);
          }
          items18[1] = isShareable;
          if (tmp25Result3) {
            const obj34 = {
              accessibilityLabel: intl2.string(tmp(tmp2[33]).t.cfY4PE),
              icon: isFullscreen(tmp2[35]),
              onPress: onNavigateToPostWatchVideo,
              variant: "secondary",
            };
            const IconButton2 = tmp(tmp2[32]).IconButton;
            intl2 = tmp(tmp2[33]).intl;
            tmp25Result3 = closure_13(IconButton2, obj34);
          }
          items18[2] = tmp25Result3;
          items17[2] = closure_14(Stack3, obj31);
          items14[2] = closure_14(Stack, obj21);
          tmp25Result4 = closure_13(closure_9, obj10);
        }
        items7[1] = tmp25Result4;
        return closure_13(SafeAreaPaddingView, obj4);
      },
);
const memo2 = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_33 = memo2(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (arg0) => {
        let captionsEnabled;
        let contentWidth;
        let externallyPaused;
        let handleAdvertiserDetailsPress;
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
        let obj5;
        let onEnd;
        let onNavigateToPostWatchVideo;
        let quest;
        let sourceQuestContent;
        let tmp16;
        let obj = react2;
        const cResult = obj.c(107);
        ({
          quest,
          captionsEnabled,
          handleClose,
          handleAdvertiserDetailsPress,
          handlePrimaryCtaPress,
          handleRewardDetailsPress,
          handleShareQuest,
          handleOpenTranscript,
          handleToggleCaptions,
          isFullscreen,
          onNavigateToPostWatchVideo,
          onEnd,
          externallyPaused,
          sourceQuestContent,
          hasCaptionAsset,
          hasTranscriptAsset,
          isShareable,
          contentWidth,
        } = arg0);
        let obj2 = hooks_QuestHooks;
        const questTaskDetails = obj2.useQuestTaskDetails(quest);
        const userStatus = quest.userStatus;
        let completedAt;
        if (userStatus != null) {
          completedAt = userStatus.completedAt;
        }
        if ((cResult[0] === null) != completedAt) {
          const height = useStateFromSharedValueDefault(
            react.useContext(QuestDockGestureContext.QuestDockGestureContext).windowDimensions,
          ).height;
          const _Math = Math;
          const _Symbol = Symbol;
          const rounded = Math.floor(contentWidth / closure_10);
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
          [tmp16, require] = react.useState(64);
          const _Symbol2 = Symbol;
          _slicedToArray(react.useState(64), 2);
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
          const tmp21 = closure_23(height - bound - tmp16 < 200);
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
              const obj3 = { theme: ThemeTypes.DARK, children: closure_13(VideoQuestPlayer2.VideoQuestPlayer, obj5) };
              const ThemeContextProvider = native.ThemeContextProvider;
              obj5 = {
                captionsEnabled,
                onLoad: H,
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
              cResult[13] = captionsEnabled;
              cResult[14] = externallyPaused;
              cResult[15] = handleOpenTranscript;
              cResult[16] = handleToggleCaptions;
              cResult[17] = hasCaptionAsset;
              cResult[18] = hasTranscriptAsset;
              cResult[19] = isFullscreen;
              cResult[20] = onEnd;
              cResult[21] = sourceQuestContent;
              cResult[22] = closure_13(ThemeContextProvider, obj3);
              const tmp30 = closure_13(ThemeContextProvider, obj3);
            }
            items = [tmp21.videoWrapper, tmp24];
            cResult[10] = tmp21.videoWrapper;
            cResult[11] = tmp24;
            cResult[12] = items;
          }
          items1 = [,];
          ({ wrapper: arr[0], wrapperPortrait: arr[1] } = tmp21);
          cResult[5] = tmp21.wrapper;
          cResult[6] = tmp21.wrapperPortrait;
          cResult[7] = items1;
        }
        const tmpResult = VideoQuestUtils;
        const videoQuestProgressRemainingAccessibilityLabel =
          tmpResult.getVideoQuestProgressRemainingAccessibilityLabel(questTaskDetails, tmp6);
        cResult[0] = null != completedAt;
        cResult[1] = questTaskDetails;
        cResult[2] = videoQuestProgressRemainingAccessibilityLabel;
      }
    : (arg0) => {
        let Button2;
        let ClosedCaptionsOutlineIcon;
        let ShareIcon;
        let captionsEnabled;
        let closure_5;
        let contentWidth;
        let externallyPaused;
        let first;
        let handleAdvertiserDetailsPress;
        let handleClose;
        let handleOpenTranscript;
        let handlePrimaryCtaPress;
        let handleRewardDetailsPress;
        let handleShareQuest;
        let handleToggleCaptions;
        let hasCaptionAsset;
        let hasTranscriptAsset;
        let intl;
        let intl2;
        let intl3;
        let intl4;
        let isFullscreen;
        let isShareable;
        let items10;
        let items11;
        let items12;
        let items2;
        let items4;
        let items5;
        let items6;
        let items7;
        let items8;
        let items9;
        let obj17;
        let obj21;
        let obj23;
        let obj25;
        let obj27;
        let obj3;
        let obj6;
        let onEnd;
        let onNavigateToPostWatchVideo;
        let quest;
        let sourceQuestContent;
        let tmpResult2;
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
        closure_3 = undefined;
        first = undefined;
        _slicedToArray = undefined;
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
        let obj = contentWidth(memo[37]);
        const questTaskDetails = obj.useQuestTaskDetails(quest);
        const userStatus = quest.userStatus;
        let completedAt;
        if (userStatus != null) {
          completedAt = userStatus.completedAt;
        }
        const tmpResult = contentWidth(memo[38]);
        const videoQuestProgressRemainingAccessibilityLabel =
          tmpResult.getVideoQuestProgressRemainingAccessibilityLabel(questTaskDetails, tmp5);
        height = height(tmp2[40])(
          react.useContext(contentWidth(tmp2[39]).QuestDockGestureContext).windowDimensions,
        ).height;
        items = [contentWidth];
        memo = react.useMemo(() => Math.floor(contentWidth / authStore), items);
        const callback = react.useCallback(() => {}, []);
        const tmp10 = height(memo[17])();
        closure_3 = tmp10;
        [first, _slicedToArray] = react.useState(64);
        items1 = [memo, first, height, tmp10];
        const callback1 = react.useCallback((nativeEvent) => {
          closure_5(nativeEvent.nativeEvent.layout.height);
        }, []);
        const memo1 = react.useMemo(() => Math.min(height - closure_3.top - closure_3.bottom - first, memo), items1);
        const tmp15 = closure_23(height - memo1 - first < 200);
        let obj2 = { bottom: true, style: items2, children: items11 };
        items2 = [,];
        ({ wrapper: arr3[0], wrapperPortrait: arr3[1] } = tmp15);
        const items3 = [tmp15.videoWrapper];
        const SafeAreaPaddingView = contentWidth(tmp2[36]).SafeAreaPaddingView;
        if (null == memo1) {
          obj3 = { flexGrow: 1 };
        } else {
          obj3 = { height: memo1 };
        }
        const obj4 = { style: items3, children: items4 };
        items3[1] = obj3;
        const obj5 = { theme: ThemeTypes.DARK, children: closure_13(contentWidth(memo[18]).VideoQuestPlayer, obj6) };
        const ThemeContextProvider = contentWidth(tmp2[20]).ThemeContextProvider;
        obj6 = {
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
        items4 = [closure_13(ThemeContextProvider, obj5), , ,];
        const obj7 = { start, end, style: tmp15.gradientTop, colors: items };
        items4[1] = closure_13(height(memo[41]), obj7);
        const obj8 = { start, end, style: tmp15.gradientBottom, colors: items1 };
        items4[2] = closure_13(height(memo[41]), obj8);
        const obj9 = { style: items5, children: items6 };
        items5 = [,];
        ({ videoContentWrapper: arr6[0], videoContentWrapperPortrait: arr6[1] } = tmp15);
        const obj10 = {
          closeButtonIconColor: height(memo[8]).colors.WHITE,
          onClose: handleClose,
          showCurrentVideoTime: true,
          withTextShadow: true,
        };
        const tmp7Result = height(memo[42]);
        items6 = [closure_13(tmp7Result, obj10)];
        const obj11 = { direction: "vertical", spacing: height(memo[8]).space.PX_24, children: items10 };
        const Stack = contentWidth(tmp2[25]).Stack;
        const obj12 = {
          direction: "horizontal",
          justify: "space-between",
          spacing: height(memo[8]).space.PX_8,
          children: items9,
        };
        const Stack2 = contentWidth(tmp2[25]).Stack;
        const obj13 = { style: tmp15.questDetailsPrimary, onPress: handleAdvertiserDetailsPress, children: items7 };
        const PressableOpacity = contentWidth(tmp2[26]).PressableOpacity;
        items7 = [,];
        const obj14 = {
          variant: "heading-lg/semibold",
          color: "text-overlay-light",
          style: tmp15.textShadow,
          accessibilityRole: "header",
          children: quest.config.messages.gameTitle,
        };
        items7[0] = closure_13(contentWidth(memo[27]).Text, obj14);
        const obj15 = {
          variant: "heading-sm/semibold",
          color: "text-overlay-light",
          style: items8,
          children: quest.config.messages.gamePublisher,
        };
        items8 = [,];
        ({ textShadow: arr9[0], questDetailsSubheader: arr9[1] } = tmp15);
        items7[1] = closure_13(contentWidth(memo[27]).Text, obj15);
        items9 = [closure_14(PressableOpacity, obj13)];
        const obj16 = { style: tmp15.questDetailsSecondary, children: closure_13(height(memo[9]), obj17) };
        obj17 = {
          quest,
          size: "x-sm",
          progress: questTaskDetails.percentComplete,
          hasConfetti: true,
          onPress: handleRewardDetailsPress,
          accessibilityLabel: videoQuestProgressRemainingAccessibilityLabel,
        };
        items9[1] = closure_13(closure_7, obj16);
        items10 = [closure_14(Stack2, obj12)];
        const obj18 = {
          grow: true,
          variant: "expressive",
          onPress: handlePrimaryCtaPress,
          text: tmpResult2.getExternalCtaLabel(quest),
        };
        const Button = contentWidth(tmp2[30]).Button;
        tmpResult2 = contentWidth(memo[31]);
        items10[1] = closure_13(Button, obj18);
        items6[1] = closure_14(Stack, obj11);
        items4[3] = closure_14(closure_7, obj9);
        items11 = [closure_14(closure_7, obj4)];
        const obj19 = {
          direction: "horizontal",
          justify: "flex-end",
          align: "center",
          style: tmp15.footer,
          spacing: height(memo[8]).space.PX_4,
          onLayout: callback1,
          children: items12,
        };
        const Stack3 = contentWidth(tmp2[25]).Stack;
        let tmp18Result = tmp5;
        if (tmp18Result) {
          const obj20 = { style: tmp15.viewRewardBtn, children: closure_13(Button2, obj21) };
          obj21 = {
            icon: closure_13(contentWidth(memo[43]).ArrowSmallRightIcon, { size: "sm" }),
            iconPosition: "end",
            onPress: onNavigateToPostWatchVideo,
            variant: "secondary",
            size: "sm",
            text: intl.string(contentWidth(memo[33]).t["jyYgZ+"]),
          };
          Button2 = contentWidth(tmp2[30]).Button;
          intl = contentWidth(tmp2[33]).intl;
          tmp18Result = closure_13(closure_7, obj20);
        }
        items12 = [tmp18Result, , , ,];
        if (hasTranscriptAsset) {
          const obj22 = {
            accessibilityLabel: intl2.string(contentWidth(memo[33]).t.KCzjTi),
            onPress: handleOpenTranscript,
            children: closure_13(contentWidth(memo[44]).TranscriptOutlineIcon, obj23),
          };
          intl2 = contentWidth(tmp2[33]).intl;
          obj23 = { color: tmp15.iconDisabled.color };
          hasTranscriptAsset = closure_13(closure_35, obj22);
        }
        items12[1] = hasTranscriptAsset;
        if (hasCaptionAsset) {
          let color;
          const obj24 = {
            accessibilityLabel: intl3.string(contentWidth(memo[33]).t.bDSZO1),
            onPress: handleToggleCaptions,
            children: closure_13(ClosedCaptionsOutlineIcon, obj25),
          };
          intl3 = contentWidth(tmp2[33]).intl;
          ClosedCaptionsOutlineIcon = contentWidth(tmp2[45]).ClosedCaptionsOutlineIcon;
          if (captionsEnabled) {
            color = tmp15.icon.color;
          } else {
            color = tmp15.iconDisabled.color;
          }
          obj25 = { color };
          hasCaptionAsset = closure_13(closure_35, obj24);
        }
        items12[2] = hasCaptionAsset;
        if (isShareable) {
          const obj26 = {
            accessibilityLabel: intl4.string(contentWidth(memo[33]).t.Ej3B3Y),
            onPress: handleShareQuest,
            children: closure_13(ShareIcon, obj27),
          };
          intl4 = contentWidth(tmp2[33]).intl;
          obj27 = { color: height(memo[8]).colors.TEXT_DEFAULT };
          ShareIcon = contentWidth(tmp2[46]).ShareIcon;
          isShareable = closure_13(closure_35, obj26);
        }
        items12[3] = isShareable;
        const obj28 = {
          quest,
          location: constants.VIDEO_MODAL_MOBILE,
          sourceQuestContent,
          children(ref) {
            let MoreHorizontalIcon;
            let intl;
            let obj2;
            const obj = {
              accessibilityLabel: intl.string(contentWidth(memo[33]).t.PdRCRg),
              ref: ref.ref,
              children: closure_1_13(MoreHorizontalIcon, obj2),
            };
            const merged = Object.assign(ref, Object.assign({ ref: 0 }));
            intl = contentWidth(memo[33]).intl;
            const merged1 = Object.assign(merged);
            obj2 = { color: height(memo[8]).colors.TEXT_DEFAULT };
            MoreHorizontalIcon = contentWidth(memo[47]).MoreHorizontalIcon;
            return closure_1_13(closure_1_35, obj);
          },
        };
        items12[4] = closure_13(height(memo[28]), obj28);
        items11[1] = closure_14(Stack3, obj19);
        return closure_14(SafeAreaPaddingView, obj2);
      },
);
createStyles = createStyles_mod;
let obj = { footerButton: obj2 };
obj2 = { padding: nativeDefault.space.PX_8 };
let closure_34 = createStyles.createStyles(obj);
ReactCompilerGating = ReactCompilerGating_mod;
let closure_35 = react.forwardRef(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (arg0, ref) => {
        const obj = react2;
        const cResult = obj.c(4);
        const tmp4 = closure_34();
        if (cResult[0] === arg0) {
          if (cResult[1] === ref) {
            let tmp5;
            if (cResult[2] === tmp4.footerButton) {
              tmp5 = cResult[3];
            }
            return tmp5;
          }
        }
        const obj2 = { accessibilityRole: "button", style: tmp4.footerButton, ref };
        const PressableOpacity = Pressables.PressableOpacity;
        const merged = Object.assign(arg0);
        const tmp7 = map1(PressableOpacity, obj2);
        cResult[0] = arg0;
        cResult[1] = ref;
        cResult[2] = tmp4.footerButton;
        cResult[3] = tmp7;
        tmp5 = tmp7;
      }
    : (arg0, ref) => {
        const obj = { accessibilityRole: "button", style: closure_34().footerButton, ref };
        const PressableOpacity = Pressables.PressableOpacity;
        const merged = Object.assign(arg0);
        return map1(PressableOpacity, obj);
      },
);
const memoResult = react.memo(function VideoQuestModalContentInProgress(arg0) {
  let contentWidth;
  let isFullscreen;
  let onClose;
  let onEnd;
  let onNavigateToPostWatchVideo;
  let setIsFullscreen;
  let sourceQuestContent;
  let tmp11;
  let tmp6;
  let videoQuestClickCtaAndMaybeCloseModal;
  ({ onClose, sourceQuestContent } = arg0);
  ({ contentWidth, isFullscreen, onNavigateToPostWatchVideo, onEnd, setIsFullscreen } = arg0);
  let obj = sourceQuestContent(14930);
  const quest = obj.useVideoQuestModalContext().quest;
  items = [quest];
  items1 = [quest];
  const memo = videoQuestClickCtaAndMaybeCloseModal.useMemo(() => {
    const obj = AssetUtils;
    return obj.getQuestAsset(quest, AssetUtils.QuestAssetType.VIDEO_PLAYER_CAPTION, undefined, true);
  }, items);
  const memo1 = videoQuestClickCtaAndMaybeCloseModal.useMemo(() => {
    const obj = AssetUtils;
    return obj.getQuestAsset(quest, AssetUtils.QuestAssetType.VIDEO_PLAYER_TRANSCRIPT, undefined, true);
  }, items1);
  let tmp5 = _slicedToArray(videoQuestClickCtaAndMaybeCloseModal.useState(false), 2);
  [tmp6, dependencyMap] = tmp5;
  const items2 = [quest];
  const callback = videoQuestClickCtaAndMaybeCloseModal.useCallback(() => dependencyMap((arg0) => !arg0), []);
  const callback1 = videoQuestClickCtaAndMaybeCloseModal.useCallback(() => {
    const openLazy = ActionSheetActionCreatorsDefault.openLazy;
    ActionSheetActionCreatorsDefault;
    const obj = { quest };
    const tmp2 = asyncRequire(14958, dependencyMap.paths);
    openLazy(tmp2, "transcript-" + quest.id, obj);
  }, items2);
  let obj2 = sourceQuestContent(10916);
  const getQuestImpressionId = obj2.useGetQuestImpressionId();
  [tmp11, _objectWithoutProperties] = videoQuestClickCtaAndMaybeCloseModal.useState(false);
  _slicedToArray(videoQuestClickCtaAndMaybeCloseModal.useState(false), 2);
  let obj3 = sourceQuestContent(7206);
  const isShareableQuestResult = obj3.isShareableQuest(quest.config);
  _slicedToArray = isShareableQuestResult;
  const items3 = [isShareableQuestResult, quest.id, getQuestImpressionId, sourceQuestContent];
  const callback2 = videoQuestClickCtaAndMaybeCloseModal.useCallback(() => {
    let tmp2Result6;
    if (_slicedToArray) {
      let tmp5;
      const obj = AdAnalyticsInterfaceExperiment;
      if (
        obj.shouldMigrateToAdAnalyticsInterface(
          AdAnalyticsInterfaceExperiment.AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL,
          "video_quest_modal_in_progress",
        )
      ) {
        const obj2 = {
          type: captureAdUserActionTypes.AdUserActionType.CLICK_INTERNAL,
          adCreativeType: AdCreativeType.AdCreativeType.QUEST,
          adCreativeId: quest.id,
          questContentCTA: AnalyticsTypes.QuestContentCTA.MOBILE_SHARESHEET,
          surfaceId: QuestTypes.QuestContent.VIDEO_MODAL_MOBILE,
          sourceQuestContent,
          impressionId: getQuestImpressionId(),
        };
        const captureAdUserAction = captureAdUserAction2.captureAdUserAction;
        captureAdUserAction2;
        captureAdUserAction(obj2);
        tmp5 = quest;
      } else {
        tmp5 = quest;
        const obj3 = {
          questId: quest.id,
          questContent: QuestTypes.QuestContent.VIDEO_MODAL_MOBILE,
          questContentCTA: AnalyticsTypes.QuestContentCTA.MOBILE_SHARESHEET,
          impressionId: getQuestImpressionId(),
          sourceQuestContent,
        };
        const trackQuestContentClicked = AnalyticsActions.trackQuestContentClicked;
        AnalyticsActions;
        const result = trackQuestContentClicked(obj3);
      }
      _objectWithoutProperties(true);
      const obj4 = {
        message: tmp2Result6.getQuestUrl(tmp5.id),
        iOSOnlyShareCallback() {
          return closure_1_4(false);
        },
      };
      const showShareActionSheet = showShareActionSheet2.showShareActionSheet;
      showShareActionSheet2;
      const _HermesInternal = HermesInternal;
      tmp2Result6 = QuestCopyUtils;
      showShareActionSheet(obj4, "Video Quest Modal - " + tmp5.id);
    }
  }, items3);
  let obj4 = sourceQuestContent(14959);
  videoQuestClickCtaAndMaybeCloseModal = obj4.useVideoQuestClickCtaAndMaybeCloseModal({
    quest,
    onClose,
    sourceQuestContent,
  });
  const items4 = [videoQuestClickCtaAndMaybeCloseModal];
  const items5 = [videoQuestClickCtaAndMaybeCloseModal];
  const callback3 = videoQuestClickCtaAndMaybeCloseModal.useCallback(
    () => videoQuestClickCtaAndMaybeCloseModal(QuestTypes.QuestContent.VIDEO_MODAL_MOBILE_FOOTER),
    items4,
  );
  const items6 = [quest.id];
  const callback4 = videoQuestClickCtaAndMaybeCloseModal.useCallback(
    () => videoQuestClickCtaAndMaybeCloseModal(QuestTypes.QuestContent.VIDEO_MODAL_MOBILE),
    items5,
  );
  const callback5 = videoQuestClickCtaAndMaybeCloseModal.useCallback(() => {
    const obj = QuestUtils;
    const obj2 = { questId: quest.id };
    const result = obj.openRewardDetailsBottomSheet(obj2);
  }, items6);
  const obj5 = sourceQuestContent(14960);
  const videoExternallyPaused = obj5.useVideoExternallyPaused(quest.id, tmp11);
  const tmp19 =
    quest.config.taskConfigV2.tasks[sourceQuestContent(undefined, 5631).FirstPartyQuestTaskTypes.WATCH_VIDEO_ON_MOBILE];
  let tmp20 = null == tmp19;
  if (!tmp20) {
    const tmpResult = sourceQuestContent(10940);
    tmp20 = "portrait" === tmpResult.getVideoOrientation(tmp19);
  }
  const obj6 = {
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
  };
  return closure_13(tmp20 ? closure_33 : closure_32, obj6);
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/quests/native/VideoQuestModal/VideoQuestModalContentInProgress.tsx");

export default memoResult;
