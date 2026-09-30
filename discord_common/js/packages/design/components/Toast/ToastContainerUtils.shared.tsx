// === Module 14186: DEFAULT_TOAST_POSITION ===

// Module 14186 (DEFAULT_TOAST_POSITION)
import AccessibilityAnnouncer2 from "AccessibilityAnnouncer" /* 4571 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const top = "top";
const module_4573 = fn(4573);
let closure_5 = module_4573.create(() => {
  const obj = { containerIdsBySurface: new Map() };
  return obj;
});
const size = fn(2);
let result = size.fileFinishedImporting("../discord_common/js/packages/design/components/Toast/ToastContainerUtils.shared.tsx");

export const DEFAULT_TOAST_POSITION = "top";
export const DEFAULT_TOAST_DURATION_MS = 3000;
export const useToastContainer = function useToastContainer(app) {
  _require = app;
  const id = noop.useId();
  closure_129_0 = app;
  closure_129_1 = id;
  let items = [app, id];
  const effect = noop.useEffect(() => {
    closure_5.setState((containerIdsBySurface) => {
      containerIdsBySurface = new Map(containerIdsBySurface.containerIdsBySurface);
      let items1 = containerIdsBySurface.get(app);
      if (items1 == null) {
        items1 = [];
      }
      const items = [];
      items[HermesBuiltin.arraySpread(items1, 0)] = entry;
      const result = containerIdsBySurface.set(app, items);
      return { containerIdsBySurface };
    });
    return () => {
      closure_2_5.setState((containerIdsBySurface) => {
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
  const tmp3 = closure_5((containerIdsBySurface) => {
    containerIdsBySurface = containerIdsBySurface.containerIdsBySurface;
    value = containerIdsBySurface.get(closure_0);
    let tmp = null != value;
    if (tmp) {
      tmp = value[value.length - 1] === entry;
    }
    return tmp;
  });
  const tmp4 = _require;
  const tmp5 = entry;
  entry = undefined;
  if (tmp3) {
    entry = obj2.useToastStore((currentToastMap) => {
      currentToastMap = currentToastMap.currentToastMap;
      return currentToastMap.get(closure_0);
    });
  }
  if (entry == null) {
    entry = null;
  }
  const tmp8 = bound(noop.useState(top), 2);
  const position1 = tmp8[0];
  let tmp10 = position1;
  if (null != entry) {
    let position = entry.toast.position;
    if (position == null) {
      position = top;
    }
    tmp10 = position;
  }
  if (tmp10 !== position1) {
    tmp8[1](tmp10);
  }
  let num;
  if (entry != null) {
    num = entry.toast.duration;
  }
  if (num == null) {
    num = 3000;
  }
  bound = Math.max(num, noop.useContext(tmp4(tmp5[4]).AccessibilityPreferencesContext).minToastDurationMs);
  let items1 = [entry, bound, app];
  const effect1 = noop.useEffect(() => {
    if (null != entry) {
      const _setTimeout = setTimeout;
      const timeout = setTimeout(() => closure_0(entry[3]).popToast(closure_0), bound);
      return () => clearTimeout(closure_0);
    }
  }, items1);
  const items2 = [entry];
  const effect2 = noop.useEffect(() => {
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
  }, items2);
  return { entry, position: position1 };
};