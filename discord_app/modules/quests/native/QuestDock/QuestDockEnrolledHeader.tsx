// discord_app/modules/quests/native/QuestDock/QuestDockEnrolledHeader.tsx
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import QuestTypes from "../../QuestTypes.tsx";
import hooks_QuestHooks from "../../hooks/QuestHooks.tsx";
import QuestCopyHooks from "../../hooks/QuestCopyHooks.tsx";
import QuestDockCreativeContext from "QuestDockCreativeContext.tsx";
import QuestProgressIndicatorDefault from "../QuestProgressIndicator.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4560);
let closure_7 = createStyles.createStyles({
  wrapper: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    flexGrow: 1,
    flexShrink: 1,
    gap: 8,
    justifyContent: "center",
    padding: 8,
  },
  progressIndicatorWrapper: { flexGrow: 0, flexShrink: 0 },
  copy: { flexGrow: 1, flexShrink: 1 },
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockEnrolledHeader.tsx");

export default noop.memo(function QuestDockEnrolledHeader() {
  let obj = QuestDockCreativeContext;
  const questDockQuest = obj.useQuestDockQuest();
  const tmp2 = closure_7();
  let obj1 = hooks_QuestHooks;
  const questTaskDetails = obj1.useQuestTaskDetails(questDockQuest);
  let obj2 = hooks_QuestHooks;
  let obj3 = QuestCopyHooks;
  const questBarTitle = obj3.useQuestBarTitle(questDockQuest);
  obj = {
    quest: questDockQuest,
    isExpanded: false,
    activeScreen: _slicedToArray(obj2.useTaskPlatformScreen(questDockQuest, questTaskDetails), 1)[0],
    sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE,
  };
  obj = { style: tmp2.wrapper, children: null };
  obj1 = { style: tmp2.progressIndicatorWrapper, children: null };
  const questBarSubtitle = QuestCopyHooks.useQuestBarSubtitle(obj);
  obj2 = {
    quest: questDockQuest,
    size: "x-sm",
    progress: questTaskDetails.percentComplete,
    loading: false,
    hasConfetti: true,
  };
  obj1.children = hasOwnProperty(QuestProgressIndicatorDefault, obj2);
  const items = [hasOwnProperty(View, obj1)];
  obj3 = { style: tmp2.copy, children: null };
  const items1 = [
    hasOwnProperty(Text_Text.Text, {
      variant: "heading-md/semibold",
      color: "mobile-text-heading-primary",
      children: questBarTitle,
    }),
    hasOwnProperty(Text_Text.Text, { variant: "text-sm/medium", color: "text-muted", children: questBarSubtitle }),
  ];
  obj3.children = items1;
  items[1] = timestampProducer(View, obj3);
  obj.children = items;
  return timestampProducer(View, obj);
});
