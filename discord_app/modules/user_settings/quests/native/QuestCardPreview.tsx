// discord_app/modules/user_settings/quests/native/QuestCardPreview.tsx
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import QuestTypes from "../../../quests/QuestTypes.tsx";
import QuestCard from "../../../quests/native/QuestCard.tsx";
import MobileQuestPreviewContainerDefault from "MobileQuestPreviewContainer.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const jsx = jsxProd.jsx;
const result = size.fileFinishedImporting("modules/user_settings/quests/native/QuestCardPreview.tsx");

export const QuestCardPreview = function QuestCardPreview(quest) {
  quest = quest.quest;
  return jsx(quest(11778).QuestContentImpressionTrackerNative, {
    questOrQuests: quest,
    questContent: quest(5447).QuestContent.INTERNAL_PREVIEW_TOOL,
    sourceQuestContent: quest(5447).QuestContent.INTERNAL_PREVIEW_TOOL,
    trackGuildAndChannelMetadata: false,
    children() {
      let obj = { title: null, children: null };
      const intl = util.intl;
      obj.title = intl.string(util.t.BDUDau);
      obj = {
        quest,
        containerPadding: nativeDefault.space.PX_16,
        sourceQuestContent: QuestTypes.QuestContent.INTERNAL_PREVIEW_TOOL,
      };
      obj.children = jsx(QuestCard.QuestCard, {
        quest,
        containerPadding: nativeDefault.space.PX_16,
        sourceQuestContent: QuestTypes.QuestContent.INTERNAL_PREVIEW_TOOL,
      });
      return jsx(MobileQuestPreviewContainerDefault, {
        quest,
        containerPadding: nativeDefault.space.PX_16,
        sourceQuestContent: QuestTypes.QuestContent.INTERNAL_PREVIEW_TOOL,
      });
    },
  });
};
