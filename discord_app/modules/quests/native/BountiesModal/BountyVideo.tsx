// === Module 15024: BountyVideo ===

// Module 15024 (BountyVideo)
import nativeDefault from "native" /* 576 */;
import timing from "timing" /* 4561 */;
import timingPresets from "timingPresets" /* 4564 */;
import AssetUtils from "AssetUtils" /* 11285 */;
import useBountiesAutoScroll from "useBountiesAutoScroll" /* 15012 */;
import BountiesModalProgress from "BountiesModalProgress" /* 15025 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, StyleSheet: metroRequire, ActivityIndicator: closure_7, Pressable: closure_8 } = get_ActivityIndicator);
const QuestsExperimentLocations = fn(5444).QuestsExperimentLocations;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11, Fragment: closure_12 } = jsxProd);
const PlatformUtils = fn(1116);
let closure_14 = { top: 48, bottom: 16, left: 16, right: 16 };
const lg = nativeDefault.radii.lg;
const createStyles = fn(4560);
let closure_16 = createStyles.createStyles(() => {
  let obj = { videoContainer: null, leftRow: null, progress: null, poster: null };
  obj = {};
  const merged = Object.assign(timestampProducer.absoluteFillObject);
  obj.overflow = "hidden";
  obj.borderRadius = lg;
  obj.videoContainer = obj;
  const rect = { position: "absolute", top: nativeDefault.space.PX_8, left: nativeDefault.space.PX_8, flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
  obj.leftRow = rect;
  const rect1 = { position: "absolute", bottom: 0, height: BountiesModalProgress.PROGRESS_BAR_HEIGHT, left: lg, right: lg };
  obj.progress = rect1;
  obj = {};
  const merged1 = Object.assign(timestampProducer.absoluteFillObject);
  obj.backgroundColor = "#000000";
  obj.justifyContent = "center";
  obj.alignItems = "center";
  obj.poster = obj;
  return obj;
});
const __initData = { code: "function BountyVideoTsx1(){const{posterOpacity}=this.__closure;return{opacity:posterOpacity.get()};}" };
const __initData2 = { code: "function BountyVideoTsx2(){const{isScrollingInBoundsSharedValue,withTiming,isActive,timingStandard}=this.__closure;var _isScrollingInBoundsS;const isScrollingInBounds=((_isScrollingInBoundsS=isScrollingInBoundsSharedValue)===null||_isScrollingInBoundsS===void 0?void 0:_isScrollingInBoundsS.get())===true;return{opacity:withTiming(isActive&&!isScrollingInBounds?1:0,timingStandard)};}" };
const __initData3 = { code: "function BountyVideoTsx3(){const{peekScale,AUTO_SCROLL_PEEK_SCALE,height,AUTO_SCROLL_PEEK_TOP_OFFSET}=this.__closure;if(peekScale==null){return{};}const scale=peekScale.get();const scaleProgress=(1-scale)/(1-AUTO_SCROLL_PEEK_SCALE);const centerPivotCompensation=height*(1-scale)/2;return{transform:[{translateY:scaleProgress*AUTO_SCROLL_PEEK_TOP_OFFSET-centerPivotCompensation},{scale:scale}]};}" };
const __initData4 = { code: "function BountyVideoTsx4(){const{videoEndPeekScale,height}=this.__closure;if(videoEndPeekScale==null){return{};}const scale=videoEndPeekScale.get();if(scale>=1){return{};}const centerPivotCompensation=height*(1-scale)/2;return{transform:[{translateY:-centerPivotCompensation},{scale:scale}]};}" };
let size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/BountiesModal/BountyVideo.tsx");

export const BountyVideo = function BountyVideo(bounty) {
  bounty = bounty.bounty;
  ({ isCtaVisible, isEndCardVisible, isScrollIndicatorEnabled, handleVideoProgress } = bounty);
  const handleVideoError = bounty.handleVideoError;
  const onFirstFrame = bounty.onFirstFrame;
  let flag = bounty.isActive;
  ({ sourceQuestContent, isCompleted, isProgressBarVisible, orbsBalance, handleVideoEnd, handleVideoPaused, handleVideoResumed, onLoadStart, onBuffer, onVideoTracks, rewardRemainingSeconds, rewardTotalSeconds, normalizedProgress, initialProgress, repeat } = bounty);
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = bounty.isRecapPageRevealed;
  if (flag2 === undefined) {
    flag2 = false;
  }
  const isScrollingInBoundsSharedValue = bounty.isScrollingInBoundsSharedValue;
  ({ renderEndCard, shouldLoadHls, playerRef, onPlayerStateChange, balanceWidgetPillResetKey } = bounty);
  if (shouldLoadHls === undefined) {
    shouldLoadHls = true;
  }
  const width = bounty.width;
  const height = bounty.height;
  const peekScale = bounty.peekScale;
  const videoEndPeekScale = bounty.videoEndPeekScale;
  let flag3 = bounty.softDownloadCapsEnabled;
  if (flag3 === undefined) {
    flag3 = false;
  }
  c10 = undefined;
  let first;
  closure_12 = undefined;
  let sharedValue;
  let callback;
  const tmp = closure_16();
  let obj = bounty(handleVideoError[10]);
  const bountiesExperience = obj.useBountiesExperience(videoEndPeekScale.VIDEO_MODAL_MOBILE);
  ({ stage1Enabled, ownedByVerticalScrollExperiment } = bountiesExperience);
  let obj1 = bounty(handleVideoError[11]);
  const isBountiesVerticalScrollExperimentEnabled = obj1.useIsBountiesVerticalScrollExperimentEnabled("BountyVideo");
  if (flag3) {
    flag3 = !flag;
  }
  let obj2 = flag;
  [tmp7, c10] = onFirstFrame(flag.useState(false), 2);
  const tmp8 = onFirstFrame(flag.useState(false), 2);
  first = tmp8[0];
  closure_12 = tmp10;
  flag.useRef(null);
  let tmp2Result = tmp2(tmp3[12]);
  sharedValue = tmp2Result.useSharedValue(1);
  let items = [bounty, width, height];
  const memo = flag.useMemo(() => {
    const size = { assetUrl: bounty.videoHls, width, height };
    return AssetUtils.getScaledFirstFrameImageUrl(size);
  }, items);
  tmp2Result = tmp2(tmp3[13]);
  const token = tmp2Result.useToken(handleVideoProgress(tmp3[7]).colors.TEXT_DEFAULT);
  const combined = "" + bounty.id + ":" + shouldLoadHls;
  const tmp15 = onFirstFrame(flag.useState(combined), 2);
  if (tmp15[0] !== combined) {
    tmp15[1](combined);
    tmp10(false);
    let result = sharedValue.set(1);
  }
  const items1 = [combined];
  const effect = obj2.useEffect(() => () => {
    if (null != ref.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(ref.current);
      ref.current = null;
    }
  }, items1);
  const items2 = [first, sharedValue];
  const effect1 = obj2.useEffect(() => {
    if (first) {
      const result = sharedValue.set(timing.withTiming(0, timingPresets.timingFast));
    }
  }, items2);
  callback = obj2.useCallback(() => {
    if (null != ref.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(ref.current);
      ref.current = null;
    }
    closure_12(true);
  }, []);
  const items3 = [onFirstFrame];
  const items4 = [callback, handleVideoError];
  const callback1 = obj2.useCallback(() => {
    if (onFirstFrame != null) {
      tmp();
    }
    if (null != ref.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(ref.current);
    }
    ref.current = setTimeout(() => {
      closure_1_12(true);
      ref.current = null;
    }, num);
  }, items3);
  const items5 = [handleVideoProgress];
  const callback2 = obj2.useCallback((arg0) => {
    callback();
    if (handleVideoError != null) {
      tmp2(arg0);
    }
  }, items4);
  const callback3 = obj2.useCallback((currentTime) => {
    if (currentTime.currentTime > 0) {
      _undefined(true);
    }
    handleVideoProgress(currentTime);
  }, items5);
  const tmp6 = onFirstFrame(flag.useState(false), 2);
  class Ve {
    constructor() {
      obj = { opacity: closure_14.get() };
      return obj;
    }
  }
  Ve.__closure = { posterOpacity: sharedValue };
  Ve.__workletHash = 4975136521719;
  Ve.__initData = __initData;
  const animatedStyle = bounty(handleVideoError[12]).useAnimatedStyle(Ve);
  const tmp2Result1 = bounty(handleVideoError[12]);
  class Be {
    constructor() {
      obj = closure_5;
      if (closure_5 != null) {
        value = obj.get();
      }
      tmp2 = closure_0;
      tmp3 = closure_2;
      obj2 = closure_0(closure_2[14]);
      num = 0;
      if (c4) {
        flag = true;
        num = 0;
        if (true !== value) {
          num = 1;
        }
      }
      obj = { opacity: obj2.withTiming(num, tmp2(tmp3[15]).timingStandard) };
      return obj;
    }
  }
  obj = { isScrollingInBoundsSharedValue, withTiming: tmp2(tmp3[14]).withTiming, isActive: flag, timingStandard: tmp2(tmp3[15]).timingStandard };
  Be.__closure = obj;
  Be.__workletHash = 12676706441349;
  Be.__initData = __initData2;
  const animatedStyle1 = bounty(handleVideoError[12]).useAnimatedStyle(Be);
  const tmp2Result2 = bounty(handleVideoError[12]);
  class Fe {
    constructor() {
      obj = peekScale;
      if (null == peekScale) {
        return {};
      } else {
        value = obj.get();
        obj = { transform: null };
        obj1 = { translateY: null };
        num = 1;
        tmp3 = closure_0;
        tmp4 = closure_2;
        diff = 1 - value;
        diff1 = 1 - closure_0(closure_2[16]).AUTO_SCROLL_PEEK_SCALE;
        tmp6 = height;
        num2 = 2;
        obj1.translateY = diff / diff1 * closure_0(closure_2[16]).AUTO_SCROLL_PEEK_TOP_OFFSET - height * (1 - value) / 2;
        items = [, ];
        items[0] = obj1;
        obj2 = { scale: null };
        obj2.scale = value;
        items[1] = obj2;
        obj.transform = items;
        return obj;
      }
    }
  }
  obj = { peekScale, AUTO_SCROLL_PEEK_SCALE: tmp2(tmp3[16]).AUTO_SCROLL_PEEK_SCALE, height, AUTO_SCROLL_PEEK_TOP_OFFSET: tmp2(tmp3[16]).AUTO_SCROLL_PEEK_TOP_OFFSET };
  Fe.__closure = obj;
  Fe.__workletHash = 13770344279431;
  Fe.__initData = __initData3;
  const animatedStyle2 = bounty(handleVideoError[12]).useAnimatedStyle(Fe);
  const tmp2Result3 = bounty(handleVideoError[12]);
  class Le {
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
          obj1.translateY = -height * (1 - value) / 2;
          items = [, ];
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
  Le.__closure = { videoEndPeekScale, height };
  Le.__workletHash = 9172705764213;
  Le.__initData = __initData4;
  let tmp29 = isCtaVisible;
  const animatedStyle3 = bounty(handleVideoError[12]).useAnimatedStyle(Le);
  if (isBountiesVerticalScrollExperimentEnabled) {
    let tmp30 = isCtaVisible;
    if (isCtaVisible) {
      tmp30 = !isEndCardVisible;
    }
    tmp29 = tmp30;
  }
  const tmp2Result4 = bounty(handleVideoError[12]);
  const bountyVideoEndAppStoreContext = bounty(handleVideoError[17]).useBountyVideoEndAppStoreContext();
  let prop1 = null;
  if (true === flag) {
    let prop;
    if (bountyVideoEndAppStoreContext != null) {
      prop = bountyVideoEndAppStoreContext.isVideoEndAppStoreOverlayVisible;
    }
    prop1 = null;
    if (true === prop) {
      prop1 = bountyVideoEndAppStoreContext.dismissVideoEndAppStoreOverlay;
    }
  }
  obj1 = { style: null, children: null };
  const items6 = [width.absoluteFillObject, animatedStyle2, animatedStyle3];
  obj1.style = items6;
  obj2 = { style: tmp.videoContainer, children: null };
  let tmp39Result = null;
  if (shouldLoadHls) {
    const obj3 = { ref: playerRef, source: null, automaticallyWaitsToMinimizeStalling: null, maxBitRate: null, bufferConfig: null, preferredForwardBufferDuration: null, initialProgress: null, isFullscreen: false, externallyPaused: null, style: null, contentInsets: null, onProgress: null, onEnd: null, onPausePlayback: null, onResumePlayback: null, onError: null, onLoadStart: null, onBuffer: null, onReadyForDisplay: null, onVideoTracks: null, hideControls: null, showSkipButtons: false, repeat: null, bufferingSpinnerPlacement: "center", onPlayerStateChange: null };
    const obj4 = { uri: bounty.videoHls };
    obj3.source = obj4;
    let tmp40 = !stage1Enabled;
    if (!stage1Enabled) {
      tmp40 = !ownedByVerticalScrollExperiment;
    }
    obj3.automaticallyWaitsToMinimizeStalling = tmp40;
    let prop2;
    if (flag3) {
      prop2 = tmp2(tmp3[19]).SOFT_CAP_PRELOAD_MAX_BITRATE;
    }
    obj3.maxBitRate = prop2;
    let prop3;
    if (flag3) {
      prop3 = tmp2(tmp3[19]).SOFT_CAP_PRELOAD_BUFFER_CONFIG;
    }
    obj3.bufferConfig = prop3;
    let prop4;
    if (flag3) {
      prop4 = tmp2(tmp3[19]).SOFT_CAP_PRELOAD_FORWARD_BUFFER_SEC;
    }
    obj3.preferredForwardBufferDuration = prop4;
    obj3.initialProgress = initialProgress;
    let tmp44 = !flag;
    if (flag) {
      tmp44 = isEndCardVisible;
    }
    if (!tmp44) {
      tmp44 = flag2;
    }
    obj3.externallyPaused = tmp44;
    obj3.style = tmp36.absoluteFillObject;
    obj3.contentInsets = sharedValue;
    obj3.onProgress = callback3;
    obj3.onEnd = handleVideoEnd;
    obj3.onPausePlayback = handleVideoPaused;
    obj3.onResumePlayback = handleVideoResumed;
    obj3.onError = callback2;
    obj3.onLoadStart = onLoadStart;
    obj3.onBuffer = onBuffer;
    obj3.onReadyForDisplay = callback1;
    obj3.onVideoTracks = onVideoTracks;
    obj3.hideControls = isEndCardVisible;
    obj3.repeat = repeat;
    obj3.onPlayerStateChange = onPlayerStateChange;
    tmp39Result = c10(tmp2(tmp3[18]).AdVideoPlayer, obj3);
  }
  const items7 = [tmp39Result, , , , , ];
  if (null != memo) {
    const obj5 = { style: null, pointerEvents: "none", children: null };
    const items8 = [tmp.poster, animatedStyle];
    obj5.style = items8;
    const obj6 = { style: tmp36.absoluteFillObject, source: null, resizeMode: "cover" };
    const obj7 = { uri: memo };
    obj6.source = obj7;
    const items9 = [c10(tmp12(tmp3[20]), obj6), ];
    let tmp48Result = !first;
    if (!first) {
      const obj8 = { animating: true, size: "small", color: token };
      tmp48Result = tmp48(height, obj8);
    }
    items9[1] = tmp48Result;
    obj5.children = items9;
    let tmp34Result = tmp34(tmp12(tmp3[12]).View, obj5);
    let tmp46 = tmp48;
  } else {
    tmp46 = c10;
    const obj9 = { style: null, pointerEvents: "none" };
    const items10 = [tmp.poster, animatedStyle];
    obj9.style = items10;
    tmp34Result = c10(tmp12(tmp3[12]).View, obj9);
  }
  items7[1] = tmp34Result;
  let renderEndCardResult;
  if (renderEndCard != null) {
    renderEndCardResult = renderEndCard();
  }
  items7[2] = renderEndCardResult;
  let tmp46Result = null;
  if (null != prop1) {
    const obj10 = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, style: null };
    const intl = tmp2(tmp3[21]).intl;
    obj10.accessibilityLabel = intl.string(tmp2(tmp3[21]).t.dcl9MQ);
    obj10.onPress = prop1;
    obj10.style = tmp36.absoluteFillObject;
    tmp46Result = tmp46(peekScale, obj10);
  }
  items7[3] = tmp46Result;
  if (isScrollIndicatorEnabled) {
    const obj11 = { opacityStyle: animatedStyle1, enabled: null, isEndCardVisible: null };
    if (flag) {
      flag = tmp7;
    }
    obj11.enabled = flag;
    obj11.isEndCardVisible = isEndCardVisible;
    isScrollIndicatorEnabled = tmp46(tmp12(tmp3[22]), obj11);
    const tmp12Result = tmp12(tmp3[22]);
  }
  const obj12 = { children: null };
  items7[4] = isScrollIndicatorEnabled;
  const obj13 = { style: null, pointerEvents: "box-none", children: tmp46(handleVideoProgress(handleVideoError[23]), { bounty, visible: tmp29, sourceQuestContent }) };
  const items11 = [width.absoluteFillObject, animatedStyle1];
  obj13.style = items11;
  items7[5] = tmp46(handleVideoProgress(handleVideoError[12]).View, obj13);
  obj2.children = items7;
  const items12 = [first(isScrollingInBoundsSharedValue, obj2), ];
  const obj14 = { style: null, children: tmp46(handleVideoProgress(handleVideoError[9]), { progress: normalizedProgress, visible: isProgressBarVisible }) };
  const items13 = [tmp.progress, animatedStyle1];
  obj14.style = items13;
  items12[1] = tmp46(handleVideoProgress(handleVideoError[12]).View, obj14);
  obj1.children = items12;
  const items14 = [first(handleVideoProgress(handleVideoError[12]).View, obj1), ];
  const obj15 = { style: null, children: null };
  const items15 = [tmp.leftRow, animatedStyle1];
  obj15.style = items15;
  const items16 = [tmp46(handleVideoProgress(handleVideoError[24]), { isCompleted, totalSeconds: rewardTotalSeconds, remainingSeconds: rewardRemainingSeconds }), tmp46(bounty(handleVideoError[25]).BalanceWidgetPill, { balance: orbsBalance }, balanceWidgetPillResetKey)];
  obj15.children = items16;
  items14[1] = first(handleVideoProgress(handleVideoError[12]).View, obj15);
  obj12.children = items14;
  return first(closure_12, obj12);
};