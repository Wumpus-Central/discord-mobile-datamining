// _runtime/06050_FrameSizeProvider.js
import react_native from "00017_react-native.js";
import useLatestCallbackDefault from "01512_useLatestCallback.js";
import react2 from "06052_react.js";
import "react";
import Fragment from "react/00021_Fragment.js";
import react from "06051_react.js";

let set, size;

let closure_4;
let jsx;
const Platform = react_native.Platform;
({ jsx, jsxs: closure_4 } = Fragment);
let redux = react.getNamedContext("FrameContext", undefined);

export const useFrameSize = function useFrameSize(arg0, arg1) {
  const context = react.useContext(redux);
  if (null == context) {
    const _Error = Error;
    const self = this;
    const self2 = this;
    const error = new Error("useFrameSize must be used within a FrameSizeProvider");
    throw error;
  } else {
    const obj = react2;
    const tmp5 = arg1 ? context.subscribeThrottled : context.subscribe;
    return obj.useSyncExternalStoreWithSelector(tmp5, context.getCurrent, context.getCurrent, arg0);
  }
};
export const FrameSizeProvider = function FrameSizeProvider(initialFrame) {
  let items2;
  initialFrame = initialFrame.initialFrame;
  size = { width: initialFrame.width, height: initialFrame.height };
  const render = initialFrame.render;
  let closure_0 = react.useRef(size);
  const useRef = react.useRef;
  set = new Set();
  let closure_1 = useRef(set);
  let tmp2 = useLatestCallbackDefault(() => ref.current);
  let closure_2 = tmp2;
  const tmp3 = useLatestCallbackDefault((arg0) => {
    let closure_0 = arg0;
    let current = ref2.current;
    current.add(arg0);
    return () => {
      const current = ref.current;
      current.delete(closure_0);
    };
  });
  let closure_3 = tmp3;
  const tmp4 = useLatestCallbackDefault((arg0) => {
    let closure_0 = arg0;
    let c2 = false;
    let c3 = false;
    let closure_4 = subscribe(() => {
      let timeout;
      clearTimeout(timeout);
      c2 = true;
      const tmp2 = c3;
      if (tmp2) {
        const _setTimeout2 = setTimeout;
        timeout = setTimeout(() => {
          const tmp = c2;
          if (tmp) {
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
  let closure_4 = tmp4;
  const items = [tmp3, tmp4, tmp2];
  const memo = react.useMemo(() => ({ getCurrent, subscribe, subscribeThrottled }), items);
  const tmp6 = useLatestCallbackDefault((height) => {
    const tmp2 = ref.current.height === height.height && ref.current.width === height.width;
    if (!tmp2) {
      size = { width: null, height: null };
      ({ width: obj.width, height: obj.height } = height);
      ref.current = size;
      const current = ref2.current;
      const item = current.forEach((fn) => fn());
    }
  });
  redux = tmp6;
  const ref = react.useRef(null);
  const items1 = [tmp6];
  const effect = react.useEffect(() => {
    const current = ref.current;
    if (current != null) {
      current.measure((arg0, arg1, width, height) => {
        const tmp = ref.current.width > 0 && ref.current.height > 0;
        if (!tmp) {
          size = { width, height };
          closure_1_5(size);
        }
      });
    }
  }, items1);
  const obj = { value: memo, children: items2 };
  const Provider = redux.Provider;
  items2 = [null];
  const obj2 = {
    ref,
    onLayout(nativeEvent) {
      const layout = nativeEvent.nativeEvent.layout;
      size = { width: layout.width, height: layout.height };
      closure_5(size);
    },
  };
  items2[1] = render(obj2);
  return React3(Provider, obj);
};
