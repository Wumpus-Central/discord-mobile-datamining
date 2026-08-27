// === Module 14700: ? ===

// Module 14700
import ThemesDefault from "Themes" /* 712 */;
import COMPLETION_GLOW_SHADOW_RADIUSDefault from "COMPLETION_GLOW_SHADOW_RADIUS" /* 14681 */;
import importAllResult from "noop" /* 19 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4445 */;

const require = arg1;
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
  let obj = quest(14676);
  quest = obj.useVideoQuestModalContext().quest;
  obj1 = quest(11003);
  const items = [quest.id];
  const questTaskDetails = obj1.useQuestTaskDetails(quest);
  const callback = importAllResult.useCallback(() => {
    let obj = quest(closure_1_2[5]);
    obj = { questId: quest.id };
    const result = obj.openRewardDetailsBottomSheet(obj);
  }, items);
  obj = { justify: "center", align: "center", spacing: ThemesDefault.space.PX_24, style: style.style, children: null };
  obj = { hasConfetti: true, quest, size: str, progress: questTaskDetails.percentComplete, onPress: callback, withAnimation: withRewardTileAnimation };
  const items1 = [callback(COMPLETION_GLOW_SHADOW_RADIUSDefault, obj), ];
  obj1 = { align: "center", spacing: ThemesDefault.space.PX_4, onLayout: onTextBlockLayout, children: null };
  if (tmp) {
    const obj2 = { variant: "heading-lg/semibold", color: "text-strong", style: null, children: null };
    obj2[2] = tmp7.questName;
    const intl = tmp3(1236).intl;
    const obj3 = { questName: null };
    obj3[0] = quest.config.messages.questName;
    obj2[3] = intl.formatToPlainString(tmp3(1236).t.EAYZAr, obj3);
    tmp = tmp9(tmp3(4441).Text, obj2);
  }
  const items2 = [tmp, ];
  if (tmp9Result) {
    const obj4 = { variant: "heading-sm/medium", color: "text-subtle", children: null };
    const intl2 = tmp3(1236).intl;
    obj4[2] = intl2.string(tmp3(1236).t["1Wvve2"]);
    tmp9Result = tmp9(tmp3(4441).Text, obj4);
  }
  items2[1] = tmp9Result;
  obj1[3] = items2;
  items1[1] = closure_5(quest(4878).Stack, obj1);
  obj[4] = items1;
  return closure_5(quest(4878).Stack, obj);
});
let result = require("set").fileFinishedImporting("modules/quests/native/VideoQuestModal/VideoQuestModalReward.tsx");

export default memoResult;