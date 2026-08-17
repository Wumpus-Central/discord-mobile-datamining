// _runtime/01137_captureReactException.js
import closure_2 from "00019_noop.js";

function captureReactException(closure_1, closure_2, arg2) {
  let weakSet = closure_1;
  const componentStack = closure_2.componentStack;
  let recurse = componentStack;
  const version = arg2;
  const match = version.version.match(/^([^.]+)/);
  let tmp2 = null !== match;
  if (tmp2) {
    const _parseInt = parseInt;
    tmp2 = parseInt(match[0]) >= 17;
  }
  if (tmp2) {
    if (obj.isError(closure_1)) {
      if (componentStack) {
        const _Error = Error;
        error = new Error(closure_1.message);
        const _HermesInternal = HermesInternal;
        error.name = "React ErrorBoundary " + closure_1.name;
        error.stack = componentStack;
        weakSet = undefined;
        const _WeakSet = WeakSet;
        weakSet = new WeakSet();
        recurse = function recurse(cause, error) {
          if (!weakSet.has(cause)) {
            if (cause.cause) {
              obj.add(cause);
              const tmp2 = recurse(cause.cause, error);
            } else {
              cause.cause = error;
            }
            return tmp2;
          }
          obj = weakSet;
        };
        if (!weakSet.has(closure_1)) {
          if (closure_1.cause) {
            weakSet.add(closure_1);
            const cause = closure_1.cause;
            if (!weakSet.has(cause)) {
              if (cause.cause) {
                weakSet.add(cause);
                recurse(cause.cause, error);
              } else {
                cause.cause = error;
              }
            }
          } else {
            closure_1.cause = error;
          }
        }
      }
    }
    obj = weakSet(recurse[1]);
  }
  return weakSet(recurse[2]).withScope((setContext) => {
    setContext.setContext("react", { componentStack: recurse });
    return weakSet(recurse[2]).captureException(weakSet, closure_2);
  });
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export { captureReactException };
export const isAtLeastReact17 = function isAtLeastReact17(str) {
  const match = str.match(/^([^.]+)/);
  let tmp2 = null !== match;
  if (tmp2) {
    const _parseInt = parseInt;
    tmp2 = parseInt(match[0]) >= 17;
  }
  return tmp2;
};
export function reactErrorHandler(arg0) {
  closure_0 = arg0;
  return (arg0, arg1) => {
    if (closure_0) {
      closure_0(arg0, arg1, closure_1_3(arg0, arg1, { mechanism: { handled: tmp2, type: "auto.function.react.error_handler" } }));
    }
  };
}
export const setCause = function setCause(cause, cause2) {
  const weakSet = new WeakSet();
  function recurse(cause, error) {
    if (!weakSet.has(cause)) {
      if (cause.cause) {
        obj.add(cause);
        const tmp2 = recurse(cause.cause, error);
      } else {
        cause.cause = error;
      }
      return tmp2;
    }
    obj = weakSet;
  }
  if (!weakSet.has(cause)) {
    if (cause.cause) {
      weakSet.add(cause);
      cause = cause.cause;
      if (!weakSet.has(cause)) {
        if (cause.cause) {
          weakSet.add(cause);
          recurse(cause.cause, cause2);
        } else {
          cause.cause = cause2;
        }
      }
    } else {
      cause.cause = cause2;
    }
  }
};