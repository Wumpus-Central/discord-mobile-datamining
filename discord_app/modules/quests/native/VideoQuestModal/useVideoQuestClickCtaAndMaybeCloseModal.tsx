// === Module 15155: useVideoQuestClickCtaAndMaybeCloseModal ===

// Module 15155 (useVideoQuestClickCtaAndMaybeCloseModal)
import URLUtilsDefault from "URLUtils" /* 1365 */;
import QuestCopyUtils from "QuestCopyUtils" /* 11295 */;
import QuestPlatformUtils from "QuestPlatformUtils" /* 11496 */;
import noop from "module_19" /* 19 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/VideoQuestModal/useVideoQuestClickCtaAndMaybeCloseModal.tsx");

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
    obj = { content, ctaContent: tmp2(7728).QuestContentCTA.OPEN_GAME_LINK, impressionId: getQuestImpressionId(), sourceQuestContent };
    QuestPlatformUtils.openGameLinkDirectly(tmp3, obj);
  }, items);
};