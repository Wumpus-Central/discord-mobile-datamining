// === Module 10743: getVideoQuestWatchCtaText ===

// Module 10743 (getVideoQuestWatchCtaText)
import getSystemLocale from "getSystemLocale" /* 1236 */;
import coerceMainRoute from "coerceMainRoute" /* 4233 */;
import getQuestDeliveryDataForPlacement from "getQuestDeliveryDataForPlacement" /* 7489 */;
import trackQuestEvent from "trackQuestEvent" /* 7508 */;
import getApplicationIdsByTaskTypes from "getApplicationIdsByTaskTypes" /* 7514 */;
import _manuallyStartConsoleQuest from "_manuallyStartConsoleQuest" /* 10516 */;
import closure_2 from "handleConnectionInfoChange" /* 4569 */;
import closure_3 from "initializeState" /* 7491 */;
import closure_4 from "_toPropertyKey" /* 7493 */;
import { AnalyticEvents } from "ME" /* 676 */;

require = arg1;
const portrait = "portrait";
const result = require("set").fileFinishedImporting("modules/quests/utils/VideoQuestUtils.tsx");

export const getVideoQuestWatchCtaText = require("formatWatchRemainingDurationShort").getVideoQuestWatchCtaText;
export const sendVideoProgress = function sendVideoProgress(quest, currentTime) {
  let isQuestExpiredResult = getQuestDeliveryDataForPlacement.isQuestExpired(quest);
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
    _manuallyStartConsoleQuest.updateVideoProgress(quest.id, currentTime);
    const tmpResult = _manuallyStartConsoleQuest;
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
export const getVideoQuestProgressRemainingAccessibilityLabel = function getVideoQuestProgressRemainingAccessibilityLabel(questTaskDetails, arg1) {
  if (arg1) {
    const intl5 = tmp(1236).intl;
    return intl5.string(tmp(1236).t["ij5E/5"]);
  } else {
    const remainingTaskTime = tmp(7514).getRemainingTaskTime(questTaskDetails);
    ({ minutes, seconds } = remainingTaskTime);
    if (minutes > 0) {
      if (seconds > 0) {
        const intl3 = tmp(1236).intl;
        let obj = { minutes: null, seconds: null };
        obj[0] = minutes;
        obj[1] = seconds;
        let formatToPlainStringResult = intl3.formatToPlainString(tmp(1236).t["lW/66D"], obj);
      }
      const intl4 = tmp(1236).intl;
      obj = { remainingTime: null };
      obj[0] = formatToPlainStringResult;
      return intl4.formatToPlainString(tmp(1236).t.nzYZrt, obj);
    }
    if (minutes > 0) {
      const intl2 = tmp(1236).intl;
      obj1 = { count: null };
      obj1[0] = minutes;
      formatToPlainStringResult = intl2.formatToPlainString(tmp(1236).t["SxnF/O"], obj1);
    } else {
      const intl = tmp(1236).intl;
      const obj2 = { count: null };
      obj2[0] = seconds;
      formatToPlainStringResult = intl.formatToPlainString(tmp(1236).t["0BZpdi"], obj2);
    }
    const tmpResult = tmp(7514);
  }
};
export const formatVideoProgressRatio = function formatVideoProgressRatio(bound, current) {
  let num = 0;
  if (bound > 0) {
    num = 0;
    if (current > 0) {
      let num3 = 1;
      if (bound < current) {
        const _Math = Math;
        const _Math2 = Math;
        num3 = Math.min(1, Math.round(bound / current * 100) / 100);
      }
      num = num3;
    }
  }
  return num;
};
export const getVideoQuestEndCardCtaText = function getVideoQuestEndCardCtaText(ctaConfig) {
  let buttonLabel = ctaConfig.ctaConfig.buttonLabel;
  if (buttonLabel == null) {
    const intl = getSystemLocale.intl;
    buttonLabel = intl.string(getSystemLocale.t.iiTtpJ);
  }
  return buttonLabel;
};
export const handleVideoQuestModalClose = function handleVideoQuestModalClose(arg0) {
  ({ questId, sourceQuestContent, videoSessionId } = arg0);
  const state = store.getState();
  state.setTranscriptEnabled(false);
  const state1 = store.getState();
  const videoProgress = state1.getVideoProgress(questId);
  if (null != videoProgress) {
    quest = quest.getQuest(questId);
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
      let obj2 = getQuestDeliveryDataForPlacement;
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
        tmp6(10516).updateVideoProgress(quest.id, videoProgress.maxTimestampSec);
        const tmp6Result = tmp6(10516);
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
          num4 = Math.min(1, Math.round(maxTimestampSec / duration * 100) / 100);
        }
        num2 = num4;
      }
    }
    let obj = { questId: null, event: null, properties: null, sourceQuestContent: null };
    obj[0] = questId;
    obj[1] = AnalyticEvents.QUEST_VIDEO_PROGRESSED;
    obj = { progress: null, video_timestamp_seconds: null, video_session_id: null };
    obj[0] = num2;
    obj[1] = videoProgress.maxTimestampSec;
    obj[2] = videoSessionId;
    obj[2] = obj;
    obj[3] = sourceQuestContent;
    trackQuestEvent.trackQuestEvent(obj);
    const obj5 = trackQuestEvent;
    obj1 = { questId: null, event: null, properties: null, sourceQuestContent: null };
    obj1[0] = questId;
    obj1[1] = AnalyticEvents.QUEST_VIDEO_MODAL_CLOSED;
    obj2 = { video_progress: null, video_session_id: null, network_connection_speed: null };
    obj2[0] = num2;
    obj2[1] = videoSessionId;
    obj2[2] = effectiveConnectionSpeed.getEffectiveConnectionSpeed();
    obj1[2] = obj2;
    obj1[3] = sourceQuestContent;
    trackQuestEvent.trackQuestEvent(obj1);
    const obj8 = trackQuestEvent;
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
export const isVideoQuestProgressing = function isVideoQuestProgressing(closure_0) {
  let isModalOpenResult = getApplicationIdsByTaskTypes.hasWatchVideoTasks(closure_0);
  if (isModalOpenResult) {
    const _HermesInternal = HermesInternal;
    isModalOpenResult = coerceMainRoute.isModalOpen("VIDEO-QUEST-" + closure_0.id);
  }
  return isModalOpenResult;
};