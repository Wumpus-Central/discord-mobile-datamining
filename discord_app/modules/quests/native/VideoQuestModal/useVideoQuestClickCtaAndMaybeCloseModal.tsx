// === Module 17275: useVideoQuestClickCtaAndMaybeCloseModal ===

// Module 17275 (useVideoQuestClickCtaAndMaybeCloseModal)
import parseURLDefault from "parseURL" /* 5865 */;
import AnalyticsTypes from "AnalyticsTypes" /* 7995 */;
import QuestCopyUtils from "QuestCopyUtils" /* 9837 */;
import QuestPlatformUtils from "QuestPlatformUtils" /* 9851 */;
import noop from "module_19" /* 19 */;

require = fn;
const LinkingTypes = fn(1072).LinkingTypes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/VideoQuestModal/useVideoQuestClickCtaAndMaybeCloseModal.tsx");

export function useVideoQuestClickCtaAndMaybeCloseModal(quest) {
  quest = quest.quest;
  const onClose = quest.onClose;
  const sourceQuestContent = quest.sourceQuestContent;
  const getQuestImpressionId = quest(sourceQuestContent[2]).useGetQuestImpressionId();
  items = [quest, getQuestImpressionId, sourceQuestContent, onClose];
  return getQuestImpressionId.useCallback((content) => {
    const tmp2 = parseURLDefault;
    if (tmp2(obj.getCtaLink(quest.config)).payload.type !== LinkingTypes.NONE) {
      onClose();
    }
    obj = QuestCopyUtils;
    const tmp3Result = QuestPlatformUtils;
    tmp3Result.openGameLinkDirectly(quest, { content, ctaContent: AnalyticsTypes.QuestContentCTA.OPEN_GAME_LINK, impressionId: getQuestImpressionId(), sourceQuestContent });
    const obj2 = { content, ctaContent: AnalyticsTypes.QuestContentCTA.OPEN_GAME_LINK, impressionId: getQuestImpressionId(), sourceQuestContent };
  }, items);
}