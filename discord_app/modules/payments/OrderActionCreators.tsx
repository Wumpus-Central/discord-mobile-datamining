// === Module 7569: OrderActionCreators ===

// Module 7569 (OrderActionCreators)
import LoggerDefault from "Logger" /* 3 */;
import util from "util" /* 1112 */;
import HTTPUtils from "HTTPUtils" /* 1284 */;
import _modDef2450 from "module_2450" /* 2450 */;
import OrderSigningErrors from "OrderSigningErrors" /* 7570 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import BillingError_mod from "BillingError" /* 5763 */;

require = fn;
function isOrderShape(obj) {
  let tmp = null != obj && typeof obj === "object";
  if (tmp) {
    tmp = "id" in obj;
  }
  if (tmp) {
    tmp = "status" in obj;
  }
  return tmp;
}
function getOrderSigningConstraintsError(status) {
  let tmp = null;
  if (null != status) {
    tmp = null;
    if (typeof status === "object") {
      tmp = null;
      if ("status" in status) {
        tmp = null;
        if (400 === status.status) {
          tmp = null;
          if ("body" in status) {
            const body = status.body;
            let tmp2 = null != body && typeof body === "object";
            if (tmp2) {
              tmp2 = "id" in body;
            }
            if (tmp2) {
              tmp2 = "status" in body;
            }
            tmp = null;
            if (tmp2) {
              const body2 = status.body;
              if (typeof OrderSigningFailedWithConstraintsError === "function") {
                const unsatisfied_constraints = body2.unsatisfied_constraints;
                let someResult;
                if (unsatisfied_constraints != null) {
                  someResult = unsatisfied_constraints.some((reason_code) => reason_code.reason_code === constants.PURCHASE_RESTRICTED);
                }
                let orderSigningError = null;
                if (someResult) {
                  orderSigningError = OrderSigningErrors.getOrderSigningError(body2);
                }
                let str2;
                if (orderSigningError != null) {
                  str2 = orderSigningError.message;
                }
                if (str2 == null) {
                  str2 = "Order signing failed due to unsatisfied constraints";
                }
                let code;
                if (orderSigningError != null) {
                  code = orderSigningError.code;
                }
                if (code == null) {
                  code = (function getConstraintErrorCode(body2) {
                    let prop = body2.unsatisfied_constraints;
                    if (prop == null) {
                      prop = [];
                    }
                    for (const item10008 of prop) {
                      let tmp2 = closure_1_7[item10008.reason_code];
                      if (null != tmp2) {
                        obj.return();
                        return tmp2;
                      }
                    }
                    return null;
                  })(body2);
                }
                const tmp62 = new tmp6(str2, code, orderSigningError, tmp3, tmp6, str2, new.target, body2, code);
                tmp62.order = body2;
                tmp = tmp62;
              } else {
                throw new TypeError("Trying to call a non-function");
              }
            }
          }
        }
      }
    }
  }
  return tmp;
}
let closure_13 = async function _signOrder(arg0) {
  if (c7 === 2) {
    c7 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "HermesInternal", done: "HermesInternal" };
    }
  } else {
    try {
      c7 = 2;
      if (0 === c6) {
        if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c7 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_3 = tmp3;
          closure_2 = tmp7;
          closure_130_0 = undefined;
          closure_130_1 = undefined;
          closure_130_2 = undefined;
          closure_130_3 = undefined;
          closure_130_4 = undefined;
          ({ orderId: closure_130_0, expectedRevision: closure_130_1, loadId: closure_130_2, purchaseToken: closure_130_3, gatewayCheckoutContext: closure_130_4 } = closure_0);
          closure_130_5 = undefined;
          closure_130_6 = undefined;
          c6 = 1;
          c7 = 1;
          return { value: "Path", done: true };
        }
      } else if (1 === tmp7) {
        if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c7 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          closure_130_6 = {};
          if (null != closure_130_1) {
            closure_130_6.expected_revision = closure_130_1;
          }
          if (null != closure_130_3) {
            closure_130_6.purchase_token = closure_130_3;
          }
          if (null != closure_130_4) {
            closure_130_6.gateway_checkout_context = closure_130_4;
          }
          c5 = 1;
          const HTTP = closure_131_0(closure_131_2[8]).HTTP;
          const request = { url: closure_131_5.ORDER_SIGN(closure_130_0), body: closure_130_6, context: null, rejectWithError: true };
          let tmp62;
          if (null != closure_130_2) {
            if ("" !== closure_130_2) {
              const obj5 = { load_id: closure_130_2 };
              tmp62 = obj5;
            }
          }
          request.context = tmp62;
          c6 = 3;
          c7 = 1;
          const obj6 = { value: HTTP.post(request), done: false };
          return obj6;
        }
      } else if (2 === tmp7) {
        c5 = 0;
        closure_130_7 = closure_4;
        if (closure_130_7 instanceof closure_131_0(closure_131_2[8]).HTTPResponseError) {
          if (409 === closure_130_7.status) {
            if (closure_131_11(closure_130_7.body)) {
              throw new closure_131_9(closure_130_7.body);
            }
          }
        }
        const tmp32 = closure_131_12(closure_130_7);
        closure_1 = tmp32;
        if (tmp32 == null) {
          closure_1 = closure_130_7;
        }
        throw closure_1;
      } else if (arg0 === 1) {
        c7 = 3;
        throw value;
      } else if (arg0 === 2) {
        c5 = 0;
        c7 = 3;
        const obj7 = { value, done: true };
        return obj7;
      } else {
        closure_130_5 = value;
        c5 = 0;
        if (null == closure_130_5.body) {
          throw new closure_131_10();
        } else {
          c7 = 3;
          obj = { value: closure_130_5.body, done: true };
          return obj;
        }
      }
    } catch (tmp67) {
      closure_4 = tmp67;
      if (tmp4 === c5) {
        c7 = tmp2;
        throw tmp67;
      } else {
        c6 = tmp;
      }
    }
  }
};
let closure_14 = async function _getOrder(arg0) {
  if (c6 === 2) {
    c6 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "HermesInternal", done: "HermesInternal" };
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
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_2 = tmp3;
          closure_1 = tmp7;
          closure_129_0 = closure_0;
          c4 = 1;
          const HTTP = HTTPUtils.HTTP;
          const obj4 = { url: Endpoints.ORDER_GET(closure_0), rejectWithError: true };
          c5 = 2;
          c6 = 1;
          const obj5 = { value: HTTP.get(obj4), done: false };
          return obj5;
        }
      } else if (1 === tmp7) {
        c4 = 0;
        closure_129_1 = closure_3;
        const obj6 = { error: closure_129_1, orderId: closure_129_0 };
        closure_130_6.error("failed to fetch order", obj6);
        const ClientBillingError = closure_130_0(closure_130_2[9]).ClientBillingError;
        const obj7 = { site: "order_fetch", extra: null };
        const obj8 = { orderId: closure_129_0 };
        obj7.extra = obj8;
        ClientBillingError.report(obj7, closure_129_1);
        c6 = 3;
        return { value: null, done: true };
      } else if (arg0 === 1) {
        c6 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 0;
        c6 = 3;
        const obj9 = { value, done: true };
        return obj9;
      } else {
        let body = value.body;
        if (!body) {
          body = null;
        }
        c4 = 0;
        c6 = 3;
        obj = { value: body, done: true };
        return obj;
      }
    } catch (tmp26) {
      closure_3 = tmp26;
      if (tmp4 === c4) {
        c6 = tmp2;
        throw tmp26;
      } else {
        c5 = tmp;
      }
    }
  }
};
function fetchOrderEntitlements() {
  const self = this;
  const apply = closure_16.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_16 = async function _fetchOrderEntitlements(arg0) {
  if (c5 === 2) {
    c5 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp5 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "HermesInternal", done: "HermesInternal" };
    }
  } else {
    try {
      c5 = 2;
      if (0 === c2) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_1 = tmp6;
          closure_129_0 = undefined;
          c4 = 1;
          const HTTP = HTTPUtils.HTTP;
          const obj4 = { url: Endpoints.ORDER_ENTITLEMENTS(closure_0), rejectWithError: false };
          c2 = 2;
          c5 = 1;
          const obj5 = { value: HTTP.get(obj4), done: false };
          return obj5;
        }
      } else if (1 === tmp6) {
        c4 = 0;
        c5 = 3;
        const obj6 = { value: [], done: true };
        return obj6;
      } else if (arg0 === 1) {
        c5 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 0;
        c5 = 3;
        obj = { value, done: true };
        return obj;
      } else {
        closure_129_0 = value;
        if (null != closure_129_0.body) {
          const body = closure_129_0.body;
        } else {
          items = [];
        }
        c4 = 0;
        c5 = 3;
      }
    } catch (tmp16) {
      closure_3 = tmp16;
      if (tmp3 === c4) {
        c5 = tmp2;
        throw tmp16;
      } else {
        c2 = tmp;
      }
    }
  }
};
let closure_18 = async function _fetchOrderEntitlementsWithRetry(arg0) {
  if (c12 === 2) {
    c12 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp8 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "HermesInternal", done: "HermesInternal" };
    }
  } else {
    try {
      c12 = 2;
      if (0 === c11) {
        if (arg0 === 1) {
          c12 = 3;
          throw value;
        } else if (arg0 === 2) {
          c12 = 3;
          let obj3 = { value, done: true };
          return obj3;
        } else {
          closure_8 = tmp4;
          closure_7 = tmp9;
          closure_135_0 = closure_0;
          closure_135_1 = undefined;
          closure_135_2 = undefined;
          closure_135_3 = undefined;
          c11 = 1;
          c12 = 1;
          let obj4 = { value: fetchOrderEntitlements(closure_0), done: false };
          return obj4;
        }
      } else {
        if (1 === tmp9) {
          if (arg0 === 1) {
            c12 = 3;
            throw value;
          } else if (arg0 === 2) {
            c12 = 3;
            let obj5 = { value, done: true };
            return obj5;
          } else {
            closure_135_1 = value;
            closure_135_2 = async function _loop(arg0) {
              if (c3 === 2) {
                c3 = 3;
                throw new TypeError("Generator functions may not be called on executing generators");
              } else if (tmp3 === 3) {
                if (arg0 === 1) {
                  throw value;
                } else if (arg0 === 2) {
                  const obj2 = { value, done: true };
                  return obj2;
                } else {
                  return { value: "HermesInternal", done: "HermesInternal" };
                }
              } else {
                try {
                  c3 = 2;
                  if (0 === c2) {
                    if (arg0 === 1) {
                      c3 = 3;
                      throw value;
                    } else if (arg0 === 2) {
                      c3 = 3;
                      const obj3 = { value, done: true };
                      return obj3;
                    } else {
                      closure_1 = tmp4;
                      if (length.length > 0) {
                        c3 = 3;
                        return { value: 1, done: true };
                      } else {
                        const promise = new Promise((arg0) => setTimeout(arg0, closure_0));
                        c2 = 1;
                        c3 = 1;
                        const obj4 = { value: promise, done: false };
                        return obj4;
                      }
                    }
                  } else if (1 === tmp4) {
                    if (arg0 === 1) {
                      c3 = 3;
                      throw value;
                    } else if (arg0 === 2) {
                      c3 = 3;
                      const obj5 = { value, done: true };
                      return obj5;
                    } else {
                      c2 = 2;
                      c3 = 1;
                      const obj6 = { value: closure_1_15(closure_129_0), done: false };
                      return obj6;
                    }
                  } else if (arg0 === 1) {
                    c3 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c3 = 3;
                    obj = { value, done: true };
                    return obj;
                  } else {
                    closure_129_1 = value;
                    c3 = 3;
                    return { value: "HermesInternal", done: "HermesInternal" };
                  }
                } catch (tmp16) {
                  c3 = tmp;
                  throw tmp16;
                }
              }
            };
            closure_2 = closure_136_17;
            closure_2 = closure_136_17;
            length = closure_136_17[Symbol.iterator]();
            if (length !== undefined) {
              c9 = 1;
              closure_135_3 = tmp35;
              const iter4 = closure_135_2(closure_135_3)[tmp52.iterator]();
              HermesBuiltin.ensureObject("iterator is not an object");
              const next = iter4.next;
              closure_3 = undefined;
              const tmp60 = closure_135_2(closure_135_3);
            }
            c12 = 3;
            let obj6 = { value: closure_135_1, done: true };
            return obj6;
          }
        } else if (2 === tmp9) {
          c9 = 0;
          length.return();
          throw closure_10;
        } else {
          if (3 === tmp9) {
            c9 = 2;
            if (arg0 === 1) {
              c12 = 3;
              throw value;
            } else {
              closure_3 = value;
              if (arg0 === 2) {
                closure_3 = value;
                c9 = 1;
                const method = HermesBuiltin.getMethod("return");
                if (method === undefined) {
                  c9 = 0;
                  length.return();
                  c12 = 3;
                  const obj7 = { value, done: true };
                  return obj7;
                } else {
                  const iter2 = method(closure_3);
                  HermesBuiltin.ensureObject("iterator.return() did not return an object");
                  if (iter2.done) {
                    c9 = 0;
                    length.return();
                    c12 = 3;
                    obj = { value: iter2.value, done: true };
                    return obj;
                  } else {
                    c11 = 3;
                    c12 = 1;
                    return iter2;
                  }
                }
              } else {
                c9 = 1;
                const tmp21 = value;
              }
            }
          } else {
            c9 = 1;
            const method1 = HermesBuiltin.getMethod("throw");
            if (method1 === undefined) {
              const method2 = HermesBuiltin.getMethod("return");
              if (method2 !== undefined) {
                HermesBuiltin.ensureObject("iterator.return() did not return an object");
              }
              throw new TypeError("yield* delegate must have a .throw() method");
            } else {
              const iter = method1(tmp11);
              HermesBuiltin.ensureObject("iterator.throw() did not return an object");
              if (iter.done) {
                let iter3 = iter;
              } else {
                c11 = 3;
                c12 = 1;
                return iter;
              }
            }
            tmp11 = closure_10;
          }
          c9 = 0;
          if (iter3.value) {
            length.return();
          }
        }
        iter3 = next(tmp21);
        HermesBuiltin.ensureObject("iterator.next() did not return an object");
        if (!iter3.done) {
          c11 = 3;
          c12 = 1;
          return iter3;
        }
      }
    } catch (tmp45) {
      closure_10 = tmp45;
      if (tmp5 === c9) {
        c12 = tmp3;
        throw tmp45;
      } else if (tmp2 === tmp47) {
        c11 = tmp;
      } else {
        c11 = tmp6;
      }
    }
  }
};
const ConstraintReasonCode = fn(7568).ConstraintReasonCode;
const Endpoints = fn(1071).Endpoints;
let closure_6 = new LoggerDefault("OrderActionCreators");
let obj = { [SPENDING_LIMIT_REACHED]: fn(5763).ErrorCodes.BILLING_SPENDING_LIMIT_REACHED, [SPENDING_LIMIT_WILL_EXCEED]: fn(5763).ErrorCodes.BILLING_SPENDING_LIMIT_WILL_EXCEED };
({ SPENDING_LIMIT_REACHED, SPENDING_LIMIT_WILL_EXCEED } = ConstraintReasonCode);
let BillingError = BillingError_mod;
class OrderSigningFailedWithConstraintsError extends tmp3 {
  constructor(arg0) {
    unsatisfied_constraints = global.unsatisfied_constraints;
    someResult = undefined;
    if (unsatisfied_constraints != null) {
      someResult = unsatisfied_constraints.some((reason_code) => reason_code.reason_code === constants.PURCHASE_RESTRICTED);
    }
    orderSigningError = null;
    if (someResult) {
      tmp3 = closure_0;
      tmp4 = closure_2;
      obj = closure_0(closure_2[5]);
      orderSigningError = obj.getOrderSigningError(global);
    }
    str = undefined;
    if (orderSigningError != null) {
      str = orderSigningError.message;
    }
    if (str == null) {
      str = "Order signing failed due to unsatisfied constraints";
    }
    code = undefined;
    if (orderSigningError != null) {
      code = orderSigningError.code;
    }
    if (code == null) {
      num = 0;
      code = (function getConstraintErrorCode(body2) {
        let prop = body2.unsatisfied_constraints;
        if (prop == null) {
          prop = [];
        }
        for (const item10008 of prop) {
          let tmp2 = closure_1_7[item10008.reason_code];
          if (null != tmp2) {
            obj.return();
            return tmp2;
          }
        }
        return null;
      })(global);
    }
    unsatisfied_constraints1 = new unsatisfied_constraints(str, code, unsatisfied_constraints);
    unsatisfied_constraints1.order = global;
    return unsatisfied_constraints1;
  }
}
class OrderSigningOrderChangedError extends OrderSigningFailedWithConstraintsError {
  constructor(arg0) {
    unsatisfied_constraints = global.unsatisfied_constraints;
    someResult = undefined;
    if (unsatisfied_constraints != null) {
      someResult = unsatisfied_constraints.some((name) => "order_hydration_drift.storefront_promotions_unchanged" === name.name);
    }
    tmp4 = new OrderSigningOrderChangedError(global, tmp2, tmp);
    tmp5 = closure_2;
    intl = closure_0(closure_2[6]).intl;
    if (true === someResult) {
      tmp8 = closure_1;
      vfMgld = closure_1(tmp5[7]).vfMgld;
    } else {
      tmp6 = closure_1;
      vfMgld = closure_1(tmp5[7])["Wq++Jf"];
    }
    tmp4.message = intl.string(vfMgld);
    return tmp4;
  }
}
let BillingError = BillingError_mod;
const prototype = function OrderProcessingPendingError() {
  const tmp2 = new tmp("Order signed but entitlements not yet visible after polling", new.target);
  tmp2.name = "OrderProcessingPending";
  return tmp2;
}.prototype;
class prototype extends tmp4 {
}
const prototype2 = function InvalidOrderResponseError() {
  const tmp2 = new tmp("Invalid order response", new.target);
  tmp2.name = "InvalidOrderResponse";
  return tmp2;
}.prototype;
class prototype2 extends Error {
}
let closure_17 = [250, 500, 1000, 1500, 2500, 4250];
const size = fn(2);
const result = size.fileFinishedImporting("modules/payments/OrderActionCreators.tsx");

export { OrderSigningFailedWithConstraintsError };
export { OrderSigningOrderChangedError };
export const OrderProcessingPendingError = prototype;
export const InvalidOrderResponseError = prototype2;
export { getOrderSigningConstraintsError };
export function signOrder() {
  const self = this;
  const apply = closure_13.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
export function getOrder() {
  const self = this;
  const apply = closure_14.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
export { fetchOrderEntitlements };
export function fetchOrderEntitlementsWithRetry() {
  const self = this;
  const apply = closure_18.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}