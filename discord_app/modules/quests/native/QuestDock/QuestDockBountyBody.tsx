// discord_app/modules/quests/native/QuestDock/QuestDockBountyBody.tsx
import util from "../../../../intl/index.native.tsx";
import _modDef11297 from "../../../../../discord_assets/assets/orbs/reward_tile_v3_mobile.mp4.js";
import QuestDockHooks from "QuestDockHooks.tsx";
import QuestDockCreativeContext from "QuestDockCreativeContext.tsx";
import QuestDockVisibilityContextDefault from "QuestDockVisibilityContext.tsx";
import QuestDockInsetHeaderBody from "QuestDockInsetHeaderBody.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const QuestDockInsetHeaderBodyDefault = QuestDockInsetHeaderBody;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockBountyBody.tsx");

export default noop.memo(function QuestDockBountyBody() {
  const isRendered = noop.useContext(QuestDockVisibilityContextDefault).isRendered;
  let obj = QuestDockCreativeContext;
  const questDockBounty = obj.useQuestDockBounty();
  let isQuestDockExpanded = QuestDockHooks.useIsQuestDockExpanded();
  const callback = noop.useCallback(() => {}, []);
  obj = { assetUrl: _modDef11297, isAnimatedAsset: true, paused: null, withAnimation: null };
  let tmp8 = !isQuestDockExpanded;
  if (isQuestDockExpanded) {
    tmp8 = !isRendered;
  }
  obj.paused = tmp8;
  if (isQuestDockExpanded) {
    isQuestDockExpanded = isRendered;
  }
  obj = {
    rewardTile: tmp6(QuestDockInsetHeaderBody.QuestDockBodyRewardTile, obj),
    title: null,
    description: null,
    ctaText: null,
    onCtaPress: null,
    withAnimation: isQuestDockExpanded,
  };
  let str = questDockBounty.productName;
  if (str == null) {
    str = "";
  }
  obj.title = str;
  const intl = tmp2(1114).intl;
  obj.description = intl.string(util.t["1uzE2S"]);
  const intl2 = tmp2(1114).intl;
  obj.ctaText = intl2.string(util.t["1IPUq9"]);
  obj.onCtaPress = callback;
  return jsx(QuestDockInsetHeaderBodyDefault, {
    rewardTile: tmp6(QuestDockInsetHeaderBody.QuestDockBodyRewardTile, obj),
    title: null,
    description: null,
    ctaText: null,
    onCtaPress: null,
    withAnimation: isQuestDockExpanded,
  });
});
