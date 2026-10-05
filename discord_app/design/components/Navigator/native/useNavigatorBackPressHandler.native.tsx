// discord_app/design/components/Navigator/native/useNavigatorBackPressHandler.native.tsx
import useBackPressHandler from "../../../../modules/routing/native/useBackPressHandler.tsx";
import react from "../../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../../../modules/react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, dependencyMap;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (current) => {
      let closure_1;
      let tmp4;
      let tmp6;
      _require = current;
      let obj = require("react");
      const cResult = obj.c(3);
      dependencyMap = react.useRef(current);
      const tmp = _require;
      if (cResult[0] !== current) {
        const fn = function t() {
          closure_1.current = current;
        };
        cResult[0] = current;
        cResult[1] = fn;
        tmp4 = fn;
      } else {
        tmp4 = cResult[1];
      }
      const layoutEffect = react.useLayoutEffect(tmp4);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const fn2 = function u() {
          let ref;
          const obj = useBackPressHandler;
          return obj.subscribeToBackPress(() => ref.current());
        };
        cResult[2] = fn2;
        tmp6 = fn2;
      } else {
        tmp6 = cResult[2];
      }
      const tmpResult = tmp(1491);
      const focusEffect = tmpResult.useFocusEffect(tmp6);
    }
  : (current) => {
      let closure_1;
      _require = current;
      dependencyMap = react.useRef(current);
      const layoutEffect = react.useLayoutEffect(() => {
        closure_1.current = current;
      });
      let obj = require("Link");
      const focusEffect = obj.useFocusEffect(
        react.useCallback(() => {
          let ref;
          const obj = useBackPressHandler;
          return obj.subscribeToBackPress(() => ref.current());
        }, []),
      );
    };
const result = size.fileFinishedImporting("design/components/Navigator/native/useNavigatorBackPressHandler.native.tsx");

export const useNavigatorBackPressHandler = tmp2;
