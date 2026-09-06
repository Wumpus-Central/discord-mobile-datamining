// === Module 1002: captureReactException ===

// Module 1002 (captureReactException)
import feedbackAsyncIntegration from "feedbackAsyncIntegration" /* 889 */;
import noop from "module_19" /* 19 */;

function captureReactException(message, componentStack, arg2) {
  let weakSet = message;
  componentStack = componentStack.componentStack;
  let recurse = componentStack;
  noop = arg2;
  const match = noop.version.match(/^([^.]+)/);
  let tmp2 = null !== match;
  if (tmp2) {
    const _parseInt = parseInt;
    tmp2 = parseInt(match[0]) >= 17;
  }
  if (tmp2) {
    if (obj.isError(message)) {
      if (componentStack) {
        const _Error = Error;
        const error = new Error(message.message);
        const _HermesInternal = HermesInternal;
        error.name = "React ErrorBoundary " + message.name;
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
        if (!weakSet.has(message)) {
          if (message.cause) {
            weakSet.add(message);
            const cause = message.cause;
            if (!weakSet.has(cause)) {
              if (cause.cause) {
                weakSet.add(cause);
                recurse(cause.cause, error);
              } else {
                cause.cause = error;
              }
            }
          } else {
            message.cause = error;
          }
        }
      }
    }
    obj = weakSet(recurse[1]);
  }
  return weakSet(recurse[2]).withScope((setContext) => {
    setContext.setContext("react", { componentStack: recurse });
    return feedbackAsyncIntegration.captureException(weakSet, closure_2);
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
export function reactErrorHandler(handled) {
  return (message, componentStack) => {
    if (handled) {
      handled(message, componentStack, captureReactException(message, componentStack, obj));
    }
    obj = { mechanism: { handled, type: "auto.function.react.error_handler" } };
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