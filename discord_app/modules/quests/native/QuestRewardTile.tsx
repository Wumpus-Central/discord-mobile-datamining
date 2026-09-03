// === Module 11565: QuestRewardTile ===

// Module 11565 (QuestRewardTile)
import noopDefault from "noop" /* 19 */;
import _modDef11566 from "module_11566" /* 11566 */;
import { useMemo } from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;

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
  const tmp2Result = useMemo(() => quest(closure_1_2[3]).getQuestAsset(quest, quest(closure_1_2[3]).QuestAssetType.REWARD, undefined, true), items1);
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
  return jsx(_modDef11566, { assetUrl: tmp2Result.url, isAnimatedAsset: tmp2Result.isAnimated, accessibilityLabel: null });
};