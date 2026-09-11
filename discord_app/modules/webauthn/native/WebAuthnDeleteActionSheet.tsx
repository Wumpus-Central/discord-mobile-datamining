// discord_app/modules/webauthn/native/WebAuthnDeleteActionSheet.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import WebAuthnActionCreators from "../WebAuthnActionCreators.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
fn(4606);
let createStyles = { content: { alignItems: "center" }, subtitle: null, sheetContent: null, sheetBody: null };
createStyles = { textAlign: "center", marginTop: nativeDefault.space.PX_16 };
createStyles.subtitle = createStyles;
createStyles.sheetContent = { paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16 };
let obj1 = { paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16 };
createStyles.sheetBody = { gap: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16 };
let closure_6 = createStyles.createStyles(createStyles);
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
  obj = { title: null, trailing: null };
  let intl = credential(1114).intl;
  obj = { keyName: credential.name };
  obj.title = intl.formatToPlainString(credential(1114).t.mI3CoL, obj);
  obj.trailing = closure_4(credential(7271).ActionSheetCloseButton, { onPress: handleClose });
  const items = [closure_4(credential(7222).BottomSheetTitleHeader, obj), , ,];
  const obj1 = { style: tmp.content, children: null };
  let obj2 = { variant: "heading-md/normal", style: tmp.subtitle, children: null };
  const intl2 = credential(1114).intl;
  obj2.children = intl2.string(credential(1114).t.IfTbc1);
  obj1.children = closure_4(credential(4602).Text, obj2);
  items[1] = closure_4(View, obj1);
  const obj3 = { children: null };
  const obj4 = { text: null, onPress: null, variant: "primary", grow: true };
  const intl3 = credential(1114).intl;
  obj4.text = intl3.string(credential(1114).t["lqK//z"]);
  obj4.onPress = handleClose;
  obj3.children = closure_4(credential(5026).Button, obj4);
  items[2] = closure_4(View, obj3);
  const obj5 = { children: null };
  const obj6 = { text: null, onPress: null, variant: "destructive", disabled: null, loading: null, grow: true };
  const intl4 = credential(1114).intl;
  obj6.text = intl4.string(credential(1114).t.zYOk0f);
  obj6.onPress = function onPress() {
    closure_1_1(true);
    ActionSheetActionCreatorsDefault.hideActionSheet();
    const result = WebAuthnActionCreators.deleteWebAuthnCredential(credential);
    const nextPromise = result.then(() => {
      closure_1_1(4305);
      const obj = {
        key: "WEBAUTHN_CREDENTIAL_DELETE_SUCCESS_TOAST_KEY",
        content: null,
        icon: null,
        IconComponent: null,
        iconColor: "status-positive",
      };
      const intl = credential(1114).intl;
      obj.content = intl.string(credential(1114).t.ZnkeXs);
      obj.icon = closure_1_1(10741);
      obj.IconComponent = credential(4566).CircleCheckIcon;
      obj.open(obj);
    });
    result
      .then(() => {
        closure_1_1(4305);
        const obj = {
          key: "WEBAUTHN_CREDENTIAL_DELETE_SUCCESS_TOAST_KEY",
          content: null,
          icon: null,
          IconComponent: null,
          iconColor: "status-positive",
        };
        const intl = credential(1114).intl;
        obj.content = intl.string(credential(1114).t.ZnkeXs);
        obj.icon = closure_1_1(10741);
        obj.IconComponent = credential(4566).CircleCheckIcon;
        obj.open(obj);
      })
      .catch((error) => {
        closure_1_1(4305);
        const obj = {
          key: "WEBAUTHN_CREDENTIAL_DELETE_ERROR_TOAST_KEY",
          content: error.message,
          icon: closure_1_1(9716),
          IconComponent: credential(8679).WarningIcon,
          iconColor: "icon-feedback-critical",
        };
        obj.open(obj);
      })
      .finally(() => {
        closure_1_1(false);
      });
  };
  obj6.disabled = deleting;
  obj6.loading = deleting;
  obj5.children = closure_4(credential(5026).Button, obj6);
  items[3] = closure_4(View, obj5);
  obj.children = items;
  return closure_5(credential(7223).BottomSheet, obj);
}
