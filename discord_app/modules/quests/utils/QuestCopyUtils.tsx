// === Module 11295: QuestCopyUtils ===

// Module 11295 (QuestCopyUtils)
import util from "util" /* 1114 */;
import ClipboardUtils from "ClipboardUtils" /* 7190 */;
import AdAnalyticsInterfaceExperiment from "AdAnalyticsInterfaceExperiment" /* 11192 */;
import QuestConstants from "QuestConstants" /* 5444 */;
import size from "module_2" /* 2 */;

({ QuestHomeSortMethods: c2, RewardFilterTypes: c3, TaskFilterTypes: closure_4 } = QuestConstants);
let result = size.fileFinishedImporting("modules/quests/utils/QuestCopyUtils.tsx");

export const getContextualEntrypointHeading = function getContextualEntrypointHeading(taskDetails) {
  ({ quest, thirdPartyTaskDetails } = taskDetails);
  const userStatus = quest.userStatus;
  let completedAt;
  if (userStatus != null) {
    completedAt = userStatus.completedAt;
  }
  if (null != completedAt) {
    const intl6 = util.intl;
    return intl6.string(util.t.BzFeTF);
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
        const intl5 = util.intl;
        let stringResult = intl5.string(util.t.gvCR4H);
      } else {
        if (percentComplete >= 0.45) {
          if (percentComplete <= 0.55) {
            const intl4 = util.intl;
            stringResult = intl4.string(util.t.JNx8sG);
          }
        }
        if (percentComplete > 0) {
          const intl3 = util.intl;
          stringResult = intl3.string(util.t.JMbfnc);
        } else {
          const intl2 = util.intl;
          stringResult = intl2.string(util.t["7e5k7L"]);
        }
      }
      return stringResult;
    } else {
      const intl = util.intl;
      const obj = { questName: quest.config.messages.questName };
      return intl.formatToPlainString(util.t.EQa7os, obj);
    }
  }
};
export const getDisclosureText = function getDisclosureText(arg0) {
  ({ gamePublisher, gameTitle, cosponsorName } = arg0);
  let nPg6f1 = dependencyMap;
  ({ adCreativeType, isTargetedDisclosure, isContextualDisclosure, isVideoQuest } = arg0);
  const intl = util.intl;
  const stringResult = intl.string(util.t.fEbrT8);
  if (isTargetedDisclosure) {
    if (isContextualDisclosure) {
      const intl5 = tmp(1114).intl;
      nPg6f1 = tmp(1114).t.nPg6f1;
      let stringResult1 = intl5.string(nPg6f1);
    } else {
      if (null == cosponsorName) {
        const intl4 = tmp(1114).intl;
        let obj = { gamePublisher };
        let formatToPlainStringResult = intl4.formatToPlainString(tmp(1114).t.Piihy1, obj);
      } else {
        const intl3 = tmp(1114).intl;
        obj = { gamePublisher, cosponsorName };
        formatToPlainStringResult = intl3.formatToPlainString(tmp(1114).t.DV47Gy, obj);
      }
      const _HermesInternal = HermesInternal;
      stringResult1 = "" + formatToPlainStringResult + " " + stringResult;
    }
  } else if (adCreativeType !== tmp(5451).AdCreativeType.QUEST) {
    return stringResult;
  } else {
    const intl2 = tmp(1114).intl;
    const formatToPlainString = intl2.formatToPlainString;
    let t = tmp(1114).t;
    if (isVideoQuest) {
      t = { gamePublisher };
      let formatToPlainStringResult1 = formatToPlainString(t.rctMRl, t);
    } else {
      const obj1 = { gamePublisher, gameTitle: null };
      if (gameTitle == null) {
        gameTitle = "";
      }
      obj1.gameTitle = gameTitle;
      formatToPlainStringResult1 = formatToPlainString(t["5bQWNG"], obj1);
    }
  }
};
export const getExternalCtaLabel = function getExternalCtaLabel(quest) {
  return quest.config.ctaConfig.buttonLabel;
};
export const getSortMethodText = function getSortMethodText(arg0) {
  if (constants.SUGGESTED === arg0) {
    const intl4 = util.intl;
    return intl4.string(util.t.gBfXPZ);
  } else if (tmp.MOST_RECENT === arg0) {
    const intl3 = util.intl;
    return intl3.string(util.t.K6oEu2);
  } else if (tmp.EXPIRING_SOON === arg0) {
    const intl2 = util.intl;
    return intl2.string(util.t.IB22n3);
  } else if (tmp.RECENTLY_ENROLLED === arg0) {
    const intl = util.intl;
    return intl.string(util.t["BB+2tX"]);
  }
};
export const getFilterTypeText = function getFilterTypeText(filter) {
  if (constants2.VIRTUAL_CURRENCY === filter) {
    const intl5 = util.intl;
    return intl5.string(util.t.ElYQFS);
  } else if (tmp.COLLECTIBLE === filter) {
    const intl4 = util.intl;
    return intl4.string(util.t.Jg17Ut);
  } else if (tmp.IN_GAME === filter) {
    const intl3 = util.intl;
    return intl3.string(util.t["O/J2kr"]);
  } else if (constants3.VIDEO === filter) {
    const intl2 = util.intl;
    return intl2.string(util.t.e0iISA);
  } else if (tmp12.PLAY === filter) {
    const intl = util.intl;
    return intl.string(util.t["1nJR4p"]);
  }
};
export const getFilterGroupHeadingText = function getFilterGroupHeadingText(arg0) {
  if ("reward" === arg0) {
    const intl2 = util.intl;
    return intl2.string(util.t.vjLqAU);
  } else if ("task" === arg0) {
    const intl = util.intl;
    return intl.string(util.t.Hufmss);
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
  let obj = AdAnalyticsInterfaceExperiment;
  if (obj.shouldMigrateToAdAnalyticsInterface(AdAnalyticsInterfaceExperiment.AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL, "copy_share_link")) {
    let tmpResult = tmp(11193);
    obj = { type: tmp(11197).AdUserActionType.CLICK_INTERNAL, adCreativeType: tmp(5451).AdCreativeType.QUEST, adCreativeId: id, questContentCTA: ctaContent, surfaceId: null, sourceQuestContent: null, questContentPosition: null, impressionId: null };
    ({ content: obj5.surfaceId, sourceQuestContent: obj5.sourceQuestContent, position: obj5.questContentPosition, impressionId: obj5.impressionId } = ctaContent);
    tmpResult.captureAdUserAction(obj);
  } else {
    tmpResult = tmp(7718);
    obj = { questId: id, questContent: ctaContent.content, questContentCTA: ctaContent, questContentPosition: null, impressionId: null, sourceQuestContent: null };
    ({ position: obj3.questContentPosition, impressionId: obj3.impressionId, sourceQuestContent: obj3.sourceQuestContent } = ctaContent);
    const result = tmpResult.trackQuestContentClicked(obj);
  }
  ClipboardUtils.copy("" + location.protocol + "//" + location.host + "/quests/" + id);
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