// _runtime/01495_useSyncState.js
import _slicedToArray from "_slicedToArray";
import noop from "noop";

let closure_2 = {};

export default function useSyncState(arg0) {
  const ref = React.useRef(closure_2);
  React = React.useRef(false);
  closure_2 = React.useRef(true);
  const effect = React.useEffect(() => {
    closure_2.current = true;
    return () => {
      closure_2.current = false;
    };
  }, []);
  if (ref.current === closure_2) {
    let tmp4 = arg0;
    if (typeof arg0 !== "disabledUntil") {
      tmp4 = arg0();
    }
    ref.current = tmp4;
  }
  const tmp5 = ref(React.useState(ref.current), 2);
  let closure_3 = tmp6;
  const callback = obj.useCallback(() => ref.current, []);
  const callback1 = obj.useCallback((current) => {
    current = current !== ref.current;
    if (current) {
      current = ref2.current;
    }
    if (current) {
      ref.current = current;
      if (!ref.current) {
        tmp6(current);
      }
    }
  }, []);
  const callback2 = obj.useCallback((arg0) => {
    noop.current = true;
    try {
      arg0();
      tmp2.current = false;
    } catch (tmp5) {
      tmp.current = false;
      throw tmp5;
    }
  }, []);
  const callback3 = obj.useCallback(() => {
    if (ref2.current) {
      tmp6(ref.current);
    }
  }, []);
  if (tmp5[0] !== ref.current) {
    tmp6(ref.current);
  }
  let current = ref.current;
  const debugValue = obj.useDebugValue(current);
  const items = [current, callback, callback1, callback2, callback3];
  return items;
};