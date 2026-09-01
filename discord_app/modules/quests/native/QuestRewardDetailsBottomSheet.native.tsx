// === Module 11336: QuestRewardDetailsBottomSheet ===

// Module 11336 (QuestRewardDetailsBottomSheet)
import ThemesDefault from "Themes" /* 712 */;
import useQuests from "useQuests" /* 11083 */;
import closure_3 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_5 from "mergeGuildAvatar" /* 1922 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

require = arg1;
function QuestRewardDetailsBottomSheet(quest) {
  quest = quest.quest;
  let memo;
  const tmp = callback3();
  const items = [quest.config];
  memo = React.useMemo(() => quest(closure_1_2[9]).isCollectibleQuestRewardPremiumExtendable(quest.config), items);
  const items1 = [quest, memo];
  const memo1 = React.useMemo(() => {
    const type = quest(closure_1_2[9]).getQuestPrimaryReward(quest).type;
    if (quest(closure_1_2[10]).QuestRewardTypes.COLLECTIBLE === type) {
      const intl2 = tmp(tmp2[11]).intl;
      const t = tmp(tmp2[11]).t;
      return intl2.string(memo ? t["66YyBJ"] : t.ABD2CN);
    } else if (tmp(tmp2[10]).QuestRewardTypes.FRACTIONAL_PREMIUM === type) {
      const intl = tmp(tmp2[11]).intl;
      return intl.string(tmp(tmp2[11]).t.maMtqM);
    } else {
      return null;
    }
    const obj = quest(closure_1_2[9]);
  }, items1);
  let obj = quest(589);
  const items2 = [closure_5];
  const stateFromStores = obj.useStateFromStores(items2, () => currentUser.getCurrentUser());
  obj1 = quest(10927);
  const defaultRewardName = obj1.getDefaultRewardName(quest.config, stateFromStores);
  obj = { direction: "vertical", spacing: memo(712).space.PX_16, style: tmp.wrapper, children: null };
  obj = { align: "center", direction: "horizontal", spacing: memo(712).space.PX_16, children: null };
  const items3 = [callback(memo(11337), { quest, height: 56, width: 56, withAnimation: true }), ];
  obj1 = { direction: "vertical", spacing: memo(712).space.PX_4, style: tmp.rewardDetailsCopy, children: null };
  const obj2 = { variant: "eyebrow", color: "text-subtle", children: null };
  let intl = quest(1236).intl;
  obj2[2] = intl.string(quest(1236).t["jyYgZ+"]);
  const items4 = [callback(quest(4474).Text, obj2), callback(quest(4474).Text, { variant: "heading-lg/semibold", color: "text-strong", children: defaultRewardName })];
  obj1[3] = items4;
  items3[1] = callback2(quest(4926).Stack, obj1);
  obj[3] = items3;
  const items5 = [callback2(quest(4926).Stack, obj), ];
  let tmp9Result = null != memo1;
  if (tmp9Result) {
    const obj3 = { children: null };
    const obj4 = { style: null };
    obj4[0] = tmp.separator;
    const items6 = [tmp8(View, obj4), ];
    const obj5 = { variant: "text-md/normal", color: "text-subtle", children: null };
    obj5[2] = memo1;
    items6[1] = tmp8(quest(4474).Text, obj5);
    obj3[0] = items6;
    tmp9Result = tmp9(closure_8, obj3);
  }
  items5[1] = tmp9Result;
  obj[3] = items5;
  return callback(quest(5622).BottomSheet, { startExpanded: true, children: callback2(quest(4926).Stack, obj) });
}
({ jsx: closure_6, jsxs: error, Fragment: closure_8 } = jsxProd);
createCacheKey = { wrapper: null, rewardDetailsCopy: null, separator: null };
createCacheKey = { paddingHorizontal: ThemesDefault.space.PX_16, paddingBottom: ThemesDefault.space.PX_8 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flexShrink: 1 };
createCacheKey[2] = { height: 1, backgroundColor: ThemesDefault.colors.BORDER_STRONG };
let closure_9 = createCacheKey.createStyles(createCacheKey);
let obj1 = { height: 1, backgroundColor: ThemesDefault.colors.BORDER_STRONG };
let result = require("set").fileFinishedImporting("modules/quests/native/QuestRewardDetailsBottomSheet.native.tsx");

export default function QuestRewardDetailsBottomSheetConnected(questId) {
  const callback = React.useCallback(() => {
    const result = callback(11334).showQuestUnavailableAlert();
    const obj = callback(11334);
    callback2(4445).hideActionSheet();
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