// === Module 17216: BountyVideo ===

// Module 17216 (BountyVideo)
import nativeDefault from "native" /* 575 */;
import timing_timing from "timing/timing" /* 5380 */;
import timingPresets from "timingPresets" /* 5383 */;
import LinearGradientDefault from "LinearGradient" /* 5725 */;
import AssetUtils from "AssetUtils" /* 9851 */;
import BountiesModalProgress from "BountiesModalProgress" /* 17217 */;
import pickBountyVideoRendition from "pickBountyVideoRendition" /* 17218 */;
import BountiesModalAdvertiserCtaDefault from "BountiesModalAdvertiserCta" /* 17234 */;
import BountiesModalTimerDefault from "BountiesModalTimer" /* 17236 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import module_1652 from "module_1652" /* 1652 */;
import n_mod from "module_671" /* 671 */;

const require = globalThis.__r;
const BountiesModalProgressDefault = BountiesModalProgress;

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, StyleSheet: closure_6, ActivityIndicator: metroImportDefault, Pressable: closure_8 } = get_ActivityIndicator);
const BountiesModalConstants = fn(17196);
({ getBountyVideoEndPeekClipHeight: closure_9, getBountyVideoEndPeekScale: closure_10 } = BountiesModalConstants);
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12, Fragment: map1 } = jsxProd);
const PlatformUtils = fn(1357);
const contentInsets = { top: 48, bottom: 16, left: 16, right: 16 };
const lg = nativeDefault.radii.lg;
const LinearGradient = module_1652.createAnimatedComponent(LinearGradientDefault);
const start = { x: 0, y: 0 };
const end = { x: 0, y: 1 };
let n = n_mod;
const importDefaultResult1Result = n(nativeDefault.unsafe_rawColors.PLUM_23);
let items = [n(nativeDefault.unsafe_rawColors.PLUM_23).alpha(0.4).hex(), ];
let n = n_mod;
const alphaResult = n(nativeDefault.unsafe_rawColors.PLUM_23).alpha(0.4);
const importDefaultResult2Result = n(nativeDefault.unsafe_rawColors.PLUM_23);
items[1] = n(nativeDefault.unsafe_rawColors.PLUM_23).alpha(0).hex();
const createStyles = fn(5143);
let closure_21 = createStyles.createStyles(() => {
  const obj = { videoContainer: null, leftRow: null, progress: null, poster: null, scrimGradient: null };
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
  const obj4 = {};
  const merged2 = Object.assign(timestampProducer.absoluteFillObject);
  obj4.bottom = undefined;
  obj4.height = 70;
  obj.scrimGradient = obj4;
  return obj;
});
let closure_22 = { code: "(function BountyVideoTsx1(){let[posterOpacity]=this.__closure;return{opacity:posterOpacity.get()};})" };
let closure_23 = { code: "(function BountyVideoTsx2(){let[isScrollingInBoundsSharedValue,withTiming,isActive,timingStandard]=this.__closure;var _isScrollingInBoundsS;const isScrollingInBounds=((_isScrollingInBoundsS=isScrollingInBoundsSharedValue)===null||_isScrollingInBoundsS===void 0?void 0:_isScrollingInBoundsS.get())===true;return{opacity:withTiming(isActive&&!isScrollingInBounds?1:0,timingStandard)};})" };
let closure_24 = { code: "(function BountyVideoTsx3(){let[videoEndPeekProgress,StyleSheet,getBountyVideoEndPeekScale,videoEndPeekTargetScale,getBountyVideoEndPeekClipHeight,width,height,VIDEO_CONTAINER_BORDER_RADIUS]=this.__closure;if(videoEndPeekProgress==null){return StyleSheet.absoluteFillObject;}const progress=videoEndPeekProgress.get();const scale=getBountyVideoEndPeekScale(progress,videoEndPeekTargetScale);const clipHeight=getBountyVideoEndPeekClipHeight(progress,width,height);const centerPivotCompensation=clipHeight*(1-scale)/2;return{position:'absolute',top:0,left:0,width:width,height:clipHeight,overflow:'hidden',borderRadius:VIDEO_CONTAINER_BORDER_RADIUS,transform:[{translateY:-centerPivotCompensation},{scale:scale}]};})" };
let closure_25 = { code: "(function BountyVideoTsx4(){let[videoEndPeekProgress,StyleSheet,getBountyVideoEndPeekClipHeight,width,height]=this.__closure;if(videoEndPeekProgress==null){return StyleSheet.absoluteFillObject;}const progress=videoEndPeekProgress.get();const clipHeight=getBountyVideoEndPeekClipHeight(progress,width,height);return{width:width,height:height,transform:[{translateY:(clipHeight-height)/2}]};})" };
let size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/BountiesModal/BountyVideo.tsx");

export function BountyVideo(handleVideoProgress) {
  ({ bounty, isCtaVisible, isEndCardVisible, isScrollIndicatorEnabled } = handleVideoProgress);
  ({ sourceQuestContent, isCompleted } = handleVideoProgress);
  if (isScrollIndicatorEnabled === undefined) {
    isScrollIndicatorEnabled = false;
  }
  handleVideoProgress = handleVideoProgress.handleVideoProgress;
  _require = handleVideoProgress;
  const handleVideoError = handleVideoProgress.handleVideoError;
  importDefault = handleVideoError;
  const onFirstFrame = handleVideoProgress.onFirstFrame;
  dependencyMap = onFirstFrame;
  ({ isActive, isProgressBarVisible, orbsBalance, handleVideoEnd, handleVideoPaused, handleVideoResumed, onLoadStart, onBuffer, onVideoTracks, rewardRemainingSeconds, rewardTotalSeconds, normalizedProgress, initialProgress, repeat } = handleVideoProgress);
  if (isActive === undefined) {
    isActive = false;
  }
  let flag = handleVideoProgress.isRecapPageRevealed;
  if (flag === undefined) {
    flag = false;
  }
  ({ renderEndCard, shouldLoadHls, isScrollingInBoundsSharedValue, playerRef, onPlayerStateChange, balanceWidgetPillResetKey } = handleVideoProgress);
  if (shouldLoadHls === undefined) {
    shouldLoadHls = true;
  }
  width = handleVideoProgress.width;
  height = handleVideoProgress.height;
  let flag2 = handleVideoProgress.softDownloadCapsEnabled;
  if (flag2 === undefined) {
    flag2 = false;
  }
  c5 = undefined;
  absoluteFillObject = undefined;
  c7 = undefined;
  let ref;
  let sharedValue;
  let videoHls;
  let videoRenditions;
  let memo;
  let callback;
  const tmp = closure_21();
  if (flag2) {
    flag2 = !isActive;
  }
  [tmp3, c5] = width(height.useState(false), 2);
  const tmp4 = width(height.useState(false), 2);
  const first = tmp4[0];
  absoluteFillObject = first;
  c7 = tmp6;
  ref = height.useRef(null);
  const tmp2 = width(height.useState(false), 2);
  sharedValue = require("module_1652").useSharedValue(1);
  videoHls = bounty.videoHls;
  videoRenditions = bounty.videoRenditions;
  items = [videoHls, videoRenditions];
  memo = height.useMemo(() => {
    let url = videoHls;
    const result = pickBountyVideoRendition.pickBountyVideoRenditionWithFallback({ videoHls, videoRenditions }, pickBountyVideoRendition.BOUNTY_MOBILE_MODAL_RENDITION_PICK);
    if (null != result) {
      url = result.url;
    }
    return url;
  }, items);
  const items1 = [memo, width, height];
  const memo1 = height.useMemo(() => {
    const size = { assetUrl: memo, width, height };
    return AssetUtils.getScaledFirstFrameImageUrl(size);
  }, items1);
  let obj2 = require("module_1652");
  const token = require("useToken").useToken(nativeDefault.colors.TEXT_DEFAULT);
  const combined = "" + bounty.id + ":" + shouldLoadHls + ":" + memo;
  const tmp14 = width(height.useState(combined), 2);
  if (tmp14[0] !== combined) {
    tmp14[1](combined);
    tmp6(false);
    let result = sharedValue.set(1);
  }
  const items2 = [combined];
  const effect = obj.useEffect(() => () => {
    if (null != ref.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(ref.current);
      ref.current = null;
    }
  }, items2);
  const items3 = [first, sharedValue];
  const effect1 = obj.useEffect(() => {
    if (c6) {
      const result = sharedValue.set(timing_timing.withTiming(0, timingPresets.timingFast));
    }
  }, items3);
  callback = obj.useCallback(() => {
    if (null != ref.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(ref.current);
      ref.current = null;
    }
    borderRadius(true);
  }, []);
  const items4 = [onFirstFrame];
  const items5 = [callback, handleVideoError];
  const callback1 = obj.useCallback(() => {
    if (c2 != null) {
      tmp();
    }
    if (null != ref.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(ref.current);
    }
    ref.current = setTimeout(() => {
      borderRadius(true);
      ref.current = null;
    }, num);
  }, items4);
  const items6 = [handleVideoProgress];
  const callback2 = obj.useCallback((arg0) => {
    callback();
    if (c1 != null) {
      tmp2(arg0);
    }
  }, items5);
  const callback3 = obj.useCallback((currentTime) => {
    if (currentTime.currentTime > 0) {
      width2(true);
    }
    _undefined(currentTime);
  }, items6);
  const obj4 = require("useToken");
  const items7 = [closure_22, sharedValue];
  _require = undefined;
  [tmp24, tmp25] = items7;
  class BountyVideoTsx1 {
    constructor() {
      obj = { opacity: closure_0.get() };
      return obj;
    }
  }
  const items8 = [tmp25];
  BountyVideoTsx1.__closure = items8;
  BountyVideoTsx1.__workletHash = 8043995477166;
  BountyVideoTsx1.__initData = tmp24;
  const animatedStyle = require("module_1652").useAnimatedStyle(BountyVideoTsx1);
  const tmp7Result = require("module_1652");
  const items9 = [closure_23, isScrollingInBoundsSharedValue, require("timing/timing").withTiming, isActive, require("timingPresets").timingStandard];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  width = undefined;
  [tmp27, tmp28, tmp29, tmp30, tmp31] = items9;
  class BountyVideoTsx2 {
    constructor() {
      obj = closure_0;
      if (closure_0 != null) {
        value = obj.get();
      }
      num = 0;
      tmp2 = closure_1;
      if (closure_2) {
        flag = true;
        num = 0;
        if (true !== value) {
          num = 1;
        }
      }
      obj1 = { opacity: tmp2(num, closure_3) };
      return obj1;
    }
  }
  const items10 = [tmp28, tmp29, tmp30, tmp31];
  BountyVideoTsx2.__closure = items10;
  BountyVideoTsx2.__workletHash = 13062892827356;
  BountyVideoTsx2.__initData = tmp27;
  const animatedStyle1 = require("module_1652").useAnimatedStyle(BountyVideoTsx2);
  const tmp7Result5 = require("module_1652");
  const bountyVideoEndAppStoreContext = require("useBountyVideoEndAppStoreOverlay").useBountyVideoEndAppStoreContext();
  let tmp34;
  if (isActive) {
    let videoEndPeekProgress;
    if (bountyVideoEndAppStoreContext != null) {
      videoEndPeekProgress = bountyVideoEndAppStoreContext.videoEndPeekProgress;
    }
    tmp34 = videoEndPeekProgress;
  }
  num = undefined;
  if (bountyVideoEndAppStoreContext != null) {
    num = bountyVideoEndAppStoreContext.videoEndPeekTargetScale;
  }
  if (num == null) {
    num = 1;
  }
  const tmp7Result6 = require("useBountyVideoEndAppStoreOverlay");
  const items11 = [closure_24, tmp34, absoluteFillObject, videoHls, num, sharedValue, width, height, lg];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  width = undefined;
  height = undefined;
  c5 = undefined;
  absoluteFillObject = undefined;
  c7 = undefined;
  [tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44, tmp45, tmp46] = items11;
  class BountyVideoTsx3 {
    constructor() {
      obj = closure_0;
      if (null == closure_0) {
        tmp = closure_1;
        return closure_1.absoluteFillObject;
      } else {
        value = obj.get();
        tmp3 = closure_2;
        tmp4 = closure_3;
        tmp5 = closure_2(value, closure_3);
        tmp6 = closure_4;
        tmp7 = closure_5;
        tmp8 = closure_6;
        tmp9 = closure_4(value, closure_5, closure_6);
        size = { position: "absolute", top: 0, left: 0, width: null, height: null, overflow: "hidden", borderRadius: null, transform: null };
        size.width = closure_5;
        size.height = tmp9;
        tmp10 = closure_7;
        size.borderRadius = closure_7;
        obj1 = { translateY: null };
        num = 1;
        num2 = 2;
        obj1.translateY = -tmp9 * (1 - tmp5) / 2;
        items = [, ];
        items[0] = obj1;
        obj5 = { scale: null };
        obj5.scale = tmp5;
        items[1] = obj5;
        size.transform = items;
        return size;
      }
    }
  }
  const items12 = [tmp39, tmp40, tmp41, tmp42, tmp43, tmp44, tmp45, tmp46];
  BountyVideoTsx3.__closure = items12;
  BountyVideoTsx3.__workletHash = 9514254449235;
  BountyVideoTsx3.__initData = tmp38;
  const animatedStyle2 = require("module_1652").useAnimatedStyle(BountyVideoTsx3);
  const tmp37 = sharedValue;
  const tmp7Result7 = require("module_1652");
  const items13 = [closure_25, tmp34, absoluteFillObject, tmp37, width, height];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  width = undefined;
  height = undefined;
  [tmp48, tmp49, tmp50, tmp51, tmp52, tmp53] = items13;
  class BountyVideoTsx4 {
    constructor() {
      obj = closure_0;
      if (null == closure_0) {
        tmp4 = closure_1;
        return closure_1.absoluteFillObject;
      } else {
        tmp = closure_2;
        tmp2 = closure_3;
        tmp3 = closure_4;
        size = { width: null, height: null, transform: null };
        size.width = closure_3;
        size.height = closure_4;
        obj1 = { translateY: null };
        num = 2;
        obj1.translateY = (closure_2(obj.get(), closure_3, closure_4) - closure_4) / 2;
        items = [];
        items[0] = obj1;
        size.transform = items;
        return size;
      }
    }
  }
  const items14 = [tmp49, tmp50, tmp51, tmp52, tmp53];
  BountyVideoTsx4.__closure = items14;
  BountyVideoTsx4.__workletHash = 10206614241485;
  BountyVideoTsx4.__initData = tmp48;
  let prop1 = null;
  const animatedStyle3 = require("module_1652").useAnimatedStyle(BountyVideoTsx4);
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
  let obj3 = { style: animatedStyle2, children: null };
  const obj5 = { style: animatedStyle3, children: null };
  const obj6 = { style: tmp.videoContainer, children: null };
  let tmp60Result = null;
  if (shouldLoadHls) {
    const obj7 = { ref: playerRef, source: null, automaticallyWaitsToMinimizeStalling: false, maxBitRate: null, bufferConfig: null, preferredForwardBufferDuration: null, initialProgress: null, isFullscreen: false, externallyPaused: null, style: null, contentInsets: null, onProgress: null, onEnd: null, onPausePlayback: null, onResumePlayback: null, onError: null, onLoadStart: null, onBuffer: null, onReadyForDisplay: null, onVideoTracks: null, hideControls: null, showSkipButtons: false, repeat: null, bufferingSpinnerPlacement: "center", onPlayerStateChange: null };
    const obj8 = { uri: memo };
    obj7.source = obj8;
    let prop3;
    if (flag2) {
      prop3 = tmp7(17231).SOFT_CAP_PRELOAD_MAX_BITRATE;
    }
    obj7.maxBitRate = prop3;
    let prop4;
    if (flag2) {
      prop4 = tmp7(17231).SOFT_CAP_PRELOAD_BUFFER_CONFIG;
    }
    obj7.bufferConfig = prop4;
    let prop5;
    if (flag2) {
      prop5 = tmp7(17231).SOFT_CAP_PRELOAD_FORWARD_BUFFER_SEC;
    }
    obj7.preferredForwardBufferDuration = prop5;
    obj7.initialProgress = initialProgress;
    let tmp66 = !isActive;
    if (isActive) {
      tmp66 = isEndCardVisible;
    }
    if (!tmp66) {
      tmp66 = flag;
    }
    obj7.externallyPaused = tmp66;
    obj7.style = tmp36.absoluteFillObject;
    obj7.contentInsets = contentInsets;
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
    tmp60Result = tmp60(tmp7(17219).AdVideoPlayer, obj7);
  }
  const items15 = [tmp60Result, , , , , , ];
  if (null != memo1) {
    const obj9 = { style: null, pointerEvents: "none", children: null };
    const items16 = [tmp.poster, animatedStyle];
    obj9.style = items16;
    const obj10 = { style: tmp36.absoluteFillObject, source: null, resizeMode: "cover" };
    const obj11 = { uri: memo1 };
    obj10.source = obj11;
    const items17 = [tmp60(tmp11(5854), obj10), ];
    let tmp60Result3 = !first;
    if (!first) {
      const obj12 = { animating: true, size: "small", color: token };
      tmp60Result3 = tmp60(c7, obj12);
    }
    items17[1] = tmp60Result3;
    obj9.children = items17;
    let tmp60Result4 = tmp58(tmp11(1652).View, obj9);
  } else {
    const obj13 = { style: null, pointerEvents: "none" };
    const items18 = [tmp.poster, animatedStyle];
    obj13.style = items18;
    tmp60Result4 = tmp60(tmp11(1652).View, obj13);
  }
  items15[1] = tmp60Result4;
  const obj14 = { start, end, style: null, colors: items, pointerEvents: "none" };
  const items19 = [tmp.scrimGradient, animatedStyle1];
  obj14.style = items19;
  items15[2] = videoRenditions(LinearGradient, obj14);
  let renderEndCardResult;
  if (renderEndCard != null) {
    renderEndCardResult = renderEndCard();
  }
  items15[3] = renderEndCardResult;
  let tmp60Result5 = null;
  if (null != prop1) {
    const obj15 = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, style: null };
    const intl = tmp7(1113).intl;
    obj15.accessibilityLabel = intl.string(tmp7(1113).t.dcl9MQ);
    obj15.onPress = prop1;
    obj15.style = tmp36.absoluteFillObject;
    tmp60Result5 = tmp60(ref, obj15);
  }
  items15[4] = tmp60Result5;
  if (isScrollIndicatorEnabled) {
    const obj16 = { opacityStyle: animatedStyle1, enabled: null, isEndCardVisible: null };
    if (isActive) {
      isActive = tmp3;
    }
    obj16.enabled = isActive;
    obj16.isEndCardVisible = isEndCardVisible;
    isScrollIndicatorEnabled = tmp60(tmp11(17232), obj16);
    const tmp11Result = tmp11(17232);
  }
  items15[5] = isScrollIndicatorEnabled;
  const obj17 = { style: null, pointerEvents: "box-none", children: null };
  const items20 = [absoluteFillObject.absoluteFillObject, animatedStyle1];
  obj17.style = items20;
  const obj18 = { bounty, visible: null, sourceQuestContent: null };
  const tmp59 = callback;
  const tmp61 = c5;
  const tmp7Result8 = require("module_1652");
  if (isCtaVisible) {
    isCtaVisible = !isEndCardVisible;
  }
  const obj19 = { children: null };
  obj18.visible = isCtaVisible;
  obj18.sourceQuestContent = sourceQuestContent;
  obj17.children = videoRenditions(BountiesModalAdvertiserCtaDefault, obj18);
  items15[6] = videoRenditions(module_1652.View, obj17);
  obj6.children = items15;
  const items21 = [memo(tmp61, obj6), ];
  const obj20 = { style: null, children: videoRenditions(BountiesModalProgressDefault, { progress: normalizedProgress, visible: isProgressBarVisible }) };
  const items22 = [tmp.progress, animatedStyle1];
  obj20.style = items22;
  items21[1] = videoRenditions(module_1652.View, obj20);
  obj5.children = items21;
  obj3.children = memo(module_1652.View, obj5);
  const items23 = [videoRenditions(module_1652.View, obj3), ];
  const obj21 = { style: null, children: null };
  const items24 = [tmp.leftRow, animatedStyle1];
  obj21.style = items24;
  const items25 = [videoRenditions(BountiesModalTimerDefault, { isCompleted, totalSeconds: rewardTotalSeconds, remainingSeconds: rewardRemainingSeconds }), videoRenditions(require("virtual_currency/BalanceWidgetPill").BalanceWidgetPill, { balance: orbsBalance }, balanceWidgetPillResetKey)];
  obj21.children = items25;
  items23[1] = memo(module_1652.View, obj21);
  obj19.children = items23;
  return memo(tmp59, obj19);
}