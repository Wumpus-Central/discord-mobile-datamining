// === Module 10953: RewardCodeClaimHooks ===

// Module 10953 (RewardCodeClaimHooks)
import openURLDefault from "openURL" /* 4559 */;
import QuestTypes from "QuestTypes" /* 5626 */;
import AdCreativeType from "AdCreativeType" /* 5630 */;
import AnalyticsTypes from "AnalyticsTypes" /* 7212 */;
import captureAdUserAction3 from "captureAdUserAction" /* 7213 */;
import captureAdUserActionTypes from "captureAdUserActionTypes" /* 7223 */;
import AdAnalyticsInterfaceExperiment from "AdAnalyticsInterfaceExperiment" /* 7224 */;
import QuestActionCreators from "QuestActionCreators" /* 9994 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let _require, c4, closure_12, isClaimingReward;

let ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((isClaimingReward) => {
  let first2;
  let questContent;
  let tmp9;
  let obj = isClaimingReward(questContent[4]);
  const cResult = obj.c(14);
  isClaimingReward = isClaimingReward.isClaimingReward;
  const isFetchingRewardCode = isClaimingReward.isFetchingRewardCode;
  questContent = isClaimingReward.questContent;
  const quest = isClaimingReward.quest;
  const rewardCode = isClaimingReward.rewardCode;
  const preview = isClaimingReward.preview;
  let obj2 = preview;
  const tmp2 = rewardCode(preview.useState(false), 2);
  const hasError = tmp2[0];
  const tmp4 = tmp2[1];
  let closure_7 = tmp4;
  const tmp5 = rewardCode(preview.useState(false), 2);
  const first1 = tmp5[0];
  let closure_9 = tmp5[1];
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    _require = quest(function*(arg0, arg1, arg2) {
      let obj2;
      let v3;
      closure_0 = arg0;
      let closure_1 = arg1;
      let closure_2 = arg2;
      if (v3 === 2) {
        v3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        let c6;
        try {
          v3 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              v3 = 3;
              throw value;
            } else if (arg0 === 2) {
              v3 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              let closure_3 = tmp;
              c6 = 1;
              closure_1_9(true);
              c4 = 2;
              v3 = 1;
              const obj5 = { value: obj2.claimQuestReward(closure_0, closure_1, closure_2), done: false };
              obj2 = closure_0(questContent[5]);
              return obj5;
            }
          } else {
            if (1 === tmp4) {
              c6 = 0;
              v3(true);
              closure_1_9(false);
            } else if (arg0 === 1) {
              v3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 0;
              v3 = 3;
              const obj = { value, done: true };
              return obj;
            } else {
              v3(false);
              closure_1_9(false);
              c6 = 0;
            }
            v3 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp23) {
          let closure_5 = tmp23;
          if (0 === c6) {
            v3 = 3;
            throw tmp23;
          } else {
            c4 = 1;
          }
        }
      }
    });
    const fn = function() {
      return closure_0(...arguments);
    };
    cResult[0] = fn;
    first2 = fn;
  } else {
    first2 = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function v(arg0) {
      try {
        const obj = QuestActionCreators;
        const questRewardCode = obj.fetchQuestRewardCode(arg0);
      } catch (err) {
        closure_7(true);
      }
    };
    cResult[1] = fn2;
    tmp9 = fn2;
  } else {
    tmp9 = cResult[1];
  }
  let closure_11 = tmp9;
  if (cResult[2] === first1) {
    if (cResult[3] === hasError) {
      if (cResult[4] === isClaimingReward) {
        if (cResult[5] === isFetchingRewardCode) {
          if (cResult[6] === preview) {
            if (cResult[7] === quest) {
              if (cResult[8] === questContent) {
                let tmp10;
                let tmp11;
                let tmp13;
                if (cResult[9] === rewardCode) {
                  tmp10 = cResult[10];
                  tmp11 = cResult[11];
                }
                const effect = obj2.useEffect(tmp10, tmp11);
                if (cResult[12] !== hasError) {
                  let obj3 = { claimCode: first2, fetchCode: tmp9, hasError, setHasError: tmp4 };
                  cResult[12] = hasError;
                  cResult[13] = obj3;
                  tmp13 = obj3;
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
      const tmp = true === preview || null != rewardCode || first || isClaimingReward || first1 || isFetchingRewardCode;
      if (!tmp) {
        closure_7(false);
        const userStatus = quest.userStatus;
        let claimedAt;
        if (userStatus != null) {
          claimedAt = userStatus.claimedAt;
        }
        if (null == claimedAt) {
          first2(quest.id, QuestTypes.QuestRewardCodePlatforms.CROSS_PLATFORM, questContent);
        } else {
          const userStatus2 = quest.userStatus;
          let claimedAt1;
          if (userStatus2 != null) {
            claimedAt1 = userStatus2.claimedAt;
          }
          if (null != claimedAt1) {
            closure_11(quest.id);
          }
        }
      }
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
  let closure_9 = tmp4[1];
  const useCallback = preview.useCallback;
  let closure_0 = quest(function*(arg0, arg1, arg2) {
    let obj2;
    let v3;
    closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    if (v3 === 2) {
      v3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c6;
      try {
        v3 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            v3 = 3;
            throw value;
          } else if (arg0 === 2) {
            v3 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            let closure_3 = tmp;
            c6 = 1;
            closure_1_9(true);
            c4 = 2;
            v3 = 1;
            const obj5 = { value: obj2.claimQuestReward(closure_0, closure_1, closure_2), done: false };
            obj2 = closure_0(questContent[5]);
            return obj5;
          }
        } else {
          if (1 === tmp4) {
            c6 = 0;
            v3(true);
            closure_1_9(false);
          } else if (arg0 === 1) {
            v3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 0;
            v3 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            v3(false);
            closure_1_9(false);
            c6 = 0;
          }
          v3 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp23) {
        let closure_5 = tmp23;
        if (0 === c6) {
          v3 = 3;
          throw tmp23;
        } else {
          c4 = 1;
        }
      }
    }
  });
  const claimCode = useCallback(function() {
    return closure_0(...arguments);
  }, []);
  const fetchCode = preview.useCallback((arg0) => {
    try {
      const obj = QuestActionCreators;
      const questRewardCode = obj.fetchQuestRewardCode(arg0);
    } catch (err) {
      setHasError(true);
    }
  }, []);
  const items = [claimCode, fetchCode, hasError, isClaimingReward, first1, isFetchingRewardCode, questContent, quest, rewardCode, preview];
  const effect = preview.useEffect(() => {
    const tmp = true === preview || null != rewardCode || hasError || isClaimingReward || first1 || isFetchingRewardCode;
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
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((quest) => {
  let questContent;
  let obj = quest(questContent[4]);
  const cResult = obj.c(8);
  quest = quest.quest;
  const redemptionLink = quest.redemptionLink;
  questContent = quest.questContent;
  const questContentPosition = quest.questContentPosition;
  const sourceQuestContent = quest.sourceQuestContent;
  let obj2 = quest(questContent[7]);
  const trackQuestContentClickedWithImpression = obj2.useTrackQuestContentClickedWithImpression();
  let obj3 = quest(questContent[8]);
  const getQuestImpressionId = obj3.useGetQuestImpressionId();
  if (cResult[0] === getQuestImpressionId) {
    if (cResult[1] === quest.id) {
      if (cResult[2] === questContent) {
        if (cResult[3] === questContentPosition) {
          if (cResult[4] === redemptionLink) {
            if (cResult[5] === sourceQuestContent) {
              let tmp4;
              if (cResult[6] === trackQuestContentClickedWithImpression) {
                tmp4 = cResult[7];
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
      const obj5 = AdAnalyticsInterfaceExperiment;
      if (obj5.shouldMigrateToAdAnalyticsInterface(AdAnalyticsInterfaceExperiment.AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL, "quest_reward_code_redemption_link")) {
        const obj2 = { type: captureAdUserActionTypes.AdUserActionType.CLICK_INTERNAL, adCreativeType: AdCreativeType.AdCreativeType.QUEST, adCreativeId: quest.id, questContentCTA: AnalyticsTypes.QuestContentCTA.REDEEM_REWARD, surfaceId: questContent, sourceQuestContent, impressionId: getQuestImpressionId(), questContentPosition };
        const captureAdUserAction = captureAdUserAction3.captureAdUserAction;
        captureAdUserAction3;
        captureAdUserAction(obj2);
        const obj3 = { type: captureAdUserActionTypes.AdUserActionType.CLICK_INTERNAL, adCreativeType: AdCreativeType.AdCreativeType.QUEST, adCreativeId: quest.id, questContentCTA: AnalyticsTypes.QuestContentCTA.VISIT_REDEMPTION_LINK, surfaceId: questContent, sourceQuestContent, impressionId: getQuestImpressionId(), questContentPosition };
        const captureAdUserAction2 = captureAdUserAction3.captureAdUserAction;
        captureAdUserAction3;
        captureAdUserAction2(obj3);
      } else {
        const obj = { questId: quest.id, questContent, questContentCTA: AnalyticsTypes.QuestContentCTA.REDEEM_REWARD, questContentPosition, sourceQuestContent };
        trackQuestContentClickedWithImpression(obj);
        const obj4 = { questId: quest.id, questContent, questContentCTA: AnalyticsTypes.QuestContentCTA.VISIT_REDEMPTION_LINK, questContentPosition, sourceQuestContent };
        trackQuestContentClickedWithImpression(obj4);
      }
      openURLDefault(tmp);
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
  let obj = quest(questContent[7]);
  const trackQuestContentClickedWithImpression = obj.useTrackQuestContentClickedWithImpression();
  let obj2 = quest(questContent[8]);
  const getQuestImpressionId = obj2.useGetQuestImpressionId();
  const items = [quest.id, questContent, questContentPosition, sourceQuestContent, trackQuestContentClickedWithImpression, getQuestImpressionId, redemptionLink];
  return trackQuestContentClickedWithImpression.useCallback(() => {
    if (null != redemptionLink) {
      const obj5 = AdAnalyticsInterfaceExperiment;
      if (obj5.shouldMigrateToAdAnalyticsInterface(AdAnalyticsInterfaceExperiment.AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL, "quest_reward_code_redemption_link")) {
        const obj2 = { type: captureAdUserActionTypes.AdUserActionType.CLICK_INTERNAL, adCreativeType: AdCreativeType.AdCreativeType.QUEST, adCreativeId: quest.id, questContentCTA: AnalyticsTypes.QuestContentCTA.REDEEM_REWARD, surfaceId: questContent, sourceQuestContent, impressionId: getQuestImpressionId(), questContentPosition };
        const captureAdUserAction = captureAdUserAction3.captureAdUserAction;
        captureAdUserAction3;
        captureAdUserAction(obj2);
        const obj3 = { type: captureAdUserActionTypes.AdUserActionType.CLICK_INTERNAL, adCreativeType: AdCreativeType.AdCreativeType.QUEST, adCreativeId: quest.id, questContentCTA: AnalyticsTypes.QuestContentCTA.VISIT_REDEMPTION_LINK, surfaceId: questContent, sourceQuestContent, impressionId: getQuestImpressionId(), questContentPosition };
        const captureAdUserAction2 = captureAdUserAction3.captureAdUserAction;
        captureAdUserAction3;
        captureAdUserAction2(obj3);
      } else {
        const obj = { questId: quest.id, questContent, questContentCTA: AnalyticsTypes.QuestContentCTA.REDEEM_REWARD, questContentPosition, sourceQuestContent };
        trackQuestContentClickedWithImpression(obj);
        const obj4 = { questId: quest.id, questContent, questContentCTA: AnalyticsTypes.QuestContentCTA.VISIT_REDEMPTION_LINK, questContentPosition, sourceQuestContent };
        trackQuestContentClickedWithImpression(obj4);
      }
      openURLDefault(tmp);
    }
  }, items);
});
let closure_6 = tmp3;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((claimCode) => {
  let hasError;
  let questContentCTA;
  let questContentPosition;
  let userStatus2;
  let obj = claimCode(hasError[4]);
  const cResult = obj.c(15);
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
  const tmpResult = claimCode(hasError[7]);
  const trackQuestContentClickedWithImpression = tmpResult.useTrackQuestContentClickedWithImpression();
  const tmpResult2 = claimCode(hasError[8]);
  const getQuestImpressionId = tmpResult2.useGetQuestImpressionId();
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
                const tmp7 = cResult[7];
                if (userStatus != null) {
                  claimedAt = userStatus.claimedAt;
                }
                if (tmp7 === claimedAt) {
                  if (cResult[8] === questContent) {
                    if (cResult[9] === questContentCTA) {
                      if (cResult[10] === questContentPosition) {
                        if (cResult[11] === redemptionLink) {
                          if (cResult[12] === sourceQuestContent) {
                            let tmp10;
                            if (cResult[13] === trackQuestContentClickedWithImpression) {
                              tmp10 = cResult[14];
                            }
                            const userStatus3 = quest.userStatus;
                            return tmp10;
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
        const obj3 = AdAnalyticsInterfaceExperiment;
        if (obj3.shouldMigrateToAdAnalyticsInterface(AdAnalyticsInterfaceExperiment.AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL, "quest_reward_code_primary_cta")) {
          const obj2 = { type: captureAdUserActionTypes.AdUserActionType.CLICK_INTERNAL, adCreativeType: AdCreativeType.AdCreativeType.QUEST, adCreativeId: quest.id, questContentCTA, surfaceId: questContent, sourceQuestContent, impressionId: getQuestImpressionId(), questContentPosition };
          const captureAdUserAction = captureAdUserAction3.captureAdUserAction;
          captureAdUserAction3;
          captureAdUserAction(obj2);
        } else {
          const obj = { questId: quest.id, questContent, questContentCTA, questContentPosition, sourceQuestContent };
          trackQuestContentClickedWithImpression(obj);
        }
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
  tmp10 = fn;
}) : ((claimCode) => {
  let userStatus;
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
  let obj = claimCode(hasError[7]);
  const trackQuestContentClickedWithImpression = obj.useTrackQuestContentClickedWithImpression();
  let obj2 = claimCode(hasError[8]);
  const getQuestImpressionId = obj2.useGetQuestImpressionId();
  const tmp5 = GET_REWARD_CODE(claimCode);
  closure_12 = tmp5;
  const items = [claimCode, fetchCode, hasError, onDismiss, , , , , , , , , , ];
  ({ id: arr[4], userStatus } = quest);
  let claimedAt;
  const useCallback = questContent.useCallback;
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
  return useCallback(() => {
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
        const obj3 = AdAnalyticsInterfaceExperiment;
        if (obj3.shouldMigrateToAdAnalyticsInterface(AdAnalyticsInterfaceExperiment.AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL, "quest_reward_code_primary_cta")) {
          const obj2 = { type: captureAdUserActionTypes.AdUserActionType.CLICK_INTERNAL, adCreativeType: AdCreativeType.AdCreativeType.QUEST, adCreativeId: quest.id, questContentCTA: GET_REWARD_CODE, surfaceId: questContent, sourceQuestContent, impressionId: getQuestImpressionId(), questContentPosition };
          const captureAdUserAction = captureAdUserAction3.captureAdUserAction;
          captureAdUserAction3;
          captureAdUserAction(obj2);
        } else {
          const obj = { questId: quest.id, questContent, questContentCTA: GET_REWARD_CODE, questContentPosition, sourceQuestContent };
          trackQuestContentClickedWithImpression(obj);
        }
      }
    } else {
      if (null != redemptionLink) {
        closure_12();
      }
      onDismiss();
    }
  }, items);
});
const result = size.fileFinishedImporting("modules/quests/hooks/RewardCodeClaimHooks.tsx");

export const useClaimOrFetchRewardCode = tmp2;
export const useHandleRedemptionLinkClick = tmp3;
export const useClaimRewardCodePrimaryCtaClickHandler = tmp4;