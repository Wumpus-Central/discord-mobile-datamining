// === Module 17349: FeedbackManager ===

// Module 17349 (FeedbackManager)
import embeddedActivityLocationUtils from "embeddedActivityLocationUtils" /* 4189 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import ApplicationStore from "ApplicationStore" /* 4788 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4583 */;
import StreamRTCConnectionStore from "StreamRTCConnectionStore" /* 4599 */;
import FeedbackManager from "feedback/FeedbackManager" /* 17350 */;

require = fn;
const FeedbackType = fn(11626).FeedbackType;
let prototype = function FeedbackManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  require = applyArgumentsResult;
  applyArgumentsResult.actions = {
    VOICE_CHANNEL_SHOW_FEEDBACK(analyticsData) {
      return applyArgumentsResult.handleShowVoiceFeedback(analyticsData);
    },
    STREAM_CLOSE(streamKey) {
      return applyArgumentsResult.handleShowStreamFeedback(streamKey);
    },
    EMBEDDED_ACTIVITY_CLOSE(applicationId) {
      return applyArgumentsResult.handleShowActivityFeedback(applicationId);
    },
    IN_APP_REPORTS_SHOW_FEEDBACK(arg0) {
      return applyArgumentsResult.handleInAppReportsFeedback(arg0);
    }
  };
  applyArgumentsResult.handleShowStreamFeedback = function handleShowStreamFeedback(streamKey) {
    streamKey = streamKey.streamKey;
    if (streamKey.canShowFeedback) {
      const result = applyArgumentsResult.possiblyShowFeedbackModal(FeedbackType.STREAM, () => {
        let analyticsData = streamKey(dependencyMap[6]);
        const decodeStreamKeyResult = analyticsData.decodeStreamKey(streamKey);
        streamKey = decodeStreamKeyResult;
        channel = channel.getChannel(decodeStreamKeyResult.channelId);
        let isGuildStageVoiceResult;
        if (channel != null) {
          isGuildStageVoiceResult = channel.isGuildStageVoice();
        }
        if (!isGuildStageVoiceResult) {
          videoStats = videoStats.getVideoStats(tmp3);
          if (videoStats == null) {
            videoStats = {};
          }
          analyticsData = { media_session_id: videoStats.getMediaSessionId(tmp3), rtc_connection_id: videoStats.getRtcConnectionId(tmp3), stream_region: videoStats.getRegion(tmp3), max_viewers: videoStats.getMaxViewers(tmp3) };
          const merged = Object.assign(videoStats);
          closure_2 = tmp(tmp2[8])(tmp2[7], tmp2.paths);
          tmp(tmp2[9]).runAfterInteractions(() => {
            analyticsData = ActionSheetActionCreatorsDefault;
            analyticsData = { stream: decodeStreamKeyResult, analyticsData };
            analyticsData.openLazy(closure_2, "StreamFeedback" + streamKey, analyticsData);
          });
          const tmpResult = tmp(tmp2[9]);
        }
      });
    }
  };
  applyArgumentsResult.handleShowActivityFeedback = function handleShowActivityFeedback(applicationId) {
    applicationId = applicationId.applicationId;
    const _location = applicationId.location;
    const application = ApplicationStore.getApplication(applicationId);
    const channel = ChannelStore.getChannel(embeddedActivityLocationUtils.getEmbeddedActivityLocationChannelId(_location));
    if (tmp2) {
      const result = applyArgumentsResult.possiblyShowFeedbackModal(FeedbackType.ACTIVITY, () => {
        closure_0 = applicationId(application[8])(application[12], application.paths);
        let analyticsData = { media_session_id: closure_1_5.getMediaSessionId(), rtc_connection_id: closure_1_5.getRTCConnectionId() };
        applicationId(application[9]).runAfterInteractions(() => {
          analyticsData = ActionSheetActionCreatorsDefault;
          analyticsData = { analyticsData, activityApplication: application, channel, embeddedActivityLocation: _location };
          analyticsData.openLazy(closure_0, "ActivityFeedback" + _location.id + applicationId, analyticsData);
        });
      });
    }
  };
  applyArgumentsResult.handleShowVoiceFeedback = function handleShowVoiceFeedback(analyticsData) {
    analyticsData = analyticsData.analyticsData;
    const result = applyArgumentsResult.possiblyShowFeedbackModal(FeedbackType.VOICE, () => {
      closure_0 = analyticsData(paths[8])(paths[13], paths.paths);
      analyticsData(paths[9]).runAfterInteractions(() => {
        const obj = { analyticsData };
        obj.openLazy(closure_0, "VoiceFeedback" + analyticsData.channel_id, obj);
      });
    });
  };
  applyArgumentsResult.handleInAppReportsFeedback = function handleInAppReportsFeedback(arg0) {
    ({ reportId: closure_0, reportType: closure_1 } = arg0);
    const result = applyArgumentsResult.possiblyShowFeedbackModal(FeedbackType.IN_APP_REPORTS, () => {
      closure_0 = reportId(paths[8])(paths[14], paths.paths);
      reportId(paths[9]).runAfterInteractions(() => {
        let str = reportId;
        if (reportId == null) {
          str = "";
        }
        ActionSheetActionCreatorsDefault.openLazy(closure_0, "ReportingFeedback" + reportType + str, { reportId, reportType });
      });
    });
  };
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp2 {
}
prototype = new prototype();
const size = fn(2);
let result = size.fileFinishedImporting("modules/feedback/native/FeedbackManager.tsx");

export default prototype;