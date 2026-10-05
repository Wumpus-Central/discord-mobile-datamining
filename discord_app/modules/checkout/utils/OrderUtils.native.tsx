// discord_app/modules/checkout/utils/OrderUtils.native.tsx
import PaymentConstants from "../../payments/PaymentConstants.tsx";
import _asyncToGenerator from "../../../../_runtime/metro/00005__asyncToGenerator.js";
import size from "../../../../_runtime/metro/00002__.js";

let c5;

let obj = function _discardDraftOrder() {
  obj = _asyncToGenerator(async (arg0) => {
    let c0;
    let c1;
    let closure_2;
    let closure_3;
    let closure_0 = arg0;
    if (1 === c5) {
      if (arg0 === 1) {
        let c6 = 3;
        throw value;
      } else if (arg0 === 2) {
        c6 = 3;
        const obj5 = { value, done: true };
        return obj5;
      } else {
        let status = c0;
        if (!status) {
          let id;
          if (status != null) {
            id = status.id;
          }
          if (null != id) {
            status = status.status;
            if (status === closure_130_3.DRAFT) {
              let c4 = 1;
              const obj2 = closure_130_0(closure_130_1[2]);
              status = obj2.discardOrder(status.id);
              c5 = 3;
              c6 = 1;
              const obj6 = { value: status, done: false };
              return obj6;
            }
          }
        }
      }
    } else if (2 === c5) {
      c4 = 0;
    } else if (arg0 === 1) {
      c6 = 3;
      throw value;
    } else if (arg0 === 2) {
      c4 = 0;
      c6 = 3;
      obj = { value, done: true };
      return obj;
    } else {
      c4 = 0;
    }
    await "IconComponent";
    ({ checkoutSucceeded: c0, order: c1 } = closure_0);
    return "Set";
  });
  return obj(...arguments);
};
const OrderStatus = PaymentConstants.OrderStatus;
const result = size.fileFinishedImporting("modules/checkout/utils/OrderUtils.native.tsx");

export const discardDraftOrder = function discardDraftOrder() {
  return obj(...arguments);
};
