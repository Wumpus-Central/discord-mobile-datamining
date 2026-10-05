// === Module 10010: QuestCopyUtils ===

// Module 10010 (QuestCopyUtils)
import intl7 from "intl" /* 1126 */;
import AdCreativeType from "AdCreativeType" /* 5630 */;
import ClipboardUtils from "ClipboardUtils" /* 6688 */;
import AnalyticsActions from "AnalyticsActions" /* 7202 */;
import captureAdUserAction2 from "captureAdUserAction" /* 7213 */;
import captureAdUserActionTypes from "captureAdUserActionTypes" /* 7223 */;
import AdAnalyticsInterfaceExperiment from "AdAnalyticsInterfaceExperiment" /* 7224 */;
import QuestConstants from "QuestConstants" /* 5623 */;
import size from "module_2" /* 2 */;

let c2;
let c3;
let closure_4;
({ QuestHomeSortMethods: c2, RewardFilterTypes: c3, TaskFilterTypes: closure_4 } = QuestConstants);
let result = size.fileFinishedImporting("modules/quests/utils/QuestCopyUtils.tsx");

export const getContextualEntrypointHeading = function getContextualEntrypointHeading(taskDetails) {
  let quest;
  let thirdPartyTaskDetails;
  ({ quest, thirdPartyTaskDetails } = taskDetails);
  const userStatus = quest.userStatus;
  let completedAt;
  taskDetails = taskDetails.taskDetails;
  if (userStatus != null) {
    completedAt = userStatus.completedAt;
  }
  if (null != completedAt) {
    const intl6 = intl7.intl;
    return intl6.string(intl7.t.BzFeTF);
  } else {
    const userStatus2 = quest.userStatus;
    let enrolledAt;
    if (userStatus2 != null) {
      enrolledAt = userStatus2.enrolledAt;
    }
    if (null != enrolledAt) {
      let stringResult;
      let percentComplete = taskDetails.percentComplete;
      if (null != thirdPartyTaskDetails) {
        percentComplete = thirdPartyTaskDetails.percentComplete;
      }
      if (percentComplete >= 0.75) {
        const intl5 = intl7.intl;
        stringResult = intl5.string(intl7.t.gvCR4H);
      } else {
        if (percentComplete >= 0.45) {
          if (percentComplete <= 0.55) {
            const intl4 = intl7.intl;
            stringResult = intl4.string(intl7.t.JNx8sG);
          }
        }
        if (percentComplete > 0) {
          const intl3 = intl7.intl;
          stringResult = intl3.string(intl7.t.JMbfnc);
        } else {
          const intl2 = intl7.intl;
          stringResult = intl2.string(intl7.t["7e5k7L"]);
        }
      }
      return stringResult;
    } else {
      const intl = intl7.intl;
      const obj = { questName: quest.config.messages.questName };
      return intl.formatToPlainString(intl7.t.EQa7os, obj);
    }
  }
};
export const getDisclosureText = function getDisclosureText(arg0) {
  let adCreativeType;
  let cosponsorName;
  let gamePublisher;
  let gameTitle;
  let isContextualDisclosure;
  let isTargetedDisclosure;
  let isVideoQuest;
  let tmp4;
  ({ gamePublisher, gameTitle, cosponsorName } = arg0);
  ({ adCreativeType, isTargetedDisclosure, isContextualDisclosure, isVideoQuest } = arg0);
  const intl = intl7.intl;
  const stringResult = intl.string(intl7.t.fEbrT8);
  if (isTargetedDisclosure) {
    let stringResult1;
    if (isContextualDisclosure) {
      const intl5 = intl7.intl;
      stringResult1 = intl5.string(intl7.t.nPg6f1);
    } else {
      let formatToPlainStringResult;
      if (null == cosponsorName) {
        const intl4 = intl7.intl;
        const obj2 = { gamePublisher };
        formatToPlainStringResult = intl4.formatToPlainString(intl7.t.Piihy1, obj2);
      } else {
        const intl3 = intl7.intl;
        const obj3 = { gamePublisher, cosponsorName };
        formatToPlainStringResult = intl3.formatToPlainString(intl7.t.DV47Gy, obj3);
      }
      const _HermesInternal = HermesInternal;
      stringResult1 = "" + formatToPlainStringResult + " " + stringResult;
    }
    tmp4 = stringResult1;
  } else {
    tmp4 = stringResult;
    if (adCreativeType === AdCreativeType.AdCreativeType.QUEST) {
      let formatToPlainStringResult1;
      const intl2 = intl7.intl;
      const formatToPlainString = intl2.formatToPlainString;
      const t = intl7.t;
      if (isVideoQuest) {
        const obj4 = { gamePublisher };
        formatToPlainStringResult1 = formatToPlainString(t.rctMRl, obj4);
      } else {
        const v5bQWNG = t["5bQWNG"];
        const obj = { gamePublisher, gameTitle };
        if (gameTitle == null) {
          gameTitle = "";
        }
        formatToPlainStringResult1 = formatToPlainString(v5bQWNG, obj);
      }
      tmp4 = formatToPlainStringResult1;
    }
  }
  return tmp4;
};
export const getExternalCtaLabel = function getExternalCtaLabel(quest) {
  return quest.config.ctaConfig.buttonLabel;
};
export const getSortMethodText = function getSortMethodText(constants3) {
  if (constants.SUGGESTED === constants3) {
    const intl4 = intl7.intl;
    return intl4.string(intl7.t.gBfXPZ);
  } else if (constants.MOST_RECENT === constants3) {
    const intl3 = intl7.intl;
    return intl3.string(intl7.t.K6oEu2);
  } else if (constants.EXPIRING_SOON === constants3) {
    const intl2 = intl7.intl;
    return intl2.string(intl7.t.IB22n3);
  } else if (constants.RECENTLY_ENROLLED === constants3) {
    const intl = intl7.intl;
    return intl.string(intl7.t["BB+2tX"]);
  }
};
export const getFilterTypeText = function getFilterTypeText(filter) {
  if (constants2.VIRTUAL_CURRENCY === filter) {
    const intl5 = intl7.intl;
    return intl5.string(intl7.t.ElYQFS);
  } else if (constants2.COLLECTIBLE === filter) {
    const intl4 = intl7.intl;
    return intl4.string(intl7.t.Jg17Ut);
  } else if (constants2.IN_GAME === filter) {
    const intl3 = intl7.intl;
    return intl3.string(intl7.t["O/J2kr"]);
  } else if (constants3.VIDEO === filter) {
    const intl2 = intl7.intl;
    return intl2.string(intl7.t.e0iISA);
  } else if (tmp12.PLAY === filter) {
    const intl = intl7.intl;
    return intl.string(intl7.t["1nJR4p"]);
  }
};
export const getFilterGroupHeadingText = function getFilterGroupHeadingText(arg0) {
  if ("reward" === arg0) {
    const intl2 = intl7.intl;
    return intl2.string(intl7.t.vjLqAU);
  } else if ("task" === arg0) {
    const intl = intl7.intl;
    return intl.string(intl7.t.Hufmss);
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
  const obj = AdAnalyticsInterfaceExperiment;
  if (obj.shouldMigrateToAdAnalyticsInterface(AdAnalyticsInterfaceExperiment.AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL, "copy_share_link")) {
    const obj2 = { type: captureAdUserActionTypes.AdUserActionType.CLICK_INTERNAL, adCreativeType: AdCreativeType.AdCreativeType.QUEST, adCreativeId: id, questContentCTA: ctaContent, surfaceId: null, sourceQuestContent: null, questContentPosition: null, impressionId: null };
    const captureAdUserAction = captureAdUserAction2.captureAdUserAction;
    captureAdUserAction2;
    ({ content: obj4.surfaceId, sourceQuestContent: obj4.sourceQuestContent, position: obj4.questContentPosition, impressionId: obj4.impressionId } = ctaContent);
    captureAdUserAction(obj2);
  } else {
    const obj5 = { questId: id, questContent: ctaContent.content, questContentCTA: ctaContent, questContentPosition: null, impressionId: null, sourceQuestContent: null };
    ({ position: obj3.questContentPosition, impressionId: obj3.impressionId, sourceQuestContent: obj3.sourceQuestContent } = ctaContent);
    const tmpResult3 = AnalyticsActions;
    const result = tmpResult3.trackQuestContentClicked(obj5);
  }
  const tmpResult4 = ClipboardUtils;
  tmpResult4.copy("" + location.protocol + "//" + location.host + "/quests/" + id);
};
export const getDefaultReward = function getDefaultReward(config) {
  if (0 === config.rewardsConfig.rewards.length) {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const self = this;
    const self2 = this;
    const error = new Error("Quest " + config.id + " has no rewards configured");
    throw error;
  } else {
    return config.rewardsConfig.rewards[0];
  }
};