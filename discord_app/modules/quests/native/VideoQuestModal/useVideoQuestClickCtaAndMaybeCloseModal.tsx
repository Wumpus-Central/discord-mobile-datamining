// === Module 14508: useVideoQuestClickCtaAndMaybeCloseModal ===

// Module 14508 (useVideoQuestClickCtaAndMaybeCloseModal)
import noop from "noop" /* 19 */;

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/quests/native/VideoQuestModal/useVideoQuestClickCtaAndMaybeCloseModal.tsx");

export const useVideoQuestClickCtaAndMaybeCloseModal = function useVideoQuestClickCtaAndMaybeCloseModal(quest) {
  quest = quest.quest;
  const onClose = quest.onClose;
  const sourceQuestContent = quest.sourceQuestContent;
  const getQuestImpressionId = quest(sourceQuestContent[1]).useGetQuestImpressionId();
  const items = [quest, getQuestImpressionId, sourceQuestContent, onClose];
  return getQuestImpressionId.useCallback(() => {
    let obj = onClose(sourceQuestContent[2]);
    if (obj.isDiscordUrl(obj2.getCtaLink(quest.config), true)) {
      onClose();
    }
    obj2 = quest(sourceQuestContent[3]);
    obj = { content: quest(sourceQuestContent[5]).QuestContent.VIDEO_MODAL_MOBILE, ctaContent: quest(sourceQuestContent[6]).QuestContentCTA.OPEN_GAME_LINK, impressionId: getQuestImpressionId(), sourceQuestContent };
    quest(sourceQuestContent[4]).openGameLinkDirectly(quest, obj);
    const tmp2Result = quest(sourceQuestContent[4]);
  }, items);
};