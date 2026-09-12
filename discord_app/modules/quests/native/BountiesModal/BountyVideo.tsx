// discord_app/modules/quests/native/BountiesModal/BountyVideo.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import timing from "../../../../design/animation/reanimated/timing/timing.tsx";
import timingPresets from "../../../../design/animation/reanimated/timing/timingPresets.tsx";
import AssetUtils from "../../lib/AssetUtils.tsx";
import BountiesModalProgress from "BountiesModalProgress.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({
  View: hasOwnProperty,
  StyleSheet: metroRequire,
  ActivityIndicator: closure_7,
  Pressable: closure_8,
} = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10, Fragment: closure_11 } = jsxProd);
const PlatformUtils = fn(1151);
let closure_13 = { top: 48, bottom: 16, left: 16, right: 16 };
const lg = nativeDefault.radii.lg;
const createStyles = fn(4636);
let closure_15 = createStyles.createStyles(() => {
  let obj = { videoContainer: null, leftRow: null, progress: null, poster: null };
  obj = {};
  const merged = Object.assign(timestampProducer.absoluteFillObject);
  obj.overflow = "hidden";
  obj.borderRadius = lg;
  obj.videoContainer = obj;
  const rect = {
    position: "absolute",
    top: nativeDefault.space.PX_8,
    left: nativeDefault.space.PX_8,
    flexDirection: "row",
    alignItems: "center",
    gap: nativeDefault.space.PX_8,
  };
  obj.leftRow = rect;
  const rect1 = {
    position: "absolute",
    bottom: 0,
    height: BountiesModalProgress.PROGRESS_BAR_HEIGHT,
    left: lg,
    right: lg,
  };
  obj.progress = rect1;
  obj = {};
  const merged1 = Object.assign(timestampProducer.absoluteFillObject);
  obj.backgroundColor = "#000000";
  obj.justifyContent = "center";
  obj.alignItems = "center";
  obj.poster = obj;
  return obj;
});
const __initData = {
  code: "function BountyVideoTsx1(){const{posterOpacity}=this.__closure;return{opacity:posterOpacity.get()};}",
};
const __initData2 = {
  code: "function BountyVideoTsx2(){const{isScrollingInBoundsSharedValue,withTiming,isActive,timingStandard}=this.__closure;var _isScrollingInBoundsS;const isScrollingInBounds=((_isScrollingInBoundsS=isScrollingInBoundsSharedValue)===null||_isScrollingInBoundsS===void 0?void 0:_isScrollingInBoundsS.get())===true;return{opacity:withTiming(isActive&&!isScrollingInBounds?1:0,timingStandard)};}",
};
const __initData3 = {
  code: "function BountyVideoTsx3(){const{videoEndPeekScale,height}=this.__closure;if(videoEndPeekScale==null){return{};}const scale=videoEndPeekScale.get();if(scale>=1){return{};}const centerPivotCompensation=height*(1-scale)/2;return{transform:[{translateY:-centerPivotCompensation},{scale:scale}]};}",
};
let size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/BountiesModal/BountyVideo.tsx");

export const BountyVideo = function BountyVideo(bounty) {
  bounty = bounty.bounty;
  ({ isCtaVisible, isEndCardVisible, isScrollIndicatorEnabled } = bounty);
  ({ sourceQuestContent, isCompleted } = bounty);
  if (isScrollIndicatorEnabled === undefined) {
    isScrollIndicatorEnabled = false;
  }
  const handleVideoProgress = bounty.handleVideoProgress;
  const handleVideoError = bounty.handleVideoError;
  const onFirstFrame = bounty.onFirstFrame;
  ({
    isActive,
    isProgressBarVisible,
    orbsBalance,
    handleVideoEnd,
    handleVideoPaused,
    handleVideoResumed,
    onLoadStart,
    onBuffer,
    onVideoTracks,
    rewardRemainingSeconds,
    rewardTotalSeconds,
    normalizedProgress,
    initialProgress,
    repeat,
  } = bounty);
  if (isActive === undefined) {
    isActive = false;
  }
  let flag = bounty.isRecapPageRevealed;
  if (flag === undefined) {
    flag = false;
  }
  const isScrollingInBoundsSharedValue = bounty.isScrollingInBoundsSharedValue;
  ({ renderEndCard, shouldLoadHls, playerRef, onPlayerStateChange, balanceWidgetPillResetKey } = bounty);
  if (shouldLoadHls === undefined) {
    shouldLoadHls = true;
  }
  const width = bounty.width;
  const height = bounty.height;
  const videoEndPeekScale = bounty.videoEndPeekScale;
  let flag2 = bounty.softDownloadCapsEnabled;
  if (flag2 === undefined) {
    flag2 = false;
  }
  c9 = undefined;
  let first;
  closure_11 = undefined;
  let sharedValue;
  let callback;
  const tmp = closure_15();
  if (flag2) {
    flag2 = !isActive;
  }
  let obj = isActive;
  [tmp3, c9] = onFirstFrame(isActive.useState(false), 2);
  const tmp4 = onFirstFrame(isActive.useState(false), 2);
  first = tmp4[0];
  closure_11 = tmp6;
  isActive.useRef(null);
  let obj1 = bounty(handleVideoError[9]);
  sharedValue = obj1.useSharedValue(1);
  let items = [bounty, width, height];
  const memo = isActive.useMemo(() => {
    const size = { assetUrl: bounty.videoHls, width, height };
    return AssetUtils.getScaledFirstFrameImageUrl(size);
  }, items);
  let obj3 = bounty(handleVideoError[10]);
  const token = obj3.useToken(handleVideoProgress(handleVideoError[6]).colors.TEXT_DEFAULT);
  const combined = "" + bounty.id + ":" + shouldLoadHls;
  const tmp13 = onFirstFrame(isActive.useState(combined), 2);
  if (tmp13[0] !== combined) {
    tmp13[1](combined);
    tmp6(false);
    let result = sharedValue.set(1);
  }
  const items1 = [combined];
  const effect = obj.useEffect(
    () => () => {
      if (null != ref.current) {
        const _clearTimeout = clearTimeout;
        clearTimeout(ref.current);
        ref.current = null;
      }
    },
    items1,
  );
  const items2 = [first, sharedValue];
  const effect1 = obj.useEffect(() => {
    if (first) {
      const result = sharedValue.set(timing.withTiming(0, timingPresets.timingFast));
    }
  }, items2);
  callback = obj.useCallback(() => {
    if (null != ref.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(ref.current);
      ref.current = null;
    }
    closure_11(true);
  }, []);
  const items3 = [onFirstFrame];
  const items4 = [callback, handleVideoError];
  const callback1 = obj.useCallback(() => {
    if (onFirstFrame != null) {
      tmp();
    }
    if (null != ref.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(ref.current);
    }
    ref.current = setTimeout(() => {
      closure_1_11(true);
      ref.current = null;
    }, num);
  }, items3);
  const items5 = [handleVideoProgress];
  const callback2 = obj.useCallback((arg0) => {
    callback();
    if (handleVideoError != null) {
      tmp2(arg0);
    }
  }, items4);
  const callback3 = obj.useCallback((currentTime) => {
    if (currentTime.currentTime > 0) {
      _undefined(true);
    }
    handleVideoProgress(currentTime);
  }, items5);
  let tmp7Result = tmp7(tmp8[9]);
  function ve() {
    return { opacity: sharedValue.get() };
  }
  ve.__closure = { posterOpacity: sharedValue };
  ve.__workletHash = 4975136521719;
  ve.__initData = __initData;
  const animatedStyle = tmp7Result.useAnimatedStyle(ve);
  tmp7Result = tmp7(tmp8[9]);
  class Pe {
    constructor() {
      obj = closure_5;
      if (closure_5 != null) {
        value = obj.get();
      }
      tmp2 = closure_0;
      tmp3 = closure_2;
      obj2 = closure_0(closure_2[11]);
      num = 0;
      if (c4) {
        flag = true;
        num = 0;
        if (true !== value) {
          num = 1;
        }
      }
      obj = { opacity: obj2.withTiming(num, tmp2(tmp3[12]).timingStandard) };
      return obj;
    }
  }
  obj = {
    isScrollingInBoundsSharedValue,
    withTiming: tmp7(tmp8[11]).withTiming,
    isActive,
    timingStandard: tmp7(tmp8[12]).timingStandard,
  };
  Pe.__closure = obj;
  Pe.__workletHash = 12676706441349;
  Pe.__initData = __initData2;
  const animatedStyle1 = tmp7Result.useAnimatedStyle(Pe);
  const tmp2 = onFirstFrame(isActive.useState(false), 2);
  class Ve {
    constructor() {
      obj = videoEndPeekScale;
      if (null == videoEndPeekScale) {
        return {};
      } else {
        value = obj.get();
        num = 1;
        if (value >= 1) {
          obj = {};
        } else {
          obj = { transform: null };
          obj1 = { translateY: null };
          tmp2 = height;
          num2 = 2;
          obj1.translateY = (-height * (1 - value)) / 2;
          items = [,];
          items[0] = obj1;
          obj2 = { scale: null };
          obj2.scale = value;
          items[1] = obj2;
          obj.transform = items;
        }
        return obj;
      }
    }
  }
  Ve.__closure = { videoEndPeekScale, height };
  Ve.__workletHash = 598751147346;
  Ve.__initData = __initData3;
  const animatedStyle2 = bounty(handleVideoError[9]).useAnimatedStyle(Ve);
  const tmp7Result1 = bounty(handleVideoError[9]);
  const bountyVideoEndAppStoreContext = bounty(handleVideoError[13]).useBountyVideoEndAppStoreContext();
  let prop1 = null;
  if (true === isActive) {
    let prop;
    if (bountyVideoEndAppStoreContext != null) {
      prop = bountyVideoEndAppStoreContext.isVideoEndAppStoreOverlayVisible;
    }
    prop1 = null;
    if (true === prop) {
      prop1 = bountyVideoEndAppStoreContext.dismissVideoEndAppStoreOverlay;
    }
  }
  if (isScrollIndicatorEnabled) {
    let prop2;
    if (bountyVideoEndAppStoreContext != null) {
      prop2 = bountyVideoEndAppStoreContext.isVideoEndAppStoreOverlayVisible;
    }
    isScrollIndicatorEnabled = true !== prop2;
  }
  obj = { style: null, children: null };
  const items6 = [width.absoluteFillObject, animatedStyle2];
  obj.style = items6;
  obj1 = { style: tmp.videoContainer, children: null };
  let tmp35Result = null;
  if (shouldLoadHls) {
    const obj2 = {
      ref: playerRef,
      source: null,
      automaticallyWaitsToMinimizeStalling: false,
      maxBitRate: null,
      bufferConfig: null,
      preferredForwardBufferDuration: null,
      initialProgress: null,
      isFullscreen: false,
      externallyPaused: null,
      style: null,
      contentInsets: null,
      onProgress: null,
      onEnd: null,
      onPausePlayback: null,
      onResumePlayback: null,
      onError: null,
      onLoadStart: null,
      onBuffer: null,
      onReadyForDisplay: null,
      onVideoTracks: null,
      hideControls: null,
      showSkipButtons: false,
      repeat: null,
      bufferingSpinnerPlacement: "center",
      onPlayerStateChange: null,
    };
    obj3 = { uri: bounty.videoHls };
    obj2.source = obj3;
    let prop3;
    if (flag2) {
      prop3 = tmp7(tmp8[15]).SOFT_CAP_PRELOAD_MAX_BITRATE;
    }
    obj2.maxBitRate = prop3;
    let prop4;
    if (flag2) {
      prop4 = tmp7(tmp8[15]).SOFT_CAP_PRELOAD_BUFFER_CONFIG;
    }
    obj2.bufferConfig = prop4;
    let prop5;
    if (flag2) {
      prop5 = tmp7(tmp8[15]).SOFT_CAP_PRELOAD_FORWARD_BUFFER_SEC;
    }
    obj2.preferredForwardBufferDuration = prop5;
    obj2.initialProgress = initialProgress;
    let tmp39 = !isActive;
    if (isActive) {
      tmp39 = isEndCardVisible;
    }
    if (!tmp39) {
      tmp39 = flag;
    }
    obj2.externallyPaused = tmp39;
    obj2.style = tmp32.absoluteFillObject;
    obj2.contentInsets = sharedValue;
    obj2.onProgress = callback3;
    obj2.onEnd = handleVideoEnd;
    obj2.onPausePlayback = handleVideoPaused;
    obj2.onResumePlayback = handleVideoResumed;
    obj2.onError = callback2;
    obj2.onLoadStart = onLoadStart;
    obj2.onBuffer = onBuffer;
    obj2.onReadyForDisplay = callback1;
    obj2.onVideoTracks = onVideoTracks;
    obj2.hideControls = isEndCardVisible;
    obj2.repeat = repeat;
    obj2.onPlayerStateChange = onPlayerStateChange;
    tmp35Result = c9(tmp7(tmp8[14]).AdVideoPlayer, obj2);
  }
  const items7 = [tmp35Result, , , , ,];
  if (null != memo) {
    const obj4 = { style: null, pointerEvents: "none", children: null };
    const items8 = [tmp.poster, animatedStyle];
    obj4.style = items8;
    const obj5 = { style: tmp32.absoluteFillObject, source: null, resizeMode: "cover" };
    const obj6 = { uri: memo };
    obj5.source = obj6;
    const items9 = [c9(tmp10(tmp8[16]), obj5)];
    let tmp43Result = !first;
    if (!first) {
      const obj7 = { animating: true, size: "small", color: token };
      tmp43Result = tmp43(height, obj7);
    }
    items9[1] = tmp43Result;
    obj4.children = items9;
    let tmp30Result = tmp30(tmp10(tmp8[9]).View, obj4);
    let tmp41 = tmp43;
  } else {
    tmp41 = c9;
    const obj8 = { style: null, pointerEvents: "none" };
    const items10 = [tmp.poster, animatedStyle];
    obj8.style = items10;
    tmp30Result = c9(tmp10(tmp8[9]).View, obj8);
  }
  items7[1] = tmp30Result;
  let renderEndCardResult;
  if (renderEndCard != null) {
    renderEndCardResult = renderEndCard();
  }
  items7[2] = renderEndCardResult;
  let tmp41Result = null;
  if (null != prop1) {
    const obj9 = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, style: null };
    const intl = tmp7(tmp8[17]).intl;
    obj9.accessibilityLabel = intl.string(tmp7(tmp8[17]).t.dcl9MQ);
    obj9.onPress = prop1;
    obj9.style = tmp32.absoluteFillObject;
    tmp41Result = tmp41(videoEndPeekScale, obj9);
  }
  items7[3] = tmp41Result;
  if (isScrollIndicatorEnabled) {
    const obj10 = { opacityStyle: animatedStyle1, enabled: null, isEndCardVisible: null };
    let tmp10Result = tmp10(tmp8[18]);
    if (isActive) {
      isActive = tmp3;
    }
    obj10.enabled = isActive;
    obj10.isEndCardVisible = isEndCardVisible;
    isScrollIndicatorEnabled = tmp41(tmp10Result, obj10);
  }
  items7[4] = isScrollIndicatorEnabled;
  const obj11 = { style: null, pointerEvents: "box-none", children: null };
  const items11 = [width.absoluteFillObject, animatedStyle1];
  obj11.style = items11;
  const obj12 = { bounty, visible: null, sourceQuestContent: null };
  tmp10Result = tmp10(tmp8[19]);
  if (isCtaVisible) {
    isCtaVisible = !isEndCardVisible;
  }
  const obj13 = { children: null };
  obj12.visible = isCtaVisible;
  obj12.sourceQuestContent = sourceQuestContent;
  obj11.children = tmp41(tmp10Result, obj12);
  items7[5] = tmp41(handleVideoProgress(handleVideoError[9]).View, obj11);
  obj1.children = items7;
  const items12 = [first(isScrollingInBoundsSharedValue, obj1)];
  const obj14 = {
    style: null,
    children: tmp41(handleVideoProgress(handleVideoError[8]), {
      progress: normalizedProgress,
      visible: isProgressBarVisible,
    }),
  };
  const items13 = [tmp.progress, animatedStyle1];
  obj14.style = items13;
  items12[1] = tmp41(handleVideoProgress(handleVideoError[9]).View, obj14);
  obj.children = items12;
  const items14 = [first(handleVideoProgress(handleVideoError[9]).View, obj)];
  const obj15 = { style: null, children: null };
  const items15 = [tmp.leftRow, animatedStyle1];
  obj15.style = items15;
  const items16 = [
    tmp41(handleVideoProgress(handleVideoError[20]), {
      isCompleted,
      totalSeconds: rewardTotalSeconds,
      remainingSeconds: rewardRemainingSeconds,
    }),
    tmp41(bounty(handleVideoError[21]).BalanceWidgetPill, { balance: orbsBalance }, balanceWidgetPillResetKey),
  ];
  obj15.children = items16;
  items14[1] = first(handleVideoProgress(handleVideoError[9]).View, obj15);
  obj13.children = items14;
  return first(closure_11, obj13);
};
