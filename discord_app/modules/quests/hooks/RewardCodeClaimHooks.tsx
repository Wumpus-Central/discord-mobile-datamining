// === Module 10991: useClaimOrFetchRewardCode ===

// Module 10991 (useClaimOrFetchRewardCode)
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "_slicedToArray" /* 32 */;
import closure_5 from "noop" /* 19 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/quests/hooks/RewardCodeClaimHooks.tsx");

export const useClaimOrFetchRewardCode = function useClaimOrFetchRewardCode(isClaimingReward) {
  isClaimingReward = isClaimingReward.isClaimingReward;
  closure_0 = isClaimingReward;
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
  closure_0 = undefined;
  closure_0 = quest((arg0, arg1, arg2) => {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = arg2;
    c4 = 0;
    c7 = 0;
    c6 = 0;
    return (function*(arg0, arg1, arg2) {
      closure_3 = tmp3;
      c6 = 1;
      closure_1_9(true);
      obj1 = callback(questContent[3]);
      yield obj1.claimQuestReward(callback, closure_1, closure_2);
      if (1 === tmp7) {
        c6 = 0;
        v0(true);
        closure_1_9(false);
        v0 = 3;
      } else if (arg0 === 1) {
        v0 = 3;
        throw arg1;
      } else if (arg0 !== 2) {
        v0(false);
        closure_1_9(false);
        c6 = 0;
      }
      c6 = 0;
      return arg1;
    })();
  });
  const claimCode = preview.useCallback(function() {
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
      const questRewardCode = callback(questContent[3]).fetchQuestRewardCode(arg0);
    } catch (err) {
      setHasError(true);
    }
  }, []);
  const items = [claimCode, fetchCode, hasError, isClaimingReward, first1, isFetchingRewardCode, questContent, quest, rewardCode, preview];
  const effect = preview.useEffect(() => {
    let tmp = true === preview;
    if (!tmp) {
      tmp = null != rewardCode;
    }
    if (!tmp) {
      tmp = hasError;
    }
    if (!tmp) {
      tmp = callback;
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
        claimCode(tmp6.id, callback(questContent[4]).QuestRewardCodePlatforms.CROSS_PLATFORM, questContent);
      } else {
        const userStatus2 = tmp6.userStatus;
        let claimedAt1;
        if (userStatus2 != null) {
          claimedAt1 = userStatus2.claimedAt;
        }
        if (null != claimedAt1) {
          fetchCode(tmp6.id);
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
  let trackQuestContentClickedWithImpression;
  let questImpressionId;
  trackQuestContentClickedWithImpression = quest(questContent[5]).useTrackQuestContentClickedWithImpression();
  const obj = quest(questContent[5]);
  questImpressionId = quest(questContent[6]).useQuestImpressionId();
  const items = [quest.id, questContent, questContentPosition, sourceQuestContent, trackQuestContentClickedWithImpression, questImpressionId, redemptionLink];
  return trackQuestContentClickedWithImpression.useCallback(() => {
    if (null != redemptionLink2) {
      let tmp17 = questContent2;
      if (obj7.shouldMigrateToAdAnalyticsInterface(quest2(questContent2[7]).AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL, "quest_reward_code_redemption_link")) {
        let tmp18Result = tmp18(tmp17[8]);
        let obj = { type: null, adCreativeType: null, adCreativeId: null, questContentCTA: null, surfaceId: null, sourceQuestContent: null, impressionId: null, questContentPosition: null };
        obj[0] = tmp18(tmp17[9]).AdUserActionType.CLICK_INTERNAL;
        obj[1] = tmp18(tmp17[10]).AdCreativeType.QUEST;
        obj[2] = quest2.id;
        obj[3] = tmp18(tmp17[11]).QuestContentCTA.REDEEM_REWARD;
        obj[4] = questContent2;
        obj[5] = sourceQuestContent2;
        obj[6] = questImpressionId1;
        obj[7] = questContentPosition2;
        tmp18Result.captureAdUserAction(obj);
        tmp18Result = tmp18(tmp17[8]);
        obj = { type: null, adCreativeType: null, adCreativeId: null, questContentCTA: null, surfaceId: null, sourceQuestContent: null, impressionId: null, questContentPosition: null };
        obj[0] = tmp18(tmp17[9]).AdUserActionType.CLICK_INTERNAL;
        obj[1] = tmp18(tmp17[10]).AdCreativeType.QUEST;
        obj[2] = quest2.id;
        obj[3] = tmp18(tmp17[11]).QuestContentCTA.VISIT_REDEMPTION_LINK;
        obj[4] = questContent2;
        obj[5] = sourceQuestContent2;
        obj[6] = questImpressionId1;
        obj[7] = questContentPosition2;
        tmp18Result.captureAdUserAction(obj);
      } else {
        obj = { questId: null, questContent: null, questContentCTA: null, questContentPosition: null, sourceQuestContent: null };
        obj[0] = quest2.id;
        obj[1] = questContent2;
        obj[2] = tmp18(tmp17[11]).QuestContentCTA.REDEEM_REWARD;
        obj[3] = questContentPosition2;
        obj[4] = sourceQuestContent2;
        trackQuestContentClickedWithImpression1(obj);
        obj1 = { questId: null, questContent: null, questContentCTA: null, questContentPosition: null, sourceQuestContent: null };
        obj1[0] = quest2.id;
        obj1[1] = questContent2;
        obj1[2] = tmp18(tmp17[11]).QuestContentCTA.VISIT_REDEMPTION_LINK;
        obj1[3] = questContentPosition2;
        obj1[4] = sourceQuestContent2;
        trackQuestContentClickedWithImpression1(obj1);
      }
      tmp17 = redemptionLink2(tmp17[12])(tmp);
      obj7 = quest2(questContent2[7]);
    }
  }, items);
};
export const useClaimRewardCodePrimaryCtaClickHandler = function useClaimRewardCodePrimaryCtaClickHandler(claimCode) {
  claimCode = claimCode.claimCode;
  let quest2 = claimCode;
  const fetchCode = claimCode.fetchCode;
  let redemptionLink2 = fetchCode;
  const hasError = claimCode.hasError;
  let questContent2 = hasError;
  const onDismiss = claimCode.onDismiss;
  let questContentPosition2 = onDismiss;
  const quest = claimCode.quest;
  let sourceQuestContent2 = quest;
  const questContent = claimCode.questContent;
  let trackQuestContentClickedWithImpression1 = questContent;
  let GET_REWARD_CODE = claimCode.questContentCTA;
  if (undefined === GET_REWARD_CODE) {
    GET_REWARD_CODE = quest2(questContent2[11]).QuestContentCTA.GET_REWARD_CODE;
  }
  let questImpressionId1 = GET_REWARD_CODE;
  const questContentPosition = claimCode.questContentPosition;
  const redemptionLink = claimCode.redemptionLink;
  const sourceQuestContent = claimCode.sourceQuestContent;
  const trackQuestContentClickedWithImpression = quest2(questContent2[5]).useTrackQuestContentClickedWithImpression();
  let obj = quest2(questContent2[5]);
  const questImpressionId = quest2(questContent2[6]).useQuestImpressionId();
  quest2 = undefined;
  redemptionLink2 = undefined;
  questContent2 = undefined;
  questContentPosition2 = undefined;
  sourceQuestContent2 = undefined;
  quest2 = claimCode.quest;
  redemptionLink2 = claimCode.redemptionLink;
  questContent2 = claimCode.questContent;
  questContentPosition2 = claimCode.questContentPosition;
  sourceQuestContent2 = claimCode.sourceQuestContent;
  trackQuestContentClickedWithImpression1 = undefined;
  questImpressionId1 = undefined;
  const obj2 = quest2(questContent2[6]);
  trackQuestContentClickedWithImpression1 = quest2(questContent2[5]).useTrackQuestContentClickedWithImpression();
  const obj3 = quest2(questContent2[5]);
  questImpressionId1 = quest2(questContent2[6]).useQuestImpressionId();
  const items = [quest2.id, questContent2, questContentPosition2, sourceQuestContent2, trackQuestContentClickedWithImpression1, questImpressionId1, redemptionLink2];
  const callback = trackQuestContentClickedWithImpression1.useCallback(() => {
    if (null != redemptionLink2) {
      let tmp17 = questContent2;
      if (obj7.shouldMigrateToAdAnalyticsInterface(quest2(questContent2[7]).AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL, "quest_reward_code_redemption_link")) {
        let tmp18Result = tmp18(tmp17[8]);
        let obj = { type: null, adCreativeType: null, adCreativeId: null, questContentCTA: null, surfaceId: null, sourceQuestContent: null, impressionId: null, questContentPosition: null };
        obj[0] = tmp18(tmp17[9]).AdUserActionType.CLICK_INTERNAL;
        obj[1] = tmp18(tmp17[10]).AdCreativeType.QUEST;
        obj[2] = quest2.id;
        obj[3] = tmp18(tmp17[11]).QuestContentCTA.REDEEM_REWARD;
        obj[4] = questContent2;
        obj[5] = sourceQuestContent2;
        obj[6] = questImpressionId1;
        obj[7] = questContentPosition2;
        tmp18Result.captureAdUserAction(obj);
        tmp18Result = tmp18(tmp17[8]);
        obj = { type: null, adCreativeType: null, adCreativeId: null, questContentCTA: null, surfaceId: null, sourceQuestContent: null, impressionId: null, questContentPosition: null };
        obj[0] = tmp18(tmp17[9]).AdUserActionType.CLICK_INTERNAL;
        obj[1] = tmp18(tmp17[10]).AdCreativeType.QUEST;
        obj[2] = quest2.id;
        obj[3] = tmp18(tmp17[11]).QuestContentCTA.VISIT_REDEMPTION_LINK;
        obj[4] = questContent2;
        obj[5] = sourceQuestContent2;
        obj[6] = questImpressionId1;
        obj[7] = questContentPosition2;
        tmp18Result.captureAdUserAction(obj);
      } else {
        obj = { questId: null, questContent: null, questContentCTA: null, questContentPosition: null, sourceQuestContent: null };
        obj[0] = quest2.id;
        obj[1] = questContent2;
        obj[2] = tmp18(tmp17[11]).QuestContentCTA.REDEEM_REWARD;
        obj[3] = questContentPosition2;
        obj[4] = sourceQuestContent2;
        trackQuestContentClickedWithImpression1(obj);
        obj1 = { questId: null, questContent: null, questContentCTA: null, questContentPosition: null, sourceQuestContent: null };
        obj1[0] = quest2.id;
        obj1[1] = questContent2;
        obj1[2] = tmp18(tmp17[11]).QuestContentCTA.VISIT_REDEMPTION_LINK;
        obj1[3] = questContentPosition2;
        obj1[4] = sourceQuestContent2;
        trackQuestContentClickedWithImpression1(obj1);
      }
      tmp17 = redemptionLink2(tmp17[12])(tmp);
      obj7 = quest2(questContent2[7]);
    }
  }, items);
  const items1 = [claimCode, fetchCode, hasError, onDismiss, , , , , , , , , , ];
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
  return trackQuestContentClickedWithImpression1.useCallback(() => {
    if (questContent2) {
      const userStatus = sourceQuestContent2.userStatus;
      let claimedAt;
      if (userStatus != null) {
        claimedAt = userStatus.claimedAt;
      }
      if (null != claimedAt) {
        redemptionLink2(tmp7.id);
      } else {
        quest2(tmp7.id, quest2(questContent2[4]).QuestRewardCodePlatforms.CROSS_PLATFORM, trackQuestContentClickedWithImpression1);
        if (obj4.shouldMigrateToAdAnalyticsInterface(quest2(questContent2[7]).AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL, "quest_reward_code_primary_cta")) {
          let obj = { type: null, adCreativeType: null, adCreativeId: null, questContentCTA: null, surfaceId: null, sourceQuestContent: null, impressionId: null, questContentPosition: null };
          obj[0] = tmp23(tmp24[9]).AdUserActionType.CLICK_INTERNAL;
          obj[1] = tmp23(tmp24[10]).AdCreativeType.QUEST;
          obj[2] = tmp7.id;
          obj[3] = questImpressionId1;
          obj[4] = tmp25;
          obj[5] = sourceQuestContent;
          obj[6] = questImpressionId;
          obj[7] = questContentPosition;
          tmp23(tmp24[8]).captureAdUserAction(obj);
          const tmp23Result = tmp23(tmp24[8]);
        } else {
          obj = { questId: null, questContent: null, questContentCTA: null, questContentPosition: null, sourceQuestContent: null };
          obj[0] = tmp7.id;
          obj[1] = tmp25;
          obj[2] = questImpressionId1;
          obj[3] = questContentPosition;
          obj[4] = sourceQuestContent;
          trackQuestContentClickedWithImpression(obj);
        }
        obj4 = quest2(questContent2[7]);
      }
    } else {
      if (null != redemptionLink) {
        callback();
      }
      questContentPosition2();
    }
  }, items1);
};