// discord_app/modules/quests/native/VideoQuestModal/useVideoQuestClickCtaAndMaybeCloseModal.tsx
import URLUtilsDefault from "../../../../utils/URLUtils.tsx";
import QuestCopyUtils from "../../utils/QuestCopyUtils.tsx";
import QuestPlatformUtils from "../../utils/QuestPlatformUtils.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/quests/native/VideoQuestModal/useVideoQuestClickCtaAndMaybeCloseModal.tsx",
);

export const useVideoQuestClickCtaAndMaybeCloseModal = function useVideoQuestClickCtaAndMaybeCloseModal(quest) {
  quest = quest.quest;
  const onClose = quest.onClose;
  const sourceQuestContent = quest.sourceQuestContent;
  const getQuestImpressionId = quest(sourceQuestContent[1]).useGetQuestImpressionId();
  const items = [quest, getQuestImpressionId, sourceQuestContent, onClose];
  return getQuestImpressionId.useCallback((content) => {
    let obj = URLUtilsDefault;
    if (obj.isDiscordUrl(obj2.getCtaLink(quest.config), true)) {
      onClose();
    }
    obj2 = QuestCopyUtils;
    const tmp3 = quest;
    obj = {
      content,
      ctaContent: tmp2(7728).QuestContentCTA.OPEN_GAME_LINK,
      impressionId: getQuestImpressionId(),
      sourceQuestContent,
    };
    QuestPlatformUtils.openGameLinkDirectly(tmp3, obj);
  }, items);
};
