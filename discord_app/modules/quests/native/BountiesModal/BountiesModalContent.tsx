// discord_app/modules/quests/native/BountiesModal/BountiesModalContent.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
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
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import BountyStore from "../../BountyStore.tsx";

require = fn;
function doRewardEarnedHapticFeedback() {
  let sum;
  let num = 0.25;
  if (obj.isAndroid()) {
    num = 0.15;
  }
  obj = PlatformUtils;
  const tmpResult = PlatformUtils;
  const items = [];
  let num3 = 0;
  let num4 = 0;
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
  items.push({ time: sum + 100, type: "transient", intensity: 1, sharpness: 0.95 });
  arr = Array.from({ length: 6 }, (arg0, arg1) => 6 - arg1);
  const obj3 = { time: sum + 100, type: "transient", intensity: 1, sharpness: 0.95 };
  Patterns.triggerPattern(items);
  const tmp7Result = Patterns;
}
let View = fn(17).View;
const QuestConstants = fn(5623);
({ BOUNTY_ORB_AMOUNT: closure_8, QuestsExperimentLocations: closure_9 } = QuestConstants);
const BountiesModalConstants = fn(14815);
({ getBountyVideoEndAppStoreSheetHeight: c10, getBountyVideoEndPeekTargetScale: closure_11 } = BountiesModalConstants);
const Constants = fn(1085);
({ AnalyticEvents: closure_12, ComponentActions: map1 } = Constants);
const ThemeTypes = fn(1096).ThemeTypes;
const jsxProd = fn(21);
({ jsx: closure_15, Fragment: closure_16, jsxs: closure_17 } = jsxProd);
let c18 = 0.5625;
const initialProgress = { timestampSec: 0, maxTimestampSec: 0, duration: 0 };
let ReactCompilerGating = fn(558);
let closure_20 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = c.c(6);
      ({ width, height } = useWindowDimensionsDefault());
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
              if (cResult[4] === rounded) {
                let tmp11 = cResult[5];
              }
              return tmp11;
            }
          }
        }
      }
      const size = { top: rounded, left: rounded1, width: rounded2, height: rounded3, isFullWidth: flag };
      cResult[0] = flag;
      cResult[1] = rounded1;
      cResult[2] = rounded2;
      cResult[3] = rounded3;
      cResult[4] = rounded;
      cResult[5] = size;
      tmp11 = size;
    }
  : () => {
      let size = height(1484)();
      const width = size.width;
      height = size.height;
      const tmp = height(1618)();
      dependencyMap = tmp;
      const items = [width, height, , , ,];
      ({ top: arr[2], bottom: arr[3], left: arr[4], right: arr[5] } = tmp);
      return noop.useMemo(() => {
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
        const size = {
          top: Math.floor(rect.top + (diff1 - result) / 2),
          left: Math.floor(rect.left + (diff - result1) / 2),
          width: Math.floor(result1),
          height: Math.floor(result),
          isFullWidth: flag,
        };
        return size;
      }, items);
    };
const createStyles = fn(4890);
let closure_21 = createStyles.createStyles(() => {
  const obj = {
    videoWrapper: { position: "absolute" },
    closeButton: { position: "absolute" },
    bottomContainer: { position: "absolute", bottom: nativeDefault.space.PX_24, justifyContent: "flex-end" },
    bottomContainerFullWidth: null,
    bottomContainerNotFullWidth: null,
  };
  const rect = { left: nativeDefault.space.PX_16, right: nativeDefault.space.PX_16 };
  obj.bottomContainerFullWidth = rect;
  const obj2 = { position: "absolute", bottom: nativeDefault.space.PX_24, justifyContent: "flex-end" };
  obj.bottomContainerNotFullWidth = { paddingLeft: nativeDefault.space.PX_16, paddingRight: nativeDefault.space.PX_16 };
  return obj;
});
ReactCompilerGating = fn(558);
let closure_23 = ReactCompilerGating.isReactCompilerEnabled()
  ? (bounty) => {
      const cResult = require("c").c(117);
      bounty = bounty.bounty;
      _require = bounty;
      const sourceQuestContent = bounty.sourceQuestContent;
      dependencyMap = bounty.dismissVideoEndAppStoreOverlay;
      width = closure_21();
      const size = closure_20();
      if (cResult[0] === size.height) {
        if (cResult[1] === size.left) {
          if (cResult[2] === size.top) {
            if (cResult[3] === size.width) {
              let tmp4 = cResult[4];
            }
            if (cResult[5] === width.videoWrapper) {
              const sum = size.top + sourceQuestContent(587).space.PX_8;
              const sum1 = size.left + size.width;
              const diff = sum1 - sourceQuestContent(587).space.PX_32;
              const diff1 = diff - sourceQuestContent(587).space.PX_8;
              if (cResult[8] === sum) {
                if (cResult[9] === diff1) {
                  let tmp11 = cResult[10];
                }
                if (cResult[11] === width.closeButton) {
                  if (cResult[14] === width.bottomContainer) {
                    if (cResult[15] === width.bottomContainerFullWidth) {
                      if (cResult[16] === width.bottomContainerNotFullWidth) {
                        if (cResult[17] === size.isFullWidth) {
                          if (cResult[18] === size.left) {
                            if (cResult[19] === size.width) {
                              const _Symbol = Symbol;
                              if (cResult[21] === Symbol.for("react.memo_cache_sentinel")) {
                                const items = [BountyStore];
                                cResult[21] = items;
                                let tmp18 = items;
                              } else {
                                tmp18 = cResult[21];
                              }
                              if (cResult[22] !== bounty.id) {
                                class F {
                                  constructor() {
                                    return closure_7.isBountyCompleted(closure_0.id);
                                  }
                                }
                                cResult[22] = bounty.id;
                                cResult[23] = F;
                              } else {
                                class F {
                                  constructor() {
                                    return closure_7.isBountyCompleted(closure_0.id);
                                  }
                                }
                              }
                              const stateFromStores = tmp(504).useStateFromStores(tmp18, F);
                              const tmpResult = tmp(504);
                              const balance = tmp(8508).useFetchVirtualCurrencyBalance().balance;
                              const tmpResult2 = tmp(8508);
                              [tmp25, _slicedToArray] = noop.useState(null);
                              if (tmp25 == null) {
                                class F {
                                  constructor() {
                                    return closure_7.isBountyCompleted(closure_0.id);
                                  }
                                }
                              }
                              noop = obj7.useRef(balance);
                              if (cResult[24] !== balance) {
                                class W {
                                  constructor() {
                                    closure_5.current = balance;
                                    return;
                                  }
                                }
                                const items1 = [balance];
                                cResult[24] = balance;
                                cResult[25] = W;
                                cResult[26] = items1;
                                let tmp27 = items1;
                              } else {
                                class W {
                                  constructor() {
                                    closure_5.current = balance;
                                    return;
                                  }
                                }
                                tmp27 = cResult[26];
                              }
                              const effect = obj7.useEffect(W, tmp27);
                              if (cResult[27] !== bounty) {
                                class W {
                                  constructor() {
                                    closure_5.current = balance;
                                    return;
                                  }
                                }
                                const bountyVideoEndMode = obj8.getBountyVideoEndMode(bounty);
                                cResult[27] = bounty;
                                cResult[28] = bountyVideoEndMode;
                              } else {
                                class W {
                                  constructor() {
                                    closure_5.current = balance;
                                    return;
                                  }
                                }
                              }
                              let result = 1000 * bounty.rewardTimerSeconds;
                              View = result;
                              noop.useRef(null);
                              if (cResult[29] === bounty.id) {
                                class W {
                                  constructor() {
                                    closure_5.current = balance;
                                    return;
                                  }
                                }
                                if (cResult[32] === bounty.id) {
                                  class W {
                                    constructor() {
                                      closure_5.current = balance;
                                      return;
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
                              _require = balance(function* () {
                                if (ref === 2) {
                                  ref = 3;
                                  throw new TypeError("Generator functions may not be called on executing generators");
                                } else if (tmp6 === 3) {
                                  if (arg0 === 1) {
                                    throw value;
                                  } else if (arg0 === 2) {
                                    const obj3 = { value, done: true };
                                    return obj3;
                                  } else {
                                    return { value: "IconComponent", done: null };
                                  }
                                } else {
                                  try {
                                    ref = 2;
                                    if (0 === v2) {
                                      if (arg0 === 1) {
                                        ref = 3;
                                        throw value;
                                      } else if (arg0 === 2) {
                                        ref = 3;
                                        const obj5 = { value, done: true };
                                        return obj5;
                                      } else {
                                        closure_1 = tmp3;
                                        user = tmp7;
                                        closure_128_1 = undefined;
                                        closure_128_2 = undefined;
                                        closure_128_0 = false;
                                        const current = ref.current;
                                        closure_128_1 = current;
                                        if (null != current) {
                                          v2(current);
                                        }
                                        c3 = 1;
                                        v2 = 2;
                                        ref = 1;
                                        const obj6 = {
                                          value: user(tmp40[22]).claimBountyReward(user.id, closure_1),
                                          done: false,
                                        };
                                        return obj6;
                                      }
                                    } else {
                                      if (1 === tmp7) {
                                        c3 = 0;
                                        closure_128_2 = tmp40;
                                        result = user(tmp40[23]).openBountyRewardClaimErrorToast(closure_128_2);
                                        v2(null);
                                        const obj2 = user(tmp40[23]);
                                      } else if (arg0 === 1) {
                                        ref = 3;
                                        throw value;
                                      } else if (arg0 === 2) {
                                        c3 = 0;
                                        ref = 3;
                                        const obj = { value, done: true };
                                        return obj;
                                      } else {
                                        closure_128_0 = true;
                                        c3 = 0;
                                      }
                                      let tmp20 = closure_128_0;
                                      if (closure_128_0) {
                                        tmp20 = null != closure_128_1;
                                      }
                                      if (tmp20) {
                                        v2(closure_128_1 + closure_2_8);
                                        const BountiesMobileQuestBarExperiment = user(
                                          tmp40[24],
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
                                  } catch (tmp40) {
                                    if (tmp4 === c3) {
                                      ref = tmp2;
                                      throw tmp40;
                                    } else {
                                      v2 = tmp;
                                    }
                                  }
                                }
                              });
                              const fn = function () {
                                const self = this;
                                const apply = closure_0.apply;
                                if (typeof apply === "unknown") {
                                  let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                                } else {
                                  applyArgumentsResult = apply(self, arguments);
                                }
                                return applyArgumentsResult;
                              };
                              cResult[29] = bounty.id;
                              cResult[30] = sourceQuestContent;
                              cResult[31] = fn;
                              const tmp24 = _slicedToArray(noop.useState(null), 2);
                            }
                          }
                        }
                      }
                    }
                  }
                  let bottomContainerFullWidth = width.bottomContainer;
                  if (size.isFullWidth) {
                    class W {
                      constructor() {
                        closure_5.current = balance;
                        return;
                      }
                    }
                    tmp15[0] = bottomContainerFullWidth;
                    bottomContainerFullWidth = width.bottomContainerFullWidth;
                    tmp15[1] = bottomContainerFullWidth;
                  } else {
                    class W {
                      constructor() {
                        closure_5.current = balance;
                        return;
                      }
                    }
                    tmp15[0] = bottomContainerFullWidth;
                    tmp15[1] = width.bottomContainerNotFullWidth;
                    ({ left: obj4.left, width: obj4.width } = size);
                    tmp15[2] = { left: null, width: null };
                    let obj3 = { left: null, width: null };
                  }
                  cResult[14] = width.bottomContainer;
                  cResult[15] = width.bottomContainerFullWidth;
                  cResult[16] = width.bottomContainerNotFullWidth;
                  cResult[17] = size.isFullWidth;
                  ({ left: tmp3[18], width } = size);
                  cResult[19] = width;
                  cResult[20] = tmp15;
                }
                const items2 = [width.closeButton, tmp11];
                cResult[11] = width.closeButton;
                cResult[12] = tmp11;
                cResult[13] = items2;
              }
              const rect = { top: sum, left: diff1 };
              cResult[8] = sum;
              cResult[9] = diff1;
              cResult[10] = rect;
              tmp11 = rect;
            }
            const items3 = [width.videoWrapper, tmp4];
            cResult[5] = width.videoWrapper;
            cResult[6] = tmp4;
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
      tmp4 = size1;
      let obj = require("c");
    }
  : (bounty) => {
      bounty = bounty.bounty;
      const sourceQuestContent = bounty.sourceQuestContent;
      const dismissVideoEndAppStoreOverlay = bounty.dismissVideoEndAppStoreOverlay;
      let balance;
      c6 = undefined;
      closure_7 = undefined;
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
        const size = { top: styles.top, left: styles.left, width: styles.width, height: styles.height };
        items[1] = size;
        return items;
      }, items);
      const items2 = [, , , , ,];
      ({ bottomContainer: arr3[0], bottomContainerFullWidth: arr3[1], bottomContainerNotFullWidth: arr3[2] } = tmp);
      ({ isFullWidth: arr3[3], left: arr3[4], width: arr3[5] } = tmp2);
      const memo1 = balance.useMemo(() => {
        const items = [closure_3.closeButton];
        const rect = { top: styles.top + nativeDefault.space.PX_8, left: null };
        const sum = styles.left + styles.width;
        const diff = sum - nativeDefault.space.PX_32;
        rect.left = diff - nativeDefault.space.PX_8;
        items[1] = rect;
        return items;
      }, items1);
      const memo2 = balance.useMemo(() => {
        const bottomContainer = closure_3.bottomContainer;
        if (styles.isFullWidth) {
          const items = [bottomContainer, closure_3.bottomContainerFullWidth];
          let items1 = items;
        } else {
          items1 = [bottomContainer, closure_3.bottomContainerNotFullWidth];
          const obj = { left: null, width: null };
          ({ left: obj.left, width: obj.width } = styles);
          items1[2] = obj;
        }
        return items1;
      }, items2);
      const items3 = [closure_7];
      const stateFromStores = bounty(dismissVideoEndAppStoreOverlay[19]).useStateFromStores(items3, () =>
        BountyStore.isBountyCompleted(bounty.id),
      );
      let obj = bounty(dismissVideoEndAppStoreOverlay[19]);
      const tmp6 = bounty;
      balance = bounty(dismissVideoEndAppStoreOverlay[20]).useFetchVirtualCurrencyBalance().balance;
      let obj2 = bounty(dismissVideoEndAppStoreOverlay[20]);
      [tmp10, c6] = balance.useState(null);
      closure_7 = balance.useRef(balance);
      const items4 = [balance];
      const effect = balance.useEffect(() => {
        closure_7.current = balance;
      }, items4);
      const tmp9 = _slicedToArray(balance.useState(null), 2);
      const bountyVideoEndMode = bounty(dismissVideoEndAppStoreOverlay[21]).getBountyVideoEndMode(bounty);
      let result = 1000 * bounty.rewardTimerSeconds;
      c8 = result;
      const ref = balance.useRef(null);
      const items5 = [bounty.id, sourceQuestContent];
      const callback = balance.useCallback(
        bounty(function* () {
          if (c5 === 2) {
            c5 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp6 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              const obj3 = { value, done: true };
              return obj3;
            } else {
              return { value: "IconComponent", done: null };
            }
          } else {
            try {
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
                  closure_1 = tmp3;
                  bounty = tmp7;
                  closure_128_1 = undefined;
                  closure_128_0 = false;
                  const current = ref.current;
                  closure_128_1 = current;
                  if (null != current) {
                    _undefined(current);
                  }
                  c3 = 1;
                  c4 = 2;
                  c5 = 1;
                  const obj6 = {
                    value: bounty(tmp40[22]).claimBountyReward(bounty.id, sourceQuestContent),
                    done: false,
                  };
                  return obj6;
                }
              } else {
                if (1 === tmp7) {
                  c3 = 0;
                  closure_128_2 = tmp40;
                  const result = bounty(tmp40[23]).openBountyRewardClaimErrorToast(closure_128_2);
                  closure_129_6(null);
                  const obj2 = bounty(tmp40[23]);
                } else if (arg0 === 1) {
                  c5 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c3 = 0;
                  c5 = 3;
                  const obj = { value, done: true };
                  return obj;
                } else {
                  closure_128_0 = true;
                  c3 = 0;
                }
                let tmp20 = closure_128_0;
                if (closure_128_0) {
                  tmp20 = null != closure_128_1;
                }
                if (tmp20) {
                  closure_129_6(closure_128_1 + closure_1_8);
                  const BountiesMobileQuestBarExperiment = bounty(tmp40[24]).BountiesMobileQuestBarExperiment;
                  const obj7 = { location: constants.VIDEO_MODAL_MOBILE };
                  if (BountiesMobileQuestBarExperiment.getConfig(obj7).hapticFeedbackOnRewardEarnedEnabled) {
                    doRewardEarnedHapticFeedback();
                  }
                }
                c5 = 3;
                return { value: "IconComponent", done: null };
              }
            } catch (tmp40) {
              if (tmp4 === c3) {
                c5 = tmp2;
                throw tmp40;
              } else {
                c4 = tmp;
              }
            }
          }
        }),
        items5,
      );
      let obj3 = bounty(dismissVideoEndAppStoreOverlay[21]);
      const bountiesModalVideoAnalytics = bounty(dismissVideoEndAppStoreOverlay[25]).useBountiesModalVideoAnalytics({
        bountyId: bounty.id,
        sourceQuestContent,
        rewardDurationMs: result,
        wasPreloaded: false,
        verticalScrollingPosition: null,
        isActive: true,
      });
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
      let obj4 = bounty(dismissVideoEndAppStoreOverlay[25]);
      let obj5 = {
        bountyId: bounty.id,
        sourceQuestContent,
        rewardDurationMs: result,
        wasPreloaded: false,
        verticalScrollingPosition: null,
        isActive: true,
      };
      const bountiesModalTiming = bounty(dismissVideoEndAppStoreOverlay[26]).useBountiesModalTiming({
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
      let obj6 = bounty(dismissVideoEndAppStoreOverlay[26]);
      const bountyAppStoreOverlayPlayback = bounty(dismissVideoEndAppStoreOverlay[21]).useBountyAppStoreOverlayPlayback(
        {
          bounty,
          sourceQuestContent,
          isActive: true,
          endMode: bountyVideoEndMode,
          playerRef: ref,
          handleVideoEnd,
          handleVideoPaused,
          handleVideoResumed,
          showEndCard,
        },
      );
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
        dismissVideoEndAppStoreOverlay();
        const obj2 = {
          adContentId: bounty.id,
          adCreativeType: AdCreativeType.AdCreativeType.BOUNTY,
          event: constants.AD_VIDEO_MODAL_CLOSED,
          properties: null,
          sourceQuestContent: null,
        };
        const obj3 = {
          content_name: null,
          content_id: null,
          video_progress: null,
          threshold_met: null,
          reward_timer_seconds: null,
        };
        const obj = AnalyticsActions;
        obj3.content_name = AnalyticsTypes.getQuestContentName(QuestContent.QuestContent.VIDEO_MODAL_MOBILE);
        obj3.content_id = QuestContent.QuestContent.VIDEO_MODAL_MOBILE;
        let num = videoDuration;
        if (videoDuration == null) {
          num = 0;
        }
        obj3.video_progress = VideoQuestUtils.formatVideoProgressRatio(maxVideoProgressSeconds, num);
        obj3.threshold_met = 1000 * maxVideoProgressSeconds >= c8;
        obj3.reward_timer_seconds = c8 / 1000;
        obj2.properties = obj3;
        obj2.sourceQuestContent = sourceQuestContent;
        obj.trackAdContentEvent(obj2);
        BountiesModalActionCreatorsDefault.hideModal();
      }, items6);
      const obj8 = { style: memo, children: null };
      const callback2 = balance.useCallback(() => {
        dismissVideoEndAppStoreOverlay();
        const obj2 = {
          adContentId: bounty.id,
          adCreativeType: AdCreativeType.AdCreativeType.BOUNTY,
          event: constants.AD_VIDEO_MODAL_CLOSED,
          properties: null,
          sourceQuestContent: null,
        };
        const obj3 = {
          content_name: null,
          content_id: null,
          video_progress: null,
          threshold_met: true,
          reward_timer_seconds: null,
        };
        const obj = AnalyticsActions;
        obj3.content_name = AnalyticsTypes.getQuestContentName(QuestContent.QuestContent.VIDEO_MODAL_END_CARD);
        obj3.content_id = QuestContent.QuestContent.VIDEO_MODAL_END_CARD;
        let num = videoDuration;
        if (videoDuration == null) {
          num = 0;
        }
        obj3.video_progress = VideoQuestUtils.formatVideoProgressRatio(maxVideoProgressSeconds, num);
        obj3.reward_timer_seconds = c8 / 1000;
        obj2.properties = obj3;
        obj2.sourceQuestContent = sourceQuestContent;
        obj.trackAdContentEvent(obj2);
        BountiesModalActionCreatorsDefault.hideModal();
      }, items7);
      let size = {
        bounty,
        sourceQuestContent,
        isCompleted: stateFromStores,
        isCtaVisible: null,
        isEndCardVisible: null,
        isProgressBarVisible: null,
        orbsBalance: null,
        handleVideoEnd: null,
        handleVideoProgress: null,
        handleVideoPaused: null,
        handleVideoResumed: null,
        handleVideoError: null,
        onLoadStart: null,
        onBuffer: null,
        onFirstFrame: null,
        onVideoTracks: null,
        rewardRemainingSeconds: null,
        rewardTotalSeconds: null,
        normalizedProgress: null,
        repeat: null,
        initialProgress: null,
        isActive: true,
        playerRef: null,
        width: null,
        height: null,
        renderEndCard: null,
      };
      if (isCtaVisible) {
        isCtaVisible = !isVideoEndAppStoreOverlayVisible;
      }
      size.isCtaVisible = isCtaVisible;
      size.isEndCardVisible = isEndCardVisible;
      let tmp25 = !isEndCardVisible;
      if (!isEndCardVisible) {
        tmp25 = !isVideoEndAppStoreOverlayVisible;
      }
      size.isProgressBarVisible = tmp25;
      size.orbsBalance = tmp10;
      size.handleVideoEnd = handleVideoEndWithAppStore;
      size.handleVideoProgress = handleVideoProgress;
      size.handleVideoPaused = handlePaused;
      size.handleVideoResumed = handleResumed;
      size.handleVideoError = handleVideoErrorAnalytics;
      size.onLoadStart = handleLoadStartAnalytics;
      size.onBuffer = handleBufferAnalytics;
      size.onFirstFrame = handleReadyForDisplayAnalytics;
      size.onVideoTracks = handleVideoTracksAnalytics;
      size.rewardRemainingSeconds = rewardRemainingSeconds;
      size.rewardTotalSeconds = rewardTotalSeconds;
      size.normalizedProgress = normalizedProgress;
      size.repeat = shouldRepeatVideo;
      size.initialProgress = initialProgress;
      size.playerRef = ref;
      ({ width: obj9.width, height: obj9.height } = tmp2);
      size.renderEndCard = function renderEndCard() {
        return closure_2_15(QuestContentImpressionTracker.QuestContentImpressionTrackerNative, {
          adContentId: bounty.id,
          adCreativeType: AdCreativeType.AdCreativeType.BOUNTY,
          questContent: QuestContent.QuestContent.VIDEO_MODAL_END_CARD,
          sourceQuestContent,
          overrideVisibility: isEndCardVisible,
          children() {
            return closure_2_15(sourceQuestContent(dismissVideoEndAppStoreOverlay[34]), {
              bounty,
              visible,
              sourceQuestContent,
            });
          },
        });
      };
      obj8.children = closure_15(bounty(dismissVideoEndAppStoreOverlay[35]).BountyVideo, size);
      const items8 = [closure_15(c6, obj8), ,];
      let obj7 = bounty(dismissVideoEndAppStoreOverlay[21]);
      items8[1] = closure_15(c6, {
        style: memo1,
        children: closure_15(sourceQuestContent(dismissVideoEndAppStoreOverlay[36]), { onPress: callback1 }),
      });
      let rect = {
        left: tmp2.isFullWidth,
        right: tmp2.isFullWidth,
        bottom: true,
        style: memo2,
        pointerEvents: "box-none",
        children: null,
      };
      const obj11 = { bounty, visible: null, sourceQuestContent: null, onClose: null };
      const obj10 = {
        style: memo1,
        children: closure_15(sourceQuestContent(dismissVideoEndAppStoreOverlay[36]), { onPress: callback1 }),
      };
      if (isEndCardVisible) {
        isEndCardVisible = !isVideoEndAppStoreOverlayVisible;
      }
      const obj12 = { children: null };
      obj11.visible = isEndCardVisible;
      obj11.sourceQuestContent = sourceQuestContent;
      obj11.onClose = callback2;
      rect.children = closure_15(sourceQuestContent(dismissVideoEndAppStoreOverlay[37]), obj11);
      items8[2] = closure_15(tmp6(dismissVideoEndAppStoreOverlay[38]).SafeAreaPaddingView, rect);
      obj12.children = items8;
      return closure_17(closure_16, obj12);
    };
ReactCompilerGating = fn(558);
let closure_24 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = sharedValue(576).c(30);
      ({ bounty, sourceQuestContent } = arg0);
      const height = useWindowDimensionsDefault().height;
      const size = closure_20();
      let obj = sharedValue(576);
      sharedValue = sharedValue(4612).useSharedValue(0);
      let obj2 = sharedValue(4612);
      [tmp4, importDefault] = noop.useState(null);
      dependencyMap = noop.useRef(null);
      bounty = noop.useRef(0);
      if (cResult[0] === size.height) {
        if (cResult[1] === size.top) {
          if (cResult[2] === size.width) {
            if (cResult[3] === height) {
              let tmp6 = cResult[4];
            }
            if (cResult[5] !== height) {
              const tmp10 = closure_10(height);
              cResult[5] = height;
              cResult[6] = tmp10;
            }
            if (cResult[7] !== sharedValue) {
              class B {
                constructor(arg0) {
                  closure_3.current = Date.now();
                  closure_2.current = arg0;
                  tmp = closure_1(arg0);
                  tmp2 = closure_0;
                  tmp3 = closure_2;
                  obj = closure_0(closure_2[40]);
                  result = closure_0.set(obj.withTiming(1, closure_0(closure_2[41]).timingSlow));
                  appId = arg0.metadata.appId;
                  trackOverlayEventResult = arg0.trackOverlayEvent(
                    AnalyticEvents.QUEST_APP_STORE_OVERLAY_OPEN_SUCCEEDED,
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
                  tmp2 = closure_0;
                  tmp3 = closure_2;
                  obj = closure_0(closure_2[40]);
                  result = closure_0.set(obj.withTiming(1, closure_0(closure_2[41]).timingSlow));
                  appId = arg0.metadata.appId;
                  trackOverlayEventResult = arg0.trackOverlayEvent(
                    AnalyticEvents.QUEST_APP_STORE_OVERLAY_OPEN_SUCCEEDED,
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
                    tmp = closure_0;
                    tmp2 = closure_2;
                    tmp3 = globalThis;
                    _Date = Date;
                    tmp4 = closure_3;
                    tmp5 = current;
                    tmp6 = QUEST_APP_STORE_OVERLAY_CLOSED;
                    tmp7 = appId;
                    trackOverlayEventResult = current.trackOverlayEvent(
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
                    obj2 = closure_0(closure_2[40]);
                    num = 0;
                    result1 = closure_0.set(obj2.withTiming(0, closure_0(closure_2[41]).timingStandard));
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
                    tmp = closure_0;
                    tmp2 = closure_2;
                    tmp3 = globalThis;
                    _Date = Date;
                    tmp4 = closure_3;
                    tmp5 = current;
                    tmp6 = QUEST_APP_STORE_OVERLAY_CLOSED;
                    tmp7 = appId;
                    trackOverlayEventResult = current.trackOverlayEvent(
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
                    obj2 = closure_0(closure_2[40]);
                    num = 0;
                    result1 = closure_0.set(obj2.withTiming(0, closure_0(closure_2[41]).timingStandard));
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
                    tmp = closure_0;
                    tmp2 = closure_2;
                    tmp3 = globalThis;
                    _Date = Date;
                    tmp4 = closure_3;
                    tmp5 = current;
                    tmp6 = QUEST_APP_STORE_OVERLAY_CLOSED;
                    tmp7 = appId;
                    trackOverlayEventResult = current.trackOverlayEvent(
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
                    obj2 = closure_0(closure_2[40]);
                    num = 0;
                    result1 = closure_0.set(obj2.withTiming(0, closure_0(closure_2[41]).timingStandard));
                  }
                  return;
                }
              }
            }
            const obj3 = {
              videoEndPeekProgress: sharedValue,
              videoEndPeekTargetScale: tmp6,
              isVideoEndAppStoreOverlayVisible: tmp5,
              showVideoEndAppStoreOverlay: B,
              dismissVideoEndAppStoreOverlay: Q,
            };
            cResult[11] = Q;
            cResult[12] = tmp5;
            cResult[13] = B;
            cResult[14] = sharedValue;
            cResult[15] = tmp6;
            cResult[16] = obj3;
          }
        }
      }
      const tmp7 = closure_11({
        windowHeight: height,
        videoTop: size.top,
        videoWidth: size.width,
        videoHeight: size.height,
      });
      cResult[0] = size.height;
      ({ top: tmp[1], width: tmp[2] } = size);
      cResult[3] = height;
      cResult[4] = tmp7;
      tmp6 = tmp7;
      const obj4 = { windowHeight: height, videoTop: size.top, videoWidth: size.width, videoHeight: size.height };
      const tmp3 = _slicedToArray(noop.useState(null), 2);
    }
  : (arg0) => {
      importDefault = undefined;
      let sharedValue;
      c3 = undefined;
      noop = undefined;
      ({ bounty, sourceQuestContent } = arg0);
      const height = require("useWindowDimensions")().height;
      const tmp3 = closure_20();
      importDefault = tmp3;
      sharedValue = height(sharedValue[39]).useSharedValue(0);
      let obj = height(sharedValue[39]);
      const tmp = importDefault;
      const tmp2 = sharedValue;
      [tmp6, c3] = noop.useState(null);
      _slicedToArray = noop.useRef(null);
      noop = noop.useRef(0);
      const isVideoEndAppStoreOverlayVisible = tmp7;
      const items = [height, , ,];
      ({ top: arr[1], width: arr[2], height: arr[3] } = tmp3);
      const memo = noop.useMemo(
        () =>
          closure_2_11({
            windowHeight: height,
            videoTop: styles.top,
            videoWidth: styles.width,
            videoHeight: styles.height,
          }),
        items,
      );
      const items1 = [height];
      const items2 = [sharedValue];
      const memo1 = noop.useMemo(() => v65535(height), items1);
      const showVideoEndAppStoreOverlay = noop.useCallback((current) => {
        closure_5.current = Date.now();
        closure_4.current = current;
        _undefined(current);
        const result = sharedValue.set(timing.withTiming(1, timingPresets.timingSlow));
        const appId = current.metadata.appId;
        current.trackOverlayEvent(
          constants.QUEST_APP_STORE_OVERLAY_OPEN_SUCCEEDED,
          appId,
          AnalyticsActions.AppStoreOverlayVariant.CUSTOM,
        );
      }, items2);
      const items3 = [sharedValue];
      const callback1 = noop.useCallback(() => {
        const current = ref.current;
        if (null != current) {
          ref.current = null;
          const QUEST_APP_STORE_OVERLAY_CLOSED = constants.QUEST_APP_STORE_OVERLAY_CLOSED;
          const appId = current.metadata.appId;
          const _Date = Date;
          current.trackOverlayEvent(
            QUEST_APP_STORE_OVERLAY_CLOSED,
            appId,
            AnalyticsActions.AppStoreOverlayVariant.CUSTOM,
            Date.now() - ref2.current,
          );
          const result = AppStoreOverlayTelemetryManager.clearAppStoreOverlayOpen();
          const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
          ComponentDispatch.dispatch(constants2.QUEST_APP_STORE_OVERLAY_FINISHED);
          _undefined(null);
          const result1 = sharedValue.set(timing.withTiming(0, timingPresets.timingStandard));
        }
      }, items3);
      const items4 = [callback1, null != tmp6, showVideoEndAppStoreOverlay, sharedValue, memo];
      const memo2 = noop.useMemo(
        () => ({
          videoEndPeekProgress: sharedValue,
          videoEndPeekTargetScale: memo,
          isVideoEndAppStoreOverlayVisible,
          showVideoEndAppStoreOverlay,
          dismissVideoEndAppStoreOverlay: callback1,
        }),
        items4,
      );
      let obj2 = { value: memo2, children: null };
      const items5 = [
        closure_15(closure_23, { bounty, sourceQuestContent, dismissVideoEndAppStoreOverlay: callback1 }),
      ];
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
      obj2.children = items5;
      return closure_17(height(sharedValue[45]).BountyVideoEndAppStoreProvider, obj2);
    };
ReactCompilerGating = fn(558);
let size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/BountiesModal/BountiesModalContent.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (bountyId) => {
      let VIDEO_MODAL_MOBILE = bounty;
      const cResult = bountyId(bounty[11]).c(16);
      bountyId = bountyId.bountyId;
      const sourceQuestContent = bountyId.sourceQuestContent;
      bounty = bountyId.bounty;
      if (cResult[0] === bountyId) {
        if (cResult[1] === bounty) {
          if (cResult[2] === sourceQuestContent) {
            let tmp3 = cResult[3];
          }
          let id = _slicedToArray(noop.useState(tmp3), 1)[0];
          _slicedToArray = tmp6;
          if (cResult[4] === bountyId) {
            if (cResult[5] === tmp6) {
              if (cResult[6] === sourceQuestContent) {
                let tmp7 = cResult[7];
                let tmp8 = cResult[8];
              }
              const effect = noop.useEffect(tmp7, tmp8);
              if (null == id) {
                return null;
              } else {
                if (cResult[9] === id) {
                  if (cResult[10] === sourceQuestContent) {
                    let tmp11 = cResult[11];
                  }
                  class C {
                    constructor() {
                      obj = { bounty: closure_3, sourceQuestContent };
                      return jsx(f68820, obj);
                    }
                  }
                  let obj3 = { theme: ThemeTypes.DARK, children: null };
                  let obj4 = {
                    adContentId: id.id,
                    adCreativeType: tmp(VIDEO_MODAL_MOBILE[28]).AdCreativeType.BOUNTY,
                    questContent: null,
                    sourceQuestContent: null,
                    overrideVisibility: true,
                    children: null,
                  };
                  VIDEO_MODAL_MOBILE = tmp(VIDEO_MODAL_MOBILE[30]).QuestContent.VIDEO_MODAL_MOBILE;
                  obj4.questContent = VIDEO_MODAL_MOBILE;
                  obj4.sourceQuestContent = sourceQuestContent;
                  obj4.children = tmp11;
                  obj3.children = closure_15(
                    tmp(VIDEO_MODAL_MOBILE[33]).BillableAdPlacementImpressionTrackerNative,
                    obj4,
                  );
                  const tmp15 = closure_15(tmp(VIDEO_MODAL_MOBILE[47]).ThemeContextProvider, obj3);
                  id = id.id;
                  cResult[12] = id;
                  cResult[13] = sourceQuestContent;
                  cResult[14] = tmp11;
                  cResult[15] = tmp15;
                }
                class C {
                  constructor() {
                    obj = { bounty: closure_3, sourceQuestContent };
                    return jsx(f68820, obj);
                  }
                }
                cResult[9] = id;
                cResult[10] = sourceQuestContent;
                cResult[11] = C;
                tmp11 = C;
              }
            }
          }
          const fn2 = function c() {
            if (closure_4) {
              const _Error = Error;
              const error = new Error("Bounty unexpectedly missing when opening the Bounties modal");
              const obj2 = { tags: { source: "BountiesModalContent" }, extra: null };
              const obj3 = { bountyId, sourceQuestContent };
              obj2.extra = obj3;
              const result = QuestDataUtils.captureQuestsException(error, obj2);
              BountiesModalActionCreatorsDefault.hideModal();
            }
          };
          const items = [null == id, bountyId, sourceQuestContent];
          cResult[4] = bountyId;
          cResult[5] = null == id;
          cResult[6] = sourceQuestContent;
          cResult[7] = fn2;
          cResult[8] = items;
          tmp8 = items;
          tmp7 = fn2;
        }
      }
      const fn = function i() {
        if (null != bounty) {
          if (bounty.id === bountyId) {
            return bounty;
          }
        }
        const questPlacementFromQuestContent = QuestDataUtils.getQuestPlacementFromQuestContent(sourceQuestContent);
        let bountyByPlacementAndId = null;
        if (null != questPlacementFromQuestContent) {
          bountyByPlacementAndId = QuestDataUtils.getBountyByPlacementAndId(questPlacementFromQuestContent, bountyId);
          const tmp3Result = QuestDataUtils;
        }
        return bountyByPlacementAndId;
      };
      cResult[0] = bountyId;
      cResult[1] = bounty;
      cResult[2] = sourceQuestContent;
      cResult[3] = fn;
      tmp3 = fn;
      let obj = bountyId(bounty[11]);
    }
  : (bountyId) => {
      bountyId = bountyId.bountyId;
      const sourceQuestContent = bountyId.sourceQuestContent;
      _slicedToArray = undefined;
      bounty = _slicedToArray(
        noop.useState(() => {
          if (null != bounty) {
            if (bounty.id === bountyId) {
              return bounty;
            }
          }
          const questPlacementFromQuestContent = QuestDataUtils.getQuestPlacementFromQuestContent(sourceQuestContent);
          let bountyByPlacementAndId = null;
          if (null != questPlacementFromQuestContent) {
            bountyByPlacementAndId = QuestDataUtils.getBountyByPlacementAndId(questPlacementFromQuestContent, bountyId);
            const tmp3Result = QuestDataUtils;
          }
          return bountyByPlacementAndId;
        }),
        1,
      )[0];
      let tmp2 = null;
      _slicedToArray = tmp3;
      const items = [null == bounty, bountyId, sourceQuestContent];
      const effect = noop.useEffect(() => {
        if (closure_4) {
          const _Error = Error;
          const error = new Error("Bounty unexpectedly missing when opening the Bounties modal");
          const obj2 = { tags: { source: "BountiesModalContent" }, extra: null };
          const obj3 = { bountyId, sourceQuestContent };
          obj2.extra = obj3;
          const result = QuestDataUtils.captureQuestsException(error, obj2);
          BountiesModalActionCreatorsDefault.hideModal();
        }
      }, items);
      if (null != bounty) {
        let obj = { theme: ThemeTypes.DARK, children: null };
        let obj2 = {
          adContentId: bounty.id,
          adCreativeType: bountyId(bounty[28]).AdCreativeType.BOUNTY,
          questContent: bountyId(bounty[30]).QuestContent.VIDEO_MODAL_MOBILE,
          sourceQuestContent,
          overrideVisibility: true,
          children() {
            return closure_2_15(closure_24, { bounty, sourceQuestContent });
          },
        };
        obj.children = closure_15(bountyId(bounty[33]).BillableAdPlacementImpressionTrackerNative, obj2);
        tmp2 = closure_15(bountyId(bounty[47]).ThemeContextProvider, obj);
      }
      return tmp2;
    };
