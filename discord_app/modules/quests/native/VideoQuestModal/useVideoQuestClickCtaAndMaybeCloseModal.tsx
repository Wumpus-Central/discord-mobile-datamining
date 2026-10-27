// === Module 16540: useVideoQuestClickCtaAndMaybeCloseModal ===

// Module 16540 (useVideoQuestClickCtaAndMaybeCloseModal)
import parseURLDefault from "parseURL" /* 5697 */;
import AnalyticsTypes from "AnalyticsTypes" /* 7802 */;
import QuestCopyUtils from "QuestCopyUtils" /* 9596 */;
import QuestPlatformUtils from "QuestPlatformUtils" /* 9610 */;
import noop from "module_19" /* 19 */;

require = fn;
const LinkingTypes = fn(1084).LinkingTypes;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/VideoQuestModal/useVideoQuestClickCtaAndMaybeCloseModal.tsx");

export const useVideoQuestClickCtaAndMaybeCloseModal = ReactCompilerGating.isReactCompilerEnabled() ? (function useVideoQuestClickCtaAndMaybeCloseModal(quest) {
  const cResult = quest(sourceQuestContent[3]).c(5);
  quest = quest.quest;
  const onClose = quest.onClose;
  sourceQuestContent = quest.sourceQuestContent;
  let obj = quest(sourceQuestContent[3]);
  const getQuestImpressionId = quest(sourceQuestContent[4]).useGetQuestImpressionId();
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
  const fn = function o(content) {
    const tmp2 = parseURLDefault;
    if (tmp2(obj.getCtaLink(quest.config)).payload.type !== LinkingTypes.NONE) {
      onClose();
    }
    obj = QuestCopyUtils;
    const tmp3Result = QuestPlatformUtils;
    tmp3Result.openGameLinkDirectly(quest, { content, ctaContent: AnalyticsTypes.QuestContentCTA.OPEN_GAME_LINK, impressionId: getQuestImpressionId(), sourceQuestContent });
    const obj2 = { content, ctaContent: AnalyticsTypes.QuestContentCTA.OPEN_GAME_LINK, impressionId: getQuestImpressionId(), sourceQuestContent };
  };
  cResult[0] = getQuestImpressionId;
  cResult[1] = onClose;
  cResult[2] = quest;
  cResult[3] = sourceQuestContent;
  cResult[4] = fn;
  tmp3 = fn;
}) : (function useVideoQuestClickCtaAndMaybeCloseModal(quest) {
  quest = quest.quest;
  const onClose = quest.onClose;
  const sourceQuestContent = quest.sourceQuestContent;
  const getQuestImpressionId = quest(sourceQuestContent[4]).useGetQuestImpressionId();
  const items = [quest, getQuestImpressionId, sourceQuestContent, onClose];
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
});