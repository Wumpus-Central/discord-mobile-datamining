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
const BountiesModalConstants = fn(14718);
({ getBountyVideoEndPeekClipHeight: closure_9, getBountyVideoEndPeekScale: c10 } = BountiesModalConstants);
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12, Fragment: map1 } = jsxProd);
const PlatformUtils = fn(1365);
let closure_15 = { top: 48, bottom: 16, left: 16, right: 16 };
const lg = nativeDefault.radii.lg;
const createStyles = fn(4836);
let closure_17 = createStyles.createStyles(() => {
  const obj = { videoContainer: null, leftRow: null, progress: null, poster: null };
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
  let flag2 = bounty.softDownloadCapsEnabled;
  if (flag2 === undefined) {
    flag2 = false;
  }
  c8 = undefined;
  let getBountyVideoEndPeekClipHeight;
  getBountyVideoEndPeekScale = undefined;
  let ref;
  let sharedValue;
  let callback;
  let videoEndPeekProgress;
  num = undefined;
  const tmp = closure_17();
  if (flag2) {
    flag2 = !isActive;
  }
  [tmp3, c8] = onFirstFrame(isActive.useState(false), 2);
  const tmp4 = onFirstFrame(isActive.useState(false), 2);
  getBountyVideoEndPeekClipHeight = tmp4[0];
  getBountyVideoEndPeekScale = tmp6;
  ref = isActive.useRef(null);
  const tmp2 = onFirstFrame(isActive.useState(false), 2);
  sharedValue = bounty(handleVideoError[10]).useSharedValue(1);
  let items = [bounty, width, height];
  const memo = isActive.useMemo(() => {
    const size = { assetUrl: bounty.videoHls, width, height };
    return AssetUtils.getScaledFirstFrameImageUrl(size);
  }, items);
  let obj2 = bounty(handleVideoError[10]);
  const token = bounty(handleVideoError[11]).useToken(handleVideoProgress(handleVideoError[7]).colors.TEXT_DEFAULT);
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
  const items2 = [getBountyVideoEndPeekClipHeight, sharedValue];
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
    closure_10(true);
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
      closure_1_10(true);
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
  const obj4 = bounty(handleVideoError[11]);
  class Ve {
    constructor() {
      obj = { opacity: closure_12.get() };
      return obj;
    }
  }
  Ve.__closure = { posterOpacity: sharedValue };
  Ve.__workletHash = 4975136521719;
  Ve.__initData = __initData;
  const animatedStyle = bounty(handleVideoError[10]).useAnimatedStyle(Ve);
  const tmp7Result = bounty(handleVideoError[10]);
  class Be {
    constructor() {
      obj = closure_5;
      if (closure_5 != null) {
        value = obj.get();
      }
      tmp2 = closure_0;
      tmp3 = closure_2;
      obj2 = closure_0(closure_2[12]);
      num = 0;
      if (c4) {
        flag = true;
        num = 0;
        if (true !== value) {
          num = 1;
        }
      }
      obj1 = { opacity: obj2.withTiming(num, tmp2(tmp3[13]).timingStandard) };
      return obj1;
    }
  }
  const tmp7Result5 = bounty(handleVideoError[10]);
  Be.__closure = {
    isScrollingInBoundsSharedValue,
    withTiming: bounty(handleVideoError[12]).withTiming,
    isActive,
    timingStandard: bounty(handleVideoError[13]).timingStandard,
  };
  Be.__workletHash = 12676706441349;
  Be.__initData = __initData2;
  const animatedStyle1 = tmp7Result5.useAnimatedStyle(Be);
  let obj3 = {
    isScrollingInBoundsSharedValue,
    withTiming: bounty(handleVideoError[12]).withTiming,
    isActive,
    timingStandard: bounty(handleVideoError[13]).timingStandard,
  };
  const bountyVideoEndAppStoreContext = bounty(handleVideoError[14]).useBountyVideoEndAppStoreContext();
  let tmp26;
  if (isActive) {
    videoEndPeekProgress = undefined;
    if (bountyVideoEndAppStoreContext != null) {
      videoEndPeekProgress = bountyVideoEndAppStoreContext.videoEndPeekProgress;
    }
    tmp26 = videoEndPeekProgress;
  }
  videoEndPeekProgress = tmp26;
  num = undefined;
  if (bountyVideoEndAppStoreContext != null) {
    num = bountyVideoEndAppStoreContext.videoEndPeekTargetScale;
  }
  if (num == null) {
    num = 1;
  }
  const tmp7Result6 = bounty(handleVideoError[14]);
  function we() {
    if (null == videoEndPeekProgress) {
      return timestampProducer.absoluteFillObject;
    } else {
      value = videoEndPeekProgress.get();
      const tmp5 = getBountyVideoEndPeekScale(value, num);
      const tmp9 = React7(value, width, height);
      const size = {
        position: "absolute",
        top: 0,
        left: 0,
        width,
        height: tmp9,
        overflow: "hidden",
        borderRadius: lg,
        transform: null,
      };
      const obj2 = { translateY: (-tmp9 * (1 - tmp5)) / 2 };
      const items = [obj2];
      const obj3 = { scale: tmp5 };
      items[1] = obj3;
      size.transform = items;
      return size;
    }
  }
  let size = {
    videoEndPeekProgress: tmp26,
    StyleSheet: width,
    getBountyVideoEndPeekScale,
    videoEndPeekTargetScale: num,
    getBountyVideoEndPeekClipHeight,
    width,
    height,
    VIDEO_CONTAINER_BORDER_RADIUS: lg,
  };
  we.__closure = size;
  we.__workletHash = 15166247334410;
  we.__initData = __initData3;
  const animatedStyle2 = bounty(handleVideoError[10]).useAnimatedStyle(we);
  const tmp7Result7 = bounty(handleVideoError[10]);
  function ke() {
    if (null == videoEndPeekProgress) {
      return timestampProducer.absoluteFillObject;
    } else {
      const size = { width, height, transform: null };
      const obj2 = { translateY: (React7(videoEndPeekProgress.get(), width, height) - height) / 2 };
      const items = [obj2];
      size.transform = items;
      return size;
    }
  }
  ke.__closure = { videoEndPeekProgress: tmp26, StyleSheet: width, getBountyVideoEndPeekClipHeight, width, height };
  ke.__workletHash = 2490405119892;
  ke.__initData = __initData4;
  let prop1 = null;
  const animatedStyle3 = bounty(handleVideoError[10]).useAnimatedStyle(ke);
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
  let tmp36Result = null;
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
    const obj9 = { uri: bounty.videoHls };
    obj8.source = obj9;
    let prop3;
    if (flag2) {
      prop3 = tmp7(tmp8[16]).SOFT_CAP_PRELOAD_MAX_BITRATE;
    }
    obj8.maxBitRate = prop3;
    let prop4;
    if (flag2) {
      prop4 = tmp7(tmp8[16]).SOFT_CAP_PRELOAD_BUFFER_CONFIG;
    }
    obj8.bufferConfig = prop4;
    let prop5;
    if (flag2) {
      prop5 = tmp7(tmp8[16]).SOFT_CAP_PRELOAD_FORWARD_BUFFER_SEC;
    }
    obj8.preferredForwardBufferDuration = prop5;
    obj8.initialProgress = initialProgress;
    let tmp42 = !isActive;
    if (isActive) {
      tmp42 = isEndCardVisible;
    }
    if (!tmp42) {
      tmp42 = flag;
    }
    obj8.externallyPaused = tmp42;
    obj8.style = tmp28.absoluteFillObject;
    obj8.contentInsets = num;
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
    tmp36Result = tmp36(tmp7(tmp8[15]).AdVideoPlayer, obj8);
  }
  const items6 = [tmp36Result, , , , ,];
  if (null != memo) {
    const obj10 = { style: null, pointerEvents: "none", children: null };
    const items7 = [tmp.poster, animatedStyle];
    obj10.style = items7;
    const obj11 = { style: tmp28.absoluteFillObject, source: null, resizeMode: "cover" };
    const obj12 = { uri: memo };
    obj11.source = obj12;
    const items8 = [tmp36(tmp10(tmp8[17]), obj11)];
    let tmp36Result3 = !getBountyVideoEndPeekClipHeight;
    if (!getBountyVideoEndPeekClipHeight) {
      const obj13 = { animating: true, size: "small", color: token };
      tmp36Result3 = tmp36(height, obj13);
    }
    items8[1] = tmp36Result3;
    obj10.children = items8;
    let tmp36Result4 = tmp34(tmp10(tmp8[10]).View, obj10);
  } else {
    const obj14 = { style: null, pointerEvents: "none" };
    const items9 = [tmp.poster, animatedStyle];
    obj14.style = items9;
    tmp36Result4 = tmp36(tmp10(tmp8[10]).View, obj14);
  }
  items6[1] = tmp36Result4;
  let renderEndCardResult;
  if (renderEndCard != null) {
    renderEndCardResult = renderEndCard();
  }
  items6[2] = renderEndCardResult;
  let tmp36Result5 = null;
  if (null != prop1) {
    const obj15 = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, style: null };
    const intl = tmp7(tmp8[18]).intl;
    obj15.accessibilityLabel = intl.string(tmp7(tmp8[18]).t.dcl9MQ);
    obj15.onPress = prop1;
    obj15.style = tmp28.absoluteFillObject;
    tmp36Result5 = tmp36(c8, obj15);
  }
  items6[3] = tmp36Result5;
  if (isScrollIndicatorEnabled) {
    const obj16 = { opacityStyle: animatedStyle1, enabled: null, isEndCardVisible: null };
    if (isActive) {
      isActive = tmp3;
    }
    obj16.enabled = isActive;
    obj16.isEndCardVisible = isEndCardVisible;
    isScrollIndicatorEnabled = tmp36(tmp10(tmp8[19]), obj16);
    const tmp10Result = tmp10(tmp8[19]);
  }
  items6[4] = isScrollIndicatorEnabled;
  const obj17 = { style: null, pointerEvents: "box-none", children: null };
  const items10 = [width.absoluteFillObject, animatedStyle1];
  obj17.style = items10;
  const obj18 = { bounty, visible: null, sourceQuestContent: null };
  const tmp35 = callback;
  const tmp37 = isScrollingInBoundsSharedValue;
  const tmp7Result8 = bounty(handleVideoError[10]);
  if (isCtaVisible) {
    isCtaVisible = !isEndCardVisible;
  }
  const obj19 = { children: null };
  obj18.visible = isCtaVisible;
  obj18.sourceQuestContent = sourceQuestContent;
  obj17.children = ref(handleVideoProgress(handleVideoError[20]), obj18);
  items6[5] = ref(handleVideoProgress(handleVideoError[10]).View, obj17);
  obj7.children = items6;
  const items11 = [sharedValue(tmp37, obj7)];
  const obj20 = {
    style: null,
    children: ref(handleVideoProgress(handleVideoError[9]), {
      progress: normalizedProgress,
      visible: isProgressBarVisible,
    }),
  };
  const items12 = [tmp.progress, animatedStyle1];
  obj20.style = items12;
  items11[1] = ref(handleVideoProgress(handleVideoError[10]).View, obj20);
  obj6.children = items11;
  obj5.children = sharedValue(handleVideoProgress(handleVideoError[10]).View, obj6);
  const items13 = [ref(handleVideoProgress(handleVideoError[10]).View, obj5)];
  const obj21 = { style: null, children: null };
  const items14 = [tmp.leftRow, animatedStyle1];
  obj21.style = items14;
  const items15 = [
    ref(handleVideoProgress(handleVideoError[21]), {
      isCompleted,
      totalSeconds: rewardTotalSeconds,
      remainingSeconds: rewardRemainingSeconds,
    }),
    ref(bounty(handleVideoError[22]).BalanceWidgetPill, { balance: orbsBalance }, balanceWidgetPillResetKey),
  ];
  obj21.children = items15;
  items13[1] = sharedValue(handleVideoProgress(handleVideoError[10]).View, obj21);
  obj19.children = items13;
  return sharedValue(tmp35, obj19);
};
