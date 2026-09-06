// discord_app/modules/quests/native/QuestRewardTile.tsx
import AssetUtils from "../lib/AssetUtils.tsx";
import QuestRewardUtils from "../utils/QuestRewardUtils.tsx";
import QuestDockRewardTileDefault from "QuestDockRewardTile.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const useMemo = fn(19).useMemo;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/QuestRewardTile.tsx");

export default function QuestRewardTile(quest) {
  quest = quest.quest;
  const merged = Object.assign(quest, Object.assign({ quest: 0, accessibilityLabelPrefix: 0 }));
  const items = [quest];
  const tmp3 = useMemo(() => QuestRewardUtils.getQuestPrimaryReward(quest), items);
  if (null != tmp3.name) {
    let name = tmp3.name;
  } else {
    name = tmp3.messages.name;
  }
  const items1 = [quest];
  const tmp2Result = useMemo(
    () => AssetUtils.getQuestAsset(quest, AssetUtils.QuestAssetType.REWARD, undefined, true),
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
  obj.accessibilityLabel = tmp8;
  const merged1 = Object.assign(merged);
  return jsx(QuestDockRewardTileDefault, {
    assetUrl: tmp2Result.url,
    isAnimatedAsset: tmp2Result.isAnimated,
    accessibilityLabel: null,
  });
}
