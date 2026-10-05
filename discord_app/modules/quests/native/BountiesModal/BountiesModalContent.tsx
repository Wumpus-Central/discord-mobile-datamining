// discord_app/modules/quests/native/BountiesModal/BountiesModalContent.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Constants2 from "../../../../../discord_common/js/shared/Constants.tsx";
import ComponentDispatchUtils from "../../../../utils/ComponentDispatchUtils.tsx";
import PlatformUtils from "../../../../utils/PlatformUtils.tsx";
import useWindowDimensionsDefault from "../../../screen/useWindowDimensions.native.tsx";
import useSafeAreaInsetsDefault from "../../../safe_area/useSafeAreaInsets.native.tsx";
import Patterns from "../../../../../_runtime/04857_Patterns.js";
import timing from "../../../../design/animation/reanimated/timing/timing.tsx";
import timingPresets from "../../../../design/animation/reanimated/timing/timingPresets.tsx";
import QuestContent from "../../../../../discord_common/js/shared/shared-constants/QuestContent.tsx";
import AdCreativeType from "../../../../../discord_common/js/shared/shared-constants/AdCreativeType.tsx";
import QuestDataUtils from "../../utils/QuestDataUtils.tsx";
import AnalyticsActions from "../../lib/analytics/AnalyticsActions.tsx";
import AnalyticsTypes from "../../lib/analytics/AnalyticsTypes.tsx";
import AppStoreOverlayTelemetryManager from "../AppStoreOverlayTelemetryManager.tsx";
import VideoQuestUtils from "../../utils/VideoQuestUtils.tsx";
import QuestContentImpressionTracker from "../QuestContentImpressionTracker.native.tsx";
import AnimationUtils from "../../../virtual_currency/shared/AnimationUtils.tsx";
import BountiesModalActionCreatorsDefault from "BountiesModalActionCreators.tsx";
import _asyncToGenerator from "../../../../../_runtime/metro/00005__asyncToGenerator.js";
import _slicedToArray_mod from "../../../../../_runtime/metro/00032__slicedToArray.js";
import react_mod from "../../../../../_runtime/00019_react.js";
import BountyStore from "../../BountyStore.tsx";
import QuestConstants from "../../QuestConstants.tsx";
import BountiesModalConstants from "BountiesModalConstants.tsx";
import Constants from "../../../../Constants.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import size_mod from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let bounty, bountyId, c4, c5, dependencyMap, dispatchResult, importDefault, set, tmp14, tmp16, trackOverlayEventResult;

let c10;
let c9;
let closure_12;
let closure_15;
let closure_16;
let closure_17;
let map1;
let metroImportAll;
let unpackModuleId;
function doRewardEarnedHapticFeedback() {
  let sum;
  let num = 0.25;
  const obj = PlatformUtils;
  if (obj.isAndroid()) {
    num = 0.15;
  }
  PlatformUtils;
  const items = [];
  let num3 = 0;
  let num4 = 0;
  const arr = Array.from({ length: 6 }, (arg0, arg1) => 6 - arg1);
  do {
    let _Math = Math;
    let result = arr[num3] / tmp4;
    let rounded = Math.round(result * (AnimationUtils.EXPECTED_ORB_LOTTIE_ANIMATION_DURATION_MS - 100));
    let obj2 = {
      time: num4,
      type: "continuous",
      duration: rounded,
      intensity: num + tmp5 * (num3 / 5),
      sharpness: 0.5,
    };
    let arr4 = items.push(obj2);
    sum = num4 + rounded;
    num3 = num3 + 1;
    num4 = sum;
  } while (num3 < 6);
  const obj3 = { time: sum + 100, type: "transient", intensity: 1, sharpness: 0.95 };
  items.push(obj3);
  const tmp7Result = Patterns;
  tmp7Result.triggerPattern(items);
}
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
let View = react_native.View;
({ BOUNTY_ORB_AMOUNT: metroImportAll, QuestsExperimentLocations: c9 } = QuestConstants);
({ getBountyVideoEndAppStoreSheetHeight: c10, getBountyVideoEndPeekTargetScale: unpackModuleId } =
  BountiesModalConstants);
({ AnalyticEvents: closure_12, ComponentActions: map1 } = Constants);
const ThemeTypes = Constants2.ThemeTypes;
({ jsx: closure_15, Fragment: closure_16, jsxs: closure_17 } = Fragment);
let c18 = 0.5625;
const initialProgress = { timestampSec: 0, maxTimestampSec: 0, duration: 0 };
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_20 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let height;
      let width;
      const obj = react2;
      const cResult = obj.c(6);
      ({ width, height } = useWindowDimensionsDefault());
      useWindowDimensionsDefault();
      const rect = useSafeAreaInsetsDefault();
      const diff = width - rect.left - rect.right;
      const diff1 = height - rect.top - rect.bottom;
      let result = diff / c18;
      let flag = true;
      let result1 = diff;
      if (result > diff1) {
        result1 = diff1 * c18;
        flag = false;
        result = diff1;
      }
      const rounded = Math.floor(rect.top + (diff1 - result) / 2);
      const rounded1 = Math.floor(rect.left + (diff - result1) / 2);
      const rounded2 = Math.floor(result1);
      const rounded3 = Math.floor(result);
      if (cResult[0] === flag) {
        if (cResult[1] === rounded1) {
          if (cResult[2] === rounded2) {
            if (cResult[3] === rounded3) {
              let tmp11;
              if (cResult[4] === rounded) {
                tmp11 = cResult[5];
              }
              return tmp11;
            }
          }
        }
      }
      size = { top: rounded, left: rounded1, width: rounded2, height: rounded3, isFullWidth: flag };
      cResult[0] = flag;
      cResult[1] = rounded1;
      cResult[2] = rounded2;
      cResult[3] = rounded3;
      cResult[4] = rounded;
      cResult[5] = size;
      tmp11 = size;
    }
  : () => {
      let closure_2;
      let height;
      size = height(1484)();
      const width = size.width;
      height = size.height;
      const tmp = height(1618)();
      dependencyMap = tmp;
      const items = [width, height, , , ,];
      ({ top: arr[2], bottom: arr[3], left: arr[4], right: arr[5] } = tmp);
      return react.useMemo(() => {
        const rect = closure_2;
        const diff = width - closure_2.left - closure_2.right;
        const diff1 = height - closure_2.top - closure_2.bottom;
        let result = diff / c18;
        let flag = true;
        let result1 = diff;
        if (result > diff1) {
          result1 = diff1 * c18;
          flag = false;
          result = diff1;
        }
        size = {
          top: Math.floor(rect.top + (diff1 - result) / 2),
          left: Math.floor(rect.left + (diff - result1) / 2),
          width: Math.floor(result1),
          height: Math.floor(result),
          isFullWidth: flag,
        };
        return size;
      }, items);
    };
let closure_21 = createStyles.createStyles(() => {
  let rect;
  const obj = {
    videoWrapper: { position: "absolute" },
    closeButton: { position: "absolute" },
    bottomContainer: { position: "absolute", bottom: nativeDefault.space.PX_24, justifyContent: "flex-end" },
    bottomContainerFullWidth: rect,
    bottomContainerNotFullWidth: { paddingLeft: nativeDefault.space.PX_16, paddingRight: nativeDefault.space.PX_16 },
  };
  ({ position: "absolute", bottom: nativeDefault.space.PX_24, justifyContent: "flex-end" });
  rect = { left: nativeDefault.space.PX_16, right: nativeDefault.space.PX_16 };
  ({ paddingLeft: nativeDefault.space.PX_16, paddingRight: nativeDefault.space.PX_16 });
  return obj;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_23 = ReactCompilerGating.isReactCompilerEnabled()
  ? (bounty) => {
      let closure_5;
      let overrideVisibility;
      let tmp25;
      const tmp = bounty;
      let obj = bounty(576);
      const cResult = obj.c(117);
      bounty = bounty.bounty;
      const sourceQuestContent = bounty.sourceQuestContent;
      dependencyMap = bounty.dismissVideoEndAppStoreOverlay;
      const tmp4 = closure_21();
      size = closure_20();
      if (cResult[0] === size.height) {
        if (cResult[1] === size.left) {
          if (cResult[2] === size.top) {
            let tmp5;
            if (cResult[3] === size.width) {
              tmp5 = cResult[4];
            }
            if (cResult[5] === tmp4.videoWrapper) {
              const sum = size.top + sourceQuestContent(587).space.PX_8;
              const sum1 = size.left + size.width;
              const diff = sum1 - sourceQuestContent(587).space.PX_32;
              const diff1 = diff - sourceQuestContent(587).space.PX_8;
              if (cResult[8] === sum) {
                let tmp12;
                if (cResult[9] === diff1) {
                  tmp12 = cResult[10];
                }
                if (cResult[11] === tmp4.closeButton) {
                  if (cResult[14] === tmp4.bottomContainer) {
                    if (cResult[15] === tmp4.bottomContainerFullWidth) {
                      if (cResult[16] === tmp4.bottomContainerNotFullWidth) {
                        if (cResult[17] === size.isFullWidth) {
                          if (cResult[18] === size.left) {
                            let tmp18;
                            let tmp27;
                            let tmp17 = globalThis;
                            const _Symbol = Symbol;
                            if (cResult[21] === Symbol.for("react.memo_cache_sentinel")) {
                              const items = [BountyStore];
                              cResult[21] = items;
                              tmp18 = items;
                            } else {
                              tmp18 = cResult[21];
                            }
                            if (cResult[22] !== bounty.id) {
                              class F {
                                constructor() {
                                  return BountyStore.isBountyCompleted(bounty.id);
                                }
                              }
                              cResult[22] = bounty.id;
                              cResult[23] = F;
                            } else {
                              class F {
                                constructor() {
                                  return BountyStore.isBountyCompleted(bounty.id);
                                }
                              }
                            }
                            const tmpResult = tmp(504);
                            const stateFromStores = tmpResult.useStateFromStores(tmp18, F);
                            const tmpResult2 = tmp(8508);
                            const balance = tmpResult2.useFetchVirtualCurrencyBalance().balance;
                            let obj7 = react;
                            const tmp24 = _slicedToArray(react.useState(null), 2);
                            [tmp25, _slicedToArray] = tmp24;
                            if (tmp25 == null) {
                              class F {
                                constructor() {
                                  return BountyStore.isBountyCompleted(bounty.id);
                                }
                              }
                            }
                            react = obj7.useRef(balance);
                            if (cResult[24] !== balance) {
                              class W {
                                constructor() {
                                  closure_5.current = balance;
                                }
                              }
                              const items1 = [balance];
                              cResult[24] = balance;
                              cResult[25] = W;
                              cResult[26] = items1;
                              tmp27 = items1;
                            } else {
                              class W {
                                constructor() {
                                  closure_5.current = balance;
                                }
                              }
                              tmp27 = cResult[26];
                            }
                            const effect = obj7.useEffect(W, tmp27);
                            if (cResult[27] !== bounty) {
                              class W {
                                constructor() {
                                  closure_5.current = balance;
                                }
                              }
                              const bountyVideoEndMode = obj8.getBountyVideoEndMode(bounty);
                              cResult[27] = bounty;
                              cResult[28] = bountyVideoEndMode;
                            } else {
                              class W {
                                constructor() {
                                  closure_5.current = balance;
                                }
                              }
                            }
                            let result = 1000 * bounty.rewardTimerSeconds;
                            View = result;
                            let ref = obj7.useRef(null);
                            if (cResult[29] === bounty.id) {
                              class W {
                                constructor() {
                                  closure_5.current = balance;
                                }
                              }
                              if (cResult[32] === bounty.id) {
                                class W {
                                  constructor() {
                                    closure_5.current = balance;
                                  }
                                }
                              }
                              let obj2 = {
                                bountyId: bounty.id,
                                sourceQuestContent,
                                rewardDurationMs: result,
                                wasPreloaded: false,
                                verticalScrollingPosition: null,
                                isActive: true,
                              };
                              cResult[32] = bounty.id;
                              cResult[33] = result;
                              cResult[34] = sourceQuestContent;
                              cResult[35] = obj2;
                            }
                            let closure_0 = balance(function* () {
                              let obj4;
                              let ref;
                              let v1;
                              if (ref === 2) {
                                ref = 3;
                                throw new TypeError("Generator functions may not be called on executing generators");
                              } else if (tmp3 === 3) {
                                if (arg0 === 1) {
                                  throw value;
                                } else if (arg0 === 2) {
                                  const obj3 = { value, done: true };
                                  return obj3;
                                } else {
                                  return { value: "IconComponent", done: null };
                                }
                              } else {
                                let c3;
                                try {
                                  let c0;
                                  let current;
                                  ref = 2;
                                  if (0 === v1) {
                                    if (arg0 === 1) {
                                      ref = 3;
                                      throw value;
                                    } else if (arg0 === 2) {
                                      ref = 3;
                                      const obj5 = { value, done: true };
                                      return obj5;
                                    } else {
                                      let closure_1 = tmp;
                                      closure_0 = tmp4;
                                      closure_2 = undefined;
                                      c0 = false;
                                      current = ref.current;
                                      if (null != current) {
                                        v1(current);
                                      }
                                      c3 = 1;
                                      v1 = 2;
                                      ref = 1;
                                      const obj6 = {
                                        value: obj4.claimBountyReward(closure_0.id, closure_1),
                                        done: false,
                                      };
                                      obj4 = closure_0(closure_2_2[22]);
                                      return obj6;
                                    }
                                  } else {
                                    if (1 === v1) {
                                      c3 = 0;
                                      const obj2 = closure_0(closure_2_2[23]);
                                      result = obj2.openBountyRewardClaimErrorToast(closure_2);
                                      v1(null);
                                    } else if (arg0 === 1) {
                                      ref = 3;
                                      throw value;
                                    } else if (arg0 === 2) {
                                      c3 = 0;
                                      ref = 3;
                                      const obj = { value, done: true };
                                      return obj;
                                    } else {
                                      c0 = true;
                                      c3 = 0;
                                    }
                                    const tmp17 = c0 && null != current;
                                    if (tmp17) {
                                      v1(current + closure_2_8);
                                      const BountiesMobileQuestBarExperiment = closure_0(
                                        closure_2_2[24],
                                      ).BountiesMobileQuestBarExperiment;
                                      const obj7 = { location: constants.VIDEO_MODAL_MOBILE };
                                      if (
                                        BountiesMobileQuestBarExperiment.getConfig(obj7)
                                          .hapticFeedbackOnRewardEarnedEnabled
                                      ) {
                                        doRewardEarnedHapticFeedback();
                                      }
                                    }
                                    ref = 3;
                                    return { value: "IconComponent", done: null };
                                  }
                                } catch (tmp37) {
                                  closure_2 = tmp37;
                                  if (0 === c3) {
                                    ref = 3;
                                    throw tmp37;
                                  } else {
                                    v1 = 1;
                                  }
                                }
                              }
                            });
                            const fn = function () {
                              return closure_0(...arguments);
                            };
                            cResult[29] = bounty.id;
                            cResult[30] = sourceQuestContent;
                            cResult[31] = fn;
                          }
                        }
                      }
                    }
                  }
                  const bottomContainer = tmp4.bottomContainer;
                  if (size.isFullWidth) {
                    class W {
                      constructor() {
                        closure_5.current = balance;
                      }
                    }
                    tmp16[0] = bottomContainer;
                    tmp16[1] = tmp4.bottomContainerFullWidth;
                  } else {
                    class W {
                      constructor() {
                        closure_5.current = balance;
                      }
                    }
                    tmp16[0] = bottomContainer;
                    tmp16[1] = tmp4.bottomContainerNotFullWidth;
                    let obj3 = { left: null, width: null };
                    ({ left: obj4.left, width: obj4.width } = size);
                    tmp16[2] = obj3;
                  }
                  cResult[14] = tmp4.bottomContainer;
                  cResult[15] = tmp4.bottomContainerFullWidth;
                  cResult[16] = tmp4.bottomContainerNotFullWidth;
                  cResult[17] = size.isFullWidth;
                  cResult[18] = size.left;
                  cResult[19] = size.width;
                  cResult[20] = tmp16;
                }
                const items2 = [tmp4.closeButton, tmp12];
                cResult[11] = tmp4.closeButton;
                cResult[12] = tmp12;
                cResult[13] = items2;
              }
              const rect = { top: sum, left: diff1 };
              cResult[8] = sum;
              cResult[9] = diff1;
              cResult[10] = rect;
              tmp12 = rect;
            }
            const items3 = [tmp4.videoWrapper, tmp5];
            let num = 5;
            cResult[5] = tmp4.videoWrapper;
            cResult[6] = tmp5;
            cResult[7] = items3;
          }
        }
      }
      const size1 = { top: size.top, left: size.left, width: size.width, height: size.height };
      cResult[0] = size.height;
      cResult[1] = size.left;
      cResult[2] = size.top;
      cResult[3] = size.width;
      cResult[4] = size1;
      tmp5 = size1;
    }
  : (bounty) => {
      let BountyVideo;
      let _undefined;
      let c6;
      let closure_3;
      let handleBufferAnalytics;
      let handleLoadStartAnalytics;
      let handlePaused;
      let handleReadyForDisplayAnalytics;
      let handleResumed;
      let handleVideoEnd;
      let handleVideoEndAnalytics;
      let handleVideoEndWithAppStore;
      let handleVideoErrorAnalytics;
      let handleVideoLoopedAnalytics;
      let handleVideoPaused;
      let handleVideoPausedAnalytics;
      let handleVideoProgress;
      let handleVideoProgressAnalytics;
      let handleVideoResumed;
      let handleVideoResumedAnalytics;
      let handleVideoTracksAnalytics;
      let isCtaVisible;
      let isEndCardVisible;
      let normalizedProgress;
      let obj11;
      let rewardRemainingSeconds;
      let rewardTotalSeconds;
      let shouldRepeatVideo;
      let showEndCard;
      let styles;
      let tmp10;
      let tmp25;
      bounty = bounty.bounty;
      const sourceQuestContent = bounty.sourceQuestContent;
      let dismissVideoEndAppStoreOverlay = bounty.dismissVideoEndAppStoreOverlay;
      let balance;
      c6 = undefined;
      let closure_7;
      isEndCardVisible = undefined;
      const tmp = closure_21();
      bounty = tmp;
      const tmp2 = closure_20();
      _slicedToArray = tmp2;
      let items = [tmp.videoWrapper, tmp2];
      let items1 = [tmp.closeButton, , ,];
      ({ top: arr2[1], left: arr2[2], width: arr2[3] } = tmp2);
      const memo = balance.useMemo(() => {
        const items = [closure_3.videoWrapper];
        size = { top: styles.top, left: styles.left, width: styles.width, height: styles.height };
        items[1] = size;
        return items;
      }, items);
      const items2 = [, , , , ,];
      ({ bottomContainer: arr3[0], bottomContainerFullWidth: arr3[1], bottomContainerNotFullWidth: arr3[2] } = tmp);
      ({ isFullWidth: arr3[3], left: arr3[4], width: arr3[5] } = tmp2);
      const memo1 = balance.useMemo(() => {
        let diff;
        const items = [closure_3.closeButton];
        const rect = { top: styles.top + nativeDefault.space.PX_8, left: diff - nativeDefault.space.PX_8 };
        const sum = styles.left + styles.width;
        diff = sum - nativeDefault.space.PX_32;
        items[1] = rect;
        return items;
      }, items1);
      const memo2 = balance.useMemo(() => {
        let items1;
        const bottomContainer = closure_3.bottomContainer;
        if (styles.isFullWidth) {
          const items = [bottomContainer, closure_3.bottomContainerFullWidth];
          items1 = items;
        } else {
          items1 = [bottomContainer, closure_3.bottomContainerNotFullWidth];
          const obj = { left: null, width: null };
          ({ left: obj.left, width: obj.width } = styles);
          items1[2] = obj;
        }
        return items1;
      }, items2);
      let obj = bounty(dismissVideoEndAppStoreOverlay[19]);
      const items3 = [closure_7];
      const stateFromStores = obj.useStateFromStores(items3, () => BountyStore.isBountyCompleted(bounty.id));
      let obj2 = bounty(dismissVideoEndAppStoreOverlay[20]);
      balance = obj2.useFetchVirtualCurrencyBalance().balance;
      [tmp10, c6] = _slicedToArray(balance.useState(null), 2);
      const tmp9 = _slicedToArray(balance.useState(null), 2);
      closure_7 = balance.useRef(balance);
      const items4 = [balance];
      const effect = balance.useEffect(() => {
        closure_7.current = balance;
      }, items4);
      let obj3 = bounty(dismissVideoEndAppStoreOverlay[21]);
      const bountyVideoEndMode = obj3.getBountyVideoEndMode(bounty);
      let result = 1000 * bounty.rewardTimerSeconds;
      let c8 = result;
      const ref = balance.useRef(null);
      const items5 = [bounty.id, sourceQuestContent];
      const callback = balance.useCallback(
        bounty(function* () {
          let closure_0;
          let closure_2;
          let obj4;
          if (c5 === 2) {
            c5 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp3 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              const obj3 = { value, done: true };
              return obj3;
            } else {
              return { value: "IconComponent", done: null };
            }
          } else {
            let c3;
            try {
              let c0;
              let current;
              c5 = 2;
              if (0 === c4) {
                if (arg0 === 1) {
                  c5 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c5 = 3;
                  const obj5 = { value, done: true };
                  return obj5;
                } else {
                  let closure_1 = tmp;
                  bounty = tmp4;
                  c0 = false;
                  current = ref.current;
                  if (null != current) {
                    _undefined(current);
                  }
                  c3 = 1;
                  c4 = 2;
                  c5 = 1;
                  const obj6 = { value: obj4.claimBountyReward(bounty.id, sourceQuestContent), done: false };
                  obj4 = bounty(dismissVideoEndAppStoreOverlay[22]);
                  return obj6;
                }
              } else {
                if (1 === c4) {
                  c3 = 0;
                  const obj2 = bounty(dismissVideoEndAppStoreOverlay[23]);
                  const result = obj2.openBountyRewardClaimErrorToast(dismissVideoEndAppStoreOverlay);
                  closure_129_6(null);
                } else if (arg0 === 1) {
                  c5 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c3 = 0;
                  c5 = 3;
                  const obj = { value, done: true };
                  return obj;
                } else {
                  c0 = true;
                  c3 = 0;
                }
                const tmp17 = c0 && null != current;
                if (tmp17) {
                  closure_129_6(current + closure_1_8);
                  const BountiesMobileQuestBarExperiment = bounty(
                    dismissVideoEndAppStoreOverlay[24],
                  ).BountiesMobileQuestBarExperiment;
                  const obj7 = { location: constants.VIDEO_MODAL_MOBILE };
                  if (BountiesMobileQuestBarExperiment.getConfig(obj7).hapticFeedbackOnRewardEarnedEnabled) {
                    doRewardEarnedHapticFeedback();
                  }
                }
                c5 = 3;
                return { value: "IconComponent", done: null };
              }
            } catch (tmp37) {
              dismissVideoEndAppStoreOverlay = tmp37;
              if (0 === c3) {
                c5 = 3;
                throw tmp37;
              } else {
                c4 = 1;
              }
            }
          }
        }),
        items5,
      );
      let obj4 = bounty(dismissVideoEndAppStoreOverlay[25]);
      let obj5 = {
        bountyId: bounty.id,
        sourceQuestContent,
        rewardDurationMs: result,
        wasPreloaded: false,
        verticalScrollingPosition: null,
        isActive: true,
      };
      const bountiesModalVideoAnalytics = obj4.useBountiesModalVideoAnalytics(obj5);
      ({
        handleVideoProgressAnalytics,
        handleVideoEndAnalytics,
        handleVideoLoopedAnalytics,
        handleVideoPausedAnalytics,
        handleVideoResumedAnalytics,
        handleVideoErrorAnalytics,
        handleLoadStartAnalytics,
        handleVideoTracksAnalytics,
        handleReadyForDisplayAnalytics,
        handleBufferAnalytics,
      } = bountiesModalVideoAnalytics);
      let obj6 = bounty(dismissVideoEndAppStoreOverlay[26]);
      const bountiesModalTiming = obj6.useBountiesModalTiming({
        endMode: bountyVideoEndMode,
        rewardDurationMs: result,
        isCompleted: stateFromStores,
        onRewardEarned: callback,
        onVideoProgress: handleVideoProgressAnalytics,
        onVideoEnd: handleVideoEndAnalytics,
        onVideoLooped: handleVideoLoopedAnalytics,
        onVideoPaused: handleVideoPausedAnalytics,
        onVideoResumed: handleVideoResumedAnalytics,
        playerRef: ref,
      });
      ({ isCtaVisible, isEndCardVisible } = bountiesModalTiming);
      const maxVideoProgressSeconds = bountiesModalTiming.maxVideoProgressSeconds;
      const videoDuration = bountiesModalTiming.videoDuration;
      ({
        handleVideoEnd,
        handleVideoProgress,
        handleVideoPaused,
        handleVideoResumed,
        showEndCard,
        rewardRemainingSeconds,
        rewardTotalSeconds,
        normalizedProgress,
      } = bountiesModalTiming);
      let obj7 = bounty(dismissVideoEndAppStoreOverlay[21]);
      const bountyAppStoreOverlayPlayback = obj7.useBountyAppStoreOverlayPlayback({
        bounty,
        sourceQuestContent,
        isActive: true,
        endMode: bountyVideoEndMode,
        playerRef: ref,
        handleVideoEnd,
        handleVideoPaused,
        handleVideoResumed,
        showEndCard,
      });
      const isVideoEndAppStoreOverlayVisible = bountyAppStoreOverlayPlayback.isVideoEndAppStoreOverlayVisible;
      const items6 = [
        bounty.id,
        dismissVideoEndAppStoreOverlay,
        maxVideoProgressSeconds,
        result,
        sourceQuestContent,
        videoDuration,
      ];
      ({ shouldRepeatVideo, handlePaused, handleResumed, handleVideoEndWithAppStore } = bountyAppStoreOverlayPlayback);
      const items7 = [
        bounty.id,
        dismissVideoEndAppStoreOverlay,
        maxVideoProgressSeconds,
        result,
        sourceQuestContent,
        videoDuration,
      ];
      const callback1 = balance.useCallback(() => {
        let formatVideoProgressRatio;
        let num;
        let obj2;
        let obj3;
        dismissVideoEndAppStoreOverlay();
        const tmp3 = AnalyticsActions;
        const trackAdContentEvent = tmp3.trackAdContentEvent;
        const obj = {
          adContentId: bounty.id,
          adCreativeType: AdCreativeType.AdCreativeType.BOUNTY,
          event: constants.AD_VIDEO_MODAL_CLOSED,
          properties: obj2,
          sourceQuestContent,
        };
        obj2 = {
          content_name: obj3.getQuestContentName(QuestContent.QuestContent.VIDEO_MODAL_MOBILE),
          content_id: QuestContent.QuestContent.VIDEO_MODAL_MOBILE,
          video_progress: formatVideoProgressRatio(maxVideoProgressSeconds, num),
          threshold_met: 1000 * maxVideoProgressSeconds >= c8,
          reward_timer_seconds: c8 / 1000,
        };
        num = videoDuration;
        obj3 = AnalyticsTypes;
        formatVideoProgressRatio = VideoQuestUtils.formatVideoProgressRatio;
        VideoQuestUtils;
        if (videoDuration == null) {
          num = 0;
        }
        trackAdContentEvent(obj);
        const obj4 = BountiesModalActionCreatorsDefault;
        obj4.hideModal();
      }, items6);
      const obj8 = { style: memo, children: closure_15(BountyVideo, size) };
      const callback2 = balance.useCallback(() => {
        let formatVideoProgressRatio;
        let num;
        let obj2;
        let obj3;
        dismissVideoEndAppStoreOverlay();
        const tmp3 = AnalyticsActions;
        const trackAdContentEvent = tmp3.trackAdContentEvent;
        const obj = {
          adContentId: bounty.id,
          adCreativeType: AdCreativeType.AdCreativeType.BOUNTY,
          event: constants.AD_VIDEO_MODAL_CLOSED,
          properties: obj2,
          sourceQuestContent,
        };
        obj2 = {
          content_name: obj3.getQuestContentName(QuestContent.QuestContent.VIDEO_MODAL_END_CARD),
          content_id: QuestContent.QuestContent.VIDEO_MODAL_END_CARD,
          video_progress: formatVideoProgressRatio(maxVideoProgressSeconds, num),
          threshold_met: true,
          reward_timer_seconds: c8 / 1000,
        };
        num = videoDuration;
        obj3 = AnalyticsTypes;
        formatVideoProgressRatio = VideoQuestUtils.formatVideoProgressRatio;
        VideoQuestUtils;
        if (videoDuration == null) {
          num = 0;
        }
        trackAdContentEvent(obj);
        const obj4 = BountiesModalActionCreatorsDefault;
        obj4.hideModal();
      }, items7);
      size = {
        bounty,
        sourceQuestContent,
        isCompleted: stateFromStores,
        isCtaVisible,
        isEndCardVisible,
        isProgressBarVisible: !isEndCardVisible && !isVideoEndAppStoreOverlayVisible,
        orbsBalance: tmp10,
        handleVideoEnd: handleVideoEndWithAppStore,
        handleVideoProgress,
        handleVideoPaused: handlePaused,
        handleVideoResumed: handleResumed,
        handleVideoError: handleVideoErrorAnalytics,
        onLoadStart: handleLoadStartAnalytics,
        onBuffer: handleBufferAnalytics,
        onFirstFrame: handleReadyForDisplayAnalytics,
        onVideoTracks: handleVideoTracksAnalytics,
        rewardRemainingSeconds,
        rewardTotalSeconds,
        normalizedProgress,
        repeat: shouldRepeatVideo,
        initialProgress,
        isActive: true,
        playerRef: ref,
        width: null,
        height: null,
        renderEndCard() {
          let visible;
          let obj = {
            adContentId: bounty.id,
            adCreativeType: AdCreativeType.AdCreativeType.BOUNTY,
            questContent: QuestContent.QuestContent.VIDEO_MODAL_END_CARD,
            sourceQuestContent,
            overrideVisibility: isEndCardVisible,
            children() {
              const obj = { bounty, visible, sourceQuestContent };
              return closure_2_15(sourceQuestContent(dismissVideoEndAppStoreOverlay[34]), obj);
            },
          };
          const QuestContentImpressionTrackerNative = QuestContentImpressionTracker.QuestContentImpressionTrackerNative;
          return closure_15(QuestContentImpressionTrackerNative, obj);
        },
      };
      BountyVideo = bounty(dismissVideoEndAppStoreOverlay[35]).BountyVideo;
      const tmp6 = bounty;
      if (isCtaVisible) {
        isCtaVisible = !isVideoEndAppStoreOverlayVisible;
      }
      ({ width: obj9.width, height: obj9.height } = tmp2);
      const items8 = [closure_15(tmp24, obj8), ,];
      const obj10 = {
        style: memo1,
        children: closure_15(sourceQuestContent(dismissVideoEndAppStoreOverlay[36]), { onPress: callback1 }),
      };
      items8[1] = closure_15(c6, obj10);
      let rect = {
        left: tmp2.isFullWidth,
        right: tmp2.isFullWidth,
        bottom: true,
        style: memo2,
        pointerEvents: "box-none",
        children: closure_15(tmp25, obj11),
      };
      const SafeAreaPaddingView = tmp6(tmp7[38]).SafeAreaPaddingView;
      obj11 = { bounty, visible: isEndCardVisible, sourceQuestContent, onClose: callback2 };
      tmp25 = sourceQuestContent(dismissVideoEndAppStoreOverlay[37]);
      if (isEndCardVisible) {
        isEndCardVisible = !isVideoEndAppStoreOverlayVisible;
      }
      const obj12 = { children: items8 };
      items8[2] = closure_15(SafeAreaPaddingView, rect);
      return closure_17(closure_16, obj12);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_24 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let ref;
      let ref2;
      let sharedValue;
      let sourceQuestContent;
      let tmp4;
      let obj = sharedValue(576);
      const cResult = obj.c(30);
      ({ bounty, sourceQuestContent } = arg0);
      const height = useWindowDimensionsDefault().height;
      size = closure_20();
      let obj2 = sharedValue(4612);
      sharedValue = obj2.useSharedValue(0);
      [tmp4, importDefault] = _slicedToArray(react.useState(null), 2);
      const tmp3 = _slicedToArray(react.useState(null), 2);
      dependencyMap = react.useRef(null);
      bounty = react.useRef(0);
      if (cResult[0] === size.height) {
        if (cResult[1] === size.top) {
          if (cResult[2] === size.width) {
            let tmp6;
            if (cResult[3] === height) {
              tmp6 = cResult[4];
            }
            if (cResult[5] !== height) {
              cResult[5] = height;
              cResult[6] = closure_10(height);
              const tmp10 = closure_10(height);
            }
            if (cResult[7] !== sharedValue) {
              class B {
                constructor(arg0) {
                  closure_3.current = Date.now();
                  closure_2.current = arg0;
                  tmp = closure_1(arg0);
                  set = closure_0.set;
                  tmp2 = closure_0;
                  tmp3 = closure_2;
                  obj = closure_0(closure_2[40]);
                  result = set(obj.withTiming(1, closure_0(closure_2[41]).timingSlow));
                  appId = arg0.metadata.appId;
                  trackOverlayEvent = arg0.trackOverlayEvent;
                  QUEST_APP_STORE_OVERLAY_OPEN_SUCCEEDED = AnalyticEvents.QUEST_APP_STORE_OVERLAY_OPEN_SUCCEEDED;
                  trackOverlayEventResult = trackOverlayEvent(
                    QUEST_APP_STORE_OVERLAY_OPEN_SUCCEEDED,
                    appId,
                    tmp2(tmp3[27]).AppStoreOverlayVariant.CUSTOM,
                  );
                  return;
                }
              }
              cResult[7] = sharedValue;
              cResult[8] = B;
            } else {
              class B {
                constructor(arg0) {
                  closure_3.current = Date.now();
                  closure_2.current = arg0;
                  tmp = closure_1(arg0);
                  set = closure_0.set;
                  tmp2 = closure_0;
                  tmp3 = closure_2;
                  obj = closure_0(closure_2[40]);
                  result = set(obj.withTiming(1, closure_0(closure_2[41]).timingSlow));
                  appId = arg0.metadata.appId;
                  trackOverlayEvent = arg0.trackOverlayEvent;
                  QUEST_APP_STORE_OVERLAY_OPEN_SUCCEEDED = AnalyticEvents.QUEST_APP_STORE_OVERLAY_OPEN_SUCCEEDED;
                  trackOverlayEventResult = trackOverlayEvent(
                    QUEST_APP_STORE_OVERLAY_OPEN_SUCCEEDED,
                    appId,
                    tmp2(tmp3[27]).AppStoreOverlayVariant.CUSTOM,
                  );
                  return;
                }
              }
            }
            if (cResult[9] !== sharedValue) {
              class Q {
                constructor() {
                  current = closure_2.current;
                  if (null != current) {
                    closure_2.current = null;
                    tmp16 = AnalyticEvents;
                    QUEST_APP_STORE_OVERLAY_CLOSED = AnalyticEvents.QUEST_APP_STORE_OVERLAY_CLOSED;
                    appId = current.metadata.appId;
                    trackOverlayEvent = current.trackOverlayEvent;
                    tmp = closure_0;
                    tmp2 = closure_2;
                    tmp3 = globalThis;
                    _Date = Date;
                    tmp4 = closure_3;
                    tmp5 = current;
                    tmp6 = QUEST_APP_STORE_OVERLAY_CLOSED;
                    tmp7 = appId;
                    trackOverlayEventResult = trackOverlayEvent(
                      QUEST_APP_STORE_OVERLAY_CLOSED,
                      appId,
                      closure_0(closure_2[27]).AppStoreOverlayVariant.CUSTOM,
                      Date.now() - closure_3.current,
                    );
                    obj = closure_0(closure_2[42]);
                    result = obj.clearAppStoreOverlayOpen();
                    ComponentDispatch = closure_0(closure_2[43]).ComponentDispatch;
                    tmp10 = ComponentActions;
                    dispatchResult = ComponentDispatch.dispatch(ComponentActions.QUEST_APP_STORE_OVERLAY_FINISHED);
                    tmp12 = closure_1;
                    tmp13 = closure_1(null);
                    tmp14 = closure_0;
                    set = closure_0.set;
                    obj2 = closure_0(closure_2[40]);
                    num = 0;
                    result1 = set(obj2.withTiming(0, closure_0(closure_2[41]).timingStandard));
                  }
                  return;
                }
              }
              cResult[9] = sharedValue;
              cResult[10] = Q;
            } else {
              class Q {
                constructor() {
                  current = closure_2.current;
                  if (null != current) {
                    closure_2.current = null;
                    tmp16 = AnalyticEvents;
                    QUEST_APP_STORE_OVERLAY_CLOSED = AnalyticEvents.QUEST_APP_STORE_OVERLAY_CLOSED;
                    appId = current.metadata.appId;
                    trackOverlayEvent = current.trackOverlayEvent;
                    tmp = closure_0;
                    tmp2 = closure_2;
                    tmp3 = globalThis;
                    _Date = Date;
                    tmp4 = closure_3;
                    tmp5 = current;
                    tmp6 = QUEST_APP_STORE_OVERLAY_CLOSED;
                    tmp7 = appId;
                    trackOverlayEventResult = trackOverlayEvent(
                      QUEST_APP_STORE_OVERLAY_CLOSED,
                      appId,
                      closure_0(closure_2[27]).AppStoreOverlayVariant.CUSTOM,
                      Date.now() - closure_3.current,
                    );
                    obj = closure_0(closure_2[42]);
                    result = obj.clearAppStoreOverlayOpen();
                    ComponentDispatch = closure_0(closure_2[43]).ComponentDispatch;
                    tmp10 = ComponentActions;
                    dispatchResult = ComponentDispatch.dispatch(ComponentActions.QUEST_APP_STORE_OVERLAY_FINISHED);
                    tmp12 = closure_1;
                    tmp13 = closure_1(null);
                    tmp14 = closure_0;
                    set = closure_0.set;
                    obj2 = closure_0(closure_2[40]);
                    num = 0;
                    result1 = set(obj2.withTiming(0, closure_0(closure_2[41]).timingStandard));
                  }
                  return;
                }
              }
            }
            if (cResult[11] === Q) {
              class Q {
                constructor() {
                  current = closure_2.current;
                  if (null != current) {
                    closure_2.current = null;
                    tmp16 = AnalyticEvents;
                    QUEST_APP_STORE_OVERLAY_CLOSED = AnalyticEvents.QUEST_APP_STORE_OVERLAY_CLOSED;
                    appId = current.metadata.appId;
                    trackOverlayEvent = current.trackOverlayEvent;
                    tmp = closure_0;
                    tmp2 = closure_2;
                    tmp3 = globalThis;
                    _Date = Date;
                    tmp4 = closure_3;
                    tmp5 = current;
                    tmp6 = QUEST_APP_STORE_OVERLAY_CLOSED;
                    tmp7 = appId;
                    trackOverlayEventResult = trackOverlayEvent(
                      QUEST_APP_STORE_OVERLAY_CLOSED,
                      appId,
                      closure_0(closure_2[27]).AppStoreOverlayVariant.CUSTOM,
                      Date.now() - closure_3.current,
                    );
                    obj = closure_0(closure_2[42]);
                    result = obj.clearAppStoreOverlayOpen();
                    ComponentDispatch = closure_0(closure_2[43]).ComponentDispatch;
                    tmp10 = ComponentActions;
                    dispatchResult = ComponentDispatch.dispatch(ComponentActions.QUEST_APP_STORE_OVERLAY_FINISHED);
                    tmp12 = closure_1;
                    tmp13 = closure_1(null);
                    tmp14 = closure_0;
                    set = closure_0.set;
                    obj2 = closure_0(closure_2[40]);
                    num = 0;
                    result1 = set(obj2.withTiming(0, closure_0(closure_2[41]).timingStandard));
                  }
                  return;
                }
              }
            }
            const obj3 = {
              videoEndPeekProgress: sharedValue,
              videoEndPeekTargetScale: tmp6,
              isVideoEndAppStoreOverlayVisible: null != tmp4,
              showVideoEndAppStoreOverlay: B,
              dismissVideoEndAppStoreOverlay: Q,
            };
            cResult[11] = Q;
            cResult[12] = null != tmp4;
            cResult[13] = B;
            cResult[14] = sharedValue;
            cResult[15] = tmp6;
            cResult[16] = obj3;
          }
        }
      }
      const obj4 = { windowHeight: height, videoTop: size.top, videoWidth: size.width, videoHeight: size.height };
      const tmp7 = closure_11(obj4);
      cResult[0] = size.height;
      ({ top: tmp[1], width: tmp[2] } = size);
      cResult[3] = height;
      cResult[4] = tmp7;
      tmp6 = tmp7;
    }
  : (arg0) => {
      let _undefined;
      let c3;
      let items5;
      let ref;
      let ref2;
      let sourceQuestContent;
      let styles;
      let tmp6;
      importDefault = undefined;
      let sharedValue;
      c3 = undefined;
      _slicedToArray = undefined;
      react = undefined;
      ({ bounty, sourceQuestContent } = arg0);
      const height = require("useWindowDimensions")().height;
      const tmp3 = closure_20();
      const tmp = importDefault;
      importDefault = tmp3;
      let obj = height(sharedValue[39]);
      const tmp2 = sharedValue;
      sharedValue = obj.useSharedValue(0);
      [tmp6, c3] = _slicedToArray(react.useState(null), 2);
      const tmp5 = _slicedToArray(react.useState(null), 2);
      _slicedToArray = react.useRef(null);
      react = react.useRef(0);
      const isVideoEndAppStoreOverlayVisible = tmp7;
      const items = [height, , ,];
      ({ top: arr[1], width: arr[2], height: arr[3] } = tmp3);
      const memo = react.useMemo(() => {
        const obj = {
          windowHeight: height,
          videoTop: styles.top,
          videoWidth: styles.width,
          videoHeight: styles.height,
        };
        return unpackModuleId(obj);
      }, items);
      const items1 = [height];
      const items2 = [sharedValue];
      const memo1 = react.useMemo(() => authStore(height), items1);
      const showVideoEndAppStoreOverlay = react.useCallback((current) => {
        ref2.current = Date.now();
        ref.current = current;
        _undefined(current);
        set = sharedValue.set;
        const obj = timing;
        const result = set(obj.withTiming(1, timingPresets.timingSlow));
        const appId = current.metadata.appId;
        const trackOverlayEvent = current.trackOverlayEvent;
        const QUEST_APP_STORE_OVERLAY_OPEN_SUCCEEDED = constants.QUEST_APP_STORE_OVERLAY_OPEN_SUCCEEDED;
        trackOverlayEvent(
          QUEST_APP_STORE_OVERLAY_OPEN_SUCCEEDED,
          appId,
          AnalyticsActions.AppStoreOverlayVariant.CUSTOM,
        );
      }, items2);
      const items3 = [sharedValue];
      const callback1 = react.useCallback(() => {
        const current = ref.current;
        if (null != current) {
          ref.current = null;
          const QUEST_APP_STORE_OVERLAY_CLOSED = constants.QUEST_APP_STORE_OVERLAY_CLOSED;
          const appId = current.metadata.appId;
          const trackOverlayEvent = current.trackOverlayEvent;
          const _Date = Date;
          trackOverlayEvent(
            QUEST_APP_STORE_OVERLAY_CLOSED,
            appId,
            AnalyticsActions.AppStoreOverlayVariant.CUSTOM,
            Date.now() - ref2.current,
          );
          const obj = AppStoreOverlayTelemetryManager;
          const result = obj.clearAppStoreOverlayOpen();
          const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
          ComponentDispatch.dispatch(map1.QUEST_APP_STORE_OVERLAY_FINISHED);
          _undefined(null);
          set = sharedValue.set;
          const obj2 = timing;
          const result1 = set(obj2.withTiming(0, timingPresets.timingStandard));
        }
      }, items3);
      const items4 = [callback1, tmp7, showVideoEndAppStoreOverlay, sharedValue, memo];
      const memo2 = react.useMemo(
        () => ({
          videoEndPeekProgress: sharedValue,
          videoEndPeekTargetScale: memo,
          isVideoEndAppStoreOverlayVisible,
          showVideoEndAppStoreOverlay,
          dismissVideoEndAppStoreOverlay: callback1,
        }),
        items4,
      );
      let obj2 = { value: memo2, children: items5 };
      const BountyVideoEndAppStoreProvider = height(sharedValue[45]).BountyVideoEndAppStoreProvider;
      items5 = [closure_15(closure_23, { bounty, sourceQuestContent, dismissVideoEndAppStoreOverlay: callback1 })];
      let tmp14Result = null;
      if (null != tmp6) {
        const obj3 = {
          metadata: tmp6.metadata,
          sheetHeight: memo1,
          revealProgress: sharedValue,
          onDismiss: callback1,
          onInstallPress: tmp6.onInstallPress,
        };
        tmp14Result = closure_15(tmp(tmp2[44]), obj3);
      }
      items5[1] = tmp14Result;
      return closure_17(BountyVideoEndAppStoreProvider, obj2);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? (bountyId) => {
      let BillableAdPlacementImpressionTrackerNative;
      let closure_4;
      let obj4;
      let obj = bountyId(bounty[11]);
      const cResult = obj.c(16);
      bountyId = bountyId.bountyId;
      const sourceQuestContent = bountyId.sourceQuestContent;
      bounty = bountyId.bounty;
      if (cResult[0] === bountyId) {
        if (cResult[1] === bounty) {
          let tmp4;
          if (cResult[2] === sourceQuestContent) {
            tmp4 = cResult[3];
          }
          bounty = _slicedToArray(react.useState(tmp4), 1)[0];
          _slicedToArray = tmp8;
          if (cResult[4] === bountyId) {
            if ((cResult[5] === null) == bounty) {
              let tmp9;
              let tmp10;
              if (cResult[6] === sourceQuestContent) {
                tmp9 = cResult[7];
                tmp10 = cResult[8];
              }
              const effect = react.useEffect(tmp9, tmp10);
              if (null != bounty) {
                if (cResult[9] === bounty) {
                  let tmp13;
                  if (cResult[10] === sourceQuestContent) {
                    tmp13 = cResult[11];
                  }
                  class C {
                    constructor() {
                      const obj = { bounty, sourceQuestContent };
                      return closure_15(closure_24, obj);
                    }
                  }
                  let obj3 = {
                    theme: ThemeTypes.DARK,
                    children: closure_15(BillableAdPlacementImpressionTrackerNative, obj4),
                  };
                  const ThemeContextProvider = tmp(tmp2[47]).ThemeContextProvider;
                  obj4 = {
                    adContentId: bounty.id,
                    adCreativeType: bountyId(bounty[28]).AdCreativeType.BOUNTY,
                    questContent: bountyId(bounty[30]).QuestContent.VIDEO_MODAL_MOBILE,
                    sourceQuestContent,
                    overrideVisibility: true,
                    children: tmp13,
                  };
                  BillableAdPlacementImpressionTrackerNative = tmp(tmp2[33]).BillableAdPlacementImpressionTrackerNative;
                  cResult[12] = bounty.id;
                  cResult[13] = sourceQuestContent;
                  cResult[14] = tmp13;
                  cResult[15] = closure_15(ThemeContextProvider, obj3);
                  const tmp17 = closure_15(ThemeContextProvider, obj3);
                }
                class C {
                  constructor() {
                    const obj = { bounty, sourceQuestContent };
                    return closure_15(closure_24, obj);
                  }
                }
                cResult[9] = bounty;
                cResult[10] = sourceQuestContent;
                cResult[11] = C;
                tmp13 = C;
              }
              return null;
            }
          }
          const fn2 = function c() {
            let obj2;
            if (closure_4) {
              const _Error = Error;
              const self = this;
              const self2 = this;
              const captureQuestsException = QuestDataUtils.captureQuestsException;
              QuestDataUtils;
              const error = new Error("Bounty unexpectedly missing when opening the Bounties modal");
              const obj = { tags: { source: "BountiesModalContent" }, extra: obj2 };
              obj2 = { bountyId, sourceQuestContent };
              const result = captureQuestsException(error, obj);
              const obj3 = BountiesModalActionCreatorsDefault;
              obj3.hideModal();
            }
          };
          const items = [null == bounty, bountyId, sourceQuestContent];
          cResult[4] = bountyId;
          cResult[5] = null == bounty;
          cResult[6] = sourceQuestContent;
          cResult[7] = fn2;
          cResult[8] = items;
          tmp10 = items;
          tmp9 = fn2;
        }
      }
      const fn = function i() {
        if (null != bounty) {
          if (bounty.id === bountyId) {
            return bounty;
          }
        }
        const obj = QuestDataUtils;
        const questPlacementFromQuestContent = obj.getQuestPlacementFromQuestContent(sourceQuestContent);
        let bountyByPlacementAndId = null;
        if (null != questPlacementFromQuestContent) {
          const tmp3Result = QuestDataUtils;
          bountyByPlacementAndId = tmp3Result.getBountyByPlacementAndId(questPlacementFromQuestContent, bountyId);
        }
        return bountyByPlacementAndId;
      };
      cResult[0] = bountyId;
      cResult[1] = bounty;
      cResult[2] = sourceQuestContent;
      cResult[3] = fn;
      tmp4 = fn;
    }
  : (bountyId) => {
      let BillableAdPlacementImpressionTrackerNative;
      let closure_4;
      let obj2;
      bountyId = bountyId.bountyId;
      const sourceQuestContent = bountyId.sourceQuestContent;
      _slicedToArray = undefined;
      bounty = _slicedToArray(
        react.useState(() => {
          if (null != bounty) {
            if (bounty.id === bountyId) {
              return bounty;
            }
          }
          const obj = QuestDataUtils;
          const questPlacementFromQuestContent = obj.getQuestPlacementFromQuestContent(sourceQuestContent);
          let bountyByPlacementAndId = null;
          if (null != questPlacementFromQuestContent) {
            const tmp3Result = QuestDataUtils;
            bountyByPlacementAndId = tmp3Result.getBountyByPlacementAndId(questPlacementFromQuestContent, bountyId);
          }
          return bountyByPlacementAndId;
        }),
        1,
      )[0];
      let tmp2 = null;
      _slicedToArray = tmp3;
      const items = [null == bounty, bountyId, sourceQuestContent];
      const effect = react.useEffect(function () {
        let obj2;
        if (closure_4) {
          const _Error = Error;
          const self = this;
          const self2 = this;
          const captureQuestsException = QuestDataUtils.captureQuestsException;
          QuestDataUtils;
          const error = new Error("Bounty unexpectedly missing when opening the Bounties modal");
          const obj = { tags: { source: "BountiesModalContent" }, extra: obj2 };
          obj2 = { bountyId, sourceQuestContent };
          const result = captureQuestsException(error, obj);
          const obj3 = BountiesModalActionCreatorsDefault;
          obj3.hideModal();
        }
      }, items);
      if (null != bounty) {
        let obj = { theme: ThemeTypes.DARK, children: closure_15(BillableAdPlacementImpressionTrackerNative, obj2) };
        const ThemeContextProvider = bountyId(bounty[47]).ThemeContextProvider;
        obj2 = {
          adContentId: bounty.id,
          adCreativeType: bountyId(bounty[28]).AdCreativeType.BOUNTY,
          questContent: bountyId(bounty[30]).QuestContent.VIDEO_MODAL_MOBILE,
          sourceQuestContent,
          overrideVisibility: true,
          children() {
            const obj = { bounty, sourceQuestContent };
            return closure_15(closure_24, obj);
          },
        };
        BillableAdPlacementImpressionTrackerNative = bountyId(bounty[33]).BillableAdPlacementImpressionTrackerNative;
        tmp2 = closure_15(ThemeContextProvider, obj);
      }
      return tmp2;
    };
let size = size_mod;
let result = size.fileFinishedImporting("modules/quests/native/BountiesModal/BountiesModalContent.tsx");

export default tmp6;
