// _runtime/00876_deviceContextIntegration.js
import react_native from "00017_react-native.js";

let timestamp;

function processEvent(arg0, arg1, arg2) {
  let closure_0 = arg0;
  let closure_1 = arg2;
  return closure_3(this, undefined, undefined, function* () {
    let closure_2;
    closure_1 = tmp;
    let fingerprint = null;
    const NATIVE = fingerprint(closure_1[1]).NATIVE;
    yield NATIVE.fetchNativeDeviceContexts();
    if (1 === c4) {
      let c3 = 0;
      let closure_10 = tmp118;
      const debug = fingerprint(closure_1[2]).debug;
      const _HermesInternal = HermesInternal;
      debug.log("Failed to get device context from native: " + closure_10);
    } else if (arg0 === 1) {
      let c5 = 3;
      throw value;
    } else if (arg0 === 2) {
      c3 = 0;
      let num2 = 3;
      c5 = 3;
      const obj = { value, done: true };
      return obj;
    } else {
      fingerprint = value;
      c3 = 0;
    }
    if (fingerprint) {
      let mapped;
      const user = value.user;
      const tmp19 = !user && user;
      if (tmp19) {
        value.user = user;
      }
      let obj5 = fingerprint.contexts;
      if ("unknown" !== tmp118.currentState) {
        if (!obj5) {
          obj5 = {};
        }
        const _Object = Object;
        const _Object2 = Object;
        const obj6 = { in_foreground: "active" === tmp118.currentState };
        obj5.app = Object.assign(Object.assign({}, obj5.app), obj6);
      }
      const tmp34 = obj5;
      if (tmp34) {
        const _Object3 = Object;
        const _Object4 = Object;
        value.contexts = Object.assign(Object.assign({}, obj5), value.contexts);
        if (obj5.app) {
          const _Object5 = Object;
          const _Object6 = Object;
          value.contexts.app = Object.assign(Object.assign({}, obj5.app), value.contexts.app);
        }
      }
      const tags = fingerprint.tags;
      const tmp47 = tags;
      if (tmp47) {
        const _Object7 = Object;
        const _Object8 = Object;
        value.tags = Object.assign(Object.assign({}, tags), value.tags);
      }
      const extra = fingerprint.extra;
      const tmp55 = extra;
      if (tmp55) {
        const _Object9 = Object;
        const _Object10 = Object;
        value.extra = Object.assign(Object.assign({}, extra), value.extra);
      }
      fingerprint = fingerprint.fingerprint;
      const tmp63 = fingerprint;
      if (tmp63) {
        fingerprint = value.fingerprint;
        if (null !== fingerprint) {
          let items;
          if (undefined !== fingerprint) {
            items = fingerprint;
          }
          tmp65.fingerprint = items.concat(
            fingerprint.filter((item) => {
              fingerprint = fingerprint.fingerprint;
              if (null === fingerprint) {
                fingerprint = [];
              }
              return fingerprint.indexOf(item) < 0;
            }),
          );
        }
        items = [];
      }
      if (typeof fingerprint.level === "string") {
        const obj10 = fingerprint(closure_1[2]);
        const result = obj10.severityLevelFromString(fingerprint.level);
      }
      const level = value.level;
      const tmp77 = !level && level;
      if (tmp77) {
        value.level = level;
      }
      const environment = value.environment;
      const tmp87 = !environment && environment;
      if (tmp87) {
        value.environment = environment;
      }
      const _Array = Array;
      if (Array.isArray(fingerprint.breadcrumbs)) {
        const breadcrumbs = fingerprint.breadcrumbs;
        mapped = breadcrumbs.map(fingerprint(closure_1[3]).breadcrumbFromObject);
      }
      const tmp102 = mapped;
      if (tmp102) {
        let maxBreadcrumbs;
        if (null != options) {
          maxBreadcrumbs = options.getOptions().maxBreadcrumbs;
        }
        let num5 = 100;
        if (null !== maxBreadcrumbs) {
          num5 = 100;
          if (undefined !== maxBreadcrumbs) {
            num5 = maxBreadcrumbs;
          }
        }
        let breadcrumbs1 = value.breadcrumbs;
        const concat = mapped.concat;
        if (!breadcrumbs1) {
          breadcrumbs1 = [];
        }
        const combined = concat(breadcrumbs1);
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
        value.breadcrumbs = sorted.slice(-num5);
      }
      return value;
    }
    return value;
  });
}
const AppState = react_native.AppState;
let closure_3 =
  (this && this.__awaiter) ||
  ((arg0, arg1, arg2, arg3) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let _Promise = arg2;
    const Promise = arg2;
    closure_3 = arg3;
    if (!arg2) {
      let tmp = globalThis;
      _Promise = Promise;
    }
    const _Promise1 = new _Promise(function (fn, arg1) {
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
          fn(done.value);
        } else {
          let tmp1 = done.value;
          const value = tmp1;
          if (!(tmp1 instanceof Promise)) {
            const self = this;
            const self2 = this;
            tmp1 = new tmp((fn) => {
              fn(value);
            });
          }
          tmp1.then(fulfilled, iter);
        }
      }
      let items = closure_1;
      const tmp = iter;
      const apply = iter.apply;
      const tmp2 = closure_0;
      if (!closure_1) {
        items = [];
      }
      iter = apply(tmp2, items);
      const iter2 = iter.next();
      let value = iter2.value;
      if (iter2.done) {
        const tmp5 = fn(value);
      } else {
        let tmp32 = value;
        if (!(value instanceof fulfilled)) {
          let self = this;
          let self2 = this;
          tmp32 = new tmp3((fn) => {
            fn(value);
          });
        }
        tmp32.then(fulfilled, rejected);
      }
    });
    return _Promise1;
  });

export const deviceContextIntegration = () => ({
  name: "DeviceContext",
  setupOnce() {},
  processEvent,
});
