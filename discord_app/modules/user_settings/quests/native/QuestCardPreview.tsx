// discord_app/modules/user_settings/quests/native/QuestCardPreview.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import intl2 from "../../../../intl/index.native.tsx";
import QuestTypes from "../../../quests/QuestTypes.tsx";
import QuestCard2 from "../../../quests/native/QuestCard.tsx";
import MobileQuestPreviewContainerDefault from "MobileQuestPreviewContainer.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let quest;

const jsx = Fragment.jsx;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (quest) => {
      let tmp4;
      const tmp = quest;
      const obj = quest(576);
      const cResult = obj.c(5);
      quest = quest.quest;
      if (cResult[0] !== quest) {
        const fn = function s() {
          MobileQuestPreviewContainerDefault;
          const intl = intl2.intl;
          ({
            quest,
            containerPadding: nativeDefault.space.PX_16,
            sourceQuestContent: QuestTypes.QuestContent.INTERNAL_PREVIEW_TOOL,
          });
          const QuestCard = QuestCard2.QuestCard;
          return <tmp title={intl.string(intl2.t.BDUDau)}>{null}</tmp>;
        };
        cResult[0] = quest;
        cResult[1] = fn;
        tmp4 = fn;
      } else {
        tmp4 = cResult[1];
      }
      if (cResult[2] === quest) {
        let tmp5;
        if (cResult[3] === tmp4) {
          tmp5 = cResult[4];
        }
        return tmp5;
      }
      const QuestContentImpressionTrackerNative = tmp(10958).QuestContentImpressionTrackerNative;
      const tmp6 = (
        <QuestContentImpressionTrackerNative
          questOrQuests={quest}
          questContent={tmp(5626).QuestContent.INTERNAL_PREVIEW_TOOL}
          sourceQuestContent={tmp(5626).QuestContent.INTERNAL_PREVIEW_TOOL}
          trackGuildAndChannelMetadata={false}
        >
          {tmp4}
        </QuestContentImpressionTrackerNative>
      );
      cResult[2] = quest;
      cResult[3] = tmp4;
      cResult[4] = tmp6;
      tmp5 = tmp6;
    }
  : (quest) => {
      quest = quest.quest;
      const QuestContentImpressionTrackerNative = quest(10958).QuestContentImpressionTrackerNative;
      return (
        <QuestContentImpressionTrackerNative
          questOrQuests={quest}
          questContent={quest(5626).QuestContent.INTERNAL_PREVIEW_TOOL}
          sourceQuestContent={quest(5626).QuestContent.INTERNAL_PREVIEW_TOOL}
          trackGuildAndChannelMetadata={false}
        >
          {function children() {
            MobileQuestPreviewContainerDefault;
            const intl = intl2.intl;
            ({
              quest,
              containerPadding: nativeDefault.space.PX_16,
              sourceQuestContent: QuestTypes.QuestContent.INTERNAL_PREVIEW_TOOL,
            });
            const QuestCard = QuestCard2.QuestCard;
            return <tmp title={intl.string(intl2.t.BDUDau)}>{null}</tmp>;
          }}
        </QuestContentImpressionTrackerNative>
      );
    };
const result = size.fileFinishedImporting("modules/user_settings/quests/native/QuestCardPreview.tsx");

export const QuestCardPreview = tmp2;
