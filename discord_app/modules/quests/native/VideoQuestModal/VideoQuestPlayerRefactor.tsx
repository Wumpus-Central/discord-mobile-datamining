// === Module 14485: PlayerState ===

// Module 14485 (PlayerState)
import _slicedToArray from "_slicedToArray" /* 32 */;
import importAllResult from "noop" /* 19 */;
import _toPropertyKey from "_toPropertyKey" /* 7455 */;
import { QuestsExperimentLocations } from "QuestsExperimentLocations" /* 6716 */;
import { jsx } from "jsxProd" /* 21 */;

const require = fn;
let c4 = importAllResult;
const memoResult = importAllResult.memo((onLoad) => {
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
  let first;
  closure_11 = undefined;
  let targetSeconds;
  closure_13 = undefined;
  let ref;
  c15 = undefined;
  closure_16 = undefined;
  let handleBufferAnalytics;
  let handleEndAnalytics;
  let handleErrorAnalytics;
  let handleLoadAnalytics;
  let handleLoadStartAnalytics;
  let handlePausePlaybackAnalytics;
  let handleProgressAnalytics;
  let handleReadyForDisplayAnalytics;
  let handleResumePlaybackAnalytics;
  let handleSeekAnalytics;
  closure_27 = undefined;
  let id;
  let gameTitle;
  let url1;
  let videoTitle;
  let str;
  closure_33 = undefined;
  closure_34 = undefined;
  let obj = onLoad(onToggleFullscreen[5]);
  const videoQuestModalContext = obj.useVideoQuestModalContext();
  const quest = videoQuestModalContext.quest;
  const questTaskDetails = onLoad(onToggleFullscreen[6]).useQuestTaskDetails(quest);
  const userStatus = quest.userStatus;
  let completedAt;
  if (userStatus != null) {
    completedAt = userStatus.completedAt;
  }
  const items = [quest];
  memo = contentInsets.useMemo(() => onLoad(onToggleFullscreen[7]).getQuestAsset(quest, onLoad(onToggleFullscreen[7]).QuestAssetType.VIDEO_PLAYER_VIDEO, undefined, true), items);
  const items1 = [quest];
  memo1 = contentInsets.useMemo(() => onLoad(onToggleFullscreen[7]).getQuestAsset(quest, onLoad(onToggleFullscreen[7]).QuestAssetType.VIDEO_PLAYER_VIDEO_HLS, undefined, true), items1);
  let url;
  if (memo1 != null) {
    url = memo1.url;
  }
  if (null != url) {
    let VIDEO_PLAYER_VIDEO = tmp(tmp2[7]).QuestAssetType.VIDEO_PLAYER_VIDEO_HLS;
  } else {
    VIDEO_PLAYER_VIDEO = tmp(tmp2[7]).QuestAssetType.VIDEO_PLAYER_VIDEO;
  }
  const tmp10 = orientation(contentInsets.useState(questTaskDetails.targetSeconds), 2);
  first = tmp10[0];
  closure_11 = tmp10[1];
  targetSeconds = questTaskDetails.targetSeconds;
  const tmp12 = flag((setVideoProgress) => setVideoProgress.setVideoProgress);
  closure_13 = tmp12;
  let obj2 = onLoad(onToggleFullscreen[6]);
  ref = obj3.useRef(null);
  const tmp13 = flag((arg0) => {
    let tmp = arg0.videoProgress[quest.id];
    if (tmp == null) {
      const obj = { timestampSec: null, duration: null, maxTimestampSec: null };
      obj[0] = questTaskDetails.progressSeconds;
      obj[1] = first;
      obj[2] = questTaskDetails.progressSeconds;
      tmp = obj;
    }
    return tmp;
  }, onLoad(onToggleFullscreen[8]).shallow);
  [tmp16, c15] = orientation(contentInsets.useState(onLoad(onToggleFullscreen[9]).PlayerState.LOADING), 2);
  closure_16 = obj3.useRef(questTaskDetails.progressSeconds);
  obj = { duration: first, isQuestCompleted: tmp6, playerState: tmp16, questId: quest.id, videoSessionId: videoQuestModalContext.videoSessionId, videoAssetId: VIDEO_PLAYER_VIDEO, sourceQuestContent };
  const tmp17 = onEnd(onToggleFullscreen[10])(obj);
  handleBufferAnalytics = tmp17.handleBufferAnalytics;
  handleEndAnalytics = tmp17.handleEndAnalytics;
  handleErrorAnalytics = tmp17.handleErrorAnalytics;
  handleLoadAnalytics = tmp17.handleLoadAnalytics;
  handleLoadStartAnalytics = tmp17.handleLoadStartAnalytics;
  handlePausePlaybackAnalytics = tmp17.handlePausePlaybackAnalytics;
  handleProgressAnalytics = tmp17.handleProgressAnalytics;
  handleReadyForDisplayAnalytics = tmp17.handleReadyForDisplayAnalytics;
  handleResumePlaybackAnalytics = tmp17.handleResumePlaybackAnalytics;
  handleSeekAnalytics = tmp17.handleSeekAnalytics;
  closure_27 = obj3.useRef(null);
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
  const tmp15 = orientation(contentInsets.useState(onLoad(onToggleFullscreen[9]).PlayerState.LOADING), 2);
  const defaultWatchVideoTask = onLoad(onToggleFullscreen[11]).getDefaultWatchVideoTask(quest.config);
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
          onLoad(onToggleFullscreen[12]);
          let obj = { location: null };
          obj[0] = quest.VIDEO_MODAL_MOBILE;
          if (obj.getVideoQoEMetricsConfig(obj).externalAnalyticsEnabled) {
            const constants = onLoad(onToggleFullscreen[13]).getConstants();
            obj = { videoRef: null, feature: "quests", appVersion: null, releaseChannel: null, contentMetadata: null };
            obj[0] = tmp.current;
            ({ Version: obj4[2], ReleaseChannel: obj4[3] } = constants);
            obj1 = { contentId: null, videoStreamType: null, contentType: "quests", durationMs: null, title: null, questId: null, gameName: null };
            obj1[0] = url1;
            obj1[1] = str;
            obj1[3] = 1000 * targetSeconds;
            obj1[4] = videoTitle;
            obj1[5] = id;
            obj1[6] = gameTitle;
            obj[4] = obj1;
            const mobileMuxWrapper = new onLoad(onToggleFullscreen[12]).MobileMuxWrapper(obj);
            closure_27.current = mobileMuxWrapper;
            let current = closure_27.current;
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
    _undefined(arg0);
  }, []);
  const items4 = [handleLoadAnalytics, onLoad];
  const callback1 = obj3.useCallback(() => {
    handleReadyForDisplayAnalytics();
    const current = closure_27.current;
    if (current != null) {
      current.onReadyForDisplay();
    }
  }, items3);
  const items5 = [first, handleSeekAnalytics, quest.id, tmp12];
  const callback2 = obj3.useCallback((arg0) => {
    ({ duration, videoTracks, trackId, naturalSize } = arg0);
    callback(duration);
    handleLoadAnalytics();
    const current = closure_27.current;
    if (current != null) {
      current.onLoad(duration);
    }
    if (null != naturalSize) {
      const current2 = closure_27.current;
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
      const current3 = closure_27.current;
      if (current3 != null) {
        current3.onVideoTrackChange(trackId, videoTracks);
      }
    }
    if (onLoad != null) {
      onLoad(arg0);
    }
  }, items4);
  const callback3 = obj3.useCallback((currentTime) => {
    closure_16.current = currentTime.currentTime;
    if (first > 0) {
      callback2(quest.id, currentTime.currentTime, tmp);
    }
    handleSeekAnalytics(currentTime.fromTimeSec, currentTime.currentTime);
    const current = closure_27.current;
    if (current != null) {
      current.updatePlayheadTime(currentTime.currentTime);
    }
    const current2 = closure_27.current;
    if (current2 != null) {
      current2.onSeek();
    }
  }, items5);
  closure_33 = obj3.useRef(0);
  closure_34 = obj3.useRef(0);
  const items6 = [quest, questTaskDetails.taskType, handleProgressAnalytics, tmp12];
  const items7 = [first, quest, handleEndAnalytics, onEnd];
  const callback4 = obj3.useCallback((currentTime) => {
    closure_16.current = currentTime.currentTime;
    if (currentTime.currentTime >= ref.current) {
      onLoad(onToggleFullscreen[14]).sendVideoProgress(quest, currentTime.currentTime);
      handleProgressAnalytics(currentTime.progress, currentTime.seekableDuration, currentTime.currentTime);
      const _Math = Math;
      const sum = currentTime.currentTime + 6;
      tmp.current = sum + 2 * Math.random();
      const obj2 = onLoad(onToggleFullscreen[14]);
    }
    if (currentTime.currentTime >= ref2.current) {
      const result = onLoad(onToggleFullscreen[15]).updateOptimisticProgress(quest.id, questTaskDetails.taskType, currentTime.currentTime);
      tmp2.current = currentTime.currentTime + 1;
      const obj = onLoad(onToggleFullscreen[15]);
    }
    callback2(quest.id, currentTime.currentTime, currentTime.seekableDuration);
    const current = closure_27.current;
    if (current != null) {
      current.onProgress(currentTime.currentTime);
    }
  }, items6);
  const items8 = [handleLoadStartAnalytics];
  const callback5 = obj3.useCallback(() => {
    onLoad(onToggleFullscreen[14]).sendVideoProgress(quest, first);
    handleEndAnalytics();
    const current = closure_27.current;
    if (current != null) {
      current.onProgress(first);
    }
    const current2 = closure_27.current;
    if (current2 != null) {
      current2.onEnd();
    }
    if (onEnd != null) {
      onEnd();
    }
    const obj = onLoad(onToggleFullscreen[14]);
  }, items7);
  const items9 = [handleErrorAnalytics];
  const callback6 = obj3.useCallback(() => {
    handleLoadStartAnalytics();
    const current = closure_27.current;
    if (current != null) {
      current.onLoadStart();
    }
    const current2 = closure_27.current;
    if (current2 != null) {
      current2.onPlay();
    }
  }, items8);
  const callback7 = obj3.useCallback((arg0) => {
    handleErrorAnalytics(arg0);
    const current = closure_27.current;
    if (current != null) {
      current.onError(arg0);
    }
  }, items9);
  const callback8 = obj3.useCallback((arg0) => {
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
      const current = closure_27.current;
      if (current != null) {
        current.onVideoTrackChange(selectedVideoTrackId, videoTracks);
      }
    }
  }, []);
  const items10 = [handleResumePlaybackAnalytics];
  const callback9 = obj3.useCallback((nativeEvent) => {
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
        const current = closure_27.current;
        if (current != null) {
          const result = current.updateVideoDimensions(width, height);
        }
      }
      tmp2 = width > 0 && height > 0;
    }
  }, []);
  const items11 = [handlePausePlaybackAnalytics];
  const callback10 = obj3.useCallback(() => {
    handleResumePlaybackAnalytics();
    const current = closure_27.current;
    if (current != null) {
      current.onPlay();
    }
  }, items10);
  const items12 = [handleBufferAnalytics];
  const callback11 = obj3.useCallback(() => {
    handlePausePlaybackAnalytics();
    const current = closure_27.current;
    if (current != null) {
      current.onPause();
    }
  }, items11);
  const items13 = [quest, flag, contentInsets];
  const callback12 = obj3.useCallback((flag2) => {
    handleBufferAnalytics(flag2);
    const current = closure_27.current;
    if (current != null) {
      current.onBuffer(flag2);
    }
  }, items12);
  const items14 = [memo1, memo];
  const callback13 = obj3.useCallback((currentTime) => {
    let obj = { quest, currentTime, visible: flag, style: null };
    const rect = contentInsets;
    let num;
    if (contentInsets != null) {
      num = rect.top;
    }
    if (num == null) {
      num = 0;
    }
    obj = { top: num, bottom: null, left: null, right: null };
    let num2;
    if (rect != null) {
      num2 = rect.bottom;
    }
    if (num2 == null) {
      num2 = 0;
    }
    obj[1] = num2;
    let num3;
    if (rect != null) {
      num3 = rect.left;
    }
    if (num3 == null) {
      num3 = 0;
    }
    obj[2] = num3;
    let num4;
    if (rect != null) {
      num4 = rect.right;
    }
    if (num4 == null) {
      num4 = 0;
    }
    obj[3] = num4;
    obj[3] = obj;
    return questTaskDetails(onLoad(onToggleFullscreen[16]).VideoQuestCaptions, obj);
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
      const obj = { uri: null };
      obj[0] = url;
      tmp2 = obj;
    }
    return tmp2;
  }, items14);
  const items15 = [onToggleFullscreen, orientation];
  if (null == memo2) {
    return null;
  } else {
    obj = { source: null, initialProgress: null, contentDuration: null, allowUnrestrictedSeeking: null, disableResumeOnLoad: null, style: null, isFullscreen: null, externallyPaused: null, contentInsets: null, renderCaptions: null, onLoadStart: null, onLoad: null, onReadyForDisplay: null, onSeek: null, onBuffer: null, onError: null, onEnd: null, onPlayerStateChange: null, onResumePlayback: null, onPausePlayback: null, onProgress: null, onVideoTracks: null, onVideoLayout: null, videoRef: null, bufferingSpinnerPlacement: null, captionsEnabled: null, showCaptionsButton: null, showTranscriptButton: null, showFullscreenButton: null, showProgress: null, onToggleCaptions: null, onOpenTranscript: null, onToggleFullscreen: null };
    obj[0] = memo2;
    obj[1] = tmp13;
    obj[2] = targetSeconds;
    obj[3] = tmp6;
    obj[4] = tmp6;
    obj[5] = style;
    obj[6] = isFullscreen;
    obj[7] = externallyPaused;
    obj[8] = contentInsets;
    obj[9] = callback13;
    obj[10] = callback6;
    obj[11] = callback2;
    obj[12] = callback1;
    obj[13] = callback3;
    obj[14] = callback12;
    obj[15] = callback7;
    obj[16] = callback5;
    obj[17] = callback;
    obj[18] = callback10;
    obj[19] = callback11;
    obj[20] = callback4;
    obj[21] = callback8;
    obj[22] = callback9;
    obj[23] = ref;
    let str2 = "top-left";
    if ("landscape" === orientation) {
      str2 = "center";
    }
    obj[24] = str2;
    obj[25] = flag;
    let tmp40 = tmp42;
    if ("landscape" === orientation) {
      tmp40 = hasCaptionAsset;
    }
    obj[26] = tmp40;
    let tmp41 = tmp42;
    if ("landscape" === orientation) {
      tmp41 = flag2;
    }
    obj[27] = tmp41;
    obj[28] = "landscape" === orientation;
    obj[29] = "landscape" === orientation;
    obj[30] = handleToggleCaptions;
    obj[31] = handleOpenTranscript;
    obj[32] = tmp39;
    return questTaskDetails(tmp(tmp2[17]).AdVideoPlayer, obj);
  }
  const tmpResult = onLoad(onToggleFullscreen[11]);
});
let result = require("obj132").fileFinishedImporting("modules/quests/native/VideoQuestModal/VideoQuestPlayerRefactor.tsx");

export const PlayerState = require("PlayerState").PlayerState;
export const VideoQuestPlayer = memoResult;