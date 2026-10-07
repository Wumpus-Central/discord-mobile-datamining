// discord_app/modules/chat_input/native/useDebouncedSetChatInputState.tsx
import c from "../../../../_runtime/00576_c.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/chat_input/native/useDebouncedSetChatInputState.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, arg1) => {
      closure_0 = arg0;
      closure_1 = arg1;
      const cResult = c.c(11);
      noop.useRef(null);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function c() {
          if (null != ref.current) {
            const _clearTimeout = clearTimeout;
            clearTimeout(ref.current);
            ref.current = null;
          }
        };
        cResult[0] = fn;
        let first = fn;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const fn2 = function o() {
          return first;
        };
        const items = [first];
        cResult[1] = fn2;
        cResult[2] = items;
        let tmp4 = items;
        let tmp3 = fn2;
      } else {
        tmp3 = cResult[1];
        tmp4 = cResult[2];
      }
      const effect = noop.useEffect(tmp3, tmp4);
      if (cResult[3] === arg1) {
        if (cResult[4] === arg0) {
          let tmp6 = cResult[5];
        }
        if (cResult[6] !== arg0) {
          const fn4 = function v(arg0) {
            first();
            closure_0(arg0);
          };
          cResult[6] = arg0;
          cResult[7] = fn4;
          let tmp7 = fn4;
        } else {
          tmp7 = cResult[7];
        }
        if (cResult[8] === tmp6) {
          if (cResult[9] === tmp7) {
            let tmp8 = cResult[10];
          }
          return tmp8;
        }
        const obj3 = { setData: tmp6, setDataImmediate: tmp7 };
        cResult[8] = tmp6;
        cResult[9] = tmp7;
        cResult[10] = obj3;
        tmp8 = obj3;
      }
      const fn3 = function _(arg0) {
        closure_0 = arg0;
        first();
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
      };
      cResult[3] = arg1;
      cResult[4] = arg0;
      cResult[5] = fn3;
      tmp6 = fn3;
    }
  : (arg0, arg1) => {
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
    };
