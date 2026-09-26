// === Module 12887: purchaseExceptionAlerts ===

// Module 12887 (purchaseExceptionAlerts)
import util from "util" /* 1115 */;
import size from "module_2" /* 2 */;

const re2 = /code:\s*(\d{7})(?!\d)/;
const obj2 = { 4000006: null };
obj2[4000006] = { title: util.t.ifAVZr, body: util.t.meauFg };
const result = size.fileFinishedImporting("modules/billing/native/apple/purchaseExceptionAlerts.tsx");

export const getPurchaseExceptionAlert = function getPurchaseExceptionAlert(message) {
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
          const obj = { title: null, body: null };
          const intl = util.intl;
          obj.title = intl.string(tmp8.title);
          const intl2 = util.intl;
          obj.body = intl2.string(tmp8.body);
          tmp3 = obj;
        }
        return tmp3;
      }
    }
  }
  return null;
};