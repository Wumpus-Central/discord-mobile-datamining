// === Module 15280: QuestDockUnenrolledBackground ===

// Module 15280 (QuestDockUnenrolledBackground)
import nativeDefault from "native" /* 576 */;
import useToken from "useToken" /* 4306 */;
import QuestHooks from "QuestHooks" /* 15170 */;
import QuestDockCreativeContext from "QuestDockCreativeContext" /* 15181 */;
import QuestDockVideoBackgroundDefault from "QuestDockVideoBackground" /* 15281 */;
import noop from "module_19" /* 19 */;

require = fn;
const expandedHeight = fn(15174).QUEST_DOCK_LANDSCAPE_MEDIA_EXPANDED_HEIGHT;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockUnenrolledBackground.tsx");

export default noop.memo(function QuestDockUnenrolledBackground() {
  let obj = QuestDockCreativeContext;
  const questDockQuest = obj.useQuestDockQuest();
  const questDockHeroAsset = QuestHooks.useQuestDockHeroAsset(questDockQuest);
  ({ videoAsset, staticUrl } = questDockHeroAsset);
  const token = useToken.useToken(nativeDefault.colors.CARD_BACKGROUND_DEFAULT);
  obj = { expandedHeight, imageUrl: staticUrl, videoUrl: null, videoMimetype: null, gradientBaseColor: null };
  let url;
  if (videoAsset != null) {
    url = videoAsset.url;
  }
  obj.videoUrl = url;
  let mimetype;
  if (videoAsset != null) {
    mimetype = videoAsset.mimetype;
  }
  if (mimetype == null) {
    mimetype = null;
  }
  obj.videoMimetype = mimetype;
  obj.gradientBaseColor = token;
  return jsx(QuestDockVideoBackgroundDefault, { expandedHeight, imageUrl: staticUrl, videoUrl: null, videoMimetype: null, gradientBaseColor: null });
});