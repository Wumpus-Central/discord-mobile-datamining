import { jsx } from "jsxProd";

const result = require("QuestsVisibleMessagesChangedSource").fileFinishedImporting("modules/user_settings/quests/native/QuestCardPreview.tsx");

export const QuestCardPreview = function QuestCardPreview(quest) {
  quest = quest.quest;
  let obj = { questOrQuests: quest, questContent: null, sourceQuestContent: null, trackGuildAndChannelMetadata: false, children: null };
  obj[1] = quest(5102).QuestContent.INTERNAL_PREVIEW_TOOL;
  obj[2] = quest(5102).QuestContent.INTERNAL_PREVIEW_TOOL;
  obj[4] = function children() {
    let obj = { title: null, children: null };
    const intl = quest(outer1_2[4]).intl;
    obj[0] = intl.string(quest(outer1_2[4]).t.BDUDau);
    obj = { quest, containerPadding: null, sourceQuestContent: null };
    obj[1] = outer1_1(outer1_2[6]).space.PX_16;
    obj[2] = quest(outer1_2[2]).QuestContent.INTERNAL_PREVIEW_TOOL;
    obj[1] = outer1_3(quest(outer1_2[5]).QuestCard, obj);
    return outer1_3(outer1_1(outer1_2[3]), obj);
  };
  return jsx(quest(11105).QuestContentImpressionTrackerNative, { questOrQuests: quest, questContent: null, sourceQuestContent: null, trackGuildAndChannelMetadata: false, children: null });
};