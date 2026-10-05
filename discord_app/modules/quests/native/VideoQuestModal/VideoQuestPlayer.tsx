// === Module 14937: VideoQuestPlayer ===

// Module 14937 (VideoQuestPlayer)
import Fragment from "Fragment" /* 21 */;
import react_native from "react-native" /* 1368 */;
import QuestConstants from "QuestConstants" /* 5623 */;
import QuestActionCreators from "QuestActionCreators" /* 9994 */;
import AssetUtils from "AssetUtils" /* 10000 */;
import VideoQuestUtils from "VideoQuestUtils" /* 10940 */;
import AdsVideoTypes from "AdsVideoTypes" /* 14823 */;
import SimpleMuxWrapper from "SimpleMuxWrapper" /* 14940 */;
import VideoQuestCaptions2 from "VideoQuestCaptions" /* 14948 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import VideoQuestUIStore_mod from "VideoQuestUIStore" /* 7189 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let constants, nativeEvent;

let VideoQuestUIStore = VideoQuestUIStore_mod;
const QuestsExperimentLocations = QuestConstants.QuestsExperimentLocations;
const jsx = Fragment.jsx;
let memo = react.memo;
const memoResult = memo(ReactCompilerGating.isReactCompilerEnabled() ? ((onEnd) => {
  let captionsEnabled;
  let contentId;
  let externallyPaused;
  let gameName;
  let handleOpenTranscript;
  let handleToggleCaptions;
  let hasCaptionAsset;
  let hasTranscriptAsset;
  let isFullscreen;
  let onLoad;
  let onToggleFullscreen;
  let questId;
  let ref;
  let ref2;
  let ref3;
  let sourceQuestContent;
  let style;
  let title;
  let tmp10;
  let videoStreamType;
  let visible;
  let tmp2 = onToggleFullscreen;
  let obj = onLoad(onToggleFullscreen[6]);
  const cResult = obj.c(104);
  ({ style, onLoad } = onEnd);
  onEnd = onEnd.onEnd;
  onToggleFullscreen = onEnd.onToggleFullscreen;
  const orientation = onEnd.orientation;
  const contentInsets = onEnd.contentInsets;
  ({ handleToggleCaptions, handleOpenTranscript, isFullscreen, externallyPaused, captionsEnabled, sourceQuestContent, hasCaptionAsset, hasTranscriptAsset } = onEnd);
  VideoQuestUIStore = undefined !== captionsEnabled && captionsEnabled;
  const tmpResult = onLoad(tmp2[7]);
  const videoQuestModalContext = tmpResult.useVideoQuestModalContext();
  const quest = videoQuestModalContext.quest;
  const tmpResult4 = onLoad(tmp2[8]);
  const questTaskDetails = tmpResult4.useQuestTaskDetails(quest);
  const userStatus = quest.userStatus;
  if (userStatus != null) {
    const completedAt = userStatus.completedAt;
  }
  if (cResult[0] !== quest) {
    const tmpResult5 = onLoad(tmp2[9]);
    const questAsset = tmpResult5.getQuestAsset(quest, onLoad(tmp2[9]).QuestAssetType.VIDEO_PLAYER_VIDEO, undefined, true);
    let num = 0;
    cResult[0] = quest;
    let num2 = 1;
    cResult[1] = questAsset;
    let tmp6 = questAsset;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] !== quest) {
    const tmpResult6 = onLoad(tmp2[9]);
    const tmp12 = quest;
    const questAsset1 = tmpResult6.getQuestAsset(quest, onLoad(tmp2[9]).QuestAssetType.VIDEO_PLAYER_VIDEO_HLS, undefined, true);
    let num3 = 2;
    cResult[2] = quest;
    let num4 = 3;
    cResult[3] = questAsset1;
    tmp10 = questAsset1;
  } else {
    tmp10 = cResult[3];
  }
  let url;
  if (tmp10 != null) {
    url = tmp10.url;
  }
  if (null != url) {
    let VIDEO_PLAYER_VIDEO = onLoad(tmp2[9]).QuestAssetType.VIDEO_PLAYER_VIDEO_HLS;
  } else {
    VIDEO_PLAYER_VIDEO = onLoad(tmp2[9]).QuestAssetType.VIDEO_PLAYER_VIDEO;
  }
  const tmp15 = orientation(contentInsets.useState(questTaskDetails.targetSeconds), 2);
  const duration = tmp15[0];
  let closure_9 = tmp15[1];
  const targetSeconds = questTaskDetails.targetSeconds;
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    class B {
      constructor(setVideoProgress) {
        return setVideoProgress.setVideoProgress;
      }
    }
    cResult[4] = B;
  } else {
    class B {
      constructor(setVideoProgress) {
        return setVideoProgress.setVideoProgress;
      }
    }
  }
  let closure_11 = VideoQuestUIStore(B);
  VideoQuestUIStore(B);
  if (cResult[5] === duration) {
    class B {
      constructor(setVideoProgress) {
        return setVideoProgress.setVideoProgress;
      }
    }
  }
  const fn = function j(arg0) {
    let tmp = arg0.videoProgress[quest.id];
    if (tmp == null) {
      tmp = { timestampSec: questTaskDetails.progressSeconds, duration, maxTimestampSec: questTaskDetails.progressSeconds };
      const obj = { timestampSec: questTaskDetails.progressSeconds, duration, maxTimestampSec: questTaskDetails.progressSeconds };
    }
    return tmp;
  };
  cResult[5] = duration;
  cResult[6] = quest.id;
  cResult[7] = questTaskDetails.progressSeconds;
  cResult[8] = fn;
}) : ((onLoad) => {
  let VIDEO_PLAYER_VIDEO;
  let externallyPaused;
  let handleOpenTranscript;
  let handleToggleCaptions;
  let hasCaptionAsset;
  let isFullscreen;
  let sourceQuestContent;
  let str2;
  let style;
  onLoad = onLoad.onLoad;
  const onEnd = onLoad.onEnd;
  const onToggleFullscreen = onLoad.onToggleFullscreen;
  const orientation = onLoad.orientation;
  const contentInsets = onLoad.contentInsets;
  let flag = onLoad.captionsEnabled;
  ({ style, handleToggleCaptions, handleOpenTranscript, isFullscreen, externallyPaused } = onLoad);
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
  let memo;
  let memo1;
  let duration;
  let closure_11;
  let targetSeconds;
  let closure_13;
  let first1;
  let closure_16;
  let closure_17;
  let handleBufferAnalytics;
  let handleEndAnalytics;
  let handleEngagedViewProgress;
  let handleErrorAnalytics;
  let handleLoadAnalytics;
  let handleLoadStartAnalytics;
  let handlePausePlaybackAnalytics;
  let handleProgressAnalytics;
  let handleReadyForDisplayAnalytics;
  let handleResumePlaybackAnalytics;
  let handleSeekAnalytics;
  let closure_29;
  let id;
  let gameTitle;
  let url1;
  let videoTitle;
  let str;
  let ref;
  let ref2;
  let tmp = onLoad;
  let tmp2 = onToggleFullscreen;
  let obj = onLoad(onToggleFullscreen[7]);
  const videoQuestModalContext = obj.useVideoQuestModalContext();
  const quest = videoQuestModalContext.quest;
  const videoSessionId = videoQuestModalContext.videoSessionId;
  let obj2 = onLoad(onToggleFullscreen[8]);
  const questTaskDetails = obj2.useQuestTaskDetails(quest);
  const userStatus = quest.userStatus;
  let completedAt;
  if (userStatus != null) {
    completedAt = userStatus.completedAt;
  }
  let tmp6 = null != completedAt;
  let obj3 = contentInsets;
  const items = [quest];
  memo = contentInsets.useMemo(() => {
    const obj = AssetUtils;
    return obj.getQuestAsset(quest, AssetUtils.QuestAssetType.VIDEO_PLAYER_VIDEO, undefined, true);
  }, items);
  const items1 = [quest];
  memo1 = contentInsets.useMemo(() => {
    const obj = AssetUtils;
    return obj.getQuestAsset(quest, AssetUtils.QuestAssetType.VIDEO_PLAYER_VIDEO_HLS, undefined, true);
  }, items1);
  let url;
  if (memo1 != null) {
    url = memo1.url;
  }
  if (null != url) {
    VIDEO_PLAYER_VIDEO = tmp(tmp2[9]).QuestAssetType.VIDEO_PLAYER_VIDEO_HLS;
  } else {
    VIDEO_PLAYER_VIDEO = tmp(tmp2[9]).QuestAssetType.VIDEO_PLAYER_VIDEO;
  }
  const tmp10 = orientation(obj3.useState(questTaskDetails.targetSeconds), 2);
  duration = tmp10[0];
  closure_11 = tmp10[1];
  targetSeconds = questTaskDetails.targetSeconds;
  const tmp12 = flag((setVideoProgress) => setVideoProgress.setVideoProgress);
  closure_13 = tmp12;
  const tmp13 = flag((arg0) => {
    let tmp = arg0.videoProgress[quest.id];
    if (tmp == null) {
      tmp = { timestampSec: questTaskDetails.progressSeconds, duration, maxTimestampSec: questTaskDetails.progressSeconds };
      const obj = { timestampSec: questTaskDetails.progressSeconds, duration, maxTimestampSec: questTaskDetails.progressSeconds };
    }
    return tmp;
  }, tmp(tmp2[10]).shallow);
  ref = obj3.useRef(null);
  const tmp15 = orientation(obj3.useState(tmp(tmp2[11]).PlayerState.LOADING), 2);
  first1 = tmp15[0];
  closure_16 = tmp15[1];
  closure_17 = obj3.useRef(questTaskDetails.progressSeconds);
  const obj4 = { duration, isQuestCompleted: tmp6, playerState: first1, questId: quest.id, videoSessionId, videoAssetId: VIDEO_PLAYER_VIDEO, sourceQuestContent };
  const tmp17 = onEnd(tmp2[12])(obj4);
  handleBufferAnalytics = tmp17.handleBufferAnalytics;
  handleEndAnalytics = tmp17.handleEndAnalytics;
  handleEngagedViewProgress = tmp17.handleEngagedViewProgress;
  handleErrorAnalytics = tmp17.handleErrorAnalytics;
  handleLoadAnalytics = tmp17.handleLoadAnalytics;
  handleLoadStartAnalytics = tmp17.handleLoadStartAnalytics;
  handlePausePlaybackAnalytics = tmp17.handlePausePlaybackAnalytics;
  handleProgressAnalytics = tmp17.handleProgressAnalytics;
  handleReadyForDisplayAnalytics = tmp17.handleReadyForDisplayAnalytics;
  handleResumePlaybackAnalytics = tmp17.handleResumePlaybackAnalytics;
  handleSeekAnalytics = tmp17.handleSeekAnalytics;
  closure_29 = obj3.useRef(null);
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
  const tmpResult = tmp(tmp2[13]);
  const defaultWatchVideoTask = tmpResult.getDefaultWatchVideoTask(quest.config);
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
  const items2 = [id, gameTitle, targetSeconds, url1, videoTitle, str];
  const effect = obj3.useEffect(function() {
    let obj5;
    if (null != url1) {
      if (0 !== url1.length) {
        if (null != ref.current) {
          const obj2 = { location: QuestsExperimentLocations.VIDEO_MODAL_MOBILE };
          const obj = SimpleMuxWrapper;
          if (obj.getVideoQoEMetricsConfig(obj2).externalAnalyticsEnabled) {
            const tmp2Result = react_native;
            constants = tmp2Result.getConstants();
            const obj3 = { videoRef: tmp.current, feature: "quests", appVersion: null, releaseChannel: null, contentMetadata: obj5 };
            ({ Version: obj4.appVersion, ReleaseChannel: obj4.releaseChannel } = constants);
            const self = this;
            const self2 = this;
            obj5 = { contentId: url1, videoStreamType: str, contentType: "quests", durationMs: 1000 * targetSeconds, title: videoTitle, questId: id, gameName: gameTitle };
            ref2.current = new SimpleMuxWrapper.MobileMuxWrapper(obj3);
            let current = ref2.current;
            const mobileMuxWrapper = new SimpleMuxWrapper.MobileMuxWrapper(obj3);
            current.initialize();
            return () => {
              if (null != ref2.current) {
                const current = ref2.current;
                current.onProgress(ref.current);
                const current2 = ref2.current;
                current2.destroy();
                ref2.current = null;
              }
            };
          }
        }
      }
    }
  }, items2);
  const items3 = [handleReadyForDisplayAnalytics];
  const callback = obj3.useCallback((arg0) => {
    closure_16(arg0);
  }, []);
  const items4 = [handleLoadAnalytics, onLoad];
  const callback1 = obj3.useCallback(() => {
    handleReadyForDisplayAnalytics();
    const current = closure_29.current;
    if (current != null) {
      current.onReadyForDisplay();
    }
  }, items3);
  const callback2 = obj3.useCallback((arg0) => {
    let naturalSize;
    let trackId;
    let videoTracks;
    ({ duration, videoTracks, trackId, naturalSize } = arg0);
    closure_11(duration);
    handleLoadAnalytics();
    const current = closure_29.current;
    if (current != null) {
      current.onLoad(duration);
    }
    if (null != naturalSize) {
      const current2 = closure_29.current;
      if (current2 != null) {
        const result = current2.updateVideoSourceDimensions(naturalSize.width, naturalSize.height);
      }
    }
    const tmp6 = null != videoTracks && videoTracks.length > 0 && null != trackId && trackId.length > 0;
    if (tmp6) {
      const current3 = closure_29.current;
      if (current3 != null) {
        current3.onVideoTrackChange(trackId, videoTracks);
      }
    }
    if (onLoad != null) {
      onLoad(arg0);
    }
  }, items4);
  const items5 = [duration, handleSeekAnalytics, quest.id, tmp12];
  const callback3 = obj3.useCallback(() => {
    const current = closure_29.current;
    if (current != null) {
      current.onSeekStart();
    }
  }, []);
  const callback4 = obj3.useCallback((currentTime) => {
    closure_17.current = currentTime.currentTime;
    const fromTimeSec = currentTime.fromTimeSec;
    if (first > 0) {
      closure_13(quest.id, currentTime.currentTime, tmp);
    }
    handleSeekAnalytics(fromTimeSec, currentTime.currentTime);
    const current = closure_29.current;
    if (current != null) {
      current.updatePlayheadTime(currentTime.currentTime);
    }
    const current2 = closure_29.current;
    if (current2 != null) {
      current2.onSeek();
    }
  }, items5);
  ref = obj3.useRef(0);
  ref2 = obj3.useRef(0);
  const items6 = [quest, questTaskDetails.taskType, handleEngagedViewProgress, handleProgressAnalytics, tmp12, duration, first1];
  const items7 = [duration, quest, handleEndAnalytics, onEnd];
  const callback5 = obj3.useCallback((currentTime) => {
    let seekableDuration;
    closure_17.current = currentTime.currentTime;
    const obj = { positionSeconds: currentTime.currentTime, durationSeconds: seekableDuration, isPlaying: first1 === AdsVideoTypes.PlayerState.PLAYING };
    seekableDuration = first;
    if (first <= 0) {
      seekableDuration = currentTime.seekableDuration;
    }
    handleEngagedViewProgress(obj);
    if (currentTime.currentTime >= ref.current) {
      const tmp2Result = VideoQuestUtils;
      tmp2Result.sendVideoProgress(quest, currentTime.currentTime);
      handleProgressAnalytics(currentTime.progress, currentTime.seekableDuration, currentTime.currentTime);
      const _Math = Math;
      const sum = currentTime.currentTime + 6;
      tmp5.current = sum + 2 * Math.random();
    }
    if (currentTime.currentTime >= ref2.current) {
      const tmp2Result2 = QuestActionCreators;
      const result = tmp2Result2.updateOptimisticProgress(quest.id, questTaskDetails.taskType, currentTime.currentTime);
      tmp12.current = currentTime.currentTime + 1;
    }
    closure_13(quest.id, currentTime.currentTime, currentTime.seekableDuration);
    const current = closure_29.current;
    if (current != null) {
      current.onProgress(currentTime.currentTime);
    }
  }, items6);
  const items8 = [handleLoadStartAnalytics];
  const callback6 = obj3.useCallback(() => {
    const obj = VideoQuestUtils;
    obj.sendVideoProgress(quest, first);
    handleEndAnalytics();
    const current = closure_29.current;
    if (current != null) {
      current.onProgress(first);
    }
    const current2 = closure_29.current;
    if (current2 != null) {
      current2.onEnd();
    }
    if (onEnd != null) {
      onEnd();
    }
  }, items7);
  const items9 = [handleErrorAnalytics];
  const callback7 = obj3.useCallback(() => {
    handleLoadStartAnalytics();
    const current = closure_29.current;
    if (current != null) {
      current.onLoadStart();
    }
    const current2 = closure_29.current;
    if (current2 != null) {
      current2.onPlay();
    }
  }, items8);
  const callback8 = obj3.useCallback((arg0) => {
    handleErrorAnalytics(arg0);
    const current = closure_29.current;
    if (current != null) {
      current.onError(arg0);
    }
  }, items9);
  const callback9 = obj3.useCallback((arg0) => {
    let selectedVideoTrackId;
    let videoTracks;
    ({ videoTracks, selectedVideoTrackId } = arg0);
    const tmp = null != videoTracks && videoTracks.length > 0 && null != selectedVideoTrackId && selectedVideoTrackId.length > 0;
    if (tmp) {
      const current = closure_29.current;
      if (current != null) {
        current.onVideoTrackChange(selectedVideoTrackId, videoTracks);
      }
    }
  }, []);
  const items10 = [handleResumePlaybackAnalytics];
  const callback10 = obj3.useCallback((nativeEvent) => {
    let height;
    let width;
    let layout;
    if (nativeEvent != null) {
      nativeEvent = nativeEvent.nativeEvent;
      if (nativeEvent != null) {
        layout = nativeEvent.layout;
      }
    }
    if (null != layout) {
      ({ width, height } = nativeEvent.nativeEvent.layout);
      const tmp2 = width > 0 && height > 0;
      if (tmp2) {
        const current = closure_29.current;
        if (current != null) {
          const result = current.updateVideoDimensions(width, height);
        }
      }
    }
  }, []);
  const items11 = [handlePausePlaybackAnalytics];
  const callback11 = obj3.useCallback(() => {
    handleResumePlaybackAnalytics();
    const current = closure_29.current;
    if (current != null) {
      current.onPlay();
    }
  }, items10);
  const items12 = [handleBufferAnalytics];
  const callback12 = obj3.useCallback(() => {
    handlePausePlaybackAnalytics();
    const current = closure_29.current;
    if (current != null) {
      current.onPause();
    }
  }, items11);
  const items13 = [quest, flag, contentInsets];
  const callback13 = obj3.useCallback((nativeEvent) => {
    handleBufferAnalytics(nativeEvent);
    const current = closure_29.current;
    if (current != null) {
      current.onBuffer(nativeEvent);
    }
  }, items12);
  const items14 = [memo1, memo];
  const callback14 = obj3.useCallback((currentTime) => {
    let num2;
    let num3;
    let num4;
    const rect = contentInsets;
    let num;
    const VideoQuestCaptions = VideoQuestCaptions2.VideoQuestCaptions;
    if (contentInsets != null) {
      num = rect.top;
    }
    if (num == null) {
      num = 0;
    }
    const rect1 = { top: num, bottom: num2, left: num3, right: num4 };
    num2 = undefined;
    if (rect != null) {
      num2 = rect.bottom;
    }
    if (num2 == null) {
      num2 = 0;
    }
    num3 = undefined;
    if (rect != null) {
      num3 = rect.left;
    }
    if (num3 == null) {
      num3 = 0;
    }
    num4 = undefined;
    if (rect != null) {
      num4 = rect.right;
    }
    if (num4 == null) {
      num4 = 0;
    }
    return <VideoQuestCaptions quest={quest} currentTime={currentTime} visible={flag} style={rect1} />;
  }, items13);
  const memo2 = obj3.useMemo(() => {
    let tmp2 = null;
    if (null != memo) {
      let url;
      if (memo1 != null) {
        url = memo1.url;
      }
      if (url == null) {
        url = tmp.url;
      }
      tmp2 = { uri: url };
      const obj = { uri: url };
    }
    return tmp2;
  }, items14);
  const items15 = [onToggleFullscreen, orientation];
  if (null == memo2) {
    return null;
  } else {
    let obj5 = { source: memo2, initialProgress: tmp13, contentDuration: targetSeconds, allowUnrestrictedSeeking: tmp6, disableResumeOnLoad: tmp6, style, isFullscreen, externallyPaused, contentInsets, renderCaptions: callback14, onLoadStart: callback7, onLoad: callback2, onReadyForDisplay: callback1, onSeekStart: callback3, onSeek: callback4, onBuffer: callback13, onError: callback8, onEnd: callback6, onPlayerStateChange: callback, onResumePlayback: callback11, onPausePlayback: callback12, onProgress: callback5, onVideoTracks: callback9, onVideoLayout: callback10, videoRef: ref, bufferingSpinnerPlacement: str2, captionsEnabled: flag, showCaptionsButton: "landscape" === orientation && hasCaptionAsset, showTranscriptButton: "landscape" === orientation && flag2, showFullscreenButton: "landscape" === orientation, showProgress: "landscape" === orientation, onToggleCaptions: handleToggleCaptions, onOpenTranscript: handleOpenTranscript, onToggleFullscreen: tmp40 };
    str2 = "top-left";
    const AdVideoPlayer = tmp(tmp2[19]).AdVideoPlayer;
    const tmp42 = questTaskDetails;
    if ("landscape" === orientation) {
      str2 = "center";
    }
    return tmp42(AdVideoPlayer, obj5);
  }
}));
let result = size.fileFinishedImporting("modules/quests/native/VideoQuestModal/VideoQuestPlayer.tsx");

export const PlayerState = AdsVideoTypes.PlayerState;
export const VideoQuestPlayer = memoResult;