// discord_app/modules/quests/native/AdVideoPlayer.tsx
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import ComponentDispatchUtils from "../../../utils/ComponentDispatchUtils.tsx";
import PlatformUtils from "../../../utils/PlatformUtils.tsx";
import timing from "../../../design/animation/reanimated/timing/timing.tsx";
import timingPresets from "../../../design/animation/reanimated/timing/timingPresets.tsx";
import spring from "../../../design/animation/reanimated/spring/spring.tsx";
import springPresets from "../../../design/animation/reanimated/spring/springPresets.tsx";
import _modDef8402 from "../../../../_runtime/metro/08402__.js";
import AdsVideoTypes from "AdsVideoTypes.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import AppStateStore from "../../../stores/native/AppStateStore.tsx";
import n from "../../../../_runtime/metro/00683__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, StyleSheet, Pressable: metroRequire, ActivityIndicator: closure_7 } = get_ActivityIndicator);
const Constants = fn(1085);
({ AppStates: closure_9, ComponentActions: c10 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
let rect = {
  left: nativeDefault.space.PX_16,
  right: nativeDefault.space.PX_16,
  top: nativeDefault.space.PX_16,
  bottom: nativeDefault.space.PX_16,
};
const _isNativeReflectConstruct = noop.memo(_modDef8402);
function hasVideoEnded(arg0, arg1) {
  return arg0 >= arg1 - 1;
}
hasVideoEnded.__closure = {};
hasVideoEnded.__workletHash = 8992945176371;
hasVideoEnded.__initData = {
  code: "function hasVideoEnded_AdVideoPlayerTsx1(currentTime,videoDuration){return currentTime>=videoDuration-1;}",
};
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
canSeekForward.__initData = {
  code: "function canSeekForward_AdVideoPlayerTsx2(currentTime,maxTimestamp,videoDuration,allowUnrestrictedSeeking){const{hasVideoEnded}=this.__closure;return!hasVideoEnded(currentTime,videoDuration)&&(allowUnrestrictedSeeking||currentTime<=maxTimestamp-1);}",
};
const createStyles = fn(5090);
let obj = {
  container: null,
  loadingContainer: null,
  bufferingSpinner: null,
  bufferingSpinnerCentered: null,
  video: null,
  videoContainer: null,
  controls: null,
  controlsTopBottom: null,
  controlsMiddle: null,
  controlsTop: null,
  controlsBottom: null,
  progressContainer: null,
  progress: null,
  icon: null,
  iconDisabled: null,
  controlButton: null,
};
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
let rect1 = {
  flexDirection: "row",
  justifyContent: "flex-end",
  padding: nativeDefault.space.PX_8,
  position: "absolute",
  left: 0,
  right: 0,
};
obj.controlsTopBottom = rect1;
const alphaResult = n(nativeDefault.unsafe_rawColors.BLACK).alpha(0.5);
obj.controlsMiddle = {
  justifyContent: "center",
  alignItems: "center",
  flexGrow: 1,
  flexDirection: "row",
  gap: nativeDefault.space.PX_24,
  pointerEvents: "box-none",
};
obj.controlsTop = { top: 0 };
obj.controlsBottom = { bottom: 0 };
const rect2 = {
  position: "absolute",
  bottom: 0,
  right: 0,
  left: 0,
  justifyContent: "flex-end",
  height: nativeDefault.space.PX_16,
  overflow: "hidden",
};
obj.progressContainer = rect2;
let obj7 = {
  justifyContent: "center",
  alignItems: "center",
  flexGrow: 1,
  flexDirection: "row",
  gap: nativeDefault.space.PX_24,
  pointerEvents: "box-none",
};
obj.progress = {
  height: 1,
  backgroundColor: nativeDefault.colors.WHITE,
  shadowOffset: { width: 0, height: 0 },
  shadowRadius: 6,
  shadowOpacity: 1,
  elevation: 5,
  shadowColor: nativeDefault.colors.WHITE,
};
let obj8 = {
  height: 1,
  backgroundColor: nativeDefault.colors.WHITE,
  shadowOffset: { width: 0, height: 0 },
  shadowRadius: 6,
  shadowOpacity: 1,
  elevation: 5,
  shadowColor: nativeDefault.colors.WHITE,
};
obj.icon = { color: nativeDefault.colors.TEXT_DEFAULT };
let obj9 = { color: nativeDefault.colors.TEXT_DEFAULT };
obj.iconDisabled = { color: nativeDefault.colors.TEXT_SUBTLE };
let obj10 = { color: nativeDefault.colors.TEXT_SUBTLE };
obj.controlButton = { padding: nativeDefault.space.PX_8 };
let closure_17 = createStyles.createStyles(obj);
const ReactCompilerGating = fn(558);
let closure_18 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useBufferingState(onBuffer) {
      const cResult = c.c(5);
      onBuffer = onBuffer.onBuffer;
      noop.useRef(false);
      [tmp3, dependencyMap] = noop.useState(false);
      if (cResult[0] !== onBuffer) {
        const fn = function s(current) {
          dependencyMap(current);
          if (current !== ref.current) {
            ref.current = current;
            if (onBuffer != null) {
              onBuffer(current);
            }
          }
        };
        cResult[0] = onBuffer;
        cResult[1] = fn;
        let tmp4 = fn;
      } else {
        tmp4 = cResult[1];
      }
      if (cResult[2] === tmp3) {
        if (cResult[3] === tmp4) {
          let tmp5 = cResult[4];
        }
        return tmp5;
      }
      const obj2 = { isBuffering: tmp3, toggleBuffering: tmp4 };
      cResult[2] = tmp3;
      cResult[3] = tmp4;
      cResult[4] = obj2;
      tmp5 = obj2;
    }
  : function useBufferingState(onBuffer) {
      onBuffer = onBuffer.onBuffer;
      noop.useRef(false);
      const tmp = _slicedToArray(noop.useState(false), 2);
      closure_2 = tmp[1];
      const obj = { isBuffering: tmp[0], toggleBuffering: null };
      const items = [onBuffer];
      obj.toggleBuffering = noop.useCallback((current) => {
        closure_2(current);
        if (current !== ref.current) {
          ref.current = current;
          if (onBuffer != null) {
            onBuffer(current);
          }
        }
      }, items);
      return obj;
    };
let closure_19 = {
  code: "function shouldShowControls_AdVideoPlayerTsx3(){const{hasLoaded,hideControls,showControls,playerState,PlayerState,isVideoEnded}=this.__closure;return hasLoaded&&!hideControls&&(showControls.get()||playerState===PlayerState.PAUSED||playerState===PlayerState.ENDED||playerState===PlayerState.ERRORED||isVideoEnded);}",
};
let __initData = {
  code: "function AdVideoPlayerTsx4(){const{shouldShowControls,withSpring,SUBTLE_SPRING}=this.__closure;const show=shouldShowControls();return{opacity:withSpring(show?1:0,SUBTLE_SPRING),pointerEvents:show?'auto':'none'};}",
};
let closure_21 = {
  code: "function AdVideoPlayerTsx5(){const{withTiming,progressSharedValue,timingFast}=this.__closure;return{width:withTiming(progressSharedValue.get()*100+\"%\",timingFast,'animate-always')};}",
};
let obj11 = { padding: nativeDefault.space.PX_8 };
let size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/AdVideoPlayer.tsx");

export const AdVideoPlayer = noop.memo(function AdVideoPlayer(initialProgress) {
  initialProgress = initialProgress.initialProgress;
  let num = initialProgress.contentDuration;
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
  ({
    videoRef,
    bufferingSpinnerPlacement,
    onToggleCaptions,
    onOpenTranscript,
    onToggleFullscreen,
    onBuffer,
    onVideoTracks,
    onVideoLayout,
  } = initialProgress);
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
  ({
    repeat,
    httpEngine,
    automaticallyWaitsToMinimizeStalling,
    maxBitRate,
    bufferConfig,
    preferredForwardBufferDuration,
  } = initialProgress);
  if (repeat === undefined) {
    repeat = false;
  }
  videoRef = undefined;
  let first;
  closure_18 = undefined;
  let first1;
  __initData = undefined;
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
  toggleBuffering = undefined;
  let tmp = first();
  if (videoRef == null) {
    videoRef = onLoad.useRef(null);
  }
  const tmp3 = onLoadStart(onLoad.useState(num), 2);
  first = tmp3[0];
  closure_18 = tmp3[1];
  let merged = Object.assign(initialProgress);
  const tmp6 = onLoadStart(onLoad.useState({}), 2);
  first1 = tmp6[0];
  __initData = tmp6[1];
  const tmp9 = flag2;
  const tmp10 = onLoadStart(onLoad.useState(initialProgress(flag2[12]).PlayerState.LOADING), 2);
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
    tmp15 = first2 === tmp8(tmp9[12]).PlayerState.ENDED;
  }
  if (tmp15) {
    if (typeof repeat === "function") {
      tmp15 = tmp17 >= tmp18 - 1;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
  closure_29 = tmp15;
  sharedValue = initialProgress(tmp9[13]).useSharedValue(false);
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
  const tmp2 = onLoadStart;
  const tmp8Result = initialProgress(tmp9[13]);
  shouldShowControls.__closure = {
    hasLoaded: first3,
    hideControls: flag8,
    showControls: sharedValue,
    playerState: first2,
    PlayerState: initialProgress(tmp9[12]).PlayerState,
    isVideoEnded: tmp15,
  };
  shouldShowControls.__workletHash = 8094403036162;
  shouldShowControls.__initData = first1;
  const obj3 = {
    hasLoaded: first3,
    hideControls: flag8,
    showControls: sharedValue,
    playerState: first2,
    PlayerState: initialProgress(tmp9[12]).PlayerState,
    isVideoEnded: tmp15,
  };
  function ye() {
    const tmp = shouldShowControls();
    let num = 0;
    if (tmp) {
      num = 1;
    }
    const obj2 = { opacity: spring.withSpring(num, springPresets.SUBTLE_SPRING), pointerEvents: null };
    let str = "none";
    if (tmp) {
      str = "auto";
    }
    obj2.pointerEvents = str;
    return obj2;
  }
  const tmp8Result5 = initialProgress(tmp9[13]);
  ye.__closure = {
    shouldShowControls,
    withSpring: initialProgress(tmp9[14]).withSpring,
    SUBTLE_SPRING: initialProgress(tmp9[15]).SUBTLE_SPRING,
  };
  ye.__workletHash = 311315682972;
  ye.__initData = __initData;
  const animatedStyle = tmp8Result5.useAnimatedStyle(ye);
  const obj4 = {
    shouldShowControls,
    withSpring: initialProgress(tmp9[14]).withSpring,
    SUBTLE_SPRING: initialProgress(tmp9[15]).SUBTLE_SPRING,
  };
  const shouldShowControlsResult = shouldShowControls();
  sharedValue1 = initialProgress(tmp9[13]).useSharedValue(0);
  const tmp8Result6 = initialProgress(tmp9[13]);
  function ge() {
    const obj = { width: null };
    const result = 100 * sharedValue1.get();
    obj.width = timing.withTiming(`${tmp}%`, timingPresets.timingFast, "animate-always");
    return obj;
  }
  const tmp8Result7 = initialProgress(tmp9[13]);
  ge.__closure = {
    withTiming: initialProgress(tmp9[16]).withTiming,
    progressSharedValue: sharedValue1,
    timingFast: initialProgress(tmp9[17]).timingFast,
  };
  ge.__workletHash = 11793601648786;
  ge.__initData = first2;
  const animatedStyle1 = tmp8Result7.useAnimatedStyle(ge);
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
    closure_20((maxTimestampSec) => ({
      timestampSec,
      maxTimestampSec: Math.max(maxTimestampSec.maxTimestampSec, Math.floor(timestampSec)),
      duration,
    }));
  }, []);
  const obj5 = {
    withTiming: initialProgress(tmp9[16]).withTiming,
    progressSharedValue: sharedValue1,
    timingFast: initialProgress(tmp9[17]).timingFast,
  };
  [tmp27, c35] = tmp2(onLoad.useState(false), 2);
  const items2 = [onReadyForDisplay];
  const items3 = [flag, , , ,];
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
      const bound = Math.max(0, Math.min(arg0, flag ? first1.duration : first1.maxTimestampSec));
      ref2.current = (ref2.current + 1) % 100;
      if (onSeekStart != null) {
        tmp6();
      }
      const current = tmp.current;
      current.seek(bound + 0.0001 * ref2.current);
      closure_25.current = bound;
    }
  }, items3);
  const items4 = [callback4, first2, callback, onResumePlayback, onPausePlayback];
  const imperativeHandle = obj.useImperativeHandle(
    initialProgress.ref,
    () => ({
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
      },
    }),
    items4,
  );
  const items5 = [videoRef, initialProgress.timestampSec, flag2, callback, onLoad, callback4];
  const items6 = [first2, onPausePlayback, onResumePlayback, tmp15, callback, callback4];
  const callback5 = obj.useCallback((duration) => {
    duration = duration.duration;
    closure_18(duration);
    closure_24(true);
    if (null != videoRef.current) {
      const timestampSec = initialProgress.timestampSec;
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
    const subscription = ComponentDispatch.subscribe(constants.QUEST_GAME_LINK_OPENED, callback8);
    let ComponentDispatch2 = ComponentDispatchUtils.ComponentDispatch;
    const subscription1 = ComponentDispatch2.subscribe(constants.QUEST_APP_STORE_OVERLAY_FINISHED, callback9);
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
  let tmp39 = first2 === tmp8(tmp9[12]).PlayerState.ERRORED;
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
      let current = ref.current;
      if (current == null) {
        current = sharedValue1.get() * first;
      }
      const current1 = ref3.current;
      current1.push(current);
      callback4(current + 10);
    }
  }, items13);
  const tmp2Result = tmp2(onLoad.useState(false), 2);
  const items15 = [sharedValue1, callback2, onProgress];
  const callback1Result = callback1(
    onLoad.useCallback(() => {
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
    }, items14),
  );
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
  const tmp53 = initialProgress(tmp9[19]).useStateFromStores(items19, () => onSeek.getState()) === onError.ACTIVE;
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
          flag(flag2[21]).captureException(tmp4);
          const obj2 = flag(flag2[21]);
        }
      };
    }
    obj = PlatformUtils;
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
  const tmp8Result8 = initialProgress(tmp9[19]);
  ({ isBuffering, toggleBuffering } = closure_18({ onBuffer }));
  const items21 = [toggleBuffering, first2];
  const items22 = [toggleBuffering];
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
    if (obj.isIOS()) {
      toggleBuffering(true);
    }
    obj = PlatformUtils;
  }, items22);
  const callback19 = obj.useCallback(() => {
    if (obj.isIOS()) {
      toggleBuffering(false);
    }
    obj = PlatformUtils;
  }, items23);
  rect = flag(tmp9[22])();
  let tmp61 = isFullscreen;
  if (isFullscreen) {
    tmp61 = null != rect;
  }
  if (tmp61) {
    const obj6 = { paddingRight: null, paddingLeft: null };
    let _Math = Math;
    obj6.paddingRight = Math.max(rect.right, onResumePlayback.right);
    let _Math2 = Math;
    obj6.paddingLeft = Math.max(rect.left, onResumePlayback.left);
    tmp61 = obj6;
  }
  const obj7 = { style: null, accessible: false, children: null };
  const items24 = [tmp.container, style];
  obj7.style = items24;
  const obj8 = {
    style: tmp.videoContainer,
    onPress: callback10,
    accessible: !shouldShowControlsResult,
    accessibilityLabel: null,
    children: null,
  };
  const intl = tmp8(tmp9[23]).intl;
  const t = tmp8(tmp9[23]).t;
  obj8.accessibilityLabel = intl.string(tmp55 ? t.R3aFPe : t.fTMEUi);
  let tmp64Result = first2 !== tmp8(tmp9[12]).PlayerState.ERRORED;
  if (tmp64Result) {
    const obj9 = {
      mixWithOthers: "inherit",
      httpEngine,
      automaticallyWaitsToMinimizeStalling,
      maxBitRate,
      bufferConfig,
      preferredForwardBufferDuration,
      ref: videoRef,
      accessible: false,
      importantForAccessibility: "no-hide-descendants",
      accessibilityRole: "none",
      style: tmp.video,
      paused: tmp55,
      repeat,
      source: initialProgress.source,
      onBuffer: callback17,
      onPlaybackStalled: callback18,
      onPlaybackResume: callback19,
      onLoad: callback5,
      onSeek: callback11,
      onProgress: callback13,
      onLoadStart: callback15,
      onEnd: callback14,
      onError: callback16,
      onReadyForDisplay: callback3,
      onVideoTracks,
      onLayout: onVideoLayout,
      resizeMode: "contain",
    };
    tmp64Result = tmp64(flag8, obj9);
  }
  const items25 = [tmp64Result, , , , ,];
  let renderCaptionsResult;
  if (renderCaptions != null) {
    renderCaptionsResult = renderCaptions(first1.timestampSec);
  }
  items25[1] = renderCaptionsResult;
  if (!isBuffering) {
    items25[2] = isBuffering;
    let tmp64Result6 = !tmp27;
    if (!tmp27) {
      const obj10 = { style: tmp.loadingContainer, children: tmp64(onSeekStart, { animating: true }) };
      tmp64Result6 = tmp64(tmp65, obj10);
    }
    items25[3] = tmp64Result6;
    const obj11 = { style: null, accessible: false, children: null };
    const items26 = [tmp.controls, animatedStyle];
    obj11.style = items26;
    let tmp66Result = flag3;
    if (!flag3) {
      tmp66Result = flag4;
    }
    if (tmp66Result) {
      const obj12 = { style: null, children: null };
      const items27 = [, ,];
      ({ controlsTopBottom: arr29[0], controlsTop: arr29[1] } = tmp);
      items27[2] = tmp61;
      obj12.style = items27;
      if (!flag3) {
        const items28 = [flag3];
        if (flag4) {
          const obj13 = {
            accessibilityRole: "button",
            accessibilityLabel: null,
            onPress: null,
            style: null,
            children: null,
          };
          const intl3 = tmp8(tmp9[23]).intl;
          obj13.accessibilityLabel = intl3.string(tmp8(tmp9[23]).t.KCzjTi);
          obj13.onPress = onOpenTranscript;
          obj13.style = tmp.controlButton;
          const obj14 = { color: tmp.iconDisabled.color };
          obj13.children = tmp64(tmp8(tmp9[26]).TranscriptOutlineIcon, obj14);
          flag4 = tmp64(tmp8(tmp9[24]).PressableOpacity, obj13);
        }
        items28[1] = flag4;
        obj12.children = items28;
        tmp66Result = tmp66(tmp65, obj12);
      } else {
        const obj15 = {
          accessibilityRole: "button",
          accessibilityLabel: null,
          onPress: null,
          style: null,
          children: null,
        };
        const intl2 = tmp8(tmp9[23]).intl;
        obj15.accessibilityLabel = intl2.string(tmp8(tmp9[23]).t.bDSZO1);
        obj15.onPress = onToggleCaptions;
        obj15.style = tmp.controlButton;
        if (captionsEnabled) {
          let color = tmp.icon.color;
        } else {
          color = tmp.iconDisabled.color;
        }
        const obj16 = { color };
        obj15.children = tmp64(tmp8(tmp9[25]).ClosedCaptionsOutlineIcon, obj16);
        tmp64(tmp8(tmp9[24]).PressableOpacity, obj15);
      }
    }
    const items29 = [tmp66Result, ,];
    const obj17 = { style: tmp.controlsMiddle, children: null };
    let tmp64Result8 = flag7;
    if (flag7) {
      const obj18 = {
        disabled: first2 === tmp8(tmp9[12]).PlayerState.ERRORED,
        accessibilityRole: "button",
        accessibilityLabel: null,
        onPress: null,
        children: null,
      };
      const intl4 = tmp8(tmp9[23]).intl;
      obj18.accessibilityLabel = intl4.string(tmp8(tmp9[23]).t.r9s3Uv);
      obj18.onPress = callback1Result;
      const size = { color: tmp.icon.color, width: 16, height: 16 };
      obj18.children = tmp64(tmp8(tmp9[28]).SkipBackwardIcon, size);
      tmp64Result8 = tmp64(tmp8(tmp9[27]).VideoQuestPlayerControlButton, obj18);
    }
    const items30 = [tmp64Result8, ,];
    if (!tmp15) {
      if (first2 !== tmp8(tmp9[12]).PlayerState.ERRORED) {
        const t2 = tmp8(tmp9[23]).t;
        let K0e7M9 = tmp55 ? t2.R3aFPe : t2.fTMEUi;
      }
      const obj19 = {
        accessibilityRole: "button",
        accessibilityLabel: tmp78(K0e7M9),
        onPress: callback7,
        children: null,
      };
      if (!tmp15) {
        if (first2 !== tmp8(tmp9[12]).PlayerState.ERRORED) {
          if (tmp55) {
            let PauseIcon = tmp8(tmp9[30]).PlayIcon;
          } else {
            PauseIcon = tmp8(tmp9[31]).PauseIcon;
          }
          let tmp64Result9 = tmp64(PauseIcon, { size: "lg" });
        }
        obj19.children = tmp64Result9;
        items30[1] = tmp64(tmp8(tmp9[27]).VideoQuestPlayerControlButton, obj19);
        if (flag7) {
          const obj20 = {
            disabled: tmp39,
            accessibilityRole: "button",
            accessibilityLabel: null,
            onPress: null,
            children: null,
          };
          const intl5 = tmp8(tmp9[23]).intl;
          obj20.accessibilityLabel = intl5.string(tmp8(tmp9[23]).t.zWDcNP);
          obj20.onPress = callback1Result1;
          const size1 = { color: tmp.icon.color, width: 16, height: 16 };
          obj20.children = tmp64(tmp8(tmp9[32]).SkipForwardIcon, size1);
          flag7 = tmp64(tmp8(tmp9[27]).VideoQuestPlayerControlButton, obj20);
        }
        items30[2] = flag7;
        obj17.children = items30;
        items29[1] = tmp66(tmp65, obj17);
        if (flag5) {
          const obj21 = { style: null, children: null };
          const items31 = [, ,];
          ({ controlsTopBottom: arr33[0], controlsBottom: arr33[1] } = tmp);
          items31[2] = tmp61;
          obj21.style = items31;
          const obj22 = {
            accessibilityRole: "button",
            accessibilityLabel: null,
            onPress: null,
            style: null,
            children: null,
          };
          const intl6 = tmp8(tmp9[23]).intl;
          obj22.accessibilityLabel = intl6.string(tmp8(tmp9[23]).t.vKZT5t);
          obj22.onPress = onToggleFullscreen;
          obj22.style = tmp.controlButton;
          obj22.children = tmp64(tmp8(tmp9[33]).FullscreenEnterIcon, {});
          obj21.children = tmp64(tmp8(tmp9[24]).PressableOpacity, obj22);
          flag5 = tmp64(tmp65, obj21);
        }
        items29[2] = flag5;
        obj11.children = items29;
        items25[4] = tmp66(tmp60(tmp9[13]).View, obj11);
        if (flag6) {
          const obj23 = { style: tmp.progressContainer, children: null };
          const obj24 = { style: null };
          const items32 = [tmp.progress, animatedStyle1];
          obj24.style = items32;
          obj23.children = tmp64(tmp60(tmp9[13]).View, obj24);
          flag6 = tmp64(tmp65, obj23);
        }
        items25[5] = flag6;
        obj8.children = items25;
        obj7.children = tmp66(onProgress, obj8);
        return tmp64(tmp65, obj7);
      }
      tmp64Result9 = tmp64(tmp8(tmp9[29]).RetryIcon, { size: "lg" });
    }
    K0e7M9 = tmp8(tmp9[23]).t.K0e7M9;
  } else {
    let items33 = [tmp.bufferingSpinner];
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
      const obj25 = { animating: true, style: null, color: null };
      items33[1] = rect1;
      obj25.style = items33;
      items33 = tmp60(tmp9[6]).unsafe_rawColors.WHITE;
      obj25.color = items33;
      tmp64(tmp71, obj25);
    }
    rect1 = tmp.bufferingSpinnerCentered;
  }
});
