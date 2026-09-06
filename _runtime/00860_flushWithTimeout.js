// _runtime/00860_flushWithTimeout.js
import consoleSandbox from "00689_consoleSandbox.js";
import captureCheckIn from "00734_captureCheckIn.js";
import asyncGeneratorStep from "00005_asyncGeneratorStep.js";

function flushWithTimeout(arg0) {
  const self = this;
  const apply = closure_4.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_4 = async function _flushWithTimeout(arg0) {
  closure_2 = tmp3;
  const debug3 = consoleSandbox.debug;
  debug3.log("Flushing events...");
  await captureCheckIn.flush(closure_0);
  if (1 === tmp7) {
    c4 = 0;
    closure_129_0 = closure_3;
    const debug2 = closure_130_0(closure_130_1[1]).debug;
    debug2.log("Error while flushing events:\n", closure_129_0);
    c6 = 3;
  } else if (arg0 === 1) {
    c6 = 3;
    throw value;
  } else if (arg0 !== 2) {
    const debug = closure_130_0(closure_130_1[1]).debug;
    debug.log("Done flushing events");
    c4 = 0;
  }
  return value;
};
let closure_5 = async function _flushIfServerless() {
  if (c4 === 2) {
    c4 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj = { value, done: true };
      return obj;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c4 = 2;
      if (0 === c3) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_2 = tmp5;
          closure_1 = tmp2;
          closure_129_0 = undefined;
          let obj1 = closure_0;
          if (closure_0 === undefined) {
            obj1 = {};
          }
          closure_129_0 = obj1;
          let timeout;
          closure_129_2 = undefined;
          c3 = 1;
          c4 = 1;
          return { value: "PX_16", done: true };
        }
      } else {
        if (1 === tmp5) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            let obj2 = { value, done: true };
            return obj2;
          } else {
            timeout = closure_129_0.timeout;
            let num4 = 2000;
            if (undefined !== timeout) {
              num4 = timeout;
            }
            closure_129_2 = num4;
            if ("cloudflareWaitUntil" in closure_129_0) {
              let cloudflareWaitUntil;
              if (closure_129_0 != null) {
                cloudflareWaitUntil = closure_129_0.cloudflareWaitUntil;
              }
              if (typeof cloudflareWaitUntil === "function") {
                closure_129_0.cloudflareWaitUntil(closure_130_3(closure_129_2));
              }
            }
            if (!("cloudflareCtx" in closure_129_0)) {
              const _Symbol = Symbol;
              if (closure_130_0(closure_130_1[3]).GLOBAL_OBJ[Symbol.for(Symbol, "@vercel/request-context")]) {
                obj2 = closure_130_0(closure_130_1[4]);
                obj2.vercelWaitUntil(closure_130_3(closure_129_2));
              } else {
                const _process = process;
                let tmp22 = typeof process !== "undefined";
                if (typeof process !== "undefined") {
                  const _process7 = process;
                  let NETLIFY = process.env.FUNCTIONS_WORKER_RUNTIME;
                  if (!NETLIFY) {
                    const _process2 = process;
                    NETLIFY = process.env.LAMBDA_TASK_ROOT;
                  }
                  if (!NETLIFY) {
                    const _process3 = process;
                    NETLIFY = process.env.K_SERVICE;
                  }
                  if (!NETLIFY) {
                    const _process4 = process;
                    NETLIFY = process.env.CF_PAGES;
                  }
                  if (!NETLIFY) {
                    const _process5 = process;
                    NETLIFY = process.env.VERCEL;
                  }
                  if (!NETLIFY) {
                    const _process6 = process;
                    NETLIFY = process.env.NETLIFY;
                  }
                  tmp22 = NETLIFY;
                }
                if (tmp22) {
                  c3 = 2;
                  c4 = 1;
                  const obj3 = { value: closure_130_3(closure_129_2), done: false };
                  return obj3;
                }
              }
            } else {
              const cloudflareCtx = closure_129_0.cloudflareCtx;
              let waitUntil;
              if (cloudflareCtx != null) {
                waitUntil = cloudflareCtx.waitUntil;
              }
            }
            const cloudflareCtx2 = closure_129_0.cloudflareCtx;
            cloudflareCtx2.waitUntil(closure_130_3(closure_129_2));
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          obj = { value, done: true };
          return obj;
        }
        c4 = 3;
      }
    } catch (tmp46) {
      c4 = tmp;
      throw tmp46;
    }
  }
};
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const flushIfServerless = function flushIfServerless() {
  const self = this;
  const apply = closure_5.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
