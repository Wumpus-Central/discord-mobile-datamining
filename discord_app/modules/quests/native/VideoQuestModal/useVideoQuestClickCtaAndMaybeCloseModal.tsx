// discord_app/modules/quests/native/VideoQuestModal/useVideoQuestClickCtaAndMaybeCloseModal.tsx
import parseURLDefault from "../../../../utils/native/parseURL.tsx";
import AnalyticsTypes from "../../lib/analytics/AnalyticsTypes.tsx";
import QuestCopyUtils from "../../utils/QuestCopyUtils.tsx";
import QuestPlatformUtils from "../../utils/QuestPlatformUtils.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const LinkingTypes = fn(1072).LinkingTypes;
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/quests/native/VideoQuestModal/useVideoQuestClickCtaAndMaybeCloseModal.tsx",
);

export function useVideoQuestClickCtaAndMaybeCloseModal(quest) {
  quest = quest.quest;
  const onClose = quest.onClose;
  const sourceQuestContent = quest.sourceQuestContent;
  const getQuestImpressionId = quest(sourceQuestContent[2]).useGetQuestImpressionId();
  const items = [quest, getQuestImpressionId, sourceQuestContent, onClose];
  return getQuestImpressionId.useCallback((content) => {
    const tmp2 = parseURLDefault;
    if (tmp2(obj.getCtaLink(quest.config)).payload.type !== LinkingTypes.NONE) {
      onClose();
    }
    obj = QuestCopyUtils;
    const tmp3Result = QuestPlatformUtils;
    tmp3Result.openGameLinkDirectly(quest, {
      content,
      ctaContent: AnalyticsTypes.QuestContentCTA.OPEN_GAME_LINK,
      impressionId: getQuestImpressionId(),
      sourceQuestContent,
    });
    const obj2 = {
      content,
      ctaContent: AnalyticsTypes.QuestContentCTA.OPEN_GAME_LINK,
      impressionId: getQuestImpressionId(),
      sourceQuestContent,
    };
  }, items);
}
