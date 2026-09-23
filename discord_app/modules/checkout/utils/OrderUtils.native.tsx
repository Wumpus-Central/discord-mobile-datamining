// === Module 11156: OrderUtils ===

// Module 11156 (OrderUtils)
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

const require = fn;
let closure_4 = async function _discardDraftOrder(arg0) {
  if (c6 === 2) {
    c6 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp7 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj3 = { value, done: true };
      return obj3;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c6 = 2;
      if (0 === c5) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          closure_2 = tmp3;
          closure_1 = tmp5;
          closure_129_0 = undefined;
          closure_129_1 = undefined;
          ({ checkoutSucceeded: closure_129_0, order: closure_129_1 } = closure_0);
          c5 = 1;
          c6 = 1;
          return { value: "flex", done: true };
        }
      } else {
        if (1 === tmp8) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else if (!closure_129_0) {
            let id;
            if (closure_129_1 != null) {
              id = closure_129_1.id;
            }
            if (null != id) {
              if (closure_129_1.status === closure_130_3.DRAFT) {
                c4 = 1;
                c5 = 3;
                c6 = 1;
                const obj6 = { value: closure_130_0(closure_130_1[2]).discardOrder(closure_129_1.id), done: false };
                return obj6;
              }
            }
          }
        } else {
          if (2 === tmp8) {
            c4 = 0;
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 !== 2) {
            c4 = 0;
          }
          c4 = 0;
          c6 = 3;
          const obj = { value, done: true };
          return obj;
        }
        c6 = 3;
      }
    } catch (tmp21) {
      closure_3 = tmp21;
      if (tmp4 === c4) {
        c6 = tmp2;
        throw tmp21;
      } else {
        c5 = tmp;
      }
    }
  }
};
const OrderStatus = fn(4809).OrderStatus;
const size = fn(2);
const result = size.fileFinishedImporting("modules/checkout/utils/OrderUtils.native.tsx");

export const discardDraftOrder = function discardDraftOrder() {
  const self = this;
  const apply = closure_4.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};