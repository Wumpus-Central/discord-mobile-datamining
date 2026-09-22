// discord_app/modules/vibegrations/native/VibegrationsPublishBlockedSheet.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import _modDef3678 from "../intl/VibegrationsUntranslated.messages.js";
import ActionSheetActionCreators from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import components_Button_Button from "../../../design/components/Button/native/Button.native.tsx";
import BottomSheetTitleHeader from "../../../design/components/Sheet/native/BottomSheetTitleHeader.native.tsx";
import ActionSheet from "../../../design/components/Sheet/native/ActionSheet.native.tsx";
import vibegrationsPublishBlockedReason from "../lib/vibegrationsPublishBlockedReason.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const ActionSheetActionCreatorsDefault = ActionSheetActionCreators;

require = fn;
function VibegrationsPublishBlockedSheet(reason) {
  const tmp4 = reason.reason === vibegrationsPublishBlockedReason.VibegrationsPublishBlockedReason.PERMISSIONS;
  const intl = util.intl;
  const tmp7 = _modDef3678;
  if (tmp4) {
    let Rtlv25 = tmp7.Rtlv25;
    let tmp9 = importDefault;
  } else {
    Rtlv25 = tmp7["+UouPe"];
    tmp9 = importDefault;
  }
  const obj = { header: null, children: null };
  const tmp = closure_7();
  obj.header = React4(BottomSheetTitleHeader.BottomSheetTitleHeader, { title: intl.string(Rtlv25) });
  const obj3 = { style: tmp.content, children: null };
  const intl2 = util.intl;
  const tmp9Result = tmp9(3678);
  const obj2 = { title: intl.string(Rtlv25) };
  const items = [
    React4(Text_Text.Text, {
      variant: "text-md/normal",
      color: "text-muted",
      children: intl2.string(tmp4 ? tmp9Result["nDQB/b"] : tmp9Result["E0QD++"]),
    }),
  ];
  const intl3 = util.intl;
  if (tmp4) {
    let BddRzS = util.t.BddRzS;
  } else {
    BddRzS = tmp9(3678)["+Zh4FA"];
  }
  const obj4 = {
    variant: "text-md/normal",
    color: "text-muted",
    children: intl2.string(tmp4 ? tmp9Result["nDQB/b"] : tmp9Result["E0QD++"]),
  };
  items[1] = React4(components_Button_Button.Button, {
    variant: "primary",
    text: intl3.string(BddRzS),
    onPress() {
      return ActionSheetActionCreatorsDefault.hideActionSheet(VibegrationsPublishBlockedSheet);
    },
  });
  obj3.children = items;
  obj.children = hasOwnProperty(View, obj3);
  return React4(ActionSheet.ActionSheet, obj);
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
VibegrationsPublishBlockedSheet = "VibegrationsPublishBlockedSheet";
const createStyles = fn(4757);
let obj2 = { content: { gap: nativeDefault.space.PX_16 } };
let closure_7 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsPublishBlockedSheet.tsx");

export default function showVibegrationsPublishBlockedSheet(reason) {
  const obj2 = { key: VibegrationsPublishBlockedSheet, content: React4(VibegrationsPublishBlockedSheet, { reason }) };
  ActionSheetActionCreators.showActionSheet(obj2);
}
export const VIBEGRATIONS_PUBLISH_BLOCKED_SHEET_KEY = "VibegrationsPublishBlockedSheet";
