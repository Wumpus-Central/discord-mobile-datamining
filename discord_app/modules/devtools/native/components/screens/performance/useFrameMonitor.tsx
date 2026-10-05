// discord_app/modules/devtools/native/components/screens/performance/useFrameMonitor.tsx
import startFrameMonitor from "startFrameMonitor.tsx";
import _slicedToArray_mod from "../../../../../../../_runtime/metro/00032__slicedToArray.js";
import react_mod from "../../../../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, current;

let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (current) => {
      let ref;
      let ref2;
      let tmp10;
      let tmp3;
      let tmp4;
      let tmp5;
      let tmp7;
      _require = current;
      let obj = require("react");
      const cResult = obj.c(9);
      [tmp3, dependencyMap] = react.useState(false);
      _slicedToArray(react.useState(false), 2);
      _slicedToArray = react.useRef(null);
      react = react.useRef(current);
      if (cResult[0] !== current) {
        const fn = function c() {
          ref2.current = current;
        };
        const items = [current];
        cResult[0] = current;
        cResult[1] = fn;
        cResult[2] = items;
        tmp5 = items;
        tmp4 = fn;
      } else {
        tmp4 = cResult[1];
        tmp5 = cResult[2];
      }
      const effect = obj2.useEffect(tmp4, tmp5);
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const fn2 = function s() {
          current = ref.current;
          if (current != null) {
            current.stop();
          }
          const obj = startFrameMonitor;
          ref.current = obj.startFrameMonitor();
          dependencyMap(true);
        };
        cResult[3] = fn2;
        tmp7 = fn2;
      } else {
        tmp7 = cResult[3];
      }
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        class R {
          constructor() {
            current = ref.current;
            if (null != current) {
              ref.current = null;
              const stopResult = current.stop();
              dependencyMap(false);
              ref2.current(stopResult);
            }
          }
        }
        cResult[4] = R;
      } else {
        class R {
          constructor() {
            current = ref.current;
            if (null != current) {
              ref.current = null;
              const stopResult = current.stop();
              dependencyMap(false);
              ref2.current(stopResult);
            }
          }
        }
      }
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        class R {
          constructor() {
            current = ref.current;
            if (null != current) {
              ref.current = null;
              const stopResult = current.stop();
              dependencyMap(false);
              ref2.current(stopResult);
            }
          }
        }
        const items1 = [];
        cResult[5] = tmp11;
        cResult[6] = items1;
        tmp10 = items1;
      } else {
        class R {
          constructor() {
            current = ref.current;
            if (null != current) {
              ref.current = null;
              const stopResult = current.stop();
              dependencyMap(false);
              ref2.current(stopResult);
            }
          }
        }
        tmp10 = cResult[6];
      }
      const effect1 = obj2.useEffect(tmp11, tmp10);
      if (cResult[7] !== tmp3) {
        class R {
          constructor() {
            current = ref.current;
            if (null != current) {
              ref.current = null;
              const stopResult = current.stop();
              dependencyMap(false);
              ref2.current(stopResult);
            }
          }
        }
        tmp14[0] = tmp3;
        tmp14[1] = tmp7;
        tmp14[2] = R;
        cResult[7] = tmp3;
        cResult[8] = tmp14;
      } else {
        class R {
          constructor() {
            current = ref.current;
            if (null != current) {
              ref.current = null;
              const stopResult = current.stop();
              dependencyMap(false);
              ref2.current(stopResult);
            }
          }
        }
      }
      return tmp14;
    }
  : (current) => {
      let closure_1;
      let monitoring;
      let ref;
      let ref2;
      [monitoring, closure_1] = react.useState(false);
      _slicedToArray = react.useRef(null);
      react = react.useRef(current);
      const items = [current];
      const effect = react.useEffect(() => {
        ref2.current = current;
      }, items);
      const start = react.useCallback(() => {
        current = ref.current;
        if (current != null) {
          current.stop();
        }
        const obj = startFrameMonitor;
        ref.current = obj.startFrameMonitor();
        closure_1(true);
      }, []);
      const stop = react.useCallback(() => {
        current = ref.current;
        if (null != current) {
          ref.current = null;
          const stopResult = current.stop();
          closure_1(false);
          ref2.current(stopResult);
        }
      }, []);
      const effect1 = react.useEffect(
        () => () => {
          current = ref.current;
          if (current != null) {
            current.stop();
          }
          ref.current = null;
        },
        [],
      );
      return { monitoring, start, stop };
    };
const result = size.fileFinishedImporting("modules/devtools/native/components/screens/performance/useFrameMonitor.tsx");

export default tmp2;
