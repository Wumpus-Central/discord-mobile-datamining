// === Module 9567: IgnoreThermalStateAlert ===

// Module 9567 (IgnoreThermalStateAlert)
import noopAll from "noop" /* 19 */;
import componentDidMountDefault from "componentDidMount" /* 4947 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

const require = arg1;
noopAll;
({ jsx: c3, jsxs: c4 } = jsxProd);
let closure_5 = createCacheKey.createStyles({ text: { marginTop: 16, lineHeight: 20, textAlign: "center" }, header: { textAlign: "center" } });
let result = require("set").fileFinishedImporting("modules/activities/native/IgnoreThermalStateAlert.tsx");

export const IgnoreThermalStateAlert = function IgnoreThermalStateAlert(onConfirm) {
  onConfirm = onConfirm.onConfirm;
  const merged = Object.assign(onConfirm, Object.create(null));
  const tmp2 = callback3();
  let obj = {};
  const merged1 = Object.assign(merged);
  const intl = onConfirm(1233).intl;
  obj.cancelText = intl.string(onConfirm(1233).t["1fRDnT"]);
  obj.onCancel = function onCancel() {
    if (onConfirm != null) {
      tmp();
    }
    const result = onConfirm(closure_1_2[5]).disregardSeriousThermalState();
  };
  const intl2 = onConfirm(1233).intl;
  obj.confirmText = intl2.string(onConfirm(1233).t.oEAioF);
  obj = { style: tmp2.header, variant: "heading-lg/extrabold", color: "mobile-text-heading-primary", children: null };
  const intl3 = onConfirm(1233).intl;
  obj[3] = intl3.string(onConfirm(1233).t.v5X4fZ);
  const items = [callback(onConfirm(4474).Text, obj), ];
  obj = { style: tmp2.text, variant: "text-md/medium", children: null };
  const intl4 = onConfirm(1233).intl;
  obj[2] = intl4.string(onConfirm(1233).t.VOgTjy);
  items[1] = callback(onConfirm(4474).Text, obj);
  obj.children = items;
  return callback2(componentDidMountDefault, obj);
};