// === Module 10150: DiscoverRequestDeadline ===

// Module 10150 (DiscoverRequestDeadline)
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

let closure_1 = async function _withDiscoverRequestDeadline(arg0, arg1) {
  let signal = arg0;
  closure_1 = arg1;
  c3 = 0;
  c6 = 0;
  c5 = 0;
  return (async (arg0, value) => {
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp5 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c6 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_2 = tmp6;
            closure_130_0 = signal;
            closure_130_1 = closure_1;
            closure_130_2 = undefined;
            let signal2;
            let timeout;
            signal2 = signal.signal;
            const _setTimeout = setTimeout;
            timeout = setTimeout(() => signal.abort(), 30000);
            c5 = 1;
            const promise = new Promise((arg0, arg1) => {
              closure_0 = arg0;
              closure_1 = arg1;
              closure_2 = function o() {
                const error = new Error("Discover request aborted");
                return closure_1(error);
              };
              const listener = closure_3.addEventListener("abort", closure_2, { once: true });
              if (closure_3.aborted) {
                if (typeof closure_2 === "function") {
                  const _Error = Error;
                  let error = new Error("Discover request aborted");
                  closure_130_1(error);
                } else {
                  throw new TypeError("Trying to call a non-function");
                }
              } else {
                (function observeRequest() {
                  const self = this;
                  const apply = closure_2.apply;
                  if (typeof apply === "unknown") {
                    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                  } else {
                    applyArgumentsResult = apply(self, arguments);
                  }
                  return applyArgumentsResult;
                })();
              }
            });
            c3 = 2;
            c6 = 1;
            const obj4 = { value: promise, done: false };
            return obj4;
          }
        } else if (1 === tmp6) {
          c5 = 0;
          const _clearTimeout3 = clearTimeout;
          clearTimeout(timeout);
          if (null != closure_130_2) {
            const removed = signal2.removeEventListener("abort", closure_130_2);
          }
          throw closure_4;
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 0;
          const _clearTimeout2 = clearTimeout;
          clearTimeout(timeout);
          if (null != closure_130_2) {
            const removed1 = signal2.removeEventListener("abort", closure_130_2);
          }
          c6 = 3;
          const obj5 = { value, done: true };
          return obj5;
        } else {
          c5 = 0;
          const _clearTimeout = clearTimeout;
          clearTimeout(timeout);
          if (null != closure_130_2) {
            const removed2 = signal2.removeEventListener("abort", closure_130_2);
          }
          c6 = 3;
          const obj = { value, done: true };
          return obj;
        }
      } catch (tmp34) {
        closure_4 = tmp34;
        if (tmp3 === c5) {
          c6 = tmp2;
          throw tmp34;
        } else {
          c3 = tmp;
        }
      }
    }
  })();
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/icymi/DiscoverRequestDeadline.tsx");

export const DISCOVER_REQUEST_DEADLINE_MS = 30000;
export function withDiscoverRequestDeadline() {
  const self = this;
  const apply = closure_1.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}