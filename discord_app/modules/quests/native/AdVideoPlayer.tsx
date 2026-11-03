// discord_app/modules/quests/native/AdVideoPlayer.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import ComponentDispatchUtils from "../../../utils/ComponentDispatchUtils.tsx";
import PlatformUtils from "../../../utils/PlatformUtils.tsx";
import useSafeAreaInsetsDefault from "../../safe_area/useSafeAreaInsets.native.tsx";
import media_playback_VideoDefault from "../../media_playback/native/Video.tsx";
import AdsVideoTypes from "AdsVideoTypes.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import AppStateStore from "../../../stores/native/AppStateStore.tsx";
import n from "../../../../_runtime/metro/00671__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, StyleSheet, Pressable: metroRequire, ActivityIndicator: closure_7 } = get_ActivityIndicator);
const Constants = fn(1072);
({ AppStates: closure_9, ComponentActions: closure_10 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
let rect = {
  left: nativeDefault.space.PX_16,
  right: nativeDefault.space.PX_16,
  top: nativeDefault.space.PX_16,
  bottom: nativeDefault.space.PX_16,
};
const Video = noop.memo(media_playback_VideoDefault);
let items = [
  {
    code: "(function hasVideoEnded_AdVideoPlayerTsx1(currentTime,videoDuration){return currentTime>=videoDuration-1;})",
  },
];
[tmp5] = items;
function hasVideoEnded(arg0, arg1) {
  return arg0 >= arg1 - 1;
}
hasVideoEnded.__workletHash = 903483685682;
hasVideoEnded.__initData = tmp5;
let items1 = [
  {
    code: "(function canSeekForward_AdVideoPlayerTsx2(currentTime,maxTimestamp,videoDuration,allowUnrestrictedSeeking){let[hasVideoEnded]=this.__closure;return!hasVideoEnded(currentTime,videoDuration)&&(allowUnrestrictedSeeking||currentTime<=maxTimestamp-1);})",
  },
  hasVideoEnded,
];
let closure_129_0;
[tmp6, tmp7] = items1;
function canSeekForward(arg0, arg1, arg2, arg3) {
  const tmp = require(arg0, arg2);
  let tmp2 = !tmp;
  if (!tmp) {
    let tmp3 = arg3;
    if (!arg3) {
      tmp3 = arg0 <= arg1 - 1;
    }
    tmp2 = tmp3;
  }
  return tmp2;
}
let items2 = [tmp7];
canSeekForward.__closure = items2;
canSeekForward.__workletHash = 4878964503596;
canSeekForward.__initData = tmp6;
const createStyles = fn(5141);
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
  controlButton: null,
};
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj.container = {};
const obj4 = {};
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
obj.controlButton = { padding: nativeDefault.space.PX_8 };
let closure_17 = createStyles.createStyles(obj);
let closure_18 = {
  code: "(function shouldShowControls_AdVideoPlayerTsx3(){let[hasLoaded,hideControls,showControls,playerState,PlayerState,isVideoEnded]=this.__closure;return hasLoaded&&!hideControls&&(showControls.get()||playerState===PlayerState.PAUSED||playerState===PlayerState.ENDED||playerState===PlayerState.ERRORED||isVideoEnded);})",
};
let closure_19 = {
  code: "(function AdVideoPlayerTsx4(){let[shouldShowControls,withSpring,SUBTLE_SPRING]=this.__closure;const show=shouldShowControls();return{opacity:withSpring(show?1:0,SUBTLE_SPRING),pointerEvents:show?'auto':'none'};})",
};
let closure_20 = {
  code: "(function AdVideoPlayerTsx5(){let[withTiming,progressSharedValue,timingFast]=this.__closure;return{width:withTiming(progressSharedValue.get()*100+\"%\",timingFast,'animate-always')};})",
};
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
  let flag2 = initialProgress.disableResumeOnLoad;
  if (flag2 === undefined) {
    flag2 = false;
  }
  dependencyMap = flag2;
  ({ isFullscreen, contentInsets, captionsEnabled, style, externallyPaused } = initialProgress);
  if (captionsEnabled === undefined) {
    captionsEnabled = false;
  }
  ({ renderCaptions, onLoadStart } = initialProgress);
  _slicedToArray = onLoadStart;
  const onLoad = initialProgress.onLoad;
  noop = onLoad;
  const onReadyForDisplay = initialProgress.onReadyForDisplay;
  c5 = onReadyForDisplay;
  const onProgress = initialProgress.onProgress;
  const onSeekStart = initialProgress.onSeekStart;
  const onSeek = initialProgress.onSeek;
  ({ onBuffer, onError } = initialProgress);
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
  first = undefined;
  closure_17 = undefined;
  first1 = undefined;
  closure_19 = undefined;
  first2 = undefined;
  closure_21 = undefined;
  c22 = undefined;
  let callback;
  closure_27 = undefined;
  let sharedValue;
  let sharedValue1;
  closure_30 = undefined;
  let callback2;
  c32 = undefined;
  let callback4;
  let callback6;
  let callback8;
  let callback9;
  closure_38 = undefined;
  let callback17;
  let tmp = closure_17();
  if (videoRef == null) {
    videoRef = noop.useRef(null);
  }
  [first, closure_17] = noop.useState(num);
  let merged = Object.assign(initialProgress);
  [first1, closure_19] = noop.useState({});
  [first2, closure_21] = noop.useState(onBuffer(17076).PlayerState.LOADING);
  [tmp13, c22] = noop.useState(false);
  noop.useRef(null);
  noop.useRef(0);
  noop.useRef([]);
  items = [onPlayerStateChange];
  callback = obj.useCallback((arg0) => {
    closure_21(arg0);
    if (onPlayerStateChange != null) {
      onPlayerStateChange(arg0);
    }
  }, items);
  let tmp15 = tmp13;
  if (tmp13) {
    tmp15 = first2 === tmp8(17076).PlayerState.ENDED;
  }
  if (tmp15) {
    if (typeof videoRef === "function") {
      tmp15 = tmp17 >= tmp18 - 1;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
  closure_27 = tmp15;
  let obj2 = {};
  const tmp12 = _slicedToArray(noop.useState(false), 2);
  sharedValue = onBuffer(1652).useSharedValue(false);
  let items1 = [first1, tmp13, flag8, sharedValue, first2, onBuffer(17076).PlayerState, tmp15];
  onBuffer = undefined;
  _slicedToArray = undefined;
  noop = undefined;
  c5 = undefined;
  [tmp20, tmp21, tmp22, obj4, tmp23, tmp24, tmp25] = items1;
  function shouldShowControls() {
    let tmp = onBuffer;
    if (onBuffer) {
      tmp = !closure_1;
    }
    if (tmp) {
      value = _undefined.get();
      if (!value) {
        value = c3 === _undefined3.PAUSED;
      }
      if (!value) {
        value = c3 === _undefined3.ENDED;
      }
      if (!value) {
        value = c3 === _undefined3.ERRORED;
      }
      if (!value) {
        value = c5;
      }
      tmp = value;
    }
    return tmp;
  }
  const items2 = [tmp21, tmp22, obj4, tmp23, tmp24, tmp25];
  shouldShowControls.__closure = items2;
  shouldShowControls.__workletHash = 7564458846587;
  shouldShowControls.__initData = tmp20;
  const tmp8Result = onBuffer(1652);
  const items3 = [closure_19, shouldShowControls, onBuffer(5757).withSpring, onBuffer(5758).SUBTLE_SPRING];
  onBuffer = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  [tmp26, tmp27, tmp28, tmp29] = items3;
  class AdVideoPlayerTsx4 {
    constructor() {
      tmp = onBuffer();
      num = 0;
      tmp2 = closure_1;
      if (tmp) {
        num = 1;
      }
      obj = { opacity: tmp2(num, closure_2), pointerEvents: null };
      str = "none";
      if (tmp) {
        str = "auto";
      }
      obj.pointerEvents = str;
      return obj;
    }
  }
  const items4 = [tmp27, tmp28, tmp29];
  AdVideoPlayerTsx4.__closure = items4;
  AdVideoPlayerTsx4.__workletHash = 15853617044197;
  AdVideoPlayerTsx4.__initData = tmp26;
  const animatedStyle = onBuffer(1652).useAnimatedStyle(AdVideoPlayerTsx4);
  if (tmp21) {
    tmp21 = !tmp22;
  }
  if (tmp21) {
    tmp21 = obj4.get() || tmp23 === tmp24.PAUSED || tmp23 === tmp24.ENDED || tmp23 === tmp24.ERRORED || tmp25;
    const tmp31 = obj4.get() || tmp23 === tmp24.PAUSED || tmp23 === tmp24.ENDED || tmp23 === tmp24.ERRORED || tmp25;
  }
  const tmp8Result5 = onBuffer(1652);
  sharedValue1 = onBuffer(1652).useSharedValue(0);
  const tmp8Result6 = onBuffer(1652);
  const items5 = [first2, onBuffer(5377).withTiming, sharedValue1, onBuffer(5380).timingFast];
  onBuffer = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  [tmp33, tmp34, tmp35, tmp36] = items5;
  class AdVideoPlayerTsx5 {
    constructor() {
      obj = { width: onBuffer(`${100 * closure_1.get()}%`, closure_2, "animate-always") };
      return obj;
    }
  }
  const items6 = [tmp34, tmp35, tmp36];
  AdVideoPlayerTsx5.__closure = items6;
  AdVideoPlayerTsx5.__workletHash = 12359561558571;
  AdVideoPlayerTsx5.__initData = tmp33;
  const animatedStyle1 = onBuffer(1652).useAnimatedStyle(AdVideoPlayerTsx5);
  closure_30 = obj.useRef(-1);
  const items7 = [sharedValue];
  const callback1 = obj.useCallback((arg0) => {
    closure_0 = arg0;
    return () => {
      items = [...arguments];
      clearTimeout(ref.current);
      let result = sharedValue.set(true);
      ref.current = setTimeout(() => {
        const result = closure_1_28.set(false);
      }, 2000);
      if (null != closure_0) {
        const items1 = [];
        HermesBuiltin.arraySpread(items, 0);
        return HermesBuiltin.apply(items1, undefined);
      }
    };
  }, items7);
  callback2 = obj.useCallback((timestampSec, duration) => {
    closure_19((maxTimestampSec) => ({
      timestampSec,
      maxTimestampSec: Math.max(maxTimestampSec.maxTimestampSec, Math.floor(timestampSec)),
      duration,
    }));
  }, []);
  const tmp8Result7 = onBuffer(1652);
  [tmp41, c32] = noop.useState(false);
  const items8 = [onReadyForDisplay];
  const items9 = [flag, , , ,];
  ({ duration: arr10[1], maxTimestampSec: arr10[2] } = first1);
  items9[3] = videoRef;
  items9[4] = onSeekStart;
  const callback3 = obj.useCallback(() => {
    if (c5 != null) {
      tmp();
    }
    _undefined5(true);
  }, items8);
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
      closure_23.current = bound;
    }
  }, items9);
  const items10 = [callback4, first2, callback, onResumePlayback, onPausePlayback];
  const imperativeHandle = obj.useImperativeHandle(
    initialProgress.ref,
    () => ({
      seekToStart() {
        if (first2 !== onBuffer(17076).PlayerState.ERRORED) {
          callback4(0);
          if (first2 === onBuffer(17076).PlayerState.ENDED) {
            callback(onBuffer(17076).PlayerState.PLAYING);
            if (onResumePlayback != null) {
              tmp8(onBuffer(17076).PlaybackTriggerSource.IMPERATIVE_API);
            }
          }
        }
      },
      play() {
        if (first2 === onBuffer(17076).PlayerState.PAUSED) {
          callback(onBuffer(17076).PlayerState.PLAYING);
          if (onResumePlayback != null) {
            tmp5(onBuffer(17076).PlaybackTriggerSource.IMPERATIVE_API);
          }
        }
      },
      pause() {
        if (first2 === onBuffer(17076).PlayerState.PLAYING) {
          callback(onBuffer(17076).PlayerState.PAUSED);
          if (onPausePlayback != null) {
            tmp5(onBuffer(17076).PlaybackTriggerSource.IMPERATIVE_API);
          }
        }
      },
    }),
    items10,
  );
  const items11 = [videoRef, initialProgress.timestampSec, flag2, callback, onLoad, callback4];
  const items12 = [first2, onPausePlayback, onResumePlayback, tmp15, callback, callback4];
  const callback5 = obj.useCallback((duration) => {
    duration = duration.duration;
    closure_17(duration);
    _undefined4(true);
    if (null != videoRef.current) {
      const timestampSec = onBuffer.timestampSec;
      let tmp5 = !c2;
      if (!c2) {
        tmp5 = timestampSec > 5;
      }
      if (tmp5) {
        tmp5 = timestampSec < duration - 3;
      }
      if (tmp5) {
        callback4(timestampSec - 1);
      }
      callback(AdsVideoTypes.PlayerState.PLAYING);
      if (_undefined3 != null) {
        _undefined3(duration);
      }
    }
  }, items11);
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
  }, items12);
  const items13 = [callback6];
  const callback7 = obj.useCallback(() => callback6(), items13);
  noop.useRef(false);
  const items14 = [first2, callback, onPausePlayback];
  callback8 = obj.useCallback(() => {
    closure_35.current = false;
    if (first2 === AdsVideoTypes.PlayerState.PLAYING) {
      closure_35.current = true;
      callback(AdsVideoTypes.PlayerState.PAUSED);
      if (onPausePlayback != null) {
        tmp6(AdsVideoTypes.PlaybackTriggerSource.SYSTEM_INITIATED);
      }
    }
  }, items14);
  const items15 = [first2, callback, onResumePlayback];
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
  }, items15);
  const items16 = [callback8, callback9];
  const effect = obj.useEffect(() => {
    let ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
    const subscription = ComponentDispatch.subscribe(constants.QUEST_GAME_LINK_OPENED, callback8);
    let ComponentDispatch2 = ComponentDispatchUtils.ComponentDispatch;
    const subscription1 = ComponentDispatch2.subscribe(constants.QUEST_APP_STORE_OVERLAY_FINISHED, callback9);
    return () => {
      const ComponentDispatch = onBuffer(1108).ComponentDispatch;
      ComponentDispatch.unsubscribe(onEnd.QUEST_GAME_LINK_OPENED, callback8);
      const ComponentDispatch2 = onBuffer(1108).ComponentDispatch;
      ComponentDispatch2.unsubscribe(onEnd.QUEST_APP_STORE_OVERLAY_FINISHED, callback9);
    };
  }, items16);
  const items17 = [sharedValue, callback6];
  const items18 = [first, sharedValue1, onSeek, callback2, videoRef];
  const callback10 = obj.useCallback(() => {
    if (sharedValue.get()) {
      const result = sharedValue.set(false);
    }
    callback6({ shouldRestartVideo: false });
  }, items17);
  const callback11 = obj.useCallback((currentTime) => {
    const current = ref4.current;
    let arr = current.shift();
    if (arr == null) {
      arr = null;
    }
    if (null != videoRef.current) {
      closure_23.current = null;
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
  }, items18);
  let tmp53 = first2 === tmp8(17076).PlayerState.ERRORED;
  if (!tmp53) {
    let timestampSec = first1.timestampSec;
    if (typeof first === "function") {
      const tmp58 = closure_144_0(timestampSec, tmp56);
      let tmp59 = !tmp58;
      if (!tmp58) {
        if (!flag) {
          flag = timestampSec <= tmp55 - 1;
        }
        tmp59 = flag;
      }
      tmp53 = !tmp59;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
  closure_38 = tmp53;
  const items19 = [callback4, first, sharedValue1, tmp53];
  const items20 = [callback4, first, sharedValue1, first2, callback];
  const callback12 = obj.useCallback(() => {
    if (!closure_38) {
      let current = ref2.current;
      if (current == null) {
        current = sharedValue1.get() * first;
      }
      const current1 = ref4.current;
      current1.push(current);
      callback4(current + 10);
    }
  }, items19);
  const tmp2Result = _slicedToArray(noop.useState(false), 2);
  const items21 = [sharedValue1, callback2, onProgress];
  const callback1Result = callback1(
    noop.useCallback(() => {
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
    }, items20),
  );
  const items22 = [callback, onEnd, repeat];
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
  }, items21);
  const items23 = [callback, onLoadStart];
  const callback14 = obj.useCallback(() => {
    if (!repeat) {
      callback(AdsVideoTypes.PlayerState.ENDED);
    }
    if (onEnd != null) {
      tmp5();
    }
  }, items22);
  const items24 = [callback, onError];
  const callback15 = obj.useCallback(() => {
    callback(AdsVideoTypes.PlayerState.LOADING);
    if (_undefined2 != null) {
      _undefined2();
    }
  }, items23);
  const callback16 = obj.useCallback((arg0) => {
    callback(AdsVideoTypes.PlayerState.ERRORED);
    if (onError != null) {
      tmp2(arg0);
    }
  }, items24);
  const callback1Result1 = callback1(callback12);
  const items25 = [onSeek];
  const tmp67 = onBuffer(504).useStateFromStores(items25, () => onSeek.getState()) === onError.ACTIVE;
  const items26 = [videoRef];
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
          closure_1(dependencyMap[19]).captureException(tmp4);
          const obj2 = closure_1(dependencyMap[19]);
        }
      };
    }
    obj = PlatformUtils;
  }, items26);
  let tmp69 = !tmp67;
  if (tmp67) {
    tmp69 = first2 === tmp8(17076).PlayerState.PAUSED;
  }
  if (!tmp69) {
    tmp69 = first2 === tmp8(17076).PlayerState.LOADING;
  }
  if (!tmp69) {
    tmp69 = externallyPaused;
  }
  importDefault = obj.useRef(false);
  const tmp8Result8 = onBuffer(504);
  [tmp71, c2] = noop.useState(false);
  const items27 = [onBuffer];
  callback17 = obj.useCallback((current) => {
    _undefined(current);
    if (current !== ref.current) {
      ref.current = current;
      if (onBuffer != null) {
        onBuffer(current);
      }
    }
  }, items27);
  const items28 = [callback17, first2];
  const items29 = [callback17];
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
  }, items28);
  const items30 = [callback17];
  const callback19 = obj.useCallback(() => {
    if (obj.isIOS()) {
      callback17(true);
    }
    obj = PlatformUtils;
  }, items29);
  const callback20 = obj.useCallback(() => {
    if (obj.isIOS()) {
      callback17(false);
    }
    obj = PlatformUtils;
  }, items30);
  rect = useSafeAreaInsetsDefault();
  let tmp77 = isFullscreen;
  if (isFullscreen) {
    tmp77 = null != rect;
  }
  if (tmp77) {
    const obj3 = { paddingRight: null, paddingLeft: null };
    let _Math = Math;
    obj3.paddingRight = Math.max(rect.right, onResumePlayback.right);
    let _Math2 = Math;
    obj3.paddingLeft = Math.max(rect.left, onResumePlayback.left);
    tmp77 = obj3;
  }
  const obj5 = { style: null, accessible: false, children: null };
  const items31 = [tmp.container, style];
  obj5.style = items31;
  const obj6 = {
    style: tmp.videoContainer,
    onPress: callback10,
    accessible: !tmp21,
    accessibilityLabel: null,
    children: null,
  };
  const intl = tmp8(1113).intl;
  const t = tmp8(1113).t;
  obj6.accessibilityLabel = intl.string(tmp69 ? t.R3aFPe : t.fTMEUi);
  let tmp80Result = first2 !== tmp8(17076).PlayerState.ERRORED;
  if (tmp80Result) {
    const obj7 = {
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
      paused: tmp69,
      repeat,
      source: initialProgress.source,
      onBuffer: callback18,
      onPlaybackStalled: callback19,
      onPlaybackResume: callback20,
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
    tmp80Result = tmp80(repeat, obj7);
  }
  const items32 = [tmp80Result, , , , ,];
  let renderCaptionsResult;
  if (renderCaptions != null) {
    renderCaptionsResult = renderCaptions(first1.timestampSec);
  }
  items32[1] = renderCaptionsResult;
  if (!tmp71) {
    items32[2] = tmp71;
    let tmp80Result6 = !tmp41;
    if (!tmp41) {
      const obj8 = { style: tmp.loadingContainer, children: tmp80(onSeekStart, { animating: true }) };
      tmp80Result6 = tmp80(tmp81, obj8);
    }
    items32[3] = tmp80Result6;
    const obj9 = { style: null, accessible: false, children: null };
    const items33 = [tmp.controls, animatedStyle];
    obj9.style = items33;
    let tmp82Result = flag3;
    if (!flag3) {
      tmp82Result = flag4;
    }
    if (tmp82Result) {
      const obj10 = { style: null, children: null };
      const items34 = [, ,];
      ({ controlsTopBottom: arr36[0], controlsTop: arr36[1] } = tmp);
      items34[2] = tmp77;
      obj10.style = items34;
      if (!flag3) {
        const items35 = [flag3];
        if (flag4) {
          const obj11 = {
            accessibilityRole: "button",
            accessibilityLabel: null,
            onPress: null,
            style: null,
            children: null,
          };
          const intl3 = tmp8(1113).intl;
          obj11.accessibilityLabel = intl3.string(tmp8(1113).t.KCzjTi);
          obj11.onPress = onOpenTranscript;
          obj11.style = tmp.controlButton;
          const obj12 = { color: tmp.icon.color };
          obj11.children = tmp80(tmp8(17096).TranscriptOutlineIcon, obj12);
          flag4 = tmp80(tmp8(7106).PressableOpacity, obj11);
        }
        items35[1] = flag4;
        obj10.children = items35;
        tmp82Result = tmp82(tmp81, obj10);
      } else {
        const obj13 = {
          accessibilityRole: "togglebutton",
          accessibilityState: null,
          accessibilityLabel: null,
          onPress: null,
          style: null,
          children: null,
        };
        const obj14 = { checked: captionsEnabled };
        obj13.accessibilityState = obj14;
        const intl2 = tmp8(1113).intl;
        obj13.accessibilityLabel = intl2.string(tmp8(1113).t.bDSZO1);
        obj13.onPress = onToggleCaptions;
        obj13.style = tmp.controlButton;
        if (captionsEnabled) {
          let ClosedCaptionsOutlineIcon = tmp8(17092).ClosedCaptionsIcon;
        } else {
          ClosedCaptionsOutlineIcon = tmp8(17094).ClosedCaptionsOutlineIcon;
        }
        const obj15 = { color: tmp.icon.color };
        obj13.children = tmp80(ClosedCaptionsOutlineIcon, obj15);
        tmp80(tmp8(7106).PressableOpacity, obj13);
      }
    }
    const items36 = [tmp82Result, ,];
    const obj16 = { style: tmp.controlsMiddle, children: null };
    let tmp80Result8 = flag7;
    if (flag7) {
      const obj17 = {
        disabled: first2 === tmp8(17076).PlayerState.ERRORED,
        accessibilityRole: "button",
        accessibilityLabel: null,
        onPress: null,
        children: null,
      };
      const intl4 = tmp8(1113).intl;
      obj17.accessibilityLabel = intl4.string(tmp8(1113).t.r9s3Uv);
      obj17.onPress = callback1Result;
      const size = { color: tmp.icon.color, width: 16, height: 16 };
      obj17.children = tmp80(tmp8(17099).SkipBackwardIcon, size);
      tmp80Result8 = tmp80(tmp8(17098).VideoQuestPlayerControlButton, obj17);
    }
    const items37 = [tmp80Result8, ,];
    if (!tmp15) {
      if (first2 !== tmp8(17076).PlayerState.ERRORED) {
        const t2 = tmp8(1113).t;
        let K0e7M9 = tmp69 ? t2.R3aFPe : t2.fTMEUi;
      }
      const obj18 = {
        accessibilityRole: "button",
        accessibilityLabel: tmp94(K0e7M9),
        onPress: callback7,
        children: null,
      };
      if (!tmp15) {
        if (first2 !== tmp8(17076).PlayerState.ERRORED) {
          if (tmp69) {
            let PauseIcon = tmp8(8972).PlayIcon;
          } else {
            PauseIcon = tmp8(8974).PauseIcon;
          }
          let tmp80Result9 = tmp80(PauseIcon, { size: "lg" });
        }
        obj18.children = tmp80Result9;
        items37[1] = tmp80(tmp8(17098).VideoQuestPlayerControlButton, obj18);
        if (flag7) {
          const obj19 = {
            disabled: tmp53,
            accessibilityRole: "button",
            accessibilityLabel: null,
            onPress: null,
            children: null,
          };
          const intl5 = tmp8(1113).intl;
          obj19.accessibilityLabel = intl5.string(tmp8(1113).t.zWDcNP);
          obj19.onPress = callback1Result1;
          const size1 = { color: tmp.icon.color, width: 16, height: 16 };
          obj19.children = tmp80(tmp8(17100).SkipForwardIcon, size1);
          flag7 = tmp80(tmp8(17098).VideoQuestPlayerControlButton, obj19);
        }
        items37[2] = flag7;
        obj16.children = items37;
        items36[1] = tmp82(tmp81, obj16);
        if (flag5) {
          const obj20 = { style: null, children: null };
          const items38 = [, ,];
          ({ controlsTopBottom: arr40[0], controlsBottom: arr40[1] } = tmp);
          items38[2] = tmp77;
          obj20.style = items38;
          const obj21 = {
            accessibilityRole: "button",
            accessibilityLabel: null,
            onPress: null,
            style: null,
            children: null,
          };
          const intl6 = tmp8(1113).intl;
          obj21.accessibilityLabel = intl6.string(tmp8(1113).t.vKZT5t);
          obj21.onPress = onToggleFullscreen;
          obj21.style = tmp.controlButton;
          obj21.children = tmp80(tmp8(17101).FullscreenEnterIcon, {});
          obj20.children = tmp80(tmp8(7106).PressableOpacity, obj21);
          flag5 = tmp80(tmp81, obj20);
        }
        items36[2] = flag5;
        obj9.children = items36;
        items32[4] = tmp82(tmp76(1652).View, obj9);
        if (flag6) {
          const obj22 = { style: tmp.progressContainer, children: null };
          const obj23 = { style: null };
          const items39 = [tmp.progress, animatedStyle1];
          obj23.style = items39;
          obj22.children = tmp80(tmp76(1652).View, obj23);
          flag6 = tmp80(tmp81, obj22);
        }
        items32[5] = flag6;
        obj6.children = items32;
        obj5.children = tmp82(tmp83, obj6);
        return tmp80(tmp81, obj5);
      }
      tmp80Result9 = tmp80(tmp8(11220).RetryIcon, { size: "lg" });
    }
    K0e7M9 = tmp8(1113).t.K0e7M9;
  } else {
    let items40 = [tmp.bufferingSpinner];
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
      const obj24 = { animating: true, style: null, color: null };
      items40[1] = rect1;
      obj24.style = items40;
      items40 = tmp76(575).unsafe_rawColors.WHITE;
      obj24.color = items40;
      tmp80(tmp87, obj24);
    }
    rect1 = tmp.bufferingSpinnerCentered;
  }
  const tmp2Result2 = _slicedToArray(noop.useState(false), 2);
  tmp83 = onProgress;
});
