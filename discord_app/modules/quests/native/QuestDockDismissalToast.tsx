// discord_app/modules/quests/native/QuestDockDismissalToast.tsx
import util from "../../../intl/index.native.tsx";
import ToastActionCreatorsDefault from "../../toast/native/ToastActionCreators.tsx";
import _modDef5016 from "../../../../_runtime/metro/05016__.js";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/quests/native/QuestDockDismissalToast.tsx");

export const displayQuestDismissalToast = function displayQuestDismissalToast() {
  const obj2 = { key: "QUEST_BAR_DISMISS_TOAST", content: null, icon: null, position: "bottom" };
  const intl = util.intl;
  obj2.content = intl.formatToPlainString(util.t.dYE1px, {
    arrowHook() {
      return "\u2192";
    },
  });
  obj2.icon = _modDef5016;
  ToastActionCreatorsDefault.open(obj2);
};
