// === Module 15198: QuestAccessSuspendedBottomSheet ===

// Module 15198 (QuestAccessSuspendedBottomSheet)
import util from "util" /* 1114 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4572 */;
import components_Button_Button from "components/Button/Button" /* 5025 */;
import PromoSheet from "PromoSheet" /* 10300 */;
import openAccountStanding from "openAccountStanding" /* 11980 */;
import openQuestAccessSuspendedBottomSheet from "openQuestAccessSuspendedBottomSheet" /* 15197 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/QuestAccessSuspendedBottomSheet.tsx");

export default function QuestAccessSuspendedBottomSheet() {
  const callback = noop.useCallback(() => {
    ActionSheetActionCreatorsDefault.hideActionSheet(openQuestAccessSuspendedBottomSheet.ACTION_SHEET_KEY);
    openAccountStanding.openAccountStanding();
  }, []);
  let obj = { title: null, description: null, actions: null };
  const intl = util.intl;
  obj.title = intl.string(util.t.WfwodX);
  const intl2 = util.intl;
  obj.description = intl2.string(util.t.I27WXW);
  obj = { grow: true, size: "lg", variant: "primary", text: null, onPress: null };
  const intl3 = util.intl;
  obj.text = intl3.string(util.t.hvVgAZ);
  obj.onPress = callback;
  obj.actions = jsx(components_Button_Button.Button, { grow: true, size: "lg", variant: "primary", text: null, onPress: null });
  return jsx(PromoSheet.PromoSheet, { grow: true, size: "lg", variant: "primary", text: null, onPress: null });
};