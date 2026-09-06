// discord_app/modules/quests/native/QuestDock/QuestDockBountyBody.tsx
import getSystemLocale from "../../../../intl/index.native.tsx";
import metadataDefault from "../../../../../discord_assets/assets/orbs/reward_tile_v3_mobile.mp4.js";
import useIsQuestDockExpanded from "QuestDockHooks.tsx";
import getCreativeAnalyticsParams from "QuestDockCreativeContext.tsx";
import contextDefault from "QuestDockVisibilityContext.tsx";
import QUEST_DOCK_EXPANDED_PADDING_BOTTOM from "QuestDockInsetHeaderBody.tsx";
import QUEST_DOCK_EXPANDED_PADDING_BOTTOMDefault from "QuestDockInsetHeaderBody.tsx";
import importAllResult from "../../../../../_runtime/00019_noop.js";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";

require = arg1;
let c3 = importAllResult;
const memoResult = importAllResult.memo(function QuestDockBountyBody() {
  const isRendered = importAllResult.useContext(contextDefault).isRendered;
  let obj = getCreativeAnalyticsParams;
  const questDockBounty = obj.useQuestDockBounty();
  let isQuestDockExpanded = useIsQuestDockExpanded.useIsQuestDockExpanded();
  const callback = importAllResult.useCallback(() => {}, []);
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
  obj = {
    rewardTile: tmp6(QUEST_DOCK_EXPANDED_PADDING_BOTTOM.QuestDockBodyRewardTile, obj),
    title: null,
    description: null,
    ctaText: isQuestDockExpanded,
    onCtaPress: null,
  };
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
  return jsx(QUEST_DOCK_EXPANDED_PADDING_BOTTOMDefault, {
    rewardTile: tmp6(QUEST_DOCK_EXPANDED_PADDING_BOTTOM.QuestDockBodyRewardTile, obj),
    title: null,
    description: null,
    ctaText: isQuestDockExpanded,
    onCtaPress: null,
  });
});
const result = require("set").fileFinishedImporting("modules/quests/native/QuestDock/QuestDockBountyBody.tsx");

export default memoResult;
