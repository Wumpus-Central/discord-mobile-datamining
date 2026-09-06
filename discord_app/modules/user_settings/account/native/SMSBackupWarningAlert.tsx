// discord_app/modules/user_settings/account/native/SMSBackupWarningAlert.tsx
import actions_AlertActionCreatorsDefault from "../../../../actions/native/AlertActionCreators.tsx";
import common_AlertDefault from "../../../../components_native/common/Alert.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = fn;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const createStyles = fn(4560);
let closure_5 = createStyles.createStyles({
  title: { textAlign: "center" },
  body: { marginTop: 8, textAlign: "center", lineHeight: 18 },
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/account/native/SMSBackupWarningAlert.tsx");

export default function SMSBackupWarningAlert(onConfirm) {
  onConfirm = onConfirm.onConfirm;
  const tmp = closure_5();
  let obj = { cancelText: null, confirmText: null, onConfirm: null, onCancel: null, children: null };
  const intl = onConfirm(1114).intl;
  obj.cancelText = intl.string(onConfirm(1114).t["ETE/oC"]);
  const intl2 = onConfirm(1114).intl;
  obj.confirmText = intl2.string(onConfirm(1114).t.N86XcP);
  obj.onConfirm = function onConfirm() {
    onConfirm();
    actions_AlertActionCreatorsDefault.close();
  };
  obj.onCancel = function onCancel() {
    return actions_AlertActionCreatorsDefault.close();
  };
  obj = {
    style: tmp.title,
    accessibilityRole: "header",
    variant: "heading-lg/extrabold",
    color: "mobile-text-heading-primary",
    children: null,
  };
  const intl3 = onConfirm(1114).intl;
  obj.children = intl3.string(onConfirm(1114).t.Ed4XQB);
  const items = [closure_3(onConfirm(4556).Text, obj)];
  obj = { style: tmp.body, variant: "text-sm/medium", color: "text-default", children: null };
  const intl4 = onConfirm(1114).intl;
  obj.children = intl4.string(onConfirm(1114).t.EDU2Eg);
  items[1] = closure_3(onConfirm(4556).Text, obj);
  obj.children = items;
  return closure_4(common_AlertDefault, obj);
}
