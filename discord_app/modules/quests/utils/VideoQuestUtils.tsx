// discord_app/modules/quests/utils/VideoQuestUtils.tsx
import util from "../../../intl/index.native.tsx";
import NavigationRouteUtils from "../../main_tabs_v2/helpers/NavigationRouteUtils.native.tsx";
import QuestDataUtils from "QuestDataUtils.tsx";
import AnalyticsActions from "../lib/analytics/AnalyticsActions.tsx";
import QuestTaskUtils from "QuestTaskUtils.tsx";
import QuestActionCreators from "../QuestActionCreators.tsx";
import NetworkStore from "../../../stores/NetworkStore.tsx";
import QuestStore from "../QuestStore.tsx";
import VideoQuestUIStore from "../VideoQuestUIStore.tsx";

require = fn;
const AnalyticEvents = fn(1074).AnalyticEvents;
const portrait = "portrait";
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/utils/VideoQuestUtils.tsx");

export const getVideoQuestWatchCtaText = fn(11513).getVideoQuestWatchCtaText;
export const sendVideoProgress = function sendVideoProgress(quest, currentTime) {
  let isQuestExpiredResult = QuestDataUtils.isQuestExpired(quest);
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
    QuestActionCreators.updateVideoProgress(quest.id, currentTime);
    const tmpResult = QuestActionCreators;
  }
};
export const getVideoOrientation = function getVideoOrientation(assets) {
  const video = assets.assets.video;
  if (null != video) {
    if (null != video.width) {
      if (null != video.height) {
        let str = "portrait";
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
    if (arg1) {
      const intl5 = tmp(1114).intl;
      return intl5.string(tmp(1114).t["ij5E/5"]);
    } else {
      const remainingTaskTime = tmp(7724).getRemainingTaskTime(questTaskDetails);
      ({ minutes, seconds } = remainingTaskTime);
      if (minutes > 0) {
        if (seconds > 0) {
          const intl3 = tmp(1114).intl;
          const time = { minutes, seconds };
          let formatToPlainStringResult = intl3.formatToPlainString(tmp(1114).t["lW/66D"], time);
        }
        const intl4 = tmp(1114).intl;
        let obj = { remainingTime: formatToPlainStringResult };
        return intl4.formatToPlainString(tmp(1114).t.nzYZrt, obj);
      }
      if (minutes > 0) {
        const intl2 = tmp(1114).intl;
        obj = { count: minutes };
        formatToPlainStringResult = intl2.formatToPlainString(tmp(1114).t["SxnF/O"], obj);
      } else {
        const intl = tmp(1114).intl;
        const obj1 = { count: seconds };
        formatToPlainStringResult = intl.formatToPlainString(tmp(1114).t["0BZpdi"], obj1);
      }
      const tmpResult = tmp(7724);
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
    const intl = util.intl;
    buttonLabel = intl.string(util.t.iiTtpJ);
  }
  return buttonLabel;
};
export const handleVideoQuestModalClose = function handleVideoQuestModalClose(arg0) {
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
      let obj2 = QuestDataUtils;
      let isQuestExpiredResult = obj2.isQuestExpired(quest);
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
        tmp6(11276).updateVideoProgress(quest.id, videoProgress.maxTimestampSec);
        const tmp6Result = tmp6(11276);
      }
      tmp6 = require;
    }
    ({ maxTimestampSec, duration } = videoProgress);
    let num2 = 0;
    if (maxTimestampSec > 0) {
      num2 = 0;
      if (duration > 0) {
        let num4 = 1;
        if (maxTimestampSec < duration) {
          const _Math = Math;
          const _Math2 = Math;
          num4 = Math.min(1, Math.round((maxTimestampSec / duration) * 100) / 100);
        }
        num2 = num4;
      }
    }
    let obj = { questId, event: AnalyticEvents.QUEST_VIDEO_PROGRESSED, properties: null, sourceQuestContent: null };
    obj = { progress: num2, video_timestamp_seconds: videoProgress.maxTimestampSec, video_session_id: videoSessionId };
    obj.properties = obj;
    obj.sourceQuestContent = sourceQuestContent;
    AnalyticsActions.trackQuestEvent(obj);
    const obj1 = {
      questId,
      event: AnalyticEvents.QUEST_VIDEO_MODAL_CLOSED,
      properties: null,
      sourceQuestContent: null,
    };
    obj2 = {
      video_progress: num2,
      video_session_id: videoSessionId,
      network_connection_speed: NetworkStore.getEffectiveConnectionSpeed(),
    };
    obj1.properties = obj2;
    obj1.sourceQuestContent = sourceQuestContent;
    AnalyticsActions.trackQuestEvent(obj1);
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
  let isModalOpenResult = QuestTaskUtils.hasWatchVideoTasks(id);
  if (isModalOpenResult) {
    const _HermesInternal = HermesInternal;
    isModalOpenResult = NavigationRouteUtils.isModalOpen("VIDEO-QUEST-" + id.id);
  }
  return isModalOpenResult;
};
