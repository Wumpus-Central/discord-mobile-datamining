// === Module 14783: WebAuthnDeleteActionSheet ===

// Module 14783 (WebAuthnDeleteActionSheet)
import nativeDefault from "native" /* 576 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4605 */;
import WebAuthnActionCreators from "WebAuthnActionCreators" /* 6705 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4638);
let obj2 = { content: { alignItems: "center" }, subtitle: { textAlign: "center", marginTop: nativeDefault.space.PX_16 }, sheetContent: null, sheetBody: null };
const obj3 = { textAlign: "center", marginTop: nativeDefault.space.PX_16 };
obj2.sheetContent = { paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16 };
let obj4 = { paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16 };
obj2.sheetBody = { gap: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16 };
let closure_6 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/webauthn/native/WebAuthnDeleteActionSheet.tsx");

export default function WebAuthnDeleteActionSheet(credential) {
  credential = credential.credential;
  ({ deleting, setDeleting: importDefault } = credential);
  function handleClose() {
    ActionSheetActionCreatorsDefault.hideActionSheet();
  }
  const tmp = closure_6();
  let obj = { contentStyles: tmp.sheetContent, bodyStyles: tmp.sheetBody, children: null };
  let obj2 = { title: null, trailing: null };
  let intl = credential(1115).intl;
  obj2.title = intl.formatToPlainString(credential(1115).t.mI3CoL, { keyName: credential.name });
  obj2.trailing = closure_4(credential(7308).ActionSheetCloseButton, { onPress: handleClose });
  const items = [closure_4(credential(7259).BottomSheetTitleHeader, obj2), , , ];
  const obj4 = { style: tmp.content, children: null };
  const obj5 = { variant: "heading-md/normal", style: tmp.subtitle, children: null };
  const intl2 = credential(1115).intl;
  obj5.children = intl2.string(credential(1115).t.IfTbc1);
  obj4.children = closure_4(credential(4634).Text, obj5);
  items[1] = closure_4(View, obj4);
  const obj6 = { children: null };
  const obj7 = { text: null, onPress: null, variant: "primary", grow: true };
  const intl3 = credential(1115).intl;
  obj7.text = intl3.string(credential(1115).t["lqK//z"]);
  obj7.onPress = handleClose;
  obj6.children = closure_4(credential(5060).Button, obj7);
  items[2] = closure_4(View, obj6);
  const obj8 = { children: null };
  const obj9 = { text: null, onPress: null, variant: "destructive", disabled: null, loading: null, grow: true };
  const intl4 = credential(1115).intl;
  obj9.text = intl4.string(credential(1115).t.zYOk0f);
  obj9.onPress = function onPress() {
    closure_1_1(true);
    ActionSheetActionCreatorsDefault.hideActionSheet();
    const result = WebAuthnActionCreators.deleteWebAuthnCredential(credential);
    const nextPromise = result.then(() => {
      const obj2 = { key: "WEBAUTHN_CREDENTIAL_DELETE_SUCCESS_TOAST_KEY", content: null, icon: null, IconComponent: null, iconColor: "status-positive" };
      const intl = credential(1115).intl;
      obj2.content = intl.string(credential(1115).t.ZnkeXs);
      obj2.icon = closure_1_1(10793);
      obj2.IconComponent = credential(4597).CircleCheckIcon;
      closure_1_1(4336).open(obj2);
    });
    result.then(() => {
      const obj2 = { key: "WEBAUTHN_CREDENTIAL_DELETE_SUCCESS_TOAST_KEY", content: null, icon: null, IconComponent: null, iconColor: "status-positive" };
      const intl = credential(1115).intl;
      obj2.content = intl.string(credential(1115).t.ZnkeXs);
      obj2.icon = closure_1_1(10793);
      obj2.IconComponent = credential(4597).CircleCheckIcon;
      closure_1_1(4336).open(obj2);
    }).catch((error) => {
      const obj = closure_1_1(4336);
      obj.open({ key: "WEBAUTHN_CREDENTIAL_DELETE_ERROR_TOAST_KEY", content: error.message, icon: closure_1_1(9765), IconComponent: credential(8723).WarningIcon, iconColor: "icon-feedback-critical" });
    }).finally(() => {
      closure_1_1(false);
    });
  };
  obj9.disabled = deleting;
  obj9.loading = deleting;
  obj8.children = closure_4(credential(5060).Button, obj9);
  items[3] = closure_4(View, obj8);
  obj.children = items;
  return closure_5(credential(7260).BottomSheet, obj);
};