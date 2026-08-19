// === Module 14523: QuestCardPreview ===

// Module 14523 (QuestCardPreview)
import obj132 from "obj132" /* 2 */;
import jsxProd from "jsxProd" /* 21 */;
import ThemesDefault from "Themes" /* 712 */;
import MobileQuestPreviewContainerDefault from "MobileQuestPreviewContainer" /* 14524 */;

const jsx = jsxProd.jsx;
const result = obj132.fileFinishedImporting("modules/user_settings/quests/native/QuestCardPreview.tsx");

export const QuestCardPreview = function QuestCardPreview(quest) {
  quest = quest.quest;
  return jsx(quest(10957).QuestContentImpressionTrackerNative, {
    questOrQuests: quest,
    questContent: quest(6719).QuestContent.INTERNAL_PREVIEW_TOOL,
    sourceQuestContent: quest(6719).QuestContent.INTERNAL_PREVIEW_TOOL,
    trackGuildAndChannelMetadata: false,
    children() {
      let obj = { title: null, children: null };
      const intl = quest(dependencyMap[4]).intl;
      obj[0] = intl.string(quest(dependencyMap[4]).t.BDUDau);
      obj = { quest, containerPadding: ThemesDefault.space.PX_16, sourceQuestContent: quest(dependencyMap[2]).QuestContent.INTERNAL_PREVIEW_TOOL };
      obj[1] = jsx(quest(dependencyMap[5]).QuestCard, { quest, containerPadding: ThemesDefault.space.PX_16, sourceQuestContent: quest(dependencyMap[2]).QuestContent.INTERNAL_PREVIEW_TOOL });
      return jsx(MobileQuestPreviewContainerDefault, { quest, containerPadding: ThemesDefault.space.PX_16, sourceQuestContent: quest(dependencyMap[2]).QuestContent.INTERNAL_PREVIEW_TOOL });
    }
  });
};