// discord_app/modules/checkpoint/native/components/CheckpointStepHeaderRefContext.tsx
import noop from "../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

const require = fn;
const jsx = fn(21).jsx;
const context = noop.createContext(undefined);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointStepHeaderRefContext.tsx");

export default context;
export const CheckpointStepFocusProvider = ReactCompilerGating.isReactCompilerEnabled()
  ? function CheckpointStepFocusProvider(arg0) {
      const cResult = require("c").c(8);
      ({ route, children } = arg0);
      _require = noop.useRef(null);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function u(current) {
          closure_0.current = current;
        };
        cResult[0] = fn;
        let first = fn;
      } else {
        first = cResult[0];
      }
      const obj = require("c");
      isScreenReaderEnabled = require("useIsScreenReaderEnabled").useIsScreenReaderEnabled();
      if (cResult[1] !== isScreenReaderEnabled) {
        const fn2 = function p() {
          if (isScreenReaderEnabled) {
            const _setTimeout = setTimeout;
            setTimeout(() => ref(isScreenReaderEnabled[5]).setAccessibilityFocus({ ref }), 100);
            return () => clearTimeout(closure_0);
          }
        };
        cResult[1] = isScreenReaderEnabled;
        cResult[2] = fn2;
        let tmp6 = fn2;
      } else {
        tmp6 = cResult[2];
      }
      if (cResult[3] === isScreenReaderEnabled) {
        if (cResult[4] === route) {
          let tmp7 = cResult[5];
        }
        const effect = noop.useEffect(tmp6, tmp7);
        if (cResult[6] !== children) {
          const obj3 = { value: first, children };
          const tmp12 = <context.Provider value={first}>{children}</context.Provider>;
          cResult[6] = children;
          cResult[7] = tmp12;
          let tmp9 = tmp12;
        } else {
          tmp9 = cResult[7];
        }
        return tmp9;
      }
      const items = [route, isScreenReaderEnabled];
      cResult[3] = isScreenReaderEnabled;
      cResult[4] = route;
      cResult[5] = items;
      tmp7 = items;
      const tmpResult = require("useIsScreenReaderEnabled");
    }
  : function CheckpointStepFocusProvider(arg0) {
      let isScreenReaderEnabled;
      ({ route, children } = arg0);
      _require = noop.useRef(null);
      value = noop.useCallback((current) => {
        closure_0.current = current;
      }, []);
      isScreenReaderEnabled = require("useIsScreenReaderEnabled").useIsScreenReaderEnabled();
      const items = [route, isScreenReaderEnabled];
      const effect = noop.useEffect(() => {
        if (isScreenReaderEnabled) {
          const _setTimeout = setTimeout;
          setTimeout(() => ref(isScreenReaderEnabled[5]).setAccessibilityFocus({ ref }), 100);
          return () => clearTimeout(closure_0);
        }
      }, items);
      return <context.Provider value={value}>{children}</context.Provider>;
    };
