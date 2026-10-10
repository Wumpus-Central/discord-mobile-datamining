// discord_app/modules/quests/native/QuestDockDismissalToast.tsx
import util from "../../../intl/index.native.tsx";
import ToastActionCreatorsDefault from "../../toast/native/ToastActionCreators.tsx";
import CircleInformationIcon from "../../../design/components/Icon/native/redesign/generated/CircleInformationIcon.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/quests/native/QuestDockDismissalToast.tsx");

export const displayQuestDismissalToast = function displayQuestDismissalToast() {
  const obj2 = { text: null, icon: null, position: "bottom" };
  const intl = util.intl;
  obj2.text = intl.formatToPlainString(util.t.dYE1px, {
    arrowHook() {
      return "\u2192";
    },
  });
  obj2.icon = CircleInformationIcon.CircleInformationIcon;
  ToastActionCreatorsDefault.open("QUEST_BAR_DISMISS_TOAST", obj2);
};
