// === Module 12427: conjureTipDismissals ===

// Module 12427 (conjureTipDismissals)
import Storage5 from "Storage" /* 510 */;
import c from "c" /* 576 */;
import noop from "module_19" /* 19 */;

require = fn;
function isConjureTipDismissed(forEach, tip2) {
  let tmp = id;
  if (id === undefined) {
    tmp = null;
  }
  const dismissal = forEach.dismissal;
  if (undefined === dismissal) {
    return false;
  } else if ("session" === dismissal) {
    const _HermesInternal = HermesInternal;
    return set.has("" + tip2 + ":" + forEach.id);
  } else if ("anchor" === dismissal) {
    let tmp22 = null != tmp;
    if (tmp22) {
      const Storage3 = Storage5.Storage;
      value = Storage3.get(conjureTipDismissals);
      let forever;
      if (value != null) {
        forever = value.forever;
      }
      let app;
      if (value != null) {
        app = value.app;
      }
      let anchor;
      if (value != null) {
        anchor = value.anchor;
      }
      if (anchor == null) {
        anchor = {};
      }
      let tmp32;
      if (anchor[tip2] != null) {
        tmp32 = tmp31[forEach.id];
      }
      tmp22 = tmp32 === tmp;
    }
    return tmp22;
  } else if ("app" === dismissal) {
    const Storage2 = Storage5.Storage;
    value3 = Storage2.get(conjureTipDismissals);
    let forever1;
    if (value3 != null) {
      forever1 = value3.forever;
    }
    let app1;
    if (value3 != null) {
      app1 = value3.app;
    }
    if (app1 == null) {
      app1 = {};
    }
    let anchor1;
    if (value3 != null) {
      anchor1 = value3.anchor;
    }
    let hasItem;
    if (app1[tip2] != null) {
      hasItem = obj2.includes(forEach.id);
    }
    return true === hasItem;
  } else if ("forever" === dismissal) {
    const Storage = Storage5.Storage;
    value4 = Storage.get(conjureTipDismissals);
    let forever2;
    if (value4 != null) {
      forever2 = value4.forever;
    }
    if (forever2 == null) {
      forever2 = [];
    }
    let app2;
    if (value4 != null) {
      app2 = value4.app;
    }
    let anchor2;
    if (value4 != null) {
      anchor2 = value4.anchor;
    }
    return forever2.includes(forEach.id);
  }
}
function subscribe(arg0) {
  closure_0 = arg0;
  set1.add(arg0);
  return () => set1.delete(closure_0);
}
const conjureTipDismissals = "conjureTipDismissals";
let set = new Set();
const set1 = new Set();
let closure_6 = 0;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/tips/conjureTipDismissals.tsx");

export { isConjureTipDismissed };
export function dismissConjureTip(tip, tip2) {
  let tmp = ideasIntroAnchorId;
  if (ideasIntroAnchorId === undefined) {
    tmp = null;
  }
  let forEach = tip;
  let tmp2 = null;
  if (null != tip.dismissal) {
    if (!isConjureTipDismissed(forEach, tip2, tmp)) {
      set = require;
      const Storage = Storage5.Storage;
      value = Storage.get(conjureTipDismissals);
      let forever;
      if (value != tmp2) {
        forever = value.forever;
      }
      if (forever == tmp2) {
        forever = [];
      }
      let id = { forever, app: null, anchor: null };
      let app;
      if (value != tmp2) {
        app = value.app;
      }
      if (app == tmp2) {
        app = {};
      }
      id.app = app;
      let anchor;
      if (value != tmp2) {
        anchor = value.anchor;
      }
      if (anchor == tmp2) {
        anchor = {};
      }
      id.anchor = anchor;
      const dismissal = forEach.dismissal;
      if ("session" === dismissal) {
        const _HermesInternal = HermesInternal;
        set.add("" + tip2 + ":" + forEach.id);
        tmp2 = closure_6;
        closure_6 = closure_6 + 1;
        forEach = set1.forEach;
        const item = forEach((fn) => fn());
      } else if ("anchor" === dismissal) {
        if (tmp2 != tmp) {
          const Storage3 = set(510).Storage;
          set = Storage3.set;
          const obj = {};
          const merged = Object.assign(id);
          const obj2 = {};
          const merged1 = Object.assign(id.anchor);
          const obj3 = {};
          const merged2 = Object.assign(id.anchor[tip2]);
          id = forEach.id;
          obj3[id] = tmp;
          obj2[tip2] = obj3;
          obj.anchor = obj2;
          const result = set(conjureTipDismissals, obj);
        }
      } else if ("app" !== dismissal) {
        if ("forever" === dismissal) {
          const Storage4 = set(510).Storage;
          const obj4 = {};
          const merged3 = Object.assign(id);
          const items = [];
          items[HermesBuiltin.arraySpread(id.forever, 0)] = forEach.id;
          obj4.forever = items;
          const result1 = Storage4.set(conjureTipDismissals, obj4);
        }
      }
      const Storage2 = set(510).Storage;
      const obj5 = {};
      const merged4 = Object.assign(id);
      const obj6 = {};
      const merged5 = Object.assign(id.app);
      let items1 = id.app[tip2];
      if (items1 == tmp2) {
        items1 = [];
      }
      const items2 = [];
      items2[HermesBuiltin.arraySpread(items1, 0)] = forEach.id;
      obj6[tip2] = items2;
      obj5.app = obj6;
      const result2 = Storage2.set(conjureTipDismissals, obj5);
    }
  }
}
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