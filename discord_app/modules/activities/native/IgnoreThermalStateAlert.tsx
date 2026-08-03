import "noop";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c3;
let c4;
const require = arg1;
({ jsx: c3, jsxs: c4 } = jsxProd);
let closure_5 = createCacheKey.createStyles({ text: { marginTop: 16, lineHeight: 20, textAlign: "center" }, header: { textAlign: "center" } });
let result = require("createCacheKey").fileFinishedImporting("modules/activities/native/IgnoreThermalStateAlert.tsx");

export const IgnoreThermalStateAlert = function IgnoreThermalStateAlert(onConfirm) {
  onConfirm = onConfirm.onConfirm;
  const merged = Object.assign(onConfirm, Object.create(null));
  const tmp2 = callback3();
  let obj = {};
  const merged1 = Object.assign(merged);
  const intl = onConfirm(1236).intl;
  obj.cancelText = intl.string(onConfirm(1236).t["1fRDnT"]);
  obj.onCancel = function onCancel() {
    if (onConfirm != null) {
      tmp();
    }
    const result = onConfirm(outer1_2[5]).disregardSeriousThermalState();
  };
  const intl2 = onConfirm(1236).intl;
  obj.confirmText = intl2.string(onConfirm(1236).t.oEAioF);
  obj = { style: tmp2.header, variant: "heading-lg/extrabold", color: "mobile-text-heading-primary", children: null };
  const intl3 = onConfirm(1236).intl;
  obj[3] = intl3.string(onConfirm(1236).t.v5X4fZ);
  const items = [callback(onConfirm(4251).Text, obj), ];
  obj = { style: tmp2.text, variant: "text-md/medium", children: null };
  const intl4 = onConfirm(1236).intl;
  obj[2] = intl4.string(onConfirm(1236).t.VOgTjy);
  items[1] = callback(onConfirm(4251).Text, obj);
  obj.children = items;
  return callback2(importDefault(4684), obj);
};