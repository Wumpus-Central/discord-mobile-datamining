// === Module 14703: QuestCardPreview ===

// Module 14703 (QuestCardPreview)
import jsxProd from "jsxProd" /* 21 */;
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import QuestTypes from "QuestTypes" /* 5759 */;
import QuestCard from "QuestCard" /* 14619 */;
import MobileQuestPreviewContainerDefault from "MobileQuestPreviewContainer" /* 14704 */;
import size from "module_2" /* 2 */;

const jsx = jsxProd.jsx;
const result = size.fileFinishedImporting("modules/user_settings/quests/native/QuestCardPreview.tsx");

export const QuestCardPreview = function QuestCardPreview(quest) {
  quest = quest.quest;
  return jsx(quest(10753).QuestContentImpressionTrackerNative, {
    questOrQuests: quest,
    questContent: quest(5759).QuestContent.INTERNAL_PREVIEW_TOOL,
    sourceQuestContent: quest(5759).QuestContent.INTERNAL_PREVIEW_TOOL,
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