// === Module 995: flushWithTimeout ===

// Module 995 (flushWithTimeout)
import closure_2 from "asyncGeneratorStep" /* 5 */;

function flushWithTimeout(arg0) {
  const self = this;
  const apply = _flushWithTimeout.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _flushWithTimeout() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c5 = 0;
    c6 = 0;
    c4 = 0;
    return (function*(arg0) {
      closure_2 = tmp3;
      c4 = 1;
      const debug3 = callback(closure_1_1[1]).debug;
      debug3.log("Flushing events...");
      obj1 = callback(closure_1_1[2]);
      yield obj1.flush(callback);
      if (1 === tmp7) {
        c4 = 0;
        callback = closure_3;
        const debug2 = callback(824).debug;
        debug2.log("Error while flushing events:\n", callback);
        c6 = 3;
      } else if (arg0 === 1) {
        c6 = 3;
        throw arg1;
      } else if (arg0 !== 2) {
        const debug = callback(824).debug;
        debug.log("Done flushing events");
        c4 = 0;
      }
      c4 = 0;
      return arg1;
    })();
  });
  closure_4 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _flushIfServerless() {
  const self = this;
  const tmp = callback(() => {
    closure_0 = arg0;
    c3 = 0;
    c4 = 0;
    const iter = (function*() {
      if (c4 === 2) {
        c4 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c4 = 2;
          if (0 === v0) {
            if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let num4 = tmp5;
              let timeout = tmp2;
              obj1 = undefined;
              if (obj1 === undefined) {
                obj1 = {};
              }
              timeout = undefined;
              num4 = undefined;
              v0 = 1;
              c4 = 1;
              return { value: "Object", done: true };
            }
          } else {
            if (1 === tmp5) {
              if (arg0 === 1) {
                c4 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c4 = 3;
                let obj2 = { value: null, done: true };
                obj2[0] = arg1;
                return obj2;
              } else {
                timeout = obj1.timeout;
                num4 = 2000;
                if (undefined !== timeout) {
                  num4 = timeout;
                }
                if ("cloudflareWaitUntil" in obj1) {
                  let cloudflareWaitUntil;
                  if (obj1 != null) {
                    cloudflareWaitUntil = obj1.cloudflareWaitUntil;
                  }
                  if (typeof cloudflareWaitUntil === "function") {
                    obj1.cloudflareWaitUntil(v0(num4));
                  }
                }
                if (!("cloudflareCtx" in obj1)) {
                  const _Symbol = Symbol;
                  if (obj1(timeout[3]).GLOBAL_OBJ[Symbol.for(Symbol, "@vercel/request-context")]) {
                    obj2 = obj1(timeout[4]);
                    obj2.vercelWaitUntil(v0(num4));
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
                      v0 = 2;
                      c4 = 1;
                      const obj3 = { value: null, done: false };
                      obj3[0] = v0(num4);
                      return obj3;
                    }
                  }
                } else {
                  const cloudflareCtx = obj1.cloudflareCtx;
                  let waitUntil;
                  if (cloudflareCtx != null) {
                    waitUntil = cloudflareCtx.waitUntil;
                  }
                }
                const cloudflareCtx2 = obj1.cloudflareCtx;
                cloudflareCtx2.waitUntil(v0(num4));
              }
            } else if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            }
            c4 = 3;
          }
        } catch (tmp46) {
          c4 = tmp;
          throw tmp46;
        }
      }
    })();
    iter.next();
    return iter;
  });
  closure_5 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const flushIfServerless = function flushIfServerless() {
  const self = this;
  const apply = _flushIfServerless.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};