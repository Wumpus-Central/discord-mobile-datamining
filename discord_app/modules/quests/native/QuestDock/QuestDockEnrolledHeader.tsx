import _slicedToArray from "_slicedToArray";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import importAllResult from "noop";

let c5;
let closure_6;
const require = arg1;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
let closure_7 = createCacheKey.createStyles({ wrapper: { alignItems: "center", display: "flex", flexDirection: "row", flexGrow: 1, flexShrink: 1, gap: 8, justifyContent: "center", padding: 8 }, progressIndicatorWrapper: { flexGrow: 0, flexShrink: 0 }, copy: { flexGrow: 1, flexShrink: 1 } });
const memoResult = require("noop").memo(function QuestDockEnrolledHeader() {
  let obj = require(14290) /* getDeliveredQuest */;
  const questCreative = obj.useQuestCreative();
  const tmp2 = callback4();
  let obj1 = require(10643) /* useQuests */;
  const questTaskDetails = obj1.useQuestTaskDetails(questCreative);
  let obj2 = require(10643) /* useQuests */;
  let obj3 = require(11102) /* _getQuestsInstructionsToWinReward */;
  const questBarTitle = obj3.useQuestBarTitle(questCreative);
  obj = { quest: questCreative, isExpanded: false, activeScreen: callback(obj2.useTaskPlatformScreen(questCreative, questTaskDetails), 1)[0], sourceQuestContent: require(5102) /* QuestsVisibleMessagesChangedSource */.QuestContent.QUEST_BAR_MOBILE };
  obj = { style: tmp2.wrapper, children: null };
  obj1 = { style: tmp2.progressIndicatorWrapper, children: null };
  const questBarSubtitle = require(11102) /* _getQuestsInstructionsToWinReward */.useQuestBarSubtitle(obj);
  obj2 = { quest: questCreative, size: "x-sm", progress: questTaskDetails.percentComplete, loading: false, hasConfetti: true };
  obj1[1] = callback2(importDefault(14240), obj2);
  const items = [callback2(View, obj1), ];
  obj3 = { style: tmp2.copy, children: null };
  const items1 = [callback2(require(4251) /* Text */.Text, { variant: "heading-md/semibold", color: "mobile-text-heading-primary", children: questBarTitle }), callback2(require(4251) /* Text */.Text, { variant: "text-sm/medium", color: "text-muted", children: questBarSubtitle })];
  obj3[1] = items1;
  items[1] = callback3(View, obj3);
  obj[1] = items;
  return callback3(View, obj);
});
const result = require("get ActivityIndicator").fileFinishedImporting("modules/quests/native/QuestDock/QuestDockEnrolledHeader.tsx");

export default memoResult;