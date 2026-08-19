// === Module 10949: QuestRewardDetailsBottomSheet ===

// Module 10949 (QuestRewardDetailsBottomSheet)
import ThemesDefault from "Themes" /* 712 */;
import useQuests from "useQuests" /* 10684 */;
import noop from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import mergeGuildAvatar from "mergeGuildAvatar" /* 1922 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";

require = fn;
function QuestRewardDetailsBottomSheet(quest) {
  quest = quest.quest;
  const tmp = callback3();
  const items = [quest.config];
  const memo = React.useMemo(() => quest(dependencyMap[9]).isCollectibleQuestRewardPremiumExtendable(quest.config), items);
  const items1 = [quest, memo];
  const memo1 = React.useMemo(() => {
    const type = quest(dependencyMap[9]).getQuestPrimaryReward(quest).type;
    if (quest(dependencyMap[10]).QuestRewardTypes.COLLECTIBLE === type) {
      const intl2 = quest(dependencyMap[11]).intl;
      const t = quest(dependencyMap[11]).t;
      return intl2.string(memo ? t["66YyBJ"] : t.ABD2CN);
    } else if (quest(dependencyMap[10]).QuestRewardTypes.FRACTIONAL_PREMIUM === type) {
      const intl = quest(dependencyMap[11]).intl;
      return intl.string(quest(dependencyMap[11]).t.maMtqM);
    } else {
      return null;
    }
    const obj = quest(dependencyMap[9]);
  }, items1);
  let obj = quest(589);
  const items2 = [closure_5];
  const stateFromStores = obj.useStateFromStores(items2, () => currentUser.getCurrentUser());
  obj1 = quest(10491);
  const defaultRewardName = obj1.getDefaultRewardName(quest.config, stateFromStores);
  { direction: "vertical", spacing: memo(712).space.PX_16, style: tmp.wrapper, children: null };
  obj = { align: "center", direction: "horizontal", spacing: memo(712).space.PX_16, children: null };
  const items3 = [callback(memo(10950), { quest, height: 56, width: 56, withAnimation: true }), ];
  obj1 = { direction: "vertical", spacing: memo(712).space.PX_4, style: tmp.rewardDetailsCopy, children: null };
  const obj2 = { variant: "eyebrow", color: "text-subtle", children: null };
  let intl = quest(1236).intl;
  obj2[2] = intl.string(quest(1236).t["jyYgZ+"]);
  const items4 = [callback(quest(4734).Text, obj2), callback(quest(4734).Text, { variant: "heading-lg/semibold", color: "text-strong", children: defaultRewardName })];
  obj1[3] = items4;
  items3[1] = callback2(quest(4733).Stack, obj1);
  obj[3] = items3;
  const items5 = [callback2(quest(4733).Stack, obj), ];
  let tmp9Result = null != memo1;
  if (tmp9Result) {
    const obj3 = { children: null };
    const obj4 = { style: null };
    obj4[0] = tmp.separator;
    const items6 = [callback(View, obj4), ];
    const obj5 = { variant: "text-md/normal", color: "text-subtle", children: null };
    obj5[2] = memo1;
    items6[1] = callback(quest(4734).Text, obj5);
    obj3[0] = items6;
    tmp9Result = callback2(closure_8, obj3);
  }
  items5[1] = tmp9Result;
  obj[3] = items5;
  return callback(quest(6950).BottomSheet, { startExpanded: true, children: callback2(quest(4733).Stack, obj) });
}
({ jsx: closure_6, jsxs: error, Fragment: closure_8 } = jsxProd);
const createCacheKey = { paddingHorizontal: ThemesDefault.space.PX_16, paddingBottom: ThemesDefault.space.PX_8 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flexShrink: 1 };
createCacheKey[2] = { height: 1, backgroundColor: ThemesDefault.colors.BORDER_STRONG };
let closure_9 = createCacheKey.createStyles(createCacheKey);
let result = require("obj132").fileFinishedImporting("modules/quests/native/QuestRewardDetailsBottomSheet.native.tsx");

export default function QuestRewardDetailsBottomSheetConnected(questId) {
  const callback = React.useCallback(() => {
    const result = callback(10947).showQuestUnavailableAlert();
    const obj = callback(10947);
    callback2(4342).hideActionSheet();
  }, []);
  let obj = useQuests;
  const nonNullableQuest = obj.useNonNullableQuest(questId.questId, callback);
  let tmp3 = null;
  if (null != nonNullableQuest) {
    obj = { quest: null };
    obj[0] = nonNullableQuest;
    tmp3 = callback(QuestRewardDetailsBottomSheet, obj);
  }
  return tmp3;
};