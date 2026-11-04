// === Module 17318: QuestDockDismissalToast ===

// Module 17318 (QuestDockDismissalToast)
import util from "util" /* 1113 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5846 */;
import CircleInformationIcon from "CircleInformationIcon" /* 5869 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/quests/native/QuestDockDismissalToast.tsx");

export function displayQuestDismissalToast() {
  const obj2 = { text: null, icon: null, position: "bottom" };
  const intl = util.intl;
  obj2.text = intl.formatToPlainString(util.t.dYE1px, {
    arrowHook() {
      return "\u2192";
    }
  });
  obj2.icon = CircleInformationIcon.CircleInformationIcon;
  ToastActionCreatorsDefault.open("QUEST_BAR_DISMISS_TOAST", obj2);
}