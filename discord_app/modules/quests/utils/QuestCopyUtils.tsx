// discord_app/modules/quests/utils/QuestCopyUtils.tsx
import QuestsExperimentLocations from "QuestsExperimentLocations";

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
    const intl6 = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl6.string(require("../../../intl/index.native.tsx") /* getSystemLocale */.t.BzFeTF);
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
        const intl5 = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
        let stringResult = intl5.string(require("../../../intl/index.native.tsx") /* getSystemLocale */.t.gvCR4H);
      } else {
        if (percentComplete >= 0.45) {
          if (percentComplete <= 0.55) {
            const intl4 = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
            stringResult = intl4.string(require("../../../intl/index.native.tsx") /* getSystemLocale */.t.JNx8sG);
          }
        }
        if (percentComplete > 0) {
          const intl3 = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
          stringResult = intl3.string(require("../../../intl/index.native.tsx") /* getSystemLocale */.t.JMbfnc);
        } else {
          const intl2 = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
          stringResult = intl2.string(require("../../../intl/index.native.tsx") /* getSystemLocale */.t["7e5k7L"]);
        }
      }
      return stringResult;
    } else {
      const intl = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
      const obj = { questName: null };
      obj[0] = quest.config.messages.questName;
      return intl.formatToPlainString(require("../../../intl/index.native.tsx") /* getSystemLocale */.t.EQa7os, obj);
    }
  }
};
export const getDisclosureText = function getDisclosureText(isTargetedDisclosure) {
  let cosponsorName;
  let gamePublisher;
  ({ gamePublisher, cosponsorName } = isTargetedDisclosure);
  if (isTargetedDisclosure.isTargetedDisclosure) {
    if (isTargetedDisclosure.isContextualDisclosure) {
      const intl5 = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
      let stringResult = intl5.string(require("../../../intl/index.native.tsx") /* getSystemLocale */.t.nPg6f1);
    } else {
      if (null == cosponsorName) {
        const intl3 = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
        let obj = { gamePublisher: null };
        obj[0] = gamePublisher;
        let formatToPlainStringResult = intl3.formatToPlainString(require("../../../intl/index.native.tsx") /* getSystemLocale */.t.Piihy1, obj);
        let tmp10 = require;
      } else {
        const intl2 = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
        obj = { gamePublisher: null, cosponsorName: null };
        obj[0] = gamePublisher;
        obj[1] = cosponsorName;
        formatToPlainStringResult = intl2.formatToPlainString(require("../../../intl/index.native.tsx") /* getSystemLocale */.t.DV47Gy, obj);
        tmp10 = require;
      }
      const intl4 = tmp10(1236).intl;
      const _HermesInternal = HermesInternal;
      stringResult = "" + formatToPlainStringResult + " " + intl4.string(tmp10(1236).t.fEbrT8);
    }
  } else {
    const intl = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    const formatToPlainString = intl.formatToPlainString;
    const t = require("../../../intl/index.native.tsx") /* getSystemLocale */.t;
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
    const intl4 = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl4.string(require("../../../intl/index.native.tsx") /* getSystemLocale */.t.gBfXPZ);
  } else if (tmp.MOST_RECENT === arg0) {
    const intl3 = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl3.string(require("../../../intl/index.native.tsx") /* getSystemLocale */.t.K6oEu2);
  } else if (tmp.EXPIRING_SOON === arg0) {
    const intl2 = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl2.string(require("../../../intl/index.native.tsx") /* getSystemLocale */.t.IB22n3);
  } else if (tmp.RECENTLY_ENROLLED === arg0) {
    const intl = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../../intl/index.native.tsx") /* getSystemLocale */.t["BB+2tX"]);
  }
};
export const getFilterTypeText = function getFilterTypeText(filter) {
  if (constants2.VIRTUAL_CURRENCY === filter) {
    const intl5 = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl5.string(require("../../../intl/index.native.tsx") /* getSystemLocale */.t.ElYQFS);
  } else if (tmp.COLLECTIBLE === filter) {
    const intl4 = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl4.string(require("../../../intl/index.native.tsx") /* getSystemLocale */.t.Jg17Ut);
  } else if (tmp.IN_GAME === filter) {
    const intl3 = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl3.string(require("../../../intl/index.native.tsx") /* getSystemLocale */.t["O/J2kr"]);
  } else if (constants3.VIDEO === filter) {
    const intl2 = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl2.string(require("../../../intl/index.native.tsx") /* getSystemLocale */.t.e0iISA);
  } else if (tmp12.PLAY === filter) {
    const intl = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../../intl/index.native.tsx") /* getSystemLocale */.t["1nJR4p"]);
  }
};
export const getFilterGroupHeadingText = function getFilterGroupHeadingText(arg0) {
  if ("reward" === arg0) {
    const intl2 = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl2.string(require("../../../intl/index.native.tsx") /* getSystemLocale */.t.vjLqAU);
  } else if ("task" === arg0) {
    const intl = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../../intl/index.native.tsx") /* getSystemLocale */.t.Hufmss);
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
  let obj = require("../experiments/AdAnalyticsInterfaceExperiment.tsx") /* apexExperiment */;
  if (obj.shouldMigrateToAdAnalyticsInterface(require("../experiments/AdAnalyticsInterfaceExperiment.tsx") /* apexExperiment */.AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL, "copy_share_link")) {
    let tmpResult = tmp(9435);
    obj = { type: null, adCreativeType: null, adCreativeId: null, questContentCTA: null, surfaceId: null, sourceQuestContent: null, questContentPosition: null, impressionId: null };
    obj[0] = tmp(9439).AdUserActionType.CLICK_INTERNAL;
    obj[1] = tmp(7108).AdCreativeType.QUEST;
    obj[2] = id;
    obj[3] = ctaContent;
    ({ content: obj5[4], sourceQuestContent: obj5[5], position: obj5[6], impressionId: obj5[7] } = ctaContent);
    tmpResult.captureAdUserAction(obj);
  } else {
    tmpResult = tmp(7097);
    obj = { questId: null, questContent: null, questContentCTA: null, questContentPosition: null, impressionId: null, sourceQuestContent: null };
    obj[0] = id;
    obj[1] = ctaContent.content;
    obj[2] = ctaContent;
    ({ position: obj3[3], impressionId: obj3[4], sourceQuestContent: obj3[5] } = ctaContent);
    const result = tmpResult.trackQuestContentClicked(obj);
  }
  require("../../../utils/ClipboardUtils.native.tsx") /* _copy */.copy("" + location.protocol + "//" + location.host + "/quests/" + id);
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