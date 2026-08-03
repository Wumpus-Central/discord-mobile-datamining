import { AppState } from "get ActivityIndicator";

function processEvent(arg0, arg1, arg2) {
  let closure_0 = arg0;
  let closure_1 = arg2;
  return fn(this, undefined, undefined, function*() {
    if (fingerprint2 === 2) {
      fingerprint2 = 3;
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
          fingerprint2 = 2;
          if (0 === extra) {
            if (arg0 === 1) {
              fingerprint2 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              fingerprint2 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let user = tmp3;
              let closure_0 = tmp7;
              user = undefined;
              let fingerprint;
              let tags;
              extra = undefined;
              fingerprint2 = undefined;
              let c6;
              let environment;
              let c8;
              let num5;
              closure_0 = null;
              tags = 1;
              throwTypeErrorResult = outer1_0;
              throwTypeErrorResult = outer1_1;
              const NATIVE = outer1_0(outer1_1[1]).NATIVE;
              extra = 2;
              fingerprint2 = 1;
              const obj1 = { value: null, done: false };
              obj1[0] = NATIVE.fetchNativeDeviceContexts();
              return obj1;
            }
          } else {
            if (1 === tmp7) {
              tags = 0;
              let closure_10 = fingerprint;
              const debug = outer1_0(outer1_1[2]).debug;
              const _HermesInternal = HermesInternal;
              debug.log("Failed to get device context from native: " + closure_10);
            } else if (arg0 === 1) {
              fingerprint2 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              tags = 0;
              fingerprint2 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_0 = arg1;
              tags = 0;
            }
            if (closure_0) {
              user = closure_0.user;
              user = closure_0.user;
              let tmp22 = !user;
              if (!user) {
                tmp22 = outer1_1;
              }
              if (tmp22) {
                outer1_0.user = user;
              }
              fingerprint = closure_0.contexts;
              if ("unknown" !== outer1_2.currentState) {
                let obj2 = outer1_2;
                if (!outer1_2) {
                  obj2 = {};
                }
                outer1_2 = obj2;
                const _Object = Object;
                const _Object2 = Object;
                const obj3 = { in_foreground: null };
                obj3[0] = "active" === outer1_2.currentState;
                obj2.app = Object.assign(Object.assign({}, outer1_2.app), obj3);
              }
              if (outer1_2) {
                const _Object3 = Object;
                const _Object4 = Object;
                outer1_0.contexts = Object.assign(Object.assign({}, outer1_2), outer1_0.contexts);
                if (outer1_2.app) {
                  const _Object5 = Object;
                  const _Object6 = Object;
                  outer1_0.contexts.app = Object.assign(Object.assign({}, fingerprint.app), outer1_0.contexts.app);
                }
              }
              tags = outer1_0.tags;
              if (tags) {
                const _Object7 = Object;
                const _Object8 = Object;
                outer1_0.tags = Object.assign(Object.assign({}, tags), outer1_0.tags);
              }
              extra = outer1_0.extra;
              if (extra) {
                const _Object9 = Object;
                const _Object10 = Object;
                outer1_0.extra = Object.assign(Object.assign({}, extra), outer1_0.extra);
              }
              fingerprint2 = outer1_0.fingerprint;
              if (!fingerprint2) {
                let result;
                if (typeof outer1_0.level !== "ge") {
                  throwTypeErrorResult = closure_0;
                  throwTypeErrorResult = user;
                  throwTypeErrorResult = outer1_0;
                  throwTypeErrorResult = outer1_1;
                  throwTypeErrorResult = outer1_0;
                  result = outer1_0(outer1_1[2]).severityLevelFromString(outer1_0.level);
                  const obj10 = outer1_0(outer1_1[2]);
                }
                const outer1_6 = result;
                const level = outer1_0.level;
                let tmp80 = !level;
                if (!level) {
                  tmp80 = outer1_6;
                }
                if (tmp80) {
                  outer1_0.level = outer1_6;
                }
                environment = closure_0.environment;
                environment = outer1_0.environment;
                let tmp90 = !environment;
                if (!environment) {
                  tmp90 = outer1_7;
                }
                if (tmp90) {
                  outer1_0.environment = outer1_7;
                }
                const _Array = Array;
                let mapped;
                if (Array.isArray(outer1_0.breadcrumbs)) {
                  throwTypeErrorResult = user;
                  throwTypeErrorResult = closure_0;
                  const breadcrumbs = closure_0.breadcrumbs;
                  throwTypeErrorResult = outer1_0;
                  throwTypeErrorResult = outer1_1;
                  mapped = breadcrumbs.map(outer1_0(outer1_1[3]).breadcrumbFromObject);
                }
                throwTypeErrorResult = closure_0;
                const outer1_8 = mapped;
                throwTypeErrorResult = outer1_8;
                if (outer1_8) {
                  throwTypeErrorResult = user;
                  throwTypeErrorResult = outer1_1;
                  throwTypeErrorResult = undefined;
                  if (null != outer1_1) {
                    throwTypeErrorResult = user;
                    throwTypeErrorResult = outer1_1;
                    throwTypeErrorResult = outer1_1.getOptions().maxBreadcrumbs;
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
                  throwTypeErrorResult = outer1_0;
                  let breadcrumbs1 = outer1_0.breadcrumbs;
                  throwTypeErrorResult = outer1_0;
                  throwTypeErrorResult = c8;
                  if (!breadcrumbs1) {
                    breadcrumbs1 = [];
                  }
                  throwTypeErrorResult = closure_0;
                  const combined = c8.concat(breadcrumbs1);
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
                  throwTypeErrorResult = outer1_9;
                  throwTypeErrorResult.breadcrumbs = sorted.slice(-outer1_9);
                }
                throwTypeErrorResult = user;
                fingerprint2 = 3;
                const obj4 = { value: null, done: true };
                obj4[0] = outer1_0;
                return obj4;
              } else {
                fingerprint = closure_0.fingerprint;
                if (null === fingerprint) {
                  let items = [];
                  tmp68.fingerprint = items.concat(fingerprint2.filter((arg0) => {
                    fingerprint = fingerprint.fingerprint;
                    if (null === fingerprint) {
                      fingerprint = [];
                    }
                    return fingerprint.indexOf(arg0) < 0;
                  }));
                }
                items = outer1_2;
              }
            } else {
              fingerprint2 = 3;
              const obj5 = { value: null, done: true };
              obj5[0] = closure_0;
              return obj5;
            }
          }
        } catch (throwTypeErrorResult) {
          fingerprint = throwTypeErrorResult;
          throwTypeErrorResult = tags;
          if (tmp4 === tags) {
            throwTypeErrorResult = tmp2;
            fingerprint2 = tmp2;
            throw throwTypeErrorResult;
          } else {
            extra = throwTypeErrorResult;
          }
        }
      }
    }
  });
}
let fn = this;
if (this) {
  fn = this.__awaiter;
}
if (!fn) {
  fn = (arg0, arg1, arg2, arg3) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let _Promise = arg2;
    let closure_3 = arg3;
    if (!arg2) {
      _Promise = Promise;
    }
    _Promise = new _Promise((arg0, arg1) => {
      let closure_0 = arg0;
      let closure_1 = arg1;
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