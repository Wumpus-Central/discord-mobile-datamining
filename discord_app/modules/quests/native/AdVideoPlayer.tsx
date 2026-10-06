// discord_app/modules/quests/native/AdVideoPlayer.tsx
import react2 from "../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import ComponentDispatchUtils from "../../../utils/ComponentDispatchUtils.tsx";
import PlatformUtils from "../../../utils/PlatformUtils.tsx";
import timing from "../../../design/animation/reanimated/timing/timing.tsx";
import timingPresets from "../../../design/animation/reanimated/timing/timingPresets.tsx";
import spring from "../../../design/animation/reanimated/spring/spring.tsx";
import springPresets from "../../../design/animation/reanimated/spring/springPresets.tsx";
import TextTrackTypeDefault from "../../../../_runtime/07994_TextTrackType.js";
import AdsVideoTypes from "AdsVideoTypes.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../_runtime/00019_react.js";
import react_native from "../../../../_runtime/00017_react-native.js";
import AppStateStore from "../../../stores/native/AppStateStore.tsx";
import Constants from "../../../Constants.tsx";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../design/components/Styles/native/createStyles.tsx";
import 00683__ from "../../../../_runtime/metro/00683__.js";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../_runtime/metro/00002__.js";

let duration, initialProgress;

let StyleSheet;
let alphaResult;
let c10;
let c9;
let closure_12;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj10;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let obj9;
let rect1;
let rect2;
let unpackModuleId;
({ View: hasOwnProperty, StyleSheet, Pressable: metroRequire, ActivityIndicator: metroImportDefault } = react_native);
({ AppStates: c9, ComponentActions: c10 } = Constants);
({ jsx: unpackModuleId, jsxs: closure_12 } = Fragment);
let rect = { left: nativeDefault.space.PX_16, right: nativeDefault.space.PX_16, top: nativeDefault.space.PX_16, bottom: nativeDefault.space.PX_16 };
const TextTrackType = react.memo(TextTrackTypeDefault);
function hasVideoEnded(arg0, arg1) {
  return arg0 >= arg1 - 1;
}
hasVideoEnded.__closure = {};
hasVideoEnded.__workletHash = 8992945176371;
hasVideoEnded.__initData = { code: "function hasVideoEnded_AdVideoPlayerTsx1(currentTime,videoDuration){return currentTime>=videoDuration-1;}" };
function canSeekForward(arg0, arg1, arg2, arg3) {
  if (typeof hasVideoEnded === "function") {
    let tmp4 = arg0 < arg2 - 1;
    if (tmp4) {
      tmp4 = arg3 || arg0 <= arg1 - 1;
      const tmp5 = arg3 || arg0 <= arg1 - 1;
    }
    return tmp4;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}
canSeekForward.__closure = { hasVideoEnded };
canSeekForward.__workletHash = 14098132092693;
canSeekForward.__initData = { code: "function canSeekForward_AdVideoPlayerTsx2(currentTime,maxTimestamp,videoDuration,allowUnrestrictedSeeking){const{hasVideoEnded}=this.__closure;return!hasVideoEnded(currentTime,videoDuration)&&(allowUnrestrictedSeeking||currentTime<=maxTimestamp-1);}" };
let createStyles = createStyles_mod;
let obj = { container: obj2, loadingContainer: obj3, bufferingSpinner: { position: "absolute" }, bufferingSpinnerCentered: obj4, video: { height: "100%", width: "100%" }, videoContainer: { position: "relative", height: "100%", width: "100%" }, controls: obj5, controlsTopBottom: rect1, controlsMiddle: obj6, controlsTop: { top: 0 }, controlsBottom: { bottom: 0 }, progressContainer: rect2, progress: obj7, icon: obj8, iconDisabled: obj9, controlButton: obj10 };
obj2 = {};
createStyles = createStyles.createStyles;
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, justifyContent: "center", alignItems: "center" };
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj4 = { justifyContent: "center", alignItems: "center" };
const merged2 = Object.assign(StyleSheet.absoluteFillObject);
obj5 = { backgroundColor: alphaResult.hex(), justifyContent: "center", alignItems: "center", flexDirection: "column" };
const merged3 = Object.assign(StyleSheet.absoluteFillObject);
const importDefaultResultResult = module_683(nativeDefault.unsafe_rawColors.BLACK);
alphaResult = importDefaultResultResult.alpha(0.5);
rect1 = { flexDirection: "row", justifyContent: "flex-end", padding: nativeDefault.space.PX_8, position: "absolute", left: 0, right: 0 };
obj6 = { justifyContent: "center", alignItems: "center", flexGrow: 1, flexDirection: "row", gap: nativeDefault.space.PX_24, pointerEvents: "box-none" };
rect2 = { position: "absolute", bottom: 0, right: 0, left: 0, justifyContent: "flex-end", height: nativeDefault.space.PX_16, overflow: "hidden" };
obj7 = { height: 1, backgroundColor: nativeDefault.colors.WHITE, shadowOffset: { width: 0, height: 0 }, shadowRadius: 6, shadowOpacity: 1, elevation: 5, shadowColor: nativeDefault.colors.WHITE };
obj8 = { color: nativeDefault.colors.TEXT_DEFAULT };
obj9 = { color: nativeDefault.colors.TEXT_SUBTLE };
obj10 = { padding: nativeDefault.space.PX_8 };
let closure_17 = createStyles(obj);
let closure_18 = ReactCompilerGating.isReactCompilerEnabled() ? ((onBuffer) => {
  let closure_129_2;
  let tmp3;
  let tmp4;
  const obj = react2;
  const cResult = obj.c(5);
  onBuffer = onBuffer.onBuffer;
  let closure_1 = react.useRef(false);
  [tmp3, closure_129_2] = _slicedToArray(react.useState(false), 2);
  const tmp2 = _slicedToArray(react.useState(false), 2);
  if (cResult[0] !== onBuffer) {
    const fn = function s(current) {
      closure_1_2(current);
      if (current !== ref.current) {
        ref.current = current;
        if (onBuffer != null) {
          onBuffer(current);
        }
      }
    };
    cResult[0] = onBuffer;
    cResult[1] = fn;
    tmp4 = fn;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] === tmp3) {
    let tmp5;
    if (cResult[3] === tmp4) {
      tmp5 = cResult[4];
    }
    return tmp5;
  }
  const obj2 = { isBuffering: tmp3, toggleBuffering: tmp4 };
  cResult[2] = tmp3;
  cResult[3] = tmp4;
  cResult[4] = obj2;
  tmp5 = obj2;
}) : ((onBuffer) => {
  let items;
  onBuffer = onBuffer.onBuffer;
  let closure_1 = react.useRef(false);
  const tmp = _slicedToArray(react.useState(false), 2);
  let closure_2 = tmp[1];
  const obj = {
    isBuffering: tmp[0],
    toggleBuffering: react.useCallback((current) => {
      closure_2(current);
      if (current !== ref.current) {
        ref.current = current;
        if (onBuffer != null) {
          onBuffer(current);
        }
      }
    }, items)
  };
  items = [onBuffer];
  return obj;
});
let closure_19 = { code: "function shouldShowControls_AdVideoPlayerTsx3(){const{hasLoaded,hideControls,showControls,playerState,PlayerState,isVideoEnded}=this.__closure;return hasLoaded&&!hideControls&&(showControls.get()||playerState===PlayerState.PAUSED||playerState===PlayerState.ENDED||playerState===PlayerState.ERRORED||isVideoEnded);}" };
let __initData = { code: "function AdVideoPlayerTsx4(){const{shouldShowControls,withSpring,SUBTLE_SPRING}=this.__closure;const show=shouldShowControls();return{opacity:withSpring(show?1:0,SUBTLE_SPRING),pointerEvents:show?'auto':'none'};}" };
let closure_21 = { code: "function AdVideoPlayerTsx5(){const{withTiming,progressSharedValue,timingFast}=this.__closure;return{width:withTiming(progressSharedValue.get()*100+\"%\",timingFast,'animate-always')};}" };
const memoResult = react.memo((initialProgress) => {
  let ClosedCaptionsOutlineIcon;
  let PressableOpacity3;
  let _undefined;
  let automaticallyWaitsToMinimizeStalling;
  let bufferConfig;
  let bufferingSpinnerPlacement;
  let c35;
  let captionsEnabled;
  let closure_20;
  let contentInsets;
  let externallyPaused;
  let httpEngine;
  let intl2;
  let intl3;
  let intl4;
  let intl6;
  let intl7;
  let isBuffering;
  let isFullscreen;
  let items24;
  let items25;
  let items28;
  let items29;
  let items30;
  let items33;
  let items34;
  let maxBitRate;
  let num5;
  let obj15;
  let obj17;
  let obj23;
  let obj25;
  let onBuffer;
  let onLoadStart;
  let onOpenTranscript;
  let onToggleCaptions;
  let onToggleFullscreen;
  let onVideoLayout;
  let onVideoTracks;
  let preferredForwardBufferDuration;
  let renderCaptions;
  let repeat;
  let size1;
  let string;
  let style;
  let t;
  let tmp27;
  let toggleBuffering;
  let videoRef;
  initialProgress = initialProgress.initialProgress;
  let num = initialProgress.contentDuration;
  const source = initialProgress.source;
  if (num === undefined) {
    num = 0;
  }
  let flag = initialProgress.allowUnrestrictedSeeking;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = initialProgress.disableResumeOnLoad;
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
  const onError = initialProgress.onError;
  const onEnd = initialProgress.onEnd;
  const onPlayerStateChange = initialProgress.onPlayerStateChange;
  const onPausePlayback = initialProgress.onPausePlayback;
  const onResumePlayback = initialProgress.onResumePlayback;
  ({ videoRef, bufferingSpinnerPlacement, onToggleCaptions, onOpenTranscript, onToggleFullscreen, onBuffer, onVideoTracks, onVideoLayout } = initialProgress);
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
  closure_18 = undefined;
  let first1;
  __initData = undefined;
  let first2;
  let closure_22;
  let first3;
  let closure_24;
  let ref2;
  let ref3;
  let callback;
  let closure_29;
  let sharedValue;
  let shouldShowControls;
  let sharedValue1;
  let closure_33;
  let callback2;
  c35 = undefined;
  let callback4;
  let callback6;
  let ref4;
  let callback8;
  let callback9;
  let closure_41;
  toggleBuffering = undefined;
  let ref = initialProgress.ref;
  let tmp = first();
  let obj = onLoad;
  if (videoRef == null) {
    videoRef = onLoad.useRef(null);
  }
  const tmp2 = onLoadStart;
  const tmp3 = onLoadStart(obj.useState(num), 2);
  first = tmp3[0];
  closure_18 = tmp3[1];
  let obj2 = {};
  const useState = obj.useState;
  let merged = Object.assign(initialProgress);
  const tmp6 = onLoadStart(useState(obj2), 2);
  first1 = tmp6[0];
  __initData = tmp6[1];
  const tmp8 = initialProgress;
  const tmp9 = flag2;
  const tmp10 = onLoadStart(obj.useState(initialProgress(flag2[12]).PlayerState.LOADING), 2);
  first2 = tmp10[0];
  closure_22 = tmp10[1];
  const tmp12 = onLoadStart(obj.useState(false), 2);
  first3 = tmp12[0];
  closure_24 = tmp12[1];
  ref = obj.useRef(null);
  ref2 = obj.useRef(0);
  ref3 = obj.useRef([]);
  let items = [onPlayerStateChange];
  callback = obj.useCallback((arg0) => {
    closure_22(arg0);
    if (onPlayerStateChange != null) {
      onPlayerStateChange(arg0);
    }
  }, items);
  let tmp15 = first3 && first2 === tmp8(tmp9[12]).PlayerState.ENDED;
  if (tmp15) {
    const tmp16 = repeat;
    if (typeof repeat === "function") {
      tmp15 = tmp17 >= tmp18 - 1;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
  closure_29 = tmp15;
  const tmp8Result = tmp8(tmp9[13]);
  sharedValue = tmp8Result.useSharedValue(false);
  shouldShowControls = function shouldShowControls() {
    let tmp = first3 && !flag8;
    if (tmp) {
      const value = sharedValue.get() || first2 === AdsVideoTypes.PlayerState.PAUSED || first2 === AdsVideoTypes.PlayerState.ENDED || first2 === AdsVideoTypes.PlayerState.ERRORED || closure_29;
      tmp = value;
    }
    return tmp;
  };
  shouldShowControls.__closure = { hasLoaded: first3, hideControls: flag8, showControls: sharedValue, playerState: first2, PlayerState: tmp8(tmp9[12]).PlayerState, isVideoEnded: tmp15 };
  shouldShowControls.__workletHash = 8094403036162;
  shouldShowControls.__initData = first1;
  ({ hasLoaded: first3, hideControls: flag8, showControls: sharedValue, playerState: first2, PlayerState: tmp8(tmp9[12]).PlayerState, isVideoEnded: tmp15 });
  function ye() {
    let str;
    const tmp = shouldShowControls();
    let num = 0;
    const withSpring = spring.withSpring;
    spring;
    if (tmp) {
      num = 1;
    }
    const obj = { opacity: withSpring(num, springPresets.SUBTLE_SPRING), pointerEvents: str };
    str = "none";
    if (tmp) {
      str = "auto";
    }
    return obj;
  }
  const tmp8Result5 = tmp8(tmp9[13]);
  ye.__closure = { shouldShowControls, withSpring: tmp8(tmp9[14]).withSpring, SUBTLE_SPRING: tmp8(tmp9[15]).SUBTLE_SPRING };
  ye.__workletHash = 311315682972;
  ye.__initData = __initData;
  ({ shouldShowControls, withSpring: tmp8(tmp9[14]).withSpring, SUBTLE_SPRING: tmp8(tmp9[15]).SUBTLE_SPRING });
  const animatedStyle = tmp8Result5.useAnimatedStyle(ye);
  const shouldShowControlsResult = shouldShowControls();
  const tmp8Result6 = tmp8(tmp9[13]);
  sharedValue1 = tmp8Result6.useSharedValue(0);
  function ge() {
    let withTiming;
    const obj = { width: withTiming(`${tmp2}%`, timingPresets.timingFast, "animate-always") };
    withTiming = timing.withTiming;
    timing;
    const result = 100 * sharedValue1.get();
    return obj;
  }
  const tmp8Result7 = tmp8(tmp9[13]);
  ge.__closure = { withTiming: tmp8(tmp9[16]).withTiming, progressSharedValue: sharedValue1, timingFast: tmp8(tmp9[17]).timingFast };
  ge.__workletHash = 11793601648786;
  ge.__initData = first2;
  ({ withTiming: tmp8(tmp9[16]).withTiming, progressSharedValue: sharedValue1, timingFast: tmp8(tmp9[17]).timingFast });
  const animatedStyle1 = tmp8Result7.useAnimatedStyle(ge);
  closure_33 = obj.useRef(-1);
  let items1 = [sharedValue];
  const callback1 = obj.useCallback((arg0) => {
    let closure_0 = arg0;
    return () => {
      const items = [...arguments];
      clearTimeout(ref.current);
      let result = sharedValue.set(true);
      ref.current = setTimeout(() => {
        const result = closure_1_30.set(false);
      }, 2000);
      if (null != closure_0) {
        const items1 = [];
        HermesBuiltin.arraySpread(items1, items, 0);
        return HermesBuiltin.apply(closure_0, items1, undefined);
      }
    };
  }, items1);
  callback2 = obj.useCallback((arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    closure_20((maxTimestampSec) => {
      const obj = { timestampSec, maxTimestampSec: Math.max(maxTimestampSec.maxTimestampSec, Math.floor(timestampSec)), duration };
      return obj;
    });
  }, []);
  [tmp27, c35] = tmp2(obj.useState(false), 2);
  const items2 = [onReadyForDisplay];
  const items3 = [flag, , , , ];
  ({ duration: arr4[1], maxTimestampSec: arr4[2] } = first1);
  items3[3] = videoRef;
  items3[4] = onSeekStart;
  const tmp2Result = tmp2(obj.useState(false), 2);
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
      const bound = Math.max(0, Math.min(arg0, flag ? first1.duration : first1.maxTimestampSec));
      ref2.current = (ref2.current + 1) % 100;
      if (onSeekStart != null) {
        tmp6();
      }
      const current = tmp.current;
      current.seek(bound + 0.0001 * ref2.current);
      ref.current = bound;
    }
  }, items3);
  const items4 = [callback4, first2, callback, onResumePlayback, onPausePlayback];
  const imperativeHandle = obj.useImperativeHandle(ref, () => ({
    seekToStart() {
      if (first2 !== initialProgress(flag2[12]).PlayerState.ERRORED) {
        callback4(0);
        if (first2 === initialProgress(flag2[12]).PlayerState.ENDED) {
          callback(initialProgress(flag2[12]).PlayerState.PLAYING);
          if (onResumePlayback != null) {
            tmp8(initialProgress(flag2[12]).PlaybackTriggerSource.IMPERATIVE_API);
          }
        }
      }
    },
    play() {
      if (first2 === initialProgress(flag2[12]).PlayerState.PAUSED) {
        callback(initialProgress(flag2[12]).PlayerState.PLAYING);
        if (onResumePlayback != null) {
          tmp5(initialProgress(flag2[12]).PlaybackTriggerSource.IMPERATIVE_API);
        }
      }
    },
    pause() {
      if (first2 === initialProgress(flag2[12]).PlayerState.PLAYING) {
        callback(initialProgress(flag2[12]).PlayerState.PAUSED);
        if (onPausePlayback != null) {
          tmp5(initialProgress(flag2[12]).PlaybackTriggerSource.IMPERATIVE_API);
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
      const timestampSec = initialProgress.timestampSec;
      const tmp5 = !flag2 && timestampSec > 5 && timestampSec < duration - 3;
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
    flag = obj.shouldRestartVideo;
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
  ref4 = obj.useRef(false);
  const items8 = [first2, callback, onPausePlayback];
  callback8 = obj.useCallback(() => {
    ref4.current = false;
    if (first2 === AdsVideoTypes.PlayerState.PLAYING) {
      ref4.current = true;
      callback(AdsVideoTypes.PlayerState.PAUSED);
      if (onPausePlayback != null) {
        tmp6(AdsVideoTypes.PlaybackTriggerSource.SYSTEM_INITIATED);
      }
    }
  }, items8);
  const items9 = [first2, callback, onResumePlayback];
  callback9 = obj.useCallback(() => {
    if (ref4.current) {
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
    const subscription = ComponentDispatch.subscribe(onEnd.QUEST_GAME_LINK_OPENED, callback8);
    let ComponentDispatch2 = ComponentDispatchUtils.ComponentDispatch;
    const subscription1 = ComponentDispatch2.subscribe(onEnd.QUEST_APP_STORE_OVERLAY_FINISHED, callback9);
    return () => {
      const ComponentDispatch = initialProgress(flag2[18]).ComponentDispatch;
      ComponentDispatch.unsubscribe(onEnd.QUEST_GAME_LINK_OPENED, callback8);
      const ComponentDispatch2 = initialProgress(flag2[18]).ComponentDispatch;
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
    const current = ref3.current;
    let arr = current.shift();
    if (arr == null) {
      arr = null;
    }
    if (null != videoRef.current) {
      ref.current = null;
      if (first > 0) {
        const result = sharedValue1.set(currentTime.currentTime / first);
        callback2(currentTime.currentTime, first);
      }
      if (onSeek != null) {
        const obj = { fromTimeSec: arr };
        const merged = Object.assign(currentTime);
        tmp9(obj);
      }
    }
  }, items12);
  let tmp39 = first2 === tmp8(tmp9[12]).PlayerState.ERRORED;
  if (!tmp39) {
    let timestampSec = first1.timestampSec;
    if (typeof videoRef === "function") {
      if (typeof repeat === "function") {
        let tmp45 = timestampSec < tmp42 - 1;
        if (tmp45) {
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
      let current = ref.current;
      if (current == null) {
        current = sharedValue1.get() * first;
      }
      const current1 = ref3.current;
      current1.push(current);
      callback4(current + 10);
    }
  }, items13);
  const items15 = [sharedValue1, callback2, onProgress];
  const items16 = [callback, onEnd, repeat];
  const callback1Result = callback1(obj.useCallback(() => {
    let current = ref.current;
    if (current == null) {
      current = sharedValue1.get() * first;
    }
    const current1 = ref3.current;
    current1.push(current);
    callback4(current - 10);
    if (first2 === AdsVideoTypes.PlayerState.ENDED) {
      callback(AdsVideoTypes.PlayerState.PLAYING);
    }
  }, items14));
  const callback1Result1 = callback1(callback12);
  const callback13 = obj.useCallback((seekableDuration) => {
    let num = 0;
    if (0 !== seekableDuration.seekableDuration) {
      num = seekableDuration.currentTime / seekableDuration.seekableDuration;
    }
    callback2(seekableDuration.currentTime, seekableDuration.seekableDuration);
    const result = sharedValue1.set(num);
    if (onProgress != null) {
      const obj = { currentTime: null, seekableDuration: null, progress: num };
      ({ currentTime: obj.currentTime, seekableDuration: obj.seekableDuration } = seekableDuration);
      tmp3(obj);
    }
  }, items15);
  const items17 = [callback, onLoadStart];
  const callback14 = obj.useCallback(() => {
    if (!repeat) {
      callback(AdsVideoTypes.PlayerState.ENDED);
    }
    if (onEnd != null) {
      tmp6();
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
  const items19 = [onSeek];
  const tmp8Result8 = tmp8(tmp9[19]);
  const tmp53 = tmp8Result8.useStateFromStores(items19, () => onSeek.getState()) === onError.ACTIVE;
  const items20 = [videoRef];
  const layoutEffect = obj.useLayoutEffect(() => {
    let obj = PlatformUtils;
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
          const obj2 = flag(flag2[21]);
          obj2.captureException(tmp4);
        }
      };
    }
  }, items20);
  let tmp55 = !tmp53;
  if (tmp53) {
    tmp55 = first2 === tmp8(tmp9[12]).PlayerState.PAUSED;
  }
  if (!tmp55) {
    tmp55 = first2 === tmp8(tmp9[12]).PlayerState.LOADING;
  }
  if (!tmp55) {
    tmp55 = externallyPaused;
  }
  ({ isBuffering, toggleBuffering } = closure_18({ onBuffer }));
  const items21 = [toggleBuffering, first2];
  const items22 = [toggleBuffering];
  closure_18({ onBuffer });
  const callback17 = obj.useCallback((isBuffering) => {
    isBuffering = isBuffering.isBuffering;
    if (!isBuffering) {
      if (!isBuffering) {
        toggleBuffering(false);
      }
    } else {
      if (first2 !== AdsVideoTypes.PlayerState.LOADING) {
        PlatformUtils;
      }
      toggleBuffering(true);
    }
  }, items21);
  const items23 = [toggleBuffering];
  const callback18 = obj.useCallback(() => {
    const obj = PlatformUtils;
    if (obj.isIOS()) {
      toggleBuffering(true);
    }
  }, items22);
  const callback19 = obj.useCallback(() => {
    const obj = PlatformUtils;
    if (obj.isIOS()) {
      toggleBuffering(false);
    }
  }, items23);
  rect = flag(tmp9[22])();
  let tmp61 = isFullscreen && null != rect;
  if (tmp61) {
    let _Math = Math;
    let _Math2 = Math;
    tmp61 = { paddingRight: Math.max(rect.right, onResumePlayback.right), paddingLeft: Math.max(rect.left, onResumePlayback.left) };
    const obj6 = { paddingRight: Math.max(rect.right, onResumePlayback.right), paddingLeft: Math.max(rect.left, onResumePlayback.left) };
  }
  const obj7 = { style: items24, accessible: false, children: null };
  items24 = [tmp.container, style];
  const obj8 = { style: items25, onPress: callback10, accessible: !shouldShowControlsResult, accessibilityLabel: string(tmp55 ? t.R3aFPe : t.fTMEUi), children: null };
  items25 = [tmp.videoContainer];
  const intl = tmp8(tmp9[23]).intl;
  string = intl.string;
  t = tmp8(tmp9[23]).t;
  let tmp64Result = first2 !== tmp8(tmp9[12]).PlayerState.ERRORED;
  const tmp67 = onProgress;
  if (tmp64Result) {
    const obj9 = { mixWithOthers: "inherit", httpEngine, automaticallyWaitsToMinimizeStalling, maxBitRate, bufferConfig, preferredForwardBufferDuration, ref: videoRef, accessible: false, importantForAccessibility: "no-hide-descendants", accessibilityRole: "none", style: tmp.video, paused: tmp55, repeat, source, onBuffer: callback17, onPlaybackStalled: callback18, onPlaybackResume: callback19, onLoad: callback5, onSeek: callback11, onProgress: callback13, onLoadStart: callback15, onEnd: callback14, onError: callback16, onReadyForDisplay: callback3, onVideoTracks, onLayout: onVideoLayout, resizeMode: "contain" };
    tmp64Result = tmp64(flag8, obj9);
  }
  const items26 = [tmp64Result, , , , , ];
  let renderCaptionsResult;
  if (renderCaptions != null) {
    renderCaptionsResult = renderCaptions(first1.timestampSec);
  }
  items26[1] = renderCaptionsResult;
  if (isBuffering) {
    const items27 = [tmp.bufferingSpinner, ];
    if (!isFullscreen) {
      let rect1;
      let str = "center";
      if ("center" !== bufferingSpinnerPlacement) {
        let num4;
        if (contentInsets != null) {
          num4 = contentInsets.top;
        }
        if (num4 == null) {
          num4 = 0;
        }
        rect1 = { top: num4, left: num5 };
        num5 = undefined;
        if (contentInsets != null) {
          num5 = contentInsets.left;
        }
        if (num5 == null) {
          num5 = 0;
        }
      }
      items27[1] = rect1;
      const obj10 = { animating: true, style: items27, color: flag(tmp9[6]).unsafe_rawColors.WHITE };
      isBuffering = tmp64(tmp71, obj10);
    }
    rect1 = tmp.bufferingSpinnerCentered;
  }
  items26[2] = isBuffering;
  let tmp64Result4 = !tmp27;
  if (tmp64Result4) {
    const obj11 = { style: tmp.loadingContainer, children: onPlayerStateChange(onSeekStart, { animating: true }) };
    tmp64Result4 = tmp64(tmp65, obj11);
  }
  items26[3] = tmp64Result4;
  const obj12 = { style: items28, accessible: false, children: null };
  items28 = [tmp.controls, animatedStyle];
  let tmp66Result = flag3;
  const View = tmp60(tmp9[13]).View;
  if (!flag3) {
    tmp66Result = flag4;
  }
  if (tmp66Result) {
    const obj13 = { style: items29, children: items30 };
    items29 = [, , ];
    ({ controlsTopBottom: arr30[0], controlsTop: arr30[1] } = tmp);
    items29[2] = tmp61;
    if (flag3) {
      let color;
      const obj14 = { accessibilityRole: "button", accessibilityLabel: intl2.string(tmp8(tmp9[23]).t.bDSZO1), onPress: onToggleCaptions, style: tmp.controlButton, children: onPlayerStateChange(ClosedCaptionsOutlineIcon, obj15) };
      const PressableOpacity = tmp8(tmp9[24]).PressableOpacity;
      intl2 = tmp8(tmp9[23]).intl;
      ClosedCaptionsOutlineIcon = tmp8(tmp9[25]).ClosedCaptionsOutlineIcon;
      if (captionsEnabled) {
        color = tmp.icon.color;
      } else {
        color = tmp.iconDisabled.color;
      }
      obj15 = { color };
      flag3 = tmp64(PressableOpacity, obj14);
    }
    items30 = [flag3, ];
    if (flag4) {
      const obj16 = { accessibilityRole: "button", accessibilityLabel: intl3.string(tmp8(tmp9[23]).t.KCzjTi), onPress: onOpenTranscript, style: tmp.controlButton, children: onPlayerStateChange(tmp8(tmp9[26]).TranscriptOutlineIcon, obj17) };
      const PressableOpacity2 = tmp8(tmp9[24]).PressableOpacity;
      intl3 = tmp8(tmp9[23]).intl;
      obj17 = { color: tmp.iconDisabled.color };
      flag4 = tmp64(PressableOpacity2, obj16);
    }
    items30[1] = flag4;
    tmp66Result = tmp66(tmp65, obj13);
  }
  const items31 = [tmp66Result, , ];
  const obj18 = { style: tmp.controlsMiddle, children: null };
  let tmp64Result5 = flag7;
  if (tmp64Result5) {
    const obj19 = { disabled: first2 === tmp8(tmp9[12]).PlayerState.ERRORED, accessibilityRole: "button", accessibilityLabel: intl4.string(tmp8(tmp9[23]).t.r9s3Uv), onPress: callback1Result, children: onPlayerStateChange(tmp8(tmp9[28]).SkipBackwardIcon, size) };
    const VideoQuestPlayerControlButton = tmp8(tmp9[27]).VideoQuestPlayerControlButton;
    intl4 = tmp8(tmp9[23]).intl;
    size = { color: tmp.icon.color, width: 16, height: 16 };
    tmp64Result5 = tmp64(VideoQuestPlayerControlButton, obj19);
  }
  const items32 = [tmp64Result5, , ];
  const VideoQuestPlayerControlButton2 = tmp8(tmp9[27]).VideoQuestPlayerControlButton;
  const intl5 = tmp8(tmp9[23]).intl;
  if (!tmp15) {
    let K0e7M9;
    if (first2 !== tmp8(tmp9[12]).PlayerState.ERRORED) {
      const t2 = tmp8(tmp9[23]).t;
      K0e7M9 = tmp55 ? t2.R3aFPe : t2.fTMEUi;
    }
    const obj20 = { accessibilityRole: "button", accessibilityLabel: tmp76(K0e7M9), onPress: callback7, children: null };
    if (!tmp15) {
      let tmp64Result6;
      if (first2 !== tmp8(tmp9[12]).PlayerState.ERRORED) {
        let PauseIcon;
        if (tmp55) {
          PauseIcon = tmp8(tmp9[30]).PlayIcon;
        } else {
          PauseIcon = tmp8(tmp9[31]).PauseIcon;
        }
        tmp64Result6 = tmp64(PauseIcon, { size: "lg" });
      }
      obj20.children = tmp64Result6;
      items32[1] = onPlayerStateChange(VideoQuestPlayerControlButton2, obj20);
      if (flag7) {
        const obj21 = { disabled: tmp39, accessibilityRole: "button", accessibilityLabel: intl6.string(tmp8(tmp9[23]).t.zWDcNP), onPress: callback1Result1, children: onPlayerStateChange(tmp8(tmp9[32]).SkipForwardIcon, size1) };
        const VideoQuestPlayerControlButton3 = tmp8(tmp9[27]).VideoQuestPlayerControlButton;
        intl6 = tmp8(tmp9[23]).intl;
        size1 = { color: tmp.icon.color, width: 16, height: 16 };
        flag7 = tmp64(VideoQuestPlayerControlButton3, obj21);
      }
      items32[2] = flag7;
      obj18.children = items32;
      items31[1] = onPausePlayback(onReadyForDisplay, obj18);
      if (flag5) {
        const obj22 = { style: items33, children: onPlayerStateChange(PressableOpacity3, obj23) };
        items33 = [, , ];
        ({ controlsTopBottom: arr34[0], controlsBottom: arr34[1] } = tmp);
        items33[2] = tmp61;
        obj23 = { accessibilityRole: "button", accessibilityLabel: intl7.string(tmp8(tmp9[23]).t.vKZT5t), onPress: onToggleFullscreen, style: tmp.controlButton, children: onPlayerStateChange(tmp8(tmp9[33]).FullscreenEnterIcon, {}) };
        PressableOpacity3 = tmp8(tmp9[24]).PressableOpacity;
        intl7 = tmp8(tmp9[23]).intl;
        flag5 = tmp64(tmp65, obj22);
      }
      items31[2] = flag5;
      obj12.children = items31;
      items26[4] = onPausePlayback(View, obj12);
      if (flag6) {
        const obj24 = { style: tmp.progressContainer, children: onPlayerStateChange(flag(tmp9[13]).View, obj25) };
        obj25 = { style: items34 };
        items34 = [tmp.progress, animatedStyle1];
        flag6 = tmp64(tmp65, obj24);
      }
      items26[5] = flag6;
      obj8.children = items26;
      obj7.children = onPausePlayback(tmp67, obj8);
      return onPlayerStateChange(onReadyForDisplay, obj7);
    }
    tmp64Result6 = tmp64(tmp8(tmp9[29]).RetryIcon, { size: "lg" });
  }
  K0e7M9 = tmp8(tmp9[23]).t.K0e7M9;
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/quests/native/AdVideoPlayer.tsx");

export const AdVideoPlayer = memoResult;