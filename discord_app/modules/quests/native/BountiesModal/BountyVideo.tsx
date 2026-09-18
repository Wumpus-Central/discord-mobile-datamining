// === Module 15241: BountyVideo ===

// Module 15241 (BountyVideo)
import nativeDefault from "native" /* 576 */;
import timing from "timing" /* 4723 */;
import timingPresets from "timingPresets" /* 4726 */;
import AssetUtils from "AssetUtils" /* 11537 */;
import BountiesModalProgress from "BountiesModalProgress" /* 15242 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, StyleSheet: metroRequire, ActivityIndicator: closure_7, Pressable: closure_8 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10, Fragment: closure_11 } = jsxProd);
const PlatformUtils = fn(1365);
let closure_13 = { top: 48, bottom: 16, left: 16, right: 16 };
const lg = nativeDefault.radii.lg;
const createStyles = fn(4722);
let closure_15 = createStyles.createStyles(() => {
  const obj = { videoContainer: null, leftRow: null, progress: null, poster: null };
  const obj2 = {};
  const merged = Object.assign(timestampProducer.absoluteFillObject);
  obj2.overflow = "hidden";
  obj2.borderRadius = lg;
  obj.videoContainer = obj2;
  const rect = { position: "absolute", top: nativeDefault.space.PX_8, left: nativeDefault.space.PX_8, flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
  obj.leftRow = rect;
  const rect1 = { position: "absolute", bottom: 0, height: BountiesModalProgress.PROGRESS_BAR_HEIGHT, left: lg, right: lg };
  obj.progress = rect1;
  const obj3 = {};
  const merged1 = Object.assign(timestampProducer.absoluteFillObject);
  obj3.backgroundColor = "#000000";
  obj3.justifyContent = "center";
  obj3.alignItems = "center";
  obj.poster = obj3;
  return obj;
});
const __initData = { code: "function BountyVideoTsx1(){const{posterOpacity}=this.__closure;return{opacity:posterOpacity.get()};}" };
const __initData2 = { code: "function BountyVideoTsx2(){const{isScrollingInBoundsSharedValue,withTiming,isActive,timingStandard}=this.__closure;var _isScrollingInBoundsS;const isScrollingInBounds=((_isScrollingInBoundsS=isScrollingInBoundsSharedValue)===null||_isScrollingInBoundsS===void 0?void 0:_isScrollingInBoundsS.get())===true;return{opacity:withTiming(isActive&&!isScrollingInBounds?1:0,timingStandard)};}" };
const __initData3 = { code: "function BountyVideoTsx3(){const{videoEndPeekScale,height}=this.__closure;if(videoEndPeekScale==null){return{};}const scale=videoEndPeekScale.get();if(scale>=1){return{};}const centerPivotCompensation=height*(1-scale)/2;return{transform:[{translateY:-centerPivotCompensation},{scale:scale}]};}" };
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
  ({ isActive, isProgressBarVisible, orbsBalance, handleVideoEnd, handleVideoPaused, handleVideoResumed, onLoadStart, onBuffer, onVideoTracks, rewardRemainingSeconds, rewardTotalSeconds, normalizedProgress, initialProgress, repeat } = bounty);
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
  [tmp3, c9] = onFirstFrame(isActive.useState(false), 2);
  const tmp4 = onFirstFrame(isActive.useState(false), 2);
  first = tmp4[0];
  closure_11 = tmp6;
  isActive.useRef(null);
  const tmp2 = onFirstFrame(isActive.useState(false), 2);
  sharedValue = bounty(handleVideoError[9]).useSharedValue(1);
  let items = [bounty, width, height];
  const memo = isActive.useMemo(() => {
    const size = { assetUrl: bounty.videoHls, width, height };
    return AssetUtils.getScaledFirstFrameImageUrl(size);
  }, items);
  let obj2 = bounty(handleVideoError[9]);
  const token = bounty(handleVideoError[10]).useToken(handleVideoProgress(handleVideoError[6]).colors.TEXT_DEFAULT);
  const combined = "" + bounty.id + ":" + shouldLoadHls;
  const tmp13 = onFirstFrame(isActive.useState(combined), 2);
  if (tmp13[0] !== combined) {
    tmp13[1](combined);
    tmp6(false);
    let result = sharedValue.set(1);
  }
  const items1 = [combined];
  const effect = obj.useEffect(() => () => {
    if (null != ref.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(ref.current);
      ref.current = null;
    }
  }, items1);
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
  let obj4 = bounty(handleVideoError[10]);
  function ve() {
    return { opacity: sharedValue.get() };
  }
  ve.__closure = { posterOpacity: sharedValue };
  ve.__workletHash = 4975136521719;
  ve.__initData = __initData;
  const animatedStyle = bounty(handleVideoError[9]).useAnimatedStyle(ve);
  const tmp7Result = bounty(handleVideoError[9]);
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
      obj1 = { opacity: obj2.withTiming(num, tmp2(tmp3[12]).timingStandard) };
      return obj1;
    }
  }
  const tmp7Result4 = bounty(handleVideoError[9]);
  Pe.__closure = { isScrollingInBoundsSharedValue, withTiming: bounty(handleVideoError[11]).withTiming, isActive, timingStandard: bounty(handleVideoError[12]).timingStandard };
  Pe.__workletHash = 12676706441349;
  Pe.__initData = __initData2;
  const animatedStyle1 = tmp7Result4.useAnimatedStyle(Pe);
  let obj3 = { isScrollingInBoundsSharedValue, withTiming: bounty(handleVideoError[11]).withTiming, isActive, timingStandard: bounty(handleVideoError[12]).timingStandard };
  class Ve {
    constructor() {
      obj = videoEndPeekScale;
      if (null == videoEndPeekScale) {
        return {};
      } else {
        value = obj.get();
        num = 1;
        if (value >= 1) {
          obj1 = {};
        } else {
          obj1 = { transform: null };
          obj5 = { translateY: null };
          tmp2 = height;
          num2 = 2;
          obj5.translateY = -height * (1 - value) / 2;
          items = [, ];
          items[0] = obj5;
          obj6 = { scale: null };
          obj6.scale = value;
          items[1] = obj6;
          obj1.transform = items;
        }
        return obj1;
      }
    }
  }
  Ve.__closure = { videoEndPeekScale, height };
  Ve.__workletHash = 598751147346;
  Ve.__initData = __initData3;
  const animatedStyle2 = bounty(handleVideoError[9]).useAnimatedStyle(Ve);
  const tmp7Result5 = bounty(handleVideoError[9]);
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
  const obj5 = { style: null, children: null };
  const items6 = [width.absoluteFillObject, animatedStyle2];
  obj5.style = items6;
  const obj6 = { style: tmp.videoContainer, children: null };
  let tmp35Result = null;
  if (shouldLoadHls) {
    const obj7 = { ref: playerRef, source: null, automaticallyWaitsToMinimizeStalling: false, maxBitRate: null, bufferConfig: null, preferredForwardBufferDuration: null, initialProgress: null, isFullscreen: false, externallyPaused: null, style: null, contentInsets: null, onProgress: null, onEnd: null, onPausePlayback: null, onResumePlayback: null, onError: null, onLoadStart: null, onBuffer: null, onReadyForDisplay: null, onVideoTracks: null, hideControls: null, showSkipButtons: false, repeat: null, bufferingSpinnerPlacement: "center", onPlayerStateChange: null };
    const obj8 = { uri: bounty.videoHls };
    obj7.source = obj8;
    let prop3;
    if (flag2) {
      prop3 = tmp7(tmp8[15]).SOFT_CAP_PRELOAD_MAX_BITRATE;
    }
    obj7.maxBitRate = prop3;
    let prop4;
    if (flag2) {
      prop4 = tmp7(tmp8[15]).SOFT_CAP_PRELOAD_BUFFER_CONFIG;
    }
    obj7.bufferConfig = prop4;
    let prop5;
    if (flag2) {
      prop5 = tmp7(tmp8[15]).SOFT_CAP_PRELOAD_FORWARD_BUFFER_SEC;
    }
    obj7.preferredForwardBufferDuration = prop5;
    obj7.initialProgress = initialProgress;
    let tmp39 = !isActive;
    if (isActive) {
      tmp39 = isEndCardVisible;
    }
    if (!tmp39) {
      tmp39 = flag;
    }
    obj7.externallyPaused = tmp39;
    obj7.style = tmp32.absoluteFillObject;
    obj7.contentInsets = sharedValue;
    obj7.onProgress = callback3;
    obj7.onEnd = handleVideoEnd;
    obj7.onPausePlayback = handleVideoPaused;
    obj7.onResumePlayback = handleVideoResumed;
    obj7.onError = callback2;
    obj7.onLoadStart = onLoadStart;
    obj7.onBuffer = onBuffer;
    obj7.onReadyForDisplay = callback1;
    obj7.onVideoTracks = onVideoTracks;
    obj7.hideControls = isEndCardVisible;
    obj7.repeat = repeat;
    obj7.onPlayerStateChange = onPlayerStateChange;
    tmp35Result = c9(tmp7(tmp8[14]).AdVideoPlayer, obj7);
  }
  const items7 = [tmp35Result, , , , , ];
  if (null != memo) {
    const obj9 = { style: null, pointerEvents: "none", children: null };
    const items8 = [tmp.poster, animatedStyle];
    obj9.style = items8;
    const obj10 = { style: tmp32.absoluteFillObject, source: null, resizeMode: "cover" };
    const obj11 = { uri: memo };
    obj10.source = obj11;
    const items9 = [c9(tmp10(tmp8[16]), obj10), ];
    let tmp43Result = !first;
    if (!first) {
      const obj12 = { animating: true, size: "small", color: token };
      tmp43Result = tmp43(height, obj12);
    }
    items9[1] = tmp43Result;
    obj9.children = items9;
    let tmp30Result = tmp30(tmp10(tmp8[9]).View, obj9);
    let tmp41 = tmp43;
  } else {
    tmp41 = c9;
    const obj13 = { style: null, pointerEvents: "none" };
    const items10 = [tmp.poster, animatedStyle];
    obj13.style = items10;
    tmp30Result = c9(tmp10(tmp8[9]).View, obj13);
  }
  items7[1] = tmp30Result;
  let renderEndCardResult;
  if (renderEndCard != null) {
    renderEndCardResult = renderEndCard();
  }
  items7[2] = renderEndCardResult;
  let tmp41Result = null;
  if (null != prop1) {
    const obj14 = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, style: null };
    const intl = tmp7(tmp8[17]).intl;
    obj14.accessibilityLabel = intl.string(tmp7(tmp8[17]).t.dcl9MQ);
    obj14.onPress = prop1;
    obj14.style = tmp32.absoluteFillObject;
    tmp41Result = tmp41(videoEndPeekScale, obj14);
  }
  items7[3] = tmp41Result;
  if (isScrollIndicatorEnabled) {
    const obj15 = { opacityStyle: animatedStyle1, enabled: null, isEndCardVisible: null };
    if (isActive) {
      isActive = tmp3;
    }
    obj15.enabled = isActive;
    obj15.isEndCardVisible = isEndCardVisible;
    isScrollIndicatorEnabled = tmp41(tmp10(tmp8[18]), obj15);
    const tmp10Result = tmp10(tmp8[18]);
  }
  items7[4] = isScrollIndicatorEnabled;
  const obj16 = { style: null, pointerEvents: "box-none", children: null };
  const items11 = [width.absoluteFillObject, animatedStyle1];
  obj16.style = items11;
  const obj17 = { bounty, visible: null, sourceQuestContent: null };
  const tmp31 = closure_11;
  const tmp33 = isScrollingInBoundsSharedValue;
  const tmp7Result6 = bounty(handleVideoError[13]);
  if (isCtaVisible) {
    isCtaVisible = !isEndCardVisible;
  }
  const obj18 = { children: null };
  obj17.visible = isCtaVisible;
  obj17.sourceQuestContent = sourceQuestContent;
  obj16.children = tmp41(handleVideoProgress(handleVideoError[19]), obj17);
  items7[5] = tmp41(handleVideoProgress(handleVideoError[9]).View, obj16);
  obj6.children = items7;
  const items12 = [first(tmp33, obj6), ];
  const obj19 = { style: null, children: tmp41(handleVideoProgress(handleVideoError[8]), { progress: normalizedProgress, visible: isProgressBarVisible }) };
  const items13 = [tmp.progress, animatedStyle1];
  obj19.style = items13;
  items12[1] = tmp41(handleVideoProgress(handleVideoError[9]).View, obj19);
  obj5.children = items12;
  const items14 = [first(handleVideoProgress(handleVideoError[9]).View, obj5), ];
  const obj20 = { style: null, children: null };
  const items15 = [tmp.leftRow, animatedStyle1];
  obj20.style = items15;
  const items16 = [tmp41(handleVideoProgress(handleVideoError[20]), { isCompleted, totalSeconds: rewardTotalSeconds, remainingSeconds: rewardRemainingSeconds }), tmp41(bounty(handleVideoError[21]).BalanceWidgetPill, { balance: orbsBalance }, balanceWidgetPillResetKey)];
  obj20.children = items16;
  items14[1] = first(handleVideoProgress(handleVideoError[9]).View, obj20);
  obj18.children = items14;
  return first(tmp31, obj18);
};