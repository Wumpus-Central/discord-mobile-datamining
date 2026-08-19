// discord_app/modules/quests/native/VideoQuestModal/VideoQuestModalReward.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import QUEST_PROGRESS_DIAMETER_BY_SIZEDefault from "../QuestProgressIndicator.tsx";
import importAllResult from "../../../../../_runtime/00019_noop.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

const require = fn;
let c3 = importAllResult;
({ jsx: c4, jsxs: c5 } = jsxProd);
let closure_6 = createCacheKey.createStyles({ questName: { textAlign: "center" } });
const memoResult = importAllResult.memo(function VideoQuestModalReward(style) {
  const withQuestName = style.withQuestName;
  let tmp = undefined === withQuestName;
  if (!tmp) {
    tmp = withQuestName;
  }
  const withRewardAvailableCopy = style.withRewardAvailableCopy;
  let tmp9Result = undefined === withRewardAvailableCopy || withRewardAvailableCopy;
  const size = style.size;
  let str = "lg";
  if (undefined !== size) {
    str = size;
  }
  ({ withRewardTileAnimation, onTextBlockLayout } = style);
  let obj = quest(14478);
  quest = obj.useVideoQuestModalContext().quest;
  obj1 = quest(10684);
  const items = [quest.id];
  const questTaskDetails = obj1.useQuestTaskDetails(quest);
  const callback = importAllResult.useCallback(() => {
    quest(dependencyMap[5]);
    const obj = { questId: quest.id };
    const result = obj.openRewardDetailsBottomSheet(obj);
  }, items);
  obj = { hasConfetti: true, quest, size: str, progress: questTaskDetails.percentComplete, onPress: callback, withAnimation: withRewardTileAnimation };
  const items1 = [callback(QUEST_PROGRESS_DIAMETER_BY_SIZEDefault, obj), ];
  obj1 = { align: "center", spacing: ThemesDefault.space.PX_4, onLayout: onTextBlockLayout, children: null };
  if (tmp) {
    const obj2 = { variant: "heading-lg/semibold", color: "text-strong", style: null, children: null };
    obj2[2] = tmp7.questName;
    const intl = tmp3(1236).intl;
    const obj3 = { questName: null };
    obj3[0] = quest.config.messages.questName;
    obj2[3] = intl.formatToPlainString(tmp3(1236).t.EAYZAr, obj3);
    tmp = tmp9(tmp3(4734).Text, obj2);
  }
  const items2 = [tmp, ];
  if (tmp9Result) {
    const obj4 = { variant: "heading-sm/medium", color: "text-subtle", children: null };
    const intl2 = tmp3(1236).intl;
    obj4[2] = intl2.string(tmp3(1236).t["1Wvve2"]);
    tmp9Result = tmp9(tmp3(4734).Text, obj4);
  }
  items2[1] = tmp9Result;
  obj1[3] = items2;
  items1[1] = callback(quest(4733).Stack, obj1);
  obj[4] = items1;
  return callback(quest(4733).Stack, obj);
});
let result = require("obj132").fileFinishedImporting("modules/quests/native/VideoQuestModal/VideoQuestModalReward.tsx");

export default memoResult;