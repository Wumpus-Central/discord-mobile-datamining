// discord_app/modules/chat_input/native/useDebouncedSetChatInputState.tsx
import noop from "../../../../_runtime/metro/00019__.js";

const size = fn(2);
const result = size.fileFinishedImporting("modules/chat_input/native/useDebouncedSetChatInputState.tsx");

export default function useDebouncedSetChatInputState(arg0, arg1) {
  closure_0 = arg0;
  closure_1 = arg1;
  noop.useRef(null);
  const callback = noop.useCallback(() => {
    if (null != ref.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(ref.current);
      ref.current = null;
    }
  }, []);
  const items = [callback];
  const effect = noop.useEffect(() => callback, items);
  const obj = { setData: null, setDataImmediate: null };
  const items1 = [callback, arg0, arg1];
  obj.setData = noop.useCallback((arg0) => {
    closure_0 = arg0;
    callback();
    closure_2.current = setTimeout(() => {
      focused((focused) => {
        let tmp2 = focused;
        if (focused.focused === focused.focused) {
          tmp2 = focused;
          if (focused.text === focused.text) {
            tmp2 = focused;
            if (focused.selectionStart === focused.selectionStart) {
              tmp2 = focused;
              if (focused.selectionEnd === focused.selectionEnd) {
                tmp2 = focused;
              }
            }
          }
        }
        return tmp2;
      });
    }, closure_1);
  }, items1);
  const items2 = [callback, arg0];
  obj.setDataImmediate = noop.useCallback((arg0) => {
    callback();
    closure_0(arg0);
  }, items2);
  return obj;
}
