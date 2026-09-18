// === Module 15312: QuestDockDismissalToast ===

// Module 15312 (QuestDockDismissalToast)
import nativeDefault from "native" /* 576 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4420 */;
import _modDef12529 from "module_12529" /* 12529 */;
import _modDef13011 from "module_13011" /* 13011 */;
import noop from "module_19" /* 19 */;

const require = fn;
function QuestDockDismissalNotification() {
  _require = closure_6();
  let obj = { color: "mobile-text-heading-primary", variant: "text-sm/semibold", children: null };
  const intl = require("util").intl;
  obj.children = intl.format(require("util").t.dYE1px, {
    arrowHook() {
      const obj = { style: closure_0.toastArrowForwardIconContainer, children: <React3 resizeMode="contain" source={_modDef12529} style={closure_0.toastArrowForwardIcon} /> };
      return <React4 style={closure_0.toastArrowForwardIconContainer}><React3 resizeMode="contain" source={_modDef12529} style={closure_0.toastArrowForwardIcon} /></React4>;
    }
  });
  return jsx(require("Text/Text").Text, { color: "mobile-text-heading-primary", variant: "text-sm/semibold", children: null });
}
get_ActivityIndicator = fn(17);
({ Image: c3, View: closure_4 } = get_ActivityIndicator);
const jsx = fn(21).jsx;
const createStyles = fn(4722);
let closure_6 = createStyles.createStyles(() => {
  const obj = { toastArrowForwardIconContainer: { height: 6, width: 16 }, toastArrowForwardIcon: null };
  const size = { opacity: 0.35, position: "absolute", top: "50%", left: 0, height: 16, width: 16, tintColor: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE, transform: null };
  const items = [{ translateY: -10 }];
  size.transform = items;
  obj.toastArrowForwardIcon = size;
  return obj;
});
let size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/QuestDockDismissalToast.tsx");

export const displayQuestDismissalToast = function displayQuestDismissalToast() {
  const obj = ToastActionCreatorsDefault;
  obj.open({ key: "QUEST_BAR_DISMISS_TOAST", content: QuestDockDismissalNotification, icon: _modDef13011, position: "bottom" });
};