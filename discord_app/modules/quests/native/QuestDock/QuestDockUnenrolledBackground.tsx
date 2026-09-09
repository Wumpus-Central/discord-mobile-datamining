// === Module 15231: QuestDockUnenrolledBackground ===

// Module 15231 (QuestDockUnenrolledBackground)
import nativeDefault from "native" /* 576 */;
import useToken from "useToken" /* 4275 */;
import QuestHooks from "QuestHooks" /* 15121 */;
import QuestDockCreativeContext from "QuestDockCreativeContext" /* 15132 */;
import QuestDockVideoBackgroundDefault from "QuestDockVideoBackground" /* 15232 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockUnenrolledBackground.tsx");

export default noop.memo(function QuestDockUnenrolledBackground() {
  let obj = QuestDockCreativeContext;
  const questDockQuest = obj.useQuestDockQuest();
  const questDockHeroAsset = QuestHooks.useQuestDockHeroAsset(questDockQuest);
  ({ videoAsset, staticUrl } = questDockHeroAsset);
  const token = useToken.useToken(nativeDefault.colors.CARD_BACKGROUND_DEFAULT);
  obj = { imageUrl: staticUrl, videoUrl: null, videoMimetype: null, gradientBaseColor: null };
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
  return jsx(QuestDockVideoBackgroundDefault, { imageUrl: staticUrl, videoUrl: null, videoMimetype: null, gradientBaseColor: null });
});