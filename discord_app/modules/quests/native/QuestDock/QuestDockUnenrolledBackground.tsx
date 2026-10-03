// discord_app/modules/quests/native/QuestDock/QuestDockUnenrolledBackground.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import useToken from "../../../../design/tokens/native/useToken.tsx";
import QuestHooks from "../QuestHooks.native.tsx";
import QuestDockCreativeContext from "QuestDockCreativeContext.tsx";
import QuestDockVideoBackgroundDefault from "QuestDockVideoBackground.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const expandedHeight = fn(14892).QUEST_DOCK_LANDSCAPE_MEDIA_EXPANDED_HEIGHT;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockUnenrolledBackground.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? () => {
        const cResult = c.c(5);
        const questDockQuest = QuestDockCreativeContext.useQuestDockQuest();
        const questDockHeroAsset = QuestHooks.useQuestDockHeroAsset(questDockQuest);
        ({ staticUrl, videoAsset } = questDockHeroAsset);
        const token = useToken.useToken(nativeDefault.colors.CARD_BACKGROUND_DEFAULT);
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
              if (cResult[3] === mimetype) {
                let tmp9 = cResult[4];
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
        const obj5 = {
          expandedHeight,
          imageUrl: staticUrl,
          videoUrl: url,
          videoMimetype: mimetype,
          gradientBaseColor: token,
        };
      }
    : () => {
        const questDockQuest = QuestDockCreativeContext.useQuestDockQuest();
        const questDockHeroAsset = QuestHooks.useQuestDockHeroAsset(questDockQuest);
        ({ videoAsset, staticUrl } = questDockHeroAsset);
        const token = useToken.useToken(nativeDefault.colors.CARD_BACKGROUND_DEFAULT);
        const obj4 = {
          expandedHeight,
          imageUrl: staticUrl,
          videoUrl: null,
          videoMimetype: null,
          gradientBaseColor: null,
        };
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
        return jsx(QuestDockVideoBackgroundDefault, {
          expandedHeight,
          imageUrl: staticUrl,
          videoUrl: null,
          videoMimetype: null,
          gradientBaseColor: null,
        });
      },
);
