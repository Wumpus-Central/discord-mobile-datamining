// === Module 15297: QuestDockBountyBackground ===

// Module 15297 (QuestDockBountyBackground)
import AssetUtils from "AssetUtils" /* 11423 */;
import QuestDockVideoBackgroundDefault from "QuestDockVideoBackground" /* 15293 */;
import noop from "module_19" /* 19 */;

require = fn;
const expandedHeight = fn(15186).QUEST_DOCK_PORTRAIT_MEDIA_EXPANDED_HEIGHT;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockBountyBackground.tsx");

export default noop.memo(function QuestDockBountyBackground(imageUrl) {
  let questDockBounty;
  questDockBounty = questDockBounty(15193).useQuestDockBounty();
  const obj = questDockBounty(15193);
  const items = [questDockBounty.videoPreview];
  const questDockBountyBackgroundColor = questDockBounty(15183).useQuestDockBountyBackgroundColor();
  const memo = noop.useMemo(() => AssetUtils.getMimetype(questDockBounty.videoPreview), items);
  const obj3 = { imageUrl: imageUrl.previewImageUrl, videoUrl: questDockBounty.videoPreview, videoMimetype: memo, collapsedMediaMode: null, gradientBaseColor: null, expandedHeight: null };
  const obj2 = questDockBounty(15183);
  obj3.collapsedMediaMode = questDockBounty(15293).QuestDockBackgroundCollapsedMediaMode.HIDDEN;
  obj3.gradientBaseColor = questDockBountyBackgroundColor;
  obj3.expandedHeight = expandedHeight;
  return jsx(QuestDockVideoBackgroundDefault, { imageUrl: imageUrl.previewImageUrl, videoUrl: questDockBounty.videoPreview, videoMimetype: memo, collapsedMediaMode: null, gradientBaseColor: null, expandedHeight: null });
});