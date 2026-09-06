// === Module 11295: getContextualEntrypointHeading ===

// Module 11295 (getContextualEntrypointHeading)
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1114 */;
import _copy from "_copy" /* 7190 */;
import apexExperiment from "apexExperiment" /* 11192 */;
import QuestsExperimentLocations from "QuestsExperimentLocations" /* 5444 */;

({ QuestHomeSortMethods: obj1, RewardFilterTypes: c3, TaskFilterTypes: c4 } = QuestsExperimentLocations);
let result = set.fileFinishedImporting("modules/quests/utils/QuestCopyUtils.tsx");

export const getContextualEntrypointHeading = function getContextualEntrypointHeading(taskDetails) {
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
export const getDisclosureText = function getDisclosureText(arg0) {
  ({ gamePublisher, gameTitle, cosponsorName } = arg0);
  let nPg6f1 = dependencyMap;
  ({ adCreativeType, isTargetedDisclosure, isContextualDisclosure, isVideoQuest } = arg0);
  const intl = getSystemLocale.intl;
  const stringResult = intl.string(getSystemLocale.t.fEbrT8);
  if (isTargetedDisclosure) {
    if (isContextualDisclosure) {
      const intl5 = tmp(1114).intl;
      nPg6f1 = tmp(1114).t.nPg6f1;
      let stringResult1 = intl5.string(nPg6f1);
    } else {
      if (null == cosponsorName) {
        const intl4 = tmp(1114).intl;
        let obj = { gamePublisher: null };
        obj[0] = gamePublisher;
        let formatToPlainStringResult = intl4.formatToPlainString(tmp(1114).t.Piihy1, obj);
      } else {
        const intl3 = tmp(1114).intl;
        obj = { gamePublisher: null, cosponsorName: null };
        obj[0] = gamePublisher;
        obj[1] = cosponsorName;
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
      t = { gamePublisher: null };
      t[0] = gamePublisher;
      let formatToPlainStringResult1 = formatToPlainString(t.rctMRl, t);
    } else {
      obj1 = { gamePublisher: null, gameTitle: null };
      obj1[0] = gamePublisher;
      if (gameTitle == null) {
        gameTitle = "";
      }
      obj1[1] = gameTitle;
      formatToPlainStringResult1 = formatToPlainString(t["5bQWNG"], obj1);
    }
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
    let tmpResult = tmp(11193);
    obj = { type: null, adCreativeType: null, adCreativeId: null, questContentCTA: null, surfaceId: null, sourceQuestContent: null, questContentPosition: null, impressionId: null };
    obj[0] = tmp(11197).AdUserActionType.CLICK_INTERNAL;
    obj[1] = tmp(5451).AdCreativeType.QUEST;
    obj[2] = id;
    obj[3] = ctaContent;
    ({ content: obj5[4], sourceQuestContent: obj5[5], position: obj5[6], impressionId: obj5[7] } = ctaContent);
    tmpResult.captureAdUserAction(obj);
  } else {
    tmpResult = tmp(7718);
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
    error = new Error("Quest " + config.id + " has no rewards configured");
    throw error;
  } else {
    return config.rewardsConfig.rewards[0];
  }
};