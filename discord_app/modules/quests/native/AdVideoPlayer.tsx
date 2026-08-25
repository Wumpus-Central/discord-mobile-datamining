// discord_app/modules/quests/native/AdVideoPlayer.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import _isNativeReflectConstructDefault from "../../../../_runtime/09018__isNativeReflectConstruct.js";
import closure_3 from "../../../../_runtime/metro/00032__slicedToArray.js";
import importAllResult from "../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_8 from "../../../stores/native/AppStateStore.tsx";
import ME from "../../../Constants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";
import importDefaultResult from "../../../../_runtime/00689_n.js";

const require = arg1;
let c4 = importAllResult;
({ View: c5, StyleSheet, Pressable: closure_6, ActivityIndicator: error } = get_ActivityIndicator);
({ AppStates: c9, ComponentActions: c10 } = ME);
({ jsx: unpackModuleId, jsxs: closure_12 } = jsxProd);
let obj = { left: ThemesDefault.space.PX_16, right: ThemesDefault.space.PX_16, top: ThemesDefault.space.PX_16, bottom: ThemesDefault.space.PX_16 };
let closure_14 = importAllResult.memo(_isNativeReflectConstructDefault);
function hasVideoEnded(arg0, arg1) {
  return arg0 >= arg1 - 1;
}
hasVideoEnded.__closure = {};
hasVideoEnded.__workletHash = 8992945176371;
hasVideoEnded.__initData = { code: "function hasVideoEnded_AdVideoPlayerTsx1(currentTime,videoDuration){return currentTime>=videoDuration-1;}" };
function canSeekForward(arg0, arg1, arg2, arg3) {
  if (typeof hasVideoEnded !== "function") {
    HermesBuiltin.throwTypeError();
  }
  let tmp2 = !tmp;
  if (arg0 < arg2 - 1) {
    let tmp3 = arg3;
    if (!arg3) {
      tmp3 = arg0 <= arg1 - 1;
    }
    tmp2 = tmp3;
  }
  return tmp2;
}
canSeekForward.__closure = { hasVideoEnded };
canSeekForward.__workletHash = 14098132092693;
canSeekForward.__initData = { code: "function canSeekForward_AdVideoPlayerTsx2(currentTime,maxTimestamp,videoDuration,allowUnrestrictedSeeking){const{hasVideoEnded}=this.__closure;return!hasVideoEnded(currentTime,videoDuration)&&(allowUnrestrictedSeeking||currentTime<=maxTimestamp-1);}" };
obj = { container: null, loadingContainer: null, bufferingSpinner: null, bufferingSpinnerCentered: null, video: null, videoContainer: null, controls: null, controlsTopBottom: null, controlsMiddle: null, controlsTop: null, controlsBottom: null, progressContainer: null, progress: null, icon: null, iconDisabled: null, controlButton: null };
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj[0] = {};
createCacheKey = {};
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
createCacheKey.backgroundColor = ThemesDefault.colors.BACKGROUND_BASE_LOWEST;
createCacheKey.justifyContent = "center";
createCacheKey.alignItems = "center";
obj[1] = createCacheKey;
obj[2] = { position: "absolute" };
let obj3 = {};
const merged2 = Object.assign(StyleSheet.absoluteFillObject);
obj3.justifyContent = "center";
obj3.alignItems = "center";
obj[3] = obj3;
obj[4] = { height: "100%", width: "100%" };
obj[5] = { position: "relative", height: "100%", width: "100%" };
let obj4 = {};
const merged3 = Object.assign(StyleSheet.absoluteFillObject);
let obj1 = {};
const importDefaultResultResult = importDefaultResult(ThemesDefault.unsafe_rawColors.BLACK);
obj4.backgroundColor = importDefaultResult(ThemesDefault.unsafe_rawColors.BLACK).alpha(0.5).hex();
obj4.justifyContent = "center";
obj4.alignItems = "center";
obj4.flexDirection = "column";
obj[6] = obj4;
const alphaResult = importDefaultResult(ThemesDefault.unsafe_rawColors.BLACK).alpha(0.5);
obj[7] = { flexDirection: "row", justifyContent: "flex-end", padding: ThemesDefault.space.PX_8, position: "absolute", left: 0, right: 0 };
let obj5 = { flexDirection: "row", justifyContent: "flex-end", padding: ThemesDefault.space.PX_8, position: "absolute", left: 0, right: 0 };
obj[8] = { justifyContent: "center", alignItems: "center", flexGrow: 1, flexDirection: "row", gap: ThemesDefault.space.PX_24, pointerEvents: "box-none" };
obj[9] = { top: 0 };
obj[10] = { bottom: 0 };
let obj6 = { justifyContent: "center", alignItems: "center", flexGrow: 1, flexDirection: "row", gap: ThemesDefault.space.PX_24, pointerEvents: "box-none" };
obj[11] = { position: "absolute", bottom: 0, right: 0, left: 0, justifyContent: "flex-end", height: ThemesDefault.space.PX_16, overflow: "hidden" };
let obj7 = { position: "absolute", bottom: 0, right: 0, left: 0, justifyContent: "flex-end", height: ThemesDefault.space.PX_16, overflow: "hidden" };
obj[12] = { height: 1, backgroundColor: ThemesDefault.colors.WHITE, shadowOffset: { width: 0, height: 0 }, shadowRadius: 6, shadowOpacity: 1, elevation: 5, shadowColor: ThemesDefault.colors.WHITE };
let obj8 = { height: 1, backgroundColor: ThemesDefault.colors.WHITE, shadowOffset: { width: 0, height: 0 }, shadowRadius: 6, shadowOpacity: 1, elevation: 5, shadowColor: ThemesDefault.colors.WHITE };
obj[13] = { color: ThemesDefault.colors.TEXT_DEFAULT };
let obj9 = { color: ThemesDefault.colors.TEXT_DEFAULT };
obj[14] = { color: ThemesDefault.colors.TEXT_SUBTLE };
let obj10 = { color: ThemesDefault.colors.TEXT_SUBTLE };
obj[15] = { padding: ThemesDefault.space.PX_8 };
let closure_17 = createCacheKey.createStyles(obj);
let closure_18 = { code: "function shouldShowControls_AdVideoPlayerTsx3(){const{hasLoaded,hideControls,showControls,playerState,PlayerState,isVideoEnded}=this.__closure;return hasLoaded&&!hideControls&&(showControls.get()||playerState===PlayerState.PAUSED||playerState===PlayerState.ENDED||playerState===PlayerState.ERRORED||isVideoEnded);}" };
let closure_19 = { code: "function AdVideoPlayerTsx4(){const{shouldShowControls,withSpring,SUBTLE_SPRING}=this.__closure;const show=shouldShowControls();return{opacity:withSpring(show?1:0,SUBTLE_SPRING),pointerEvents:show?'auto':'none'};}" };
let closure_20 = { code: "function AdVideoPlayerTsx5(){const{withTiming,progressSharedValue,timingFast}=this.__closure;return{width:withTiming(progressSharedValue.get()*100+\"%\",timingFast,'animate-always')};}" };
let obj11 = { padding: ThemesDefault.space.PX_8 };
const memoResult = importAllResult.memo((initialProgress) => {
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
  let callback;
  let first1;
  closure_19 = undefined;
  let first2;
  closure_21 = undefined;
  let first3;
  closure_23 = undefined;
  closure_24 = undefined;
  closure_25 = undefined;
  closure_26 = undefined;
  callback = undefined;
  closure_28 = undefined;
  let sharedValue;
  let shouldShowControls;
  let sharedValue1;
  closure_32 = undefined;
  let callback2;
  c34 = undefined;
  let callback4;
  let callback6;
  closure_37 = undefined;
  let callback8;
  let callback9;
  closure_40 = undefined;
  let callback17;
  let tmp = callback();
  obj = onLoad;
  if (videoRef == null) {
    videoRef = onLoad.useRef(null);
  }
  let tmp3 = onLoadStart(obj.useState(num), 2);
  first = tmp3[0];
  callback = tmp3[1];
  obj = {};
  let merged = Object.assign(initialProgress);
  const tmp6 = onLoadStart(obj.useState(obj), 2);
  first1 = tmp6[0];
  closure_19 = tmp6[1];
  const tmp9 = flag2;
  const tmp10 = onLoadStart(obj.useState(onBuffer(flag2[10]).PlayerState.LOADING), 2);
  first2 = tmp10[0];
  closure_21 = tmp10[1];
  const tmp12 = onLoadStart(obj.useState(false), 2);
  first3 = tmp12[0];
  closure_23 = tmp12[1];
  closure_24 = obj.useRef(null);
  closure_25 = obj.useRef(0);
  closure_26 = obj.useRef([]);
  let items = [onPlayerStateChange];
  callback = obj.useCallback((arg0) => {
    callback3(arg0);
    if (onPlayerStateChange != null) {
      onPlayerStateChange(arg0);
    }
  }, items);
  let tmp15 = first3;
  if (first3) {
    tmp15 = first2 === tmp8(tmp9[10]).PlayerState.ENDED;
  }
  if (tmp15) {
    ({ timestampSec, duration } = first1);
    if (typeof videoRef !== "function") {
      HermesBuiltin.throwTypeError();
    }
    tmp15 = timestampSec >= duration - 1;
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
      let value = sharedValue.get();
      if (!value) {
        value = first2 === onBuffer(flag2[10]).PlayerState.PAUSED;
      }
      if (!value) {
        value = first2 === onBuffer(flag2[10]).PlayerState.ENDED;
      }
      if (!value) {
        value = first2 === onBuffer(flag2[10]).PlayerState.ERRORED;
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
      tmp2 = onBuffer;
      tmp3 = closure_2;
      obj = onBuffer(closure_2[12]);
      num = 0;
      if (tmp) {
        num = 1;
      }
      obj = { opacity: obj.withSpring(num, tmp2(tmp3[13]).SUBTLE_SPRING), pointerEvents: null };
      str = "none";
      if (tmp) {
        str = "auto";
      }
      obj[1] = str;
      return obj;
    }
  }
  Se.__closure = { shouldShowControls, withSpring: onBuffer(tmp9[12]).withSpring, SUBTLE_SPRING: onBuffer(tmp9[13]).SUBTLE_SPRING };
  Se.__workletHash = 311315682972;
  Se.__initData = closure_19;
  const animatedStyle = tmp8Result.useAnimatedStyle(Se);
  obj1 = { shouldShowControls, withSpring: onBuffer(tmp9[12]).withSpring, SUBTLE_SPRING: onBuffer(tmp9[13]).SUBTLE_SPRING };
  const shouldShowControlsResult = shouldShowControls();
  sharedValue1 = onBuffer(tmp9[11]).useSharedValue(0);
  const tmp8Result1 = onBuffer(tmp9[11]);
  class Pe {
    constructor() {
      obj = { width: null };
      obj2 = onBuffer(closure_2[14]);
      result = 100 * closure_31.get();
      obj[0] = obj2.withTiming(`${tmp}%`, onBuffer(closure_2[15]).timingFast, "animate-always");
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
      clearTimeout(closure_1_32.current);
      let result = closure_1_29.set(true);
      closure_1_32.current = setTimeout(() => {
        const result = closure_29.set(false);
      }, 2000);
      if (null != closure_0) {
        const items1 = [];
        HermesBuiltin.arraySpread(items, 0);
        return HermesBuiltin.apply(items1, undefined);
      }
      const tmp3 = closure_0;
    };
  }, items1);
  callback2 = obj.useCallback((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    callback2((maxTimestampSec) => ({ timestampSec: closure_0, maxTimestampSec: Math.max(maxTimestampSec.maxTimestampSec, Math.floor(closure_0)), duration: closure_1 }));
  }, []);
  let tmp2Result = tmp2(obj.useState(false), 2);
  [tmp25, c34] = tmp2Result;
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
      if (closure_20 !== closure_1_0(closure_1_2[10]).PlayerState.ERRORED) {
        callback2(0);
        if (closure_20 === tmp2(tmp3[10]).PlayerState.ENDED) {
          callback(tmp2(tmp3[10]).PlayerState.PLAYING);
          if (closure_12 != null) {
            tmp8(tmp2(tmp3[10]).PlaybackTriggerSource.IMPERATIVE_API);
          }
        }
      }
    },
    play() {
      if (closure_20 === closure_1_0(closure_1_2[10]).PlayerState.PAUSED) {
        callback(tmp(tmp2[10]).PlayerState.PLAYING);
        if (closure_12 != null) {
          tmp5(tmp(tmp2[10]).PlaybackTriggerSource.IMPERATIVE_API);
        }
      }
    },
    pause() {
      if (closure_20 === closure_1_0(closure_1_2[10]).PlayerState.PLAYING) {
        callback(tmp(tmp2[10]).PlayerState.PAUSED);
        if (closure_11 != null) {
          tmp5(tmp(tmp2[10]).PlaybackTriggerSource.IMPERATIVE_API);
        }
      }
    }
  }), items4);
  const items5 = [videoRef, initialProgress.timestampSec, flag2, callback, onLoad, callback4];
  const items6 = [first2, onPausePlayback, onResumePlayback, tmp15, callback, callback4];
  const callback5 = obj.useCallback((duration) => {
    duration = duration.duration;
    callback(duration);
    callback4(true);
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
      callback(onBuffer(flag2[10]).PlayerState.PLAYING);
      if (onLoad != null) {
        onLoad(duration);
      }
    }
  }, items5);
  callback6 = obj.useCallback(() => {
    obj = arg0;
    if (arg0 === undefined) {
      obj = {};
    }
    let flag = obj.shouldRestartVideo;
    if (flag === undefined) {
      flag = true;
    }
    if (first2 !== onBuffer(flag2[10]).PlayerState.ERRORED) {
      if (tmp !== tmp2(tmp3[10]).PlayerState.PAUSED) {
        if (tmp !== tmp2(tmp3[10]).PlayerState.LOADING) {
          if (tmp === tmp2(tmp3[10]).PlayerState.PLAYING) {
            callback(tmp2(tmp3[10]).PlayerState.PAUSED);
            if (onPausePlayback != null) {
              tmp16(tmp2(tmp3[10]).PlaybackTriggerSource.USER_INTERACTION);
            }
          }
        }
      }
      callback(tmp2(tmp3[10]).PlayerState.PLAYING);
      if (onResumePlayback != null) {
        tmp6(tmp2(tmp3[10]).PlaybackTriggerSource.USER_INTERACTION);
      }
    }
    callback4(0);
    callback(onBuffer(flag2[10]).PlayerState.PLAYING);
    if (onResumePlayback != null) {
      tmp11(tmp2(tmp3[10]).PlaybackTriggerSource.USER_INTERACTION);
    }
  }, items6);
  const items7 = [callback6];
  const callback7 = obj.useCallback(() => callback6(), items7);
  closure_37 = obj.useRef(false);
  const items8 = [first2, callback, onPausePlayback];
  callback8 = obj.useCallback(() => {
    closure_37.current = false;
    if (first2 === onBuffer(flag2[10]).PlayerState.PLAYING) {
      closure_37.current = true;
      callback(tmp2(tmp3[10]).PlayerState.PAUSED);
      if (onPausePlayback != null) {
        tmp6(tmp2(tmp3[10]).PlaybackTriggerSource.SYSTEM_INITIATED);
      }
    }
  }, items8);
  const items9 = [first2, callback, onResumePlayback];
  callback9 = obj.useCallback(() => {
    if (ref5.current) {
      tmp.current = false;
      if (first2 !== onBuffer(flag2[10]).PlayerState.ERRORED) {
        callback(tmp3(tmp4[10]).PlayerState.PLAYING);
        if (onResumePlayback != null) {
          tmp7(tmp3(tmp4[10]).PlaybackTriggerSource.SYSTEM_INITIATED);
        }
      }
    }
  }, items9);
  const items10 = [callback8, callback9];
  const effect = obj.useEffect(() => {
    let ComponentDispatch = onBuffer(flag2[16]).ComponentDispatch;
    const subscription = ComponentDispatch.subscribe(onPlayerStateChange.QUEST_GAME_LINK_OPENED, callback8);
    let ComponentDispatch2 = onBuffer(flag2[16]).ComponentDispatch;
    const subscription1 = ComponentDispatch2.subscribe(onPlayerStateChange.QUEST_APP_STORE_OVERLAY_FINISHED, callback9);
    return () => {
      const ComponentDispatch = closure_1_0(closure_1_2[16]).ComponentDispatch;
      ComponentDispatch.unsubscribe(closure_1_10.QUEST_GAME_LINK_OPENED, closure_38);
      const ComponentDispatch2 = closure_1_0(closure_1_2[16]).ComponentDispatch;
      ComponentDispatch2.unsubscribe(closure_1_10.QUEST_APP_STORE_OVERLAY_FINISHED, closure_39);
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
        const result = sharedValue1.set(currentTime.currentTime / tmp4);
        callback2(currentTime.currentTime, tmp4);
      }
      if (onSeek != null) {
        obj = {};
        const merged = Object.assign(currentTime);
        obj.fromTimeSec = arr;
        tmp9(obj);
      }
    }
  }, items12);
  let tmp37 = first2 === tmp8(tmp9[10]).PlayerState.ERRORED;
  if (!tmp37) {
    ({ timestampSec: timestampSec2, maxTimestampSec, duration: duration2 } = first1);
    if (typeof first !== "function") {
      HermesBuiltin.throwTypeError();
    }
    if (typeof videoRef !== "function") {
      HermesBuiltin.throwTypeError();
    }
    let tmp41 = !tmp40;
    if (timestampSec2 < duration2 - 1) {
      if (!flag) {
        flag = timestampSec2 <= maxTimestampSec - 1;
      }
      tmp41 = flag;
    }
    tmp37 = !tmp41;
  }
  closure_40 = tmp37;
  const items13 = [callback4, first, sharedValue1, tmp37];
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
    if (first2 === onBuffer(flag2[10]).PlayerState.ENDED) {
      callback(onBuffer(flag2[10]).PlayerState.PLAYING);
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
      obj = { currentTime: null, seekableDuration: null, progress: null };
      ({ currentTime: obj[0], seekableDuration: obj[1] } = seekableDuration);
      obj[2] = num;
      tmp3(obj);
    }
  }, items15);
  const items17 = [callback, onLoadStart];
  const callback14 = obj.useCallback(() => {
    if (!repeat) {
      callback(onBuffer(flag2[10]).PlayerState.ENDED);
    }
    if (onEnd != null) {
      tmp5();
    }
  }, items16);
  const items18 = [callback, onError];
  const callback15 = obj.useCallback(() => {
    callback(onBuffer(flag2[10]).PlayerState.LOADING);
    if (onLoadStart != null) {
      onLoadStart();
    }
  }, items17);
  const callback16 = obj.useCallback((arg0) => {
    callback(onBuffer(flag2[10]).PlayerState.ERRORED);
    if (onError != null) {
      tmp2(arg0);
    }
  }, items18);
  const callback1Result1 = callback1(callback12);
  const items19 = [onError];
  const tmp49 = onBuffer(tmp9[17]).useStateFromStores(items19, () => onError.getState()) === onEnd.ACTIVE;
  const items20 = [videoRef];
  const layoutEffect = obj.useLayoutEffect(() => {
    if (obj.isAndroid()) {
      const current = videoRef.current;
      return () => {
        try {
          if (current != null) {
            const setNativeProps = current.setNativeProps;
            if (setNativeProps != null) {
              obj = { paused: true, repeat: false, src: null };
              obj[2] = { uri: null };
              setNativeProps(obj);
            }
          }
        } catch (tmp4) {
          closure_1_1(closure_1_2[19]).captureException(tmp4);
          const obj2 = closure_1_1(closure_1_2[19]);
        }
      };
    }
    obj = onBuffer(flag2[18]);
  }, items20);
  let tmp51 = !tmp49;
  if (tmp49) {
    tmp51 = first2 === tmp8(tmp9[10]).PlayerState.PAUSED;
  }
  if (!tmp51) {
    tmp51 = first2 === tmp8(tmp9[10]).PlayerState.LOADING;
  }
  if (!tmp51) {
    tmp51 = externallyPaused;
  }
  importDefault = obj.useRef(false);
  tmp2Result = tmp2(obj.useState(false), 2);
  [tmp53, flag2] = tmp2Result;
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
      if (first2 !== onBuffer(flag2[10]).PlayerState.LOADING) {
        const tmp2Result = tmp2(tmp3[18]);
      }
      callback17(true);
      tmp2 = onBuffer;
      tmp3 = flag2;
    }
  }, items22);
  const items24 = [callback17];
  const callback19 = obj.useCallback(() => {
    if (obj.isIOS()) {
      callback17(true);
    }
  }, items23);
  const callback20 = obj.useCallback(() => {
    if (obj.isIOS()) {
      callback17(false);
    }
  }, items24);
  const rect = importDefault(tmp9[20])();
  let tmp59 = isFullscreen;
  if (isFullscreen) {
    tmp59 = null != rect;
  }
  if (tmp59) {
    const obj3 = { paddingRight: null, paddingLeft: null };
    let _Math = Math;
    obj3[0] = Math.max(rect.right, flag8.right);
    let _Math2 = Math;
    obj3[1] = Math.max(rect.left, flag8.left);
    tmp59 = obj3;
  }
  const obj4 = { style: items25, accessible: false, children: null };
  items25 = [tmp.container, style];
  const obj5 = { style: items26, onPress: callback10, accessible: !shouldShowControlsResult, accessibilityLabel: null, children: null };
  items26 = [tmp.videoContainer];
  const intl = tmp8(tmp9[21]).intl;
  const t = tmp8(tmp9[21]).t;
  obj5[3] = intl.string(tmp51 ? t.R3aFPe : t.fTMEUi);
  let tmp62Result = first2 !== tmp8(tmp9[10]).PlayerState.ERRORED;
  if (tmp62Result) {
    const obj6 = { mixWithOthers: "inherit", httpEngine: null, automaticallyWaitsToMinimizeStalling: null, maxBitRate: null, bufferConfig: null, preferredForwardBufferDuration: null, ref: null, accessible: false, importantForAccessibility: "no-hide-descendants", accessibilityRole: "none", style: null, paused: null, repeat: null, source: null, onBuffer: null, onPlaybackStalled: null, onPlaybackResume: null, onLoad: null, onSeek: null, onProgress: null, onLoadStart: null, onEnd: null, onError: null, onReadyForDisplay: null, onVideoTracks: null, onLayout: null, resizeMode: "contain" };
    obj6[1] = httpEngine;
    obj6[2] = automaticallyWaitsToMinimizeStalling;
    obj6[3] = maxBitRate;
    obj6[4] = bufferConfig;
    obj6[5] = preferredForwardBufferDuration;
    obj6[6] = videoRef;
    obj6[10] = tmp.video;
    obj6[11] = tmp51;
    obj6[12] = repeat;
    obj6[13] = initialProgress.source;
    obj6[14] = callback18;
    obj6[15] = callback19;
    obj6[16] = callback20;
    obj6[17] = callback5;
    obj6[18] = callback11;
    obj6[19] = callback13;
    obj6[20] = callback15;
    obj6[21] = callback14;
    obj6[22] = callback16;
    obj6[23] = callback3;
    obj6[24] = onVideoTracks;
    obj6[25] = onVideoLayout;
    tmp62Result = tmp62(repeat, obj6);
  }
  const items27 = [tmp62Result, , , , , ];
  let renderCaptionsResult;
  if (renderCaptions != null) {
    renderCaptionsResult = renderCaptions(first1.timestampSec);
  }
  items27[1] = renderCaptionsResult;
  if (!tmp53) {
    items27[2] = tmp53;
    tmp62Result = !tmp25;
    if (!tmp25) {
      const obj7 = { style: null, children: null };
      obj7[0] = tmp.loadingContainer;
      obj7[1] = tmp62(onSeek, { animating: true });
      tmp62Result = tmp62(tmp63, obj7);
    }
    items27[3] = tmp62Result;
    const obj8 = { style: null, accessible: false, children: null };
    const items28 = [tmp.controls, animatedStyle];
    obj8[0] = items28;
    let tmp64Result = flag3;
    if (!flag3) {
      tmp64Result = flag4;
    }
    if (tmp64Result) {
      const obj9 = { style: null, children: null };
      const items29 = [, , ];
      ({ controlsTopBottom: arr31[0], controlsTop: arr31[1] } = tmp);
      items29[2] = tmp59;
      obj9[0] = items29;
      if (!flag3) {
        const items30 = [flag3, ];
        if (flag4) {
          const obj10 = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, style: null, children: null };
          const intl3 = tmp8(tmp9[21]).intl;
          obj10[1] = intl3.string(tmp8(tmp9[21]).t.KCzjTi);
          obj10[2] = onOpenTranscript;
          obj10[3] = tmp.controlButton;
          const obj11 = { color: null };
          obj11[0] = tmp.iconDisabled.color;
          obj10[4] = tmp62(tmp8(tmp9[24]).TranscriptOutlineIcon, obj11);
          flag4 = tmp62(tmp8(tmp9[22]).PressableOpacity, obj10);
        }
        items30[1] = flag4;
        obj9[1] = items30;
        tmp64Result = tmp64(tmp63, obj9);
      } else {
        const obj12 = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, style: null, children: null };
        const intl2 = tmp8(tmp9[21]).intl;
        obj12[1] = intl2.string(tmp8(tmp9[21]).t.bDSZO1);
        obj12[2] = onToggleCaptions;
        obj12[3] = tmp.controlButton;
        if (captionsEnabled) {
          let color = tmp.icon.color;
        } else {
          color = tmp.iconDisabled.color;
        }
        const obj13 = { color: null };
        obj13[0] = color;
        obj12[4] = tmp62(tmp8(tmp9[23]).ClosedCaptionsOutlineIcon, obj13);
        tmp62(tmp8(tmp9[22]).PressableOpacity, obj12);
      }
    }
    const items31 = [tmp64Result, , ];
    const obj14 = { style: null, children: null };
    obj14[0] = tmp.controlsMiddle;
    let tmp62Result2 = flag7;
    if (flag7) {
      const obj15 = { disabled: null, accessibilityRole: "button", accessibilityLabel: null, onPress: null, children: null };
      obj15[0] = first2 === tmp8(tmp9[10]).PlayerState.ERRORED;
      const intl4 = tmp8(tmp9[21]).intl;
      obj15[2] = intl4.string(tmp8(tmp9[21]).t.r9s3Uv);
      obj15[3] = callback1Result;
      const obj16 = { color: null, width: 16, height: 16 };
      obj16[0] = tmp.icon.color;
      obj15[4] = tmp62(tmp8(tmp9[26]).SkipBackwardIcon, obj16);
      tmp62Result2 = tmp62(tmp8(tmp9[25]).VideoQuestPlayerControlButton, obj15);
    }
    const items32 = [tmp62Result2, , ];
    if (!tmp15) {
      if (first2 !== tmp8(tmp9[10]).PlayerState.ERRORED) {
        const t2 = tmp8(tmp9[21]).t;
        let K0e7M9 = tmp51 ? t2.R3aFPe : t2.fTMEUi;
      }
      const obj17 = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, children: null };
      obj17[1] = tmp76(K0e7M9);
      obj17[2] = callback7;
      if (!tmp15) {
        if (first2 !== tmp8(tmp9[10]).PlayerState.ERRORED) {
          if (tmp51) {
            let PauseIcon = tmp8(tmp9[28]).PlayIcon;
          } else {
            PauseIcon = tmp8(tmp9[29]).PauseIcon;
          }
          let tmp62Result3 = tmp62(PauseIcon, { size: "lg" });
        }
        obj17[3] = tmp62Result3;
        items32[1] = tmp62(tmp8(tmp9[25]).VideoQuestPlayerControlButton, obj17);
        if (flag7) {
          const obj18 = { disabled: null, accessibilityRole: "button", accessibilityLabel: null, onPress: null, children: null };
          obj18[0] = tmp37;
          const intl5 = tmp8(tmp9[21]).intl;
          obj18[2] = intl5.string(tmp8(tmp9[21]).t.zWDcNP);
          obj18[3] = callback1Result1;
          const obj19 = { color: null, width: 16, height: 16 };
          obj19[0] = tmp.icon.color;
          obj18[4] = tmp62(tmp8(tmp9[30]).SkipForwardIcon, obj19);
          flag7 = tmp62(tmp8(tmp9[25]).VideoQuestPlayerControlButton, obj18);
        }
        items32[2] = flag7;
        obj14[1] = items32;
        items31[1] = tmp64(tmp63, obj14);
        if (flag5) {
          const obj20 = { style: null, children: null };
          const items33 = [, , ];
          ({ controlsTopBottom: arr35[0], controlsBottom: arr35[1] } = tmp);
          items33[2] = tmp59;
          obj20[0] = items33;
          const obj21 = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, style: null, children: null };
          const intl6 = tmp8(tmp9[21]).intl;
          obj21[1] = intl6.string(tmp8(tmp9[21]).t.vKZT5t);
          obj21[2] = onToggleFullscreen;
          obj21[3] = tmp.controlButton;
          obj21[4] = tmp62(tmp8(tmp9[31]).FullscreenEnterIcon, {});
          obj20[1] = tmp62(tmp8(tmp9[22]).PressableOpacity, obj21);
          flag5 = tmp62(tmp63, obj20);
        }
        items31[2] = flag5;
        obj8[2] = items31;
        items27[4] = tmp64(tmp58(tmp9[11]).View, obj8);
        if (flag6) {
          const obj22 = { style: null, children: null };
          obj22[0] = tmp.progressContainer;
          const obj23 = { style: null };
          const items34 = [tmp.progress, animatedStyle1];
          obj23[0] = items34;
          obj22[1] = tmp62(tmp58(tmp9[11]).View, obj23);
          flag6 = tmp62(tmp63, obj22);
        }
        items27[5] = flag6;
        obj5[4] = items27;
        obj4[2] = tmp64(onProgress, obj5);
        return tmp62(tmp63, obj4);
      }
      tmp62Result3 = tmp62(tmp8(tmp9[27]).RetryIcon, { size: "lg" });
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
        let obj24 = { top: null, left: null };
        obj24[0] = num4;
        let num5;
        if (contentInsets != null) {
          num5 = contentInsets.left;
        }
        if (num5 == null) {
          num5 = 0;
        }
        obj24[1] = num5;
      }
      const obj25 = { animating: true, style: null, color: null };
      items35[1] = obj24;
      obj25[1] = items35;
      items35 = tmp58(tmp9[6]).unsafe_rawColors.WHITE;
      obj25[2] = items35;
      tmp62(tmp69, obj25);
    }
    obj24 = tmp.bufferingSpinnerCentered;
  }
});
let result = require("set").fileFinishedImporting("modules/quests/native/AdVideoPlayer.tsx");

export const AdVideoPlayer = memoResult;