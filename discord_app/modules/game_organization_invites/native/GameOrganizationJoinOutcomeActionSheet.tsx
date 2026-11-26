// === Module 12348: GameOrganizationJoinOutcomeActionSheet ===

// Module 12348 (GameOrganizationJoinOutcomeActionSheet)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5257 */;
import components_Button_Button from "components/Button/Button" /* 5641 */;
import BottomSheetTitleHeader from "BottomSheetTitleHeader" /* 7507 */;
import PromoSheet from "PromoSheet" /* 10747 */;
import useGameOrganizationJoinOutcomeDefault from "useGameOrganizationJoinOutcome" /* 12341 */;
import noop from "module_19" /* 19 */;

require = fn;
function hideSheet() {
  ActionSheetActionCreatorsDefault.hideActionSheet(closure_3);
}
let closure_3 = fn(11917).GAME_ORGANIZATION_JOIN_OUTCOME_ACTION_SHEET_KEY;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_organization_invites/native/GameOrganizationJoinOutcomeActionSheet.tsx");

export default function GameOrganizationJoinOutcomeActionSheet(arg0) {
  ({ code, result } = arg0);
  const tmp = useGameOrganizationJoinOutcomeDefault(code, result, hideSheet);
  const cta = tmp.cta;
  ({ title, subtitle } = tmp);
  const obj = { header: jsx(BottomSheetTitleHeader.BottomSheetTitleHeader, { title: null }), title, description: subtitle, actions: jsx(components_Button_Button.Button, { text: cta.text, size: "lg", onPress: cta.action }) };
  return jsx(PromoSheet.PromoSheet, { header: jsx(BottomSheetTitleHeader.BottomSheetTitleHeader, { title: null }), title, description: subtitle, actions: jsx(components_Button_Button.Button, { text: cta.text, size: "lg", onPress: cta.action }) });
};