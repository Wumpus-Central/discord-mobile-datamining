// discord_app/modules/game_organization_invites/native/GameOrganizationJoinOutcomeActionSheet.tsx
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import components_Button_Button from "../../../design/components/Button/native/Button.native.tsx";
import BottomSheetTitleHeader from "../../../design/components/Sheet/native/BottomSheetTitleHeader.native.tsx";
import PromoSheet from "../../../design/components/Sheet/native/PromoSheet.native.tsx";
import useGameOrganizationJoinOutcome from "../useGameOrganizationJoinOutcome.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const useGameOrganizationJoinOutcomeDefault = useGameOrganizationJoinOutcome;

require = fn;
function hideSheet() {
  ActionSheetActionCreatorsDefault.hideActionSheet(closure_3);
}
let closure_3 = fn(12369).GAME_ORGANIZATION_JOIN_OUTCOME_ACTION_SHEET_KEY;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/game_organization_invites/native/GameOrganizationJoinOutcomeActionSheet.tsx",
);

export default function GameOrganizationJoinOutcomeActionSheet(arg0) {
  ({ code, result } = arg0);
  const tmp = useGameOrganizationJoinOutcomeDefault(code, result, hideSheet);
  const cta = tmp.cta;
  ({ title, subtitle } = tmp);
  const obj = {
    header: jsx(BottomSheetTitleHeader.BottomSheetTitleHeader, { title: null }),
    title,
    description: subtitle,
    actions: null,
  };
  const obj2 = { text: cta.text, variant: null, size: "lg", onPress: null };
  let str = "primary";
  if (cta.type === useGameOrganizationJoinOutcome.GameOrganizationJoinOutcomeCtaType.CLOSE) {
    str = "secondary";
  }
  obj2.variant = str;
  obj2.onPress = cta.action;
  obj.actions = jsx(components_Button_Button.Button, { text: cta.text, variant: null, size: "lg", onPress: null });
  return jsx(PromoSheet.PromoSheet, {
    header: jsx(BottomSheetTitleHeader.BottomSheetTitleHeader, { title: null }),
    title,
    description: subtitle,
    actions: null,
  });
}
