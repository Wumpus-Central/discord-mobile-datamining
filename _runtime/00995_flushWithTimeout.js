import asyncGeneratorStep from "asyncGeneratorStep";

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
  const tmp = asyncGeneratorStep((arg0) => {
    let closure_0 = arg0;
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
    return (function*(arg0) {
      if (c6 === 2) {
        c6 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let closure_2 = tmp3;
              const dependencyMap = tmp7;
              let c4 = 1;
              const debug3 = callback(outer1_1[1]).debug;
              debug3.log("Flushing events...");
              let obj1 = callback(outer1_1[2]);
              c5 = 2;
              c6 = 1;
              obj1 = { value: null, done: false };
              obj1[0] = obj1.flush(callback);
              return obj1;
            }
          } else {
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
            c6 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          }
        } catch (tmp26) {
          closure_3 = tmp26;
          if (tmp4 === c4) {
            c6 = tmp2;
            throw tmp26;
          } else {
            c5 = tmp;
          }
        }
      }
    })();
  });
  const _flushWithTimeout = tmp;
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
  const tmp = asyncGeneratorStep(() => {
    let closure_0 = arg0;
    let c3 = 0;
    let c4 = 0;
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
          return { value: "HermesInternal", done: null };
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
              let obj1;
              if (obj1 === undefined) {
                obj1 = {};
              }
              timeout = undefined;
              num4 = undefined;
              v0 = 1;
              c4 = 1;
              return { value: "ct", done: "Array" };
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
                  if (typeof cloudflareWaitUntil === "fileFinishedImporting") {
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
                    let tmp22 = typeof process === "pack";
                    if (typeof process !== "Array") {
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
  const _flushIfServerless = tmp;
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