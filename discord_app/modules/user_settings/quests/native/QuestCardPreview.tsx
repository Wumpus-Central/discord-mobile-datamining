// === Module 17076: QuestCardPreview ===

// Module 17076 (QuestCardPreview)
import jsxProd from "jsxProd" /* 21 */;
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1114 */;
import QuestTypes from "QuestTypes" /* 6778 */;
import QuestCard from "QuestCard" /* 16996 */;
import MobileQuestPreviewContainerDefault from "MobileQuestPreviewContainer" /* 17077 */;
import size from "module_2" /* 2 */;

const jsx = jsxProd.jsx;
const result = size.fileFinishedImporting("modules/user_settings/quests/native/QuestCardPreview.tsx");

export function QuestCardPreview(quest) {
  quest = quest.quest;
  return jsx(quest(14647).QuestContentImpressionTrackerNative, {
    questOrQuests: quest,
    questContent: quest(6778).QuestContent.INTERNAL_PREVIEW_TOOL,
    sourceQuestContent: quest(6778).QuestContent.INTERNAL_PREVIEW_TOOL,
    trackGuildAndChannelMetadata: false,
    children() {
      const obj = { title: null, children: null };
      const intl = util.intl;
      obj.title = intl.string(util.t.BDUDau);
      obj.children = jsx(QuestCard.QuestCard, { quest, containerPadding: nativeDefault.space.PX_16, sourceQuestContent: QuestTypes.QuestContent.INTERNAL_PREVIEW_TOOL });
      return <tmp title={null}>{null}</tmp>;
    }
  });
}