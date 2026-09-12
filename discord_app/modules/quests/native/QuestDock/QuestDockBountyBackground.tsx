// discord_app/modules/quests/native/QuestDock/QuestDockBountyBackground.tsx
import AssetUtils from "../../lib/AssetUtils.tsx";
import QuestDockVideoBackgroundDefault from "QuestDockVideoBackground.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const expandedHeight = fn(15175).QUEST_DOCK_PORTRAIT_MEDIA_EXPANDED_HEIGHT;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockBountyBackground.tsx");

export default noop.memo(function QuestDockBountyBackground(imageUrl) {
  let questDockBounty;
  let obj = questDockBounty(15182);
  questDockBounty = obj.useQuestDockBounty();
  const items = [questDockBounty.videoPreview];
  const questDockBountyBackgroundColor = questDockBounty(15172).useQuestDockBountyBackgroundColor();
  const memo = noop.useMemo(() => AssetUtils.getMimetype(questDockBounty.videoPreview), items);
  obj = {
    imageUrl: imageUrl.previewImageUrl,
    videoUrl: questDockBounty.videoPreview,
    videoMimetype: memo,
    collapsedMediaMode: null,
    gradientBaseColor: null,
    expandedHeight: null,
  };
  const obj2 = questDockBounty(15172);
  obj.collapsedMediaMode = questDockBounty(15282).QuestDockBackgroundCollapsedMediaMode.HIDDEN;
  obj.gradientBaseColor = questDockBountyBackgroundColor;
  obj.expandedHeight = expandedHeight;
  return jsx(QuestDockVideoBackgroundDefault, {
    imageUrl: imageUrl.previewImageUrl,
    videoUrl: questDockBounty.videoPreview,
    videoMimetype: memo,
    collapsedMediaMode: null,
    gradientBaseColor: null,
    expandedHeight: null,
  });
});
