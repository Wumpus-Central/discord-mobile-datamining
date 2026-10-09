// discord_app/modules/user_settings/quests/native/QuestCardPreview.tsx
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import QuestTypes from "../../../quests/QuestTypes.tsx";
import QuestCard from "../../../quests/native/QuestCard.tsx";
import MobileQuestPreviewContainerDefault from "MobileQuestPreviewContainer.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const jsx = jsxProd.jsx;
const result = size.fileFinishedImporting("modules/user_settings/quests/native/QuestCardPreview.tsx");

export const QuestCardPreview = ReactCompilerGating.isReactCompilerEnabled()
  ? function QuestCardPreview(quest) {
      const cResult = quest(576).c(5);
      quest = quest.quest;
      if (cResult[0] !== quest) {
        const fn = function s() {
          const obj = { title: null, children: null };
          const intl = util.intl;
          obj.title = intl.string(util.t.BDUDau);
          obj.children = jsx(QuestCard.QuestCard, {
            quest,
            containerPadding: nativeDefault.space.PX_16,
            sourceQuestContent: QuestTypes.QuestContent.INTERNAL_PREVIEW_TOOL,
          });
          return <tmp title={null}>{null}</tmp>;
        };
        cResult[0] = quest;
        cResult[1] = fn;
        let tmp4 = fn;
      } else {
        tmp4 = cResult[1];
      }
      if (cResult[2] === quest) {
        if (cResult[3] === tmp4) {
          let tmp5 = cResult[4];
        }
        return tmp5;
      }
      let obj = quest(576);
      const tmp6 = jsx(quest(12933).QuestContentImpressionTrackerNative, {
        questOrQuests: quest,
        questContent: quest(5982).QuestContent.INTERNAL_PREVIEW_TOOL,
        sourceQuestContent: quest(5982).QuestContent.INTERNAL_PREVIEW_TOOL,
        trackGuildAndChannelMetadata: false,
        children: tmp4,
      });
      cResult[2] = quest;
      cResult[3] = tmp4;
      cResult[4] = tmp6;
      tmp5 = tmp6;
      const obj2 = {
        questOrQuests: quest,
        questContent: quest(5982).QuestContent.INTERNAL_PREVIEW_TOOL,
        sourceQuestContent: quest(5982).QuestContent.INTERNAL_PREVIEW_TOOL,
        trackGuildAndChannelMetadata: false,
        children: tmp4,
      };
    }
  : function QuestCardPreview(quest) {
      quest = quest.quest;
      return jsx(quest(12933).QuestContentImpressionTrackerNative, {
        questOrQuests: quest,
        questContent: quest(5982).QuestContent.INTERNAL_PREVIEW_TOOL,
        sourceQuestContent: quest(5982).QuestContent.INTERNAL_PREVIEW_TOOL,
        trackGuildAndChannelMetadata: false,
        children() {
          const obj = { title: null, children: null };
          const intl = util.intl;
          obj.title = intl.string(util.t.BDUDau);
          obj.children = jsx(QuestCard.QuestCard, {
            quest,
            containerPadding: nativeDefault.space.PX_16,
            sourceQuestContent: QuestTypes.QuestContent.INTERNAL_PREVIEW_TOOL,
          });
          return <tmp title={null}>{null}</tmp>;
        },
      });
    };
