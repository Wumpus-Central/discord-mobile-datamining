import _createGatewayCheckoutContext from "_createGatewayCheckoutContext";
import { Endpoints } from "ME";
import "set";
import "set";

const require = arg1;
function _signOrder() {
  const self = this;
  let tmp = callback((arg0) => {
    let closure_0 = arg0;
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
    const iter = (function*(arg0) {
      let c0;
      let c1;
      let c2;
      if (c6 === 2) {
        c6 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
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
              c2 = tmp3;
              let dependencyMap = tmp7;
              let callback;
              dependencyMap = undefined;
              c2 = undefined;
              ({ orderId: c0, expectedRevision: c1, loadId: c2 } = callback);
              let closure_3;
              let c4;
              c5 = 1;
              c6 = 1;
              return { value: "ct", done: "Array" };
            }
          } else if (1 === tmp7) {
            if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              const obj1 = { value: null, done: true };
              obj1[0] = arg1;
              return obj1;
            } else {
              c4 = {};
              if (null != dependencyMap) {
                c4.expected_revision = dependencyMap;
              }
              c4 = 1;
              const HTTP = callback(530).HTTP;
              const obj2 = { url: null, body: null, context: null, rejectWithError: true };
              obj2[0] = closure_3.ORDER_SIGN(callback);
              obj2[1] = c4;
              let tmp45;
              if (null != c2) {
                if ("" !== c2) {
                  const obj3 = { load_id: null };
                  obj3[0] = c2;
                  tmp45 = obj3;
                }
              }
              obj2[2] = tmp45;
              c5 = 3;
              c6 = 1;
              const obj4 = { value: null, done: false };
              obj4[0] = HTTP.post(obj2);
              return obj4;
            }
          } else if (2 === tmp7) {
            c4 = 0;
            c5 = closure_3;
            if (c5 instanceof callback(530).HTTPResponseError) {
              if (400 === c5.status) {
                if ((function isOrderShape(body) {
                  let tmp = null != body && typeof body === "object";
                  if (tmp) {
                    tmp = "id" in body;
                  }
                  if (tmp) {
                    tmp = "status" in body;
                  }
                  return tmp;
                })(c5.body)) {
                  throw new c5(c5.body);
                }
              }
            }
            throw c5;
          } else if (arg0 === 1) {
            c6 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            const obj5 = { value: null, done: true };
            obj5[0] = arg1;
            return obj5;
          } else {
            closure_3 = arg1;
            c4 = 0;
            if (null == closure_3.body) {
              const _Error = Error;
              const error = new Error("Invalid sign order response");
              throw error;
            } else {
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = closure_3.body;
              return obj;
            }
          }
        } catch (tmp50) {
          closure_3 = tmp50;
          if (tmp4 === c4) {
            c6 = tmp2;
            throw tmp50;
          } else {
            c5 = tmp;
          }
        }
      }
    })();
    iter.next();
    return iter;
  });
  const _signOrder = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _getOrder() {
  const self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
    return (function*(arg0, body) {
      if (c6 === 2) {
        c6 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw body;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = body;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw body;
            } else if (arg0 === 2) {
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = body;
              return obj;
            } else {
              let _createGatewayCheckoutContext = tmp3;
              let table = tmp7;
              let logger = 1;
              const HTTP = callback(outer1_1[4]).HTTP;
              const obj1 = { url: null, rejectWithError: true };
              obj1[0] = outer1_3.ORDER_GET(callback);
              c5 = 2;
              c6 = 1;
              const obj2 = { value: null, done: false };
              obj2[0] = HTTP.get(obj1);
              return obj2;
            }
          } else if (1 === tmp7) {
            logger = 0;
            table = closure_3;
            let obj3 = { error: null, orderId: null };
            obj3[0] = table;
            obj3[1] = callback;
            logger.error("failed to fetch order", obj3);
            obj3 = callback(table[5]);
            const obj4 = { tags: null, extra: null };
            obj4[0] = { source: "OrderActionCreators_getOrder" };
            const obj5 = { orderId: null };
            obj5[0] = callback;
            obj4[1] = obj5;
            const result = obj3.captureBillingException(table, obj4);
            c6 = 3;
            return { value: null, done: true };
          } else if (arg0 === 1) {
            c6 = 3;
            throw body;
          } else if (arg0 === 2) {
            logger = 0;
            c6 = 3;
            const obj6 = { value: null, done: true };
            obj6[0] = body;
            return obj6;
          } else {
            body = body.body;
            if (!body) {
              body = null;
            }
            logger = 0;
            c6 = 3;
            obj = { value: null, done: true };
            obj[0] = body;
            return obj;
          }
        } catch (tmp26) {
          closure_3 = tmp26;
          if (tmp4 === logger) {
            c6 = tmp2;
            throw tmp26;
          } else {
            c5 = tmp;
          }
        }
      }
    })();
  });
  const _getOrder = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _fetchOrderEntitlements() {
  const self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let c2 = 0;
    let c5 = 0;
    let c4 = 0;
    return (function*(arg0) {
      if (c5 === 2) {
        c5 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp5 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c5 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c5 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c5 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let closure_1 = tmp6;
              let lib;
              let c4 = 1;
              const HTTP = lib(outer1_1[4]).HTTP;
              const obj1 = { url: null, rejectWithError: false };
              obj1[0] = outer1_3.ORDER_ENTITLEMENTS(lib);
              c2 = 2;
              c5 = 1;
              const obj2 = { value: null, done: false };
              obj2[0] = HTTP.get(obj1);
              return obj2;
            }
          } else if (1 === tmp6) {
            c4 = 0;
            c5 = 3;
            const obj3 = { value: null, done: true };
            obj3[0] = [];
            return obj3;
          } else if (arg0 === 1) {
            c5 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c4 = 0;
            c5 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            lib = arg1;
            if (null != lib.body) {
              const body = lib.body;
            } else {
              const items = [];
            }
            c4 = 0;
            c5 = 3;
          }
        } catch (tmp16) {
          let closure_3 = tmp16;
          if (tmp3 === c4) {
            c5 = tmp2;
            throw tmp16;
          } else {
            c2 = tmp;
          }
        }
      }
    })();
  });
  const _fetchOrderEntitlements = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let c4 = new require("set")("OrderActionCreators");
class OrderSigningFailedWithConstraintsError extends tmp3 {
  constructor(arg0) {
    tmp = new tmp("Order signing failed due to unsatisfied constraints", new.target);
    // ThrowIfThisInitialized (0x7c)
    tmp.order = global;
    return tmp;
  }
}
const prototype = function OrderProcessingPendingError() {
  tmp = new tmp("Order signed but entitlements not yet visible after polling", new.target);
  // ThrowIfThisInitialized (0x7c)
  return tmp;
}.prototype;
class prototype extends tmp4 {
}
const tmp2 = new require("set")("OrderActionCreators");
let result = require("timestamp").fileFinishedImporting("modules/payments/OrderActionCreators.tsx");

export { OrderSigningFailedWithConstraintsError };
export const OrderProcessingPendingError = prototype;
export const signOrder = function signOrder(arg0) {
  const self = this;
  const apply = _signOrder.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const getOrder = function getOrder(outer1_0) {
  const self = this;
  const apply = _getOrder.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const fetchOrderEntitlements = function fetchOrderEntitlements(id) {
  const self = this;
  const apply = _fetchOrderEntitlements.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};