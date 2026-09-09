// === Module 15202: QuestCardPreview ===

// Module 15202 (QuestCardPreview)
import jsxProd from "jsxProd" /* 21 */;
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import QuestTypes from "QuestTypes" /* 5461 */;
import QuestCard from "QuestCard" /* 15120 */;
import MobileQuestPreviewContainerDefault from "MobileQuestPreviewContainer" /* 15203 */;
import size from "module_2" /* 2 */;

const jsx = jsxProd.jsx;
const result = size.fileFinishedImporting("modules/user_settings/quests/native/QuestCardPreview.tsx");

export const QuestCardPreview = function QuestCardPreview(quest) {
  quest = quest.quest;
  return jsx(quest(11809).QuestContentImpressionTrackerNative, {
    questOrQuests: quest,
    questContent: quest(5461).QuestContent.INTERNAL_PREVIEW_TOOL,
    sourceQuestContent: quest(5461).QuestContent.INTERNAL_PREVIEW_TOOL,
    trackGuildAndChannelMetadata: false,
    children() {
      let obj = { title: null, children: null };
      const intl = util.intl;
      obj.title = intl.string(util.t.BDUDau);
      obj = { quest, containerPadding: nativeDefault.space.PX_16, sourceQuestContent: QuestTypes.QuestContent.INTERNAL_PREVIEW_TOOL };
      obj.children = jsx(QuestCard.QuestCard, { quest, containerPadding: nativeDefault.space.PX_16, sourceQuestContent: QuestTypes.QuestContent.INTERNAL_PREVIEW_TOOL });
      return jsx(MobileQuestPreviewContainerDefault, { quest, containerPadding: nativeDefault.space.PX_16, sourceQuestContent: QuestTypes.QuestContent.INTERNAL_PREVIEW_TOOL });
    }
  });
};