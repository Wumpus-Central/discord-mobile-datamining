// discord_app/modules/people/strangers/native/AcceptRequestConfirmationModal.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import AlertActionCreatorsDefault from "../../../../actions/AlertActionCreators.tsx";
import common_AlertDefault from "../../../../components_native/common/Alert.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4638);
let obj2 = {
  bodyText: { textAlign: "center", alignItems: "center", gap: nativeDefault.space.PX_8 },
  text: { textAlign: "center" },
};
let closure_6 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/people/strangers/native/AcceptRequestConfirmationModal.tsx");

export default function AcceptRequestConfirmationModal(onConfirm) {
  onConfirm = onConfirm.onConfirm;
  const tmp = closure_6();
  const obj = { confirmText: null, cancelText: null, onConfirm: null, onCancel: null, children: null };
  const intl = onConfirm(1115).intl;
  obj.confirmText = intl.string(onConfirm(1115).t.MMlhsr);
  const intl2 = onConfirm(1115).intl;
  obj.cancelText = intl2.string(onConfirm(1115).t["ETE/oC"]);
  obj.onConfirm = function onConfirm() {
    onConfirm();
    AlertActionCreatorsDefault.close();
  };
  obj.onCancel = onConfirm.onCancel;
  const obj2 = { style: tmp.bodyText, children: null };
  const obj3 = { variant: "heading-lg/bold", color: "text-strong", style: tmp.text, children: null };
  const intl3 = onConfirm(1115).intl;
  obj3.children = intl3.string(onConfirm(1115).t.eJzSDT);
  const items = [closure_4(onConfirm(4634).Text, obj3)];
  const obj4 = { variant: "text-md/medium", color: "text-subtle", style: tmp.text, children: null };
  const intl4 = onConfirm(1115).intl;
  obj4.children = intl4.string(onConfirm(1115).t.GB4jUw);
  items[1] = closure_4(onConfirm(4634).Text, obj4);
  obj2.children = items;
  obj.children = closure_5(View, obj2);
  return closure_4(common_AlertDefault, obj);
}
