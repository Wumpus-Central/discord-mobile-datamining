// discord_app/modules/user_settings/quests/native/QuestCardPreview.tsx
import set from "set" /* 2 */;
import jsxProd from "jsxProd" /* 21 */;

const jsx = jsxProd.jsx;
const result = set.fileFinishedImporting("modules/user_settings/quests/native/QuestCardPreview.tsx");

export const QuestCardPreview = function QuestCardPreview(quest) {
  quest = quest.quest;
  return jsx(quest(10957).QuestContentImpressionTrackerNative, {
    questOrQuests: quest,
    questContent: quest(6719).QuestContent.INTERNAL_PREVIEW_TOOL,
    sourceQuestContent: quest(6719).QuestContent.INTERNAL_PREVIEW_TOOL,
    trackGuildAndChannelMetadata: false,
    children() {
      let obj = { title: null, children: null };
      const intl = quest(closure_1_2[4]).intl;
      obj[0] = intl.string(quest(closure_1_2[4]).t.BDUDau);
      obj = { quest, containerPadding: closure_1_1(closure_1_2[6]).space.PX_16, sourceQuestContent: quest(closure_1_2[2]).QuestContent.INTERNAL_PREVIEW_TOOL };
      obj[1] = closure_1_3(quest(closure_1_2[5]).QuestCard, obj);
      return closure_1_3(closure_1_1(closure_1_2[3]), obj);
    }
  });
};