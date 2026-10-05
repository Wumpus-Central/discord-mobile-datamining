// discord_app/modules/quests/native/VideoQuestModal/useVideoQuestClickCtaAndMaybeCloseModal.tsx
import URLUtilsDefault from "../../../../utils/URLUtils.tsx";
import AnalyticsTypes from "../../lib/analytics/AnalyticsTypes.tsx";
import QuestCopyUtils from "../../utils/QuestCopyUtils.tsx";
import QuestPlatformUtils from "../../utils/QuestPlatformUtils.tsx";
import react from "../../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let quest;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (quest) => {
      let sourceQuestContent;
      let obj = quest(sourceQuestContent[2]);
      const cResult = obj.c(5);
      quest = quest.quest;
      const onClose = quest.onClose;
      sourceQuestContent = quest.sourceQuestContent;
      let obj2 = quest(sourceQuestContent[3]);
      const getQuestImpressionId = obj2.useGetQuestImpressionId();
      if (cResult[0] === getQuestImpressionId) {
        if (cResult[1] === onClose) {
          if (cResult[2] === quest) {
            let tmp3;
            if (cResult[3] === sourceQuestContent) {
              tmp3 = cResult[4];
            }
            return tmp3;
          }
        }
      }
      const fn = function n(content) {
        const isDiscordUrl = URLUtilsDefault.isDiscordUrl;
        URLUtilsDefault;
        const obj = QuestCopyUtils;
        if (isDiscordUrl(obj.getCtaLink(quest.config), true)) {
          onClose();
        }
        const tmp3Result = QuestPlatformUtils;
        const obj2 = {
          content,
          ctaContent: AnalyticsTypes.QuestContentCTA.OPEN_GAME_LINK,
          impressionId: getQuestImpressionId(),
          sourceQuestContent,
        };
        tmp3Result.openGameLinkDirectly(quest, obj2);
      };
      cResult[0] = getQuestImpressionId;
      cResult[1] = onClose;
      cResult[2] = quest;
      cResult[3] = sourceQuestContent;
      cResult[4] = fn;
      tmp3 = fn;
    }
  : (quest) => {
      quest = quest.quest;
      const onClose = quest.onClose;
      const sourceQuestContent = quest.sourceQuestContent;
      let obj = quest(sourceQuestContent[3]);
      const getQuestImpressionId = obj.useGetQuestImpressionId();
      const items = [quest, getQuestImpressionId, sourceQuestContent, onClose];
      return getQuestImpressionId.useCallback((content) => {
        const isDiscordUrl = URLUtilsDefault.isDiscordUrl;
        URLUtilsDefault;
        const obj = QuestCopyUtils;
        if (isDiscordUrl(obj.getCtaLink(quest.config), true)) {
          onClose();
        }
        const tmp3Result = QuestPlatformUtils;
        const obj2 = {
          content,
          ctaContent: AnalyticsTypes.QuestContentCTA.OPEN_GAME_LINK,
          impressionId: getQuestImpressionId(),
          sourceQuestContent,
        };
        tmp3Result.openGameLinkDirectly(quest, obj2);
      }, items);
    };
const result = size.fileFinishedImporting(
  "modules/quests/native/VideoQuestModal/useVideoQuestClickCtaAndMaybeCloseModal.tsx",
);

export const useVideoQuestClickCtaAndMaybeCloseModal = tmp2;
