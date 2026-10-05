// === Module 14937: VideoQuestPlayer ===

// Module 14937 (VideoQuestPlayer)
import ClientInfoUtils from "ClientInfoUtils" /* 1368 */;
import QuestActionCreators from "QuestActionCreators" /* 9994 */;
import AssetUtils from "AssetUtils" /* 10000 */;
import VideoQuestUtils from "VideoQuestUtils" /* 10940 */;
import AdsVideoTypes from "AdsVideoTypes" /* 14823 */;
import SimpleMuxWrapper from "SimpleMuxWrapper" /* 14940 */;
import VideoQuestCaptions from "VideoQuestCaptions" /* 14948 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import VideoQuestUIStore from "VideoQuestUIStore" /* 7189 */;

require = fn;
const QuestsExperimentLocations = fn(5623).QuestsExperimentLocations;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/VideoQuestModal/VideoQuestPlayer.tsx");

export const PlayerState = fn(14823).PlayerState;
export const VideoQuestPlayer = noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((onEnd) => {
  const cResult = onLoad(onToggleFullscreen[6]).c(104);
  ({ style, onLoad } = onEnd);
  onEnd = onEnd.onEnd;
  onToggleFullscreen = onEnd.onToggleFullscreen;
  const orientation = onEnd.orientation;
  const contentInsets = onEnd.contentInsets;
  ({ handleToggleCaptions, handleOpenTranscript, isFullscreen, externallyPaused, captionsEnabled, sourceQuestContent, hasCaptionAsset, hasTranscriptAsset } = onEnd);
  VideoQuestUIStore = undefined !== captionsEnabled && captionsEnabled;
  let obj = onLoad(onToggleFullscreen[6]);
  const videoQuestModalContext = onLoad(onToggleFullscreen[7]).useVideoQuestModalContext();
  const quest = videoQuestModalContext.quest;
  const tmpResult = onLoad(onToggleFullscreen[7]);
  const questTaskDetails = onLoad(onToggleFullscreen[8]).useQuestTaskDetails(quest);
  const userStatus = quest.userStatus;
  if (userStatus != null) {
    const completedAt = userStatus.completedAt;
  }
  if (cResult[0] !== quest) {
    const tmpResult5 = onLoad(tmp2[9]);
    const questAsset = tmpResult5.getQuestAsset(quest, onLoad(tmp2[9]).QuestAssetType.VIDEO_PLAYER_VIDEO, undefined, true);
    cResult[0] = quest;
    cResult[1] = questAsset;
  }
  if (cResult[2] !== quest) {
    const tmpResult6 = onLoad(tmp2[9]);
    const questAsset1 = tmpResult6.getQuestAsset(quest, onLoad(tmp2[9]).QuestAssetType.VIDEO_PLAYER_VIDEO_HLS, undefined, true);
    cResult[2] = quest;
    cResult[3] = questAsset1;
    let tmp10 = questAsset1;
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
  closure_9 = tmp15[1];
  const targetSeconds = questTaskDetails.targetSeconds;
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    class B {
      constructor(arg0) {
        return onEnd.setVideoProgress;
      }
    }
    cResult[4] = B;
  } else {
    class B {
      constructor(arg0) {
        return onEnd.setVideoProgress;
      }
    }
  }
  const tmpResult4 = onLoad(onToggleFullscreen[8]);
  closure_11 = VideoQuestUIStore(B);
  if (cResult[5] === duration) {
    class B {
      constructor(arg0) {
        return onEnd.setVideoProgress;
      }
    }
  }
  const fn = function j(arg0) {
    let tmp = arg0.videoProgress[quest.id];
    if (tmp == null) {
      const obj = { timestampSec: questTaskDetails.progressSeconds, duration, maxTimestampSec: questTaskDetails.progressSeconds };
      tmp = obj;
    }
    return tmp;
  };
  cResult[5] = duration;
  cResult[6] = quest.id;
  cResult[7] = questTaskDetails.progressSeconds;
  cResult[8] = fn;
  const tmp18 = VideoQuestUIStore(B);
}) : ((onLoad) => {
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
  closure_11 = undefined;
  let targetSeconds;
  closure_13 = undefined;
  let first1;
  closure_16 = undefined;
  closure_17 = undefined;
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
  closure_29 = undefined;
  let id;
  let gameTitle;
  let url1;
  let videoTitle;
  let str;
  let ref;
  const videoQuestModalContext = onLoad(onToggleFullscreen[7]).useVideoQuestModalContext();
  const quest = videoQuestModalContext.quest;
  let obj = onLoad(onToggleFullscreen[7]);
  const questTaskDetails = onLoad(onToggleFullscreen[8]).useQuestTaskDetails(quest);
  const userStatus = quest.userStatus;
  let completedAt;
  if (userStatus != null) {
    completedAt = userStatus.completedAt;
  }
  const items = [quest];
  memo = contentInsets.useMemo(() => AssetUtils.getQuestAsset(quest, AssetUtils.QuestAssetType.VIDEO_PLAYER_VIDEO, undefined, true), items);
  const items1 = [quest];
  memo1 = contentInsets.useMemo(() => AssetUtils.getQuestAsset(quest, AssetUtils.QuestAssetType.VIDEO_PLAYER_VIDEO_HLS, undefined, true), items1);
  let url;
  if (memo1 != null) {
    url = memo1.url;
  }
  if (null != url) {
    let VIDEO_PLAYER_VIDEO = tmp(tmp2[9]).QuestAssetType.VIDEO_PLAYER_VIDEO_HLS;
  } else {
    VIDEO_PLAYER_VIDEO = tmp(tmp2[9]).QuestAssetType.VIDEO_PLAYER_VIDEO;
  }
  const tmp10 = orientation(contentInsets.useState(questTaskDetails.targetSeconds), 2);
  duration = tmp10[0];
  closure_11 = tmp10[1];
  targetSeconds = questTaskDetails.targetSeconds;
  const tmp12 = flag((setVideoProgress) => setVideoProgress.setVideoProgress);
  closure_13 = tmp12;
  let obj2 = onLoad(onToggleFullscreen[8]);
  ref = obj3.useRef(null);
  const tmp15 = orientation(contentInsets.useState(onLoad(onToggleFullscreen[11]).PlayerState.LOADING), 2);
  first1 = tmp15[0];
  closure_16 = tmp15[1];
  closure_17 = obj3.useRef(questTaskDetails.progressSeconds);
  const tmp17 = onEnd(onToggleFullscreen[12])({ duration, isQuestCompleted: null != completedAt, playerState: first1, questId: quest.id, videoSessionId: videoQuestModalContext.videoSessionId, videoAssetId: VIDEO_PLAYER_VIDEO, sourceQuestContent });
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
  const obj4 = { duration, isQuestCompleted: null != completedAt, playerState: first1, questId: quest.id, videoSessionId: videoQuestModalContext.videoSessionId, videoAssetId: VIDEO_PLAYER_VIDEO, sourceQuestContent };
  const tmp13 = flag((arg0) => {
    let tmp = arg0.videoProgress[quest.id];
    if (tmp == null) {
      const obj = { timestampSec: questTaskDetails.progressSeconds, duration, maxTimestampSec: questTaskDetails.progressSeconds };
      tmp = obj;
    }
    return tmp;
  }, onLoad(onToggleFullscreen[10]).shallow);
  const defaultWatchVideoTask = onLoad(onToggleFullscreen[13]).getDefaultWatchVideoTask(quest.config);
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
  const effect = obj3.useEffect(() => {
    if (null != url1) {
      if (0 !== url1.length) {
        if (null != ref.current) {
          const obj2 = { location: QuestsExperimentLocations.VIDEO_MODAL_MOBILE };
          if (obj.getVideoQoEMetricsConfig(obj2).externalAnalyticsEnabled) {
            constants = ClientInfoUtils.getConstants();
            const obj3 = { videoRef: tmp.current, feature: "quests", appVersion: null, releaseChannel: null, contentMetadata: null };
            ({ Version: obj4.appVersion, ReleaseChannel: obj4.releaseChannel } = constants);
            const obj5 = { contentId: url1, videoStreamType: str, contentType: "quests", durationMs: 1000 * targetSeconds, title: videoTitle, questId: id, gameName: gameTitle };
            obj3.contentMetadata = obj5;
            const mobileMuxWrapper = new SimpleMuxWrapper.MobileMuxWrapper(obj3);
            ref2.current = mobileMuxWrapper;
            let current = ref2.current;
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
          obj = SimpleMuxWrapper;
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
    let tmp6 = null != videoTracks;
    if (tmp6) {
      tmp6 = videoTracks.length > 0;
    }
    if (tmp6) {
      tmp6 = null != trackId;
    }
    if (tmp6) {
      tmp6 = trackId.length > 0;
    }
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
    if (first > 0) {
      closure_13(quest.id, currentTime.currentTime, tmp);
    }
    handleSeekAnalytics(currentTime.fromTimeSec, currentTime.currentTime);
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
  contentInsets.useRef(0);
  const items6 = [quest, questTaskDetails.taskType, handleEngagedViewProgress, handleProgressAnalytics, tmp12, duration, first1];
  const items7 = [duration, quest, handleEndAnalytics, onEnd];
  const callback5 = obj3.useCallback((currentTime) => {
    closure_17.current = currentTime.currentTime;
    const obj = { positionSeconds: currentTime.currentTime, durationSeconds: null, isPlaying: null };
    let seekableDuration = first;
    if (first <= 0) {
      seekableDuration = currentTime.seekableDuration;
    }
    obj.durationSeconds = seekableDuration;
    obj.isPlaying = first1 === AdsVideoTypes.PlayerState.PLAYING;
    handleEngagedViewProgress(obj);
    if (currentTime.currentTime >= ref.current) {
      VideoQuestUtils.sendVideoProgress(quest, currentTime.currentTime);
      handleProgressAnalytics(currentTime.progress, currentTime.seekableDuration, currentTime.currentTime);
      const _Math = Math;
      const sum = currentTime.currentTime + 6;
      tmp5.current = sum + 2 * Math.random();
      const tmp2Result = VideoQuestUtils;
    }
    if (currentTime.currentTime >= ref2.current) {
      const result = QuestActionCreators.updateOptimisticProgress(quest.id, questTaskDetails.taskType, currentTime.currentTime);
      tmp12.current = currentTime.currentTime + 1;
      const tmp2Result2 = QuestActionCreators;
    }
    closure_13(quest.id, currentTime.currentTime, currentTime.seekableDuration);
    const current = closure_29.current;
    if (current != null) {
      current.onProgress(currentTime.currentTime);
    }
  }, items6);
  const items8 = [handleLoadStartAnalytics];
  const callback6 = obj3.useCallback(() => {
    VideoQuestUtils.sendVideoProgress(quest, first);
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
    ({ videoTracks, selectedVideoTrackId } = arg0);
    let tmp = null != videoTracks;
    if (tmp) {
      tmp = videoTracks.length > 0;
    }
    if (tmp) {
      tmp = null != selectedVideoTrackId;
    }
    if (tmp) {
      tmp = selectedVideoTrackId.length > 0;
    }
    if (tmp) {
      const current = closure_29.current;
      if (current != null) {
        current.onVideoTrackChange(selectedVideoTrackId, videoTracks);
      }
    }
  }, []);
  const items10 = [handleResumePlaybackAnalytics];
  const callback10 = obj3.useCallback((nativeEvent) => {
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
        const current = closure_29.current;
        if (current != null) {
          const result = current.updateVideoDimensions(width, height);
        }
      }
      tmp2 = width > 0 && height > 0;
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
    const obj = { quest, currentTime, visible: flag, style: null };
    const rect = contentInsets;
    let num;
    if (contentInsets != null) {
      num = rect.top;
    }
    if (num == null) {
      num = 0;
    }
    const rect1 = { top: num, bottom: null, left: null, right: null };
    let num2;
    if (rect != null) {
      num2 = rect.bottom;
    }
    if (num2 == null) {
      num2 = 0;
    }
    rect1.bottom = num2;
    let num3;
    if (rect != null) {
      num3 = rect.left;
    }
    if (num3 == null) {
      num3 = 0;
    }
    rect1.left = num3;
    let num4;
    if (rect != null) {
      num4 = rect.right;
    }
    if (num4 == null) {
      num4 = 0;
    }
    rect1.right = num4;
    obj.style = rect1;
    return jsx(VideoQuestCaptions.VideoQuestCaptions, { quest, currentTime, visible: flag, style: null });
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
      const obj = { uri: url };
      tmp2 = obj;
    }
    return tmp2;
  }, items14);
  const items15 = [onToggleFullscreen, orientation];
  if (null == memo2) {
    return null;
  } else {
    let obj5 = { source: memo2, initialProgress: tmp13, contentDuration: targetSeconds, allowUnrestrictedSeeking: tmp6, disableResumeOnLoad: tmp6, style, isFullscreen, externallyPaused, contentInsets, renderCaptions: callback14, onLoadStart: callback7, onLoad: callback2, onReadyForDisplay: callback1, onSeekStart: callback3, onSeek: callback4, onBuffer: callback13, onError: callback8, onEnd: callback6, onPlayerStateChange: callback, onResumePlayback: callback11, onPausePlayback: callback12, onProgress: callback5, onVideoTracks: callback9, onVideoLayout: callback10, videoRef: ref, bufferingSpinnerPlacement: null, captionsEnabled: null, showCaptionsButton: null, showTranscriptButton: null, showFullscreenButton: null, showProgress: null, onToggleCaptions: null, onOpenTranscript: null, onToggleFullscreen: null };
    let str2 = "top-left";
    if ("landscape" === orientation) {
      str2 = "center";
    }
    obj5.bufferingSpinnerPlacement = str2;
    obj5.captionsEnabled = flag;
    let tmp41 = tmp43;
    if ("landscape" === orientation) {
      tmp41 = hasCaptionAsset;
    }
    obj5.showCaptionsButton = tmp41;
    let tmp42 = tmp43;
    if ("landscape" === orientation) {
      tmp42 = flag2;
    }
    obj5.showTranscriptButton = tmp42;
    obj5.showFullscreenButton = "landscape" === orientation;
    obj5.showProgress = "landscape" === orientation;
    obj5.onToggleCaptions = handleToggleCaptions;
    obj5.onOpenTranscript = handleOpenTranscript;
    obj5.onToggleFullscreen = tmp40;
    return questTaskDetails(tmp(tmp2[19]).AdVideoPlayer, obj5);
  }
  const tmpResult = onLoad(onToggleFullscreen[13]);
}));