// discord_app/modules/user_settings/premium/native/useScrollToSection.tsx
import react2 from "../../../../../_runtime/00576_react.js";
import react from "../../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, arg1) => {
      let closure_0 = arg0;
      let closure_1 = arg1;
      let obj = react2;
      const cResult = obj.c(5);
      let closure_2 = react.useRef(false);
      if (cResult[0] === arg1) {
        let tmp2;
        let tmp3;
        if (cResult[1] === arg0) {
          tmp2 = cResult[2];
        }
        if (cResult[3] !== tmp2) {
          const obj2 = { createSectionLayoutHandler: tmp2 };
          cResult[3] = tmp2;
          cResult[4] = obj2;
          tmp3 = obj2;
        } else {
          tmp3 = cResult[4];
        }
        return tmp3;
      }
      const fn = function c(arg0) {
        let ref2;
        const ref = arg0;
        return (nativeEvent) => {
          const current = ref !== closure_1 || ref2.current;
          if (!current) {
            ref2.current = true;
            const current2 = ref.current;
            if (current2 != null) {
              const obj = { y: nativeEvent.nativeEvent.layout.y, animated: true };
              current2.scrollTo(obj);
            }
          }
        };
      };
      cResult[0] = arg1;
      cResult[1] = arg0;
      cResult[2] = fn;
      tmp2 = fn;
    }
  : (arg0, arg1) => {
      let items;
      let closure_0 = arg0;
      let closure_1 = arg1;
      let closure_2 = react.useRef(false);
      let obj = {
        createSectionLayoutHandler: react.useCallback((arg0) => {
          let ref2;
          const ref = arg0;
          return (nativeEvent) => {
            const current = ref !== closure_1 || ref2.current;
            if (!current) {
              ref2.current = true;
              const current2 = ref.current;
              if (current2 != null) {
                const obj = { y: nativeEvent.nativeEvent.layout.y, animated: true };
                current2.scrollTo(obj);
              }
            }
          };
        }, items),
      };
      items = [arg1, arg0];
      return obj;
    };
const result = size.fileFinishedImporting("modules/user_settings/premium/native/useScrollToSection.tsx");

export default tmp2;
