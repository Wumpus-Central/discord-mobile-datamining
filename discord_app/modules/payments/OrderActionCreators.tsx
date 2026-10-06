// === Module 6755: OrderActionCreators ===

// Module 6755 (OrderActionCreators)
import LoggerDefault from "Logger" /* 3 */;
import Constants from "Constants" /* 1085 */;
import HTTPUtils from "HTTPUtils" /* 1282 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import BillingError_mod from "BillingError" /* 4556 */;
import size from "module_2" /* 2 */;

let c11, c12, length;

let obj = function _signOrder() {
  obj = _asyncToGenerator(async function(arg0) {
    let c0;
    let c1;
    let c2;
    let c3;
    let tmp44;
    function isOrderShape(body) {
      return null != body && typeof body === "object" && "id" in body && "status" in body;
    }
    let closure_0 = arg0;
    if (c6 === 2) {
      c6 = 3;
      const str2 = "Generator functions may not be called on executing generators";
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c4;
      try {
        let expected_revision;
        let load_id;
        let purchase_token;
        let body;
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
            let closure_2 = tmp;
            let closure_1 = tmp4;
            c0 = undefined;
            expected_revision = undefined;
            load_id = undefined;
            purchase_token = undefined;
            ({ orderId: c0, expectedRevision: c1, loadId: c2, purchaseToken: c3 } = closure_0);
            closure_4 = undefined;
            body = undefined;
            c5 = 1;
            c6 = 1;
            return { value: "Reflect", done: true };
          }
        } else if (1 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            body = {};
            if (null != expected_revision) {
              body.expected_revision = expected_revision;
            }
            if (null != purchase_token) {
              body.purchase_token = purchase_token;
            }
            c4 = 1;
            const HTTP = closure_130_0(closure_130_1[4]).HTTP;
            const request = { url: closure_130_3.ORDER_SIGN(c0), body, context: tmp44, rejectWithError: true };
            const post = HTTP.post;
            tmp44 = undefined;
            if (null != load_id) {
              if ("" !== load_id) {
                const obj5 = { load_id };
                tmp44 = obj5;
              }
            }
            c5 = 3;
            c6 = 1;
            const obj6 = { value: post(request), done: false };
            return obj6;
          }
        } else if (2 === c5) {
          c4 = 0;
          let closure_6 = closure_3;
          if (closure_6 instanceof closure_130_0(closure_130_1[4]).HTTPResponseError) {
            if (400 === closure_6.status) {
              if (isOrderShape(closure_6.body)) {
                const self3 = this;
                throw new closure_130_5(closure_6.body);
              }
            }
          }
          throw closure_6;
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 0;
          c6 = 3;
          const obj7 = { value, done: true };
          return obj7;
        } else {
          closure_4 = value;
          c4 = 0;
          if (null == closure_4.body) {
            const _Error = Error;
            const self = this;
            const self2 = this;
            const str = "Invalid sign order response";
            const error = new Error("Invalid sign order response");
            throw error;
          } else {
            c6 = 3;
            obj = { value: closure_4.body, done: true };
            return obj;
          }
        }
      } catch (tmp49) {
        closure_3 = tmp49;
        if (0 === c4) {
          c6 = 3;
          throw tmp49;
        } else {
          c5 = 2;
        }
      }
    }
  });
  return obj(...arguments);
};
obj = function _getOrder() {
  obj = _asyncToGenerator(async (orderId) => {
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
    return (async (arg0) => {
      let obj9;
      if (c6 === 2) {
        c6 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
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
              return { value, done: true };
            } else {
              closure_2 = tmp;
              error = tmp4;
              c4 = 1;
              const HTTP = HTTPUtils.HTTP;
              const get = HTTP.get;
              c5 = 2;
              c6 = 1;
              const obj5 = { url: Endpoints.ORDER_GET(orderId), rejectWithError: true };
              const obj6 = { value: get(obj5), done: false };
              return obj6;
            }
          } else if (1 === c5) {
            c4 = 0;
            error = closure_3;
            const obj7 = { error, orderId };
            closure_130_4.error("failed to fetch order", obj7);
            const obj8 = { tags: { source: "OrderActionCreators_getOrder" }, extra: obj9 };
            obj9 = { orderId };
            const obj4 = closure_130_0(closure_130_1[5]);
            const result = obj4.captureBillingException(error, obj8);
            c6 = 3;
            return { value: null, done: true };
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            return { value, done: true };
          } else {
            const body = value.body || null;
            c4 = 0;
            c6 = 3;
            return { value: body, done: true };
          }
        } catch (tmp23) {
          closure_3 = tmp23;
          if (0 === c4) {
            c6 = 3;
            throw tmp23;
          } else {
            c5 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
function fetchOrderEntitlements() {
  return obj(...arguments);
}
obj = function _fetchOrderEntitlements() {
  obj = _asyncToGenerator(async (arg0) => {
    let closure_0 = arg0;
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c4;
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
            let closure_1 = tmp3;
            closure_0 = undefined;
            c4 = 1;
            const HTTP = HTTPUtils.HTTP;
            const obj4 = { url: Endpoints.ORDER_ENTITLEMENTS(closure_0), rejectWithError: false };
            const get = HTTP.get;
            c2 = 2;
            c5 = 1;
            const obj5 = { value: get(obj4), done: false };
            return obj5;
          }
        } else if (1 === c2) {
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
          const obj7 = { value, done: true };
          return obj7;
        } else {
          let body;
          closure_0 = value;
          if (null != closure_0.body) {
            body = closure_0.body;
          } else {
            body = [];
          }
          c4 = 0;
          c5 = 3;
          obj = { value: body, done: true };
          return obj;
        }
      } catch (tmp13) {
        let closure_3 = tmp13;
        if (0 === c4) {
          c5 = 3;
          throw tmp13;
        } else {
          c2 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
obj = function _fetchOrderEntitlementsWithRetry() {
  obj = _asyncToGenerator(async (arg0) => {
    let value;
    let closure_0 = arg0;
    if (c12 === 2) {
      c12 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c9;
      try {
        let _loop;
        let c3;
        c12 = 2;
        const tmp4 = c11;
        if (0 === c11) {
          if (arg0 === 1) {
            c12 = 3;
            throw value;
          } else if (arg0 === 2) {
            c12 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_8 = tmp;
            let closure_7 = tmp4;
            value = undefined;
            _loop = undefined;
            c3 = undefined;
            c11 = 1;
            c12 = 1;
            let obj4 = { value: fetchOrderEntitlements(closure_0), done: false };
            return obj4;
          }
        } else {
          let next;
          let tmp16;
          let iter3;
          if (1 === tmp4) {
            if (arg0 === 1) {
              c12 = 3;
              throw value;
            } else if (arg0 === 2) {
              c12 = 3;
              const obj5 = { value, done: true };
              return obj5;
            } else {
              _loop = function _loop(c3) {
                closure_0 = c3;
                let c2 = 0;
                c3 = 0;
                return (function* _loop(arg0) {
                  if (c3 === 2) {
                    c3 = 3;
                    throw new TypeError("Generator functions may not be called on executing generators");
                  } else if (tmp2 === 3) {
                    if (arg0 === 1) {
                      throw value;
                    } else if (arg0 === 2) {
                      return { value, done: true };
                    } else {
                      return { value: "IconComponent", done: null };
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
                          return { value, done: true };
                        } else {
                          length = tmp3;
                          if (length.length > 0) {
                            c3 = 3;
                            return { value: 1, done: true };
                          } else {
                            const self = this;
                            const self2 = this;
                            c2 = 1;
                            c3 = 1;
                            const obj4 = { value: new Promise((arg0) => setTimeout(arg0, closure_0)), done: false };
                            return obj4;
                          }
                        }
                      } else if (1 === c2) {
                        if (arg0 === 1) {
                          c3 = 3;
                          throw value;
                        } else if (arg0 === 2) {
                          c3 = 3;
                          return { value, done: true };
                        } else {
                          c2 = 2;
                          c3 = 1;
                          const obj6 = { value: closure_1_8(closure_0), done: false };
                          return obj6;
                        }
                      } else if (arg0 === 1) {
                        c3 = 3;
                        throw value;
                      } else if (arg0 === 2) {
                        c3 = 3;
                        return { value, done: true };
                      } else {
                        length = value;
                        c3 = 3;
                        return { value: "IconComponent", done: null };
                      }
                    } catch (tmp13) {
                      c3 = 3;
                      throw tmp13;
                    }
                  }
                })();
              };
              let closure_2 = closure_136_10;
              value = closure_136_10[Symbol.iterator]();
              if (value !== undefined) {
                c9 = 1;
                c3 = tmp30;
                const tmp54 = _loop(c3);
                const iter4 = tmp54[tmp46.iterator]();
                HermesBuiltin.ensureObject("iterator is not an object");
                next = iter4.next;
                c3 = undefined;
              }
              c12 = 3;
              let obj6 = { value, done: true };
              return obj6;
            }
          } else if (2 === tmp4) {
            c9 = 0;
            value.return();
            throw closure_10;
          } else {
            if (3 === tmp4) {
              c9 = 2;
              if (arg0 === 1) {
                c12 = 3;
                throw value;
              } else {
                c3 = value;
                if (arg0 === 2) {
                  c3 = value;
                  c9 = 1;
                  const method = HermesBuiltin.getMethod("return");
                  if (method === undefined) {
                    c9 = 0;
                    value.return();
                    c12 = 3;
                    const obj7 = { value, done: true };
                    return obj7;
                  } else {
                    const iter2 = method(c3);
                    HermesBuiltin.ensureObject("iterator.return() did not return an object");
                    if (iter2.done) {
                      c9 = 0;
                      value = iter2.value;
                      value.return();
                      c12 = 3;
                      obj = { value, done: true };
                      return obj;
                    } else {
                      c11 = 3;
                      c12 = 1;
                      return iter2;
                    }
                  }
                } else {
                  c9 = 1;
                  tmp16 = value;
                }
              }
            } else {
              c9 = 1;
              const str = "throw";
              const method1 = HermesBuiltin.getMethod("throw");
              const tmp6 = closure_10;
              if (method1 === undefined) {
                const method2 = HermesBuiltin.getMethod("return");
                if (method2 !== undefined) {
                  HermesBuiltin.ensureObject("iterator.return() did not return an object");
                }
                throw new TypeError("yield* delegate must have a .throw() method");
              } else {
                const iter = method1(tmp6);
                HermesBuiltin.ensureObject("iterator.throw() did not return an object");
                if (iter.done) {
                  iter3 = iter;
                } else {
                  c11 = 3;
                  c12 = 1;
                  return iter;
                }
              }
            }
            c9 = 0;
            if (iter3.value) {
              value.return();
            }
          }
          iter3 = next(tmp16);
          HermesBuiltin.ensureObject("iterator.next() did not return an object");
          if (!iter3.done) {
            c11 = 3;
            c12 = 1;
            return iter3;
          }
        }
      } catch (tmp40) {
        closure_10 = tmp40;
        if (0 === c9) {
          c12 = 3;
          throw tmp40;
        } else if (1 === tmp42) {
          c11 = 2;
        } else {
          c11 = 4;
        }
      }
    }
  });
  return obj(...arguments);
};
const Endpoints = Constants.Endpoints;
let tmp2 = new LoggerDefault("OrderActionCreators");
let closure_4 = tmp2;
let BillingError = BillingError_mod;
class OrderSigningFailedWithConstraintsError extends BillingError {
  constructor(order) {
    const tmp2 = new tmp("Order signing failed due to unsatisfied constraints", new.target);
    tmp2.order = order;
    return tmp2;
  }
}
BillingError = BillingError_mod;
class OrderProcessingPendingError extends BillingError {
  constructor() {
    const tmp2 = new tmp("Order signed but entitlements not yet visible after polling", new.target);
    return tmp2;
  }
}
let closure_10 = [250, 500, 1000, 1500, 2500, 4250];
let result = size.fileFinishedImporting("modules/payments/OrderActionCreators.tsx");

export { OrderSigningFailedWithConstraintsError };
export { OrderProcessingPendingError };
export const signOrder = function signOrder() {
  return obj(...arguments);
};
export const getOrder = function getOrder() {
  return obj(...arguments);
};
export { fetchOrderEntitlements };
export const fetchOrderEntitlementsWithRetry = function fetchOrderEntitlementsWithRetry() {
  return obj(...arguments);
};