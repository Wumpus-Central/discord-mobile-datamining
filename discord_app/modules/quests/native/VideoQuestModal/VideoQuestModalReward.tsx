// discord_app/modules/quests/native/VideoQuestModal/VideoQuestModalReward.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import QuestUtils from "../QuestUtils.native.tsx";
import QuestProgressIndicatorDefault from "../QuestProgressIndicator.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4636);
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
  quest = quest(15207).useVideoQuestModalContext().quest;
  const obj = quest(15207);
  const items = [quest.id];
  const questTaskDetails = quest(11617).useQuestTaskDetails(quest);
  const callback = noop.useCallback(() => {
    const result = QuestUtils.openRewardDetailsBottomSheet({ questId: quest.id });
  }, items);
  const obj2 = quest(11617);
  const obj3 = {
    justify: "center",
    align: "center",
    spacing: nativeDefault.space.PX_24,
    style: style.style,
    children: null,
  };
  const items1 = [
    closure_4(QuestProgressIndicatorDefault, {
      hasConfetti: true,
      quest,
      size: str,
      progress: questTaskDetails.percentComplete,
      onPress: callback,
      withAnimation: withRewardTileAnimation,
    }),
  ];
  const obj5 = { align: "center", spacing: nativeDefault.space.PX_4, onLayout: onTextBlockLayout, children: null };
  if (tmp) {
    const obj6 = { variant: "heading-lg/semibold", color: "text-strong", style: tmp7.questName, children: null };
    const intl = tmp3(1114).intl;
    const obj7 = { questName: quest.config.messages.questName };
    obj6.children = intl.formatToPlainString(tmp3(1114).t.EAYZAr, obj7);
    tmp = closure_4(tmp3(4632).Text, obj6);
  }
  const items2 = [tmp];
  if (tmp9Result) {
    const obj8 = { variant: "heading-sm/medium", color: "text-subtle", children: null };
    const intl2 = tmp3(1114).intl;
    obj8.children = intl2.string(tmp3(1114).t["1Wvve2"]);
    tmp9Result = closure_4(tmp3(4632).Text, obj8);
  }
  items2[1] = tmp9Result;
  obj5.children = items2;
  items1[1] = closure_5(quest(5054).Stack, obj5);
  obj3.children = items1;
  return closure_5(quest(5054).Stack, obj3);
});
