// discord_app/modules/quests/native/QuestRewardTile.tsx
import noopDefault from "../../../../_runtime/00019_noop.js";
import _modDef11561 from "QuestDockRewardTile.tsx";
import { useMemo } from "../../../../_runtime/00019_noop.js";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";

const require = arg1;
noopDefault;
const result = require("set").fileFinishedImporting("modules/quests/native/QuestRewardTile.tsx");

export default function QuestRewardTile(quest) {
  quest = quest.quest;
  const merged = Object.assign(quest, Object.create(null));
  const items = [quest];
  const tmp3 = useMemo(() => quest(closure_1_2[2]).getQuestPrimaryReward(quest), items);
  if (null != tmp3.name) {
    let name = tmp3.name;
  } else {
    name = tmp3.messages.name;
  }
  const items1 = [quest];
  const tmp2Result = useMemo(
    () => quest(closure_1_2[3]).getQuestAsset(quest, quest(closure_1_2[3]).QuestAssetType.REWARD, undefined, true),
    items1,
  );
  const items2 = [quest.accessibilityLabelPrefix, name];
  const found = items2.filter(Boolean);
  const joined = found.join(", ");
  const obj = { assetUrl: tmp2Result.url, isAnimatedAsset: tmp2Result.isAnimated, accessibilityLabel: null };
  let tmp8;
  if ("" !== joined) {
    tmp8 = joined;
  }
  obj[2] = tmp8;
  const merged1 = Object.assign(merged);
  return jsx(_modDef11561, {
    assetUrl: tmp2Result.url,
    isAnimatedAsset: tmp2Result.isAnimated,
    accessibilityLabel: null,
  });
}
