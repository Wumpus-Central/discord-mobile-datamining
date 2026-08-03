// === Module 11097: QuestRewardDetailsBottomSheet ===

// Module 11097 (QuestRewardDetailsBottomSheet)
import noop from "noop";
import { View } from "set";
import mergeGuildAvatar from "mergeGuildAvatar";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let closure_6;
let error;
let metroImportAll;
const require = arg1;
function QuestRewardDetailsBottomSheet(quest) {
  quest = quest.quest;
  let memo;
  const tmp = createCacheKey();
  const items = [quest.config];
  memo = React.useMemo(() => quest(outer1_2[9]).isCollectibleQuestRewardPremiumExtendable(quest.config), items);
  const items1 = [quest, memo];
  const memo1 = React.useMemo(() => {
    const type = quest(outer1_2[9]).getQuestPrimaryReward(quest).type;
    if (quest(outer1_2[10]).QuestRewardTypes.COLLECTIBLE === type) {
      const intl2 = tmp(tmp2[11]).intl;
      const t = tmp(tmp2[11]).t;
      return intl2.string(memo ? t["66YyBJ"] : t.ABD2CN);
    } else if (tmp(tmp2[10]).QuestRewardTypes.FRACTIONAL_PREMIUM === type) {
      const intl = tmp(tmp2[11]).intl;
      return intl.string(tmp(tmp2[11]).t.maMtqM);
    } else {
      return null;
    }
    const obj = quest(outer1_2[9]);
  }, items1);
  let obj = quest(589);
  const items2 = [mergeGuildAvatar];
  const stateFromStores = obj.useStateFromStores(items2, () => currentUser.getCurrentUser());
  let obj1 = quest(9642);
  const defaultRewardName = obj1.getDefaultRewardName(quest.config, stateFromStores);
  obj = { direction: "vertical", spacing: null, style: null, children: null };
  obj[1] = memo(712).space.PX_16;
  obj[2] = tmp.wrapper;
  obj = { align: "center", direction: "horizontal", spacing: null, children: null };
  obj[2] = memo(712).space.PX_16;
  const items3 = [callback(memo(11098), { quest, height: 56, width: 56, withAnimation: true }), ];
  obj1 = { direction: "vertical", spacing: null, style: null, children: null };
  obj1[1] = memo(712).space.PX_4;
  obj1[2] = tmp.rewardDetailsCopy;
  const obj2 = { variant: "eyebrow", color: "text-subtle", children: null };
  let intl = quest(1236).intl;
  obj2[2] = intl.string(quest(1236).t["jyYgZ+"]);
  const items4 = [callback(quest(4251).Text, obj2), callback(quest(4251).Text, { variant: "heading-lg/semibold", color: "text-strong", children: defaultRewardName })];
  obj1[3] = items4;
  items3[1] = callback2(quest(4664).Stack, obj1);
  obj[3] = items3;
  const items5 = [callback2(quest(4664).Stack, obj), ];
  let tmp9Result = null != memo1;
  if (tmp9Result) {
    const obj3 = { children: null };
    const obj4 = { style: null };
    obj4[0] = tmp.separator;
    const items6 = [tmp8(View, obj4), ];
    const obj5 = { variant: "text-md/normal", color: "text-subtle", children: null };
    obj5[2] = memo1;
    items6[1] = tmp8(quest(4251).Text, obj5);
    obj3[0] = items6;
    tmp9Result = tmp9(closure_8, obj3);
  }
  items5[1] = tmp9Result;
  obj[3] = items5;
  return callback(quest(5309).BottomSheet, { startExpanded: true, children: callback2(quest(4664).Stack, obj) });
}
({ jsx: closure_6, jsxs: error, Fragment: metroImportAll } = jsxProd);
createCacheKey = { wrapper: null, rewardDetailsCopy: null, separator: null };
createCacheKey = { paddingHorizontal: require("Themes").space.PX_16, paddingBottom: require("Themes").space.PX_8 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flexShrink: 1 };
createCacheKey[2] = { height: 1, backgroundColor: require("Themes").colors.BORDER_STRONG };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj1 = { height: 1, backgroundColor: require("Themes").colors.BORDER_STRONG };
let result = require("mergeGuildAvatar").fileFinishedImporting("modules/quests/native/QuestRewardDetailsBottomSheet.native.tsx");

export default function QuestRewardDetailsBottomSheetConnected(questId) {
  const callback = React.useCallback(() => {
    const result = callback(11095).showQuestUnavailableAlert();
    const obj = callback(11095);
    callback2(4223).hideActionSheet();
  }, []);
  let obj = require(10643) /* useQuests */;
  const nonNullableQuest = obj.useNonNullableQuest(questId.questId, callback);
  let tmp3 = null;
  if (null != nonNullableQuest) {
    obj = { quest: null };
    obj[0] = nonNullableQuest;
    tmp3 = callback(QuestRewardDetailsBottomSheet, obj);
  }
  return tmp3;
};