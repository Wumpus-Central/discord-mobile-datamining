// === Module 12298: GameOrganizationJoinOutcomeActionSheet ===

// Module 12298 (GameOrganizationJoinOutcomeActionSheet)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5226 */;
import components_Button_Button from "components/Button/Button" /* 5610 */;
import BottomSheetTitleHeader from "BottomSheetTitleHeader" /* 7476 */;
import PromoSheet from "PromoSheet" /* 10702 */;
import useGameOrganizationJoinOutcome from "useGameOrganizationJoinOutcome" /* 12291 */;
import noop from "module_19" /* 19 */;

const useGameOrganizationJoinOutcomeDefault = useGameOrganizationJoinOutcome;

require = fn;
function hideSheet() {
  ActionSheetActionCreatorsDefault.hideActionSheet(closure_3);
}
let closure_3 = fn(11869).GAME_ORGANIZATION_JOIN_OUTCOME_ACTION_SHEET_KEY;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_organization_invites/native/GameOrganizationJoinOutcomeActionSheet.tsx");

export default function GameOrganizationJoinOutcomeActionSheet(arg0) {
  ({ code, result } = arg0);
  const tmp = useGameOrganizationJoinOutcomeDefault(code, result, hideSheet);
  const cta = tmp.cta;
  ({ title, subtitle } = tmp);
  const obj = { header: jsx(BottomSheetTitleHeader.BottomSheetTitleHeader, { title: null }), title, description: subtitle, actions: null };
  const obj2 = { text: cta.text, variant: null, size: "lg", onPress: null };
  let str = "primary";
  if (cta.type === useGameOrganizationJoinOutcome.GameOrganizationJoinOutcomeCtaType.CLOSE) {
    str = "secondary";
  }
  obj2.variant = str;
  obj2.onPress = cta.action;
  obj.actions = jsx(components_Button_Button.Button, { text: cta.text, variant: null, size: "lg", onPress: null });
  return jsx(PromoSheet.PromoSheet, { header: jsx(BottomSheetTitleHeader.BottomSheetTitleHeader, { title: null }), title, description: subtitle, actions: null });
};