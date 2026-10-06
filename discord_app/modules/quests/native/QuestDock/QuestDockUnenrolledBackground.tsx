// === Module 15018: QuestDockUnenrolledBackground ===

// Module 15018 (QuestDockUnenrolledBackground)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import useToken from "useToken" /* 4586 */;
import QuestHooks from "QuestHooks" /* 14908 */;
import QuestDockConstants from "QuestDockConstants" /* 14912 */;
import QuestDockCreativeContext from "QuestDockCreativeContext" /* 14940 */;
import QuestDockVideoBackgroundDefault from "QuestDockVideoBackground" /* 15019 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const expandedHeight = QuestDockConstants.QUEST_DOCK_LANDSCAPE_MEDIA_EXPANDED_HEIGHT;
const jsx = Fragment.jsx;
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let staticUrl;
  let videoAsset;
  const obj = react2;
  const cResult = obj.c(5);
  const obj2 = QuestDockCreativeContext;
  const questDockQuest = obj2.useQuestDockQuest();
  const obj3 = QuestHooks;
  const questDockHeroAsset = obj3.useQuestDockHeroAsset(questDockQuest);
  ({ staticUrl, videoAsset } = questDockHeroAsset);
  const obj4 = useToken;
  const token = obj4.useToken(nativeDefault.colors.CARD_BACKGROUND_DEFAULT);
  let url;
  if (videoAsset != null) {
    url = videoAsset.url;
  }
  let mimetype;
  if (videoAsset != null) {
    mimetype = videoAsset.mimetype;
  }
  if (mimetype == null) {
    mimetype = null;
  }
  if (cResult[0] === token) {
    if (cResult[1] === staticUrl) {
      if (cResult[2] === url) {
        let tmp9;
        if (cResult[3] === mimetype) {
          tmp9 = cResult[4];
        }
        return tmp9;
      }
    }
  }
  const tmp10 = jsx(QuestDockVideoBackgroundDefault, { expandedHeight, imageUrl: staticUrl, videoUrl: url, videoMimetype: mimetype, gradientBaseColor: token });
  cResult[0] = token;
  cResult[1] = staticUrl;
  cResult[2] = url;
  cResult[3] = mimetype;
  cResult[4] = tmp10;
  tmp9 = tmp10;
}) : (() => {
  let staticUrl;
  let videoAsset;
  const obj = QuestDockCreativeContext;
  const questDockQuest = obj.useQuestDockQuest();
  const obj2 = QuestHooks;
  const questDockHeroAsset = obj2.useQuestDockHeroAsset(questDockQuest);
  ({ videoAsset, staticUrl } = questDockHeroAsset);
  const obj3 = useToken;
  const token = obj3.useToken(nativeDefault.colors.CARD_BACKGROUND_DEFAULT);
  let url;
  QuestDockVideoBackgroundDefault;
  if (videoAsset != null) {
    url = videoAsset.url;
  }
  let mimetype;
  if (videoAsset != null) {
    mimetype = videoAsset.mimetype;
  }
  if (mimetype == null) {
    mimetype = null;
  }
  return <tmp5 expandedHeight={expandedHeight} imageUrl={staticUrl} videoUrl={url} videoMimetype={mimetype} gradientBaseColor={token} />;
}));
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockUnenrolledBackground.tsx");

export default memoResult;