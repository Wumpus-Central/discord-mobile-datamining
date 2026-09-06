// discord_app/modules/quests/native/VideoQuestModal/VideoQuestPlayer.tsx
import QuestActionCreators from "../../QuestActionCreators.tsx";
import AssetUtils from "../../lib/AssetUtils.tsx";
import VideoQuestUtils from "../../utils/VideoQuestUtils.tsx";
import SimpleMuxWrapper from "../../../video-qoe/index.tsx";
import VideoQuestCaptions from "captions/VideoQuestCaptions.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import VideoQuestUIStore from "../../VideoQuestUIStore.tsx";

require = fn;
const QuestsExperimentLocations = fn(5444).QuestsExperimentLocations;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/VideoQuestModal/VideoQuestPlayer.tsx");

export const PlayerState = fn(15015).PlayerState;
export const VideoQuestPlayer = noop.memo((onLoad) => {
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
  let ref;
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
  memo = contentInsets.useMemo(
    () => AssetUtils.getQuestAsset(quest, AssetUtils.QuestAssetType.VIDEO_PLAYER_VIDEO, undefined, true),
    items,
  );
  const items1 = [quest];
  memo1 = contentInsets.useMemo(
    () => AssetUtils.getQuestAsset(quest, AssetUtils.QuestAssetType.VIDEO_PLAYER_VIDEO_HLS, undefined, true),
    items1,
  );
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
  duration = tmp10[0];
  closure_11 = tmp10[1];
  targetSeconds = questTaskDetails.targetSeconds;
  const tmp12 = flag((setVideoProgress) => setVideoProgress.setVideoProgress);
  closure_13 = tmp12;
  let obj2 = onLoad(onToggleFullscreen[6]);
  ref = obj3.useRef(null);
  const tmp13 = flag((arg0) => {
    let tmp = arg0.videoProgress[quest.id];
    if (tmp == null) {
      const obj = {
        timestampSec: questTaskDetails.progressSeconds,
        duration,
        maxTimestampSec: questTaskDetails.progressSeconds,
      };
      tmp = obj;
    }
    return tmp;
  }, onLoad(onToggleFullscreen[8]).shallow);
  [tmp16, c15] = orientation(contentInsets.useState(onLoad(onToggleFullscreen[9]).PlayerState.LOADING), 2);
  closure_16 = obj3.useRef(questTaskDetails.progressSeconds);
  obj = {
    duration,
    isQuestCompleted: tmp6,
    playerState: tmp16,
    questId: quest.id,
    videoSessionId: videoQuestModalContext.videoSessionId,
    videoAssetId: VIDEO_PLAYER_VIDEO,
    sourceQuestContent,
  };
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
      if (0 !== arr.length) {
        if (null != ref.current) {
          let obj = { location: QuestsExperimentLocations.VIDEO_MODAL_MOBILE };
          if (obj.getVideoQoEMetricsConfig(obj).externalAnalyticsEnabled) {
            constants = tmp2(1364).getConstants();
            obj = {
              videoRef: tmp.current,
              feature: "quests",
              appVersion: null,
              releaseChannel: null,
              contentMetadata: null,
            };
            ({ Version: obj4.appVersion, ReleaseChannel: obj4.releaseChannel } = constants);
            const obj1 = {
              contentId: arr,
              videoStreamType: str,
              contentType: "quests",
              durationMs: 1000 * targetSeconds,
              title: videoTitle,
              questId: id,
              gameName: gameTitle,
            };
            obj.contentMetadata = obj1;
            const mobileMuxWrapper = new tmp2(15136).MobileMuxWrapper(obj);
            ref2.current = mobileMuxWrapper;
            let current = ref2.current;
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
  const items5 = [duration, handleSeekAnalytics, quest.id, tmp12];
  const callback2 = obj3.useCallback((arg0) => {
    ({ duration, videoTracks, trackId, naturalSize } = arg0);
    closure_11(duration);
    handleLoadAnalytics();
    const current = closure_27.current;
    if (current != null) {
      current.onLoad(duration);
    }
    if (null != naturalSize) {
      const current2 = tmp3.current;
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
      const current3 = tmp3.current;
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
      closure_13(quest.id, currentTime.currentTime, tmp);
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
  ref = obj3.useRef(0);
  contentInsets.useRef(0);
  const items6 = [quest, questTaskDetails.taskType, handleProgressAnalytics, tmp12];
  const items7 = [duration, quest, handleEndAnalytics, onEnd];
  const callback4 = obj3.useCallback((currentTime) => {
    closure_16.current = currentTime.currentTime;
    if (currentTime.currentTime >= ref.current) {
      VideoQuestUtils.sendVideoProgress(quest, currentTime.currentTime);
      handleProgressAnalytics(currentTime.progress, currentTime.seekableDuration, currentTime.currentTime);
      const _Math = Math;
      const sum = currentTime.currentTime + 6;
      tmp.current = sum + 2 * Math.random();
    }
    if (currentTime.currentTime >= ref2.current) {
      const result = QuestActionCreators.updateOptimisticProgress(
        quest.id,
        questTaskDetails.taskType,
        currentTime.currentTime,
      );
      tmp2.current = currentTime.currentTime + 1;
    }
    closure_13(quest.id, currentTime.currentTime, currentTime.seekableDuration);
    const current = closure_27.current;
    if (current != null) {
      current.onProgress(currentTime.currentTime);
    }
  }, items6);
  const items8 = [handleLoadStartAnalytics];
  const callback5 = obj3.useCallback(() => {
    VideoQuestUtils.sendVideoProgress(quest, first);
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
    const obj = { quest, currentTime, visible: flag, style: null };
    let rect = contentInsets;
    let num;
    if (contentInsets != null) {
      num = rect.top;
    }
    if (num == null) {
      num = 0;
    }
    rect = { top: num, bottom: null, left: null, right: null };
    let num2;
    if (rect != null) {
      num2 = rect.bottom;
    }
    if (num2 == null) {
      num2 = 0;
    }
    rect.bottom = num2;
    let num3;
    if (rect != null) {
      num3 = rect.left;
    }
    if (num3 == null) {
      num3 = 0;
    }
    rect.left = num3;
    let num4;
    if (rect != null) {
      num4 = rect.right;
    }
    if (num4 == null) {
      num4 = 0;
    }
    rect.right = num4;
    obj.style = rect;
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
    obj = {
      source: memo2,
      initialProgress: tmp13,
      contentDuration: targetSeconds,
      allowUnrestrictedSeeking: tmp6,
      disableResumeOnLoad: tmp6,
      style,
      isFullscreen,
      externallyPaused,
      contentInsets,
      renderCaptions: callback13,
      onLoadStart: callback6,
      onLoad: callback2,
      onReadyForDisplay: callback1,
      onSeek: callback3,
      onBuffer: callback12,
      onError: callback7,
      onEnd: callback5,
      onPlayerStateChange: callback,
      onResumePlayback: callback10,
      onPausePlayback: callback11,
      onProgress: callback4,
      onVideoTracks: callback8,
      onVideoLayout: callback9,
      videoRef: ref,
      bufferingSpinnerPlacement: null,
      captionsEnabled: null,
      showCaptionsButton: null,
      showTranscriptButton: null,
      showFullscreenButton: null,
      showProgress: null,
      onToggleCaptions: null,
      onOpenTranscript: null,
      onToggleFullscreen: null,
    };
    let str2 = "top-left";
    if ("landscape" === orientation) {
      str2 = "center";
    }
    obj.bufferingSpinnerPlacement = str2;
    obj.captionsEnabled = flag;
    let tmp40 = tmp42;
    if ("landscape" === orientation) {
      tmp40 = hasCaptionAsset;
    }
    obj.showCaptionsButton = tmp40;
    let tmp41 = tmp42;
    if ("landscape" === orientation) {
      tmp41 = flag2;
    }
    obj.showTranscriptButton = tmp41;
    obj.showFullscreenButton = "landscape" === orientation;
    obj.showProgress = "landscape" === orientation;
    obj.onToggleCaptions = handleToggleCaptions;
    obj.onOpenTranscript = handleOpenTranscript;
    obj.onToggleFullscreen = tmp39;
    return questTaskDetails(tmp(tmp2[17]).AdVideoPlayer, obj);
  }
  const tmpResult = onLoad(onToggleFullscreen[11]);
});
