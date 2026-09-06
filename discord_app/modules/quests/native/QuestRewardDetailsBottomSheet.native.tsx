// discord_app/modules/quests/native/QuestRewardDetailsBottomSheet.native.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import QuestRewardTypes from "../../../../discord_common/js/shared/shared-constants/QuestRewardTypes.tsx";
import QuestRewardUtils from "../utils/QuestRewardUtils.tsx";
import hooks_QuestHooks from "../hooks/QuestHooks.tsx";
import QuestUtils from "QuestUtils.native.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import UserStore from "../../../stores/UserStore.tsx";

require = fn;
function QuestRewardDetailsBottomSheet(quest) {
  quest = quest.quest;
  const tmp = closure_9();
  const items = [quest.config];
  const memo = noop.useMemo(() => QuestRewardUtils.isCollectibleQuestRewardPremiumExtendable(quest.config), items);
  const items1 = [quest, memo];
  const memo1 = noop.useMemo(() => {
    const type = QuestRewardUtils.getQuestPrimaryReward(quest).type;
    if (QuestRewardTypes.QuestRewardTypes.COLLECTIBLE === type) {
      const intl2 = tmp(1114).intl;
      const t = tmp(1114).t;
      return intl2.string(memo ? t["66YyBJ"] : t.ABD2CN);
    } else if (tmp(7708).QuestRewardTypes.FRACTIONAL_PREMIUM === type) {
      const intl = tmp(1114).intl;
      return intl.string(tmp(1114).t.maMtqM);
    } else {
      return null;
    }
  }, items1);
  let obj = quest(504);
  const items2 = [UserStore];
  const stateFromStores = obj.useStateFromStores(items2, () => currentUser.getCurrentUser());
  let obj1 = quest(11290);
  const defaultRewardName = obj1.getDefaultRewardName(quest.config, stateFromStores);
  obj = { direction: "vertical", spacing: memo(576).space.PX_16, style: tmp.wrapper, children: null };
  obj = { align: "center", direction: "horizontal", spacing: memo(576).space.PX_16, children: null };
  const items3 = [closure_6(memo(11770), { quest, height: 56, width: 56, withAnimation: true })];
  obj1 = { direction: "vertical", spacing: memo(576).space.PX_4, style: tmp.rewardDetailsCopy, children: null };
  const obj2 = { variant: "eyebrow", color: "text-subtle", children: null };
  let intl = quest(1114).intl;
  obj2.children = intl.string(quest(1114).t["jyYgZ+"]);
  const items4 = [
    closure_6(quest(4556).Text, obj2),
    closure_6(quest(4556).Text, { variant: "heading-lg/semibold", color: "text-strong", children: defaultRewardName }),
  ];
  obj1.children = items4;
  items3[1] = closure_7(quest(4973).Stack, obj1);
  obj.children = items3;
  const items5 = [closure_7(quest(4973).Stack, obj)];
  let tmp9Result = null != memo1;
  if (tmp9Result) {
    const obj3 = { children: null };
    const obj4 = { style: tmp.separator };
    const items6 = [tmp8(View, obj4)];
    const obj5 = { variant: "text-md/normal", color: "text-subtle", children: memo1 };
    items6[1] = tmp8(quest(4556).Text, obj5);
    obj3.children = items6;
    tmp9Result = tmp9(closure_8, obj3);
  }
  items5[1] = tmp9Result;
  obj.children = items5;
  return closure_6(quest(7150).BottomSheet, { startExpanded: true, children: closure_7(quest(4973).Stack, obj) });
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7, Fragment: closure_8 } = jsxProd);
fn(4560);
let createStyles = { wrapper: null, rewardDetailsCopy: null, separator: null };
createStyles = { paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_8 };
createStyles.wrapper = createStyles;
createStyles.rewardDetailsCopy = { flexShrink: 1 };
createStyles.separator = { height: 1, backgroundColor: nativeDefault.colors.BORDER_STRONG };
let closure_9 = createStyles.createStyles(createStyles);
const size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/QuestRewardDetailsBottomSheet.native.tsx");

export default function QuestRewardDetailsBottomSheetConnected(questId) {
  const callback = noop.useCallback(() => {
    const result = QuestUtils.showQuestUnavailableAlert();
    ActionSheetActionCreatorsDefault.hideActionSheet();
  }, []);
  let obj = hooks_QuestHooks;
  const nonNullableQuest = obj.useNonNullableQuest(questId.questId, callback);
  let tmp3 = null;
  if (null != nonNullableQuest) {
    obj = { quest: nonNullableQuest };
    tmp3 = timestampProducer(QuestRewardDetailsBottomSheet, obj);
  }
  return tmp3;
}
