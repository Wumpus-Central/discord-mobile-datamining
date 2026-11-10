// === Module 17522: QuestDockUnenrolledBackground ===

// Module 17522 (QuestDockUnenrolledBackground)
import nativeDefault from "native" /* 575 */;
import useToken from "useToken" /* 5726 */;
import QuestHooks from "QuestHooks" /* 17415 */;
import QuestDockCreativeContext from "QuestDockCreativeContext" /* 17449 */;
import QuestDockVideoBackgroundDefault from "QuestDockVideoBackground" /* 17523 */;
import noop from "module_19" /* 19 */;

require = fn;
const expandedHeight = fn(17420).QUEST_DOCK_LANDSCAPE_MEDIA_EXPANDED_HEIGHT;
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