// === Module 15032: ? ===

// Module 15032
import Text from "Text" /* 4474 */;
import QuestsVisibleMessagesChangedSource from "QuestsVisibleMessagesChangedSource" /* 5399 */;
import useQuests from "useQuests" /* 11307 */;
import _getQuestsInstructionsToWinReward from "_getQuestsInstructionsToWinReward" /* 11570 */;
import getCreativeAnalyticsParams from "getCreativeAnalyticsParams" /* 14944 */;
import COMPLETION_GLOW_SHADOW_RADIUSDefault from "COMPLETION_GLOW_SHADOW_RADIUS" /* 14973 */;
import closure_3 from "_slicedToArray" /* 32 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;
import importAllResult from "noop" /* 19 */;

require = arg1;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
let closure_7 = createCacheKey.createStyles({ wrapper: { alignItems: "center", display: "flex", flexDirection: "row", flexGrow: 1, flexShrink: 1, gap: 8, justifyContent: "center", padding: 8 }, progressIndicatorWrapper: { flexGrow: 0, flexShrink: 0 }, copy: { flexGrow: 1, flexShrink: 1 } });
const memoResult = importAllResult.memo(function QuestDockEnrolledHeader() {
  let obj = getCreativeAnalyticsParams;
  const questDockQuest = obj.useQuestDockQuest();
  const tmp2 = callback4();
  obj1 = useQuests;
  const questTaskDetails = obj1.useQuestTaskDetails(questDockQuest);
  let obj2 = useQuests;
  let obj3 = _getQuestsInstructionsToWinReward;
  const questBarTitle = obj3.useQuestBarTitle(questDockQuest);
  obj = { quest: questDockQuest, isExpanded: false, activeScreen: callback(obj2.useTaskPlatformScreen(questDockQuest, questTaskDetails), 1)[0], sourceQuestContent: QuestsVisibleMessagesChangedSource.QuestContent.QUEST_BAR_MOBILE };
  obj = { style: tmp2.wrapper, children: null };
  obj1 = { style: tmp2.progressIndicatorWrapper, children: null };
  const questBarSubtitle = _getQuestsInstructionsToWinReward.useQuestBarSubtitle(obj);
  obj2 = { quest: questDockQuest, size: "x-sm", progress: questTaskDetails.percentComplete, loading: false, hasConfetti: true };
  obj1[1] = callback2(COMPLETION_GLOW_SHADOW_RADIUSDefault, obj2);
  const items = [callback2(View, obj1), ];
  obj3 = { style: tmp2.copy, children: null };
  const items1 = [callback2(Text.Text, { variant: "heading-md/semibold", color: "mobile-text-heading-primary", children: questBarTitle }), callback2(Text.Text, { variant: "text-sm/medium", color: "text-muted", children: questBarSubtitle })];
  obj3[1] = items1;
  items[1] = callback3(View, obj3);
  obj[1] = items;
  return callback3(View, obj);
});
const result = require("set").fileFinishedImporting("modules/quests/native/QuestDock/QuestDockEnrolledHeader.tsx");

export default memoResult;