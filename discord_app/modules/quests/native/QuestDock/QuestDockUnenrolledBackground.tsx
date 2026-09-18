// === Module 15407: QuestDockUnenrolledBackground ===

// Module 15407 (QuestDockUnenrolledBackground)
import nativeDefault from "native" /* 576 */;
import useToken from "useToken" /* 4423 */;
import QuestHooks from "QuestHooks" /* 15297 */;
import QuestDockCreativeContext from "QuestDockCreativeContext" /* 15308 */;
import QuestDockVideoBackgroundDefault from "QuestDockVideoBackground" /* 15408 */;
import noop from "module_19" /* 19 */;

require = fn;
const expandedHeight = fn(15301).QUEST_DOCK_LANDSCAPE_MEDIA_EXPANDED_HEIGHT;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockUnenrolledBackground.tsx");

export default noop.memo(function QuestDockUnenrolledBackground() {
  const questDockQuest = QuestDockCreativeContext.useQuestDockQuest();
  const questDockHeroAsset = QuestHooks.useQuestDockHeroAsset(questDockQuest);
  ({ videoAsset, staticUrl } = questDockHeroAsset);
  const token = useToken.useToken(nativeDefault.colors.CARD_BACKGROUND_DEFAULT);
  const obj4 = { expandedHeight, imageUrl: staticUrl, videoUrl: null, videoMimetype: null, gradientBaseColor: null };
  let url;
  if (videoAsset != null) {
    url = videoAsset.url;
  }
  obj4.videoUrl = url;
  let mimetype;
  if (videoAsset != null) {
    mimetype = videoAsset.mimetype;
  }
  if (mimetype == null) {
    mimetype = null;
  }
  obj4.videoMimetype = mimetype;
  obj4.gradientBaseColor = token;
  return jsx(QuestDockVideoBackgroundDefault, { expandedHeight, imageUrl: staticUrl, videoUrl: null, videoMimetype: null, gradientBaseColor: null });
});