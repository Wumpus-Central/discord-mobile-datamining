// discord_app/modules/quests/native/VideoQuestModal/useVideoQuestClickCtaAndMaybeCloseModal.tsx
import URLUtilsDefault from "../../../../utils/URLUtils.tsx";
import AnalyticsTypes from "../../lib/analytics/AnalyticsTypes.tsx";
import QuestCopyUtils from "../../utils/QuestCopyUtils.tsx";
import QuestPlatformUtils from "../../utils/QuestPlatformUtils.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/quests/native/VideoQuestModal/useVideoQuestClickCtaAndMaybeCloseModal.tsx",
);

export const useVideoQuestClickCtaAndMaybeCloseModal = ReactCompilerGating.isReactCompilerEnabled()
  ? (quest) => {
      const cResult = quest(sourceQuestContent[2]).c(5);
      quest = quest.quest;
      const onClose = quest.onClose;
      sourceQuestContent = quest.sourceQuestContent;
      let obj = quest(sourceQuestContent[2]);
      const getQuestImpressionId = quest(sourceQuestContent[3]).useGetQuestImpressionId();
      if (cResult[0] === getQuestImpressionId) {
        if (cResult[1] === onClose) {
          if (cResult[2] === quest) {
            if (cResult[3] === sourceQuestContent) {
              let tmp3 = cResult[4];
            }
            return tmp3;
          }
        }
      }
      const fn = function n(content) {
        const obj = URLUtilsDefault;
        if (obj.isDiscordUrl(obj2.getCtaLink(quest.config), true)) {
          onClose();
        }
        obj2 = QuestCopyUtils;
        const tmp2Result = QuestPlatformUtils;
        tmp2Result.openGameLinkDirectly(quest, {
          content,
          ctaContent: AnalyticsTypes.QuestContentCTA.OPEN_GAME_LINK,
          impressionId: getQuestImpressionId(),
          sourceQuestContent,
        });
        const obj3 = {
          content,
          ctaContent: AnalyticsTypes.QuestContentCTA.OPEN_GAME_LINK,
          impressionId: getQuestImpressionId(),
          sourceQuestContent,
        };
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
      const getQuestImpressionId = quest(sourceQuestContent[3]).useGetQuestImpressionId();
      const items = [quest, getQuestImpressionId, sourceQuestContent, onClose];
      return getQuestImpressionId.useCallback((content) => {
        const obj = URLUtilsDefault;
        if (obj.isDiscordUrl(obj2.getCtaLink(quest.config), true)) {
          onClose();
        }
        obj2 = QuestCopyUtils;
        const tmp2Result = QuestPlatformUtils;
        tmp2Result.openGameLinkDirectly(quest, {
          content,
          ctaContent: AnalyticsTypes.QuestContentCTA.OPEN_GAME_LINK,
          impressionId: getQuestImpressionId(),
          sourceQuestContent,
        });
        const obj3 = {
          content,
          ctaContent: AnalyticsTypes.QuestContentCTA.OPEN_GAME_LINK,
          impressionId: getQuestImpressionId(),
          sourceQuestContent,
        };
      }, items);
    };
