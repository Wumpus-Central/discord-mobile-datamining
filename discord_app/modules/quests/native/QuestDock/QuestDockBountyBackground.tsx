// discord_app/modules/quests/native/QuestDock/QuestDockBountyBackground.tsx
import AssetUtils from "../../lib/AssetUtils.tsx";
import QuestDockVideoBackgroundDefault from "QuestDockVideoBackground.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const expandedHeight = fn(15207).QUEST_DOCK_PORTRAIT_MEDIA_EXPANDED_HEIGHT;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockBountyBackground.tsx");

export default noop.memo(function QuestDockBountyBackground(imageUrl) {
  let questDockBounty;
  questDockBounty = questDockBounty(15214).useQuestDockBounty();
  const obj = questDockBounty(15214);
  const items = [questDockBounty.videoPreview];
  const questDockBountyBackgroundColor = questDockBounty(15204).useQuestDockBountyBackgroundColor();
  const memo = noop.useMemo(() => AssetUtils.getMimetype(questDockBounty.videoPreview), items);
  const obj3 = {
    imageUrl: imageUrl.previewImageUrl,
    videoUrl: questDockBounty.videoPreview,
    videoMimetype: memo,
    collapsedMediaMode: null,
    gradientBaseColor: null,
    expandedHeight: null,
  };
  const obj2 = questDockBounty(15204);
  obj3.collapsedMediaMode = questDockBounty(15314).QuestDockBackgroundCollapsedMediaMode.HIDDEN;
  obj3.gradientBaseColor = questDockBountyBackgroundColor;
  obj3.expandedHeight = expandedHeight;
  return jsx(QuestDockVideoBackgroundDefault, {
    imageUrl: imageUrl.previewImageUrl,
    videoUrl: questDockBounty.videoPreview,
    videoMimetype: memo,
    collapsedMediaMode: null,
    gradientBaseColor: null,
    expandedHeight: null,
  });
});
