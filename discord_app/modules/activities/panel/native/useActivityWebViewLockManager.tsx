// discord_app/modules/activities/panel/native/useActivityWebViewLockManager.tsx
import native from "../../../../../discord_common/js/packages/design/native.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../../_runtime/00019_react.js";
import size from "../../../../../_runtime/metro/00002__.js";

let c0, closure_0, map, set;

let result = size.fileFinishedImporting("modules/activities/panel/native/useActivityWebViewLockManager.tsx");

export default function useActivityWebViewLockManager() {
  return react.useState(() => {
    function getCanRender(arg0) {
      let tmp = 0 === set.size;
      if (!tmp) {
        const iter = set.values();
        const iter2 = iter.next();
        let value;
        if (iter2 != null) {
          value = iter2.value;
        }
        tmp = value === arg0;
      }
      return tmp;
    }
    set = new Set();
    map = new Map();
    return () => {
      let id = getCanRender.useId();
      let tmp2 = map(
        getCanRender.useState(() => {
          let tmp2 = 0 === set.size;
          if (!tmp2) {
            const iter = set.values();
            const iter2 = iter.next();
            let value;
            if (iter2 != null) {
              value = iter2.value;
            }
            tmp2 = value === tmp;
          }
          return tmp2;
        }),
        2,
      );
      let tmp4 = tmp2[1];
      let callback = tmp4;
      const items = [id];
      const first = tmp2[0];
      const insertionEffect = getCanRender.useInsertionEffect(() => {
        let tmp4;
        set.add(id);
        const obj2 = { callback, canRender: tmp4 };
        tmp4 = 0 === set.size;
        const obj = set;
        set = map.set;
        if (!tmp4) {
          const iter = obj.values();
          const iter2 = iter.next();
          let value;
          if (iter2 != null) {
            value = iter2.value;
          }
          tmp4 = value === id;
        }
        const result = set(id, obj2);
        return () => {
          set.delete(id);
          set.delete(id);
        };
      }, items);
      const items1 = [id, tmp4];
      const layoutEffect = getCanRender.useLayoutEffect(() => {
        const f153639 = () => {
          let tmp6;
          let tmp8;
          const tmp2 = closure_1_2[Symbol.iterator]();
          while (tmp2 !== undefined) {
            let tmp5 = set(tmp3, 2);
            [tmp6, tmp8] = tmp5;
            callback = tmp8.callback;
            let canRender = tmp8.canRender;
            let tmp10 = closure_1_3(tmp6);
            let tmp11 = tmp10;
            if (tmp10 !== canRender) {
              let obj = { canRender: tmp11, callback };
              let result = closure_1_2.set(tmp6, obj);
              let callbackResult = callback(tmp11);
            }
            continue;
          }
          c0 = undefined;
        };
        if (null == id) {
          let resolved = Promise.resolve();
          id = resolved.then(f153639);
        }
        return () => {
          if (null == closure_0) {
            const resolved = Promise.resolve();
            closure_0 = resolved.then(f153639);
          }
        };
      }, items1);
      return first;
    };
  })[0];
}
export const useLockedWebView = function useLockedWebView(transitionState) {
  transitionState = transitionState.transitionState;
  let shown;
  const context = transitionState.context;
  const obj = transitionState(shown[2]);
  shown = obj.useSharedValue(false);
  const renderWebView = react.useContext(context).useActivityWebViewLock();
  const items = [shown, transitionState, renderWebView];
  const effect = react.useEffect(() => {
    if (transitionState !== native.TransitionStates.YEETED) {
      if (renderWebView) {
        const result = shown.set(true);
      }
    }
    const result1 = shown.set(false);
  }, items);
  return { shown, renderWebView };
};
