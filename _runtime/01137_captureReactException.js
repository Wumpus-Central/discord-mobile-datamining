// === Module 1137: captureReactException ===

// Module 1137 (captureReactException)
import noop from "noop" /* 19 */;

function captureReactException(closure_1, closure_2, arg2) {
  let weakSet = dependencyMap;
  const componentStack = noop.componentStack;
  let recurse = componentStack;
  noop = arg2;
  const match = noop.version.match(/^([^.]+)/);
  let tmp2 = null !== match;
  if (tmp2) {
    const _parseInt = parseInt;
    tmp2 = parseInt(match[0]) >= 17;
  }
  if (tmp2) {
    if (obj.isError(dependencyMap)) {
      if (componentStack) {
        const _Error = Error;
        error = new Error(dependencyMap.message);
        const _HermesInternal = HermesInternal;
        error.name = "React ErrorBoundary " + dependencyMap.name;
        error.stack = componentStack;
        const _WeakSet = WeakSet;
        weakSet = new WeakSet();
        recurse = function recurse(cause, error) {
          if (!weakSet.has(cause)) {
            if (cause.cause) {
              weakSet.add(cause);
              const tmp2 = recurse(cause.cause, error);
            } else {
              cause.cause = error;
            }
            return tmp2;
          }
        };
        if (!weakSet.has(dependencyMap)) {
          if (dependencyMap.cause) {
            weakSet.add(dependencyMap);
            const cause = dependencyMap.cause;
            if (!weakSet.has(cause)) {
              if (cause.cause) {
                weakSet.add(cause);
                recurse(cause.cause, error);
              } else {
                cause.cause = error;
              }
            }
          } else {
            dependencyMap.cause = error;
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
  return (table, closure_2) => {
    if (callback) {
      callback(table, closure_2, captureReactException(table, closure_2, { mechanism: { handled: callback, type: "auto.function.react.error_handler" } }));
    }
  };
}
export const setCause = function setCause(cause, cause2) {
  const weakSet = new WeakSet();
  function recurse(cause, error) {
    if (!weakSet.has(cause)) {
      if (cause.cause) {
        weakSet.add(cause);
        const tmp2 = recurse(cause.cause, error);
      } else {
        cause.cause = error;
      }
      return tmp2;
    }
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