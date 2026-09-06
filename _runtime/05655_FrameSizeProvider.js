// _runtime/05655_FrameSizeProvider.js
import _modDef1505 from "metro/01505__.js";
import _mod5657 from "metro/05657__.js";
import noop from "metro/00019__.js";

require = fn;
const Platform = fn(17).Platform;
const jsxProd = fn(21);
({ jsx, jsxs: closure_4 } = jsxProd);
const __react_navigation__elements_contexts = fn(5656);
let redux = __react_navigation__elements_contexts.getNamedContext("FrameContext", undefined);

export const useFrameSize = function useFrameSize(arg0, arg1) {
  const context = noop.useContext(closure_5);
  if (null == context) {
    const _Error = Error;
    const error = new Error("useFrameSize must be used within a FrameSizeProvider");
    throw error;
  } else {
    const obj = _mod5657;
    const tmp5 = arg1 ? context.subscribeThrottled : context.subscribe;
    return obj.useSyncExternalStoreWithSelector(tmp5, context.getCurrent, context.getCurrent, arg0);
  }
};
export const FrameSizeProvider = function FrameSizeProvider(initialFrame) {
  initialFrame = initialFrame.initialFrame;
  let size = { width: initialFrame.width, height: initialFrame.height };
  noop.useRef(size);
  noop.useRef(new Set());
  let tmp2 = _modDef1505(() => ref.current);
  const getCurrent = tmp2;
  const tmp3 = _modDef1505((arg0) => {
    closure_0 = arg0;
    let current = ref2.current;
    current.add(arg0);
    return () => {
      const current = ref.current;
      current.delete(closure_0);
    };
  });
  const subscribe = tmp3;
  const tmp4 = _modDef1505((arg0) => {
    closure_0 = arg0;
    c2 = false;
    c3 = false;
    closure_4 = subscribe(() => {
      clearTimeout(timeout);
      c2 = true;
      if (c3) {
        const _setTimeout2 = setTimeout;
        timeout = setTimeout(() => {
          if (c2) {
            c2 = false;
            closure_1_0();
          }
        }, 100);
      } else {
        c3 = true;
        const _setTimeout = setTimeout;
        const timerId = setTimeout(() => {
          c3 = false;
        }, 100);
        c2 = false;
        closure_0();
      }
    });
    return () => {
      closure_4();
      clearTimeout(closure_1);
    };
  });
  const subscribeThrottled = tmp4;
  const items = [tmp3, tmp4, tmp2];
  const memo = noop.useMemo(() => ({ getCurrent, subscribe, subscribeThrottled }), items);
  const tmp6 = _modDef1505((height) => {
    if (!tmp2) {
      const size = { width: null, height: null };
      ({ width: obj.width, height: obj.height } = height);
      ref.current = size;
      const current = ref2.current;
      const item = current.forEach((fn) => fn());
    }
    tmp2 = ref.current.height === height.height && ref.current.width === height.width;
  });
  redux = tmp6;
  const ref = noop.useRef(null);
  const items1 = [tmp6];
  const effect = noop.useEffect(() => {
    const current = ref.current;
    if (current != null) {
      current.measure((arg0, arg1, width, height) => {
        if (!tmp) {
          const size = { width, height };
          closure_1_5(size);
        }
        tmp = ref.current.width > 0 && ref.current.height > 0;
      });
    }
  }, items1);
  let obj = { value: memo, children: null };
  obj = {
    ref,
    onLayout(nativeEvent) {
      const layout = nativeEvent.nativeEvent.layout;
      const size = { width: layout.width, height: layout.height };
      closure_5(size);
    },
  };
  const items2 = [null, initialFrame.render(obj)];
  obj.children = items2;
  return React4(redux.Provider, obj);
};
