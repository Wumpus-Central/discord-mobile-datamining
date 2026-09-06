// === Module 15149: VideoQuestModalReward ===

// Module 15149 (VideoQuestModalReward)
import nativeDefault from "native" /* 576 */;
import QuestUtils from "QuestUtils" /* 11767 */;
import QuestProgressIndicatorDefault from "QuestProgressIndicator" /* 15131 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4560);
let closure_6 = createStyles.createStyles({ questName: { textAlign: "center" } });
let size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/VideoQuestModal/VideoQuestModalReward.tsx");

export default noop.memo(function VideoQuestModalReward(style) {
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
  let obj = quest(15126);
  quest = obj.useVideoQuestModalContext().quest;
  let obj1 = quest(11483);
  const items = [quest.id];
  const questTaskDetails = obj1.useQuestTaskDetails(quest);
  const callback = noop.useCallback(() => {
    const obj = { questId: quest.id };
    const result = obj.openRewardDetailsBottomSheet(obj);
  }, items);
  obj = { justify: "center", align: "center", spacing: nativeDefault.space.PX_24, style: style.style, children: null };
  obj = { hasConfetti: true, quest, size: str, progress: questTaskDetails.percentComplete, onPress: callback, withAnimation: withRewardTileAnimation };
  const items1 = [closure_4(QuestProgressIndicatorDefault, obj), ];
  obj1 = { align: "center", spacing: nativeDefault.space.PX_4, onLayout: onTextBlockLayout, children: null };
  if (tmp) {
    const obj2 = { variant: "heading-lg/semibold", color: "text-strong", style: tmp7.questName, children: null };
    const intl = tmp3(1114).intl;
    const obj3 = { questName: quest.config.messages.questName };
    obj2.children = intl.formatToPlainString(tmp3(1114).t.EAYZAr, obj3);
    tmp = tmp9(tmp3(4556).Text, obj2);
  }
  const items2 = [tmp, ];
  if (tmp9Result) {
    const obj4 = { variant: "heading-sm/medium", color: "text-subtle", children: null };
    const intl2 = tmp3(1114).intl;
    obj4.children = intl2.string(tmp3(1114).t["1Wvve2"]);
    tmp9Result = tmp9(tmp3(4556).Text, obj4);
  }
  items2[1] = tmp9Result;
  obj1.children = items2;
  items1[1] = closure_5(quest(4973).Stack, obj1);
  obj.children = items1;
  return closure_5(quest(4973).Stack, obj);
});