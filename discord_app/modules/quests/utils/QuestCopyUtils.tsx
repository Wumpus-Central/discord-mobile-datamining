// discord_app/modules/quests/utils/QuestCopyUtils.tsx
import util from "../../../intl/index.native.tsx";
import AdCreativeType from "../../../../discord_common/js/shared/shared-constants/AdCreativeType.tsx";
import ClipboardUtils from "../../../utils/ClipboardUtils.native.tsx";
import captureAdUserAction from "../../ads/analytics/captureAdUserAction.tsx";
import captureAdUserActionTypes from "../../ads/analytics/captureAdUserActionTypes.tsx";
import QuestConstants from "../QuestConstants.tsx";
import size from "../../../../_runtime/metro/00002__.js";

({ QuestHomeSortMethods: c2, RewardFilterTypes: c3, TaskFilterTypes: closure_4 } = QuestConstants);
const result = size.fileFinishedImporting("modules/quests/utils/QuestCopyUtils.tsx");

export function getContextualEntrypointHeading(taskDetails) {
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
}
export function getDisclosureText(arg0) {
  ({ gamePublisher, gameTitle, cosponsorName } = arg0);
  let nPg6f1 = dependencyMap;
  ({ adCreativeType, isTargetedDisclosure, isContextualDisclosure, isVideoQuest } = arg0);
  const intl = util.intl;
  const stringResult = intl.string(util.t.fEbrT8);
  if (isTargetedDisclosure) {
    if (isContextualDisclosure) {
      const intl5 = util.intl;
      nPg6f1 = util.t.nPg6f1;
      let stringResult1 = intl5.string(nPg6f1);
    } else {
      if (null == cosponsorName) {
        const intl4 = util.intl;
        const obj = { gamePublisher };
        let formatToPlainStringResult = intl4.formatToPlainString(util.t.Piihy1, obj);
      } else {
        const intl3 = util.intl;
        const obj2 = { gamePublisher, cosponsorName };
        formatToPlainStringResult = intl3.formatToPlainString(util.t.DV47Gy, obj2);
      }
      const _HermesInternal = HermesInternal;
      stringResult1 = "" + formatToPlainStringResult + " " + stringResult;
    }
  } else if (adCreativeType !== AdCreativeType.AdCreativeType.QUEST) {
    return stringResult;
  } else {
    const intl2 = util.intl;
    const formatToPlainString = intl2.formatToPlainString;
    let t = util.t;
    if (isVideoQuest) {
      t = { gamePublisher };
      let formatToPlainStringResult1 = formatToPlainString(t.rctMRl, t);
    } else {
      const obj3 = { gamePublisher, gameTitle: null };
      if (gameTitle == null) {
        gameTitle = "";
      }
      obj3.gameTitle = gameTitle;
      formatToPlainStringResult1 = formatToPlainString(t["5bQWNG"], obj3);
    }
  }
}
export function getExternalCtaLabel(quest) {
  return quest.config.ctaConfig.buttonLabel;
}
export function getSortMethodText(dependencyMap) {
  if (constants.SUGGESTED === dependencyMap) {
    const intl4 = util.intl;
    return intl4.string(util.t.gBfXPZ);
  } else if (constants.MOST_RECENT === dependencyMap) {
    const intl3 = util.intl;
    return intl3.string(util.t.K6oEu2);
  } else if (constants.EXPIRING_SOON === dependencyMap) {
    const intl2 = util.intl;
    return intl2.string(util.t.IB22n3);
  } else if (constants.RECENTLY_ENROLLED === dependencyMap) {
    const intl = util.intl;
    return intl.string(util.t["BB+2tX"]);
  }
}
export function getFilterTypeText(filter) {
  if (constants2.VIRTUAL_CURRENCY === filter) {
    const intl5 = util.intl;
    return intl5.string(util.t.ElYQFS);
  } else if (constants2.COLLECTIBLE === filter) {
    const intl4 = util.intl;
    return intl4.string(util.t.Jg17Ut);
  } else if (constants2.IN_GAME === filter) {
    const intl3 = util.intl;
    return intl3.string(util.t["O/J2kr"]);
  } else if (constants3.VIDEO === filter) {
    const intl2 = util.intl;
    return intl2.string(util.t.e0iISA);
  } else if (tmp12.PLAY === filter) {
    const intl = util.intl;
    return intl.string(util.t["1nJR4p"]);
  }
}
export function getFilterGroupHeadingText(arg0) {
  if ("reward" === arg0) {
    const intl2 = util.intl;
    return intl2.string(util.t.vjLqAU);
  } else if ("task" === arg0) {
    const intl = util.intl;
    return intl.string(util.t.Hufmss);
  }
}
export function getQuestUrl(id) {
  return "" + location.protocol + "//" + location.host + "/quests/" + id;
}
export function getCtaLink(config) {
  return config.ctaConfig.link;
}
export function copyShareLink(id, ctaContent) {
  const obj = captureAdUserAction;
  obj.captureAdUserAction({
    type: captureAdUserActionTypes.AdUserActionType.CLICK_INTERNAL,
    adCreativeType: AdCreativeType.AdCreativeType.QUEST,
    adCreativeId: id,
    questContentCTA: ctaContent.ctaContent,
    surfaceId: ctaContent.content,
    sourceQuestContent: ctaContent.sourceQuestContent,
    questContentPosition: ctaContent.position,
    impressionId: ctaContent.impressionId,
  });
  const obj2 = {
    type: captureAdUserActionTypes.AdUserActionType.CLICK_INTERNAL,
    adCreativeType: AdCreativeType.AdCreativeType.QUEST,
    adCreativeId: id,
    questContentCTA: ctaContent.ctaContent,
    surfaceId: ctaContent.content,
    sourceQuestContent: ctaContent.sourceQuestContent,
    questContentPosition: ctaContent.position,
    impressionId: ctaContent.impressionId,
  };
  ClipboardUtils.copy("" + location.protocol + "//" + location.host + "/quests/" + id);
}
export function getDefaultReward(config) {
  if (0 === config.rewardsConfig.rewards.length) {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const error = new Error("Quest " + config.id + " has no rewards configured");
    throw error;
  } else {
    return config.rewardsConfig.rewards[0];
  }
}
