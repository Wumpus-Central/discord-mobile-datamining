// === Module 9586: IgnoreThermalStateAlert ===

// Module 9586 (IgnoreThermalStateAlert)
import common_AlertDefault from "common/Alert" /* 4994 */;
import EmbeddedActivitiesActionCreators from "EmbeddedActivitiesActionCreators" /* 9504 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const createStyles = fn(4560);
let closure_5 = createStyles.createStyles({ text: { marginTop: 16, lineHeight: 20, textAlign: "center" }, header: { textAlign: "center" } });
const size = fn(2);
let result = size.fileFinishedImporting("modules/activities/native/IgnoreThermalStateAlert.tsx");

export const IgnoreThermalStateAlert = function IgnoreThermalStateAlert(onConfirm) {
  onConfirm = onConfirm.onConfirm;
  const merged = Object.assign(onConfirm, Object.assign({ onConfirm: 0 }));
  const tmp2 = closure_5();
  let obj = {};
  const merged1 = Object.assign(merged);
  const intl = onConfirm(1114).intl;
  obj.cancelText = intl.string(onConfirm(1114).t["1fRDnT"]);
  obj.onCancel = function onCancel() {
    if (onConfirm != null) {
      tmp();
    }
    const result = EmbeddedActivitiesActionCreators.disregardSeriousThermalState();
  };
  const intl2 = onConfirm(1114).intl;
  obj.confirmText = intl2.string(onConfirm(1114).t.oEAioF);
  obj = { style: tmp2.header, variant: "heading-lg/extrabold", color: "mobile-text-heading-primary", children: null };
  const intl3 = onConfirm(1114).intl;
  obj.children = intl3.string(onConfirm(1114).t.v5X4fZ);
  const items = [closure_3(onConfirm(4556).Text, obj), ];
  obj = { style: tmp2.text, variant: "text-md/medium", children: null };
  const intl4 = onConfirm(1114).intl;
  obj.children = intl4.string(onConfirm(1114).t.VOgTjy);
  items[1] = closure_3(onConfirm(4556).Text, obj);
  obj.children = items;
  return closure_4(common_AlertDefault, obj);
};