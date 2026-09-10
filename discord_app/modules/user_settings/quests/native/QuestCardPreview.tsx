// === Module 15251: QuestCardPreview ===

// Module 15251 (QuestCardPreview)
import jsxProd from "jsxProd" /* 21 */;
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import QuestTypes from "QuestTypes" /* 5497 */;
import QuestCard from "QuestCard" /* 15169 */;
import MobileQuestPreviewContainerDefault from "MobileQuestPreviewContainer" /* 15252 */;
import size from "module_2" /* 2 */;

const jsx = jsxProd.jsx;
const result = size.fileFinishedImporting("modules/user_settings/quests/native/QuestCardPreview.tsx");

export const QuestCardPreview = function QuestCardPreview(quest) {
  quest = quest.quest;
  return jsx(quest(11849).QuestContentImpressionTrackerNative, {
    questOrQuests: quest,
    questContent: quest(5497).QuestContent.INTERNAL_PREVIEW_TOOL,
    sourceQuestContent: quest(5497).QuestContent.INTERNAL_PREVIEW_TOOL,
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