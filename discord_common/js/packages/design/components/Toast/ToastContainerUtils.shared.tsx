// === Module 14260: DEFAULT_TOAST_POSITION ===

// Module 14260 (DEFAULT_TOAST_POSITION)
import AccessibilityAnnouncer2 from "AccessibilityAnnouncer" /* 4828 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const top = "top";
let c5 = 3000;
const module_4812 = fn(4812);
let closure_6 = module_4812.create(() => {
  const obj = { containerIdsBySurface: new Map() };
  return obj;
});
let ReactCompilerGating = fn(558);
let closure_7 = ReactCompilerGating.isReactCompilerEnabled() ? (function useOwnsSurface(arg0, arg1) {
  _require = arg0;
  dependencyMap = arg1;
  const cResult = require("c").c(7);
  if (cResult[0] === arg1) {
    if (cResult[1] === arg0) {
      let tmp2 = cResult[2];
      let tmp3 = cResult[3];
    }
    const effect = noop.useEffect(tmp2, tmp3);
    if (cResult[4] === arg1) {
      if (cResult[5] === arg0) {
        let tmp6 = cResult[6];
      }
      return closure_6(tmp6);
    }
    const fn2 = function l(containerIdsBySurface) {
      containerIdsBySurface = containerIdsBySurface.containerIdsBySurface;
      value = containerIdsBySurface.get(closure_0);
      let tmp = null != value;
      if (tmp) {
        tmp = value[value.length - 1] === closure_1;
      }
      return tmp;
    };
    cResult[4] = arg1;
    cResult[5] = arg0;
    cResult[6] = fn2;
    tmp6 = fn2;
  }
  const fn = function o() {
    closure_6.setState((containerIdsBySurface) => {
      containerIdsBySurface = new Map(containerIdsBySurface.containerIdsBySurface);
      let items1 = containerIdsBySurface.get(closure_1_0);
      if (items1 == null) {
        items1 = [];
      }
      const items = [];
      items[HermesBuiltin.arraySpread(items1, 0)] = closure_1_1;
      const result = containerIdsBySurface.set(closure_1_0, items);
      return { containerIdsBySurface };
    });
    return () => {
      closure_2_6.setState((containerIdsBySurface) => {
        containerIdsBySurface = new Map(containerIdsBySurface.containerIdsBySurface);
        let items = containerIdsBySurface.get(closure_1_0);
        if (items == null) {
          items = [];
        }
        const found = items.filter((item) => item !== closure_1_1);
        if (0 === found.length) {
          containerIdsBySurface.delete(closure_1_0);
        } else {
          const result = containerIdsBySurface.set(closure_1_0, found);
        }
        return { containerIdsBySurface };
      });
    };
  };
  let items = [arg0, arg1];
  cResult[0] = arg1;
  cResult[1] = arg0;
  cResult[2] = fn;
  cResult[3] = items;
  tmp3 = items;
  tmp2 = fn;
  const obj = require("c");
}) : (function useOwnsSurface(arg0, arg1) {
  closure_0 = arg0;
  closure_1 = arg1;
  let items = [arg0, arg1];
  const effect = noop.useEffect(() => {
    closure_6.setState((containerIdsBySurface) => {
      containerIdsBySurface = new Map(containerIdsBySurface.containerIdsBySurface);
      let items1 = containerIdsBySurface.get(closure_1_0);
      if (items1 == null) {
        items1 = [];
      }
      const items = [];
      items[HermesBuiltin.arraySpread(items1, 0)] = closure_1_1;
      const result = containerIdsBySurface.set(closure_1_0, items);
      return { containerIdsBySurface };
    });
    return () => {
      closure_2_6.setState((containerIdsBySurface) => {
        containerIdsBySurface = new Map(containerIdsBySurface.containerIdsBySurface);
        let items = containerIdsBySurface.get(closure_1_0);
        if (items == null) {
          items = [];
        }
        const found = items.filter((item) => item !== closure_1_1);
        if (0 === found.length) {
          containerIdsBySurface.delete(closure_1_0);
        } else {
          const result = containerIdsBySurface.set(closure_1_0, found);
        }
        return { containerIdsBySurface };
      });
    };
  }, items);
  return closure_6((containerIdsBySurface) => {
    containerIdsBySurface = containerIdsBySurface.containerIdsBySurface;
    value = containerIdsBySurface.get(closure_0);
    let tmp = null != value;
    if (tmp) {
      tmp = value[value.length - 1] === closure_1;
    }
    return tmp;
  });
});
ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("../discord_common/js/packages/design/components/Toast/ToastContainerUtils.shared.tsx");

export const DEFAULT_TOAST_POSITION = "top";
export const DEFAULT_TOAST_DURATION_MS = 3000;
export const useToastContainer = ReactCompilerGating.isReactCompilerEnabled() ? (function useToastContainer(arg0) {
  _require = arg0;
  const cResult = require("c").c(13);
  const obj = require("c");
  if (cResult[0] !== arg0) {
    const fn = function f(currentToastMap) {
      currentToastMap = currentToastMap.currentToastMap;
      return currentToastMap.get(closure_0);
    };
    cResult[0] = arg0;
    cResult[1] = fn;
    let tmp5 = fn;
  } else {
    tmp5 = cResult[1];
  }
  const tmp4 = closure_7(arg0, noop.useId());
  toastStore = undefined;
  if (tmp4) {
    toastStore = tmpResult.useToastStore(tmp5);
  }
  if (toastStore == null) {
    toastStore = null;
  }
  const tmp8 = bound(noop.useState(top), 2);
  const first = tmp8[0];
  let tmp10 = first;
  if (null != toastStore) {
    let position = toastStore.toast.position;
    if (position == null) {
      position = top;
    }
    tmp10 = position;
  }
  if (tmp10 !== first) {
    tmp8[1](tmp10);
  }
  let duration;
  if (toastStore != null) {
    duration = toastStore.toast.duration;
  }
  if (duration == null) {
    duration = c5;
  }
  bound = Math.max(duration, noop.useContext(tmp(tmp2[6]).AccessibilityPreferencesContext).minToastDurationMs);
  if (cResult[2] === bound) {
    if (cResult[3] === toastStore) {
      if (cResult[4] === arg0) {
        let tmp14 = cResult[5];
        let tmp15 = cResult[6];
      }
      const effect = noop.useEffect(tmp14, tmp15);
      if (cResult[7] !== toastStore) {
        const fn2 = function x() {
          if (toastStore != null) {
            const text = toastStore.toast.text;
          }
          let tmp2 = null != toastStore;
          if (tmp2) {
            tmp2 = toastStore.key !== key;
          }
          if (tmp2) {
            tmp2 = null != text;
          }
          if (tmp2) {
            tmp2 = "" !== text;
          }
          if (tmp2) {
            const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
            let str2 = "polite";
            if ("critical" === toastStore.toast.variant) {
              str2 = "assertive";
            }
            AccessibilityAnnouncer.announce(text, str2);
          }
        };
        const items = [toastStore];
        cResult[7] = toastStore;
        cResult[8] = fn2;
        cResult[9] = items;
        let tmp18 = items;
        let tmp17 = fn2;
      } else {
        tmp17 = cResult[8];
        tmp18 = cResult[9];
      }
      const effect1 = noop.useEffect(tmp17, tmp18);
      if (cResult[10] === toastStore) {
        if (cResult[11] === first) {
          let tmp20 = cResult[12];
        }
        return tmp20;
      }
      const obj3 = { entry: toastStore, position: first };
      cResult[10] = toastStore;
      cResult[11] = first;
      cResult[12] = obj3;
      tmp20 = obj3;
    }
  }
  class E {
    constructor() {
      if (null != c1) {
        tmp = globalThis;
        _setTimeout = setTimeout;
        tmp2 = closure_2;
        closure_0 = setTimeout(() => closure_0(toastStore[5]).popToast(closure_0), closure_2);
        return () => clearTimeout(closure_0);
      } else {
        return;
      }
    }
  }
  const items1 = [toastStore, bound, arg0];
  cResult[2] = bound;
  cResult[3] = toastStore;
  cResult[4] = arg0;
  cResult[5] = E;
  cResult[6] = items1;
  tmp15 = items1;
  tmp14 = E;
  tmpResult = require("module_4811");
}) : (function useToastContainer(arg0) {
  _require = arg0;
  const tmp = closure_7(arg0, noop.useId());
  let tmp2 = _require;
  const tmp3 = entry;
  entry = undefined;
  if (tmp) {
    entry = obj2.useToastStore((currentToastMap) => {
      currentToastMap = currentToastMap.currentToastMap;
      return currentToastMap.get(closure_0);
    });
  }
  if (entry == null) {
    entry = null;
  }
  const tmp6 = bound(noop.useState(top), 2);
  const position1 = tmp6[0];
  let tmp8 = position1;
  if (null != entry) {
    let position = entry.toast.position;
    if (position == null) {
      position = top;
    }
    tmp8 = position;
  }
  if (tmp8 !== position1) {
    tmp6[1](tmp8);
  }
  let duration;
  if (entry != null) {
    duration = entry.toast.duration;
  }
  if (duration == null) {
    duration = c5;
  }
  bound = Math.max(duration, noop.useContext(tmp2(tmp3[6]).AccessibilityPreferencesContext).minToastDurationMs);
  const items = [entry, bound, arg0];
  const effect = noop.useEffect(() => {
    if (null != entry) {
      const _setTimeout = setTimeout;
      const timeout = setTimeout(() => closure_0(entry[5]).popToast(closure_0), bound);
      return () => clearTimeout(closure_0);
    }
  }, items);
  const items1 = [entry];
  const effect1 = noop.useEffect(() => {
    if (entry != null) {
      const text = entry.toast.text;
    }
    let tmp2 = null != entry;
    if (tmp2) {
      tmp2 = entry.key !== key;
    }
    if (tmp2) {
      tmp2 = null != text;
    }
    if (tmp2) {
      tmp2 = "" !== text;
    }
    if (tmp2) {
      const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
      let str2 = "polite";
      if ("critical" === entry.toast.variant) {
        str2 = "assertive";
      }
      AccessibilityAnnouncer.announce(text, str2);
    }
  }, items1);
  return { entry, position: position1 };
});