// discord_app/design/components/Navigator/native/useFocusRefOnNavigation.tsx
import noop from "../../../../../_runtime/metro/00019__.js";

const require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Navigator/native/useFocusRefOnNavigation.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function useFocusRefOnNavigation(inputRef) {
      const cResult = inputRef(576).c(5);
      inputRef = inputRef.inputRef;
      const enabled = inputRef.enabled;
      dependencyMap = tmp4;
      const obj = inputRef(576);
      const isFocused = inputRef(1504).useIsFocused();
      if (cResult[0] === (undefined === enabled || enabled)) {
        if (cResult[1] === inputRef) {
          if (cResult[2] === isFocused) {
            let tmp6 = cResult[3];
            let tmp7 = cResult[4];
          }
          const effect = isFocused.useEffect(tmp6, tmp7);
        }
      }
      const fn = function u() {
        inputRef(closure_1[4]).runAfterInteractions(() => {
          let tmp = closure_1_1;
          if (closure_1_1) {
            tmp = isFocused;
          }
          if (tmp) {
            const current = ref.current;
            if (current != null) {
              current.focus();
            }
          }
        });
        return () => {
          ref.cancel();
        };
      };
      const items = [undefined === enabled || enabled, inputRef, isFocused];
      cResult[0] = undefined === enabled || enabled;
      cResult[1] = inputRef;
      cResult[2] = isFocused;
      cResult[3] = fn;
      cResult[4] = items;
      tmp7 = items;
      tmp6 = fn;
    }
  : function useFocusRefOnNavigation(inputRef) {
      inputRef = inputRef.inputRef;
      let flag = inputRef.enabled;
      if (flag === undefined) {
        flag = true;
      }
      const isFocused = inputRef(flag[3]).useIsFocused();
      const items = [flag, inputRef, isFocused];
      const effect = isFocused.useEffect(() => {
        inputRef(flag[4]).runAfterInteractions(() => {
          let tmp = flag;
          if (flag) {
            tmp = isFocused;
          }
          if (tmp) {
            const current = ref.current;
            if (current != null) {
              current.focus();
            }
          }
        });
        return () => {
          ref.cancel();
        };
      }, items);
    };
