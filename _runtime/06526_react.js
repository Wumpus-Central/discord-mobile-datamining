// === Module 6526: react ===

// Module 6526 (react)
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;

let c2;
let map;
({ Keyboard: map, TextInput: c2 } = react_native);

export const useKeyboardManager = function useKeyboardManager(enabled) {
  enabled = enabled.enabled;
  const focused = enabled.focused;
  const ref = enabled.useRef(undefined);
  const ref2 = enabled.useRef(0);
  const ref3 = enabled.useRef(undefined);
  let closure_5 = enabled.useRef(enabled);
  const callback = enabled.useCallback(() => {
    if (undefined !== ref3.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(ref3.current);
      ref3.current = undefined;
    }
  }, []);
  const items = [callback];
  const items1 = [callback];
  const onPageChangeStart = enabled.useCallback(() => {
    if (closure_5.current) {
      callback();
      const result = ref.currentlyFocusedInput();
      if (result != null) {
        result.blur();
      }
      ref.State.current = result;
      const _Date = Date;
      ref2.current = Date.now();
    }
  }, items);
  const onPageChangeCancel = enabled.useCallback(() => {
    if (closure_5.current) {
      callback();
      const current = ref.current;
      if (current) {
        const _Date = Date;
        if (Date.now() - ref2.current < 100) {
          const _setTimeout = setTimeout;
          closure_4.current = setTimeout(() => {
            if (current != null) {
              current.focus();
            }
            ref.current = undefined;
          }, 100);
        } else {
          if (current != null) {
            current.focus();
          }
          tmp3.current = undefined;
        }
      }
    }
  }, items1);
  const items2 = [callback, onPageChangeCancel];
  const items3 = [focused];
  const onPageChangeConfirm = enabled.useCallback((closing) => {
    if (closure_5.current) {
      if (closing.closing) {
        callback();
        if (tmp) {
          if (tmp2) {
            const current = ref.current;
            if (current != null) {
              current.blur();
            }
          }
        } else {
          map.dismiss();
        }
        ref.current = undefined;
      } else {
        onPageChangeCancel();
      }
    }
  }, items2);
  const layoutEffect = enabled.useLayoutEffect(() => {
    const current = closure_5.current && !focused;
    if (current) {
      map.dismiss();
    }
  }, items3);
  const layoutEffect1 = enabled.useLayoutEffect(() => {
    closure_5.current = enabled;
  });
  const items4 = [callback];
  const effect = enabled.useEffect(() => () => callback(), items4);
  return { onPageChangeStart, onPageChangeConfirm, onPageChangeCancel };
};