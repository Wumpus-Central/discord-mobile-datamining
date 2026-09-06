// === Module 11772: QuestRewardCodeClaimBottomSheet ===

// Module 11772 (QuestRewardCodeClaimBottomSheet)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4259 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import _modDef5597 from "module_5597" /* 5597 */;
import ClipboardUtils from "ClipboardUtils" /* 7190 */;
import QuestRewardUtils from "QuestRewardUtils" /* 11290 */;
import noop from "module_19" /* 19 */;
import QuestStore from "QuestStore" /* 7703 */;

require = fn;
function QuestRewardCodeClaimBottomSheet(quest) {
  quest = quest.quest;
  const questContent = quest.questContent;
  let rewardCode;
  let hasError;
  noop = undefined;
  let memo;
  ({ questContentPosition, sourceQuestContent } = quest);
  const tmp3 = closure_10(rewardCode(hasError[7])().bottom);
  let obj = quest(hasError[8]);
  const items = [QuestStore];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ rewardCode: QuestStore.getRewardCode(quest.id), isFetchingRewardCode: QuestStore.isFetchingRewardCode(quest.id), isClaimingReward: QuestStore.isClaimingReward(quest.id) }));
  rewardCode = stateFromStoresObject.rewardCode;
  ({ isFetchingRewardCode, isClaimingReward } = stateFromStoresObject);
  let obj1 = quest(hasError[9]);
  const claimOrFetchRewardCode = obj1.useClaimOrFetchRewardCode({ isClaimingReward, isFetchingRewardCode, quest, questContent, rewardCode });
  hasError = claimOrFetchRewardCode.hasError;
  let obj2 = noop;
  const items1 = [hasError];
  ({ claimCode, fetchCode } = claimOrFetchRewardCode);
  const effect = noop.useEffect(() => {
    if (hasError) {
      const obj = { key: "CLAIM_QUEST_REWARD_ERROR", content: null, icon: null };
      const intl = util.intl;
      obj.content = intl.string(util.t.CKsXk3);
      obj.icon = _modDef5597;
      obj.open(obj);
      ActionSheetActionCreatorsDefault.hideActionSheet();
    }
  }, items1);
  let obj3 = quest(hasError[14]);
  const result = obj3.isTieredRewardCodeQuest({ quest });
  noop = result;
  const items2 = [result, quest, ];
  let tier;
  if (rewardCode != null) {
    tier = rewardCode.tier;
  }
  items2[2] = tier;
  memo = noop.useMemo(() => {
    const getRewardCodeQuestReward = QuestRewardUtils.getRewardCodeQuestReward;
    if (c3) {
      let obj = { quest, idx: null };
      let tier;
      if (rewardCode != null) {
        tier = rewardCode.tier;
      }
      obj.idx = tier;
      let rewardCodeQuestReward = getRewardCodeQuestReward(obj);
    } else {
      obj = { quest, idx: 0 };
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
            redemptionLink = tmp.redemptionLink.replace(REWARD_CODE_PLACEHOLDER, encodeURIComponent(tmp3.code));
          }
          return redemptionLink;
        }
        redemptionLink = tmp.redemptionLink;
      }
    }
  }, items3);
  tmp4(tmp2[9]);
  obj = { claimCode, fetchCode, hasError, onDismiss: tmp(tmp2[13]).hideActionSheet, quest, questContent, questContentPosition, redemptionLink: memo1, sourceQuestContent };
  const items4 = [rewardCode];
  const callback = obj2.useCallback(() => {
    if (null != rewardCode) {
      ClipboardUtils.copy(tmp.code, () => {
        rewardCode(4259);
        const obj = { key: "TOAST_QUEST_REWARD_CODE_COPIED", content: null, icon: null };
        const intl = quest(1114).intl;
        obj.content = intl.string(quest(1114).t.MSaeTe);
        obj.icon = function icon() {
          return closure_1_8(closure_1_0(dependencyMap[16]).CopyIcon, {});
        };
        return obj.open(obj);
      });
    }
  }, items4);
  const tmp4Result = tmp4(tmp2[17]);
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
  obj1.title = intl.string(quest(hasError[11]).t.srzsU2);
  obj.header = closure_8(quest(hasError[19]).BottomSheetTitleHeader, obj1);
  obj2 = { style: tmp3.wrapper, children: null };
  let tmp16Result = null != rewardCode && null != rewardCodeRedemptionInstructions;
  if (tmp16Result) {
    obj3 = { style: tmp3.redemptionInstructions, variant: "text-md/normal", color: "text-default", children: tmp(tmp2[21]).parse(rewardCodeRedemptionInstructions, true, { allowLinks: true }) };
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
    const obj6 = { IconComponent: tmp4(tmp2[16]).CopyIcon };
    tmp16Result = tmp16(tmp4(tmp2[23]).TableRow.Icon, obj6);
  }
  obj5.trailing = tmp16Result;
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
  obj5.onPress = tmp26;
  obj4.children = closure_8(quest(hasError[22]).TableRowGroup, { hasIcons: false, children: closure_8(quest(hasError[23]).TableRow, obj5) });
  const items6 = [closure_8(closure_5, obj4), ];
  let code5;
  if (rewardCode != null) {
    code5 = rewardCode.code;
  }
  let tmp16Result1 = null == code5;
  if (tmp16Result1) {
    const obj8 = { style: tmp3.claimingIndicator, size: 24 };
    tmp16Result1 = tmp16(memo, obj8);
  }
  const obj9 = { children: null };
  items6[1] = tmp16Result1;
  items5[1] = closure_9(closure_5, { children: items6 });
  obj9.children = items5;
  const items7 = [closure_9(closure_5, obj9), ];
  const obj10 = { style: tmp3.footer, children: null };
  const obj11 = { disabled: isFetchingRewardCode, onPress: claimRewardCodePrimaryCtaClickHandler, grow: true, text: null };
  if (null != memo1) {
    if ("" !== memo1) {
      const intl3 = tmp4(tmp2[11]).intl;
      let stringResult = intl3.string(tmp4(tmp2[11]).t["+zx47d"]);
    }
    obj11.text = stringResult;
    obj10.children = tmp16(tmp30, obj11);
    items7[1] = tmp16(tmp18, obj10);
    obj2.children = items7;
    obj.children = tmp17(tmp18, obj2);
    return tmp16(tmp4(tmp2[18]).BottomSheet, obj);
  }
  const intl2 = tmp4(tmp2[11]).intl;
  stringResult = intl2.string(tmp4(tmp2[11]).t["23SS+z"]);
}
get_ActivityIndicator = fn(17);
({ ActivityIndicator: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const REWARD_CODE_PLACEHOLDER = fn(5444).REWARD_CODE_PLACEHOLDER;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4560);
let closure_10 = createStyles.createStyles((paddingBottom) => {
  let obj = { wrapper: null, footer: null, claimingIndicator: null, codeCopyWrapperLoading: null, redemptionInstructions: null };
  obj = { display: "flex", paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_24 };
  obj.wrapper = obj;
  obj = { paddingBottom };
  obj.footer = obj;
  obj.claimingIndicator = { position: "absolute", left: "50%", top: "50%", marginLeft: -12, marginTop: -12 };
  obj.codeCopyWrapperLoading = { opacity: 0.5 };
  obj.redemptionInstructions = { marginBottom: 24 };
  return obj;
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/QuestRewardCodeClaimBottomSheet.native.tsx");

export default function QuestRewardCodeClaimBottomSheetConnected(questContentPosition) {
  ({ questId: require, questContent } = questContentPosition);
  questContentPosition = questContentPosition.questContentPosition;
  const sourceQuestContent = questContentPosition.sourceQuestContent;
  let obj = require("initialize");
  const items = [QuestStore];
  const stateFromStores = obj.useStateFromStores(items, () => QuestStore.getQuest(require));
  if (null == stateFromStores) {
    questContent(tmp2[13]).hideActionSheet();
    let tmp5 = null;
    const obj3 = questContent(tmp2[13]);
  } else {
    obj = {
      overrideVisibility: true,
      questOrQuests: stateFromStores,
      questContent,
      questContentPosition,
      sourceQuestContent,
      children() {
          return React6(QuestRewardCodeClaimBottomSheet, { quest: stateFromStores, questContent, questContentPosition, sourceQuestContent });
        }
    };
    tmp5 = closure_8(require("QuestContentImpressionTracker").QuestContentImpressionTrackerNative, obj);
  }
  return tmp5;
};