// === Module 14879: ConnectGuardianBottomSheet ===

// Module 14879 (ConnectGuardianBottomSheet)
import useStateFromStores from "useStateFromStores" /* 563 */;
import nativeDefault from "native" /* 576 */;
import _modDef2396 from "module_2396" /* 2396 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import Text_Text from "Text/Text" /* 4556 */;
import components_Button_Button from "components/Button/Button" /* 4975 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 7150 */;
import useOnNewPendingRequestDefault from "useOnNewPendingRequest" /* 14880 */;
import ConnectGuardianCard from "ConnectGuardianCard" /* 14881 */;
import noop from "module_19" /* 19 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7537 */;

require = fn;
const View = fn(17).View;
let closure_6 = fn(7538).CONNECT_GUARDIAN_BOTTOM_SHEET_KEY;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
fn(4560);
let createStyles = { container: null, info: null, centered: null, cardContainer: null };
createStyles = { paddingHorizontal: nativeDefault.space.PX_24, paddingVertical: nativeDefault.space.PX_24, gap: nativeDefault.space.PX_24 };
createStyles.container = createStyles;
createStyles.info = { alignItems: "center", gap: nativeDefault.space.PX_8 };
createStyles.centered = { textAlign: "center" };
createStyles.cardContainer = { alignItems: "center" };
let closure_9 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/native/ConnectGuardianBottomSheet.tsx");

export default function ConnectGuardianBottomSheet(arg0) {
  ({ title, body } = arg0);
  ({ linkCode, expiresAt, onRefresh } = arg0);
  const tmp = closure_9();
  let obj = useStateFromStores;
  const items = [FamilyCenterStore];
  let stateFromStores = obj.useStateFromStores(items, () => FamilyCenterStore.getLinkCode());
  let obj1 = useStateFromStores;
  const items1 = [FamilyCenterStore];
  let stateFromStores1 = obj1.useStateFromStores(items1, () => FamilyCenterStore.getLinkCodeExpiresAt());
  const callback = noop.useCallback(() => {
    ActionSheetActionCreatorsDefault.hideActionSheet(closure_1_6);
  }, []);
  useOnNewPendingRequestDefault(callback);
  obj = { style: tmp.container, children: null };
  obj = { style: tmp.info, children: null };
  obj1 = { style: tmp.centered, accessibilityRole: "header", variant: "heading-xl/bold", color: "mobile-text-heading-primary", children: null };
  if (title == null) {
    const intl = tmp2(1114).intl;
    title = intl.string(tmp7(2396).aCUVfL);
  }
  obj1.children = title;
  const items2 = [React5(Text_Text.Text, obj1), ];
  const obj2 = { style: tmp.centered, variant: "text-md/medium", color: "text-default", children: null };
  if (body == null) {
    const intl2 = tmp2(1114).intl;
    body = intl2.format(tmp7(2396)["2O6ltn"], { link: "https://support.discord.com/hc/articles/14155060633623" });
  }
  obj2.children = body;
  items2[1] = React5(Text_Text.Text, obj2);
  obj.children = items2;
  const items3 = [React6(View, obj), , ];
  const obj3 = { style: tmp.cardContainer, children: null };
  if (stateFromStores == null) {
    stateFromStores = linkCode;
  }
  const obj4 = { linkCode: stateFromStores, expiresAt: null, onRefresh: null };
  if (stateFromStores1 == null) {
    stateFromStores1 = expiresAt;
  }
  const obj5 = { startExpanded: true, children: null };
  obj4.expiresAt = stateFromStores1;
  obj4.onRefresh = onRefresh;
  obj3.children = React5(ConnectGuardianCard.ConnectGuardianCard, obj4);
  items3[1] = React5(View, obj3);
  const obj6 = { variant: "secondary", size: "md", text: null, onPress: null };
  const intl3 = tmp2(1114).intl;
  obj6.text = intl3.string(_modDef2396.Hsm5IF);
  obj6.onPress = callback;
  items3[2] = React5(components_Button_Button.Button, obj6);
  obj.children = items3;
  obj5.children = React6(View, obj);
  return React5(Sheet_BottomSheet.BottomSheet, obj5);
};