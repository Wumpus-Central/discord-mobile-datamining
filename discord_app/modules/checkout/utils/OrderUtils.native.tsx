// === Module 7704: _discardDraftOrder ===

// Module 7704 (_discardDraftOrder)
import closure_2 from "asyncGeneratorStep" /* 5 */;
import { OrderStatus } from "CustomCheckoutFlow" /* 4357 */;

const require = arg1;
function _discardDraftOrder() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c5 = 0;
    c6 = 0;
    c4 = 0;
    const iter = (function*(arg0) {
      if (c6 === 2) {
        c6 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp7 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_2 = tmp3;
              let user = tmp5;
              let callback;
              user = undefined;
              ({ checkoutSucceeded: c0, order: c1 } = callback);
              c5 = 1;
              c6 = 1;
              return { value: "ct", done: true };
            }
          } else {
            if (1 === tmp8) {
              if (arg0 === 1) {
                c6 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c6 = 3;
                obj1 = { value: null, done: true };
                obj1[0] = arg1;
                return obj1;
              } else if (!callback) {
                let id;
                if (user != null) {
                  id = user.id;
                }
                if (null != id) {
                  if (user.status === constants.DRAFT) {
                    c4 = 1;
                    obj1 = callback(user[2]);
                    c5 = 3;
                    c6 = 1;
                    const obj2 = { value: null, done: false };
                    obj2[0] = obj1.discardOrder(user.id);
                    return obj2;
                  }
                }
              }
            } else {
              if (2 === tmp8) {
                c4 = 0;
              } else if (arg0 === 1) {
                c6 = 3;
                throw arg1;
              } else if (arg0 !== 2) {
                c4 = 0;
              }
              c4 = 0;
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            }
            c6 = 3;
          }
        } catch (tmp21) {
          constants = tmp21;
          if (tmp4 === c4) {
            c6 = tmp2;
            throw tmp21;
          } else {
            c5 = tmp;
          }
        }
      }
    })();
    iter.next();
    return iter;
  });
  closure_4 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
const result = require("set").fileFinishedImporting("modules/checkout/utils/OrderUtils.native.tsx");

export const discardDraftOrder = function discardDraftOrder(arg0) {
  const self = this;
  const apply = _discardDraftOrder.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};