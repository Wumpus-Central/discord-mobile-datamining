// === Module 15190: QuestDockEnrolledHeader ===

// Module 15190 (QuestDockEnrolledHeader)
import Text_Text from "Text/Text" /* 4556 */;
import QuestTypes from "QuestTypes" /* 5447 */;
import hooks_QuestHooks from "hooks/QuestHooks" /* 11483 */;
import QuestCopyHooks from "QuestCopyHooks" /* 11775 */;
import QuestDockCreativeContext from "QuestDockCreativeContext" /* 15102 */;
import QuestProgressIndicatorDefault from "QuestProgressIndicator" /* 15131 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4560);
let closure_7 = createStyles.createStyles({ wrapper: { alignItems: "center", display: "flex", flexDirection: "row", flexGrow: 1, flexShrink: 1, gap: 8, justifyContent: "center", padding: 8 }, progressIndicatorWrapper: { flexGrow: 0, flexShrink: 0 }, copy: { flexGrow: 1, flexShrink: 1 } });
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
  obj = { quest: questDockQuest, isExpanded: false, activeScreen: _slicedToArray(obj2.useTaskPlatformScreen(questDockQuest, questTaskDetails), 1)[0], sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE };
  obj = { style: tmp2.wrapper, children: null };
  obj1 = { style: tmp2.progressIndicatorWrapper, children: null };
  const questBarSubtitle = QuestCopyHooks.useQuestBarSubtitle(obj);
  obj2 = { quest: questDockQuest, size: "x-sm", progress: questTaskDetails.percentComplete, loading: false, hasConfetti: true };
  obj1.children = hasOwnProperty(QuestProgressIndicatorDefault, obj2);
  const items = [hasOwnProperty(View, obj1), ];
  obj3 = { style: tmp2.copy, children: null };
  const items1 = [hasOwnProperty(Text_Text.Text, { variant: "heading-md/semibold", color: "mobile-text-heading-primary", children: questBarTitle }), hasOwnProperty(Text_Text.Text, { variant: "text-sm/medium", color: "text-muted", children: questBarSubtitle })];
  obj3.children = items1;
  items[1] = timestampProducer(View, obj3);
  obj.children = items;
  return timestampProducer(View, obj);
});