// === Module 16879: AdVideoPlayer ===

// Module 16879 (AdVideoPlayer)
import nativeDefault from "native" /* 575 */;
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1109 */;
import PlatformUtils from "PlatformUtils" /* 1376 */;
import timing from "timing" /* 5249 */;
import timingPresets from "timingPresets" /* 5252 */;
import spring from "spring" /* 5632 */;
import springPresets from "springPresets" /* 5633 */;
import media_playback_VideoDefault from "media_playback/Video" /* 8865 */;
import AdsVideoTypes from "AdsVideoTypes" /* 16864 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AppStateStore from "AppStateStore" /* 1994 */;
import n from "module_671" /* 671 */;

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, StyleSheet, Pressable: metroRequire, ActivityIndicator: closure_7 } = get_ActivityIndicator);
const Constants = fn(1072);
({ AppStates: closure_9, ComponentActions: c10 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
let rect = { left: nativeDefault.space.PX_16, right: nativeDefault.space.PX_16, top: nativeDefault.space.PX_16, bottom: nativeDefault.space.PX_16 };
const Video = noop.memo(media_playback_VideoDefault);
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
const createStyles = fn(5009);
let obj = { container: null, loadingContainer: null, bufferingSpinner: null, bufferingSpinnerCentered: null, video: null, videoContainer: null, controls: null, controlsTopBottom: null, controlsMiddle: null, controlsTop: null, controlsBottom: null, progressContainer: null, progress: null, icon: null, controlButton: null };
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj.container = {};
let obj4 = {};
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj4.backgroundColor = nativeDefault.colors.BACKGROUND_BASE_LOWEST;
obj4.justifyContent = "center";
obj4.alignItems = "center";
obj.loadingContainer = obj4;
obj.bufferingSpinner = { position: "absolute" };
let obj5 = {};
const merged2 = Object.assign(StyleSheet.absoluteFillObject);
obj5.justifyContent = "center";
obj5.alignItems = "center";
obj.bufferingSpinnerCentered = obj5;
obj.video = { height: "100%", width: "100%" };
obj.videoContainer = { position: "relative", height: "100%", width: "100%" };
let obj6 = {};
const merged3 = Object.assign(StyleSheet.absoluteFillObject);
const importDefaultResultResult = n(nativeDefault.unsafe_rawColors.BLACK);
let obj2 = {};
obj6.backgroundColor = n(nativeDefault.unsafe_rawColors.BLACK).alpha(0.5).hex();
obj6.justifyContent = "center";
obj6.alignItems = "center";
obj6.flexDirection = "column";
obj.controls = obj6;
let rect1 = { flexDirection: "row", justifyContent: "flex-end", padding: nativeDefault.space.PX_8, position: "absolute", left: 0, right: 0 };
obj.controlsTopBottom = rect1;
const alphaResult = n(nativeDefault.unsafe_rawColors.BLACK).alpha(0.5);
obj.controlsMiddle = { justifyContent: "center", alignItems: "center", flexGrow: 1, flexDirection: "row", gap: nativeDefault.space.PX_24, pointerEvents: "box-none" };
obj.controlsTop = { top: 0 };
obj.controlsBottom = { bottom: 0 };
const rect2 = { position: "absolute", bottom: 0, right: 0, left: 0, justifyContent: "flex-end", height: nativeDefault.space.PX_16, overflow: "hidden" };
obj.progressContainer = rect2;
let obj7 = { justifyContent: "center", alignItems: "center", flexGrow: 1, flexDirection: "row", gap: nativeDefault.space.PX_24, pointerEvents: "box-none" };
obj.progress = { height: 1, backgroundColor: nativeDefault.colors.WHITE, shadowOffset: { width: 0, height: 0 }, shadowRadius: 6, shadowOpacity: 1, elevation: 5, shadowColor: nativeDefault.colors.WHITE };
let obj8 = { height: 1, backgroundColor: nativeDefault.colors.WHITE, shadowOffset: { width: 0, height: 0 }, shadowRadius: 6, shadowOpacity: 1, elevation: 5, shadowColor: nativeDefault.colors.WHITE };
obj.icon = { color: nativeDefault.colors.TEXT_DEFAULT };
let obj9 = { color: nativeDefault.colors.TEXT_DEFAULT };
obj.controlButton = { padding: nativeDefault.space.PX_8 };
let closure_17 = createStyles.createStyles(obj);
let __initData = { code: "function shouldShowControls_AdVideoPlayerTsx3(){const{hasLoaded,hideControls,showControls,playerState,PlayerState,isVideoEnded}=this.__closure;return hasLoaded&&!hideControls&&(showControls.get()||playerState===PlayerState.PAUSED||playerState===PlayerState.ENDED||playerState===PlayerState.ERRORED||isVideoEnded);}" };
let closure_19 = { code: "function AdVideoPlayerTsx4(){const{shouldShowControls,withSpring,SUBTLE_SPRING}=this.__closure;const show=shouldShowControls();return{opacity:withSpring(show?1:0,SUBTLE_SPRING),pointerEvents:show?'auto':'none'};}" };
let __initData2 = { code: "function AdVideoPlayerTsx5(){const{withTiming,progressSharedValue,timingFast}=this.__closure;return{width:withTiming(progressSharedValue.get()*100+\"%\",timingFast,'animate-always')};}" };
let obj10 = { padding: nativeDefault.space.PX_8 };
let size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/AdVideoPlayer.tsx");

export const AdVideoPlayer = noop.memo(function AdVideoPlayer(initialProgress) {
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
  const onSeekStart = initialProgress.onSeekStart;
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
  __initData = undefined;
  let first1;
  __initData2 = undefined;
  let first2;
  closure_22 = undefined;
  let first3;
  closure_24 = undefined;
  let callback;
  closure_29 = undefined;
  let sharedValue;
  let shouldShowControls;
  let sharedValue1;
  closure_33 = undefined;
  let callback2;
  c35 = undefined;
  let callback4;
  let callback6;
  let callback8;
  let callback9;
  closure_41 = undefined;
  let callback17;
  let tmp = first();
  if (videoRef == null) {
    videoRef = onLoad.useRef(null);
  }
  const tmp3 = onLoadStart(onLoad.useState(num), 2);
  first = tmp3[0];
  __initData = tmp3[1];
  let merged = Object.assign(initialProgress);
  const tmp6 = onLoadStart(onLoad.useState({}), 2);
  first1 = tmp6[0];
  __initData2 = tmp6[1];
  const tmp9 = flag2;
  const tmp10 = onLoadStart(onLoad.useState(onBuffer(flag2[10]).PlayerState.LOADING), 2);
  first2 = tmp10[0];
  closure_22 = tmp10[1];
  const tmp12 = onLoadStart(onLoad.useState(false), 2);
  first3 = tmp12[0];
  closure_24 = tmp12[1];
  onLoad.useRef(null);
  onLoad.useRef(0);
  onLoad.useRef([]);
  let items = [onPlayerStateChange];
  callback = obj.useCallback((arg0) => {
    closure_22(arg0);
    if (onPlayerStateChange != null) {
      onPlayerStateChange(arg0);
    }
  }, items);
  let tmp15 = first3;
  if (first3) {
    tmp15 = first2 === tmp8(tmp9[10]).PlayerState.ENDED;
  }
  if (tmp15) {
    if (typeof repeat === "function") {
      tmp15 = tmp17 >= tmp18 - 1;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
  closure_29 = tmp15;
  sharedValue = onBuffer(tmp9[11]).useSharedValue(false);
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
        value = closure_29;
      }
      tmp = value;
    }
    return tmp;
  };
  let obj2 = {};
  const tmp8Result = onBuffer(tmp9[11]);
  shouldShowControls.__closure = { hasLoaded: first3, hideControls: flag8, showControls: sharedValue, playerState: first2, PlayerState: onBuffer(tmp9[10]).PlayerState, isVideoEnded: tmp15 };
  shouldShowControls.__workletHash = 8094403036162;
  shouldShowControls.__initData = __initData;
  const obj3 = { hasLoaded: first3, hideControls: flag8, showControls: sharedValue, playerState: first2, PlayerState: onBuffer(tmp9[10]).PlayerState, isVideoEnded: tmp15 };
  class Pe {
    constructor() {
      tmp = shouldShowControls();
      tmp2 = closure_0;
      tmp3 = closure_2;
      obj = closure_0(closure_2[12]);
      num = 0;
      if (tmp) {
        num = 1;
      }
      obj1 = { opacity: obj.withSpring(num, tmp2(tmp3[13]).SUBTLE_SPRING), pointerEvents: null };
      str = "none";
      if (tmp) {
        str = "auto";
      }
      obj1.pointerEvents = str;
      return obj1;
    }
  }
  const tmp8Result5 = onBuffer(tmp9[11]);
  Pe.__closure = { shouldShowControls, withSpring: onBuffer(tmp9[12]).withSpring, SUBTLE_SPRING: onBuffer(tmp9[13]).SUBTLE_SPRING };
  Pe.__workletHash = 311315682972;
  Pe.__initData = first1;
  const animatedStyle = tmp8Result5.useAnimatedStyle(Pe);
  const obj4 = { shouldShowControls, withSpring: onBuffer(tmp9[12]).withSpring, SUBTLE_SPRING: onBuffer(tmp9[13]).SUBTLE_SPRING };
  const shouldShowControlsResult = shouldShowControls();
  sharedValue1 = onBuffer(tmp9[11]).useSharedValue(0);
  const tmp8Result6 = onBuffer(tmp9[11]);
  function ye() {
    const obj = { width: null };
    const result = 100 * sharedValue1.get();
    obj.width = timing.withTiming(`${tmp}%`, timingPresets.timingFast, "animate-always");
    return obj;
  }
  const tmp8Result7 = onBuffer(tmp9[11]);
  ye.__closure = { withTiming: onBuffer(tmp9[14]).withTiming, progressSharedValue: sharedValue1, timingFast: onBuffer(tmp9[15]).timingFast };
  ye.__workletHash = 11793601648786;
  ye.__initData = __initData2;
  const animatedStyle1 = tmp8Result7.useAnimatedStyle(ye);
  closure_33 = obj.useRef(-1);
  let items1 = [sharedValue];
  const callback1 = obj.useCallback((arg0) => {
    closure_0 = arg0;
    return () => {
      const items = [...arguments];
      clearTimeout(ref.current);
      let result = sharedValue.set(true);
      ref.current = setTimeout(() => {
        const result = closure_1_30.set(false);
      }, 2000);
      if (null != closure_0) {
        const items1 = [];
        HermesBuiltin.arraySpread(items, 0);
        return HermesBuiltin.apply(items1, undefined);
      }
    };
  }, items1);
  callback2 = obj.useCallback((timestampSec, duration) => {
    closure_20((maxTimestampSec) => ({ timestampSec, maxTimestampSec: Math.max(maxTimestampSec.maxTimestampSec, Math.floor(timestampSec)), duration }));
  }, []);
  const obj5 = { withTiming: onBuffer(tmp9[14]).withTiming, progressSharedValue: sharedValue1, timingFast: onBuffer(tmp9[15]).timingFast };
  [tmp27, c35] = onLoadStart(onLoad.useState(false), 2);
  const items2 = [onReadyForDisplay];
  const items3 = [flag, , , , ];
  ({ duration: arr4[1], maxTimestampSec: arr4[2] } = first1);
  items3[3] = videoRef;
  items3[4] = onSeekStart;
  const callback3 = obj.useCallback(() => {
    if (onReadyForDisplay != null) {
      tmp();
    }
    _undefined(true);
  }, items2);
  callback4 = obj.useCallback((arg0) => {
    if (null != videoRef.current) {
      const _Math = Math;
      const _Math2 = Math;
      const bound = Math.max(0, Math.min(arg0, closure_1 ? first1.duration : first1.maxTimestampSec));
      ref3.current = (ref3.current + 1) % 100;
      if (onSeekStart != null) {
        tmp6();
      }
      const current = tmp.current;
      current.seek(bound + 0.0001 * ref3.current);
      closure_25.current = bound;
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
    closure_18(duration);
    closure_24(true);
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
  onLoad.useRef(false);
  const items8 = [first2, callback, onPausePlayback];
  callback8 = obj.useCallback(() => {
    closure_38.current = false;
    if (first2 === AdsVideoTypes.PlayerState.PLAYING) {
      closure_38.current = true;
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
      ComponentDispatch.unsubscribe(onEnd.QUEST_GAME_LINK_OPENED, callback8);
      const ComponentDispatch2 = onBuffer(flag2[16]).ComponentDispatch;
      ComponentDispatch2.unsubscribe(onEnd.QUEST_APP_STORE_OVERLAY_FINISHED, callback9);
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
      closure_25.current = null;
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
    if (typeof videoRef === "function") {
      if (typeof repeat === "function") {
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
  closure_41 = tmp39;
  const items13 = [callback4, first, sharedValue1, tmp39];
  const items14 = [callback4, first, sharedValue1, first2, callback];
  const callback12 = obj.useCallback(() => {
    if (!closure_41) {
      let current = ref2.current;
      if (current == null) {
        current = sharedValue1.get() * first;
      }
      const current1 = ref4.current;
      current1.push(current);
      callback4(current + 10);
    }
  }, items13);
  const tmp2Result = onLoadStart(onLoad.useState(false), 2);
  const items15 = [sharedValue1, callback2, onProgress];
  const callback1Result = callback1(onLoad.useCallback(() => {
    let current = ref2.current;
    if (current == null) {
      current = sharedValue1.get() * first;
    }
    const current1 = ref4.current;
    current1.push(current);
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
  const items19 = [onSeek];
  const tmp53 = onBuffer(tmp9[17]).useStateFromStores(items19, () => onSeek.getState()) === onError.ACTIVE;
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
  const tmp8Result8 = onBuffer(tmp9[17]);
  [tmp57, flag2] = onLoadStart(onLoad.useState(false), 2);
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
    const obj6 = { paddingRight: null, paddingLeft: null };
    let _Math = Math;
    obj6.paddingRight = Math.max(rect.right, onResumePlayback.right);
    let _Math2 = Math;
    obj6.paddingLeft = Math.max(rect.left, onResumePlayback.left);
    tmp63 = obj6;
  }
  const obj7 = { style: null, accessible: false, children: null };
  const items25 = [tmp.container, style];
  obj7.style = items25;
  const obj8 = { style: tmp.videoContainer, onPress: callback10, accessible: !shouldShowControlsResult, accessibilityLabel: null, children: null };
  const intl = tmp8(tmp9[21]).intl;
  const t = tmp8(tmp9[21]).t;
  obj8.accessibilityLabel = intl.string(tmp55 ? t.R3aFPe : t.fTMEUi);
  let tmp66Result = first2 !== tmp8(tmp9[10]).PlayerState.ERRORED;
  if (tmp66Result) {
    const obj9 = { mixWithOthers: "inherit", httpEngine, automaticallyWaitsToMinimizeStalling, maxBitRate, bufferConfig, preferredForwardBufferDuration, ref: videoRef, accessible: false, importantForAccessibility: "no-hide-descendants", accessibilityRole: "none", style: tmp.video, paused: tmp55, repeat, source: initialProgress.source, onBuffer: callback18, onPlaybackStalled: callback19, onPlaybackResume: callback20, onLoad: callback5, onSeek: callback11, onProgress: callback13, onLoadStart: callback15, onEnd: callback14, onError: callback16, onReadyForDisplay: callback3, onVideoTracks, onLayout: onVideoLayout, resizeMode: "contain" };
    tmp66Result = tmp66(flag8, obj9);
  }
  const items26 = [tmp66Result, , , , , ];
  let renderCaptionsResult;
  if (renderCaptions != null) {
    renderCaptionsResult = renderCaptions(first1.timestampSec);
  }
  items26[1] = renderCaptionsResult;
  if (!tmp57) {
    items26[2] = tmp57;
    let tmp66Result6 = !tmp27;
    if (!tmp27) {
      const obj10 = { style: tmp.loadingContainer, children: tmp66(onSeekStart, { animating: true }) };
      tmp66Result6 = tmp66(tmp67, obj10);
    }
    items26[3] = tmp66Result6;
    const obj11 = { style: null, accessible: false, children: null };
    const items27 = [tmp.controls, animatedStyle];
    obj11.style = items27;
    let tmp68Result = flag3;
    if (!flag3) {
      tmp68Result = flag4;
    }
    if (tmp68Result) {
      const obj12 = { style: null, children: null };
      const items28 = [, , ];
      ({ controlsTopBottom: arr30[0], controlsTop: arr30[1] } = tmp);
      items28[2] = tmp63;
      obj12.style = items28;
      if (!flag3) {
        const items29 = [flag3, ];
        if (flag4) {
          const obj13 = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, style: null, children: null };
          const intl3 = tmp8(tmp9[21]).intl;
          obj13.accessibilityLabel = intl3.string(tmp8(tmp9[21]).t.KCzjTi);
          obj13.onPress = onOpenTranscript;
          obj13.style = tmp.controlButton;
          const obj14 = { color: tmp.icon.color };
          obj13.children = tmp66(tmp8(tmp9[25]).TranscriptOutlineIcon, obj14);
          flag4 = tmp66(tmp8(tmp9[22]).PressableOpacity, obj13);
        }
        items29[1] = flag4;
        obj12.children = items29;
        tmp68Result = tmp68(tmp67, obj12);
      } else {
        const obj15 = { accessibilityRole: "togglebutton", accessibilityState: null, accessibilityLabel: null, onPress: null, style: null, children: null };
        const obj16 = { checked: captionsEnabled };
        obj15.accessibilityState = obj16;
        const intl2 = tmp8(tmp9[21]).intl;
        obj15.accessibilityLabel = intl2.string(tmp8(tmp9[21]).t.bDSZO1);
        obj15.onPress = onToggleCaptions;
        obj15.style = tmp.controlButton;
        if (captionsEnabled) {
          let ClosedCaptionsOutlineIcon = tmp8(tmp9[23]).ClosedCaptionsIcon;
        } else {
          ClosedCaptionsOutlineIcon = tmp8(tmp9[24]).ClosedCaptionsOutlineIcon;
        }
        const obj17 = { color: tmp.icon.color };
        obj15.children = tmp66(ClosedCaptionsOutlineIcon, obj17);
        tmp66(tmp8(tmp9[22]).PressableOpacity, obj15);
      }
    }
    const items30 = [tmp68Result, , ];
    const obj18 = { style: tmp.controlsMiddle, children: null };
    let tmp66Result8 = flag7;
    if (flag7) {
      const obj19 = { disabled: first2 === tmp8(tmp9[10]).PlayerState.ERRORED, accessibilityRole: "button", accessibilityLabel: null, onPress: null, children: null };
      const intl4 = tmp8(tmp9[21]).intl;
      obj19.accessibilityLabel = intl4.string(tmp8(tmp9[21]).t.r9s3Uv);
      obj19.onPress = callback1Result;
      const size = { color: tmp.icon.color, width: 16, height: 16 };
      obj19.children = tmp66(tmp8(tmp9[27]).SkipBackwardIcon, size);
      tmp66Result8 = tmp66(tmp8(tmp9[26]).VideoQuestPlayerControlButton, obj19);
    }
    const items31 = [tmp66Result8, , ];
    if (!tmp15) {
      if (first2 !== tmp8(tmp9[10]).PlayerState.ERRORED) {
        const t2 = tmp8(tmp9[21]).t;
        let K0e7M9 = tmp55 ? t2.R3aFPe : t2.fTMEUi;
      }
      const obj20 = { accessibilityRole: "button", accessibilityLabel: tmp80(K0e7M9), onPress: callback7, children: null };
      if (!tmp15) {
        if (first2 !== tmp8(tmp9[10]).PlayerState.ERRORED) {
          if (tmp55) {
            let PauseIcon = tmp8(tmp9[29]).PlayIcon;
          } else {
            PauseIcon = tmp8(tmp9[30]).PauseIcon;
          }
          let tmp66Result9 = tmp66(PauseIcon, { size: "lg" });
        }
        obj20.children = tmp66Result9;
        items31[1] = tmp66(tmp8(tmp9[26]).VideoQuestPlayerControlButton, obj20);
        if (flag7) {
          const obj21 = { disabled: tmp39, accessibilityRole: "button", accessibilityLabel: null, onPress: null, children: null };
          const intl5 = tmp8(tmp9[21]).intl;
          obj21.accessibilityLabel = intl5.string(tmp8(tmp9[21]).t.zWDcNP);
          obj21.onPress = callback1Result1;
          const size1 = { color: tmp.icon.color, width: 16, height: 16 };
          obj21.children = tmp66(tmp8(tmp9[31]).SkipForwardIcon, size1);
          flag7 = tmp66(tmp8(tmp9[26]).VideoQuestPlayerControlButton, obj21);
        }
        items31[2] = flag7;
        obj18.children = items31;
        items30[1] = tmp68(tmp67, obj18);
        if (flag5) {
          const obj22 = { style: null, children: null };
          const items32 = [, , ];
          ({ controlsTopBottom: arr34[0], controlsBottom: arr34[1] } = tmp);
          items32[2] = tmp63;
          obj22.style = items32;
          const obj23 = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, style: null, children: null };
          const intl6 = tmp8(tmp9[21]).intl;
          obj23.accessibilityLabel = intl6.string(tmp8(tmp9[21]).t.vKZT5t);
          obj23.onPress = onToggleFullscreen;
          obj23.style = tmp.controlButton;
          obj23.children = tmp66(tmp8(tmp9[32]).FullscreenEnterIcon, {});
          obj22.children = tmp66(tmp8(tmp9[22]).PressableOpacity, obj23);
          flag5 = tmp66(tmp67, obj22);
        }
        items30[2] = flag5;
        obj11.children = items30;
        items26[4] = tmp68(tmp62(tmp9[11]).View, obj11);
        if (flag6) {
          const obj24 = { style: tmp.progressContainer, children: null };
          const obj25 = { style: null };
          const items33 = [tmp.progress, animatedStyle1];
          obj25.style = items33;
          obj24.children = tmp66(tmp62(tmp9[11]).View, obj25);
          flag6 = tmp66(tmp67, obj24);
        }
        items26[5] = flag6;
        obj8.children = items26;
        obj7.children = tmp68(onProgress, obj8);
        return tmp66(tmp67, obj7);
      }
      tmp66Result9 = tmp66(tmp8(tmp9[28]).RetryIcon, { size: "lg" });
    }
    K0e7M9 = tmp8(tmp9[21]).t.K0e7M9;
  } else {
    let items34 = [tmp.bufferingSpinner, ];
    if (!isFullscreen) {
      if ("center" !== bufferingSpinnerPlacement) {
        let num4;
        if (contentInsets != null) {
          num4 = contentInsets.top;
        }
        if (num4 == null) {
          num4 = 0;
        }
        let rect1 = { top: num4, left: null };
        let num5;
        if (contentInsets != null) {
          num5 = contentInsets.left;
        }
        if (num5 == null) {
          num5 = 0;
        }
        rect1.left = num5;
      }
      const obj26 = { animating: true, style: null, color: null };
      items34[1] = rect1;
      obj26.style = items34;
      items34 = tmp62(tmp9[6]).unsafe_rawColors.WHITE;
      obj26.color = items34;
      tmp66(tmp73, obj26);
    }
    rect1 = tmp.bufferingSpinnerCentered;
  }
});