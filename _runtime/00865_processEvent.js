// _runtime/00865_processEvent.js
import get_ActivityIndicator from "00017_get_ActivityIndicator.js";

function processEvent(arg0, arg1, arg2) {
  closure_0 = arg0;
  closure_1 = arg2;
  return fn(this, undefined, undefined, () => {
    let extra = 0;
    let fingerprint = 0;
    let tags = 0;
    return (function*() {
      if (c5 === 2) {
        c5 = 3;
        let throwTypeErrorResult = HermesBuiltin.throwTypeError();
      } else {
        throwTypeErrorResult = arg1;
        throwTypeErrorResult = arg0;
        throwTypeErrorResult = tmp5;
        throwTypeErrorResult = null;
        throwTypeErrorResult = globalThis;
        if (tmp6 === 3) {
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
            if (0 === c4) {
              if (arg0 === 1) {
                c5 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c5 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                let user = tmp3;
                closure_0 = tmp7;
                user = undefined;
                fingerprint = undefined;
                c3 = undefined;
                c4 = undefined;
                c5 = undefined;
                c6 = undefined;
                let environment;
                mapped = undefined;
                let num5;
                closure_0 = null;
                c3 = 1;
                throwTypeErrorResult = closure_1_0;
                throwTypeErrorResult = closure_1_1;
                const NATIVE = closure_1_0(closure_1_1[1]).NATIVE;
                c4 = 2;
                c5 = 1;
                obj1 = { value: null, done: false };
                obj1[0] = NATIVE.fetchNativeDeviceContexts();
                return obj1;
              }
            } else {
              if (1 === tmp7) {
                c3 = 0;
                closure_10 = fingerprint;
                const debug = closure_1_0(closure_1_1[2]).debug;
                const _HermesInternal = HermesInternal;
                debug.log("Failed to get device context from native: " + closure_10);
              } else if (arg0 === 1) {
                c5 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c3 = 0;
                c5 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                closure_0 = arg1;
                c3 = 0;
              }
              if (closure_0) {
                user = closure_0.user;
                user = closure_0.user;
                let tmp22 = !user;
                if (!user) {
                  tmp22 = closure_1_1;
                }
                if (tmp22) {
                  closure_1_0.user = user;
                }
                fingerprint = closure_0.contexts;
                if ("unknown" !== obj2.currentState) {
                  if (!obj2) {
                    obj2 = {};
                  }
                  const _Object = Object;
                  const _Object2 = Object;
                  const obj3 = { in_foreground: null };
                  obj3[0] = "active" === obj2.currentState;
                  obj2.app = Object.assign(Object.assign({}, obj2.app), obj3);
                }
                if (obj2) {
                  const _Object3 = Object;
                  const _Object4 = Object;
                  closure_1_0.contexts = Object.assign(Object.assign({}, obj2), closure_1_0.contexts);
                  if (obj2.app) {
                    const _Object5 = Object;
                    const _Object6 = Object;
                    closure_1_0.contexts.app = Object.assign(Object.assign({}, fingerprint.app), closure_1_0.contexts.app);
                  }
                }
                tags = closure_1_0.tags;
                if (tags) {
                  const _Object7 = Object;
                  const _Object8 = Object;
                  closure_1_0.tags = Object.assign(Object.assign({}, c3), closure_1_0.tags);
                }
                extra = closure_1_0.extra;
                if (extra) {
                  const _Object9 = Object;
                  const _Object10 = Object;
                  closure_1_0.extra = Object.assign(Object.assign({}, c4), closure_1_0.extra);
                }
                fingerprint = closure_1_0.fingerprint;
                if (!fingerprint) {
                  result = undefined;
                  if (typeof closure_1_0.level === "string") {
                    throwTypeErrorResult = closure_0;
                    throwTypeErrorResult = user;
                    throwTypeErrorResult = closure_1_0;
                    throwTypeErrorResult = closure_1_1;
                    throwTypeErrorResult = closure_1_0;
                    result = closure_1_0(closure_1_1[2]).severityLevelFromString(closure_1_0.level);
                    const obj10 = closure_1_0(closure_1_1[2]);
                  }
                  const level = closure_1_0.level;
                  let tmp80 = !level;
                  if (!level) {
                    tmp80 = result;
                  }
                  if (tmp80) {
                    closure_1_0.level = result;
                  }
                  environment = closure_0.environment;
                  environment = closure_1_0.environment;
                  let tmp90 = !environment;
                  if (!environment) {
                    tmp90 = closure_1_7;
                  }
                  if (tmp90) {
                    closure_1_0.environment = closure_1_7;
                  }
                  const _Array = Array;
                  mapped = undefined;
                  if (Array.isArray(closure_1_0.breadcrumbs)) {
                    throwTypeErrorResult = user;
                    throwTypeErrorResult = closure_0;
                    const breadcrumbs = closure_0.breadcrumbs;
                    throwTypeErrorResult = closure_1_0;
                    throwTypeErrorResult = closure_1_1;
                    mapped = breadcrumbs.map(closure_1_0(closure_1_1[3]).breadcrumbFromObject);
                  }
                  throwTypeErrorResult = closure_0;
                  throwTypeErrorResult = mapped;
                  if (mapped) {
                    throwTypeErrorResult = user;
                    throwTypeErrorResult = closure_1_1;
                    throwTypeErrorResult = undefined;
                    if (null != closure_1_1) {
                      throwTypeErrorResult = user;
                      throwTypeErrorResult = closure_1_1;
                      throwTypeErrorResult = closure_1_1.getOptions().maxBreadcrumbs;
                    }
                    throwTypeErrorResult = user;
                    tags = throwTypeErrorResult;
                    num5 = 100;
                    if (null !== throwTypeErrorResult) {
                      num5 = 100;
                      if (undefined !== throwTypeErrorResult) {
                        num5 = throwTypeErrorResult;
                      }
                    }
                    throwTypeErrorResult = closure_0;
                    throwTypeErrorResult = closure_1_0;
                    let breadcrumbs1 = closure_1_0.breadcrumbs;
                    throwTypeErrorResult = closure_1_0;
                    throwTypeErrorResult = mapped;
                    if (!breadcrumbs1) {
                      breadcrumbs1 = [];
                    }
                    throwTypeErrorResult = closure_0;
                    const combined = mapped.concat(breadcrumbs1);
                    const sorted = combined.sort((timestamp, timestamp2) => {
                      timestamp = timestamp.timestamp;
                      let num = 0;
                      if (null !== timestamp) {
                        num = 0;
                        if (undefined !== timestamp) {
                          num = timestamp;
                        }
                      }
                      timestamp2 = timestamp2.timestamp;
                      let num2 = 0;
                      if (null !== timestamp2) {
                        num2 = 0;
                        if (undefined !== timestamp2) {
                          num2 = timestamp2;
                        }
                      }
                      return num - num2;
                    });
                    throwTypeErrorResult = closure_1_9;
                    throwTypeErrorResult.breadcrumbs = sorted.slice(-closure_1_9);
                  }
                  throwTypeErrorResult = user;
                  c5 = 3;
                  const obj4 = { value: null, done: true };
                  obj4[0] = closure_1_0;
                  return obj4;
                } else {
                  fingerprint = closure_0.fingerprint;
                  if (null === fingerprint) {
                    let items = [];
                    tmp68.fingerprint = items.concat(fingerprint.filter((arg0) => {
                      fingerprint = fingerprint.fingerprint;
                      if (null === fingerprint) {
                        fingerprint = [];
                      }
                      return fingerprint.indexOf(arg0) < 0;
                    }));
                  }
                  items = obj2;
                }
              } else {
                c5 = 3;
                const obj5 = { value: null, done: true };
                obj5[0] = closure_0;
                return obj5;
              }
            }
          } catch (throwTypeErrorResult) {
            fingerprint = throwTypeErrorResult;
            throwTypeErrorResult = c3;
            if (tmp4 === c3) {
              throwTypeErrorResult = tmp2;
              c5 = tmp2;
              throw throwTypeErrorResult;
            } else {
              c4 = throwTypeErrorResult;
            }
          }
        }
      }
    })();
  });
}
const AppState = get_ActivityIndicator.AppState;
let fn = this;
if (this) {
  fn = this.__awaiter;
}
if (!fn) {
  fn = (arg0, arg1, arg2, arg3) => {
    closure_0 = arg0;
    closure_1 = arg1;
    let _Promise = arg2;
    closure_3 = arg3;
    if (!arg2) {
      _Promise = Promise;
    }
    _Promise = new _Promise((arg0, arg1) => {
      closure_0 = arg0;
      closure_1 = arg1;
      function fulfilled(arg0) {
        try {
          step(iter.next(arg0));
        } catch (tmp5) {
          callback2(tmp5);
        }
      }
      function rejected(arg0) {
        try {
          step(iter.throw(arg0));
        } catch (tmp5) {
          callback2(tmp5);
        }
      }
      let iter = rejected;
      function step(done) {
        if (done.done) {
          callback(done.value);
        } else {
          let tmp = done.value;
          callback = tmp;
          if (!(tmp instanceof fulfilled)) {
            tmp = new tmp((arg0) => {
              arg0(closure_0);
            });
          }
          tmp.then(fulfilled, iter);
        }
      }
      let items = closure_1;
      if (!closure_1) {
        items = [];
      }
      iter = iter.apply(closure_0, items);
      const iter2 = iter.next();
      const value = iter2.value;
      if (iter2.done) {
        arg0(value);
      } else {
        closure_0 = value;
        let tmp3 = value;
        if (!(value instanceof fulfilled)) {
          tmp3 = new tmp3((arg0) => {
            arg0(closure_0);
          });
        }
        tmp3.then(fulfilled, rejected);
      }
    });
    return _Promise;
  };
}

export () => ({
  name: "DeviceContext",
  setupOnce() {

  },
  processEvent
})