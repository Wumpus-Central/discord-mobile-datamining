// discord_app/modules/quests/native/QuestRewardCodeClaimBottomSheet.native.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import ToastActionCreatorsDefault from "../../toast/native/ToastActionCreators.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import _modDef5814 from "../../../../_runtime/metro/05814__.js";
import ClipboardUtils from "../../../utils/ClipboardUtils.native.tsx";
import QuestRewardUtils from "../utils/QuestRewardUtils.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import QuestStore from "../QuestStore.tsx";

const require = globalThis.__r;

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
  const items = [QuestStore];
  const stateFromStoresObject = quest(hasError[8]).useStateFromStoresObject(items, () => ({
    rewardCode: QuestStore.getRewardCode(quest.id),
    isFetchingRewardCode: QuestStore.isFetchingRewardCode(quest.id),
    isClaimingReward: QuestStore.isClaimingReward(quest.id),
  }));
  rewardCode = stateFromStoresObject.rewardCode;
  ({ isFetchingRewardCode, isClaimingReward } = stateFromStoresObject);
  let obj = quest(hasError[8]);
  const claimOrFetchRewardCode = quest(hasError[9]).useClaimOrFetchRewardCode({
    isClaimingReward,
    isFetchingRewardCode,
    quest,
    questContent,
    rewardCode,
  });
  hasError = claimOrFetchRewardCode.hasError;
  const items1 = [hasError];
  ({ claimCode, fetchCode } = claimOrFetchRewardCode);
  const effect = noop.useEffect(() => {
    if (hasError) {
      const obj2 = { key: "CLAIM_QUEST_REWARD_ERROR", content: null, icon: null };
      const intl = util.intl;
      obj2.content = intl.string(util.t.CKsXk3);
      obj2.icon = _modDef5814;
      ToastActionCreatorsDefault.open(obj2);
      ActionSheetActionCreatorsDefault.hideActionSheet();
    }
  }, items1);
  let obj2 = quest(hasError[9]);
  const result = quest(hasError[14]).isTieredRewardCodeQuest({ quest });
  noop = result;
  const items2 = [result, quest];
  let tier;
  if (rewardCode != null) {
    tier = rewardCode.tier;
  }
  items2[2] = tier;
  memo = noop.useMemo(() => {
    const getRewardCodeQuestReward = QuestRewardUtils.getRewardCodeQuestReward;
    if (c3) {
      const obj2 = { quest, idx: null };
      let tier;
      if (rewardCode != null) {
        tier = rewardCode.tier;
      }
      obj2.idx = tier;
      let rewardCodeQuestReward = getRewardCodeQuestReward(obj2);
    } else {
      const obj = { quest, idx: 0 };
      rewardCodeQuestReward = getRewardCodeQuestReward(obj);
    }
    return rewardCodeQuestReward;
  }, items2);
  const items3 = [memo, rewardCode];
  const memo1 = obj3.useMemo(() => {
    let redemptionLink1;
    if (memo != null) {
      redemptionLink1 = memo.redemptionLink;
    }
    if (null != redemptionLink1) {
      if ("" !== memo.redemptionLink) {
        let code;
        if (rewardCode != null) {
          code = rewardCode.code;
        }
        if (null != code) {
          if ("" !== rewardCode.code) {
            const _encodeURIComponent = encodeURIComponent;
            let redemptionLink = memo.redemptionLink.replace(
              REWARD_CODE_PLACEHOLDER,
              encodeURIComponent(rewardCode.code),
            );
          }
          return redemptionLink;
        }
        redemptionLink = memo.redemptionLink;
      }
    }
  }, items3);
  const obj4 = quest(hasError[14]);
  const tmp4Result = quest(hasError[9]);
  const items4 = [rewardCode];
  const obj5 = {
    claimCode,
    fetchCode,
    hasError,
    onDismiss: rewardCode(hasError[13]).hideActionSheet,
    quest,
    questContent,
    questContentPosition,
    redemptionLink: memo1,
    sourceQuestContent,
  };
  const callback = obj3.useCallback(() => {
    if (null != rewardCode) {
      ClipboardUtils.copy(tmp.code, () => {
        const obj2 = { key: "TOAST_QUEST_REWARD_CODE_COPIED", content: null, icon: null };
        const intl = quest(1115).intl;
        obj2.content = intl.string(quest(1115).t.MSaeTe);
        obj2.icon = function icon() {
          return closure_1_8(closure_1_0(dependencyMap[16]).CopyIcon, {});
        };
        return rewardCode(4454).open(obj2);
      });
    }
  }, items4);
  const claimRewardCodePrimaryCtaClickHandler = tmp4Result.useClaimRewardCodePrimaryCtaClickHandler({
    claimCode,
    fetchCode,
    hasError,
    onDismiss: rewardCode(hasError[13]).hideActionSheet,
    quest,
    questContent,
    questContentPosition,
    redemptionLink: memo1,
    sourceQuestContent,
  });
  const rewardCodeRedemptionInstructions = quest(hasError[17]).getRewardCodeRedemptionInstructions({
    quest,
    rewardCode,
  });
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
  const obj6 = { header: null, startExpanded: true, children: null };
  const obj7 = { title: null };
  let intl = tmp4(tmp2[11]).intl;
  obj7.title = intl.string(quest(hasError[11]).t.srzsU2);
  obj6.header = closure_8(quest(hasError[19]).BottomSheetTitleHeader, obj7);
  const obj8 = { style: tmp3.wrapper, children: null };
  let tmp16Result = null != rewardCode && null != rewardCodeRedemptionInstructions;
  if (tmp16Result) {
    const obj9 = {
      style: tmp3.redemptionInstructions,
      variant: "text-md/normal",
      color: "text-default",
      children: tmp(tmp2[21]).parse(rewardCodeRedemptionInstructions, true, { allowLinks: true }),
    };
    tmp16Result = closure_8(tmp4(tmp2[20]).Text, obj9);
    const tmpResult = tmp(tmp2[21]);
  }
  const items5 = [tmp16Result];
  let code1;
  if (rewardCode != null) {
    code1 = rewardCode.code;
  }
  const obj10 = { style: null == code1 && tmp3.codeCopyWrapperLoading, children: null };
  let code2;
  if (rewardCode != null) {
    code2 = rewardCode.code;
  }
  const obj11 = { label: code2, trailing: null, onPress: null };
  let code3;
  if (rewardCode != null) {
    code3 = rewardCode.code;
  }
  let tmp16Result3 = null != code3;
  if (tmp16Result3) {
    const obj12 = { IconComponent: tmp4(tmp2[16]).CopyIcon };
    tmp16Result3 = closure_8(tmp4(tmp2[23]).TableRow.Icon, obj12);
  }
  obj11.trailing = tmp16Result3;
  let code4;
  if (rewardCode != null) {
    code4 = rewardCode.code;
  }
  let tmp26;
  if (null != code4) {
    tmp26 = callback;
  }
  const tmp21 = null == code1 && tmp3.codeCopyWrapperLoading;
  const tmp4Result2 = quest(hasError[17]);
  obj11.onPress = tmp26;
  obj10.children = closure_8(quest(hasError[22]).TableRowGroup, {
    hasIcons: false,
    children: closure_8(quest(hasError[23]).TableRow, obj11),
  });
  const items6 = [closure_8(closure_5, obj10)];
  let code5;
  if (rewardCode != null) {
    code5 = rewardCode.code;
  }
  let tmp16Result4 = null == code5;
  if (tmp16Result4) {
    const obj14 = { style: tmp3.claimingIndicator, size: 24 };
    tmp16Result4 = closure_8(memo, obj14);
  }
  const obj15 = { children: null };
  items6[1] = tmp16Result4;
  items5[1] = closure_9(closure_5, { children: items6 });
  obj15.children = items5;
  const items7 = [closure_9(closure_5, obj15)];
  const obj16 = { style: tmp3.footer, children: null };
  const obj17 = {
    disabled: isFetchingRewardCode,
    onPress: claimRewardCodePrimaryCtaClickHandler,
    grow: true,
    text: null,
  };
  if (null != memo1) {
    if ("" !== memo1) {
      const intl3 = tmp4(tmp2[11]).intl;
      let stringResult = intl3.string(tmp4(tmp2[11]).t["+zx47d"]);
    }
    obj17.text = stringResult;
    obj16.children = closure_8(tmp30, obj17);
    items7[1] = closure_8(closure_5, obj16);
    obj8.children = items7;
    obj6.children = closure_9(closure_5, obj8);
    return closure_8(tmp4(tmp2[18]).BottomSheet, obj6);
  }
  const intl2 = tmp4(tmp2[11]).intl;
  stringResult = intl2.string(tmp4(tmp2[11]).t["23SS+z"]);
  const obj13 = { hasIcons: false, children: closure_8(quest(hasError[23]).TableRow, obj11) };
}
get_ActivityIndicator = fn(17);
({ ActivityIndicator: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const REWARD_CODE_PLACEHOLDER = fn(5661).REWARD_CODE_PLACEHOLDER;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4756);
let closure_10 = createStyles.createStyles((paddingBottom) => {
  const obj = {
    wrapper: { display: "flex", paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_24 },
    footer: { paddingBottom },
    claimingIndicator: { position: "absolute", left: "50%", top: "50%", marginLeft: -12, marginTop: -12 },
    codeCopyWrapperLoading: { opacity: 0.5 },
    redemptionInstructions: { marginBottom: 24 },
  };
  return obj;
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/QuestRewardCodeClaimBottomSheet.native.tsx");

export default function QuestRewardCodeClaimBottomSheetConnected(questContentPosition) {
  ({ questId: require, questContent } = questContentPosition);
  questContentPosition = questContentPosition.questContentPosition;
  const sourceQuestContent = questContentPosition.sourceQuestContent;
  const items = [QuestStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => QuestStore.getQuest(require));
  if (null == stateFromStores) {
    questContent(tmp2[13]).hideActionSheet();
    let tmp5 = null;
    const obj3 = questContent(tmp2[13]);
  } else {
    const obj2 = {
      overrideVisibility: true,
      questOrQuests: stateFromStores,
      questContent,
      questContentPosition,
      sourceQuestContent,
      children() {
        return React6(QuestRewardCodeClaimBottomSheet, {
          quest: stateFromStores,
          questContent,
          questContentPosition,
          sourceQuestContent,
        });
      },
    };
    tmp5 = closure_8(require("QuestContentImpressionTracker").QuestContentImpressionTrackerNative, obj2);
  }
  return tmp5;
}
