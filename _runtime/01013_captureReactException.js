// === Module 1013: captureReactException ===

// Module 1013 (captureReactException)
import feedbackAsyncIntegration from "feedbackAsyncIntegration" /* 900 */;
import react_mod from "react" /* 19 */;

const require = globalThis.__r;
let _require;

function captureReactException(message, componentStack, arg2) {
  let closure_2;
  _require = message;
  componentStack = componentStack.componentStack;
  react = arg2;
  const str = react.version;
  const match = str.match(/^([^.]+)/);
  let tmp2 = null !== match;
  if (tmp2) {
    const _parseInt = parseInt;
    tmp2 = parseInt(match[0]) >= 17;
  }
  if (tmp2) {
    let obj = require("module_693");
    if (obj.isError(message)) {
      if (componentStack) {
        const _Error = Error;
        const self = this;
        const self2 = this;
        const error = new Error(message.message);
        const _HermesInternal = HermesInternal;
        error.name = "React ErrorBoundary " + message.name;
        error.stack = componentStack;
        const _WeakSet = WeakSet;
        const self3 = this;
        const self4 = this;
        const weakSet = new WeakSet();
        function recurse(cause, error) {
          if (!weakSet.has(cause)) {
            let tmp2;
            if (cause.cause) {
              weakSet.add(cause);
              tmp2 = recurse(cause.cause, error);
            } else {
              cause.cause = error;
            }
            return tmp2;
          }
        }
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
  }
  const obj3 = require("feedbackAsyncIntegration");
  return obj3.withScope((setContext) => {
    const obj = { componentStack };
    setContext.setContext("react", obj);
    const obj2 = feedbackAsyncIntegration;
    return obj2.captureException(message, closure_2);
  });
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let react = react_mod;

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
    const obj = { mechanism: { handled, type: "auto.function.react.error_handler" } };
    if (handled) {
      handled(message, componentStack, captureReactException(message, componentStack, obj));
    }
  };
}
export const setCause = function setCause(cause, cause2) {
  const weakSet = new WeakSet();
  function recurse(cause, error) {
    if (!weakSet.has(cause)) {
      let tmp2;
      if (cause.cause) {
        weakSet.add(cause);
        tmp2 = recurse(cause.cause, error);
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