// === Module 15024: BountyVideo ===

// Module 15024 (BountyVideo)
import ThemesDefault from "Themes" /* 576 */;
import BountiesModalProgress from "BountiesModalProgress" /* 15025 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import { QuestsExperimentLocations } from "QuestsExperimentLocations" /* 5444 */;
import jsxProd from "jsxProd" /* 21 */;
import PlatformTypes from "PlatformTypes" /* 1116 */;
import createCacheKey from "createCacheKey" /* 4560 */;

require = arg1;
({ View: c5, StyleSheet: closure_6, ActivityIndicator: error, Pressable: closure_8 } = get_ActivityIndicator);
({ jsx: c10, jsxs: unpackModuleId, Fragment: closure_12 } = jsxProd);
let num = 0;
if (PlatformTypes.isAndroid()) {
  num = 150;
}
let closure_14 = { top: 48, bottom: 16, left: 16, right: 16 };
const lg = ThemesDefault.radii.lg;
let closure_16 = createCacheKey.createStyles(() => {
  let obj = { videoContainer: null, leftRow: null, progress: null, poster: null };
  obj = {};
  const merged = Object.assign(closure_6.absoluteFillObject);
  obj.overflow = "hidden";
  obj.borderRadius = lg;
  obj[0] = obj;
  obj = { position: "absolute", top: ThemesDefault.space.PX_8, left: ThemesDefault.space.PX_8, flexDirection: "row", alignItems: "center", gap: ThemesDefault.space.PX_8 };
  obj[1] = obj;
  obj[2] = { position: "absolute", bottom: 0, height: BountiesModalProgress.PROGRESS_BAR_HEIGHT, left: lg, right: lg };
  const obj2 = {};
  const merged1 = Object.assign(closure_6.absoluteFillObject);
  obj2.backgroundColor = "#000000";
  obj2.justifyContent = "center";
  obj2.alignItems = "center";
  obj[3] = obj2;
  return obj;
});
let closure_17 = { code: "function BountyVideoTsx1(){const{posterOpacity}=this.__closure;return{opacity:posterOpacity.get()};}" };
let closure_18 = { code: "function BountyVideoTsx2(){const{isScrollingInBoundsSharedValue,withTiming,isActive,timingStandard}=this.__closure;var _isScrollingInBoundsS;const isScrollingInBounds=((_isScrollingInBoundsS=isScrollingInBoundsSharedValue)===null||_isScrollingInBoundsS===void 0?void 0:_isScrollingInBoundsS.get())===true;return{opacity:withTiming(isActive&&!isScrollingInBounds?1:0,timingStandard)};}" };
let closure_19 = { code: "function BountyVideoTsx3(){const{peekScale,AUTO_SCROLL_PEEK_SCALE,height,AUTO_SCROLL_PEEK_TOP_OFFSET}=this.__closure;if(peekScale==null){return{};}const scale=peekScale.get();const scaleProgress=(1-scale)/(1-AUTO_SCROLL_PEEK_SCALE);const centerPivotCompensation=height*(1-scale)/2;return{transform:[{translateY:scaleProgress*AUTO_SCROLL_PEEK_TOP_OFFSET-centerPivotCompensation},{scale:scale}]};}" };
let closure_20 = { code: "function BountyVideoTsx4(){const{videoEndPeekScale,height}=this.__closure;if(videoEndPeekScale==null){return{};}const scale=videoEndPeekScale.get();if(scale>=1){return{};}const centerPivotCompensation=height*(1-scale)/2;return{transform:[{translateY:-centerPivotCompensation},{scale:scale}]};}" };
let result = require("set").fileFinishedImporting("modules/quests/native/BountiesModal/BountyVideo.tsx");

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
  let callback;
  let first;
  closure_12 = undefined;
  closure_13 = undefined;
  let sharedValue;
  callback = undefined;
  const tmp = callback2();
  let obj = bounty(handleVideoError[10]);
  const bountiesExperience = obj.useBountiesExperience(videoEndPeekScale.VIDEO_MODAL_MOBILE);
  ({ stage1Enabled, ownedByVerticalScrollExperiment } = bountiesExperience);
  obj1 = bounty(handleVideoError[11]);
  const isBountiesVerticalScrollExperimentEnabled = obj1.useIsBountiesVerticalScrollExperimentEnabled("BountyVideo");
  if (flag3) {
    flag3 = !flag;
  }
  let obj2 = flag;
  [tmp7, c10] = onFirstFrame(flag.useState(false), 2);
  const tmp8 = onFirstFrame(flag.useState(false), 2);
  first = tmp8[0];
  closure_12 = tmp10;
  closure_13 = flag.useRef(null);
  let tmp2Result = tmp2(tmp3[12]);
  sharedValue = tmp2Result.useSharedValue(1);
  let items = [bounty, width, height];
  const memo = flag.useMemo(() => {
    let obj = bounty(handleVideoError[6]);
    obj = { assetUrl: bounty.videoHls, width, height };
    return obj.getScaledFirstFrameImageUrl(obj);
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
      clearTimeout(tmp.current);
      tmp.current = null;
    }
  }, items1);
  const items2 = [first, sharedValue];
  const effect1 = obj2.useEffect(() => {
    if (first) {
      const result = sharedValue.set(bounty(handleVideoError[14]).withTiming(0, bounty(handleVideoError[15]).timingFast));
      const obj = bounty(handleVideoError[14]);
    }
  }, items2);
  callback = obj2.useCallback(() => {
    if (null != ref.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(tmp.current);
      tmp.current = null;
    }
    callback(true);
  }, []);
  const items3 = [onFirstFrame];
  const items4 = [callback, handleVideoError];
  const callback1 = obj2.useCallback(() => {
    if (onFirstFrame != null) {
      tmp();
    }
    if (null != ref.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(tmp3.current);
    }
    ref.current = setTimeout(() => {
      callback(true);
      closure_13.current = null;
    }, ref);
  }, items3);
  const items5 = [handleVideoProgress];
  callback2 = obj2.useCallback((arg0) => {
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
  Ve.__initData = closure_17;
  const animatedStyle = bounty(handleVideoError[12]).useAnimatedStyle(Ve);
  const tmp2Result1 = bounty(handleVideoError[12]);
  class Be {
    constructor() {
      obj = closure_5;
      if (closure_5 != null) {
        value = obj.get();
      }
      tmp2 = bounty;
      tmp3 = handleVideoError;
      obj2 = bounty(handleVideoError[14]);
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
  Be.__initData = closure_18;
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
        tmp3 = bounty;
        tmp4 = handleVideoError;
        diff = 1 - value;
        diff1 = 1 - bounty(handleVideoError[16]).AUTO_SCROLL_PEEK_SCALE;
        tmp6 = height;
        num2 = 2;
        obj1[0] = diff / diff1 * bounty(handleVideoError[16]).AUTO_SCROLL_PEEK_TOP_OFFSET - height * (1 - value) / 2;
        items = [, ];
        items[0] = obj1;
        obj2 = { scale: null };
        obj2[0] = value;
        items[1] = obj2;
        obj[0] = items;
        return obj;
      }
    }
  }
  obj = { peekScale, AUTO_SCROLL_PEEK_SCALE: tmp2(tmp3[16]).AUTO_SCROLL_PEEK_SCALE, height, AUTO_SCROLL_PEEK_TOP_OFFSET: tmp2(tmp3[16]).AUTO_SCROLL_PEEK_TOP_OFFSET };
  Fe.__closure = obj;
  Fe.__workletHash = 13770344279431;
  Fe.__initData = closure_19;
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
          obj1[0] = -height * (1 - value) / 2;
          items = [, ];
          items[0] = obj1;
          obj2 = { scale: null };
          obj2[0] = value;
          items[1] = obj2;
          obj[0] = items;
        }
        return obj;
      }
    }
  }
  Le.__closure = { videoEndPeekScale, height };
  Le.__workletHash = 9172705764213;
  Le.__initData = closure_20;
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
  obj1 = { style: items6, children: null };
  items6 = [width.absoluteFillObject, animatedStyle2, animatedStyle3];
  obj2 = { style: tmp.videoContainer, children: null };
  let tmp39Result = null;
  if (shouldLoadHls) {
    const obj3 = { ref: null, source: null, automaticallyWaitsToMinimizeStalling: null, maxBitRate: null, bufferConfig: null, preferredForwardBufferDuration: null, initialProgress: null, isFullscreen: false, externallyPaused: null, style: null, contentInsets: null, onProgress: null, onEnd: null, onPausePlayback: null, onResumePlayback: null, onError: null, onLoadStart: null, onBuffer: null, onReadyForDisplay: null, onVideoTracks: null, hideControls: null, showSkipButtons: false, repeat: null, bufferingSpinnerPlacement: "center", onPlayerStateChange: null };
    obj3[0] = playerRef;
    const obj4 = { uri: null };
    obj4[0] = bounty.videoHls;
    obj3[1] = obj4;
    let tmp40 = !stage1Enabled;
    if (!stage1Enabled) {
      tmp40 = !ownedByVerticalScrollExperiment;
    }
    obj3[2] = tmp40;
    let prop2;
    if (flag3) {
      prop2 = tmp2(tmp3[19]).SOFT_CAP_PRELOAD_MAX_BITRATE;
    }
    obj3[3] = prop2;
    let prop3;
    if (flag3) {
      prop3 = tmp2(tmp3[19]).SOFT_CAP_PRELOAD_BUFFER_CONFIG;
    }
    obj3[4] = prop3;
    let prop4;
    if (flag3) {
      prop4 = tmp2(tmp3[19]).SOFT_CAP_PRELOAD_FORWARD_BUFFER_SEC;
    }
    obj3[5] = prop4;
    obj3[6] = initialProgress;
    let tmp44 = !flag;
    if (flag) {
      tmp44 = isEndCardVisible;
    }
    if (!tmp44) {
      tmp44 = flag2;
    }
    obj3[8] = tmp44;
    obj3[9] = tmp36.absoluteFillObject;
    obj3[10] = sharedValue;
    obj3[11] = callback3;
    obj3[12] = handleVideoEnd;
    obj3[13] = handleVideoPaused;
    obj3[14] = handleVideoResumed;
    obj3[15] = callback2;
    obj3[16] = onLoadStart;
    obj3[17] = onBuffer;
    obj3[18] = callback1;
    obj3[19] = onVideoTracks;
    obj3[20] = isEndCardVisible;
    obj3[22] = repeat;
    obj3[24] = onPlayerStateChange;
    tmp39Result = callback(tmp2(tmp3[18]).AdVideoPlayer, obj3);
    const tmp39 = callback;
  }
  const items7 = [tmp39Result, , , , , ];
  if (null != memo) {
    const obj5 = { style: null, pointerEvents: "none", children: null };
    const items8 = [tmp.poster, animatedStyle];
    obj5[0] = items8;
    const obj6 = { style: null, source: null, resizeMode: "cover" };
    obj6[0] = tmp36.absoluteFillObject;
    const obj7 = { uri: null };
    obj7[0] = memo;
    obj6[1] = obj7;
    const items9 = [callback(tmp12(tmp3[20]), obj6), ];
    let tmp48Result = !first;
    if (!first) {
      const obj8 = { animating: true, size: "small", color: null };
      obj8[2] = token;
      tmp48Result = tmp48(height, obj8);
    }
    items9[1] = tmp48Result;
    obj5[2] = items9;
    let tmp34Result = tmp34(tmp12(tmp3[12]).View, obj5);
    let tmp46 = tmp48;
  } else {
    tmp46 = callback;
    const obj9 = { style: null, pointerEvents: "none" };
    const items10 = [tmp.poster, animatedStyle];
    obj9[0] = items10;
    tmp34Result = callback(tmp12(tmp3[12]).View, obj9);
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
    obj10[1] = intl.string(tmp2(tmp3[21]).t.dcl9MQ);
    obj10[2] = prop1;
    obj10[3] = tmp36.absoluteFillObject;
    tmp46Result = tmp46(peekScale, obj10);
  }
  items7[3] = tmp46Result;
  if (isScrollIndicatorEnabled) {
    const obj11 = { opacityStyle: null, enabled: null, isEndCardVisible: null };
    obj11[0] = animatedStyle1;
    if (flag) {
      flag = tmp7;
    }
    obj11[1] = flag;
    obj11[2] = isEndCardVisible;
    isScrollIndicatorEnabled = tmp46(tmp12(tmp3[22]), obj11);
    const tmp12Result = tmp12(tmp3[22]);
  }
  const obj12 = { children: null };
  items7[4] = isScrollIndicatorEnabled;
  const tmp2Result5 = bounty(handleVideoError[17]);
  const tmp35 = closure_12;
  const tmp37 = isScrollingInBoundsSharedValue;
  const items11 = [width.absoluteFillObject, animatedStyle1];
  items7[5] = tmp46(handleVideoProgress(handleVideoError[12]).View, { style: items11, pointerEvents: "box-none", children: tmp46(handleVideoProgress(handleVideoError[23]), { bounty, visible: tmp29, sourceQuestContent }) });
  obj2[1] = items7;
  const items12 = [first(tmp37, obj2), ];
  const obj13 = { style: items11, pointerEvents: "box-none", children: tmp46(handleVideoProgress(handleVideoError[23]), { bounty, visible: tmp29, sourceQuestContent }) };
  const items13 = [tmp.progress, animatedStyle1];
  items12[1] = tmp46(handleVideoProgress(handleVideoError[12]).View, { style: items13, children: tmp46(handleVideoProgress(handleVideoError[9]), { progress: normalizedProgress, visible: isProgressBarVisible }) });
  obj1[1] = items12;
  const items14 = [first(handleVideoProgress(handleVideoError[12]).View, obj1), ];
  const obj15 = { style: items15, children: null };
  items15 = [tmp.leftRow, animatedStyle1];
  const items16 = [tmp46(handleVideoProgress(handleVideoError[24]), { isCompleted, totalSeconds: rewardTotalSeconds, remainingSeconds: rewardRemainingSeconds }), tmp46(bounty(handleVideoError[25]).BalanceWidgetPill, { balance: orbsBalance }, balanceWidgetPillResetKey)];
  obj15[1] = items16;
  items14[1] = first(handleVideoProgress(handleVideoError[12]).View, obj15);
  obj12[0] = items14;
  return first(tmp35, obj12);
};