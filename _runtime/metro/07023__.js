// _runtime/metro/07023__.js
import noop from "00019__.js";

get_ActivityIndicator = fn(17);
({ Keyboard: closure_1, TextInput: c2 } = get_ActivityIndicator);

export const useKeyboardManager = function useKeyboardManager(enabled) {
  enabled = enabled.enabled;
  const focused = enabled.focused;
  enabled.useRef(undefined);
  enabled.useRef(0);
  enabled.useRef(undefined);
  closure_5 = enabled.useRef(enabled);
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
      State = State.State;
      const result = State.currentlyFocusedInput();
      if (result != null) {
        result.blur();
      }
      closure_2.current = result;
      const _Date = Date;
      closure_3.current = Date.now();
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
            closure_2.current = undefined;
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
  const onPageChangeConfirm = enabled.useCallback((active) => {
    active = active.active;
    if (closure_5.current) {
      if (active.closing) {
        callback();
        if (tmp) {
          if (active) {
            active = ref;
            const current = ref.current;
            if (current != null) {
              active = current.blur();
            }
          }
        } else {
          framebus.dismiss();
        }
        ref.current = undefined;
      } else {
        onPageChangeCancel();
      }
    }
  }, items2);
  const layoutEffect = enabled.useLayoutEffect(() => {
    let current = closure_5.current;
    if (current) {
      current = !focused;
    }
    if (current) {
      framebus.dismiss();
    }
  }, items3);
  const layoutEffect1 = enabled.useLayoutEffect(() => {
    closure_5.current = enabled;
  });
  const items4 = [callback];
  const effect = enabled.useEffect(() => () => callback(), items4);
  return { onPageChangeStart, onPageChangeConfirm, onPageChangeCancel };
};
