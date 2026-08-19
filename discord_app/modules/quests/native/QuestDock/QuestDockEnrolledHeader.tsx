// === Module 14541: ? ===

// Module 14541
import Text from "Text" /* 4734 */;
import QuestsVisibleMessagesChangedSource from "QuestsVisibleMessagesChangedSource" /* 6719 */;
import useQuests from "useQuests" /* 10684 */;
import _getQuestsInstructionsToWinReward from "_getQuestsInstructionsToWinReward" /* 10954 */;
import getDeliveredQuest from "getDeliveredQuest" /* 14469 */;
import QUEST_PROGRESS_DIAMETER_BY_SIZEDefault from "QUEST_PROGRESS_DIAMETER_BY_SIZE" /* 14483 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;
import importAllResult from "noop" /* 19 */;

require = fn;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
let closure_7 = createCacheKey.createStyles({ wrapper: { alignItems: "center", display: "flex", flexDirection: "row", flexGrow: 1, flexShrink: 1, gap: 8, justifyContent: "center", padding: 8 }, progressIndicatorWrapper: { flexGrow: 0, flexShrink: 0 }, copy: { flexGrow: 1, flexShrink: 1 } });
const memoResult = importAllResult.memo(function QuestDockEnrolledHeader() {
  let obj = getDeliveredQuest;
  const questCreative = obj.useQuestCreative();
  const tmp2 = callback4();
  obj1 = useQuests;
  const questTaskDetails = obj1.useQuestTaskDetails(questCreative);
  let obj2 = useQuests;
  let obj3 = _getQuestsInstructionsToWinReward;
  const questBarTitle = obj3.useQuestBarTitle(questCreative);
  { quest: questCreative, isExpanded: false, activeScreen: callback(obj2.useTaskPlatformScreen(questCreative, questTaskDetails), 1)[0], sourceQuestContent: QuestsVisibleMessagesChangedSource.QuestContent.QUEST_BAR_MOBILE };
  obj = { style: tmp2.wrapper, children: null };
  obj1 = { style: tmp2.progressIndicatorWrapper, children: null };
  const questBarSubtitle = _getQuestsInstructionsToWinReward.useQuestBarSubtitle(obj);
  obj2 = { quest: questCreative, size: "x-sm", progress: questTaskDetails.percentComplete, loading: false, hasConfetti: true };
  obj1[1] = callback2(QUEST_PROGRESS_DIAMETER_BY_SIZEDefault, obj2);
  const items = [callback2(View, obj1), ];
  obj3 = { style: tmp2.copy, children: null };
  const items1 = [callback2(Text.Text, { variant: "heading-md/semibold", color: "mobile-text-heading-primary", children: questBarTitle }), callback2(Text.Text, { variant: "text-sm/medium", color: "text-muted", children: questBarSubtitle })];
  obj3[1] = items1;
  items[1] = callback3(View, obj3);
  obj[1] = items;
  return callback3(View, obj);
});
const result = require("obj132").fileFinishedImporting("modules/quests/native/QuestDock/QuestDockEnrolledHeader.tsx");

export default memoResult;