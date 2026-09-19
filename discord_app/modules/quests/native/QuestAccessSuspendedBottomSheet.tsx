// === Module 15380: QuestAccessSuspendedBottomSheet ===

// Module 15380 (QuestAccessSuspendedBottomSheet)
import util from "util" /* 1115 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4723 */;
import components_Button_Button from "components/Button/Button" /* 5186 */;
import PromoSheet from "PromoSheet" /* 10487 */;
import openAccountStanding from "openAccountStanding" /* 12162 */;
import openQuestAccessSuspendedBottomSheet from "openQuestAccessSuspendedBottomSheet" /* 15379 */;
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
  const obj2 = { grow: true, size: "lg", variant: "primary", text: null, onPress: null };
  const intl3 = util.intl;
  obj2.text = intl3.string(util.t.hvVgAZ);
  obj2.onPress = callback;
  obj.actions = jsx(components_Button_Button.Button, { grow: true, size: "lg", variant: "primary", text: null, onPress: null });
  return jsx(PromoSheet.PromoSheet, { title: null, description: null, actions: null });
};