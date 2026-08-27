// === Module 14686: hasVideoEnded ===

// Module 14686 (hasVideoEnded)
import ThemesDefault from "Themes" /* 712 */;
import _isNativeReflectConstructDefault from "_isNativeReflectConstruct" /* 8334 */;
import closure_3 from "_slicedToArray" /* 32 */;
import importAllResult from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import closure_8 from "getState" /* 7091 */;
import closure_9 from "_toPropertyKey" /* 7383 */;
import { QuestsExperimentLocations } from "QuestsExperimentLocations" /* 5339 */;
import ME from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4445 */;
import importDefaultResult from "n" /* 689 */;

const require = arg1;
let c4 = importAllResult;
({ View: c5, StyleSheet, Pressable: closure_6, ActivityIndicator: error } = get_ActivityIndicator);
({ AppStates: unpackModuleId, ComponentActions: closure_12 } = ME);
({ jsx: map1, jsxs: closure_14 } = jsxProd);
let obj = { left: ThemesDefault.space.PX_16, right: ThemesDefault.space.PX_16, top: ThemesDefault.space.PX_16, bottom: ThemesDefault.space.PX_16 };
let closure_16 = importAllResult.memo(_isNativeReflectConstructDefault);
function hasVideoEnded(arg0, arg1) {
  return arg0 >= arg1 - 1;
}
hasVideoEnded.__closure = {};
hasVideoEnded.__workletHash = 3281537893520;
hasVideoEnded.__initData = { code: "function hasVideoEnded_VideoQuestPlayerTsx1(currentTime,videoDuration){return currentTime>=videoDuration-1;}" };
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
canSeekForward.__workletHash = 741911733910;
canSeekForward.__initData = { code: "function canSeekForward_VideoQuestPlayerTsx2(currentTime,maxTimestamp,videoDuration,isQuestCompleted){const{hasVideoEnded}=this.__closure;return!hasVideoEnded(currentTime,videoDuration)&&(isQuestCompleted||currentTime<=maxTimestamp-1);}" };
obj = { container: null, loadingContainer: null, bufferingSpinner: null, bufferingSpinnerCentered: null, video: null, videoContainer: null, controls: null, controlsTopBottom: null, controlsMiddle: null, controlsTop: null, controlsBottom: null, progressContainer: null, progress: null, icon: null, iconDisabled: null, controlButton: null };
const merged = Object.assign(StyleSheet.absoluteFillObject);
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
obj[12] = { height: 1, backgroundColor: ThemesDefault.colors.WHITE, shadowOffset: { width: 0, height: 0 }, shadowRadius: 6, shadowOpacity: 1, elevation: 5, shadowColor: "#FFFFFF" };
let obj8 = { height: 1, backgroundColor: ThemesDefault.colors.WHITE, shadowOffset: { width: 0, height: 0 }, shadowRadius: 6, shadowOpacity: 1, elevation: 5, shadowColor: "#FFFFFF" };
obj[13] = { color: ThemesDefault.colors.TEXT_DEFAULT };
let obj9 = { color: ThemesDefault.colors.TEXT_DEFAULT };
obj[14] = { color: ThemesDefault.colors.TEXT_SUBTLE };
let obj10 = { color: ThemesDefault.colors.TEXT_SUBTLE };
obj[15] = { padding: ThemesDefault.space.PX_8 };
let closure_19 = createCacheKey.createStyles(obj);
let obj12 = { PAUSED: "paused", PLAYING: "playing", ENDED: "ended", LOADING: "loading", ERRORED: "errored" };
let closure_21 = { code: "function shouldShowControls_VideoQuestPlayerTsx3(){const{hasLoaded,showControls,playerState,PlayerState,isVideoEnded,externallyPaused}=this.__closure;return hasLoaded&&(showControls.get()||playerState===PlayerState.PAUSED||playerState===PlayerState.ENDED||playerState===PlayerState.ERRORED||isVideoEnded||externallyPaused);}" };
let closure_22 = { code: "function VideoQuestPlayerTsx4(){const{shouldShowControls,withSpring,SUBTLE_SPRING}=this.__closure;const show=shouldShowControls();return{opacity:withSpring(show?1:0,SUBTLE_SPRING),pointerEvents:show?'auto':'none'};}" };
let closure_23 = { code: "function VideoQuestPlayerTsx5(){const{withTiming,progress,timingFast}=this.__closure;return{width:withTiming(progress.get()*100+\"%\",timingFast,'animate-always')};}" };
let obj11 = { padding: ThemesDefault.space.PX_8 };
const memoResult = importAllResult.memo((onLoad) => {
  onLoad = onLoad.onLoad;
  handleBufferAnalytics = onLoad;
  const onEnd = onLoad.onEnd;
  let ref1 = onEnd;
  const onToggleFullscreen = onLoad.onToggleFullscreen;
  dependencyMap = onToggleFullscreen;
  orientation = onLoad.orientation;
  ({ contentInsets, isFullscreen, externallyPaused } = onLoad);
  let flag = onLoad.captionsEnabled;
  ({ style, handleToggleCaptions, handleOpenTranscript } = onLoad);
  if (flag === undefined) {
    flag = false;
  }
  ({ hasCaptionAsset, sourceQuestContent } = onLoad);
  if (hasCaptionAsset === undefined) {
    hasCaptionAsset = true;
  }
  let flag2 = onLoad.hasTranscriptAsset;
  if (flag2 === undefined) {
    flag2 = true;
  }
  let ref;
  let quest;
  let questTaskDetails;
  closure_8 = undefined;
  let memo;
  let memo1;
  let first;
  closure_12 = undefined;
  let targetSeconds;
  closure_14 = undefined;
  obj = undefined;
  let first1;
  closure_17 = undefined;
  closure_18 = undefined;
  let first2;
  obj12 = undefined;
  closure_21 = undefined;
  closure_22 = undefined;
  closure_23 = undefined;
  closure_24 = undefined;
  closure_25 = undefined;
  let sharedValue;
  let shouldShowControls;
  let sharedValue1;
  closure_29 = undefined;
  handleEndAnalytics = undefined;
  let handleErrorAnalytics;
  let handleLoadAnalytics;
  let handleLoadStartAnalytics;
  let handlePausePlaybackAnalytics;
  let handleProgressAnalytics;
  let handleReadyForDisplayAnalytics;
  let handleResumePlaybackAnalytics;
  let handleSeekAnalytics;
  ref1 = undefined;
  let id;
  let gameTitle;
  let url1;
  let videoTitle;
  let str;
  c45 = undefined;
  let callback2;
  let callback4;
  let callback6;
  let callback7;
  closure_50 = undefined;
  let ref2;
  let ref3;
  let callback18;
  let tmp = first2();
  obj = externallyPaused;
  ref = externallyPaused.useRef(null);
  obj1 = handleBufferAnalytics(14676);
  const videoQuestModalContext = obj1.useVideoQuestModalContext();
  quest = videoQuestModalContext.quest;
  let obj2 = handleBufferAnalytics(11003);
  questTaskDetails = obj2.useQuestTaskDetails(quest);
  const userStatus = quest.userStatus;
  let completedAt;
  if (userStatus != null) {
    completedAt = userStatus.completedAt;
  }
  let tmp8 = null != completedAt;
  closure_8 = tmp8;
  let items = [quest];
  memo = obj.useMemo(() => handleBufferAnalytics(ref[14]).getQuestAsset(quest, handleBufferAnalytics(ref[14]).QuestAssetType.VIDEO_PLAYER_VIDEO, undefined, true), items);
  let items1 = [quest];
  memo1 = obj.useMemo(() => handleBufferAnalytics(ref[14]).getQuestAsset(quest, handleBufferAnalytics(ref[14]).QuestAssetType.VIDEO_PLAYER_VIDEO_HLS, undefined, true), items1);
  let url;
  if (memo1 != null) {
    url = memo1.url;
  }
  if (null != url) {
    let VIDEO_PLAYER_VIDEO = tmp3(10842).QuestAssetType.VIDEO_PLAYER_VIDEO_HLS;
  } else {
    VIDEO_PLAYER_VIDEO = tmp3(10842).QuestAssetType.VIDEO_PLAYER_VIDEO;
  }
  const tmp13 = orientation(obj.useState(questTaskDetails.targetSeconds), 2);
  first = tmp13[0];
  closure_12 = tmp13[1];
  targetSeconds = questTaskDetails.targetSeconds;
  const tmp15 = memo((setVideoProgress) => setVideoProgress.setVideoProgress);
  closure_14 = tmp15;
  const tmp16 = memo((arg0) => {
    let tmp = arg0.videoProgress[quest.id];
    if (tmp == null) {
      obj = { timestampSec: null, duration: null, maxTimestampSec: null };
      obj[0] = questTaskDetails.progressSeconds;
      obj[1] = first;
      obj[2] = questTaskDetails.progressSeconds;
      tmp = obj;
    }
    return tmp;
  }, handleBufferAnalytics(4074).shallow);
  obj = tmp16;
  const tmp18 = orientation(obj.useState(obj12.LOADING), 2);
  first1 = tmp18[0];
  closure_17 = tmp18[1];
  closure_18 = obj.useRef(false);
  const tmp20 = orientation(obj.useState(false), 2);
  first2 = tmp20[0];
  obj12 = tmp20[1];
  closure_21 = obj.useRef(questTaskDetails.progressSeconds);
  closure_22 = obj.useRef([]);
  closure_23 = obj.useRef(null);
  closure_24 = obj.useRef(0);
  let tmp22 = first2;
  if (first2) {
    tmp22 = first1 === tmp17.ENDED;
  }
  if (tmp22) {
    ({ timestampSec, duration } = tmp16);
    if (typeof closure_17 !== "function") {
      HermesBuiltin.throwTypeError();
    }
    tmp22 = timestampSec >= duration - 1;
  }
  closure_25 = tmp22;
  let tmp3Result = tmp3(4185);
  sharedValue = tmp3Result.useSharedValue(false);
  shouldShowControls = function shouldShowControls() {
    let tmp = first2;
    if (first2) {
      let value = sharedValue.get();
      if (!value) {
        value = first1 === lib2.PAUSED;
      }
      if (!value) {
        value = first1 === lib2.ENDED;
      }
      if (!value) {
        value = first1 === lib2.ERRORED;
      }
      if (!value) {
        value = closure_25;
      }
      if (!value) {
        value = externallyPaused;
      }
      tmp = value;
    }
    return tmp;
  };
  shouldShowControls.__closure = { hasLoaded: first2, showControls: sharedValue, playerState: first1, PlayerState: obj12, isVideoEnded: tmp22, externallyPaused };
  shouldShowControls.__workletHash = 11602236169344;
  shouldShowControls.__initData = closure_21;
  tmp3Result = tmp3(4185);
  class G {
    constructor() {
      if (typeof shouldShowControls !== "function") {
        str2 = "Trying to call a non-function";
        throwTypeErrorResult = HermesBuiltin.throwTypeError();
      }
      tmp = closure_19;
      if (closure_19) {
        tmp2 = closure_26;
        value = closure_26.get();
        if (!value) {
          tmp4 = closure_16;
          tmp5 = closure_20;
          value = closure_16 === closure_20.PAUSED;
        }
        if (!value) {
          tmp6 = closure_16;
          tmp7 = closure_20;
          value = closure_16 === closure_20.ENDED;
        }
        if (!value) {
          tmp8 = closure_16;
          tmp9 = closure_20;
          value = closure_16 === closure_20.ERRORED;
        }
        if (!value) {
          value = closure_25;
        }
        if (!value) {
          value = externallyPaused;
        }
        tmp = value;
      }
      tmp10 = handleBufferAnalytics;
      tmp11 = closure_2;
      obj = handleBufferAnalytics(closure_2[17]);
      num = 0;
      if (tmp) {
        num = 1;
      }
      obj = { opacity: obj.withSpring(num, tmp10(tmp11[18]).SUBTLE_SPRING), pointerEvents: null };
      str = "none";
      if (tmp) {
        str = "auto";
      }
      obj[1] = str;
      return obj;
    }
  }
  obj = { shouldShowControls, withSpring: tmp3(4879).withSpring, SUBTLE_SPRING: tmp3(4883).SUBTLE_SPRING };
  G.__closure = obj;
  G.__workletHash = 6174625876255;
  G.__initData = closure_22;
  const animatedStyle = tmp3Result.useAnimatedStyle(G);
  if (first2) {
    first2 = sharedValue.get() || first1 === tmp17.PAUSED || first1 === tmp17.ENDED || first1 === tmp17.ERRORED || tmp22 || externallyPaused;
    const tmp25 = sharedValue.get() || first1 === tmp17.PAUSED || first1 === tmp17.ENDED || first1 === tmp17.ERRORED || tmp22 || externallyPaused;
  }
  sharedValue1 = handleBufferAnalytics(4185).useSharedValue(0);
  const tmp3Result1 = handleBufferAnalytics(4185);
  class U {
    constructor() {
      obj = { width: null };
      obj2 = handleBufferAnalytics(closure_2[19]);
      result = 100 * closure_28.get();
      obj[0] = obj2.withTiming(`${tmp}%`, handleBufferAnalytics(closure_2[20]).timingFast, "animate-always");
      return obj;
    }
  }
  obj = { withTiming: tmp3(4446).withTiming, progress: sharedValue1, timingFast: tmp3(4449).timingFast };
  U.__closure = obj;
  U.__workletHash = 4647711667921;
  U.__initData = closure_23;
  const animatedStyle1 = handleBufferAnalytics(4185).useAnimatedStyle(U);
  closure_29 = obj.useRef(-1);
  const items2 = [sharedValue];
  const callback = obj.useCallback((arg0) => {
    closure_0 = arg0;
    return () => {
      const items = [...arguments];
      clearTimeout(closure_1_29.current);
      let result = closure_1_26.set(true);
      closure_1_29.current = setTimeout(() => {
        const result = closure_26.set(false);
      }, 2000);
      if (null != closure_0) {
        const items1 = [];
        HermesBuiltin.arraySpread(items, 0);
        return HermesBuiltin.apply(items1, undefined);
      }
      const tmp3 = closure_0;
    };
  }, items2);
  obj1 = { duration: first, isQuestCompleted: tmp8, playerState: first1, questId: quest.id, videoSessionId: videoQuestModalContext.videoSessionId, videoAssetId: VIDEO_PLAYER_VIDEO, sourceQuestContent };
  const tmp30 = ref1(14684)(obj1);
  ({ handleBufferAnalytics, handleEndAnalytics } = tmp30);
  handleErrorAnalytics = tmp30.handleErrorAnalytics;
  handleLoadAnalytics = tmp30.handleLoadAnalytics;
  handleLoadStartAnalytics = tmp30.handleLoadStartAnalytics;
  handlePausePlaybackAnalytics = tmp30.handlePausePlaybackAnalytics;
  handleProgressAnalytics = tmp30.handleProgressAnalytics;
  handleReadyForDisplayAnalytics = tmp30.handleReadyForDisplayAnalytics;
  handleResumePlaybackAnalytics = tmp30.handleResumePlaybackAnalytics;
  handleSeekAnalytics = tmp30.handleSeekAnalytics;
  ref1 = obj.useRef(null);
  id = quest.id;
  gameTitle = quest.config.messages.gameTitle;
  url1 = undefined;
  if (memo1 != null) {
    url1 = memo1.url;
  }
  if (url1 == null) {
    let url2;
    if (memo != null) {
      url2 = memo.url;
    }
    url1 = url2;
  }
  const tmp3Result2 = handleBufferAnalytics(4185);
  const defaultWatchVideoTask = handleBufferAnalytics(7402).getDefaultWatchVideoTask(quest.config);
  videoTitle = undefined;
  if (defaultWatchVideoTask != null) {
    videoTitle = defaultWatchVideoTask.messages.videoTitle;
  }
  let url3;
  if (memo1 != null) {
    url3 = memo1.url;
  }
  str = "mp4";
  if (null != url3) {
    str = "hls";
  }
  const items3 = [id, gameTitle, targetSeconds, url1, videoTitle, str];
  const effect = obj.useEffect(() => {
    if (null != ref.current) {
      if (null != url1) {
        if (0 !== arr.length) {
          obj = handleBufferAnalytics(ref[23]);
          obj = { location: null };
          obj[0] = memo1.VIDEO_MODAL_MOBILE;
          if (obj.getVideoQoEMetricsConfig(obj).externalAnalyticsEnabled) {
            const constants = tmp2(tmp3[24]).getConstants();
            obj = { videoRef: null, feature: "quests", appVersion: null, releaseChannel: null, contentMetadata: null };
            obj[0] = tmp.current;
            ({ Version: obj4[2], ReleaseChannel: obj4[3] } = constants);
            obj1 = { contentId: null, videoStreamType: null, contentType: "quests", durationMs: null, title: null, questId: null, gameName: null };
            obj1[0] = arr;
            obj1[1] = str;
            obj1[3] = 1000 * targetSeconds;
            obj1[4] = videoTitle;
            obj1[5] = id;
            obj1[6] = gameTitle;
            obj[4] = obj1;
            const mobileMuxWrapper = new tmp2(tmp3[23]).MobileMuxWrapper(obj);
            ref1.current = mobileMuxWrapper;
            let current = ref1.current;
            current.initialize();
            return () => {
              if (null != ref2.current) {
                const current = tmp.current;
                current.onProgress(ref.current);
                const current2 = tmp.current;
                current2.destroy();
                tmp.current = null;
              }
            };
          }
        }
      }
    }
  }, items3);
  let tmp12Result = tmp12(obj.useState(false), 2);
  [tmp39, c45] = tmp12Result;
  const items4 = [handleReadyForDisplayAnalytics];
  const items5 = [tmp16.maxTimestampSec];
  const callback1 = obj.useCallback(() => {
    handleReadyForDisplayAnalytics();
    const current = ref1.current;
    if (current != null) {
      current.onReadyForDisplay();
    }
    _undefined(true);
  }, items4);
  callback2 = obj.useCallback((arg0) => {
    let seek = ref;
    if (null != ref.current) {
      const _Math = Math;
      const _Math2 = Math;
      const bound = Math.max(0, Math.min(arg0, closure_15.maxTimestampSec));
      if (obj.isAndroid()) {
        ref5.current = (ref5.current + 1) % 100;
        const current2 = seek.current;
        seek = current2.seek;
        seek(bound + 0.0001 * ref5.current);
      } else {
        const current = seek.current;
        current.seek(bound);
      }
      closure_23.current = bound;
      obj = handleBufferAnalytics(ref[25]);
    }
  }, items5);
  const items6 = [tmp8, tmp16.timestampSec, handleLoadAnalytics, onLoad, callback2];
  const items7 = [first1, handlePausePlaybackAnalytics, handleResumePlaybackAnalytics, tmp22, callback2];
  const callback3 = obj.useCallback((arg0) => {
    ({ duration, videoTracks, trackId, naturalSize } = arg0);
    lib(duration);
    lib2(true);
    handleLoadAnalytics();
    const current = ref1.current;
    if (current != null) {
      current.onLoad(duration);
    }
    if (null != naturalSize) {
      const current2 = tmp4.current;
      if (current2 != null) {
        const result = current2.updateVideoSourceDimensions(naturalSize.width, naturalSize.height);
      }
    }
    let tmp7 = null != videoTracks;
    if (tmp7) {
      tmp7 = videoTracks.length > 0;
    }
    if (tmp7) {
      tmp7 = null != trackId;
    }
    if (tmp7) {
      tmp7 = trackId.length > 0;
    }
    if (tmp7) {
      const current3 = tmp4.current;
      if (current3 != null) {
        current3.onVideoTrackChange(trackId, videoTracks);
      }
    }
    if (null != ref.current) {
      const timestampSec = closure_15.timestampSec;
      let tmp11 = !closure_8;
      if (!closure_8) {
        tmp11 = timestampSec > 5;
      }
      if (tmp11) {
        tmp11 = timestampSec < duration - 3;
      }
      if (tmp11) {
        callback2(timestampSec - 1);
      }
      callback2(lib2.PLAYING);
      if (handleBufferAnalytics != null) {
        handleBufferAnalytics(arg0);
      }
    }
  }, items6);
  callback4 = obj.useCallback(() => {
    obj = arg0;
    if (arg0 === undefined) {
      obj = {};
    }
    let flag = obj.shouldRestartVideo;
    if (flag === undefined) {
      flag = true;
    }
    if (first1 !== lib2.ERRORED) {
      if (tmp !== tmp2.PAUSED) {
        if (tmp !== tmp2.LOADING) {
          if (tmp === tmp2.PLAYING) {
            callback2(tmp2.PAUSED);
            handlePausePlaybackAnalytics();
            const current3 = ref1.current;
            if (current3 != null) {
              current3.onPause();
            }
          }
        }
      }
      callback2(tmp2.PLAYING);
      handleResumePlaybackAnalytics();
      const current = ref1.current;
      if (current != null) {
        current.onPlay();
      }
    }
    callback2(0);
    callback2(lib2.PLAYING);
    handleResumePlaybackAnalytics();
    const current2 = ref1.current;
    if (current2 != null) {
      current2.onPlay();
    }
  }, items7);
  const items8 = [callback4];
  const items9 = [first1, handlePausePlaybackAnalytics];
  const callback5 = obj.useCallback(() => callback4(), items8);
  callback6 = obj.useCallback(() => {
    closure_18.current = false;
    if (first1 === lib2.PLAYING) {
      tmp.current = true;
      callback2(tmp2.PAUSED);
      handlePausePlaybackAnalytics();
      const current = ref1.current;
      if (current != null) {
        current.onPause();
      }
    }
  }, items9);
  const items10 = [first1, handleResumePlaybackAnalytics];
  callback7 = obj.useCallback(() => {
    if (ref2.current) {
      tmp.current = false;
      if (first1 !== lib2.ERRORED) {
        callback2(tmp3.PLAYING);
        handleResumePlaybackAnalytics();
        const current = ref1.current;
        if (current != null) {
          current.onPlay();
        }
      }
    }
  }, items10);
  const items11 = [callback6, callback7];
  const effect1 = obj.useEffect(() => {
    let ComponentDispatch = handleBufferAnalytics(ref[26]).ComponentDispatch;
    const subscription = ComponentDispatch.subscribe(lib.QUEST_GAME_LINK_OPENED, callback6);
    let ComponentDispatch2 = handleBufferAnalytics(ref[26]).ComponentDispatch;
    const subscription1 = ComponentDispatch2.subscribe(lib.QUEST_APP_STORE_OVERLAY_FINISHED, callback7);
    return () => {
      const ComponentDispatch = closure_1_0(closure_1_2[26]).ComponentDispatch;
      ComponentDispatch.unsubscribe(closure_1_12.QUEST_GAME_LINK_OPENED, closure_48);
      const ComponentDispatch2 = closure_1_0(closure_1_2[26]).ComponentDispatch;
      ComponentDispatch2.unsubscribe(closure_1_12.QUEST_APP_STORE_OVERLAY_FINISHED, closure_49);
    };
  }, items11);
  const items12 = [onToggleFullscreen, orientation];
  const items13 = [sharedValue, callback4];
  const callback8 = obj.useCallback(() => {
    if (closure_2 != null) {
      obj = { orientation: null };
      obj[0] = orientation;
      tmp(obj);
    }
  }, items12);
  const items14 = [first, sharedValue1, handleSeekAnalytics, quest.id, tmp15];
  const callback9 = obj.useCallback(() => {
    if (sharedValue.get()) {
      const result = sharedValue.set(false);
    }
    callback4({ shouldRestartVideo: false });
  }, items13);
  let tmp51 = first1 === tmp17.ERRORED;
  const callback10 = obj.useCallback((currentTime) => {
    let current = ref3.current;
    let arr = current.shift();
    if (arr == null) {
      arr = null;
    }
    if (null != ref.current) {
      closure_21.current = currentTime.currentTime;
      closure_23.current = null;
      if (first > 0) {
        const result = sharedValue1.set(currentTime.currentTime / tmp15);
        callback(quest.id, currentTime.currentTime, tmp15);
      }
      handleSeekAnalytics(arr, currentTime.currentTime);
      current = ref1.current;
      if (current != null) {
        current.updatePlayheadTime(currentTime.currentTime);
      }
      const current2 = ref1.current;
      if (current2 != null) {
        current2.onSeek();
      }
      const tmp9 = ref1;
    }
  }, items14);
  if (!tmp51) {
    ({ timestampSec: timestampSec2, maxTimestampSec, duration: duration2 } = tmp16);
    if (typeof closure_18 !== "function") {
      HermesBuiltin.throwTypeError();
    }
    if (typeof closure_17 !== "function") {
      HermesBuiltin.throwTypeError();
    }
    let tmp55 = !tmp54;
    if (timestampSec2 < duration2 - 1) {
      if (!tmp8) {
        tmp8 = timestampSec2 <= maxTimestampSec - 1;
      }
      tmp55 = tmp8;
    }
    tmp51 = !tmp55;
  }
  closure_50 = tmp51;
  const items15 = [callback2, first, sharedValue1, tmp51];
  const items16 = [callback2, first, sharedValue1, first1];
  const callback11 = obj.useCallback(() => {
    if (!closure_50) {
      let current = ref4.current;
      if (current == null) {
        current = sharedValue1.get() * first;
      }
      current = ref3.current;
      current.push(current);
      callback2(current + 10);
    }
  }, items15);
  const tmp3Result3 = handleBufferAnalytics(7402);
  const callbackResult = callback(obj.useCallback(() => {
    let current = ref4.current;
    if (current == null) {
      current = sharedValue1.get() * first;
    }
    current = ref3.current;
    current.push(current);
    callback2(current - 10);
    if (first1 === lib2.ENDED) {
      callback2(tmp5.PLAYING);
    }
  }, items16));
  ref2 = obj.useRef(0);
  ref3 = obj.useRef(0);
  const items17 = [sharedValue1, quest, ref2, ref3, questTaskDetails.taskType, tmp15, handleProgressAnalytics];
  const items18 = [first, quest, handleEndAnalytics, onEnd];
  const callback12 = obj.useCallback((seekableDuration) => {
    let num = 0;
    if (0 !== seekableDuration.seekableDuration) {
      num = seekableDuration.currentTime / seekableDuration.seekableDuration;
    }
    closure_21.current = seekableDuration.currentTime;
    if (seekableDuration.currentTime >= ref2.current) {
      handleBufferAnalytics(ref[27]).sendVideoProgress(quest, seekableDuration.currentTime);
      handleProgressAnalytics(num, seekableDuration.seekableDuration, seekableDuration.currentTime);
      const _Math = Math;
      const sum = seekableDuration.currentTime + 6;
      tmp.current = sum + 2 * Math.random();
      obj = handleBufferAnalytics(ref[27]);
    }
    if (seekableDuration.currentTime >= ref3.current) {
      const result = handleBufferAnalytics(ref[28]).updateOptimisticProgress(quest.id, questTaskDetails.taskType, seekableDuration.currentTime);
      tmp10.current = seekableDuration.currentTime + 1;
      const obj2 = handleBufferAnalytics(ref[28]);
    }
    callback(quest.id, seekableDuration.currentTime, seekableDuration.seekableDuration);
    const result1 = sharedValue1.set(num);
    const current = ref1.current;
    if (current != null) {
      current.onProgress(seekableDuration.currentTime);
    }
  }, items17);
  const items19 = [handleLoadStartAnalytics];
  const callback13 = obj.useCallback(() => {
    handleBufferAnalytics(ref[27]).sendVideoProgress(quest, first);
    handleEndAnalytics();
    callback2(lib2.ENDED);
    const current = ref1.current;
    if (current != null) {
      current.onProgress(first);
    }
    const current2 = ref1.current;
    if (current2 != null) {
      current2.onEnd();
    }
    if (ref1 != null) {
      ref1();
    }
  }, items18);
  const items20 = [handleErrorAnalytics];
  const callback14 = obj.useCallback(() => {
    callback2(lib2.LOADING);
    handleLoadStartAnalytics();
    const current = ref1.current;
    if (current != null) {
      current.onLoadStart();
    }
    const current2 = ref1.current;
    if (current2 != null) {
      current2.onPlay();
    }
  }, items19);
  const callback15 = obj.useCallback((arg0) => {
    callback2(lib2.ERRORED);
    handleErrorAnalytics(arg0);
    const current = ref1.current;
    if (current != null) {
      current.onError(arg0);
    }
  }, items20);
  const callback16 = obj.useCallback((videoTracks) => {
    let tmp = null != videoTracks && null != videoTracks.videoTracks;
    if (tmp) {
      tmp = videoTracks.videoTracks.length > 0;
    }
    if (tmp) {
      tmp = null != videoTracks.selectedVideoTrackId;
    }
    if (tmp) {
      tmp = videoTracks.selectedVideoTrackId.length > 0;
    }
    if (tmp) {
      const current = ref1.current;
      if (current != null) {
        current.onVideoTrackChange(videoTracks.selectedVideoTrackId, videoTracks.videoTracks);
      }
    }
  }, []);
  const callback17 = obj.useCallback((nativeEvent) => {
    let layout;
    if (nativeEvent != null) {
      nativeEvent = nativeEvent.nativeEvent;
      if (nativeEvent != null) {
        layout = nativeEvent.layout;
      }
    }
    if (null != layout) {
      ({ width, height } = nativeEvent.nativeEvent.layout);
      if (tmp2) {
        const current = ref1.current;
        if (current != null) {
          const result = current.updateVideoDimensions(width, height);
        }
      }
      tmp2 = width > 0 && height > 0;
    }
  }, []);
  const callbackResult1 = callback(callback11);
  const items21 = [closure_8];
  const tmp67 = handleBufferAnalytics(589).useStateFromStores(items21, () => state.getState()) === first.ACTIVE;
  const items22 = [memo1, memo];
  const memo2 = obj.useMemo(() => {
    let tmp2 = null;
    if (null != memo) {
      let url;
      if (memo1 != null) {
        url = memo1.url;
      }
      if (url == null) {
        url = tmp.url;
      }
      obj = { uri: null };
      obj[0] = url;
      tmp2 = obj;
    }
    return tmp2;
  }, items22);
  const layoutEffect = obj.useLayoutEffect(() => {
    if (obj.isAndroid()) {
      const current = ref.current;
      return () => {
        try {
          if (current != null) {
            const setNativeProps = current.setNativeProps;
            if (setNativeProps != null) {
              obj = { paused: true, src: null };
              obj[1] = { uri: null };
              setNativeProps(obj);
            }
          }
        } catch (tmp4) {
          closure_1_1(closure_1_2[30]).captureException(tmp4);
          const obj2 = closure_1_1(closure_1_2[30]);
        }
      };
    }
    obj = handleBufferAnalytics(ref[25]);
  }, []);
  let tmp70 = !tmp67;
  if (tmp67) {
    tmp70 = first1 === tmp17.PAUSED;
  }
  if (!tmp70) {
    tmp70 = first1 === tmp17.LOADING;
  }
  if (!tmp70) {
    tmp70 = externallyPaused;
  }
  dependencyMap = obj.useRef(false);
  tmp12Result = tmp12(obj.useState(false), 2);
  [tmp72, orientation] = tmp12Result;
  const items23 = [handleBufferAnalytics, ref1];
  callback18 = obj.useCallback((current) => {
    orientation(current);
    if (current !== ref.current) {
      ref.current = current;
      handleBufferAnalytics(current);
      current = ref1.current;
      if (current != null) {
        current.onBuffer(current);
      }
    }
  }, items23);
  const items24 = [callback18, first1];
  const items25 = [callback18];
  const callback19 = obj.useCallback((isBuffering) => {
    isBuffering = isBuffering.isBuffering;
    if (!isBuffering) {
      if (!isBuffering) {
        callback18(false);
      }
    } else {
      if (first1 !== lib2.LOADING) {
        obj = handleBufferAnalytics(ref[25]);
      }
      callback18(true);
    }
  }, items24);
  const items26 = [callback18];
  const callback20 = obj.useCallback(() => {
    if (obj.isIOS()) {
      callback18(true);
    }
  }, items25);
  const callback21 = obj.useCallback(() => {
    if (obj.isIOS()) {
      callback18(false);
    }
  }, items26);
  const rect = tmp29(1629)();
  if (null == memo2) {
    return null;
  } else {
    let tmp77 = isFullscreen;
    if (isFullscreen) {
      tmp77 = null != rect;
    }
    if (tmp77) {
      obj2 = { paddingRight: null, paddingLeft: null };
      let _Math = Math;
      obj2[0] = Math.max(rect.right, obj.right);
      let _Math2 = Math;
      obj2[1] = Math.max(rect.left, obj.left);
      tmp77 = obj2;
    }
    const obj3 = { style: null, accessible: false, children: null };
    const items27 = [tmp.container, style];
    obj3[0] = items27;
    const obj4 = { style: null, onPress: null, accessible: null, accessibilityLabel: null, children: null };
    const items28 = [tmp.videoContainer];
    obj4[0] = items28;
    obj4[1] = callback9;
    obj4[2] = !first2;
    const intl = tmp3(1236).intl;
    const t = tmp3(1236).t;
    obj4[3] = intl.string(tmp70 ? t.R3aFPe : t.fTMEUi);
    let tmp80Result = first1 !== tmp17.ERRORED;
    if (tmp80Result) {
      const obj5 = { mixWithOthers: "inherit", ref: null, accessible: false, importantForAccessibility: "no-hide-descendants", accessibilityRole: "none", style: null, paused: null, source: null, onBuffer: null, onPlaybackStalled: null, onPlaybackResume: null, onLoad: null, onSeek: null, onProgress: null, onLoadStart: null, onEnd: null, onError: null, onReadyForDisplay: null, onVideoTracks: null, onLayout: null, resizeMode: "contain" };
      obj5[1] = ref;
      obj5[5] = tmp.video;
      obj5[6] = tmp70;
      obj5[7] = memo2;
      obj5[8] = callback19;
      obj5[9] = callback20;
      obj5[10] = callback21;
      obj5[11] = callback3;
      obj5[12] = callback10;
      obj5[13] = callback12;
      obj5[14] = callback14;
      obj5[15] = callback13;
      obj5[16] = callback15;
      obj5[17] = callback1;
      obj5[18] = callback16;
      obj5[19] = callback17;
      tmp80Result = tmp80(first1, obj5);
    }
    const items29 = [tmp80Result, , , , , ];
    const obj6 = { quest: null, currentTime: null, visible: null, style: null };
    obj6[0] = quest;
    obj6[1] = tmp16.timestampSec;
    obj6[2] = flag;
    let num3;
    if (contentInsets != null) {
      num3 = contentInsets.top;
    }
    if (num3 == null) {
      num3 = 0;
    }
    const obj7 = { top: null, bottom: null, left: null, right: null };
    obj7[0] = num3;
    let num4;
    if (contentInsets != null) {
      num4 = contentInsets.bottom;
    }
    if (num4 == null) {
      num4 = 0;
    }
    obj7[1] = num4;
    let num5;
    if (contentInsets != null) {
      num5 = contentInsets.left;
    }
    if (num5 == null) {
      num5 = 0;
    }
    obj7[2] = num5;
    let num6;
    if (contentInsets != null) {
      num6 = contentInsets.right;
    }
    if (num6 == null) {
      num6 = 0;
    }
    obj7[3] = num6;
    obj6[3] = obj7;
    items29[1] = targetSeconds(tmp3(14695).VideoQuestCaptions, obj6);
    if (!tmp72) {
      items29[2] = tmp72;
      tmp80Result = !tmp39;
      if (!tmp39) {
        const obj8 = { style: null, children: null };
        obj8[0] = tmp.loadingContainer;
        obj8[1] = tmp80(questTaskDetails, { animating: true });
        tmp80Result = tmp80(tmp81, obj8);
      }
      items29[3] = tmp80Result;
      const obj9 = { style: null, accessible: false, children: null };
      const items30 = [tmp.controls, animatedStyle];
      obj9[0] = items30;
      let tmp80Result4 = "landscape" === orientation;
      let tmp82Result = tmp80Result4;
      if (tmp80Result4) {
        const obj10 = { style: null, children: null };
        const items31 = [, , ];
        ({ controlsTopBottom: arr33[0], controlsTop: arr33[1] } = tmp);
        items31[2] = tmp77;
        obj10[0] = items31;
        if (!hasCaptionAsset) {
          const items32 = [hasCaptionAsset, ];
          if (flag2) {
            const obj11 = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, style: null, children: null };
            const intl3 = tmp3(1236).intl;
            obj11[1] = intl3.string(tmp3(1236).t.KCzjTi);
            obj11[2] = handleOpenTranscript;
            obj11[3] = tmp.controlButton;
            obj12 = { color: null };
            obj12[0] = tmp.iconDisabled.color;
            obj11[4] = tmp80(tmp3(14581).TranscriptOutlineIcon, obj12);
            flag2 = tmp80(tmp3(5020).PressableOpacity, obj11);
          }
          items32[1] = flag2;
          obj10[1] = items32;
          tmp82Result = tmp82(tmp81, obj10);
        } else {
          const obj13 = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, style: null, children: null };
          const intl2 = tmp3(1236).intl;
          obj13[1] = intl2.string(tmp3(1236).t.bDSZO1);
          obj13[2] = handleToggleCaptions;
          obj13[3] = tmp.controlButton;
          if (flag) {
            let color = tmp.icon.color;
          } else {
            color = tmp.iconDisabled.color;
          }
          const obj14 = { color: null };
          obj14[0] = color;
          obj13[4] = tmp80(tmp3(14579).ClosedCaptionsOutlineIcon, obj14);
          tmp80(tmp3(5020).PressableOpacity, obj13);
        }
      }
      const items33 = [tmp82Result, , ];
      const obj15 = { style: null, children: null };
      obj15[0] = tmp.controlsMiddle;
      const obj16 = { disabled: null, accessibilityRole: "button", accessibilityLabel: null, onPress: null, children: null };
      obj16[0] = first1 === tmp17.ERRORED;
      const intl4 = tmp3(1236).intl;
      obj16[2] = intl4.string(tmp3(1236).t.r9s3Uv);
      obj16[3] = callbackResult;
      const obj17 = { color: null, width: 16, height: 16 };
      obj17[0] = tmp.icon.color;
      obj16[4] = tmp80(tmp3(14584).SkipBackwardIcon, obj17);
      const items34 = [tmp80(tmp3(14583).VideoQuestPlayerControlButton, obj16), , ];
      if (!tmp22) {
        if (first1 !== tmp17.ERRORED) {
          const t2 = tmp3(1236).t;
          let K0e7M9 = tmp70 ? t2.R3aFPe : t2.fTMEUi;
        }
        const obj18 = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, children: null };
        obj18[1] = tmp93(K0e7M9);
        obj18[2] = callback5;
        if (!tmp22) {
          if (first1 !== tmp17.ERRORED) {
            if (tmp70) {
              let PauseIcon = tmp3(8510).PlayIcon;
            } else {
              PauseIcon = tmp3(8512).PauseIcon;
            }
            let tmp80Result2 = tmp80(PauseIcon, { size: "lg" });
          }
          obj18[3] = tmp80Result2;
          items34[1] = tmp80(tmp3(14583).VideoQuestPlayerControlButton, obj18);
          const obj19 = { disabled: null, accessibilityRole: "button", accessibilityLabel: null, onPress: null, children: null };
          obj19[0] = tmp51;
          const intl5 = tmp3(1236).intl;
          obj19[2] = intl5.string(tmp3(1236).t.zWDcNP);
          obj19[3] = callbackResult1;
          const obj20 = { color: null, width: 16, height: 16 };
          obj20[0] = tmp.icon.color;
          obj19[4] = tmp80(tmp3(14585).SkipForwardIcon, obj20);
          items34[2] = tmp80(tmp3(14583).VideoQuestPlayerControlButton, obj19);
          obj15[1] = items34;
          items33[1] = tmp82(tmp81, obj15);
          let tmp80Result3 = tmp80Result4;
          if (tmp80Result4) {
            const obj21 = { style: null, children: null };
            const items35 = [, , ];
            ({ controlsTopBottom: arr37[0], controlsBottom: arr37[1] } = tmp);
            items35[2] = tmp77;
            obj21[0] = items35;
            const obj22 = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, style: null, children: null };
            const intl6 = tmp3(1236).intl;
            obj22[1] = intl6.string(tmp3(1236).t.vKZT5t);
            obj22[2] = callback8;
            obj22[3] = tmp.controlButton;
            obj22[4] = tmp80(tmp3(14586).FullscreenEnterIcon, {});
            obj21[1] = tmp80(tmp3(5020).PressableOpacity, obj22);
            tmp80Result3 = tmp80(tmp81, obj21);
          }
          items33[2] = tmp80Result3;
          obj9[2] = items33;
          items29[4] = tmp82(tmp29(4185).View, obj9);
          if (tmp80Result4) {
            const obj23 = { style: null, children: null };
            obj23[0] = tmp.progressContainer;
            const obj24 = { style: null };
            const items36 = [tmp.progress, animatedStyle1];
            obj24[0] = items36;
            obj23[1] = tmp80(tmp29(4185).View, obj24);
            tmp80Result4 = tmp80(tmp81, obj23);
          }
          items29[5] = tmp80Result4;
          obj4[4] = items29;
          obj3[2] = tmp82(tmp83, obj4);
          return tmp80(tmp81, obj3);
        }
        tmp80Result2 = tmp80(tmp3(9329).RetryIcon, { size: "lg" });
      }
      K0e7M9 = tmp3(1236).t.K0e7M9;
    } else {
      let items37 = [tmp.bufferingSpinner, ];
      if (!isFullscreen) {
        if ("landscape" !== orientation) {
          let num7;
          if (contentInsets != null) {
            num7 = contentInsets.top;
          }
          if (num7 == null) {
            num7 = 0;
          }
          let obj25 = { top: null, left: null };
          obj25[0] = num7;
          let num8;
          if (contentInsets != null) {
            num8 = contentInsets.left;
          }
          if (num8 == null) {
            num8 = 0;
          }
          obj25[1] = num8;
        }
        const obj26 = { animating: true, style: null, color: null };
        items37[1] = obj25;
        obj26[1] = items37;
        items37 = tmp29(712).unsafe_rawColors.WHITE;
        obj26[2] = items37;
        tmp80(tmp86, obj26);
      }
      obj25 = tmp.bufferingSpinnerCentered;
    }
    tmp83 = quest;
  }
});
let result = require("set").fileFinishedImporting("modules/quests/native/VideoQuestModal/VideoQuestPlayer.tsx");

export const PlayerState = obj12;
export const VideoQuestPlayer = memoResult;