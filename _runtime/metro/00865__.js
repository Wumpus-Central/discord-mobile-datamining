// _runtime/metro/00865__.js
import _mod17 from "00017__.js";

function processEvent(arg0, arg1, arg2) {
  closure_0 = arg0;
  closure_1 = arg2;
  return fn(this, undefined, undefined, function*(arg0, value) {
    if (c5 === 2) {
      c5 = 3;
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
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            let fingerprint = tmp7;
            let user2;
            let contexts;
            let tags;
            let extra;
            let fingerprint2;
            closure_128_6 = undefined;
            let environment2;
            closure_128_8 = undefined;
            closure_128_9 = undefined;
            closure_128_0 = null;
            c3 = 1;
            const NATIVE = fingerprint(tmp3[1]).NATIVE;
            c4 = 2;
            c5 = 1;
            const obj1 = { value: NATIVE.fetchNativeDeviceContexts(), done: false };
            return obj1;
          }
        } else {
          if (1 === tmp7) {
            c3 = 0;
            closure_128_10 = tmp121;
            const debug = fingerprint(tmp3[2]).debug;
            const _HermesInternal = HermesInternal;
            debug.log("Failed to get device context from native: " + closure_128_10);
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_128_0 = value;
            c3 = 0;
          }
          if (closure_128_0) {
            user2 = closure_128_0.user;
            const user = closure_129_0.user;
            let tmp22 = !user;
            if (!user) {
              tmp22 = user2;
            }
            if (tmp22) {
              closure_129_0.user = user2;
            }
            contexts = closure_128_0.contexts;
            if ("unknown" !== tmp121.currentState) {
              let obj2 = contexts;
              if (!contexts) {
                obj2 = {};
              }
              contexts = obj2;
              const _Object = Object;
              const _Object2 = Object;
              const obj3 = { in_foreground: "active" === tmp121.currentState };
              obj2.app = Object.assign(Object.assign({}, contexts.app), obj3);
            }
            if (contexts) {
              const _Object3 = Object;
              const _Object4 = Object;
              closure_129_0.contexts = Object.assign(Object.assign({}, contexts), closure_129_0.contexts);
              if (contexts.app) {
                const _Object5 = Object;
                const _Object6 = Object;
                closure_129_0.contexts.app = Object.assign(Object.assign({}, contexts.app), closure_129_0.contexts.app);
              }
            }
            tags = closure_128_0.tags;
            if (tags) {
              const _Object7 = Object;
              const _Object8 = Object;
              closure_129_0.tags = Object.assign(Object.assign({}, tags), closure_129_0.tags);
            }
            extra = closure_128_0.extra;
            if (extra) {
              const _Object9 = Object;
              const _Object10 = Object;
              closure_129_0.extra = Object.assign(Object.assign({}, extra), closure_129_0.extra);
            }
            fingerprint2 = closure_128_0.fingerprint;
            if (!fingerprint2) {
              let result;
              if (typeof closure_128_0.level === "string") {
                result = fingerprint(tmp3[2]).severityLevelFromString(closure_128_0.level);
                const obj10 = fingerprint(tmp3[2]);
              }
              closure_128_6 = result;
              const level = closure_129_0.level;
              let tmp80 = !level;
              if (!level) {
                tmp80 = closure_128_6;
              }
              if (tmp80) {
                closure_129_0.level = closure_128_6;
              }
              environment2 = closure_128_0.environment;
              const environment = closure_129_0.environment;
              let tmp90 = !environment;
              if (!environment) {
                tmp90 = environment2;
              }
              if (tmp90) {
                closure_129_0.environment = environment2;
              }
              const _Array = Array;
              let mapped;
              if (Array.isArray(closure_128_0.breadcrumbs)) {
                const breadcrumbs = closure_128_0.breadcrumbs;
                mapped = breadcrumbs.map(fingerprint(tmp3[3]).breadcrumbFromObject);
              }
              closure_128_8 = mapped;
              if (closure_128_8) {
                let maxBreadcrumbs;
                if (null != closure_129_1) {
                  maxBreadcrumbs = closure_129_1.getOptions().maxBreadcrumbs;
                }
                closure_129_3 = maxBreadcrumbs;
                let num5 = 100;
                if (null !== maxBreadcrumbs) {
                  num5 = 100;
                  if (undefined !== maxBreadcrumbs) {
                    num5 = maxBreadcrumbs;
                  }
                }
                closure_128_9 = num5;
                let breadcrumbs1 = closure_129_0.breadcrumbs;
                if (!breadcrumbs1) {
                  breadcrumbs1 = [];
                }
                const combined = closure_128_8.concat(breadcrumbs1);
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
                closure_129_0.breadcrumbs = sorted.slice(-closure_128_9);
              }
              c5 = 3;
              const obj4 = { value: closure_129_0, done: true };
              return obj4;
            } else {
              fingerprint = closure_129_0.fingerprint;
              closure_129_2 = fingerprint;
              if (null === fingerprint) {
                let items = [];
                tmp68.fingerprint = items.concat(fingerprint2.filter((item) => {
                  fingerprint = fingerprint.fingerprint;
                  if (null === fingerprint) {
                    fingerprint = [];
                  }
                  return fingerprint.indexOf(item) < 0;
                }));
              }
              items = closure_129_2;
            }
          } else {
            c5 = 3;
            const obj5 = { value: closure_129_0, done: true };
            return obj5;
          }
        }
      } catch (tmp121) {
        if (tmp4 === c3) {
          c5 = tmp2;
          throw tmp121;
        } else {
          c4 = tmp;
        }
      }
    }
  });
}
const AppState = _mod17.AppState;
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
    _Promise = new _Promise((fn, arg1) => {
      closure_0 = fn;
      closure_1 = arg1;
      function fulfilled(result) {
        try {
          step(iter.next(result));
        } catch (tmp5) {
          closure_1(tmp5);
        }
      }
      function rejected(arg0) {
        try {
          step(iter.throw(arg0));
        } catch (tmp5) {
          closure_1(tmp5);
        }
      }
      let iter = rejected;
      function step(done) {
        if (done.done) {
          closure_0(done.value);
        } else {
          let tmp = done.value;
          closure_0 = tmp;
          if (!(tmp instanceof Promise)) {
            tmp = new tmp((fn) => {
              fn(value);
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
      value = iter2.value;
      if (iter2.done) {
        fn(value);
      } else {
        closure_0 = value;
        let tmp3 = value;
        if (!(value instanceof fulfilled)) {
          tmp3 = new tmp3((fn) => {
            fn(value);
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