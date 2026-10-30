// discord_app/modules/quests/native/BountiesModal/BountyVideo.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import timing from "../../../../design/animation/reanimated/timing/timing.tsx";
import timingPresets from "../../../../design/animation/reanimated/timing/timingPresets.tsx";
import LinearGradientDefault from "../../../../../_runtime/05582_LinearGradient.js";
import AssetUtils from "../../lib/AssetUtils.tsx";
import BountiesModalProgress from "BountiesModalProgress.tsx";
import pickBountyVideoRendition from "../../../ads/utils/pickBountyVideoRendition.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import ReanimatedRexport from "../../../reanimated/ReanimatedRexport.tsx";
import n_mod from "../../../../../_runtime/metro/00671__.js";

require = fn;
get_ActivityIndicator = fn(17);
({
  View: hasOwnProperty,
  StyleSheet: metroRequire,
  ActivityIndicator: closure_7,
  Pressable: closure_8,
} = get_ActivityIndicator);
const BountiesModalConstants = fn(16856);
({ getBountyVideoEndPeekClipHeight: closure_9, getBountyVideoEndPeekScale: c10 } = BountiesModalConstants);
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12, Fragment: map1 } = jsxProd);
const PlatformUtils = fn(1377);
let closure_15 = { top: 48, bottom: 16, left: 16, right: 16 };
const lg = nativeDefault.radii.lg;
const LinearGradient = ReanimatedRexport.createAnimatedComponent(LinearGradientDefault);
const start = { x: 0, y: 0 };
const end = { x: 0, y: 1 };
let n = n_mod;
const importDefaultResult1Result = n(nativeDefault.unsafe_rawColors.PLUM_23);
let items = [n(nativeDefault.unsafe_rawColors.PLUM_23).alpha(0.4).hex()];
let n = n_mod;
const alphaResult = n(nativeDefault.unsafe_rawColors.PLUM_23).alpha(0.4);
const importDefaultResult2Result = n(nativeDefault.unsafe_rawColors.PLUM_23);
items[1] = n(nativeDefault.unsafe_rawColors.PLUM_23).alpha(0).hex();
const createStyles = fn(5009);
let closure_21 = createStyles.createStyles(() => {
  const obj = { videoContainer: null, leftRow: null, progress: null, poster: null, scrimGradient: null };
  const obj2 = {};
  const merged = Object.assign(timestampProducer.absoluteFillObject);
  obj2.overflow = "hidden";
  obj2.borderRadius = lg;
  obj.videoContainer = obj2;
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
  const obj3 = {};
  const merged1 = Object.assign(timestampProducer.absoluteFillObject);
  obj3.backgroundColor = "#000000";
  obj3.justifyContent = "center";
  obj3.alignItems = "center";
  obj.poster = obj3;
  const obj4 = {};
  const merged2 = Object.assign(timestampProducer.absoluteFillObject);
  obj4.bottom = undefined;
  obj4.height = 70;
  obj.scrimGradient = obj4;
  return obj;
});
const __initData = {
  code: "function BountyVideoTsx1(){const{posterOpacity}=this.__closure;return{opacity:posterOpacity.get()};}",
};
const __initData2 = {
  code: "function BountyVideoTsx2(){const{isScrollingInBoundsSharedValue,withTiming,isActive,timingStandard}=this.__closure;var _isScrollingInBoundsS;const isScrollingInBounds=((_isScrollingInBoundsS=isScrollingInBoundsSharedValue)===null||_isScrollingInBoundsS===void 0?void 0:_isScrollingInBoundsS.get())===true;return{opacity:withTiming(isActive&&!isScrollingInBounds?1:0,timingStandard)};}",
};
const __initData3 = {
  code: "function BountyVideoTsx3(){const{videoEndPeekProgress,StyleSheet,getBountyVideoEndPeekScale,videoEndPeekTargetScale,getBountyVideoEndPeekClipHeight,width,height,VIDEO_CONTAINER_BORDER_RADIUS}=this.__closure;if(videoEndPeekProgress==null){return StyleSheet.absoluteFillObject;}const progress=videoEndPeekProgress.get();const scale=getBountyVideoEndPeekScale(progress,videoEndPeekTargetScale);const clipHeight=getBountyVideoEndPeekClipHeight(progress,width,height);const centerPivotCompensation=clipHeight*(1-scale)/2;return{position:'absolute',top:0,left:0,width:width,height:clipHeight,overflow:'hidden',borderRadius:VIDEO_CONTAINER_BORDER_RADIUS,transform:[{translateY:-centerPivotCompensation},{scale:scale}]};}",
};
const __initData4 = {
  code: "function BountyVideoTsx4(){const{videoEndPeekProgress,StyleSheet,getBountyVideoEndPeekClipHeight,width,height}=this.__closure;if(videoEndPeekProgress==null){return StyleSheet.absoluteFillObject;}const progress=videoEndPeekProgress.get();const clipHeight=getBountyVideoEndPeekClipHeight(progress,width,height);return{width:width,height:height,transform:[{translateY:(clipHeight-height)/2}]};}",
};
let size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/BountiesModal/BountyVideo.tsx");

export function BountyVideo(handleVideoProgress) {
  ({ bounty, isCtaVisible, isEndCardVisible, isScrollIndicatorEnabled } = handleVideoProgress);
  ({ sourceQuestContent, isCompleted } = handleVideoProgress);
  if (isScrollIndicatorEnabled === undefined) {
    isScrollIndicatorEnabled = false;
  }
  handleVideoProgress = handleVideoProgress.handleVideoProgress;
  const handleVideoError = handleVideoProgress.handleVideoError;
  const onFirstFrame = handleVideoProgress.onFirstFrame;
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
  } = handleVideoProgress);
  if (isActive === undefined) {
    isActive = false;
  }
  let flag = handleVideoProgress.isRecapPageRevealed;
  if (flag === undefined) {
    flag = false;
  }
  const isScrollingInBoundsSharedValue = handleVideoProgress.isScrollingInBoundsSharedValue;
  ({ renderEndCard, shouldLoadHls, playerRef, onPlayerStateChange, balanceWidgetPillResetKey } = handleVideoProgress);
  if (shouldLoadHls === undefined) {
    shouldLoadHls = true;
  }
  const width = handleVideoProgress.width;
  const height = handleVideoProgress.height;
  let flag2 = handleVideoProgress.softDownloadCapsEnabled;
  if (flag2 === undefined) {
    flag2 = false;
  }
  c7 = undefined;
  let first;
  getBountyVideoEndPeekClipHeight = undefined;
  getBountyVideoEndPeekScale = undefined;
  let sharedValue;
  let videoHls;
  let videoRenditions;
  let memo;
  let contentInsets;
  let videoEndPeekProgress;
  num = undefined;
  const tmp = closure_21();
  if (flag2) {
    flag2 = !isActive;
  }
  [tmp3, c7] = isActive(isScrollingInBoundsSharedValue.useState(false), 2);
  const tmp4 = isActive(isScrollingInBoundsSharedValue.useState(false), 2);
  first = tmp4[0];
  getBountyVideoEndPeekClipHeight = tmp6;
  getBountyVideoEndPeekScale = isScrollingInBoundsSharedValue.useRef(null);
  const tmp2 = isActive(isScrollingInBoundsSharedValue.useState(false), 2);
  sharedValue = handleVideoProgress(onFirstFrame[8]).useSharedValue(1);
  videoHls = bounty.videoHls;
  videoRenditions = bounty.videoRenditions;
  items = [videoHls, videoRenditions];
  memo = isScrollingInBoundsSharedValue.useMemo(() => {
    let url = videoHls;
    const result = pickBountyVideoRendition.pickBountyVideoRenditionWithFallback(
      { videoHls, videoRenditions },
      pickBountyVideoRendition.BOUNTY_MOBILE_MODAL_RENDITION_PICK,
    );
    if (null != result) {
      url = result.url;
    }
    return url;
  }, items);
  const items1 = [memo, width, height];
  const memo1 = isScrollingInBoundsSharedValue.useMemo(() => {
    const size = { assetUrl: memo, width, height };
    return AssetUtils.getScaledFirstFrameImageUrl(size);
  }, items1);
  let obj2 = handleVideoProgress(onFirstFrame[8]);
  const token = handleVideoProgress(onFirstFrame[14]).useToken(handleVideoError(onFirstFrame[7]).colors.TEXT_DEFAULT);
  const combined = "" + bounty.id + ":" + shouldLoadHls + ":" + memo;
  const tmp14 = isActive(isScrollingInBoundsSharedValue.useState(combined), 2);
  if (tmp14[0] !== combined) {
    tmp14[1](combined);
    tmp6(false);
    let result = sharedValue.set(1);
  }
  const items2 = [combined];
  const effect = obj.useEffect(
    () => () => {
      if (null != ref.current) {
        const _clearTimeout = clearTimeout;
        clearTimeout(ref.current);
        ref.current = null;
      }
    },
    items2,
  );
  const items3 = [first, sharedValue];
  const effect1 = obj.useEffect(() => {
    if (first) {
      const result = sharedValue.set(timing.withTiming(0, timingPresets.timingFast));
    }
  }, items3);
  contentInsets = obj.useCallback(() => {
    if (null != ref.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(ref.current);
      ref.current = null;
    }
    closure_9(true);
  }, []);
  const items4 = [onFirstFrame];
  const items5 = [contentInsets, handleVideoError];
  const callback1 = obj.useCallback(() => {
    if (onFirstFrame != null) {
      tmp();
    }
    if (null != ref.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(ref.current);
    }
    ref.current = setTimeout(() => {
      closure_1_9(true);
      ref.current = null;
    }, num);
  }, items4);
  const items6 = [handleVideoProgress];
  const callback2 = obj.useCallback((arg0) => {
    callback();
    if (handleVideoError != null) {
      tmp2(arg0);
    }
  }, items5);
  const callback3 = obj.useCallback((currentTime) => {
    if (currentTime.currentTime > 0) {
      _undefined(true);
    }
    handleVideoProgress(currentTime);
  }, items6);
  const obj4 = handleVideoProgress(onFirstFrame[14]);
  class Te {
    constructor() {
      obj = { opacity: closure_11.get() };
      return obj;
    }
  }
  Te.__closure = { posterOpacity: sharedValue };
  Te.__workletHash = 4975136521719;
  Te.__initData = __initData;
  const animatedStyle = handleVideoProgress(onFirstFrame[8]).useAnimatedStyle(Te);
  const tmp7Result = handleVideoProgress(onFirstFrame[8]);
  class Ae {
    constructor() {
      obj = closure_4;
      if (closure_4 != null) {
        value = obj.get();
      }
      tmp2 = closure_0;
      tmp3 = closure_2;
      obj2 = closure_0(closure_2[15]);
      num = 0;
      if (c3) {
        flag = true;
        num = 0;
        if (true !== value) {
          num = 1;
        }
      }
      obj1 = { opacity: obj2.withTiming(num, tmp2(tmp3[16]).timingStandard) };
      return obj1;
    }
  }
  const tmp7Result5 = handleVideoProgress(onFirstFrame[8]);
  Ae.__closure = {
    isScrollingInBoundsSharedValue,
    withTiming: handleVideoProgress(onFirstFrame[15]).withTiming,
    isActive,
    timingStandard: handleVideoProgress(onFirstFrame[16]).timingStandard,
  };
  Ae.__workletHash = 12676706441349;
  Ae.__initData = __initData2;
  const animatedStyle1 = tmp7Result5.useAnimatedStyle(Ae);
  let obj3 = {
    isScrollingInBoundsSharedValue,
    withTiming: handleVideoProgress(onFirstFrame[15]).withTiming,
    isActive,
    timingStandard: handleVideoProgress(onFirstFrame[16]).timingStandard,
  };
  const bountyVideoEndAppStoreContext = handleVideoProgress(onFirstFrame[17]).useBountyVideoEndAppStoreContext();
  let tmp27;
  if (isActive) {
    videoEndPeekProgress = undefined;
    if (bountyVideoEndAppStoreContext != null) {
      videoEndPeekProgress = bountyVideoEndAppStoreContext.videoEndPeekProgress;
    }
    tmp27 = videoEndPeekProgress;
  }
  videoEndPeekProgress = tmp27;
  num = undefined;
  if (bountyVideoEndAppStoreContext != null) {
    num = bountyVideoEndAppStoreContext.videoEndPeekTargetScale;
  }
  if (num == null) {
    num = 1;
  }
  const tmp7Result6 = handleVideoProgress(onFirstFrame[17]);
  class Ie {
    constructor() {
      obj = videoEndPeekProgress;
      if (null == videoEndPeekProgress) {
        tmp = StyleSheet;
        return StyleSheet.absoluteFillObject;
      } else {
        value = obj.get();
        tmp3 = closure_10;
        tmp4 = c17;
        tmp5 = closure_10(value, c17);
        tmp6 = closure_9;
        tmp7 = width;
        tmp8 = height;
        tmp9 = closure_9(value, width, height);
        size = {
          position: "absolute",
          top: 0,
          left: 0,
          width: null,
          height: null,
          overflow: "hidden",
          borderRadius: null,
          transform: null,
        };
        size.width = width;
        size.height = tmp9;
        tmp10 = lg;
        size.borderRadius = lg;
        obj1 = { translateY: null };
        num = 1;
        num2 = 2;
        obj1.translateY = (-tmp9 * (1 - tmp5)) / 2;
        items = [,];
        items[0] = obj1;
        obj5 = { scale: null };
        obj5.scale = tmp5;
        items[1] = obj5;
        size.transform = items;
        return size;
      }
    }
  }
  let size = {
    videoEndPeekProgress: tmp27,
    StyleSheet: height,
    getBountyVideoEndPeekScale,
    videoEndPeekTargetScale: num,
    getBountyVideoEndPeekClipHeight,
    width,
    height,
    VIDEO_CONTAINER_BORDER_RADIUS: videoEndPeekProgress,
  };
  Ie.__closure = size;
  Ie.__workletHash = 15166247334410;
  Ie.__initData = __initData3;
  const animatedStyle2 = handleVideoProgress(onFirstFrame[8]).useAnimatedStyle(Ie);
  const tmp7Result7 = handleVideoProgress(onFirstFrame[8]);
  class Fe {
    constructor() {
      obj = videoEndPeekProgress;
      if (null == videoEndPeekProgress) {
        tmp4 = StyleSheet;
        return StyleSheet.absoluteFillObject;
      } else {
        tmp = closure_9;
        tmp2 = width;
        tmp3 = height;
        size = { width: null, height: null, transform: null };
        size.width = width;
        size.height = height;
        obj1 = { translateY: null };
        num = 2;
        obj1.translateY = (closure_9(obj.get(), width, height) - height) / 2;
        items = [];
        items[0] = obj1;
        size.transform = items;
        return size;
      }
    }
  }
  Fe.__closure = { videoEndPeekProgress: tmp27, StyleSheet: height, getBountyVideoEndPeekClipHeight, width, height };
  Fe.__workletHash = 2490405119892;
  Fe.__initData = __initData4;
  let prop1 = null;
  const animatedStyle3 = handleVideoProgress(onFirstFrame[8]).useAnimatedStyle(Fe);
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
  const obj5 = { style: animatedStyle2, children: null };
  const obj6 = { style: animatedStyle3, children: null };
  const obj7 = { style: tmp.videoContainer, children: null };
  let tmp37Result = null;
  if (shouldLoadHls) {
    const obj8 = {
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
    const obj9 = { uri: memo };
    obj8.source = obj9;
    let prop3;
    if (flag2) {
      prop3 = tmp7(tmp8[19]).SOFT_CAP_PRELOAD_MAX_BITRATE;
    }
    obj8.maxBitRate = prop3;
    let prop4;
    if (flag2) {
      prop4 = tmp7(tmp8[19]).SOFT_CAP_PRELOAD_BUFFER_CONFIG;
    }
    obj8.bufferConfig = prop4;
    let prop5;
    if (flag2) {
      prop5 = tmp7(tmp8[19]).SOFT_CAP_PRELOAD_FORWARD_BUFFER_SEC;
    }
    obj8.preferredForwardBufferDuration = prop5;
    obj8.initialProgress = initialProgress;
    let tmp43 = !isActive;
    if (isActive) {
      tmp43 = isEndCardVisible;
    }
    if (!tmp43) {
      tmp43 = flag;
    }
    obj8.externallyPaused = tmp43;
    obj8.style = tmp29.absoluteFillObject;
    obj8.contentInsets = contentInsets;
    obj8.onProgress = callback3;
    obj8.onEnd = handleVideoEnd;
    obj8.onPausePlayback = handleVideoPaused;
    obj8.onResumePlayback = handleVideoResumed;
    obj8.onError = callback2;
    obj8.onLoadStart = onLoadStart;
    obj8.onBuffer = onBuffer;
    obj8.onReadyForDisplay = callback1;
    obj8.onVideoTracks = onVideoTracks;
    obj8.hideControls = isEndCardVisible;
    obj8.repeat = repeat;
    obj8.onPlayerStateChange = onPlayerStateChange;
    tmp37Result = tmp37(tmp7(tmp8[18]).AdVideoPlayer, obj8);
  }
  const items7 = [tmp37Result, , , , , ,];
  if (null != memo1) {
    const obj10 = { style: null, pointerEvents: "none", children: null };
    const items8 = [tmp.poster, animatedStyle];
    obj10.style = items8;
    const obj11 = { style: tmp29.absoluteFillObject, source: null, resizeMode: "cover" };
    const obj12 = { uri: memo1 };
    obj11.source = obj12;
    const items9 = [tmp37(tmp11(tmp8[20]), obj11)];
    let tmp37Result3 = !first;
    if (!first) {
      const obj13 = { animating: true, size: "small", color: token };
      tmp37Result3 = tmp37(c7, obj13);
    }
    items9[1] = tmp37Result3;
    obj10.children = items9;
    let tmp37Result4 = tmp35(tmp11(tmp8[8]).View, obj10);
  } else {
    const obj14 = { style: null, pointerEvents: "none" };
    const items10 = [tmp.poster, animatedStyle];
    obj14.style = items10;
    tmp37Result4 = tmp37(tmp11(tmp8[8]).View, obj14);
  }
  items7[1] = tmp37Result4;
  const obj15 = { start, end, style: null, colors: items, pointerEvents: "none" };
  const items11 = [tmp.scrimGradient, animatedStyle1];
  obj15.style = items11;
  items7[2] = sharedValue(num, obj15);
  let renderEndCardResult;
  if (renderEndCard != null) {
    renderEndCardResult = renderEndCard();
  }
  items7[3] = renderEndCardResult;
  let tmp37Result5 = null;
  if (null != prop1) {
    const obj16 = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, style: null };
    const intl = tmp7(tmp8[21]).intl;
    obj16.accessibilityLabel = intl.string(tmp7(tmp8[21]).t.dcl9MQ);
    obj16.onPress = prop1;
    obj16.style = tmp29.absoluteFillObject;
    tmp37Result5 = tmp37(first, obj16);
  }
  items7[4] = tmp37Result5;
  if (isScrollIndicatorEnabled) {
    const obj17 = { opacityStyle: animatedStyle1, enabled: null, isEndCardVisible: null };
    if (isActive) {
      isActive = tmp3;
    }
    obj17.enabled = isActive;
    obj17.isEndCardVisible = isEndCardVisible;
    isScrollIndicatorEnabled = tmp37(tmp11(tmp8[22]), obj17);
    const tmp11Result = tmp11(tmp8[22]);
  }
  items7[5] = isScrollIndicatorEnabled;
  const obj18 = { style: null, pointerEvents: "box-none", children: null };
  const items12 = [height.absoluteFillObject, animatedStyle1];
  obj18.style = items12;
  const obj19 = { bounty, visible: null, sourceQuestContent: null };
  const tmp36 = videoRenditions;
  const tmp38 = width;
  const tmp7Result8 = handleVideoProgress(onFirstFrame[8]);
  if (isCtaVisible) {
    isCtaVisible = !isEndCardVisible;
  }
  const obj20 = { children: null };
  obj19.visible = isCtaVisible;
  obj19.sourceQuestContent = sourceQuestContent;
  obj18.children = sharedValue(handleVideoError(onFirstFrame[23]), obj19);
  items7[6] = sharedValue(handleVideoError(onFirstFrame[8]).View, obj18);
  obj7.children = items7;
  const items13 = [videoHls(tmp38, obj7)];
  const obj21 = {
    style: null,
    children: sharedValue(handleVideoError(onFirstFrame[12]), {
      progress: normalizedProgress,
      visible: isProgressBarVisible,
    }),
  };
  const items14 = [tmp.progress, animatedStyle1];
  obj21.style = items14;
  items13[1] = sharedValue(handleVideoError(onFirstFrame[8]).View, obj21);
  obj6.children = items13;
  obj5.children = videoHls(handleVideoError(onFirstFrame[8]).View, obj6);
  const items15 = [sharedValue(handleVideoError(onFirstFrame[8]).View, obj5)];
  const obj22 = { style: null, children: null };
  const items16 = [tmp.leftRow, animatedStyle1];
  obj22.style = items16;
  const items17 = [
    sharedValue(handleVideoError(onFirstFrame[24]), {
      isCompleted,
      totalSeconds: rewardTotalSeconds,
      remainingSeconds: rewardRemainingSeconds,
    }),
    sharedValue(
      handleVideoProgress(onFirstFrame[25]).BalanceWidgetPill,
      { balance: orbsBalance },
      balanceWidgetPillResetKey,
    ),
  ];
  obj22.children = items17;
  items15[1] = videoHls(handleVideoError(onFirstFrame[8]).View, obj22);
  obj20.children = items15;
  return videoHls(tmp36, obj20);
}
