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
const createStyles = fn(4638);
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
  const questDockQuest = QuestDockCreativeContext.useQuestDockQuest();
  const tmp2 = closure_7();
  const questTaskDetails = hooks_QuestHooks.useQuestTaskDetails(questDockQuest);
  const obj3 = hooks_QuestHooks;
  const questBarTitle = QuestCopyHooks.useQuestBarTitle(questDockQuest);
  const obj5 = QuestCopyHooks;
  const obj7 = { style: tmp2.wrapper, children: null };
  const obj8 = { style: tmp2.progressIndicatorWrapper, children: null };
  const questBarSubtitle = obj5.useQuestBarSubtitle({
    quest: questDockQuest,
    isExpanded: false,
    activeScreen: _slicedToArray(obj3.useTaskPlatformScreen(questDockQuest, questTaskDetails), 1)[0],
    sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE,
  });
  obj8.children = hasOwnProperty(QuestProgressIndicatorDefault, {
    quest: questDockQuest,
    size: "x-sm",
    progress: questTaskDetails.percentComplete,
    loading: false,
    hasConfetti: true,
  });
  const items = [hasOwnProperty(View, obj8)];
  const obj10 = { style: tmp2.copy, children: null };
  const items1 = [
    hasOwnProperty(Text_Text.Text, {
      variant: "heading-md/semibold",
      color: "mobile-text-heading-primary",
      children: questBarTitle,
    }),
    hasOwnProperty(Text_Text.Text, { variant: "text-sm/medium", color: "text-muted", children: questBarSubtitle }),
  ];
  obj10.children = items1;
  items[1] = timestampProducer(View, obj10);
  obj7.children = items;
  return timestampProducer(View, obj7);
});
