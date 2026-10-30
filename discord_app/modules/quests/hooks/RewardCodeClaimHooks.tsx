// === Module 14643: RewardCodeClaimHooks ===

// Module 14643 (RewardCodeClaimHooks)
import openURLDefault from "openURL" /* 5700 */;
import QuestTypes from "QuestTypes" /* 6778 */;
import AdCreativeType from "AdCreativeType" /* 6782 */;
import AnalyticsTypes from "AnalyticsTypes" /* 7864 */;
import QuestActionCreators from "QuestActionCreators" /* 9662 */;
import captureAdUserAction from "captureAdUserAction" /* 9664 */;
import captureAdUserActionTypes from "captureAdUserActionTypes" /* 9667 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/hooks/RewardCodeClaimHooks.tsx");

export function useClaimOrFetchRewardCode(isClaimingReward) {
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
  closure_0 = quest(function*(arg0, arg1, arg2) {
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
      const questRewardCode = QuestActionCreators.fetchQuestRewardCode(arg0);
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
}
export function useHandleRedemptionLinkClick(quest) {
  quest = quest.quest;
  const redemptionLink = quest.redemptionLink;
  const questContent = quest.questContent;
  const questContentPosition = quest.questContentPosition;
  const sourceQuestContent = quest.sourceQuestContent;
  const getQuestImpressionId = quest(questContent[5]).useGetQuestImpressionId();
  const items = [quest.id, questContent, questContentPosition, sourceQuestContent, getQuestImpressionId, redemptionLink];
  return getQuestImpressionId.useCallback(() => {
    if (null != fetchCode) {
      const obj2 = { type: captureAdUserActionTypes.AdUserActionType.CLICK_INTERNAL, adCreativeType: AdCreativeType.AdCreativeType.QUEST, adCreativeId: claimCode.id, questContentCTA: AnalyticsTypes.QuestContentCTA.REDEEM_REWARD, surfaceId: hasError, sourceQuestContent: quest, impressionId: questContent(), questContentPosition: onDismiss };
      captureAdUserAction.captureAdUserAction(obj2);
      const obj4 = { type: captureAdUserActionTypes.AdUserActionType.CLICK_INTERNAL, adCreativeType: AdCreativeType.AdCreativeType.QUEST, adCreativeId: claimCode.id, questContentCTA: AnalyticsTypes.QuestContentCTA.VISIT_REDEMPTION_LINK, surfaceId: hasError, sourceQuestContent: quest, impressionId: questContent(), questContentPosition: onDismiss };
      captureAdUserAction.captureAdUserAction(obj4);
      openURLDefault(tmp);
    }
  }, items);
}
export function useClaimRewardCodePrimaryCtaClickHandler(claimCode) {
  claimCode = claimCode.claimCode;
  const fetchCode = claimCode.fetchCode;
  const hasError = claimCode.hasError;
  const onDismiss = claimCode.onDismiss;
  const quest = claimCode.quest;
  const questContent = claimCode.questContent;
  let GET_REWARD_CODE = claimCode.questContentCTA;
  if (undefined === GET_REWARD_CODE) {
    GET_REWARD_CODE = claimCode(hasError[9]).QuestContentCTA.GET_REWARD_CODE;
  }
  const questContentPosition = claimCode.questContentPosition;
  const redemptionLink = claimCode.redemptionLink;
  const sourceQuestContent = claimCode.sourceQuestContent;
  const getQuestImpressionId = claimCode(hasError[5]).useGetQuestImpressionId();
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
  let obj = claimCode(hasError[5]);
  const getQuestImpressionId1 = claimCode(hasError[5]).useGetQuestImpressionId();
  closure_129_5 = getQuestImpressionId1;
  const items = [quest2.id, questContent2, questContentPosition2, sourceQuestContent2, getQuestImpressionId1, redemptionLink2];
  const callback = questContent.useCallback(() => {
    if (null != fetchCode) {
      const obj2 = { type: captureAdUserActionTypes.AdUserActionType.CLICK_INTERNAL, adCreativeType: AdCreativeType.AdCreativeType.QUEST, adCreativeId: claimCode.id, questContentCTA: AnalyticsTypes.QuestContentCTA.REDEEM_REWARD, surfaceId: hasError, sourceQuestContent: quest, impressionId: questContent(), questContentPosition: onDismiss };
      captureAdUserAction.captureAdUserAction(obj2);
      const obj4 = { type: captureAdUserActionTypes.AdUserActionType.CLICK_INTERNAL, adCreativeType: AdCreativeType.AdCreativeType.QUEST, adCreativeId: claimCode.id, questContentCTA: AnalyticsTypes.QuestContentCTA.VISIT_REDEMPTION_LINK, surfaceId: hasError, sourceQuestContent: quest, impressionId: questContent(), questContentPosition: onDismiss };
      captureAdUserAction.captureAdUserAction(obj4);
      openURLDefault(tmp);
    }
  }, items);
  const items1 = [claimCode, fetchCode, hasError, onDismiss, , , , , , , , , ];
  ({ id: arr2[4], userStatus } = quest);
  let claimedAt;
  if (userStatus != null) {
    claimedAt = userStatus.claimedAt;
  }
  items1[5] = claimedAt;
  items1[6] = questContent;
  items1[7] = GET_REWARD_CODE;
  items1[8] = questContentPosition;
  items1[9] = getQuestImpressionId;
  items1[10] = redemptionLink;
  items1[11] = sourceQuestContent;
  items1[12] = callback;
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
        const obj2 = { type: captureAdUserActionTypes.AdUserActionType.CLICK_INTERNAL, adCreativeType: AdCreativeType.AdCreativeType.QUEST, adCreativeId: quest.id, questContentCTA: GET_REWARD_CODE, surfaceId: questContent, sourceQuestContent, impressionId: getQuestImpressionId(), questContentPosition };
        captureAdUserAction.captureAdUserAction(obj2);
      }
    } else {
      if (null != redemptionLink) {
        callback();
      }
      onDismiss();
    }
  }, items1);
}