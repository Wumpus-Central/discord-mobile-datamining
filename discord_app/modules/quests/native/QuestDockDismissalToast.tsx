// === Module 15296: QuestDockDismissalToast ===

// Module 15296 (QuestDockDismissalToast)
import util from "util" /* 1126 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4768 */;
import _modDef5016 from "module_5016" /* 5016 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/quests/native/QuestDockDismissalToast.tsx");

export const displayQuestDismissalToast = function displayQuestDismissalToast() {
  const obj2 = { key: "QUEST_BAR_DISMISS_TOAST", content: null, icon: null, position: "bottom" };
  const intl = util.intl;
  obj2.content = intl.formatToPlainString(util.t.dYE1px, {
    arrowHook() {
      return "\u2192";
    }
  });
  obj2.icon = _modDef5016;
  ToastActionCreatorsDefault.open(obj2);
};