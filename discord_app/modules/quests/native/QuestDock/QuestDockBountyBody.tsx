// === Module 15203: ? ===

// Module 15203
import getSystemLocale from "getSystemLocale" /* 1114 */;
import metadataDefault from "metadata" /* 11297 */;
import useIsQuestDockExpanded from "useIsQuestDockExpanded" /* 15092 */;
import getCreativeAnalyticsParams from "getCreativeAnalyticsParams" /* 15102 */;
import contextDefault from "context" /* 15182 */;
import QUEST_DOCK_EXPANDED_PADDING_BOTTOM from "QUEST_DOCK_EXPANDED_PADDING_BOTTOM" /* 15200 */;
import QUEST_DOCK_EXPANDED_PADDING_BOTTOMDefault from "QUEST_DOCK_EXPANDED_PADDING_BOTTOM" /* 15200 */;
import importAllResult from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
let c3 = importAllResult;
const memoResult = importAllResult.memo(function QuestDockBountyBody() {
  const isRendered = importAllResult.useContext(contextDefault).isRendered;
  let obj = getCreativeAnalyticsParams;
  const questDockBounty = obj.useQuestDockBounty();
  let isQuestDockExpanded = useIsQuestDockExpanded.useIsQuestDockExpanded();
  const callback = importAllResult.useCallback(() => {

  }, []);
  const obj2 = useIsQuestDockExpanded;
  obj = { assetUrl: metadataDefault, isAnimatedAsset: true, paused: null, withAnimation: null };
  let tmp8 = !isQuestDockExpanded;
  if (isQuestDockExpanded) {
    tmp8 = !isRendered;
  }
  obj[2] = tmp8;
  if (isQuestDockExpanded) {
    isQuestDockExpanded = isRendered;
  }
  obj = { rewardTile: tmp6(QUEST_DOCK_EXPANDED_PADDING_BOTTOM.QuestDockBodyRewardTile, obj), title: null, description: null, ctaText: isQuestDockExpanded, onCtaPress: null };
  let str = questDockBounty.productName;
  if (str == null) {
    str = "";
  }
  obj[1] = str;
  const intl = tmp2(1114).intl;
  obj[2] = intl.string(getSystemLocale.t["1uzE2S"]);
  const intl2 = tmp2(1114).intl;
  obj[3] = intl2.string(getSystemLocale.t["1IPUq9"]);
  obj[4] = callback;
  return jsx(QUEST_DOCK_EXPANDED_PADDING_BOTTOMDefault, { rewardTile: tmp6(QUEST_DOCK_EXPANDED_PADDING_BOTTOM.QuestDockBodyRewardTile, obj), title: null, description: null, ctaText: isQuestDockExpanded, onCtaPress: null });
});
const result = require("set").fileFinishedImporting("modules/quests/native/QuestDock/QuestDockBountyBody.tsx");

export default memoResult;