// discord_app/modules/a11y/native/useAccessibilityPress.tsx
import react2 from "../../../../_runtime/00576_react.js";
import react from "../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, label) => {
      let items1;
      let tmp2;
      let tmp3;
      let tmp5;
      let tmp6;
      let closure_0 = arg0;
      const obj = react2;
      const cResult = obj.c(6);
      let closure_1 = react.useRef(arg0);
      if (cResult[0] !== arg0) {
        const fn = function s() {
          ref.current = current;
        };
        const items = [arg0];
        cResult[0] = arg0;
        cResult[1] = fn;
        cResult[2] = items;
        tmp3 = items;
        tmp2 = fn;
      } else {
        tmp2 = cResult[1];
        tmp3 = cResult[2];
      }
      const effect = react.useEffect(tmp2, tmp3);
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const fn2 = function u(nativeEvent) {
          if ("activate" === nativeEvent.nativeEvent.actionName) {
            ref.current();
          }
        };
        cResult[3] = fn2;
        tmp5 = fn2;
      } else {
        tmp5 = cResult[3];
      }
      if (cResult[4] !== label) {
        const obj3 = { onAccessibilityAction: tmp5, accessibilityActions: items1 };
        items1 = [{ name: "activate", label }];
        const obj4 = { name: "activate", label };
        cResult[4] = label;
        cResult[5] = obj3;
        tmp6 = obj3;
      } else {
        tmp6 = cResult[5];
      }
      return tmp6;
    }
  : (arg0, arg1) => {
      let closure_0 = arg0;
      let closure_1 = arg1;
      let closure_2 = react.useRef(arg0);
      let items = [arg0];
      const effect = react.useEffect(() => {
        closure_2.current = current;
      }, items);
      const items1 = [arg1];
      return react.useMemo(() => {
        let items;
        let ref;
        const obj = {
          onAccessibilityAction(nativeEvent) {
            if ("activate" === nativeEvent.nativeEvent.actionName) {
              ref.current();
            }
          },
          accessibilityActions: items,
        };
        items = [];
        const obj2 = { name: "activate", label };
        items[0] = obj2;
        return obj;
      }, items1);
    };
const result = size.fileFinishedImporting("modules/a11y/native/useAccessibilityPress.tsx");

export default tmp2;
