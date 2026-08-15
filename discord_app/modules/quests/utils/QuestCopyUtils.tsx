// discord_app/modules/quests/utils/QuestCopyUtils.tsx
import QuestsExperimentLocations from "QuestsExperimentLocations";
import { getSystemLocale } from "../../../intl/index.native.tsx";
import { _copy } from "../../../utils/ClipboardUtils.native.tsx";
import { apexExperiment } from "../experiments/AdAnalyticsInterfaceExperiment.tsx";

let c3;
let c4;
let obj1;
({ QuestHomeSortMethods: obj1, RewardFilterTypes: c3, TaskFilterTypes: c4 } = QuestsExperimentLocations);
let result = require("apexExperiment").fileFinishedImporting("modules/quests/utils/QuestCopyUtils.tsx");

export const getContextualEntrypointHeading = function getContextualEntrypointHeading(taskDetails) {
  let quest;
  let thirdPartyTaskDetails;
  ({ quest, thirdPartyTaskDetails } = taskDetails);
  const userStatus = quest.userStatus;
  let completedAt;
  if (userStatus != null) {
    completedAt = userStatus.completedAt;
  }
  if (null != completedAt) {
    const intl6 = getSystemLocale.intl;
    return intl6.string(getSystemLocale.t.BzFeTF);
  } else {
    const userStatus2 = quest.userStatus;
    let enrolledAt;
    if (userStatus2 != null) {
      enrolledAt = userStatus2.enrolledAt;
    }
    if (null != enrolledAt) {
      let percentComplete = taskDetails.taskDetails.percentComplete;
      if (null != thirdPartyTaskDetails) {
        percentComplete = thirdPartyTaskDetails.percentComplete;
      }
      if (percentComplete >= 0.75) {
        const intl5 = getSystemLocale.intl;
        let stringResult = intl5.string(getSystemLocale.t.gvCR4H);
      } else {
        if (percentComplete >= 0.45) {
          if (percentComplete <= 0.55) {
            const intl4 = getSystemLocale.intl;
            stringResult = intl4.string(getSystemLocale.t.JNx8sG);
          }
        }
        if (percentComplete > 0) {
          const intl3 = getSystemLocale.intl;
          stringResult = intl3.string(getSystemLocale.t.JMbfnc);
        } else {
          const intl2 = getSystemLocale.intl;
          stringResult = intl2.string(getSystemLocale.t["7e5k7L"]);
        }
      }
      return stringResult;
    } else {
      const intl = getSystemLocale.intl;
      const obj = { questName: null };
      obj[0] = quest.config.messages.questName;
      return intl.formatToPlainString(getSystemLocale.t.EQa7os, obj);
    }
  }
};
export const getDisclosureText = function getDisclosureText(isTargetedDisclosure) {
  let cosponsorName;
  let gamePublisher;
  ({ gamePublisher, cosponsorName } = isTargetedDisclosure);
  if (isTargetedDisclosure.isTargetedDisclosure) {
    if (isTargetedDisclosure.isContextualDisclosure) {
      const intl5 = getSystemLocale.intl;
      let stringResult = intl5.string(getSystemLocale.t.nPg6f1);
    } else {
      if (null == cosponsorName) {
        const intl3 = getSystemLocale.intl;
        let obj = { gamePublisher: null };
        obj[0] = gamePublisher;
        let formatToPlainStringResult = intl3.formatToPlainString(getSystemLocale.t.Piihy1, obj);
        let tmp10 = require;
      } else {
        const intl2 = getSystemLocale.intl;
        obj = { gamePublisher: null, cosponsorName: null };
        obj[0] = gamePublisher;
        obj[1] = cosponsorName;
        formatToPlainStringResult = intl2.formatToPlainString(getSystemLocale.t.DV47Gy, obj);
        tmp10 = require;
      }
      const intl4 = tmp10(1236).intl;
      const _HermesInternal = HermesInternal;
      stringResult = "" + formatToPlainStringResult + " " + intl4.string(tmp10(1236).t.fEbrT8);
    }
  } else {
    const intl = getSystemLocale.intl;
    const formatToPlainString = intl.formatToPlainString;
    const t = getSystemLocale.t;
    if (tmp) {
      const obj1 = { gamePublisher: null };
      obj1[0] = gamePublisher;
      let formatToPlainStringResult1 = formatToPlainString(t.rctMRl, obj1);
    } else {
      obj = { gamePublisher: null, gameTitle: null };
      obj[0] = gamePublisher;
      obj[1] = tmp2;
      formatToPlainStringResult1 = formatToPlainString(t["5bQWNG"], obj);
    }
    return formatToPlainStringResult1;
  }
};
export const getExternalCtaLabel = function getExternalCtaLabel(quest) {
  return quest.config.ctaConfig.buttonLabel;
};
export const getSortMethodText = function getSortMethodText(arg0) {
  if (constants.SUGGESTED === arg0) {
    const intl4 = getSystemLocale.intl;
    return intl4.string(getSystemLocale.t.gBfXPZ);
  } else if (tmp.MOST_RECENT === arg0) {
    const intl3 = getSystemLocale.intl;
    return intl3.string(getSystemLocale.t.K6oEu2);
  } else if (tmp.EXPIRING_SOON === arg0) {
    const intl2 = getSystemLocale.intl;
    return intl2.string(getSystemLocale.t.IB22n3);
  } else if (tmp.RECENTLY_ENROLLED === arg0) {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["BB+2tX"]);
  }
};
export const getFilterTypeText = function getFilterTypeText(filter) {
  if (constants2.VIRTUAL_CURRENCY === filter) {
    const intl5 = getSystemLocale.intl;
    return intl5.string(getSystemLocale.t.ElYQFS);
  } else if (tmp.COLLECTIBLE === filter) {
    const intl4 = getSystemLocale.intl;
    return intl4.string(getSystemLocale.t.Jg17Ut);
  } else if (tmp.IN_GAME === filter) {
    const intl3 = getSystemLocale.intl;
    return intl3.string(getSystemLocale.t["O/J2kr"]);
  } else if (constants3.VIDEO === filter) {
    const intl2 = getSystemLocale.intl;
    return intl2.string(getSystemLocale.t.e0iISA);
  } else if (tmp12.PLAY === filter) {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["1nJR4p"]);
  }
};
export const getFilterGroupHeadingText = function getFilterGroupHeadingText(arg0) {
  if ("reward" === arg0) {
    const intl2 = getSystemLocale.intl;
    return intl2.string(getSystemLocale.t.vjLqAU);
  } else if ("task" === arg0) {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.Hufmss);
  }
};
export const getQuestUrl = function getQuestUrl(id) {
  return "" + location.protocol + "//" + location.host + "/quests/" + id;
};
export const getCtaLink = function getCtaLink(config) {
  return config.ctaConfig.link;
};
export const copyShareLink = function copyShareLink(id, ctaContent) {
  ctaContent = ctaContent.ctaContent;
  let obj = apexExperiment;
  if (obj.shouldMigrateToAdAnalyticsInterface(apexExperiment.AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL, "copy_share_link")) {
    let tmpResult = tmp(9503);
    obj = { type: null, adCreativeType: null, adCreativeId: null, questContentCTA: null, surfaceId: null, sourceQuestContent: null, questContentPosition: null, impressionId: null };
    obj[0] = tmp(9507).AdUserActionType.CLICK_INTERNAL;
    obj[1] = tmp(7469).AdCreativeType.QUEST;
    obj[2] = id;
    obj[3] = ctaContent;
    ({ content: obj5[4], sourceQuestContent: obj5[5], position: obj5[6], impressionId: obj5[7] } = ctaContent);
    tmpResult.captureAdUserAction(obj);
  } else {
    tmpResult = tmp(7470);
    obj = { questId: null, questContent: null, questContentCTA: null, questContentPosition: null, impressionId: null, sourceQuestContent: null };
    obj[0] = id;
    obj[1] = ctaContent.content;
    obj[2] = ctaContent;
    ({ position: obj3[3], impressionId: obj3[4], sourceQuestContent: obj3[5] } = ctaContent);
    const result = tmpResult.trackQuestContentClicked(obj);
  }
  _copy.copy("" + location.protocol + "//" + location.host + "/quests/" + id);
};
export const getDefaultReward = function getDefaultReward(config) {
  if (0 === config.rewardsConfig.rewards.length) {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const error = new Error("Quest " + config.id + " has no rewards configured");
    throw error;
  } else {
    return config.rewardsConfig.rewards[0];
  }
};