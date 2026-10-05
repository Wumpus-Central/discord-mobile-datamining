// discord_app/modules/quests/native/QuestDock/QuestDockUnenrolledBackground.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import useToken from "../../../../design/tokens/native/useToken.tsx";
import QuestHooks from "../QuestHooks.native.tsx";
import QuestDockConstants from "QuestDockConstants.tsx";
import QuestDockCreativeContext from "QuestDockCreativeContext.tsx";
import QuestDockVideoBackgroundDefault from "QuestDockVideoBackground.tsx";
import react from "../../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const expandedHeight = QuestDockConstants.QUEST_DOCK_LANDSCAPE_MEDIA_EXPANDED_HEIGHT;
const jsx = Fragment.jsx;
const memoResult = react.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? () => {
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
        const tmp10 = jsx(QuestDockVideoBackgroundDefault, {
          expandedHeight,
          imageUrl: staticUrl,
          videoUrl: url,
          videoMimetype: mimetype,
          gradientBaseColor: token,
        });
        cResult[0] = token;
        cResult[1] = staticUrl;
        cResult[2] = url;
        cResult[3] = mimetype;
        cResult[4] = tmp10;
        tmp9 = tmp10;
      }
    : () => {
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
        return (
          <tmp5
            expandedHeight={expandedHeight}
            imageUrl={staticUrl}
            videoUrl={url}
            videoMimetype={mimetype}
            gradientBaseColor={token}
          />
        );
      },
);
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockUnenrolledBackground.tsx");

export default memoResult;
