// === Module 15026: AdVideoPlayer ===

// Module 15026 (AdVideoPlayer)
import nativeDefault from "native" /* 576 */;
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1109 */;
import PlatformUtils from "PlatformUtils" /* 1115 */;
import timing from "timing" /* 4561 */;
import timingPresets from "timingPresets" /* 4564 */;
import spring from "spring" /* 4974 */;
import springPresets from "springPresets" /* 4978 */;
import _modDef8308 from "module_8308" /* 8308 */;
import AdsVideoTypes from "AdsVideoTypes" /* 15015 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AppStateStore from "AppStateStore" /* 1895 */;
import n from "module_672" /* 672 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, StyleSheet, Pressable: metroRequire, ActivityIndicator: closure_7 } = get_ActivityIndicator);
const Constants = fn(1074);
({ AppStates: closure_9, ComponentActions: c10 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
let rect = { left: nativeDefault.space.PX_16, right: nativeDefault.space.PX_16, top: nativeDefault.space.PX_16, bottom: nativeDefault.space.PX_16 };
const _isNativeReflectConstruct = noop.memo(_modDef8308);
function hasVideoEnded(arg0, arg1) {
  return arg0 >= arg1 - 1;
}
hasVideoEnded.__closure = {};
hasVideoEnded.__workletHash = 8992945176371;
hasVideoEnded.__initData = { code: "function hasVideoEnded_AdVideoPlayerTsx1(currentTime,videoDuration){return currentTime>=videoDuration-1;}" };
function canSeekForward(arg0, arg1, arg2, arg3) {
  if (typeof hasVideoEnded === "function") {
    let tmp4 = !tmp3;
    if (arg0 < arg2 - 1) {
      let tmp5 = arg3;
      if (!arg3) {
        tmp5 = arg0 <= arg1 - 1;
      }
      tmp4 = tmp5;
    }
    return tmp4;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}
canSeekForward.__closure = { hasVideoEnded };
canSeekForward.__workletHash = 14098132092693;
canSeekForward.__initData = { code: "function canSeekForward_AdVideoPlayerTsx2(currentTime,maxTimestamp,videoDuration,allowUnrestrictedSeeking){const{hasVideoEnded}=this.__closure;return!hasVideoEnded(currentTime,videoDuration)&&(allowUnrestrictedSeeking||currentTime<=maxTimestamp-1);}" };
fn(4560);
let obj = { container: null, loadingContainer: null, bufferingSpinner: null, bufferingSpinnerCentered: null, video: null, videoContainer: null, controls: null, controlsTopBottom: null, controlsMiddle: null, controlsTop: null, controlsBottom: null, progressContainer: null, progress: null, icon: null, iconDisabled: null, controlButton: null };
obj = {};
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj.container = obj;
let obj1 = {};
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj1.backgroundColor = nativeDefault.colors.BACKGROUND_BASE_LOWEST;
obj1.justifyContent = "center";
obj1.alignItems = "center";
obj.loadingContainer = obj1;
obj.bufferingSpinner = { position: "absolute" };
const createStyles = {};
const merged2 = Object.assign(StyleSheet.absoluteFillObject);
createStyles.justifyContent = "center";
createStyles.alignItems = "center";
obj.bufferingSpinnerCentered = createStyles;
obj.video = { height: "100%", width: "100%" };
obj.videoContainer = { position: "relative", height: "100%", width: "100%" };
let obj3 = {};
const merged3 = Object.assign(StyleSheet.absoluteFillObject);
const importDefaultResultResult = n(nativeDefault.unsafe_rawColors.BLACK);
obj3.backgroundColor = n(nativeDefault.unsafe_rawColors.BLACK).alpha(0.5).hex();
obj3.justifyContent = "center";
obj3.alignItems = "center";
obj3.flexDirection = "column";
obj.controls = obj3;
const rect1 = { flexDirection: "row", justifyContent: "flex-end", padding: nativeDefault.space.PX_8, position: "absolute", left: 0, right: 0 };
obj.controlsTopBottom = rect1;
const alphaResult = n(nativeDefault.unsafe_rawColors.BLACK).alpha(0.5);
obj.controlsMiddle = { justifyContent: "center", alignItems: "center", flexGrow: 1, flexDirection: "row", gap: nativeDefault.space.PX_24, pointerEvents: "box-none" };
obj.controlsTop = { top: 0 };
obj.controlsBottom = { bottom: 0 };
const rect2 = { position: "absolute", bottom: 0, right: 0, left: 0, justifyContent: "flex-end", height: nativeDefault.space.PX_16, overflow: "hidden" };
obj.progressContainer = rect2;
let obj4 = { justifyContent: "center", alignItems: "center", flexGrow: 1, flexDirection: "row", gap: nativeDefault.space.PX_24, pointerEvents: "box-none" };
obj.progress = { height: 1, backgroundColor: nativeDefault.colors.WHITE, shadowOffset: { width: 0, height: 0 }, shadowRadius: 6, shadowOpacity: 1, elevation: 5, shadowColor: nativeDefault.colors.WHITE };
let obj5 = { height: 1, backgroundColor: nativeDefault.colors.WHITE, shadowOffset: { width: 0, height: 0 }, shadowRadius: 6, shadowOpacity: 1, elevation: 5, shadowColor: nativeDefault.colors.WHITE };
obj.icon = { color: nativeDefault.colors.TEXT_DEFAULT };
let obj6 = { color: nativeDefault.colors.TEXT_DEFAULT };
obj.iconDisabled = { color: nativeDefault.colors.TEXT_SUBTLE };
let obj7 = { color: nativeDefault.colors.TEXT_SUBTLE };
obj.controlButton = { padding: nativeDefault.space.PX_8 };
let closure_17 = createStyles.createStyles(obj);
let closure_18 = { code: "function shouldShowControls_AdVideoPlayerTsx3(){const{hasLoaded,hideControls,showControls,playerState,PlayerState,isVideoEnded}=this.__closure;return hasLoaded&&!hideControls&&(showControls.get()||playerState===PlayerState.PAUSED||playerState===PlayerState.ENDED||playerState===PlayerState.ERRORED||isVideoEnded);}" };
let __initData = { code: "function AdVideoPlayerTsx4(){const{shouldShowControls,withSpring,SUBTLE_SPRING}=this.__closure;const show=shouldShowControls();return{opacity:withSpring(show?1:0,SUBTLE_SPRING),pointerEvents:show?'auto':'none'};}" };
let closure_20 = { code: "function AdVideoPlayerTsx5(){const{withTiming,progressSharedValue,timingFast}=this.__closure;return{width:withTiming(progressSharedValue.get()*100+\"%\",timingFast,'animate-always')};}" };
let obj8 = { padding: nativeDefault.space.PX_8 };
let size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/AdVideoPlayer.tsx");

export const AdVideoPlayer = noop.memo((initialProgress) => {
  initialProgress = initialProgress.initialProgress;
  onBuffer = initialProgress;
  let num = initialProgress.contentDuration;
  if (num === undefined) {
    num = 0;
  }
  let flag = initialProgress.allowUnrestrictedSeeking;
  if (flag === undefined) {
    flag = false;
  }
  importDefault = flag;
  flag2 = initialProgress.disableResumeOnLoad;
  if (flag2 === undefined) {
    flag2 = false;
  }
  ({ isFullscreen, contentInsets, captionsEnabled, style, externallyPaused } = initialProgress);
  if (captionsEnabled === undefined) {
    captionsEnabled = false;
  }
  ({ renderCaptions, onLoadStart } = initialProgress);
  const onLoad = initialProgress.onLoad;
  const onReadyForDisplay = initialProgress.onReadyForDisplay;
  const onProgress = initialProgress.onProgress;
  const onSeek = initialProgress.onSeek;
  ({ onBuffer, onError } = initialProgress);
  const onEnd = initialProgress.onEnd;
  const onPlayerStateChange = initialProgress.onPlayerStateChange;
  const onPausePlayback = initialProgress.onPausePlayback;
  const onResumePlayback = initialProgress.onResumePlayback;
  ({ videoRef, bufferingSpinnerPlacement, onToggleCaptions, onOpenTranscript, onToggleFullscreen, onVideoTracks, onVideoLayout } = initialProgress);
  if (bufferingSpinnerPlacement === undefined) {
    bufferingSpinnerPlacement = "top-left";
  }
  let flag3 = initialProgress.showCaptionsButton;
  if (flag3 === undefined) {
    flag3 = false;
  }
  let flag4 = initialProgress.showTranscriptButton;
  if (flag4 === undefined) {
    flag4 = false;
  }
  let flag5 = initialProgress.showFullscreenButton;
  if (flag5 === undefined) {
    flag5 = false;
  }
  let flag6 = initialProgress.showProgress;
  if (flag6 === undefined) {
    flag6 = false;
  }
  let flag7 = initialProgress.showSkipButtons;
  if (flag7 === undefined) {
    flag7 = true;
  }
  let flag8 = initialProgress.hideControls;
  if (flag8 === undefined) {
    flag8 = false;
  }
  ({ repeat, httpEngine, automaticallyWaitsToMinimizeStalling, maxBitRate, bufferConfig, preferredForwardBufferDuration } = initialProgress);
  if (repeat === undefined) {
    repeat = false;
  }
  videoRef = undefined;
  let first;
  closure_17 = undefined;
  let first1;
  __initData = undefined;
  let first2;
  closure_21 = undefined;
  let first3;
  closure_23 = undefined;
  let callback;
  closure_28 = undefined;
  let sharedValue;
  let shouldShowControls;
  let sharedValue1;
  closure_32 = undefined;
  let callback2;
  c34 = undefined;
  let callback4;
  let callback6;
  let callback8;
  let callback9;
  closure_40 = undefined;
  let callback17;
  let tmp = closure_17();
  let obj = onLoad;
  if (videoRef == null) {
    videoRef = onLoad.useRef(null);
  }
  const tmp3 = onLoadStart(obj.useState(num), 2);
  first = tmp3[0];
  closure_17 = tmp3[1];
  obj = {};
  let merged = Object.assign(initialProgress);
  const tmp6 = onLoadStart(obj.useState(obj), 2);
  first1 = tmp6[0];
  __initData = tmp6[1];
  const tmp9 = flag2;
  const tmp10 = onLoadStart(obj.useState(onBuffer(flag2[10]).PlayerState.LOADING), 2);
  first2 = tmp10[0];
  closure_21 = tmp10[1];
  const tmp12 = onLoadStart(obj.useState(false), 2);
  first3 = tmp12[0];
  closure_23 = tmp12[1];
  obj.useRef(null);
  obj.useRef(0);
  obj.useRef([]);
  let items = [onPlayerStateChange];
  callback = obj.useCallback((arg0) => {
    closure_21(arg0);
    if (onPlayerStateChange != null) {
      onPlayerStateChange(arg0);
    }
  }, items);
  let tmp15 = first3;
  if (first3) {
    tmp15 = first2 === tmp8(tmp9[10]).PlayerState.ENDED;
  }
  if (tmp15) {
    if (typeof videoRef === "function") {
      tmp15 = tmp17 >= tmp18 - 1;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
  closure_28 = tmp15;
  let tmp8Result = tmp8(tmp9[11]);
  sharedValue = tmp8Result.useSharedValue(false);
  shouldShowControls = function shouldShowControls() {
    let tmp = first3;
    if (first3) {
      tmp = !flag8;
    }
    if (tmp) {
      value = sharedValue.get();
      if (!value) {
        value = first2 === AdsVideoTypes.PlayerState.PAUSED;
      }
      if (!value) {
        value = first2 === AdsVideoTypes.PlayerState.ENDED;
      }
      if (!value) {
        value = first2 === AdsVideoTypes.PlayerState.ERRORED;
      }
      if (!value) {
        value = closure_28;
      }
      tmp = value;
    }
    return tmp;
  };
  obj = { hasLoaded: first3, hideControls: flag8, showControls: sharedValue, playerState: first2, PlayerState: tmp8(tmp9[10]).PlayerState, isVideoEnded: tmp15 };
  shouldShowControls.__closure = obj;
  shouldShowControls.__workletHash = 8094403036162;
  shouldShowControls.__initData = first1;
  tmp8Result = tmp8(tmp9[11]);
  class Se {
    constructor() {
      tmp = shouldShowControls();
      tmp2 = closure_0;
      tmp3 = closure_2;
      obj = closure_0(closure_2[12]);
      num = 0;
      if (tmp) {
        num = 1;
      }
      obj = { opacity: obj.withSpring(num, tmp2(tmp3[13]).SUBTLE_SPRING), pointerEvents: null };
      str = "none";
      if (tmp) {
        str = "auto";
      }
      obj.pointerEvents = str;
      return obj;
    }
  }
  Se.__closure = { shouldShowControls, withSpring: onBuffer(tmp9[12]).withSpring, SUBTLE_SPRING: onBuffer(tmp9[13]).SUBTLE_SPRING };
  Se.__workletHash = 311315682972;
  Se.__initData = __initData;
  const animatedStyle = tmp8Result.useAnimatedStyle(Se);
  const obj1 = { shouldShowControls, withSpring: onBuffer(tmp9[12]).withSpring, SUBTLE_SPRING: onBuffer(tmp9[13]).SUBTLE_SPRING };
  const shouldShowControlsResult = shouldShowControls();
  sharedValue1 = onBuffer(tmp9[11]).useSharedValue(0);
  const tmp8Result1 = onBuffer(tmp9[11]);
  class Pe {
    constructor() {
      obj = { width: null };
      obj2 = closure_0(closure_2[14]);
      result = 100 * closure_31.get();
      obj.width = obj2.withTiming(`${tmp}%`, closure_0(closure_2[15]).timingFast, "animate-always");
      return obj;
    }
  }
  const tmp8Result2 = onBuffer(tmp9[11]);
  Pe.__closure = { withTiming: onBuffer(tmp9[14]).withTiming, progressSharedValue: sharedValue1, timingFast: onBuffer(tmp9[15]).timingFast };
  Pe.__workletHash = 11793601648786;
  Pe.__initData = first2;
  const animatedStyle1 = tmp8Result2.useAnimatedStyle(Pe);
  closure_32 = obj.useRef(-1);
  let items1 = [sharedValue];
  const callback1 = obj.useCallback((arg0) => {
    closure_0 = arg0;
    return () => {
      const items = [...arguments];
      clearTimeout(ref.current);
      let result = sharedValue.set(true);
      ref.current = setTimeout(() => {
        const result = closure_1_29.set(false);
      }, 2000);
      if (null != closure_0) {
        const items1 = [];
        HermesBuiltin.arraySpread(items, 0);
        return HermesBuiltin.apply(items1, undefined);
      }
    };
  }, items1);
  callback2 = obj.useCallback((timestampSec, duration) => {
    closure_19((maxTimestampSec) => ({ timestampSec, maxTimestampSec: Math.max(maxTimestampSec.maxTimestampSec, Math.floor(timestampSec)), duration }));
  }, []);
  let tmp2Result = tmp2(obj.useState(false), 2);
  [tmp27, c34] = tmp2Result;
  const items2 = [onReadyForDisplay];
  const items3 = [flag, , , ];
  ({ duration: arr4[1], maxTimestampSec: arr4[2] } = first1);
  items3[3] = videoRef;
  const callback3 = obj.useCallback(() => {
    if (onReadyForDisplay != null) {
      tmp();
    }
    _undefined(true);
  }, items2);
  callback4 = obj.useCallback((arg0) => {
    let seek = videoRef;
    if (null != videoRef.current) {
      let bound = first1;
      const _Math = Math;
      const _Math2 = Math;
      bound = Math.max(0, Math.min(arg0, closure_1 ? bound.duration : bound.maxTimestampSec));
      ref3.current = (ref3.current + 1) % 100;
      const current = seek.current;
      seek = current.seek;
      seek(bound + 0.0001 * ref3.current);
      closure_24.current = bound;
    }
  }, items3);
  const items4 = [callback4, first2, callback, onResumePlayback, onPausePlayback];
  const imperativeHandle = obj.useImperativeHandle(initialProgress.ref, () => ({
    seekToStart() {
      if (first2 !== onBuffer(flag2[10]).PlayerState.ERRORED) {
        callback4(0);
        if (first2 === onBuffer(flag2[10]).PlayerState.ENDED) {
          callback(onBuffer(flag2[10]).PlayerState.PLAYING);
          if (onResumePlayback != null) {
            tmp8(onBuffer(flag2[10]).PlaybackTriggerSource.IMPERATIVE_API);
          }
        }
      }
    },
    play() {
      if (first2 === onBuffer(flag2[10]).PlayerState.PAUSED) {
        callback(onBuffer(flag2[10]).PlayerState.PLAYING);
        if (onResumePlayback != null) {
          tmp5(onBuffer(flag2[10]).PlaybackTriggerSource.IMPERATIVE_API);
        }
      }
    },
    pause() {
      if (first2 === onBuffer(flag2[10]).PlayerState.PLAYING) {
        callback(onBuffer(flag2[10]).PlayerState.PAUSED);
        if (onPausePlayback != null) {
          tmp5(onBuffer(flag2[10]).PlaybackTriggerSource.IMPERATIVE_API);
        }
      }
    }
  }), items4);
  const items5 = [videoRef, initialProgress.timestampSec, flag2, callback, onLoad, callback4];
  const items6 = [first2, onPausePlayback, onResumePlayback, tmp15, callback, callback4];
  const callback5 = obj.useCallback((duration) => {
    duration = duration.duration;
    closure_17(duration);
    closure_23(true);
    if (null != videoRef.current) {
      const timestampSec = onBuffer.timestampSec;
      let tmp5 = !flag2;
      if (!flag2) {
        tmp5 = timestampSec > 5;
      }
      if (tmp5) {
        tmp5 = timestampSec < duration - 3;
      }
      if (tmp5) {
        callback4(timestampSec - 1);
      }
      callback(AdsVideoTypes.PlayerState.PLAYING);
      if (onLoad != null) {
        onLoad(duration);
      }
    }
  }, items5);
  callback6 = obj.useCallback(() => {
    let obj = arg0;
    if (arg0 === undefined) {
      obj = {};
    }
    let flag = obj.shouldRestartVideo;
    if (flag === undefined) {
      flag = true;
    }
    if (first2 !== AdsVideoTypes.PlayerState.ERRORED) {
      if (first2 !== AdsVideoTypes.PlayerState.PAUSED) {
        if (first2 !== AdsVideoTypes.PlayerState.LOADING) {
          if (first2 === AdsVideoTypes.PlayerState.PLAYING) {
            callback(AdsVideoTypes.PlayerState.PAUSED);
            if (onPausePlayback != null) {
              tmp16(AdsVideoTypes.PlaybackTriggerSource.USER_INTERACTION);
            }
          }
        }
      }
      callback(AdsVideoTypes.PlayerState.PLAYING);
      if (onResumePlayback != null) {
        tmp6(AdsVideoTypes.PlaybackTriggerSource.USER_INTERACTION);
      }
    }
    callback4(0);
    callback(AdsVideoTypes.PlayerState.PLAYING);
    if (onResumePlayback != null) {
      tmp11(AdsVideoTypes.PlaybackTriggerSource.USER_INTERACTION);
    }
  }, items6);
  const items7 = [callback6];
  const callback7 = obj.useCallback(() => callback6(), items7);
  obj.useRef(false);
  const items8 = [first2, callback, onPausePlayback];
  callback8 = obj.useCallback(() => {
    closure_37.current = false;
    if (first2 === AdsVideoTypes.PlayerState.PLAYING) {
      closure_37.current = true;
      callback(AdsVideoTypes.PlayerState.PAUSED);
      if (onPausePlayback != null) {
        tmp6(AdsVideoTypes.PlaybackTriggerSource.SYSTEM_INITIATED);
      }
    }
  }, items8);
  const items9 = [first2, callback, onResumePlayback];
  callback9 = obj.useCallback(() => {
    if (ref5.current) {
      tmp.current = false;
      if (first2 !== AdsVideoTypes.PlayerState.ERRORED) {
        callback(AdsVideoTypes.PlayerState.PLAYING);
        if (onResumePlayback != null) {
          tmp7(AdsVideoTypes.PlaybackTriggerSource.SYSTEM_INITIATED);
        }
      }
    }
  }, items9);
  const items10 = [callback8, callback9];
  const effect = obj.useEffect(() => {
    let ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
    const subscription = ComponentDispatch.subscribe(constants.QUEST_GAME_LINK_OPENED, callback8);
    let ComponentDispatch2 = ComponentDispatchUtils.ComponentDispatch;
    const subscription1 = ComponentDispatch2.subscribe(constants.QUEST_APP_STORE_OVERLAY_FINISHED, callback9);
    return () => {
      const ComponentDispatch = onBuffer(flag2[16]).ComponentDispatch;
      ComponentDispatch.unsubscribe(onPlayerStateChange.QUEST_GAME_LINK_OPENED, callback8);
      const ComponentDispatch2 = onBuffer(flag2[16]).ComponentDispatch;
      ComponentDispatch2.unsubscribe(onPlayerStateChange.QUEST_APP_STORE_OVERLAY_FINISHED, callback9);
    };
  }, items10);
  const items11 = [sharedValue, callback6];
  const items12 = [first, sharedValue1, onSeek, callback2, videoRef];
  const callback10 = obj.useCallback(() => {
    if (sharedValue.get()) {
      const result = sharedValue.set(false);
    }
    callback6({ shouldRestartVideo: false });
  }, items11);
  const callback11 = obj.useCallback((currentTime) => {
    const current = ref4.current;
    let arr = current.shift();
    if (arr == null) {
      arr = null;
    }
    if (null != videoRef.current) {
      closure_24.current = null;
      if (first > 0) {
        const result = sharedValue1.set(currentTime.currentTime / first);
        callback2(currentTime.currentTime, first);
      }
      if (onSeek != null) {
        const obj = {};
        const merged = Object.assign(currentTime);
        obj.fromTimeSec = arr;
        tmp9(obj);
      }
    }
  }, items12);
  let tmp39 = first2 === tmp8(tmp9[10]).PlayerState.ERRORED;
  if (!tmp39) {
    let timestampSec = first1.timestampSec;
    if (typeof first === "function") {
      if (typeof videoRef === "function") {
        let tmp45 = !tmp44;
        if (timestampSec < tmp42 - 1) {
          if (!flag) {
            flag = timestampSec <= tmp41 - 1;
          }
          tmp45 = flag;
        }
        tmp39 = !tmp45;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
  closure_40 = tmp39;
  const items13 = [callback4, first, sharedValue1, tmp39];
  const items14 = [callback4, first, sharedValue1, first2, callback];
  const callback12 = obj.useCallback(() => {
    if (!closure_40) {
      let current = ref2.current;
      if (current == null) {
        current = sharedValue1.get() * first;
      }
      current = ref4.current;
      current.push(current);
      callback4(current + 10);
    }
  }, items13);
  let obj2 = { withTiming: onBuffer(tmp9[14]).withTiming, progressSharedValue: sharedValue1, timingFast: onBuffer(tmp9[15]).timingFast };
  const items15 = [sharedValue1, callback2, onProgress];
  const callback1Result = callback1(obj.useCallback(() => {
    let current = ref2.current;
    if (current == null) {
      current = sharedValue1.get() * first;
    }
    current = ref4.current;
    current.push(current);
    callback4(current - 10);
    if (first2 === AdsVideoTypes.PlayerState.ENDED) {
      callback(AdsVideoTypes.PlayerState.PLAYING);
    }
  }, items14));
  const items16 = [callback, onEnd, repeat];
  const callback13 = obj.useCallback((seekableDuration) => {
    let num = 0;
    if (0 !== seekableDuration.seekableDuration) {
      num = seekableDuration.currentTime / seekableDuration.seekableDuration;
    }
    callback2(seekableDuration.currentTime, seekableDuration.seekableDuration);
    const result = sharedValue1.set(num);
    if (onProgress != null) {
      const obj = { currentTime: null, seekableDuration: null, progress: null };
      ({ currentTime: obj.currentTime, seekableDuration: obj.seekableDuration } = seekableDuration);
      obj.progress = num;
      tmp3(obj);
    }
  }, items15);
  const items17 = [callback, onLoadStart];
  const callback14 = obj.useCallback(() => {
    if (!repeat) {
      callback(AdsVideoTypes.PlayerState.ENDED);
    }
    if (onEnd != null) {
      tmp5();
    }
  }, items16);
  const items18 = [callback, onError];
  const callback15 = obj.useCallback(() => {
    callback(AdsVideoTypes.PlayerState.LOADING);
    if (onLoadStart != null) {
      onLoadStart();
    }
  }, items17);
  const callback16 = obj.useCallback((arg0) => {
    callback(AdsVideoTypes.PlayerState.ERRORED);
    if (onError != null) {
      tmp2(arg0);
    }
  }, items18);
  const callback1Result1 = callback1(callback12);
  const items19 = [onError];
  const tmp53 = onBuffer(tmp9[17]).useStateFromStores(items19, () => onError.getState()) === onEnd.ACTIVE;
  const items20 = [videoRef];
  const layoutEffect = obj.useLayoutEffect(() => {
    if (obj.isAndroid()) {
      const current = videoRef.current;
      return () => {
        try {
          if (current != null) {
            const setNativeProps = current.setNativeProps;
            if (setNativeProps != null) {
              const obj = { paused: true, repeat: false, src: { uri: null } };
              setNativeProps(obj);
            }
          }
        } catch (tmp4) {
          closure_1(flag2[19]).captureException(tmp4);
          const obj2 = closure_1(flag2[19]);
        }
      };
    }
    obj = PlatformUtils;
  }, items20);
  let tmp55 = !tmp53;
  if (tmp53) {
    tmp55 = first2 === tmp8(tmp9[10]).PlayerState.PAUSED;
  }
  if (!tmp55) {
    tmp55 = first2 === tmp8(tmp9[10]).PlayerState.LOADING;
  }
  if (!tmp55) {
    tmp55 = externallyPaused;
  }
  importDefault = obj.useRef(false);
  tmp2Result = tmp2(obj.useState(false), 2);
  [tmp57, flag2] = tmp2Result;
  const items21 = [onBuffer];
  callback17 = obj.useCallback((current) => {
    flag2(current);
    if (current !== ref.current) {
      ref.current = current;
      if (onBuffer != null) {
        onBuffer(current);
      }
    }
  }, items21);
  const items22 = [callback17, first2];
  const items23 = [callback17];
  const callback18 = obj.useCallback((isBuffering) => {
    isBuffering = isBuffering.isBuffering;
    if (!isBuffering) {
      if (!isBuffering) {
        callback17(false);
      }
    } else {
      if (first2 !== AdsVideoTypes.PlayerState.LOADING) {
        PlatformUtils;
      }
      callback17(true);
    }
  }, items22);
  const items24 = [callback17];
  const callback19 = obj.useCallback(() => {
    if (obj.isIOS()) {
      callback17(true);
    }
    obj = PlatformUtils;
  }, items23);
  const callback20 = obj.useCallback(() => {
    if (obj.isIOS()) {
      callback17(false);
    }
    obj = PlatformUtils;
  }, items24);
  rect = require("useSafeAreaInsets")();
  let tmp63 = isFullscreen;
  if (isFullscreen) {
    tmp63 = null != rect;
  }
  if (tmp63) {
    const obj3 = { paddingRight: null, paddingLeft: null };
    let _Math = Math;
    obj3.paddingRight = Math.max(rect.right, flag8.right);
    let _Math2 = Math;
    obj3.paddingLeft = Math.max(rect.left, flag8.left);
    tmp63 = obj3;
  }
  const obj4 = { style: null, accessible: false, children: null };
  const items25 = [tmp.container, style];
  obj4.style = items25;
  const obj5 = { style: null, onPress: callback10, accessible: !shouldShowControlsResult, accessibilityLabel: null, children: null };
  const items26 = [tmp.videoContainer];
  obj5.style = items26;
  const intl = tmp8(tmp9[21]).intl;
  const t = tmp8(tmp9[21]).t;
  obj5.accessibilityLabel = intl.string(tmp55 ? t.R3aFPe : t.fTMEUi);
  let tmp66Result = first2 !== tmp8(tmp9[10]).PlayerState.ERRORED;
  if (tmp66Result) {
    const obj6 = { mixWithOthers: "inherit", httpEngine, automaticallyWaitsToMinimizeStalling, maxBitRate, bufferConfig, preferredForwardBufferDuration, ref: videoRef, accessible: false, importantForAccessibility: "no-hide-descendants", accessibilityRole: "none", style: tmp.video, paused: tmp55, repeat, source: initialProgress.source, onBuffer: callback18, onPlaybackStalled: callback19, onPlaybackResume: callback20, onLoad: callback5, onSeek: callback11, onProgress: callback13, onLoadStart: callback15, onEnd: callback14, onError: callback16, onReadyForDisplay: callback3, onVideoTracks, onLayout: onVideoLayout, resizeMode: "contain" };
    tmp66Result = tmp66(repeat, obj6);
  }
  const items27 = [tmp66Result, , , , , ];
  let renderCaptionsResult;
  if (renderCaptions != null) {
    renderCaptionsResult = renderCaptions(first1.timestampSec);
  }
  items27[1] = renderCaptionsResult;
  if (!tmp57) {
    items27[2] = tmp57;
    tmp66Result = !tmp27;
    if (!tmp27) {
      const obj7 = { style: tmp.loadingContainer, children: tmp66(onSeek, { animating: true }) };
      tmp66Result = tmp66(tmp67, obj7);
    }
    items27[3] = tmp66Result;
    const obj8 = { style: null, accessible: false, children: null };
    const items28 = [tmp.controls, animatedStyle];
    obj8.style = items28;
    let tmp68Result = flag3;
    if (!flag3) {
      tmp68Result = flag4;
    }
    if (tmp68Result) {
      const obj9 = { style: null, children: null };
      const items29 = [, , ];
      ({ controlsTopBottom: arr31[0], controlsTop: arr31[1] } = tmp);
      items29[2] = tmp63;
      obj9.style = items29;
      if (!flag3) {
        const items30 = [flag3, ];
        if (flag4) {
          const obj10 = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, style: null, children: null };
          const intl3 = tmp8(tmp9[21]).intl;
          obj10.accessibilityLabel = intl3.string(tmp8(tmp9[21]).t.KCzjTi);
          obj10.onPress = onOpenTranscript;
          obj10.style = tmp.controlButton;
          const obj11 = { color: tmp.iconDisabled.color };
          obj10.children = tmp66(tmp8(tmp9[24]).TranscriptOutlineIcon, obj11);
          flag4 = tmp66(tmp8(tmp9[22]).PressableOpacity, obj10);
        }
        items30[1] = flag4;
        obj9.children = items30;
        tmp68Result = tmp68(tmp67, obj9);
      } else {
        const obj12 = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, style: null, children: null };
        const intl2 = tmp8(tmp9[21]).intl;
        obj12.accessibilityLabel = intl2.string(tmp8(tmp9[21]).t.bDSZO1);
        obj12.onPress = onToggleCaptions;
        obj12.style = tmp.controlButton;
        if (captionsEnabled) {
          let color = tmp.icon.color;
        } else {
          color = tmp.iconDisabled.color;
        }
        const obj13 = { color };
        obj12.children = tmp66(tmp8(tmp9[23]).ClosedCaptionsOutlineIcon, obj13);
        tmp66(tmp8(tmp9[22]).PressableOpacity, obj12);
      }
    }
    const items31 = [tmp68Result, , ];
    const obj14 = { style: tmp.controlsMiddle, children: null };
    let tmp66Result2 = flag7;
    if (flag7) {
      const obj15 = { disabled: first2 === tmp8(tmp9[10]).PlayerState.ERRORED, accessibilityRole: "button", accessibilityLabel: null, onPress: null, children: null };
      const intl4 = tmp8(tmp9[21]).intl;
      obj15.accessibilityLabel = intl4.string(tmp8(tmp9[21]).t.r9s3Uv);
      obj15.onPress = callback1Result;
      const size = { color: tmp.icon.color, width: 16, height: 16 };
      obj15.children = tmp66(tmp8(tmp9[26]).SkipBackwardIcon, size);
      tmp66Result2 = tmp66(tmp8(tmp9[25]).VideoQuestPlayerControlButton, obj15);
    }
    const items32 = [tmp66Result2, , ];
    if (!tmp15) {
      if (first2 !== tmp8(tmp9[10]).PlayerState.ERRORED) {
        const t2 = tmp8(tmp9[21]).t;
        let K0e7M9 = tmp55 ? t2.R3aFPe : t2.fTMEUi;
      }
      const obj16 = { accessibilityRole: "button", accessibilityLabel: tmp80(K0e7M9), onPress: callback7, children: null };
      if (!tmp15) {
        if (first2 !== tmp8(tmp9[10]).PlayerState.ERRORED) {
          if (tmp55) {
            let PauseIcon = tmp8(tmp9[28]).PlayIcon;
          } else {
            PauseIcon = tmp8(tmp9[29]).PauseIcon;
          }
          let tmp66Result3 = tmp66(PauseIcon, { size: "lg" });
        }
        obj16.children = tmp66Result3;
        items32[1] = tmp66(tmp8(tmp9[25]).VideoQuestPlayerControlButton, obj16);
        if (flag7) {
          const obj17 = { disabled: tmp39, accessibilityRole: "button", accessibilityLabel: null, onPress: null, children: null };
          const intl5 = tmp8(tmp9[21]).intl;
          obj17.accessibilityLabel = intl5.string(tmp8(tmp9[21]).t.zWDcNP);
          obj17.onPress = callback1Result1;
          const size1 = { color: tmp.icon.color, width: 16, height: 16 };
          obj17.children = tmp66(tmp8(tmp9[30]).SkipForwardIcon, size1);
          flag7 = tmp66(tmp8(tmp9[25]).VideoQuestPlayerControlButton, obj17);
        }
        items32[2] = flag7;
        obj14.children = items32;
        items31[1] = tmp68(tmp67, obj14);
        if (flag5) {
          const obj18 = { style: null, children: null };
          const items33 = [, , ];
          ({ controlsTopBottom: arr35[0], controlsBottom: arr35[1] } = tmp);
          items33[2] = tmp63;
          obj18.style = items33;
          const obj19 = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, style: null, children: null };
          const intl6 = tmp8(tmp9[21]).intl;
          obj19.accessibilityLabel = intl6.string(tmp8(tmp9[21]).t.vKZT5t);
          obj19.onPress = onToggleFullscreen;
          obj19.style = tmp.controlButton;
          obj19.children = tmp66(tmp8(tmp9[31]).FullscreenEnterIcon, {});
          obj18.children = tmp66(tmp8(tmp9[22]).PressableOpacity, obj19);
          flag5 = tmp66(tmp67, obj18);
        }
        items31[2] = flag5;
        obj8.children = items31;
        items27[4] = tmp68(tmp62(tmp9[11]).View, obj8);
        if (flag6) {
          const obj20 = { style: tmp.progressContainer, children: null };
          const obj21 = { style: null };
          const items34 = [tmp.progress, animatedStyle1];
          obj21.style = items34;
          obj20.children = tmp66(tmp62(tmp9[11]).View, obj21);
          flag6 = tmp66(tmp67, obj20);
        }
        items27[5] = flag6;
        obj5.children = items27;
        obj4.children = tmp68(onProgress, obj5);
        return tmp66(tmp67, obj4);
      }
      tmp66Result3 = tmp66(tmp8(tmp9[27]).RetryIcon, { size: "lg" });
    }
    K0e7M9 = tmp8(tmp9[21]).t.K0e7M9;
  } else {
    let items35 = [tmp.bufferingSpinner, ];
    if (!isFullscreen) {
      if ("center" !== bufferingSpinnerPlacement) {
        let num4;
        if (contentInsets != null) {
          num4 = contentInsets.top;
        }
        if (num4 == null) {
          num4 = 0;
        }
        rect = { top: num4, left: null };
        let num5;
        if (contentInsets != null) {
          num5 = contentInsets.left;
        }
        if (num5 == null) {
          num5 = 0;
        }
        rect.left = num5;
      }
      const obj22 = { animating: true, style: null, color: null };
      items35[1] = rect;
      obj22.style = items35;
      items35 = tmp62(tmp9[6]).unsafe_rawColors.WHITE;
      obj22.color = items35;
      tmp66(tmp73, obj22);
    }
    rect = tmp.bufferingSpinnerCentered;
  }
});