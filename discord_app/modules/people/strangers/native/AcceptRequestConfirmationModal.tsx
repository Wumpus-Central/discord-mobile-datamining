// === Module 10863: AcceptRequestConfirmationModal ===

// Module 10863 (AcceptRequestConfirmationModal)
import nativeDefault from "native" /* 575 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 6090 */;
import common_AlertDefault from "common/Alert" /* 6162 */;
import noop from "module_19" /* 19 */;

const require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(5140);
let obj2 = { bodyText: { textAlign: "center", alignItems: "center", gap: nativeDefault.space.PX_8 }, text: { textAlign: "center" } };
let closure_6 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/people/strangers/native/AcceptRequestConfirmationModal.tsx");

export default function AcceptRequestConfirmationModal(onConfirm) {
  onConfirm = onConfirm.onConfirm;
  const tmp = closure_6();
  const obj = { confirmText: null, cancelText: null, onConfirm: null, onCancel: null, children: null };
  const intl = onConfirm(1113).intl;
  obj.confirmText = intl.string(onConfirm(1113).t.MMlhsr);
  const intl2 = onConfirm(1113).intl;
  obj.cancelText = intl2.string(onConfirm(1113).t["ETE/oC"]);
  obj.onConfirm = function onConfirm() {
    onConfirm();
    AlertActionCreatorsDefault.close();
  };
  obj.onCancel = onConfirm.onCancel;
  const obj2 = { style: tmp.bodyText, children: null };
  const obj3 = { variant: "heading-lg/semibold", color: "text-strong", style: tmp.text, children: null };
  const intl3 = onConfirm(1113).intl;
  obj3.children = intl3.string(onConfirm(1113).t.eJzSDT);
  items = [closure_4(onConfirm(5751).Text, obj3), ];
  const obj4 = { variant: "body-md/medium", color: "text-subtle", style: tmp.text, children: null };
  const intl4 = onConfirm(1113).intl;
  obj4.children = intl4.string(onConfirm(1113).t.GB4jUw);
  items[1] = closure_4(onConfirm(5751).Text, obj4);
  obj2.children = items;
  obj.children = closure_5(View, obj2);
  return closure_4(common_AlertDefault, obj);
};