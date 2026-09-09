// discord_app/modules/quests/native/QuestDock/QuestDockUnenrolledBackground.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import useToken from "../../../../design/tokens/native/useToken.tsx";
import QuestHooks from "../QuestHooks.native.tsx";
import QuestDockCreativeContext from "QuestDockCreativeContext.tsx";
import QuestDockVideoBackgroundDefault from "QuestDockVideoBackground.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

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
  return jsx(QuestDockVideoBackgroundDefault, {
    imageUrl: staticUrl,
    videoUrl: null,
    videoMimetype: null,
    gradientBaseColor: null,
  });
});
