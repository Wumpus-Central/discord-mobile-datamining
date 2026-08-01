// === Module 16189: prototype ===

// Module 16189 (prototype)
import addApplication from "addApplication";
import ensureGuildLoaded from "ensureGuildLoaded";
import createRTCConnection from "createRTCConnection";
import initialize from "initialize";
import { FeedbackType } from "FeedbackRating";
import "optOutEligibilityCheck";

let require = arg1;
let prototype = function FeedbackManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  const require = applyArgumentsResult;
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
      const result = streamKey.possiblyShowFeedbackModal(outer1_7.STREAM, () => {
        let obj = streamKey(outer1_2[6]);
        const decodeStreamKeyResult = obj.decodeStreamKey(streamKey);
        streamKey = decodeStreamKeyResult;
        const channel = outer1_4.getChannel(decodeStreamKeyResult.channelId);
        let isGuildStageVoiceResult;
        if (channel != null) {
          isGuildStageVoiceResult = channel.isGuildStageVoice();
        }
        if (!isGuildStageVoiceResult) {
          let videoStats = outer1_6.getVideoStats(tmp3);
          if (videoStats == null) {
            videoStats = {};
          }
          obj = { media_session_id: null, rtc_connection_id: null, stream_region: null, max_viewers: null };
          obj[0] = outer1_6.getMediaSessionId(tmp3);
          obj[1] = outer1_6.getRtcConnectionId(tmp3);
          obj[2] = outer1_6.getRegion(tmp3);
          obj[3] = outer1_6.getMaxViewers(tmp3);
          const merged = Object.assign(videoStats);
          let closure_2 = tmp(tmp2[8])(tmp2[7], tmp2.paths);
          tmp(tmp2[9]).runAfterInteractions(() => {
            let obj = outer2_1(outer2_2[10]);
            obj = { stream: closure_0, analyticsData: obj };
            obj.openLazy(closure_2, "StreamFeedback" + decodeStreamKeyResult, obj);
          });
          const tmpResult = tmp(tmp2[9]);
        }
      });
    }
  };
  applyArgumentsResult.handleShowActivityFeedback = function handleShowActivityFeedback(applicationId) {
    applicationId = applicationId.applicationId;
    const _location = applicationId.location;
    let application;
    let channel;
    application = outer1_3.getApplication(applicationId);
    channel = outer1_4.getChannel(applyArgumentsResult(outer1_2[11]).getEmbeddedActivityLocationChannelId(_location));
    if (tmp2) {
      const result = applicationId.possiblyShowFeedbackModal(outer1_7.ACTIVITY, () => {
        let closure_0 = applicationId(application[8])(application[12], application.paths);
        let obj = { media_session_id: outer1_5.getMediaSessionId(), rtc_connection_id: outer1_5.getRTCConnectionId() };
        applicationId(application[9]).runAfterInteractions(() => {
          let obj = _location(application[10]);
          obj = { analyticsData: obj, activityApplication: outer1_2, channel: outer1_3, embeddedActivityLocation: obj };
          obj.openLazy(closure_0, "ActivityFeedback" + obj.id + closure_0, obj);
        });
      });
    }
  };
  applyArgumentsResult.handleShowVoiceFeedback = function handleShowVoiceFeedback(analyticsData) {
    analyticsData = analyticsData.analyticsData;
    const result = analyticsData.possiblyShowFeedbackModal(outer1_7.VOICE, () => {
      let closure_0 = analyticsData(outer1_2[8])(outer1_2[13], outer1_2.paths);
      analyticsData(outer1_2[9]).runAfterInteractions(() => {
        let obj = outer2_1(outer2_2[10]);
        obj = { analyticsData: channel_id };
        obj.openLazy(channel_id, "VoiceFeedback" + channel_id.channel_id, obj);
      });
    });
  };
  applyArgumentsResult.handleInAppReportsFeedback = function handleInAppReportsFeedback(arg0) {
    let closure_0;
    let closure_1;
    ({ reportId: closure_0, reportType: closure_1 } = arg0);
    const result = applyArgumentsResult.possiblyShowFeedbackModal(outer1_7.IN_APP_REPORTS, () => {
      let closure_0 = outer1_0(outer1_2[8])(outer1_2[14], outer1_2.paths);
      outer1_0(outer1_2[9]).runAfterInteractions(() => {
        let str = closure_0;
        if (closure_0 == null) {
          str = "";
        }
        outer2_1(outer2_2[10]).openLazy(closure_0, "ReportingFeedback" + outer1_1 + str, { reportId: closure_0, reportType: outer1_1 });
      });
    });
  };
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp2 {
}
prototype = new prototype();
let result = require("createRTCConnection").fileFinishedImporting("modules/feedback/native/FeedbackManager.tsx");

export default prototype;