// discord_app/modules/quests/utils/VideoQuestUtils.tsx
import Constants from "../../../Constants.tsx";
import intl6 from "../../../intl/index.native.tsx";
import NavigationRouteUtils from "../../main_tabs_v2/helpers/NavigationRouteUtils.native.tsx";
import QuestDataUtils from "QuestDataUtils.tsx";
import AnalyticsActions from "../lib/analytics/AnalyticsActions.tsx";
import QuestTaskUtils from "QuestTaskUtils.tsx";
import QuestActionCreators from "../QuestActionCreators.tsx";
import MobileQuestVideoWatchCtaCopy from "MobileQuestVideoWatchCtaCopy.tsx";
import NetworkStore from "../../../stores/NetworkStore.tsx";
import QuestStore from "../QuestStore.tsx";
import VideoQuestUIStore from "../VideoQuestUIStore.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const AnalyticEvents = Constants.AnalyticEvents;
const portrait = "portrait";
const result = size.fileFinishedImporting("modules/quests/utils/VideoQuestUtils.tsx");

export const getVideoQuestWatchCtaText = MobileQuestVideoWatchCtaCopy.getVideoQuestWatchCtaText;
export const sendVideoProgress = function sendVideoProgress(quest, currentTime) {
  const obj = QuestDataUtils;
  let isQuestExpiredResult = obj.isQuestExpired(quest);
  if (!isQuestExpiredResult) {
    const userStatus = quest.userStatus;
    let enrolledAt;
    if (userStatus != null) {
      enrolledAt = userStatus.enrolledAt;
    }
    isQuestExpiredResult = null == enrolledAt;
  }
  if (!isQuestExpiredResult) {
    const userStatus2 = quest.userStatus;
    let completedAt;
    if (userStatus2 != null) {
      completedAt = userStatus2.completedAt;
    }
    isQuestExpiredResult = null != completedAt;
  }
  if (!isQuestExpiredResult) {
    const tmpResult = QuestActionCreators;
    tmpResult.updateVideoProgress(quest.id, currentTime);
  }
};
export const getVideoOrientation = function getVideoOrientation(assets) {
  const video = assets.assets.video;
  if (null != video) {
    if (null != video.width) {
      let str;
      if (null != video.height) {
        str = "portrait";
        if (video.width > video.height) {
          str = "landscape";
        }
      }
      return str;
    }
  }
  str = portrait;
};
export const getVideoQuestProgressRemainingAccessibilityLabel =
  function getVideoQuestProgressRemainingAccessibilityLabel(questTaskDetails, arg1) {
    let minutes;
    let seconds;
    const tmp3 = arg1;
    if (tmp3) {
      const intl5 = intl6.intl;
      return intl5.string(intl6.t["ij5E/5"]);
    } else {
      let formatToPlainStringResult;
      const tmpResult = QuestTaskUtils;
      const remainingTaskTime = tmpResult.getRemainingTaskTime(questTaskDetails);
      ({ minutes, seconds } = remainingTaskTime);
      if (minutes > 0) {
        if (seconds > 0) {
          const intl3 = intl6.intl;
          const time = { minutes, seconds };
          formatToPlainStringResult = intl3.formatToPlainString(intl6.t["lW/66D"], time);
        }
        const intl4 = intl6.intl;
        const obj = { remainingTime: formatToPlainStringResult };
        return intl4.formatToPlainString(intl6.t.nzYZrt, obj);
      }
      if (minutes > 0) {
        const intl2 = intl6.intl;
        const obj2 = { count: minutes };
        formatToPlainStringResult = intl2.formatToPlainString(intl6.t["SxnF/O"], obj2);
      } else {
        const intl = intl6.intl;
        const obj3 = { count: seconds };
        formatToPlainStringResult = intl.formatToPlainString(intl6.t["0BZpdi"], obj3);
      }
    }
  };
export const formatVideoProgressRatio = function formatVideoProgressRatio(maxVideoProgressSeconds, current) {
  let num = 0;
  if (maxVideoProgressSeconds > 0) {
    num = 0;
    if (current > 0) {
      let num3 = 1;
      if (maxVideoProgressSeconds < current) {
        const _Math = Math;
        const _Math2 = Math;
        num3 = Math.min(1, Math.round((maxVideoProgressSeconds / current) * 100) / 100);
      }
      num = num3;
    }
  }
  return num;
};
export const getVideoQuestEndCardCtaText = function getVideoQuestEndCardCtaText(ctaConfig) {
  let buttonLabel = ctaConfig.ctaConfig.buttonLabel;
  if (buttonLabel == null) {
    const intl = intl6.intl;
    buttonLabel = intl.string(intl6.t.iiTtpJ);
  }
  return buttonLabel;
};
export const handleVideoQuestModalClose = function handleVideoQuestModalClose(arg0) {
  let duration;
  let maxTimestampSec2;
  let obj2;
  let obj6;
  let questId;
  let sourceQuestContent;
  let videoSessionId;
  ({ questId, sourceQuestContent, videoSessionId } = arg0);
  const state = VideoQuestUIStore.getState();
  state.setTranscriptEnabled(false);
  const state1 = VideoQuestUIStore.getState();
  const videoProgress = state1.getVideoProgress(questId);
  if (null != videoProgress) {
    const quest = QuestStore.getQuest(questId);
    let tmp4 = null != quest;
    if (tmp4) {
      const userStatus = quest.userStatus;
      let enrolledAt;
      if (userStatus != null) {
        enrolledAt = userStatus.enrolledAt;
      }
      tmp4 = null != enrolledAt;
    }
    if (tmp4) {
      const userStatus2 = quest.userStatus;
      let completedAt;
      if (userStatus2 != null) {
        completedAt = userStatus2.completedAt;
      }
      tmp4 = null == completedAt;
    }
    if (tmp4) {
      const maxTimestampSec = videoProgress.maxTimestampSec;
      const obj3 = QuestDataUtils;
      let isQuestExpiredResult = obj3.isQuestExpired(quest);
      if (!isQuestExpiredResult) {
        const userStatus3 = quest.userStatus;
        let enrolledAt1;
        if (userStatus3 != null) {
          enrolledAt1 = userStatus3.enrolledAt;
        }
        isQuestExpiredResult = null == enrolledAt1;
      }
      if (!isQuestExpiredResult) {
        const userStatus4 = quest.userStatus;
        let completedAt1;
        if (userStatus4 != null) {
          completedAt1 = userStatus4.completedAt;
        }
        isQuestExpiredResult = null != completedAt1;
      }
      if (!isQuestExpiredResult) {
        const tmp6Result = QuestActionCreators;
        tmp6Result.updateVideoProgress(quest.id, maxTimestampSec);
      }
    }
    ({ maxTimestampSec: maxTimestampSec2, duration } = videoProgress);
    let num2 = 0;
    if (maxTimestampSec2 > 0) {
      num2 = 0;
      if (duration > 0) {
        let num4 = 1;
        if (maxTimestampSec2 < duration) {
          const _Math = Math;
          const _Math2 = Math;
          num4 = Math.min(1, Math.round((maxTimestampSec2 / duration) * 100) / 100);
        }
        num2 = num4;
      }
    }
    const obj = { questId, event: AnalyticEvents.QUEST_VIDEO_PROGRESSED, properties: obj2, sourceQuestContent };
    obj2 = { progress: num2, video_timestamp_seconds: videoProgress.maxTimestampSec, video_session_id: videoSessionId };
    const obj5 = AnalyticsActions;
    obj5.trackQuestEvent(obj);
    const obj4 = { questId, event: AnalyticEvents.QUEST_VIDEO_MODAL_CLOSED, properties: obj6, sourceQuestContent };
    obj6 = {
      video_progress: num2,
      video_session_id: videoSessionId,
      network_connection_speed: NetworkStore.getEffectiveConnectionSpeed(),
    };
    const trackQuestEvent = AnalyticsActions.trackQuestEvent;
    AnalyticsActions;
    trackQuestEvent(obj4);
  }
};
export const getVideoQuestModalKey = function getVideoQuestModalKey(questId) {
  return "VIDEO-QUEST-" + questId;
};
export const computeMaxSeekableTime = function computeMaxSeekableTime(arg0, arg1) {
  let bound = arg0;
  if (arg0 >= arg1 - 1) {
    const _Math = Math;
    bound = Math.max(arg0, arg1);
  }
  return bound;
};
export const isVideoQuestProgressing = function isVideoQuestProgressing(id) {
  const obj = QuestTaskUtils;
  let isModalOpenResult = obj.hasWatchVideoTasks(id);
  if (isModalOpenResult) {
    const _HermesInternal = HermesInternal;
    isModalOpenResult = NavigationRouteUtils.isModalOpen("VIDEO-QUEST-" + id.id);
  }
  return isModalOpenResult;
};
