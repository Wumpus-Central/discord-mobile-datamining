// === Module 13171: purchaseExceptionAlerts ===

// Module 13171 (purchaseExceptionAlerts)
import intl3 from "intl" /* 1126 */;
import size from "module_2" /* 2 */;

const re2 = /code:\s*(\d{7})(?!\d)/;
let obj = { title: intl3.t.ifAVZr, body: intl3.t.meauFg };
const obj2 = { 4000006: null };
obj2[4000006] = obj;
const result = size.fileFinishedImporting("modules/billing/native/apple/purchaseExceptionAlerts.tsx");

export const getPurchaseExceptionAlert = function getPurchaseExceptionAlert(message) {
  let intl;
  let intl2;
  if (null != message) {
    if ("" !== message) {
      const match = re2.exec(message);
      if (null == match) {
        return null;
      } else {
        const _Number = Number;
        const tmp8 = obj2[Number(undefined, match[1])];
        let tmp3 = null;
        if (null != tmp8) {
          const obj = { title: intl.string(tmp8.title), body: intl2.string(tmp8.body) };
          intl = intl3.intl;
          intl2 = intl3.intl;
          tmp3 = obj;
        }
        return tmp3;
      }
    }
  }
  return null;
};