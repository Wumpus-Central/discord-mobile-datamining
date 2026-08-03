import importAllResult from "noop";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c4;
let c5;
const require = arg1;
let c3 = importAllResult;
({ jsx: c4, jsxs: c5 } = jsxProd);
let closure_6 = createCacheKey.createStyles({ questName: { textAlign: "center" } });
const memoResult = importAllResult.memo(function VideoQuestModalReward(withQuestName) {
  let onTextBlockLayout;
  let withRewardTileAnimation;
  withQuestName = withQuestName.withQuestName;
  let tmp = undefined === withQuestName;
  if (!tmp) {
    tmp = withQuestName;
  }
  const withRewardAvailableCopy = withQuestName.withRewardAvailableCopy;
  let tmp9Result = undefined === withRewardAvailableCopy || withRewardAvailableCopy;
  const size = withQuestName.size;
  let str = "lg";
  if (undefined !== size) {
    str = size;
  }
  ({ withRewardTileAnimation, onTextBlockLayout } = withQuestName);
  let obj = quest(14235);
  quest = obj.useVideoQuestModalContext().quest;
  let obj1 = quest(10643);
  const items = [quest.id];
  const questTaskDetails = obj1.useQuestTaskDetails(quest);
  const callback = importAllResult.useCallback(() => {
    let obj = quest(outer1_2[5]);
    obj = { questId: quest.id };
    const result = obj.openRewardDetailsBottomSheet(obj);
  }, items);
  obj = { justify: "center", align: "center", spacing: null, style: null, children: null };
  obj[2] = importDefault(712).space.PX_24;
  obj[3] = withQuestName.style;
  obj = { hasConfetti: true, quest, size: str, progress: questTaskDetails.percentComplete, onPress: callback, withAnimation: withRewardTileAnimation };
  const items1 = [callback(importDefault(14240), obj), ];
  obj1 = { align: "center", spacing: null, onLayout: null, children: null };
  obj1[1] = importDefault(712).space.PX_4;
  obj1[2] = onTextBlockLayout;
  if (tmp) {
    const obj2 = { variant: "heading-lg/semibold", color: "text-strong", style: null, children: null };
    obj2[2] = tmp7.questName;
    const intl = tmp3(1236).intl;
    const obj3 = { questName: null };
    obj3[0] = quest.config.messages.questName;
    obj2[3] = intl.formatToPlainString(tmp3(1236).t.EAYZAr, obj3);
    tmp = tmp9(tmp3(4251).Text, obj2);
  }
  const items2 = [tmp, ];
  if (tmp9Result) {
    const obj4 = { variant: "heading-sm/medium", color: "text-subtle", children: null };
    const intl2 = tmp3(1236).intl;
    obj4[2] = intl2.string(tmp3(1236).t["1Wvve2"]);
    tmp9Result = tmp9(tmp3(4251).Text, obj4);
  }
  items2[1] = tmp9Result;
  obj1[3] = items2;
  items1[1] = closure_5(quest(4664).Stack, obj1);
  obj[4] = items1;
  return closure_5(quest(4664).Stack, obj);
});
let result = require("createCacheKey").fileFinishedImporting("modules/quests/native/VideoQuestModal/VideoQuestModalReward.tsx");

export default memoResult;