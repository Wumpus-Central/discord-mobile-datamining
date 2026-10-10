// discord_app/modules/conjure/debug/conjureTraceRequests.tsx
import noop from "../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

const require = fn;
const set = new Set();
let c4 = null;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/debug/conjureTraceRequests.tsx");

export const requestConjureTrace = function requestConjureTrace(projectId, traceId) {
  c4 = { projectId, traceId };
  const items = [...set];
  for (const item10012 of items) {
    let item10012Result = item10012(arg0);
    continue;
  }
};
export const hasConjureTraceRequest = function hasConjureTraceRequest(arg0) {
  let projectId;
  if (_null != null) {
    projectId = _null.projectId;
  }
  return projectId === arg0;
};
export const takeConjureTraceRequest = function takeConjureTraceRequest(projectId) {
  if (null != _null) {
    if (_null.projectId === projectId) {
      _null = null;
      return _null.traceId;
    }
  }
  return null;
};
export const useConjureTraceRequests = ReactCompilerGating.isReactCompilerEnabled()
  ? function useConjureTraceRequests(arg0, current) {
      _require = arg0;
      dependencyMap = current;
      const cResult = require("c").c(5);
      noop = noop.useRef(current);
      if (cResult[0] !== current) {
        const fn = function s() {
          closure_2.current = current;
        };
        cResult[0] = current;
        cResult[1] = fn;
        let tmp2 = fn;
      } else {
        tmp2 = cResult[1];
      }
      const layoutEffect = obj2.useLayoutEffect(tmp2);
      if (cResult[2] !== arg0) {
        const fn2 = function o() {
          if (null != listener) {
            listener = function listener(arg0) {
              if (arg0 === listener) {
                ref.current();
              }
            };
            set.add(listener);
            return () => {
              set.delete(listener);
            };
          }
        };
        const items = [arg0];
        cResult[2] = arg0;
        cResult[3] = fn2;
        cResult[4] = items;
        let tmp5 = items;
        let tmp4 = fn2;
      } else {
        tmp4 = cResult[3];
        tmp5 = cResult[4];
      }
      const effect = obj2.useEffect(tmp4, tmp5);
    }
  : function useConjureTraceRequests(arg0, current) {
      closure_0 = arg0;
      noop = noop.useRef(current);
      const layoutEffect = noop.useLayoutEffect(() => {
        closure_2.current = current;
      });
      const items = [arg0];
      const effect = noop.useEffect(() => {
        if (null != listener) {
          listener = function listener(arg0) {
            if (arg0 === listener) {
              ref.current();
            }
          };
          set.add(listener);
          return () => {
            set.delete(listener);
          };
        }
      }, items);
    };
