// === Module 16232: useActivityWebViewLockManager ===

// Module 16232 (useActivityWebViewLockManager)
import _slicedToArray from "_slicedToArray" /* 32 */;
import noop from "noop" /* 19 */;

const require = fn;
let result = require("obj132").fileFinishedImporting("modules/activities/panel/native/useActivityWebViewLockManager.tsx");

export default function useActivityWebViewLockManager() {
  return React.useState(() => {
    function getCanRender(arg0) {
      let tmp = 0 === set.size;
      if (!tmp) {
        const iter2 = set.values().next();
        let value;
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
      let tmp2 = map(getCanRender.useState(() => {
        let tmp2 = 0 === set.size;
        if (!tmp2) {
          const iter2 = set.values().next();
          let value;
          if (iter2 != null) {
            value = iter2.value;
          }
          tmp2 = value === tmp;
          const iter = set.values();
        }
        return tmp2;
      }), 2);
      closure_1 = tmp3;
      const items = [id];
      const insertionEffect = getCanRender.useInsertionEffect(() => {
        set.add(id);
        const obj = { callback: set, canRender: null };
        let tmp4 = 0 === set.size;
        if (!tmp4) {
          const iter2 = obj.values().next();
          let value;
          if (iter2 != null) {
            value = iter2.value;
          }
          tmp4 = value === id;
          const iter = obj.values();
        }
        obj[1] = tmp4;
        const result = map.set(id, obj);
        return () => {
          closure_1_1.delete(closure_0);
          closure_1_2.delete(closure_0);
        };
      }, items);
      const items1 = [id, tmp2[1]];
      const layoutEffect = getCanRender.useLayoutEffect(() => {
        if (null == closure_0) {
          let resolved = Promise.resolve();
          closure_0 = resolved.then((result) => {
            while (tmp2 !== undefined) {
              let tmp5 = closure_1_2(tmp3, 2);
              [tmp6, tmp8] = tmp5;
              let callback = tmp8.callback;
              let tmp10 = callback(tmp6);
              let tmp11 = tmp10;
              if (tmp10 !== tmp8.canRender) {
                let obj = { canRender: null, callback: null };
                obj[0] = tmp11;
                obj[1] = callback;
                result = lib.set(tmp6, obj);
                let callbackResult = callback(tmp11);
              }
              continue;
            }
            c0 = undefined;
            tmp2 = lib[Symbol.iterator]();
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
  const renderWebView = React.useContext(transitionState.context).useActivityWebViewLock();
  const items = [shown, transitionState, renderWebView];
  const effect = React.useEffect(() => {
    if (transitionState !== transitionState(shown[3]).TransitionStates.YEETED) {
      if (renderWebView) {
        const result = shown.set(true);
      }
    }
    const result1 = shown.set(false);
  }, items);
  return { shown, renderWebView };
};