// discord_app/design/components/Navigator/native/useFocusRefOnNavigation.tsx
import react from "../../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../../../modules/react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let dependencyMap, inputRef;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (inputRef) => {
      let closure_1;
      let tmp = inputRef;
      let obj = inputRef(576);
      const cResult = obj.c(5);
      inputRef = inputRef.inputRef;
      const enabled = inputRef.enabled;
      dependencyMap = tmp4;
      const tmpResult = tmp(1491);
      const isFocused = tmpResult.useIsFocused();
      if (cResult[0] === (undefined === enabled || enabled)) {
        if (cResult[1] === inputRef) {
          let tmp6;
          let tmp7;
          if (cResult[2] === isFocused) {
            tmp6 = cResult[3];
            tmp7 = cResult[4];
          }
          const effect = isFocused.useEffect(tmp6, tmp7);
        }
      }
      const fn = function u() {
        const obj = inputRef(closure_1[4]);
        const ref = obj.runAfterInteractions(() => {
          const tmp = closure_1_1 && isFocused;
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
  : (inputRef) => {
      inputRef = inputRef.inputRef;
      let flag = inputRef.enabled;
      if (flag === undefined) {
        flag = true;
      }
      let obj = inputRef(flag[3]);
      const isFocused = obj.useIsFocused();
      const items = [flag, inputRef, isFocused];
      const effect = isFocused.useEffect(() => {
        const obj = inputRef(flag[4]);
        const ref = obj.runAfterInteractions(() => {
          const tmp = flag && isFocused;
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
const result = size.fileFinishedImporting("design/components/Navigator/native/useFocusRefOnNavigation.tsx");

export default tmp2;
