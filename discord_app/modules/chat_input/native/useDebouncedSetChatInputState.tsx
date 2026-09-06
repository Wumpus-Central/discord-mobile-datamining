// === Module 12391: useDebouncedSetChatInputState ===

// Module 12391 (useDebouncedSetChatInputState)
import closure_0 from "noop" /* 19 */;

const result = require("set").fileFinishedImporting("modules/chat_input/native/useDebouncedSetChatInputState.tsx");

export default function useDebouncedSetChatInputState(arg0, arg1) {
  const React = arg0;
  closure_1 = arg1;
  closure_2 = React.useRef(null);
  const callback = React.useCallback(() => {
    if (null != ref.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(tmp.current);
      tmp.current = null;
    }
  }, []);
  const items = [callback];
  const effect = React.useEffect(() => callback, items);
  const items1 = [callback, arg0, arg1];
  const items2 = [callback, arg0];
  return {
    setData: React.useCallback((arg0) => {
      closure_0 = arg0;
      callback();
      closure_2.current = setTimeout(() => {
        callback((focused) => {
          let tmp2 = focused;
          if (focused.focused === focused.focused) {
            tmp2 = tmp;
            if (focused.text === tmp.text) {
              tmp2 = tmp;
              if (focused.selectionStart === tmp.selectionStart) {
                tmp2 = tmp;
                if (focused.selectionEnd === tmp.selectionEnd) {
                  tmp2 = focused;
                }
              }
            }
          }
          return tmp2;
        });
      }, closure_1);
    }, items1),
    setDataImmediate: React.useCallback((arg0) => {
      callback();
      callback(arg0);
    }, items2)
  };
};