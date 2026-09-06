// === Module 17013: useActivityWebViewLockManager ===

// Module 17013 (useActivityWebViewLockManager)
import native from "native" /* 4271 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/activities/panel/native/useActivityWebViewLockManager.tsx");

export default function useActivityWebViewLockManager() {
  return noop.useState(() => {
    function getCanRender(arg0) {
      let tmp = 0 === set.size;
      if (!tmp) {
        const iter2 = set.values().next();
        value = undefined;
        if (iter2 != null) {
          value = iter2.value;
        }
        tmp = value === arg0;
        const iter = set.values();
      }
      return tmp;
    }
    const set = new Set();
    const map = new Map();
    return () => {
      const id = getCanRender.useId();
      closure_0 = id;
      let tmp2 = map(getCanRender.useState(() => {
        let tmp2 = 0 === set.size;
        if (!tmp2) {
          const iter2 = set.values().next();
          value = undefined;
          if (iter2 != null) {
            value = iter2.value;
          }
          tmp2 = value === tmp;
          const iter = set.values();
        }
        return tmp2;
      }), 2);
      let callback = tmp3;
      const items = [id];
      const insertionEffect = getCanRender.useInsertionEffect(() => {
        set.add(closure_0);
        const obj = { callback, canRender: null };
        let tmp4 = 0 === set.size;
        if (!tmp4) {
          const iter2 = obj.values().next();
          value = undefined;
          if (iter2 != null) {
            value = iter2.value;
          }
          tmp4 = value === tmp;
          const iter = obj.values();
        }
        obj.canRender = tmp4;
        const result = map.set(tmp, obj);
        return () => {
          set.delete(closure_1_0);
          set.delete(closure_1_0);
        };
      }, items);
      const items1 = [id, tmp2[1]];
      const layoutEffect = getCanRender.useLayoutEffect(() => {
        if (null == closure_0) {
          let resolved = Promise.resolve();
          closure_0 = resolved.then(() => {
            while (tmp2 !== undefined) {
              let tmp5 = set(tmp3, 2);
              [tmp6, tmp8] = tmp5;
              callback = tmp8.callback;
              let tmp7 = tmp6;
              let tmp10 = closure_1_3(tmp6);
              let tmp11 = tmp10;
              if (tmp10 !== tmp8.canRender) {
                let obj = { canRender: null, callback: null };
                obj.canRender = tmp11;
                obj.callback = callback;
                let result = closure_1_2.set(tmp7, obj);
                let callbackResult = callback(tmp11);
              }
              continue;
            }
            c0 = undefined;
          });
        }
        return () => {
          if (null == closure_0) {
            const resolved = Promise.resolve();
            closure_0 = resolved.then(() => { ... });
          }
        };
      }, items1);
      return tmp2[0];
    };
  })[0];
};
export const useLockedWebView = function useLockedWebView(transitionState) {
  transitionState = transitionState.transitionState;
  let shown;
  shown = transitionState(shown[2]).useSharedValue(false);
  const renderWebView = noop.useContext(transitionState.context).useActivityWebViewLock();
  const items = [shown, transitionState, renderWebView];
  const effect = noop.useEffect(() => {
    if (transitionState !== native.TransitionStates.YEETED) {
      if (renderWebView) {
        const result = shown.set(true);
      }
    }
    const result1 = shown.set(false);
  }, items);
  return { shown, renderWebView };
};