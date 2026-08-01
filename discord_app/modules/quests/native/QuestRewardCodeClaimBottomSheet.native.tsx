// === Module 10978: QuestRewardCodeClaimBottomSheet ===

// Module 10978 (QuestRewardCodeClaimBottomSheet)
import RedesignBottomSheetTitleHeaderBase from "RedesignBottomSheetTitleHeaderBase";
import get_ActivityIndicator from "_getQuestsInstructionsToWinReward";
import initializeState from "initializeState";
import { REWARD_CODE_PLACEHOLDER } from "QuestsExperimentLocations";
import jsxProd from "get defaultRules";
import createCacheKey from "createCacheKey";

let c4;
let c5;
let c9;
let metroImportAll;
const require = arg1;
function QuestRewardCodeClaimBottomSheet(quest) {
  let claimCode;
  let fetchCode;
  let isClaimingReward;
  let isFetchingRewardCode;
  let questContentPosition;
  let sourceQuestContent;
  quest = quest.quest;
  const questContent = quest.questContent;
  let rewardCode;
  let hasError;
  let React;
  let memo;
  ({ questContentPosition, sourceQuestContent } = quest);
  const tmp3 = callback2(rewardCode(hasError[7])().bottom);
  let obj = quest(hasError[8]);
  const items = [initializeState];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ rewardCode: outer1_6.getRewardCode(quest.id), isFetchingRewardCode: outer1_6.isFetchingRewardCode(quest.id), isClaimingReward: outer1_6.isClaimingReward(quest.id) }));
  rewardCode = stateFromStoresObject.rewardCode;
  ({ isFetchingRewardCode, isClaimingReward } = stateFromStoresObject);
  let obj1 = quest(hasError[9]);
  const claimOrFetchRewardCode = obj1.useClaimOrFetchRewardCode({ isClaimingReward, isFetchingRewardCode, quest, questContent, rewardCode });
  hasError = claimOrFetchRewardCode.hasError;
  let obj2 = React;
  const items1 = [hasError];
  ({ claimCode, fetchCode } = claimOrFetchRewardCode);
  const effect = React.useEffect(() => {
    if (hasError) {
      let obj = rewardCode(hasError[10]);
      obj = { key: "CLAIM_QUEST_REWARD_ERROR", content: null, icon: null };
      const intl = quest(hasError[11]).intl;
      obj[1] = intl.string(quest(hasError[11]).t.CKsXk3);
      obj[2] = rewardCode(hasError[12]);
      obj.open(obj);
      rewardCode(hasError[13]).hideActionSheet();
      const obj3 = rewardCode(hasError[13]);
    }
  }, items1);
  let obj3 = quest(hasError[14]);
  const result = obj3.isTieredRewardCodeQuest({ quest });
  React = result;
  const items2 = [result, quest, ];
  let tier;
  if (rewardCode != null) {
    tier = rewardCode.tier;
  }
  items2[2] = tier;
  memo = React.useMemo(() => {
    const getRewardCodeQuestReward = quest(hasError[14]).getRewardCodeQuestReward;
    if (c3) {
      let obj = { quest: null, idx: null };
      obj[0] = quest;
      let tier;
      if (rewardCode != null) {
        tier = rewardCode.tier;
      }
      obj[1] = tier;
      let rewardCodeQuestReward = getRewardCodeQuestReward(obj);
    } else {
      obj = { quest: null, idx: 0 };
      obj[0] = quest;
      rewardCodeQuestReward = getRewardCodeQuestReward(obj);
    }
    return rewardCodeQuestReward;
  }, items2);
  const items3 = [memo, rewardCode];
  const memo1 = obj2.useMemo(() => {
    let redemptionLink;
    if (memo != null) {
      redemptionLink = tmp.redemptionLink;
    }
    if (null != redemptionLink) {
      if ("" !== tmp.redemptionLink) {
        let code;
        if (rewardCode != null) {
          code = tmp3.code;
        }
        if (null != code) {
          if ("" !== tmp3.code) {
            const _encodeURIComponent = encodeURIComponent;
            redemptionLink = tmp.redemptionLink.replace(outer1_7, encodeURIComponent(tmp3.code));
            const str2 = tmp.redemptionLink;
          }
          return redemptionLink;
        }
        redemptionLink = tmp.redemptionLink;
      }
    }
  }, items3);
  let tmp4Result = tmp4(tmp2[9]);
  obj = { claimCode, fetchCode, hasError, onDismiss: tmp(tmp2[13]).hideActionSheet, quest, questContent, questContentPosition, redemptionLink: memo1, sourceQuestContent };
  const items4 = [rewardCode];
  const callback = obj2.useCallback(() => {
    if (null != rewardCode) {
      quest(hasError[15]).copy(tmp.code, () => {
        let obj = callback2(3894);
        obj = { key: "TOAST_QUEST_REWARD_CODE_COPIED", content: null, icon: null };
        const intl = callback(1236).intl;
        obj[1] = intl.string(callback(1236).t.MSaeTe);
        obj[2] = function icon() {
          return callback2(callback(table[16]).CopyIcon, {});
        };
        return obj.open(obj);
      });
      let obj = quest(hasError[15]);
    }
  }, items4);
  tmp4Result = tmp4(tmp2[17]);
  const rewardCodeRedemptionInstructions = tmp4Result.getRewardCodeRedemptionInstructions({ quest, rewardCode });
  if (!isFetchingRewardCode) {
    isFetchingRewardCode = isClaimingReward;
  }
  if (!isFetchingRewardCode) {
    let code;
    if (rewardCode != null) {
      code = rewardCode.code;
    }
    isFetchingRewardCode = null == code;
  }
  obj = { header: null, startExpanded: true, children: null };
  obj1 = { title: null };
  let intl = tmp4(tmp2[11]).intl;
  obj1[0] = intl.string(quest(hasError[11]).t.srzsU2);
  obj[0] = callback(quest(hasError[19]).BottomSheetTitleHeader, obj1);
  obj2 = { style: tmp3.wrapper, children: null };
  let tmp16Result = null != rewardCode && null != rewardCodeRedemptionInstructions;
  if (tmp16Result) {
    obj3 = { style: null, variant: "text-md/normal", color: "text-default", children: null };
    obj3[0] = tmp3.redemptionInstructions;
    obj3[3] = tmp(tmp2[21]).parse(rewardCodeRedemptionInstructions, true, { allowLinks: true });
    tmp16Result = tmp16(tmp4(tmp2[20]).Text, obj3);
    const tmpResult = tmp(tmp2[21]);
  }
  const items5 = [tmp16Result, ];
  let code1;
  if (rewardCode != null) {
    code1 = rewardCode.code;
  }
  const obj4 = { style: null == code1 && tmp3.codeCopyWrapperLoading, children: null };
  let code2;
  if (rewardCode != null) {
    code2 = rewardCode.code;
  }
  const obj5 = { label: code2, trailing: null, onPress: null };
  let code3;
  if (rewardCode != null) {
    code3 = rewardCode.code;
  }
  tmp16Result = null != code3;
  if (tmp16Result) {
    const obj6 = { IconComponent: null };
    obj6[0] = tmp4(tmp2[16]).CopyIcon;
    tmp16Result = tmp16(tmp4(tmp2[23]).TableRow.Icon, obj6);
  }
  obj5[1] = tmp16Result;
  let code4;
  if (rewardCode != null) {
    code4 = rewardCode.code;
  }
  let tmp26;
  if (null != code4) {
    tmp26 = callback;
  }
  const claimRewardCodePrimaryCtaClickHandler = tmp4Result.useClaimRewardCodePrimaryCtaClickHandler(obj);
  const tmp21 = null == code1 && tmp3.codeCopyWrapperLoading;
  obj5[2] = tmp26;
  obj4[1] = callback(quest(hasError[22]).TableRowGroup, { hasIcons: false, children: callback(quest(hasError[23]).TableRow, obj5) });
  const items6 = [callback(closure_5, obj4), ];
  let code5;
  if (rewardCode != null) {
    code5 = rewardCode.code;
  }
  let tmp16Result1 = null == code5;
  if (tmp16Result1) {
    const obj8 = { style: null, size: 24 };
    obj8[0] = tmp3.claimingIndicator;
    tmp16Result1 = tmp16(memo, obj8);
  }
  const obj9 = { children: null };
  items6[1] = tmp16Result1;
  items5[1] = closure_9(closure_5, { children: items6 });
  obj9[0] = items5;
  const items7 = [closure_9(closure_5, obj9), ];
  const obj10 = { style: tmp3.footer, children: null };
  const obj11 = { disabled: isFetchingRewardCode, onPress: claimRewardCodePrimaryCtaClickHandler, grow: true, text: null };
  if (null != memo1) {
    if ("" !== memo1) {
      const intl3 = tmp4(tmp2[11]).intl;
      let stringResult = intl3.string(tmp4(tmp2[11]).t["+zx47d"]);
    }
    obj11[3] = stringResult;
    obj10[1] = tmp16(tmp30, obj11);
    items7[1] = tmp16(tmp18, obj10);
    obj2[1] = items7;
    obj[2] = tmp17(tmp18, obj2);
    return tmp16(tmp4(tmp2[18]).BottomSheet, obj);
  }
  const intl2 = tmp4(tmp2[11]).intl;
  stringResult = intl2.string(tmp4(tmp2[11]).t["23SS+z"]);
}
({ ActivityIndicator: c4, View: c5 } = get_ActivityIndicator);
({ jsx: metroImportAll, jsxs: c9 } = jsxProd);
let closure_10 = createCacheKey.createStyles((paddingBottom) => {
  let obj = { wrapper: null, footer: null, claimingIndicator: null, codeCopyWrapperLoading: null, redemptionInstructions: null };
  obj = { display: "flex", paddingHorizontal: importDefault(712).space.PX_16, gap: importDefault(712).space.PX_24 };
  obj[0] = obj;
  obj = { paddingBottom };
  obj[1] = obj;
  obj[2] = { position: "absolute", left: "50%", top: "50%", marginLeft: -12, marginTop: -12 };
  obj[3] = { opacity: 0.5 };
  obj[4] = { marginBottom: 24 };
  return obj;
});
let result = require("initializeState").fileFinishedImporting("modules/quests/native/QuestRewardCodeClaimBottomSheet.native.tsx");

export default function QuestRewardCodeClaimBottomSheetConnected(questContentPosition) {
  let questContent;
  let require;
  ({ questId: require, questContent } = questContentPosition);
  questContentPosition = questContentPosition.questContentPosition;
  const sourceQuestContent = questContentPosition.sourceQuestContent;
  let stateFromStores;
  let obj = require(questContentPosition[8]);
  const items = [initializeState];
  stateFromStores = obj.useStateFromStores(items, () => outer1_6.getQuest(closure_0));
  if (null == stateFromStores) {
    questContent(tmp2[13]).hideActionSheet();
    let tmp5 = null;
    const obj3 = questContent(tmp2[13]);
  } else {
    obj = { overrideVisibility: true, questOrQuests: null, questContent: null, questContentPosition: null, sourceQuestContent: null, children: null };
    obj[1] = stateFromStores;
    obj[2] = questContent;
    obj[3] = questContentPosition;
    obj[4] = sourceQuestContent;
    obj[5] = function children() {
      return outer1_8(outer1_11, { quest: stateFromStores, questContent, questContentPosition, sourceQuestContent });
    };
    tmp5 = callback(require(tmp2[25]).QuestContentImpressionTrackerNative, obj);
  }
  return tmp5;
};