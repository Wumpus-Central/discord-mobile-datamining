// === Module 10875: AcceptRequestConfirmationModal ===

// Module 10875 (AcceptRequestConfirmationModal)
import nativeDefault from "native" /* 576 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 4904 */;
import common_AlertDefault from "common/Alert" /* 4994 */;
import noop from "module_19" /* 19 */;

const require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
fn(4560);
let createStyles = { bodyText: null, text: null };
createStyles = { textAlign: "center", alignItems: "center", gap: nativeDefault.space.PX_8 };
createStyles.bodyText = createStyles;
createStyles.text = { textAlign: "center" };
let closure_6 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/people/strangers/native/AcceptRequestConfirmationModal.tsx");

export default function AcceptRequestConfirmationModal(onConfirm) {
  onConfirm = onConfirm.onConfirm;
  const tmp = closure_6();
  let obj = { confirmText: null, cancelText: null, onConfirm: null, onCancel: null, children: null };
  const intl = onConfirm(1114).intl;
  obj.confirmText = intl.string(onConfirm(1114).t.MMlhsr);
  const intl2 = onConfirm(1114).intl;
  obj.cancelText = intl2.string(onConfirm(1114).t["ETE/oC"]);
  obj.onConfirm = function onConfirm() {
    onConfirm();
    AlertActionCreatorsDefault.close();
  };
  obj.onCancel = onConfirm.onCancel;
  obj = { style: tmp.bodyText, children: null };
  obj = { variant: "heading-lg/bold", color: "text-strong", style: tmp.text, children: null };
  const intl3 = onConfirm(1114).intl;
  obj.children = intl3.string(onConfirm(1114).t.eJzSDT);
  const items = [closure_4(onConfirm(4556).Text, obj), ];
  const obj1 = { variant: "text-md/medium", color: "text-subtle", style: tmp.text, children: null };
  const intl4 = onConfirm(1114).intl;
  obj1.children = intl4.string(onConfirm(1114).t.GB4jUw);
  items[1] = closure_4(onConfirm(4556).Text, obj1);
  obj.children = items;
  obj.children = closure_5(View, obj);
  return closure_4(common_AlertDefault, obj);
};