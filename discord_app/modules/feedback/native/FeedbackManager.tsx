// discord_app/modules/feedback/native/FeedbackManager.tsx
import optOutEligibilityCheckDefault from "../FeedbackManager.tsx";
import addApplication from "../../applications/ApplicationStore.tsx";
import ensureGuildLoaded from "../../../stores/ChannelStore.tsx";
import createRTCConnection from "../../../stores/RTCConnectionStore.tsx";
import initialize from "../../../stores/StreamRTCConnectionStore.tsx";
import { FeedbackType } from "../Constants.tsx";

let require = fn;
optOutEligibilityCheckDefault;
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
      const result = streamKey.possiblyShowFeedbackModal(FeedbackType.STREAM, () => {
        let obj = streamKey(closure_1_2[6]);
        const decodeStreamKeyResult = obj.decodeStreamKey(streamKey);
        streamKey = decodeStreamKeyResult;
        const channel = closure_1_4.getChannel(decodeStreamKeyResult.channelId);
        let isGuildStageVoiceResult;
        if (channel != null) {
          isGuildStageVoiceResult = channel.isGuildStageVoice();
        }
        if (!isGuildStageVoiceResult) {
          let videoStats = closure_1_6.getVideoStats(tmp3);
          if (videoStats == null) {
            videoStats = {};
          }
          obj = { media_session_id: null, rtc_connection_id: null, stream_region: null, max_viewers: null };
          obj[0] = closure_1_6.getMediaSessionId(tmp3);
          obj[1] = closure_1_6.getRtcConnectionId(tmp3);
          obj[2] = closure_1_6.getRegion(tmp3);
          obj[3] = closure_1_6.getMaxViewers(tmp3);
          const merged = Object.assign(videoStats);
          closure_2 = tmp(closure_1_2[8])(closure_1_2[7], closure_1_2.paths);
          tmp(closure_1_2[9]).runAfterInteractions(() => {
            obj = closure_2_1(closure_2_2[10]);
            obj = { stream: closure_0, analyticsData: obj };
            obj.openLazy(closure_2, "StreamFeedback" + decodeStreamKeyResult, obj);
          });
          const tmpResult = tmp(closure_1_2[9]);
        }
      });
    }
  };
  applyArgumentsResult.handleShowActivityFeedback = function handleShowActivityFeedback(applicationId) {
    applicationId = applicationId.applicationId;
    const _location = applicationId.location;
    const application = closure_1_3.getApplication(applicationId);
    const channel = closure_1_4.getChannel(applyArgumentsResult(dependencyMap[11]).getEmbeddedActivityLocationChannelId(_location));
    if (tmp2) {
      const result = applicationId.possiblyShowFeedbackModal(FeedbackType.ACTIVITY, () => {
        closure_0 = applicationId(application[8])(application[12], application.paths);
        let obj = { media_session_id: closure_1_5.getMediaSessionId(), rtc_connection_id: closure_1_5.getRTCConnectionId() };
        applicationId(application[9]).runAfterInteractions(() => {
          obj = _location(application[10]);
          obj = { analyticsData: obj, activityApplication: closure_1_2, channel: closure_1_3, embeddedActivityLocation: obj };
          obj.openLazy(closure_0, "ActivityFeedback" + obj.id + closure_0, obj);
        });
      });
    }
    let obj = applyArgumentsResult(dependencyMap[11]);
    tmp2 = null != application && applicationId.showFeedback;
  };
  applyArgumentsResult.handleShowVoiceFeedback = function handleShowVoiceFeedback(analyticsData) {
    analyticsData = analyticsData.analyticsData;
    const result = analyticsData.possiblyShowFeedbackModal(FeedbackType.VOICE, () => {
      closure_0 = analyticsData(closure_1_2[8])(closure_1_2[13], closure_1_2.paths);
      analyticsData(closure_1_2[9]).runAfterInteractions(() => {
        closure_2_1(closure_2_2[10]);
        const obj = { analyticsData: channel_id };
        obj.openLazy(channel_id, "VoiceFeedback" + channel_id.channel_id, obj);
      });
    });
  };
  applyArgumentsResult.handleInAppReportsFeedback = function handleInAppReportsFeedback(arg0) {
    ({ reportId: closure_0, reportType: closure_1 } = arg0);
    const result = applyArgumentsResult.possiblyShowFeedbackModal(FeedbackType.IN_APP_REPORTS, () => {
      closure_0 = closure_1_0(closure_1_2[8])(closure_1_2[14], closure_1_2.paths);
      closure_1_0(closure_1_2[9]).runAfterInteractions(() => {
        let str = closure_0;
        if (closure_0 == null) {
          str = "";
        }
        closure_2_1(closure_2_2[10]).openLazy(closure_0, "ReportingFeedback" + closure_1_1 + str, { reportId: closure_0, reportType: closure_1_1 });
        const obj = closure_2_1(closure_2_2[10]);
      });
    });
  };
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp2 {
}
prototype = new prototype();
let result = require("obj132").fileFinishedImporting("modules/feedback/native/FeedbackManager.tsx");

export default prototype;