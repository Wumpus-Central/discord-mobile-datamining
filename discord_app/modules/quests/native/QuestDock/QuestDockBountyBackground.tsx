// === Module 15287: QuestDockBountyBackground ===

// Module 15287 (QuestDockBountyBackground)
import AssetUtils from "AssetUtils" /* 11419 */;
import QuestDockVideoBackgroundDefault from "QuestDockVideoBackground" /* 15283 */;
import noop from "module_19" /* 19 */;

require = fn;
const expandedHeight = fn(15176).QUEST_DOCK_PORTRAIT_MEDIA_EXPANDED_HEIGHT;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockBountyBackground.tsx");

export default noop.memo(function QuestDockBountyBackground(imageUrl) {
  let questDockBounty;
  questDockBounty = questDockBounty(15183).useQuestDockBounty();
  const obj = questDockBounty(15183);
  const items = [questDockBounty.videoPreview];
  const questDockBountyBackgroundColor = questDockBounty(15173).useQuestDockBountyBackgroundColor();
  const memo = noop.useMemo(() => AssetUtils.getMimetype(questDockBounty.videoPreview), items);
  const obj3 = { imageUrl: imageUrl.previewImageUrl, videoUrl: questDockBounty.videoPreview, videoMimetype: memo, collapsedMediaMode: null, gradientBaseColor: null, expandedHeight: null };
  const obj2 = questDockBounty(15173);
  obj3.collapsedMediaMode = questDockBounty(15283).QuestDockBackgroundCollapsedMediaMode.HIDDEN;
  obj3.gradientBaseColor = questDockBountyBackgroundColor;
  obj3.expandedHeight = expandedHeight;
  return jsx(QuestDockVideoBackgroundDefault, { imageUrl: imageUrl.previewImageUrl, videoUrl: questDockBounty.videoPreview, videoMimetype: memo, collapsedMediaMode: null, gradientBaseColor: null, expandedHeight: null });
});