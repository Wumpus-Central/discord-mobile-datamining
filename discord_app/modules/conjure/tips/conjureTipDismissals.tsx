// === Module 12137: conjureTipDismissals ===

// Module 12137 (conjureTipDismissals)
import Storage3 from "Storage" /* 510 */;
import c from "c" /* 576 */;
import noop from "module_19" /* 19 */;

require = fn;
function isConjureTipDismissed(forEach, tip2) {
  const dismissal = forEach.dismissal;
  if (undefined === dismissal) {
    return false;
  } else if ("session" === dismissal) {
    const _HermesInternal = HermesInternal;
    return set.has("" + tip2 + ":" + forEach.id);
  } else if ("app" === dismissal) {
    const Storage2 = Storage3.Storage;
    value = Storage2.get(conjureTipDismissals);
    let forever;
    if (value != null) {
      forever = value.forever;
    }
    let app;
    if (value != null) {
      app = value.app;
    }
    if (app == null) {
      app = {};
    }
    let hasItem;
    if (app[tip2] != null) {
      hasItem = obj2.includes(forEach.id);
    }
    return true === hasItem;
  } else if ("forever" === dismissal) {
    const Storage = Storage3.Storage;
    value2 = Storage.get(conjureTipDismissals);
    let forever1;
    if (value2 != null) {
      forever1 = value2.forever;
    }
    if (forever1 == null) {
      forever1 = [];
    }
    let app1;
    if (value2 != null) {
      app1 = value2.app;
    }
    return forever1.includes(forEach.id);
  }
}
function subscribe(arg0) {
  closure_0 = arg0;
  set1.add(arg0);
  return () => set1.delete(closure_0);
}
const conjureTipDismissals = "conjureTipDismissals";
const set = new Set();
const set1 = new Set();
let closure_6 = 0;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/tips/conjureTipDismissals.tsx");

export { isConjureTipDismissed };
export const dismissConjureTip = function dismissConjureTip(tip, tip2) {
  let forEach = tip;
  if (null != tip.dismissal) {
    if (!isConjureTipDismissed(forEach, tip2)) {
      if ("session" === forEach.dismissal) {
        const _HermesInternal = HermesInternal;
        set.add("" + tip2 + ":" + forEach.id);
      } else {
        const Storage2 = Storage3.Storage;
        value = Storage2.get(conjureTipDismissals);
        let forever;
        if (value != null) {
          forever = value.forever;
        }
        if (forever == null) {
          forever = [];
        }
        const obj = { forever, app: null };
        let app;
        if (value != null) {
          app = value.app;
        }
        if (app == null) {
          app = {};
        }
        obj.app = app;
        const Storage = Storage3.Storage;
        if ("forever" === forEach.dismissal) {
          const obj2 = {};
          const merged = Object.assign(obj);
          const items = [];
          items[HermesBuiltin.arraySpread(obj.forever, 0)] = forEach.id;
          obj2.forever = items;
          let obj3 = obj2;
        } else {
          obj3 = {};
          const merged1 = Object.assign(obj);
          const obj4 = {};
          const merged2 = Object.assign(obj.app);
          let items1 = obj.app[tip2];
          if (items1 == null) {
            items1 = [];
          }
          const items2 = [];
          items2[HermesBuiltin.arraySpread(items1, 0)] = forEach.id;
          obj4[tip2] = items2;
          obj3.app = obj4;
        }
        const result = Storage.set(conjureTipDismissals, obj3);
      }
      closure_6 = closure_6 + 1;
      forEach = set1.forEach;
      const item = forEach((fn) => fn());
    }
  }
};
export const useConjureTipDismissalsVersion = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureTipDismissalsVersion() {
  const cResult = c.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function n() {
      return closure_1_6;
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  return noop.useSyncExternalStore(subscribe, first);
}) : (function useConjureTipDismissalsVersion() {
  return noop.useSyncExternalStore(subscribe, () => closure_1_6);
});