// discord_app/modules/webauthn/native/WebAuthnDeleteActionSheet.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import WebAuthnActionCreators from "../WebAuthnActionCreators.tsx";
import _modDef14670 from "../../../../_runtime/metro/14670__.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ Image: c3, View: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
fn(4560);
let createStyles = { content: { alignItems: "center" }, subtitle: null, sheetContent: null, sheetBody: null };
createStyles = { textAlign: "center", marginTop: nativeDefault.space.PX_16 };
createStyles.subtitle = createStyles;
createStyles.sheetContent = { paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16 };
let obj1 = { paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16 };
createStyles.sheetBody = { gap: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16 };
let closure_7 = createStyles.createStyles(createStyles);
const size = fn(2);
let result = size.fileFinishedImporting("modules/webauthn/native/WebAuthnDeleteActionSheet.tsx");

export default function WebAuthnDeleteActionSheet(credential) {
  credential = credential.credential;
  ({ deleting, setDeleting: importDefault } = credential);
  function handleClose() {
    ActionSheetActionCreatorsDefault.hideActionSheet();
  }
  const tmp = closure_7();
  let obj = { contentStyles: tmp.sheetContent, bodyStyles: tmp.sheetBody, children: null };
  obj = { title: null, trailing: null };
  let intl = credential(1114).intl;
  obj = { keyName: credential.name };
  obj.title = intl.formatToPlainString(credential(1114).t.mI3CoL, obj);
  obj.trailing = closure_5(credential(7199).ActionSheetCloseButton, { onPress: handleClose });
  const items = [closure_5(credential(7149).BottomSheetTitleHeader, obj), , ,];
  const obj1 = { style: tmp.content, children: null };
  const items1 = [closure_5(closure_3, { source: _modDef14670 })];
  const obj3 = { variant: "heading-md/normal", style: tmp.subtitle, children: null };
  const intl2 = credential(1114).intl;
  obj3.children = intl2.string(credential(1114).t.IfTbc1);
  items1[1] = closure_5(credential(4556).Text, obj3);
  obj1.children = items1;
  items[1] = closure_6(closure_4, obj1);
  const obj4 = { children: null };
  const obj5 = { text: null, onPress: null, variant: "primary", grow: true };
  const intl3 = credential(1114).intl;
  obj5.text = intl3.string(credential(1114).t["lqK//z"]);
  obj5.onPress = handleClose;
  obj4.children = closure_5(credential(4975).Button, obj5);
  items[2] = closure_5(closure_4, obj4);
  const obj6 = { children: null };
  const obj7 = { text: null, onPress: null, variant: "destructive", disabled: null, loading: null, grow: true };
  const intl4 = credential(1114).intl;
  obj7.text = intl4.string(credential(1114).t.zYOk0f);
  obj7.onPress = function onPress() {
    closure_1_1(true);
    ActionSheetActionCreatorsDefault.hideActionSheet();
    const result = WebAuthnActionCreators.deleteWebAuthnCredential(credential);
    const nextPromise = result.then(() => {
      closure_1_1(4259);
      const obj = {
        key: "WEBAUTHN_CREDENTIAL_DELETE_SUCCESS_TOAST_KEY",
        content: null,
        icon: null,
        IconComponent: null,
        iconColor: "status-positive",
      };
      const intl = credential(1114).intl;
      obj.content = intl.string(credential(1114).t.ZnkeXs);
      obj.icon = closure_1_1(10652);
      obj.IconComponent = credential(4520).CircleCheckIcon;
      obj.open(obj);
    });
    result
      .then(() => {
        closure_1_1(4259);
        const obj = {
          key: "WEBAUTHN_CREDENTIAL_DELETE_SUCCESS_TOAST_KEY",
          content: null,
          icon: null,
          IconComponent: null,
          iconColor: "status-positive",
        };
        const intl = credential(1114).intl;
        obj.content = intl.string(credential(1114).t.ZnkeXs);
        obj.icon = closure_1_1(10652);
        obj.IconComponent = credential(4520).CircleCheckIcon;
        obj.open(obj);
      })
      .catch((error) => {
        closure_1_1(4259);
        const obj = {
          key: "WEBAUTHN_CREDENTIAL_DELETE_ERROR_TOAST_KEY",
          content: error.message,
          icon: closure_1_1(9625),
          IconComponent: credential(8588).WarningIcon,
          iconColor: "icon-feedback-critical",
        };
        obj.open(obj);
      })
      .finally(() => {
        closure_1_1(false);
      });
  };
  obj7.disabled = deleting;
  obj7.loading = deleting;
  obj6.children = closure_5(credential(4975).Button, obj7);
  items[3] = closure_5(closure_4, obj6);
  obj.children = items;
  return closure_6(credential(7150).BottomSheet, obj);
}
