// === Module 14378: BountyVideo ===

// Module 14378 (BountyVideo)
import ThemesDefault from "Themes" /* 712 */;
import BountiesModalProgress from "BountiesModalProgress" /* 14379 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import noop from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import { QuestsExperimentLocations } from "QuestsExperimentLocations" /* 6716 */;
import jsxProd from "jsxProd" /* 21 */;
import PlatformTypes from "PlatformTypes" /* 501 */;
import createCacheKey from "createCacheKey" /* 4661 */;

require = fn;
({ View: c5, StyleSheet: closure_6, ActivityIndicator: error } = get_ActivityIndicator);
({ jsx: c9, jsxs: c10, Fragment: unpackModuleId } = jsxProd);
let closure_13 = { top: 48, bottom: 16, left: 16, right: 16 };
const lg = ThemesDefault.radii.lg;
let closure_15 = createCacheKey.createStyles(() => {
  let obj = {};
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
let closure_16 = { code: "function BountyVideoTsx1(){const{posterOpacity}=this.__closure;return{opacity:posterOpacity.get()};}" };
let closure_17 = { code: "function BountyVideoTsx2(){const{isScrollingInBoundsSharedValue,withTiming,isActive,timingStandard}=this.__closure;var _isScrollingInBoundsS;const isScrollingInBounds=((_isScrollingInBoundsS=isScrollingInBoundsSharedValue)===null||_isScrollingInBoundsS===void 0?void 0:_isScrollingInBoundsS.get())===true;return{opacity:withTiming(isActive&&!isScrollingInBounds?1:0,timingStandard)};}" };
let closure_18 = { code: "function BountyVideoTsx3(){const{peekScale,AUTO_SCROLL_PEEK_SCALE,height,AUTO_SCROLL_PEEK_TOP_OFFSET}=this.__closure;if(peekScale==null){return{};}const scale=peekScale.get();const scaleProgress=(1-scale)/(1-AUTO_SCROLL_PEEK_SCALE);const centerPivotCompensation=height*(1-scale)/2;return{transform:[{translateY:scaleProgress*AUTO_SCROLL_PEEK_TOP_OFFSET-centerPivotCompensation},{scale:scale}]};}" };
let result = require("obj132").fileFinishedImporting("modules/quests/native/BountiesModal/BountyVideo.tsx");

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
  let flag3 = bounty.softDownloadCapsEnabled;
  if (flag3 === undefined) {
    flag3 = false;
  }
  let first;
  closure_11 = undefined;
  closure_12 = undefined;
  let sharedValue;
  let callback;
  const tmp = callback2();
  let obj = bounty(handleVideoError[10]);
  const bountiesExperience = obj.useBountiesExperience(peekScale.VIDEO_MODAL_MOBILE);
  ({ stage1Enabled, ownedByVerticalScrollExperiment } = bountiesExperience);
  obj1 = bounty(handleVideoError[11]);
  const isBountiesVerticalScrollExperimentEnabled = obj1.useIsBountiesVerticalScrollExperimentEnabled("BountyVideo");
  if (flag3) {
    flag3 = !flag;
  }
  let obj2 = flag;
  [tmp7, c9] = onFirstFrame(flag.useState(false), 2);
  const tmp8 = onFirstFrame(flag.useState(false), 2);
  first = tmp8[0];
  closure_11 = tmp10;
  closure_12 = flag.useRef(null);
  let tmp2Result = tmp2(tmp3[12]);
  sharedValue = tmp2Result.useSharedValue(1);
  let items = [bounty, width, height];
  const memo = flag.useMemo(() => {
    bounty(handleVideoError[6]);
    const obj = { assetUrl: bounty.videoHls, width, height };
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
      clearTimeout(ref.current);
      ref.current = null;
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
      clearTimeout(ref.current);
      ref.current = null;
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
      clearTimeout(ref.current);
    }
    ref.current = setTimeout(() => {
      callback(true);
      closure_12.current = null;
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
  function fe() {
    return { opacity: sharedValue.get() };
  }
  fe.__closure = { posterOpacity: sharedValue };
  fe.__workletHash = 4975136521719;
  fe.__initData = closure_16;
  const animatedStyle = bounty(handleVideoError[12]).useAnimatedStyle(fe);
  const tmp2Result1 = bounty(handleVideoError[12]);
  class Ae {
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
  Ae.__closure = obj;
  Ae.__workletHash = 12676706441349;
  Ae.__initData = closure_17;
  const animatedStyle1 = bounty(handleVideoError[12]).useAnimatedStyle(Ae);
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
  Fe.__initData = closure_18;
  let tmp28 = isCtaVisible;
  const animatedStyle2 = bounty(handleVideoError[12]).useAnimatedStyle(Fe);
  if (isBountiesVerticalScrollExperimentEnabled) {
    let tmp29 = isCtaVisible;
    if (isCtaVisible) {
      tmp29 = !isEndCardVisible;
    }
    tmp28 = tmp29;
  }
  obj1 = { style: items6, children: null };
  items6 = [width.absoluteFillObject, animatedStyle2];
  obj2 = { style: tmp.videoContainer, children: null };
  let tmp35Result = null;
  if (shouldLoadHls) {
    const obj3 = { ref: null, source: null, automaticallyWaitsToMinimizeStalling: null, maxBitRate: null, bufferConfig: null, preferredForwardBufferDuration: null, initialProgress: null, isFullscreen: false, externallyPaused: null, style: null, contentInsets: null, onProgress: null, onEnd: null, onPausePlayback: null, onResumePlayback: null, onError: null, onLoadStart: null, onBuffer: null, onReadyForDisplay: null, onVideoTracks: null, hideControls: null, showSkipButtons: false, repeat: null, bufferingSpinnerPlacement: "center", onPlayerStateChange: null };
    obj3[0] = playerRef;
    const obj4 = { uri: null };
    obj4[0] = bounty.videoHls;
    obj3[1] = obj4;
    let tmp36 = !stage1Enabled;
    if (!stage1Enabled) {
      tmp36 = !ownedByVerticalScrollExperiment;
    }
    obj3[2] = tmp36;
    let prop;
    if (flag3) {
      prop = tmp2(tmp3[18]).SOFT_CAP_PRELOAD_MAX_BITRATE;
    }
    obj3[3] = prop;
    let prop1;
    if (flag3) {
      prop1 = tmp2(tmp3[18]).SOFT_CAP_PRELOAD_BUFFER_CONFIG;
    }
    obj3[4] = prop1;
    let prop2;
    if (flag3) {
      prop2 = tmp2(tmp3[18]).SOFT_CAP_PRELOAD_FORWARD_BUFFER_SEC;
    }
    obj3[5] = prop2;
    obj3[6] = initialProgress;
    let tmp40 = !flag;
    if (flag) {
      tmp40 = isEndCardVisible;
    }
    if (!tmp40) {
      tmp40 = flag2;
    }
    obj3[8] = tmp40;
    obj3[9] = tmp32.absoluteFillObject;
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
    tmp35Result = callback(tmp2(tmp3[17]).AdVideoPlayer, obj3);
  }
  const items7 = [tmp35Result, , , , ];
  if (null != memo) {
    const obj5 = { style: null, pointerEvents: "none", children: null };
    const items8 = [tmp.poster, animatedStyle];
    obj5[0] = items8;
    const obj6 = { style: null, source: null, resizeMode: "cover" };
    obj6[0] = tmp32.absoluteFillObject;
    const obj7 = { uri: null };
    obj7[0] = memo;
    obj6[1] = obj7;
    const items9 = [callback(tmp12(tmp3[19]), obj6), ];
    let tmp44Result = !first;
    if (!first) {
      const obj8 = { animating: true, size: "small", color: null };
      obj8[2] = token;
      tmp44Result = tmp44(height, obj8);
    }
    items9[1] = tmp44Result;
    obj5[2] = items9;
    let tmp30Result = tmp30(tmp12(tmp3[12]).View, obj5);
    let tmp42 = tmp44;
  } else {
    tmp42 = callback;
    const obj9 = { style: null, pointerEvents: "none" };
    const items10 = [tmp.poster, animatedStyle];
    obj9[0] = items10;
    tmp30Result = callback(tmp12(tmp3[12]).View, obj9);
  }
  items7[1] = tmp30Result;
  let renderEndCardResult;
  if (renderEndCard != null) {
    renderEndCardResult = renderEndCard();
  }
  items7[2] = renderEndCardResult;
  if (isScrollIndicatorEnabled) {
    const obj10 = { opacityStyle: null, enabled: null, isEndCardVisible: null };
    obj10[0] = animatedStyle1;
    if (flag) {
      flag = tmp7;
    }
    obj10[1] = flag;
    obj10[2] = isEndCardVisible;
    isScrollIndicatorEnabled = tmp42(tmp12(tmp3[20]), obj10);
    const tmp12Result = tmp12(tmp3[20]);
  }
  const obj11 = { children: null };
  items7[3] = isScrollIndicatorEnabled;
  const tmp2Result3 = bounty(handleVideoError[12]);
  const tmp31 = closure_11;
  const tmp33 = isScrollingInBoundsSharedValue;
  const items11 = [width.absoluteFillObject, animatedStyle1];
  items7[4] = tmp42(handleVideoProgress(handleVideoError[12]).View, { style: items11, pointerEvents: "box-none", children: tmp42(handleVideoProgress(handleVideoError[21]), { bounty, visible: tmp28, sourceQuestContent }) });
  obj2[1] = items7;
  const items12 = [first(tmp33, obj2), ];
  const obj12 = { style: items11, pointerEvents: "box-none", children: tmp42(handleVideoProgress(handleVideoError[21]), { bounty, visible: tmp28, sourceQuestContent }) };
  const items13 = [tmp.progress, animatedStyle1];
  items12[1] = tmp42(handleVideoProgress(handleVideoError[12]).View, { style: items13, children: tmp42(handleVideoProgress(handleVideoError[9]), { progress: normalizedProgress, visible: isProgressBarVisible }) });
  obj1[1] = items12;
  const items14 = [first(handleVideoProgress(handleVideoError[12]).View, obj1), ];
  const obj14 = { style: items15, children: null };
  items15 = [tmp.leftRow, animatedStyle1];
  const items16 = [tmp42(handleVideoProgress(handleVideoError[22]), { isCompleted, totalSeconds: rewardTotalSeconds, remainingSeconds: rewardRemainingSeconds }), tmp42(bounty(handleVideoError[23]).BalanceWidgetPill, { balance: orbsBalance }, balanceWidgetPillResetKey)];
  obj14[1] = items16;
  items14[1] = first(handleVideoProgress(handleVideoError[12]).View, obj14);
  obj11[0] = items14;
  return first(tmp31, obj11);
};