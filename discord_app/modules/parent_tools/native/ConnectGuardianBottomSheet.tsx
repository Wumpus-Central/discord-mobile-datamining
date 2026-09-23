// === Module 15216: ConnectGuardianBottomSheet ===

// Module 15216 (ConnectGuardianBottomSheet)
import useStateFromStores from "useStateFromStores" /* 563 */;
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import _modDef2484 from "module_2484" /* 2484 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4794 */;
import Text_Text from "Text/Text" /* 4823 */;
import components_Button_Button from "components/Button/Button" /* 5271 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 7481 */;
import useOnNewPendingRequestDefault from "useOnNewPendingRequest" /* 15217 */;
import ConnectGuardianCard from "ConnectGuardianCard" /* 15218 */;
import noop from "module_19" /* 19 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7865 */;

require = fn;
const View = fn(17).View;
let closure_6 = fn(7866).CONNECT_GUARDIAN_BOTTOM_SHEET_KEY;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4827);
const obj2 = { container: { paddingHorizontal: nativeDefault.space.PX_24, paddingVertical: nativeDefault.space.PX_24, gap: nativeDefault.space.PX_24 }, info: null, centered: null, cardContainer: null };
let obj3 = { paddingHorizontal: nativeDefault.space.PX_24, paddingVertical: nativeDefault.space.PX_24, gap: nativeDefault.space.PX_24 };
obj2.info = { alignItems: "center", gap: nativeDefault.space.PX_8 };
obj2.centered = { textAlign: "center" };
obj2.cardContainer = { alignItems: "center" };
let closure_9 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/native/ConnectGuardianBottomSheet.tsx");

export default function ConnectGuardianBottomSheet(arg0) {
  ({ title, body } = arg0);
  ({ linkCode, expiresAt, onRefresh } = arg0);
  const tmp = closure_9();
  const items = [FamilyCenterStore];
  let stateFromStores = useStateFromStores.useStateFromStores(items, () => FamilyCenterStore.getLinkCode());
  const items1 = [FamilyCenterStore];
  let stateFromStores1 = useStateFromStores.useStateFromStores(items1, () => FamilyCenterStore.getLinkCodeExpiresAt());
  const callback = noop.useCallback(() => {
    ActionSheetActionCreatorsDefault.hideActionSheet(closure_1_6);
  }, []);
  useOnNewPendingRequestDefault(callback);
  const obj3 = { style: tmp.container, children: null };
  const obj4 = { style: tmp.info, children: null };
  const obj5 = { style: tmp.centered, accessibilityRole: "header", variant: "heading-xl/bold", color: "mobile-text-heading-primary", children: null };
  if (title == null) {
    const intl = util.intl;
    title = intl.string(_modDef2484.aCUVfL);
  }
  obj5.children = title;
  const items2 = [React5(Text_Text.Text, obj5), ];
  const obj6 = { style: tmp.centered, variant: "text-md/medium", color: "text-default", children: null };
  if (body == null) {
    const intl2 = util.intl;
    body = intl2.format(_modDef2484["2O6ltn"], { link: "https://support.discord.com/hc/articles/14155060633623" });
  }
  obj6.children = body;
  items2[1] = React5(Text_Text.Text, obj6);
  obj4.children = items2;
  const items3 = [React6(View, obj4), , ];
  const obj7 = { style: tmp.cardContainer, children: null };
  if (stateFromStores == null) {
    stateFromStores = linkCode;
  }
  const obj8 = { linkCode: stateFromStores, expiresAt: null, onRefresh: null };
  if (stateFromStores1 == null) {
    stateFromStores1 = expiresAt;
  }
  const obj9 = { startExpanded: true, children: null };
  obj8.expiresAt = stateFromStores1;
  obj8.onRefresh = onRefresh;
  obj7.children = React5(ConnectGuardianCard.ConnectGuardianCard, obj8);
  items3[1] = React5(View, obj7);
  const obj10 = { variant: "secondary", size: "md", text: null, onPress: null };
  const intl3 = util.intl;
  obj10.text = intl3.string(_modDef2484.Hsm5IF);
  obj10.onPress = callback;
  items3[2] = React5(components_Button_Button.Button, obj10);
  obj3.children = items3;
  obj9.children = React6(View, obj3);
  return React5(Sheet_BottomSheet.BottomSheet, obj9);
};