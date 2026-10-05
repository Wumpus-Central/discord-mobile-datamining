// discord_app/modules/tiny_bronco/native/useDismissOnce.tsx
import DismissibleContentConstants from "../../dismissible_content/DismissibleContentConstants.tsx";
import react_mod from "../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, dependencyMap;

let react = react_mod;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (current) => {
      let ref;
      let ref2;
      let tmp2;
      let tmp3;
      let tmp5;
      let tmp7;
      _require = current;
      const obj = require("react");
      const cResult = obj.c(6);
      dependencyMap = react.useRef(false);
      react = react.useRef(current);
      if (cResult[0] !== current) {
        const fn = function s() {
          ref2.current = current;
        };
        const items = [current];
        cResult[0] = current;
        cResult[1] = fn;
        cResult[2] = items;
        tmp3 = items;
        tmp2 = fn;
      } else {
        tmp2 = cResult[1];
        tmp3 = cResult[2];
      }
      const effect = obj2.useEffect(tmp2, tmp3);
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const fn2 = function f(AUTO_DISMISS) {
          if (!ref.current) {
            tmp.current = true;
            ref2.current(AUTO_DISMISS);
          }
        };
        cResult[3] = fn2;
        tmp5 = fn2;
      } else {
        tmp5 = cResult[3];
      }
      let closure_3 = tmp5;
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        class S {
          constructor() {
            return () => closure_1_3(closure_3.AUTO_DISMISS);
          }
        }
        const items1 = [tmp5];
        cResult[4] = S;
        cResult[5] = items1;
        tmp7 = items1;
      } else {
        class S {
          constructor() {
            return () => closure_1_3(closure_3.AUTO_DISMISS);
          }
        }
        tmp7 = cResult[5];
      }
      const effect1 = obj2.useEffect(S, tmp7);
      return tmp5;
    }
  : (current) => {
      let ref2;
      const ref = react.useRef(false);
      react = react.useRef(current);
      const items = [current];
      const effect = react.useEffect(() => {
        ref2.current = current;
      }, items);
      const callback = react.useCallback((AUTO_DISMISS) => {
        if (!ref.current) {
          tmp.current = true;
          ref2.current(AUTO_DISMISS);
        }
      }, []);
      const items1 = [callback];
      const effect1 = react.useEffect(() => () => closure_1_3(callback.AUTO_DISMISS), items1);
      return callback;
    };
const result = size.fileFinishedImporting("modules/tiny_bronco/native/useDismissOnce.tsx");

export const useDismissOnce = tmp2;
