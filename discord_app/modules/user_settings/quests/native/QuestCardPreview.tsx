// === Module 15433: QuestCardPreview ===

// Module 15433 (QuestCardPreview)
import jsxProd from "jsxProd" /* 21 */;
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import QuestTypes from "QuestTypes" /* 5659 */;
import QuestCard from "QuestCard" /* 15351 */;
import MobileQuestPreviewContainerDefault from "MobileQuestPreviewContainer" /* 15434 */;
import size from "module_2" /* 2 */;

const jsx = jsxProd.jsx;
const result = size.fileFinishedImporting("modules/user_settings/quests/native/QuestCardPreview.tsx");

export const QuestCardPreview = function QuestCardPreview(quest) {
  quest = quest.quest;
  return jsx(quest(12029).QuestContentImpressionTrackerNative, {
    questOrQuests: quest,
    questContent: quest(5659).QuestContent.INTERNAL_PREVIEW_TOOL,
    sourceQuestContent: quest(5659).QuestContent.INTERNAL_PREVIEW_TOOL,
    trackGuildAndChannelMetadata: false,
    children() {
      const obj = { title: null, children: null };
      const intl = util.intl;
      obj.title = intl.string(util.t.BDUDau);
      obj.children = jsx(QuestCard.QuestCard, { quest, containerPadding: nativeDefault.space.PX_16, sourceQuestContent: QuestTypes.QuestContent.INTERNAL_PREVIEW_TOOL });
      return <tmp title={null}>{null}</tmp>;
    }
  });
};