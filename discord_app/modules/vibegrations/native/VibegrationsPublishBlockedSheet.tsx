// === Module 16273: VibegrationsPublishBlockedSheet ===

// Module 16273 (VibegrationsPublishBlockedSheet)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import _modDef3714 from "module_3714" /* 3714 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 4796 */;
import Text_Text from "Text/Text" /* 4825 */;
import components_Button_Button from "components/Button/Button" /* 5274 */;
import BottomSheetTitleHeader from "BottomSheetTitleHeader" /* 6565 */;
import ActionSheet from "ActionSheet" /* 6613 */;
import vibegrationsPublishBlockedReason from "vibegrationsPublishBlockedReason" /* 16274 */;
import noop from "module_19" /* 19 */;

const ActionSheetActionCreatorsDefault = ActionSheetActionCreators;

require = fn;
function VibegrationsPublishBlockedSheet(reason) {
  const tmp4 = reason.reason === vibegrationsPublishBlockedReason.VibegrationsPublishBlockedReason.PERMISSIONS;
  const intl = util.intl;
  const tmp7 = _modDef3714;
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
  const tmp9Result = tmp9(3714);
  const obj2 = { title: intl.string(Rtlv25) };
  const items = [React4(Text_Text.Text, { variant: "text-md/normal", color: "text-muted", children: intl2.string(tmp4 ? tmp9Result["nDQB/b"] : tmp9Result["E0QD++"]) }), ];
  const intl3 = util.intl;
  if (tmp4) {
    let BddRzS = util.t.BddRzS;
  } else {
    BddRzS = tmp9(3714)["+Zh4FA"];
  }
  const obj4 = { variant: "text-md/normal", color: "text-muted", children: intl2.string(tmp4 ? tmp9Result["nDQB/b"] : tmp9Result["E0QD++"]) };
  items[1] = React4(components_Button_Button.Button, {
    variant: "primary",
    text: intl3.string(BddRzS),
    onPress() {
      return ActionSheetActionCreatorsDefault.hideActionSheet(VibegrationsPublishBlockedSheet);
    }
  });
  obj3.children = items;
  obj.children = hasOwnProperty(View, obj3);
  return React4(ActionSheet.ActionSheet, obj);
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
VibegrationsPublishBlockedSheet = "VibegrationsPublishBlockedSheet";
const createStyles = fn(4829);
let obj2 = { content: { gap: nativeDefault.space.PX_16 } };
let closure_7 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsPublishBlockedSheet.tsx");

export default function showVibegrationsPublishBlockedSheet(reason) {
  const obj2 = { key: VibegrationsPublishBlockedSheet, content: React4(VibegrationsPublishBlockedSheet, { reason }) };
  ActionSheetActionCreators.showActionSheet(obj2);
};
export const VIBEGRATIONS_PUBLISH_BLOCKED_SHEET_KEY = "VibegrationsPublishBlockedSheet";