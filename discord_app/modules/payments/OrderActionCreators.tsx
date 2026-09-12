// discord_app/modules/payments/OrderActionCreators.tsx
import LoggerDefault from "../debug/Logger.tsx";
import HTTPUtils from "../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import BillingError from "../../errors/BillingError.tsx";

require = fn;
let closure_6 = async function _signOrder(arg0) {
  if (c6 === 2) {
    c6 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj = { value, done: true };
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
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_2 = tmp3;
          closure_1 = tmp7;
          closure_129_0 = undefined;
          closure_129_1 = undefined;
          closure_129_2 = undefined;
          ({ orderId: closure_129_0, expectedRevision: closure_129_1, loadId: closure_129_2 } = closure_0);
          closure_129_3 = undefined;
          closure_129_4 = undefined;
          c5 = 1;
          c6 = 1;
          return { value: "PX_16", done: true };
        }
      } else if (1 === tmp7) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj1 = { value, done: true };
          return obj1;
        } else {
          closure_129_4 = {};
          if (null != closure_129_1) {
            closure_129_4.expected_revision = closure_129_1;
          }
          c4 = 1;
          const HTTP = closure_130_0(closure_130_1[4]).HTTP;
          const request = {
            url: closure_130_3.ORDER_SIGN(closure_129_0),
            body: closure_129_4,
            context: null,
            rejectWithError: true,
          };
          let tmp45;
          if (null != closure_129_2) {
            if ("" !== closure_129_2) {
              const obj2 = { load_id: closure_129_2 };
              tmp45 = obj2;
            }
          }
          request.context = tmp45;
          c5 = 3;
          c6 = 1;
          const obj3 = { value: HTTP.post(request), done: false };
          return obj3;
        }
      } else if (2 === tmp7) {
        c4 = 0;
        closure_129_5 = closure_3;
        if (closure_129_5 instanceof closure_130_0(closure_130_1[4]).HTTPResponseError) {
          if (400 === closure_129_5.status) {
            if (
              (function isOrderShape(body) {
                let tmp = null != body && typeof body === "object";
                if (tmp) {
                  tmp = "id" in body;
                }
                if (tmp) {
                  tmp = "status" in body;
                }
                return tmp;
              })(closure_129_5.body)
            ) {
              throw new closure_130_5(closure_129_5.body);
            }
          }
        }
        throw closure_129_5;
      } else if (arg0 === 1) {
        c6 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 0;
        c6 = 3;
        const obj4 = { value, done: true };
        return obj4;
      } else {
        closure_129_3 = value;
        c4 = 0;
        if (null == closure_129_3.body) {
          const _Error = Error;
          const error = new Error("Invalid sign order response");
          throw error;
        } else {
          c6 = 3;
          obj = { value: closure_129_3.body, done: true };
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
};
let closure_7 = async function _getOrder(arg0) {
  if (c6 === 2) {
    c6 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj = { value, done: true };
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
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_2 = tmp3;
          closure_1 = tmp7;
          closure_129_0 = closure_0;
          c4 = 1;
          const HTTP = HTTPUtils.HTTP;
          const obj1 = { url: Endpoints.ORDER_GET(closure_0), rejectWithError: true };
          c5 = 2;
          c6 = 1;
          const obj2 = { value: HTTP.get(obj1), done: false };
          return obj2;
        }
      } else if (1 === tmp7) {
        c4 = 0;
        closure_129_1 = closure_3;
        let obj3 = { error: closure_129_1, orderId: closure_129_0 };
        closure_130_4.error("failed to fetch order", obj3);
        obj3 = closure_130_0(closure_130_1[5]);
        const obj4 = { tags: { source: "OrderActionCreators_getOrder" }, extra: null };
        const obj5 = { orderId: closure_129_0 };
        obj4.extra = obj5;
        const result = obj3.captureBillingException(closure_129_1, obj4);
        c6 = 3;
        return { value: null, done: true };
      } else if (arg0 === 1) {
        c6 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 0;
        c6 = 3;
        const obj6 = { value, done: true };
        return obj6;
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
  const apply = closure_9.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_9 = async function _fetchOrderEntitlements(arg0) {
  if (c5 === 2) {
    c5 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp5 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj = { value, done: true };
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
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_1 = tmp6;
          closure_129_0 = undefined;
          c4 = 1;
          const HTTP = HTTPUtils.HTTP;
          const obj1 = { url: Endpoints.ORDER_ENTITLEMENTS(closure_0), rejectWithError: false };
          c2 = 2;
          c5 = 1;
          const obj2 = { value: HTTP.get(obj1), done: false };
          return obj2;
        }
      } else if (1 === tmp6) {
        c4 = 0;
        c5 = 3;
        const obj3 = { value: [], done: true };
        return obj3;
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
          const items = [];
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
let closure_11 = async function _fetchOrderEntitlementsWithRetry(arg0) {
  if (c12 === 2) {
    c12 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp8 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj = { value, done: true };
      return obj;
    } else {
      return { value: "HermesInternal", done: null };
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
          obj = { value, done: true };
          return obj;
        } else {
          closure_8 = tmp4;
          closure_7 = tmp9;
          closure_135_0 = closure_0;
          closure_135_1 = undefined;
          closure_135_2 = undefined;
          closure_135_3 = undefined;
          c11 = 1;
          c12 = 1;
          let obj1 = { value: fetchOrderEntitlements(closure_0), done: false };
          return obj1;
        }
      } else {
        if (1 === tmp9) {
          if (arg0 === 1) {
            c12 = 3;
            throw value;
          } else if (arg0 === 2) {
            c12 = 3;
            let obj2 = { value, done: true };
            return obj2;
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
                  let obj = { value, done: true };
                  return obj;
                } else {
                  return { value: "HermesInternal", done: null };
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
                      obj = { value, done: true };
                      return obj;
                    } else {
                      closure_1 = tmp4;
                      if (length.length > 0) {
                        c3 = 3;
                        return { value: 1, done: true };
                      } else {
                        const promise = new Promise((arg0) => setTimeout(arg0, closure_0));
                        c2 = 1;
                        c3 = 1;
                        const obj1 = { value: promise, done: false };
                        return obj1;
                      }
                    }
                  } else if (1 === tmp4) {
                    if (arg0 === 1) {
                      c3 = 3;
                      throw value;
                    } else if (arg0 === 2) {
                      c3 = 3;
                      const obj2 = { value, done: true };
                      return obj2;
                    } else {
                      c2 = 2;
                      c3 = 1;
                      const obj3 = { value: closure_1_8(closure_129_0), done: false };
                      return obj3;
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
                    return { value: "HermesInternal", done: null };
                  }
                } catch (tmp16) {
                  c3 = tmp;
                  throw tmp16;
                }
              }
            };
            closure_2 = closure_136_10;
            closure_2 = closure_136_10;
            const length = closure_136_10[Symbol.iterator]();
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
            let obj3 = { value: closure_135_1, done: true };
            return obj3;
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
                  const obj4 = { value, done: true };
                  return obj4;
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
const Endpoints = fn(1074).Endpoints;
let closure_4 = new LoggerDefault("OrderActionCreators");
class OrderSigningFailedWithConstraintsError extends tmp3 {
  constructor(arg0) {
    tmp = new tmp("Order signing failed due to unsatisfied constraints", new.target);
    tmp.order = global;
    return tmp;
  }
}
const prototype = function OrderProcessingPendingError() {
  tmp = new tmp("Order signed but entitlements not yet visible after polling", new.target);
  return tmp;
}.prototype;
class prototype extends tmp4 {}
let closure_10 = [250, 500, 1000, 1500, 2500, 4250];
const size = fn(2);
let result = size.fileFinishedImporting("modules/payments/OrderActionCreators.tsx");

export { OrderSigningFailedWithConstraintsError };
export const OrderProcessingPendingError = prototype;
export const signOrder = function signOrder() {
  const self = this;
  const apply = closure_6.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const getOrder = function getOrder() {
  const self = this;
  const apply = closure_7.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export { fetchOrderEntitlements };
export const fetchOrderEntitlementsWithRetry = function fetchOrderEntitlementsWithRetry() {
  const self = this;
  const apply = closure_11.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
