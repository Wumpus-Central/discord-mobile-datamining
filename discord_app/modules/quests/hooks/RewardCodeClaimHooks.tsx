// === Module 10966: RewardCodeClaimHooks ===

// Module 10966 (RewardCodeClaimHooks)
import openURLDefault from "openURL" /* 4565 */;
import QuestTypes from "QuestTypes" /* 5633 */;
import AdCreativeType from "AdCreativeType" /* 5637 */;
import AnalyticsTypes from "AnalyticsTypes" /* 7225 */;
import captureAdUserAction from "captureAdUserAction" /* 7226 */;
import captureAdUserActionTypes from "captureAdUserActionTypes" /* 7236 */;
import AdAnalyticsInterfaceExperiment from "AdAnalyticsInterfaceExperiment" /* 7237 */;
import QuestActionCreators from "QuestActionCreators" /* 10007 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
fn(558);
let ReactCompilerGating = fn(558);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((quest) => {
  const cResult = quest(questContent[4]).c(8);
  quest = quest.quest;
  const redemptionLink = quest.redemptionLink;
  questContent = quest.questContent;
  const questContentPosition = quest.questContentPosition;
  const sourceQuestContent = quest.sourceQuestContent;
  let obj = quest(questContent[4]);
  const trackQuestContentClickedWithImpression = quest(questContent[7]).useTrackQuestContentClickedWithImpression();
  let obj2 = quest(questContent[7]);
  const getQuestImpressionId = quest(questContent[8]).useGetQuestImpressionId();
  if (cResult[0] === getQuestImpressionId) {
    if (cResult[1] === quest.id) {
      if (cResult[2] === questContent) {
        if (cResult[3] === questContentPosition) {
          if (cResult[4] === redemptionLink) {
            if (cResult[5] === sourceQuestContent) {
              if (cResult[6] === trackQuestContentClickedWithImpression) {
                let tmp4 = cResult[7];
              }
              return tmp4;
            }
          }
        }
      }
    }
  }
  const fn = function n() {
    if (null != redemptionLink) {
      if (obj7.shouldMigrateToAdAnalyticsInterface(AdAnalyticsInterfaceExperiment.AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL, "quest_reward_code_redemption_link")) {
        const obj2 = { type: captureAdUserActionTypes.AdUserActionType.CLICK_INTERNAL, adCreativeType: AdCreativeType.AdCreativeType.QUEST, adCreativeId: quest.id, questContentCTA: AnalyticsTypes.QuestContentCTA.REDEEM_REWARD, surfaceId: questContent, sourceQuestContent, impressionId: getQuestImpressionId(), questContentPosition };
        captureAdUserAction.captureAdUserAction(obj2);
        const tmp18Result = captureAdUserAction;
        const obj3 = { type: captureAdUserActionTypes.AdUserActionType.CLICK_INTERNAL, adCreativeType: AdCreativeType.AdCreativeType.QUEST, adCreativeId: quest.id, questContentCTA: AnalyticsTypes.QuestContentCTA.VISIT_REDEMPTION_LINK, surfaceId: questContent, sourceQuestContent, impressionId: getQuestImpressionId(), questContentPosition };
        captureAdUserAction.captureAdUserAction(obj3);
        const tmp18Result2 = captureAdUserAction;
      } else {
        const obj = { questId: quest.id, questContent, questContentCTA: AnalyticsTypes.QuestContentCTA.REDEEM_REWARD, questContentPosition, sourceQuestContent };
        trackQuestContentClickedWithImpression(obj);
        const obj4 = { questId: quest.id, questContent, questContentCTA: AnalyticsTypes.QuestContentCTA.VISIT_REDEMPTION_LINK, questContentPosition, sourceQuestContent };
        trackQuestContentClickedWithImpression(obj4);
      }
      openURLDefault(tmp);
      obj7 = AdAnalyticsInterfaceExperiment;
    }
  };
  cResult[0] = getQuestImpressionId;
  cResult[1] = quest.id;
  cResult[2] = questContent;
  cResult[3] = questContentPosition;
  cResult[4] = redemptionLink;
  cResult[5] = sourceQuestContent;
  cResult[6] = trackQuestContentClickedWithImpression;
  cResult[7] = fn;
  tmp4 = fn;
}) : ((quest) => {
  quest = quest.quest;
  const redemptionLink = quest.redemptionLink;
  const questContent = quest.questContent;
  const questContentPosition = quest.questContentPosition;
  const sourceQuestContent = quest.sourceQuestContent;
  const trackQuestContentClickedWithImpression = quest(questContent[7]).useTrackQuestContentClickedWithImpression();
  let obj = quest(questContent[7]);
  const getQuestImpressionId = quest(questContent[8]).useGetQuestImpressionId();
  const items = [quest.id, questContent, questContentPosition, sourceQuestContent, trackQuestContentClickedWithImpression, getQuestImpressionId, redemptionLink];
  return trackQuestContentClickedWithImpression.useCallback(() => {
    if (null != redemptionLink) {
      if (obj7.shouldMigrateToAdAnalyticsInterface(AdAnalyticsInterfaceExperiment.AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL, "quest_reward_code_redemption_link")) {
        const obj2 = { type: captureAdUserActionTypes.AdUserActionType.CLICK_INTERNAL, adCreativeType: AdCreativeType.AdCreativeType.QUEST, adCreativeId: quest.id, questContentCTA: AnalyticsTypes.QuestContentCTA.REDEEM_REWARD, surfaceId: questContent, sourceQuestContent, impressionId: getQuestImpressionId(), questContentPosition };
        captureAdUserAction.captureAdUserAction(obj2);
        const tmp18Result = captureAdUserAction;
        const obj3 = { type: captureAdUserActionTypes.AdUserActionType.CLICK_INTERNAL, adCreativeType: AdCreativeType.AdCreativeType.QUEST, adCreativeId: quest.id, questContentCTA: AnalyticsTypes.QuestContentCTA.VISIT_REDEMPTION_LINK, surfaceId: questContent, sourceQuestContent, impressionId: getQuestImpressionId(), questContentPosition };
        captureAdUserAction.captureAdUserAction(obj3);
        const tmp18Result2 = captureAdUserAction;
      } else {
        const obj = { questId: quest.id, questContent, questContentCTA: AnalyticsTypes.QuestContentCTA.REDEEM_REWARD, questContentPosition, sourceQuestContent };
        trackQuestContentClickedWithImpression(obj);
        const obj4 = { questId: quest.id, questContent, questContentCTA: AnalyticsTypes.QuestContentCTA.VISIT_REDEMPTION_LINK, questContentPosition, sourceQuestContent };
        trackQuestContentClickedWithImpression(obj4);
      }
      openURLDefault(tmp);
      obj7 = AdAnalyticsInterfaceExperiment;
    }
  }, items);
});
let closure_6 = tmp3;
ReactCompilerGating = fn(558);
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((isClaimingReward) => {
  const cResult = require("c").c(14);
  isClaimingReward = isClaimingReward.isClaimingReward;
  _require = isClaimingReward;
  const isFetchingRewardCode = isClaimingReward.isFetchingRewardCode;
  questContent = isClaimingReward.questContent;
  const quest = isClaimingReward.quest;
  const rewardCode = isClaimingReward.rewardCode;
  const preview = isClaimingReward.preview;
  const tmp2 = rewardCode(preview.useState(false), 2);
  const hasError = tmp2[0];
  closure_7 = tmp4;
  const tmp5 = rewardCode(preview.useState(false), 2);
  const first1 = tmp5[0];
  closure_9 = tmp5[1];
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    _require = quest(function*(arg0, arg1, arg2) {
      closure_3 = tmp3;
      closure_1_9(true);
      yield closure_0(questContent[5]).claimQuestReward(closure_0, closure_1, closure_2);
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
    const fn = function() {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    cResult[0] = fn;
    let first2 = fn;
  } else {
    first2 = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function v(arg0) {
      try {
        const questRewardCode = QuestActionCreators.fetchQuestRewardCode(arg0);
      } catch (err) {
        closure_7(true);
      }
    };
    cResult[1] = fn2;
    let tmp9 = fn2;
  } else {
    tmp9 = cResult[1];
  }
  closure_11 = tmp9;
  if (cResult[2] === first1) {
    if (cResult[3] === hasError) {
      if (cResult[4] === isClaimingReward) {
        if (cResult[5] === isFetchingRewardCode) {
          if (cResult[6] === preview) {
            if (cResult[7] === quest) {
              if (cResult[8] === questContent) {
                if (cResult[9] === rewardCode) {
                  let tmp10 = cResult[10];
                  let tmp11 = cResult[11];
                }
                const effect = preview.useEffect(tmp10, tmp11);
                if (cResult[12] !== hasError) {
                  const obj3 = { claimCode: first2, fetchCode: tmp9, hasError, setHasError: tmp4 };
                  cResult[12] = hasError;
                  cResult[13] = obj3;
                  let tmp13 = obj3;
                } else {
                  tmp13 = cResult[13];
                }
                return tmp13;
              }
            }
          }
        }
      }
    }
  }
  class L {
    constructor() {
      tmp = true === preview;
      if (!tmp) {
        tmp2 = rewardCode;
        tmp3 = null;
        tmp = null != rewardCode;
      }
      if (!tmp) {
        tmp = closure_6;
      }
      if (!tmp) {
        tmp = closure_0;
      }
      if (!tmp) {
        tmp = closure_8;
      }
      if (!tmp) {
        tmp = isFetchingRewardCode;
      }
      if (!tmp) {
        tmp4 = closure_7;
        flag = false;
        tmp5 = closure_7(false);
        tmp6 = quest;
        userStatus = quest.userStatus;
        tmp7 = null;
        claimedAt = undefined;
        if (userStatus != null) {
          claimedAt = userStatus.claimedAt;
        }
        if (null == claimedAt) {
          tmp12 = closure_10;
          tmp13 = closure_0;
          tmp14 = closure_2;
          tmp15 = questContent;
          tmp16 = closure_10(tmp6.id, closure_0(closure_2[6]).QuestRewardCodePlatforms.CROSS_PLATFORM, questContent);
        } else {
          userStatus2 = tmp6.userStatus;
          claimedAt1 = undefined;
          if (userStatus2 != null) {
            claimedAt1 = userStatus2.claimedAt;
          }
          if (null != claimedAt1) {
            tmp10 = closure_11;
            tmp11 = closure_11(tmp6.id);
          }
        }
      }
      return;
    }
  }
  const items = [first2, tmp9, hasError, isClaimingReward, first1, isFetchingRewardCode, questContent, quest, rewardCode, preview];
  cResult[2] = first1;
  cResult[3] = hasError;
  cResult[4] = isClaimingReward;
  cResult[5] = isFetchingRewardCode;
  cResult[6] = preview;
  cResult[7] = quest;
  cResult[8] = questContent;
  cResult[9] = rewardCode;
  cResult[10] = L;
  cResult[11] = items;
  tmp11 = items;
  tmp10 = L;
}) : ((isClaimingReward) => {
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
    yield closure_0(questContent[5]).claimQuestReward(closure_0, closure_1, closure_2);
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
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/hooks/RewardCodeClaimHooks.tsx");

export const useClaimOrFetchRewardCode = tmp2;
export const useHandleRedemptionLinkClick = tmp3;
export const useClaimRewardCodePrimaryCtaClickHandler = ReactCompilerGating.isReactCompilerEnabled() ? ((claimCode) => {
  const cResult = claimCode(hasError[4]).c(15);
  claimCode = claimCode.claimCode;
  const fetchCode = claimCode.fetchCode;
  hasError = claimCode.hasError;
  const onDismiss = claimCode.onDismiss;
  const quest = claimCode.quest;
  const questContent = claimCode.questContent;
  ({ questContentCTA, questContentPosition } = claimCode);
  const redemptionLink = claimCode.redemptionLink;
  const sourceQuestContent = claimCode.sourceQuestContent;
  if (undefined === questContentCTA) {
    questContentCTA = tmp(tmp2[13]).QuestContentCTA.GET_REWARD_CODE;
  }
  let obj = claimCode(hasError[4]);
  const trackQuestContentClickedWithImpression = claimCode(hasError[7]).useTrackQuestContentClickedWithImpression();
  const tmpResult = claimCode(hasError[7]);
  const getQuestImpressionId = claimCode(hasError[8]).useGetQuestImpressionId();
  const tmp6 = questContentPosition(claimCode);
  closure_12 = tmp6;
  if (cResult[0] === claimCode) {
    if (cResult[1] === fetchCode) {
      if (cResult[2] === getQuestImpressionId) {
        if (cResult[3] === tmp6) {
          if (cResult[4] === hasError) {
            if (cResult[5] === onDismiss) {
              if (cResult[6] === quest.id) {
                let userStatus = quest.userStatus;
                let claimedAt;
                if (userStatus != null) {
                  claimedAt = userStatus.claimedAt;
                }
                if (cResult[7] === claimedAt) {
                  if (cResult[8] === questContent) {
                    if (cResult[9] === questContentCTA) {
                      if (cResult[10] === questContentPosition) {
                        if (cResult[11] === redemptionLink) {
                          if (cResult[12] === sourceQuestContent) {
                            if (cResult[13] === trackQuestContentClickedWithImpression) {
                              let tmp9 = cResult[14];
                            }
                            const userStatus3 = quest.userStatus;
                            return tmp9;
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  cResult[0] = claimCode;
  cResult[1] = fetchCode;
  cResult[2] = getQuestImpressionId;
  cResult[3] = tmp6;
  cResult[4] = hasError;
  cResult[5] = onDismiss;
  ({ id: tmp3[6], userStatus: userStatus2 } = quest);
  let claimedAt1;
  if (userStatus2 != null) {
    claimedAt1 = userStatus2.claimedAt;
  }
  const fn = function n() {
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
        if (obj4.shouldMigrateToAdAnalyticsInterface(AdAnalyticsInterfaceExperiment.AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL, "quest_reward_code_primary_cta")) {
          const obj2 = { type: captureAdUserActionTypes.AdUserActionType.CLICK_INTERNAL, adCreativeType: AdCreativeType.AdCreativeType.QUEST, adCreativeId: quest.id, questContentCTA, surfaceId: questContent, sourceQuestContent, impressionId: getQuestImpressionId(), questContentPosition };
          captureAdUserAction.captureAdUserAction(obj2);
          const tmp23Result = captureAdUserAction;
        } else {
          const obj = { questId: quest.id, questContent, questContentCTA, questContentPosition, sourceQuestContent };
          trackQuestContentClickedWithImpression(obj);
        }
        obj4 = AdAnalyticsInterfaceExperiment;
      }
    } else {
      if (null != redemptionLink) {
        closure_12();
      }
      onDismiss();
    }
  };
  cResult[7] = claimedAt1;
  cResult[8] = questContent;
  cResult[9] = questContentCTA;
  cResult[10] = questContentPosition;
  cResult[11] = redemptionLink;
  cResult[12] = sourceQuestContent;
  cResult[13] = trackQuestContentClickedWithImpression;
  cResult[14] = fn;
  tmp9 = fn;
}) : ((claimCode) => {
  claimCode = claimCode.claimCode;
  const fetchCode = claimCode.fetchCode;
  const hasError = claimCode.hasError;
  const onDismiss = claimCode.onDismiss;
  const quest = claimCode.quest;
  const questContent = claimCode.questContent;
  let GET_REWARD_CODE = claimCode.questContentCTA;
  if (undefined === GET_REWARD_CODE) {
    GET_REWARD_CODE = claimCode(hasError[13]).QuestContentCTA.GET_REWARD_CODE;
  }
  const questContentPosition = claimCode.questContentPosition;
  const redemptionLink = claimCode.redemptionLink;
  const sourceQuestContent = claimCode.sourceQuestContent;
  const trackQuestContentClickedWithImpression = claimCode(hasError[7]).useTrackQuestContentClickedWithImpression();
  let obj = claimCode(hasError[7]);
  const getQuestImpressionId = claimCode(hasError[8]).useGetQuestImpressionId();
  const tmp5 = GET_REWARD_CODE(claimCode);
  closure_12 = tmp5;
  const items = [claimCode, fetchCode, hasError, onDismiss, , , , , , , , , , ];
  ({ id: arr[4], userStatus } = quest);
  let claimedAt;
  if (userStatus != null) {
    claimedAt = userStatus.claimedAt;
  }
  items[5] = claimedAt;
  items[6] = questContent;
  items[7] = GET_REWARD_CODE;
  items[8] = questContentPosition;
  items[9] = trackQuestContentClickedWithImpression;
  items[10] = getQuestImpressionId;
  items[11] = redemptionLink;
  items[12] = sourceQuestContent;
  items[13] = tmp5;
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
        if (obj4.shouldMigrateToAdAnalyticsInterface(AdAnalyticsInterfaceExperiment.AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL, "quest_reward_code_primary_cta")) {
          const obj2 = { type: captureAdUserActionTypes.AdUserActionType.CLICK_INTERNAL, adCreativeType: AdCreativeType.AdCreativeType.QUEST, adCreativeId: quest.id, questContentCTA: GET_REWARD_CODE, surfaceId: questContent, sourceQuestContent, impressionId: getQuestImpressionId(), questContentPosition };
          captureAdUserAction.captureAdUserAction(obj2);
          const tmp23Result = captureAdUserAction;
        } else {
          const obj = { questId: quest.id, questContent, questContentCTA: GET_REWARD_CODE, questContentPosition, sourceQuestContent };
          trackQuestContentClickedWithImpression(obj);
        }
        obj4 = AdAnalyticsInterfaceExperiment;
      }
    } else {
      if (null != redemptionLink) {
        closure_12();
      }
      onDismiss();
    }
  }, items);
});