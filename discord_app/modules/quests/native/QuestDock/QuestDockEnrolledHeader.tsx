// === Module 17091: QuestDockEnrolledHeader ===

// Module 17091 (QuestDockEnrolledHeader)
import nativeDefault from "native" /* 575 */;
import Text_Text from "Text/Text" /* 5619 */;
import QuestTypes from "QuestTypes" /* 6778 */;
import hooks_QuestHooks from "hooks/QuestHooks" /* 9661 */;
import useScaledTextLineHeight from "useScaledTextLineHeight" /* 11028 */;
import QuestCopyHooks from "QuestCopyHooks" /* 14644 */;
import QuestDockCreativeContext from "QuestDockCreativeContext" /* 17029 */;
import QuestProgressIndicatorDefault from "QuestProgressIndicator" /* 17039 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const PX_8 = nativeDefault.space.PX_8;
let c7 = "heading-md/semibold";
let c8 = "text-sm/medium";
let closure_9 = fn(17001).QUEST_DOCK_COLLAPSED_HEIGHT - 2 * PX_8;
const createStyles = fn(5009);
let closure_10 = createStyles.createStyles({ wrapper: { alignItems: "center", display: "flex", flexDirection: "row", flexGrow: 1, flexShrink: 1, gap: 8, justifyContent: "center", padding: PX_8 }, progressIndicatorWrapper: { flexGrow: 0, flexShrink: 0 }, copy: { flexGrow: 1, flexShrink: 1, minWidth: 0 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockEnrolledHeader.tsx");

export default noop.memo(function QuestDockEnrolledHeader() {
  const questDockQuest = QuestDockCreativeContext.useQuestDockQuest();
  const tmp4 = closure_10();
  const questTaskDetails = hooks_QuestHooks.useQuestTaskDetails(questDockQuest);
  const obj3 = hooks_QuestHooks;
  const questBarTitle = QuestCopyHooks.useQuestBarTitle(questDockQuest);
  const obj5 = QuestCopyHooks;
  const questBarSubtitle = obj5.useQuestBarSubtitle({ quest: questDockQuest, isExpanded: false, activeScreen: _slicedToArray(obj3.useTaskPlatformScreen(questDockQuest, questTaskDetails), 1)[0], sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE });
  const obj6 = { quest: questDockQuest, isExpanded: false, activeScreen: _slicedToArray(obj3.useTaskPlatformScreen(questDockQuest, questTaskDetails), 1)[0], sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE };
  const scaledTextLineHeight = useScaledTextLineHeight.useScaledTextLineHeight(variant);
  const obj9 = { style: tmp4.wrapper, children: null };
  const obj10 = { style: tmp4.progressIndicatorWrapper, children: null };
  const scaledTextLineHeight1 = useScaledTextLineHeight.useScaledTextLineHeight(variant);
  obj10.children = hasOwnProperty(QuestProgressIndicatorDefault, { quest: questDockQuest, size: "x-sm", progress: questTaskDetails.percentComplete, loading: false, hasConfetti: true });
  const items = [hasOwnProperty(View, obj10), ];
  const obj12 = { style: tmp4.copy, children: null };
  const items1 = [hasOwnProperty(Text_Text.Text, { variant, color: "mobile-text-heading-primary", lineClamp: 1, maxFontSizeMultiplier: 2, children: questBarTitle }), ];
  let tmp13Result = null;
  if (scaledTextLineHeight + scaledTextLineHeight1 <= closure_9) {
    const obj14 = { variant, color: "text-muted", lineClamp: 1, children: questBarSubtitle };
    tmp13Result = hasOwnProperty(Text_Text.Text, obj14);
  }
  items1[1] = tmp13Result;
  obj12.children = items1;
  items[1] = timestampProducer(View, obj12);
  obj9.children = items;
  return timestampProducer(View, obj9);
});