// === Module 6058: _signOrder ===

// Module 6058 (_signOrder)
import timestampDefault from "timestamp" /* 3 */;
import setDefault from "set" /* 4131 */;
import closure_2 from "asyncGeneratorStep" /* 5 */;
import { Endpoints } from "ME" /* 676 */;

const require = arg1;
function _signOrder() {
  const self = this;
  let tmp = callback((arg0) => {
    closure_0 = arg0;
    c5 = 0;
    c6 = 0;
    c4 = 0;
    const iter = (function*(arg0) {
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
              c2 = tmp3;
              dependencyMap = tmp7;
              let callback;
              dependencyMap = undefined;
              c2 = undefined;
              ({ orderId: c0, expectedRevision: c1, loadId: c2 } = callback);
              closure_3 = undefined;
              c4 = undefined;
              c5 = 1;
              c6 = 1;
              return { value: "Object", done: true };
            }
          } else if (1 === tmp7) {
            if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              obj1 = { value: null, done: true };
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
              error = new Error("Invalid sign order response");
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
  closure_6 = tmp;
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
    closure_0 = arg0;
    c5 = 0;
    c6 = 0;
    c4 = 0;
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
          return { value: "HermesInternal", done: "HermesInternal" };
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
              closure_2 = tmp3;
              let table = tmp7;
              let logger = 1;
              const HTTP = callback(closure_1_1[4]).HTTP;
              obj1 = { url: null, rejectWithError: true };
              obj1[0] = closure_1_3.ORDER_GET(callback);
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
  closure_7 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function fetchOrderEntitlements() {
  const self = this;
  const apply = _fetchOrderEntitlements.apply;
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
    closure_0 = arg0;
    c2 = 0;
    c5 = 0;
    c4 = 0;
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
          return { value: "HermesInternal", done: "HermesInternal" };
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
              closure_1 = tmp6;
              let lib;
              c4 = 1;
              const HTTP = lib(closure_1_1[4]).HTTP;
              obj1 = { url: null, rejectWithError: false };
              obj1[0] = closure_1_3.ORDER_ENTITLEMENTS(lib);
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
          closure_3 = tmp16;
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
  closure_9 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _fetchOrderEntitlementsWithRetry() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c11 = 0;
    c12 = 0;
    c9 = 0;
    return (function*(arg0) {
      if (c12 === 2) {
        c12 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp8 === 3) {
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
          c12 = 2;
          if (0 === c11) {
            if (arg0 === 1) {
              c12 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c12 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_8 = tmp4;
              closure_7 = tmp9;
              closure_1 = undefined;
              let callback;
              closure_3 = undefined;
              c11 = 1;
              c12 = 1;
              obj1 = { value: null, done: false };
              obj1[0] = closure_1_8(closure_0);
              return obj1;
            }
          } else {
            if (1 === tmp9) {
              if (arg0 === 1) {
                c12 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c12 = 3;
                let obj2 = { value: null, done: true };
                obj2[0] = arg1;
                return obj2;
              } else {
                closure_1 = arg1;
                callback = function _loop(arg0) {
                  closure_0 = arg0;
                  c2 = 0;
                  c3 = 0;
                  return (function* _loop(arg0) {
                    if (c3 === 2) {
                      c3 = 3;
                      HermesBuiltin.throwTypeError();
                    } else if (tmp3 === 3) {
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
                        c3 = 2;
                        if (0 === c2) {
                          if (arg0 === 1) {
                            c3 = 3;
                            throw arg1;
                          } else if (arg0 === 2) {
                            c3 = 3;
                            obj = { value: null, done: true };
                            obj[0] = arg1;
                            return obj;
                          } else {
                            closure_1 = tmp4;
                            if (closure_1_1.length > 0) {
                              c3 = 3;
                              return { value: 1, done: true };
                            } else {
                              const promise = new Promise(() => { ... });
                              c2 = 1;
                              c3 = 1;
                              obj1 = { value: null, done: false };
                              obj1[0] = promise;
                              return obj1;
                            }
                          }
                        } else if (1 === tmp4) {
                          if (arg0 === 1) {
                            c3 = 3;
                            throw arg1;
                          } else if (arg0 === 2) {
                            c3 = 3;
                            const obj2 = { value: null, done: true };
                            obj2[0] = arg1;
                            return obj2;
                          } else {
                            c2 = 2;
                            c3 = 1;
                            const obj3 = { value: null, done: false };
                            obj3[0] = closure_1_8(closure_0);
                            return obj3;
                          }
                        } else if (arg0 === 1) {
                          c3 = 3;
                          throw arg1;
                        } else if (arg0 === 2) {
                          c3 = 3;
                          obj = { value: null, done: true };
                          obj[0] = arg1;
                          return obj;
                        } else {
                          closure_1 = arg1;
                          c3 = 3;
                          return { value: "HermesInternal", done: "HermesInternal" };
                        }
                      } catch (tmp16) {
                        c3 = tmp;
                        throw tmp16;
                      }
                    }
                  })();
                };
                callback = dependencyMap;
                callback = dependencyMap;
                closure_1 = dependencyMap[Symbol.iterator]();
                if (closure_1 !== undefined) {
                  c9 = 1;
                  closure_3 = tmp36;
                  const iter4 = callback(closure_3)[tmp54.iterator]();
                  HermesBuiltin.ensureObject("iterator is not an object");
                  const next = iter4.next;
                  closure_3 = undefined;
                  const tmp62 = callback(closure_3);
                }
                c12 = 3;
                let obj3 = { value: null, done: true };
                obj3[0] = closure_1;
                return obj3;
              }
            } else if (2 === tmp9) {
              c9 = 0;
              closure_1.return();
              throw dependencyMap;
            } else {
              if (3 !== tmp9) {
                c9 = 1;
                const method = HermesBuiltin.getMethod("throw");
                if (method === undefined) {
                  const method1 = HermesBuiltin.getMethod("return");
                  if (method1 !== undefined) {
                    HermesBuiltin.ensureObject("iterator.return() did not return an object");
                  }
                  HermesBuiltin.throwTypeError();
                } else {
                  const iter = method(tmp11);
                  HermesBuiltin.ensureObject("iterator.throw() did not return an object");
                  if (iter.done) {
                    let iter3 = iter;
                  } else {
                    c11 = 3;
                    c12 = 1;
                    return iter;
                  }
                }
                c9 = 0;
                if (iter3.value) {
                  closure_1.return();
                }
                tmp11 = dependencyMap;
              }
              c9 = 2;
              if (arg0 === 1) {
                c12 = 3;
                throw arg1;
              } else {
                closure_3 = arg1;
                if (arg0 === 2) {
                  closure_3 = arg1;
                  c9 = 1;
                  const method2 = HermesBuiltin.getMethod("return");
                  if (method2 === undefined) {
                    c9 = 0;
                    closure_1.return();
                    c12 = 3;
                    const obj4 = { value: null, done: true };
                    obj4[0] = arg1;
                    return obj4;
                  } else {
                    const iter2 = method2(closure_3);
                    HermesBuiltin.ensureObject("iterator.return() did not return an object");
                    if (iter2.done) {
                      c9 = 0;
                      closure_1.return();
                      c12 = 3;
                      obj = { value: null, done: true };
                      obj[0] = iter2.value;
                      return obj;
                    } else {
                      c11 = 3;
                      c12 = 1;
                      return iter2;
                    }
                  }
                } else {
                  c9 = 1;
                  const tmp22 = arg1;
                }
              }
            }
            iter3 = next(tmp22);
            HermesBuiltin.ensureObject("iterator.next() did not return an object");
            if (!iter3.done) {
              c11 = 3;
              c12 = 1;
              return iter3;
            }
          }
        } catch (tmp46) {
          dependencyMap = tmp46;
          if (tmp5 === c9) {
            c12 = tmp3;
            throw tmp46;
          } else if (tmp2 === tmp48) {
            c11 = tmp;
          } else {
            c11 = tmp6;
          }
        }
      }
    })();
  });
  closure_11 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_4 = new timestampDefault("OrderActionCreators");
setDefault;
class OrderSigningFailedWithConstraintsError extends tmp3 {
  constructor(arg0) {
    tmp = new tmp("Order signing failed due to unsatisfied constraints", new.target);
    // ThrowIfThisInitialized (0x7c)
    tmp.order = global;
    return tmp;
  }
}
setDefault;
const prototype = function OrderProcessingPendingError() {
  tmp = new tmp("Order signed but entitlements not yet visible after polling", new.target);
  // ThrowIfThisInitialized (0x7c)
  return tmp;
}.prototype;
class prototype extends tmp4 {
}
let closure_10 = [250, 500, 1000, 1500, 2500, 4250];
const tmp2 = new timestampDefault("OrderActionCreators");
let result = require("set").fileFinishedImporting("modules/payments/OrderActionCreators.tsx");

export { OrderSigningFailedWithConstraintsError };
export const OrderProcessingPendingError = prototype;
export const signOrder = function signOrder(arg0, items2) {
  const self = this;
  const apply = _signOrder.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const getOrder = function getOrder(closure_0) {
  const self = this;
  const apply = _getOrder.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export { fetchOrderEntitlements };
export const fetchOrderEntitlementsWithRetry = function fetchOrderEntitlementsWithRetry(id) {
  const self = this;
  const apply = _fetchOrderEntitlementsWithRetry.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};