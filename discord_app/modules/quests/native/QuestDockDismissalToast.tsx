// === Module 15358: QuestDockDismissalToast ===

// Module 15358 (QuestDockDismissalToast)
import util from "util" /* 1126 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4809 */;
import CircleInformationIcon from "CircleInformationIcon" /* 5046 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/quests/native/QuestDockDismissalToast.tsx");

export const displayQuestDismissalToast = function displayQuestDismissalToast() {
  const obj2 = { text: null, icon: null, position: "bottom" };
  const intl = util.intl;
  obj2.text = intl.formatToPlainString(util.t.dYE1px, {
    arrowHook() {
      return "\u2192";
    }
  });
  obj2.icon = CircleInformationIcon.CircleInformationIcon;
  ToastActionCreatorsDefault.open("QUEST_BAR_DISMISS_TOAST", obj2);
};