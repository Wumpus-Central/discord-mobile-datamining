// discord_app/modules/quests/hooks/RewardCodeClaimHooks.tsx
import openURLDefault from "../../../lib/openURL.tsx";
import QuestTypes from "../QuestTypes.tsx";
import AdCreativeType from "../../../../discord_common/js/shared/shared-constants/AdCreativeType.tsx";
import AnalyticsTypes from "../lib/analytics/AnalyticsTypes.tsx";
import AdAnalyticsInterfaceExperiment from "../experiments/AdAnalyticsInterfaceExperiment.tsx";
import captureAdUserAction from "../../ads/analytics/captureAdUserAction.tsx";
import captureAdUserActionTypes from "../../ads/analytics/captureAdUserActionTypes.tsx";
import QuestActionCreators from "../QuestActionCreators.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/hooks/RewardCodeClaimHooks.tsx");

export const useClaimOrFetchRewardCode = function useClaimOrFetchRewardCode(isClaimingReward) {
  isClaimingReward = isClaimingReward.isClaimingReward;
  const isFetchingRewardCode = isClaimingReward.isFetchingRewardCode;
  const questContent = isClaimingReward.questContent;
  const quest = isClaimingReward.quest;
  const rewardCode = isClaimingReward.rewardCode;
  const preview = isClaimingReward.preview;
  let tmp = rewardCode(preview.useState(false), 2);
  const hasError = tmp[0];
  const setHasError = tmp[1];
  const tmp4 = rewardCode(preview.useState(false), 2);
  const first1 = tmp4[0];
  closure_9 = tmp4[1];
  closure_0 = quest(function* (arg0, arg1, arg2) {
    closure_3 = tmp3;
    closure_1_9(true);
    yield closure_0(questContent[3]).claimQuestReward(closure_0, closure_1, closure_2);
    if (1 === tmp7) {
      c6 = 0;
      v3(true);
      closure_1_9(false);
      v3 = 3;
    } else if (arg0 === 1) {
      v3 = 3;
      throw value;
    } else if (arg0 !== 2) {
      v3(false);
      closure_1_9(false);
      c6 = 0;
    }
    return value;
  });
  const claimCode = preview.useCallback(function () {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }, []);
  const fetchCode = preview.useCallback((arg0) => {
    try {
      const questRewardCode = QuestActionCreators.fetchQuestRewardCode(arg0);
    } catch (err) {
      setHasError(true);
    }
  }, []);
  const items = [
    claimCode,
    fetchCode,
    hasError,
    isClaimingReward,
    first1,
    isFetchingRewardCode,
    questContent,
    quest,
    rewardCode,
    preview,
  ];
  const effect = preview.useEffect(() => {
    let tmp = true === preview;
    if (!tmp) {
      tmp = null != rewardCode;
    }
    if (!tmp) {
      tmp = hasError;
    }
    if (!tmp) {
      tmp = closure_0;
    }
    if (!tmp) {
      tmp = first1;
    }
    if (!tmp) {
      tmp = isFetchingRewardCode;
    }
    if (!tmp) {
      setHasError(false);
      const userStatus = quest.userStatus;
      let claimedAt;
      if (userStatus != null) {
        claimedAt = userStatus.claimedAt;
      }
      if (null == claimedAt) {
        claimCode(quest.id, QuestTypes.QuestRewardCodePlatforms.CROSS_PLATFORM, questContent);
      } else {
        const userStatus2 = quest.userStatus;
        let claimedAt1;
        if (userStatus2 != null) {
          claimedAt1 = userStatus2.claimedAt;
        }
        if (null != claimedAt1) {
          fetchCode(quest.id);
        }
      }
    }
  }, items);
  return { claimCode, fetchCode, hasError, setHasError };
};
export const useHandleRedemptionLinkClick = function useHandleRedemptionLinkClick(quest) {
  quest = quest.quest;
  const redemptionLink = quest.redemptionLink;
  const questContent = quest.questContent;
  const questContentPosition = quest.questContentPosition;
  const sourceQuestContent = quest.sourceQuestContent;
  const trackQuestContentClickedWithImpression = quest(questContent[5]).useTrackQuestContentClickedWithImpression();
  const obj = quest(questContent[5]);
  const questImpressionId = quest(questContent[6]).useQuestImpressionId();
  const items = [
    quest.id,
    questContent,
    questContentPosition,
    sourceQuestContent,
    trackQuestContentClickedWithImpression,
    questImpressionId,
    redemptionLink,
  ];
  return trackQuestContentClickedWithImpression.useCallback(() => {
    if (null != fetchCode) {
      if (
        obj7.shouldMigrateToAdAnalyticsInterface(
          AdAnalyticsInterfaceExperiment.AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL,
          "quest_reward_code_redemption_link",
        )
      ) {
        let tmp18Result = captureAdUserAction;
        let obj = {
          type: captureAdUserActionTypes.AdUserActionType.CLICK_INTERNAL,
          adCreativeType: AdCreativeType.AdCreativeType.QUEST,
          adCreativeId: claimCode.id,
          questContentCTA: AnalyticsTypes.QuestContentCTA.REDEEM_REWARD,
          surfaceId: hasError,
          sourceQuestContent: quest,
          impressionId: GET_REWARD_CODE,
          questContentPosition: onDismiss,
        };
        tmp18Result.captureAdUserAction(obj);
        tmp18Result = captureAdUserAction;
        obj = {
          type: captureAdUserActionTypes.AdUserActionType.CLICK_INTERNAL,
          adCreativeType: AdCreativeType.AdCreativeType.QUEST,
          adCreativeId: claimCode.id,
          questContentCTA: AnalyticsTypes.QuestContentCTA.VISIT_REDEMPTION_LINK,
          surfaceId: hasError,
          sourceQuestContent: quest,
          impressionId: GET_REWARD_CODE,
          questContentPosition: onDismiss,
        };
        tmp18Result.captureAdUserAction(obj);
      } else {
        obj = {
          questId: claimCode.id,
          questContent: hasError,
          questContentCTA: AnalyticsTypes.QuestContentCTA.REDEEM_REWARD,
          questContentPosition: onDismiss,
          sourceQuestContent: quest,
        };
        questContent(obj);
        const obj1 = {
          questId: claimCode.id,
          questContent: hasError,
          questContentCTA: AnalyticsTypes.QuestContentCTA.VISIT_REDEMPTION_LINK,
          questContentPosition: onDismiss,
          sourceQuestContent: quest,
        };
        questContent(obj1);
      }
      openURLDefault(tmp);
      obj7 = AdAnalyticsInterfaceExperiment;
    }
  }, items);
};
export const useClaimRewardCodePrimaryCtaClickHandler = function useClaimRewardCodePrimaryCtaClickHandler(claimCode) {
  claimCode = claimCode.claimCode;
  const fetchCode = claimCode.fetchCode;
  const hasError = claimCode.hasError;
  const onDismiss = claimCode.onDismiss;
  const quest = claimCode.quest;
  const questContent = claimCode.questContent;
  let GET_REWARD_CODE = claimCode.questContentCTA;
  if (undefined === GET_REWARD_CODE) {
    GET_REWARD_CODE = claimCode(hasError[11]).QuestContentCTA.GET_REWARD_CODE;
  }
  const questContentPosition = claimCode.questContentPosition;
  const redemptionLink = claimCode.redemptionLink;
  const sourceQuestContent = claimCode.sourceQuestContent;
  const trackQuestContentClickedWithImpression = claimCode(hasError[5]).useTrackQuestContentClickedWithImpression();
  let obj = claimCode(hasError[5]);
  const questImpressionId = claimCode(hasError[6]).useQuestImpressionId();
  const quest2 = claimCode.quest;
  closure_129_0 = quest2;
  const redemptionLink2 = claimCode.redemptionLink;
  closure_129_1 = redemptionLink2;
  const questContent2 = claimCode.questContent;
  closure_129_2 = questContent2;
  const questContentPosition2 = claimCode.questContentPosition;
  closure_129_3 = questContentPosition2;
  const sourceQuestContent2 = claimCode.sourceQuestContent;
  closure_129_4 = sourceQuestContent2;
  const obj2 = claimCode(hasError[6]);
  const trackQuestContentClickedWithImpression1 = claimCode(hasError[5]).useTrackQuestContentClickedWithImpression();
  closure_129_5 = trackQuestContentClickedWithImpression1;
  const obj3 = claimCode(hasError[5]);
  const questImpressionId1 = claimCode(hasError[6]).useQuestImpressionId();
  closure_129_6 = questImpressionId1;
  const items = [
    quest2.id,
    questContent2,
    questContentPosition2,
    sourceQuestContent2,
    trackQuestContentClickedWithImpression1,
    questImpressionId1,
    redemptionLink2,
  ];
  const callback = questContent.useCallback(() => {
    if (null != fetchCode) {
      if (
        obj7.shouldMigrateToAdAnalyticsInterface(
          AdAnalyticsInterfaceExperiment.AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL,
          "quest_reward_code_redemption_link",
        )
      ) {
        let tmp18Result = captureAdUserAction;
        let obj = {
          type: captureAdUserActionTypes.AdUserActionType.CLICK_INTERNAL,
          adCreativeType: AdCreativeType.AdCreativeType.QUEST,
          adCreativeId: claimCode.id,
          questContentCTA: AnalyticsTypes.QuestContentCTA.REDEEM_REWARD,
          surfaceId: hasError,
          sourceQuestContent: quest,
          impressionId: GET_REWARD_CODE,
          questContentPosition: onDismiss,
        };
        tmp18Result.captureAdUserAction(obj);
        tmp18Result = captureAdUserAction;
        obj = {
          type: captureAdUserActionTypes.AdUserActionType.CLICK_INTERNAL,
          adCreativeType: AdCreativeType.AdCreativeType.QUEST,
          adCreativeId: claimCode.id,
          questContentCTA: AnalyticsTypes.QuestContentCTA.VISIT_REDEMPTION_LINK,
          surfaceId: hasError,
          sourceQuestContent: quest,
          impressionId: GET_REWARD_CODE,
          questContentPosition: onDismiss,
        };
        tmp18Result.captureAdUserAction(obj);
      } else {
        obj = {
          questId: claimCode.id,
          questContent: hasError,
          questContentCTA: AnalyticsTypes.QuestContentCTA.REDEEM_REWARD,
          questContentPosition: onDismiss,
          sourceQuestContent: quest,
        };
        questContent(obj);
        const obj1 = {
          questId: claimCode.id,
          questContent: hasError,
          questContentCTA: AnalyticsTypes.QuestContentCTA.VISIT_REDEMPTION_LINK,
          questContentPosition: onDismiss,
          sourceQuestContent: quest,
        };
        questContent(obj1);
      }
      openURLDefault(tmp);
      obj7 = AdAnalyticsInterfaceExperiment;
    }
  }, items);
  const items1 = [claimCode, fetchCode, hasError, onDismiss, , , , , , , , , ,];
  ({ id: arr2[4], userStatus } = quest);
  let claimedAt;
  if (userStatus != null) {
    claimedAt = userStatus.claimedAt;
  }
  items1[5] = claimedAt;
  items1[6] = questContent;
  items1[7] = GET_REWARD_CODE;
  items1[8] = questContentPosition;
  items1[9] = trackQuestContentClickedWithImpression;
  items1[10] = questImpressionId;
  items1[11] = redemptionLink;
  items1[12] = sourceQuestContent;
  items1[13] = callback;
  return questContent.useCallback(() => {
    if (hasError) {
      const userStatus = quest.userStatus;
      let claimedAt;
      if (userStatus != null) {
        claimedAt = userStatus.claimedAt;
      }
      if (null != claimedAt) {
        fetchCode(quest.id);
      } else {
        claimCode(quest.id, QuestTypes.QuestRewardCodePlatforms.CROSS_PLATFORM, questContent);
        if (
          obj4.shouldMigrateToAdAnalyticsInterface(
            AdAnalyticsInterfaceExperiment.AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL,
            "quest_reward_code_primary_cta",
          )
        ) {
          let obj = {
            type: captureAdUserActionTypes.AdUserActionType.CLICK_INTERNAL,
            adCreativeType: AdCreativeType.AdCreativeType.QUEST,
            adCreativeId: quest.id,
            questContentCTA: GET_REWARD_CODE,
            surfaceId: questContent,
            sourceQuestContent,
            impressionId: questImpressionId,
            questContentPosition,
          };
          captureAdUserAction.captureAdUserAction(obj);
          const tmp23Result = captureAdUserAction;
        } else {
          obj = {
            questId: quest.id,
            questContent,
            questContentCTA: GET_REWARD_CODE,
            questContentPosition,
            sourceQuestContent,
          };
          trackQuestContentClickedWithImpression(obj);
        }
        obj4 = AdAnalyticsInterfaceExperiment;
      }
    } else {
      if (null != redemptionLink) {
        callback();
      }
      onDismiss();
    }
  }, items1);
};
