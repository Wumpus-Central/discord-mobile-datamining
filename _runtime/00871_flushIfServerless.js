// _runtime/00871_flushIfServerless.js
import CONSOLE_LEVELS from "00700_CONSOLE_LEVELS.js";
import _mod745 from "metro/00745__.js";
import _asyncToGenerator from "metro/00005__asyncToGenerator.js";

let c3, c5, c6, closure_3;

function flushWithTimeout(arg0) {
  return obj(...arguments);
}
let obj = function _flushWithTimeout() {
  obj = _asyncToGenerator(async (arg0) => {
    let obj2;
    let closure_0 = arg0;
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c4;
      try {
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            let closure_2 = tmp;
            let closure_1 = tmp4;
            c4 = 1;
            const debug3 = CONSOLE_LEVELS.debug;
            debug3.log("Flushing events...");
            c5 = 2;
            c6 = 1;
            const obj5 = { value: obj2.flush(closure_0), done: false };
            obj2 = _mod745;
            return obj5;
          }
        } else {
          if (1 === c5) {
            c4 = 0;
            closure_0 = closure_3;
            const debug2 = closure_130_0(closure_130_1[1]).debug;
            debug2.log("Error while flushing events:\n", closure_0);
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            const debug = closure_130_0(closure_130_1[1]).debug;
            debug.log("Done flushing events");
            c4 = 0;
          }
          c6 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp23) {
        closure_3 = tmp23;
        if (0 === c4) {
          c6 = 3;
          throw tmp23;
        } else {
          c5 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
obj = function _flushIfServerless() {
  obj = _asyncToGenerator(async () => {
    let closure_1;
    let closure_2;
    let obj5;
    let closure_0 = arg0;
    if (1 === c3) {
      if (arg0 === 1) {
        let c4 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 3;
        const obj6 = { value, done: true };
        return obj6;
      } else {
        const timeout = obj5.timeout;
        let num4 = 2000;
        if (undefined !== timeout) {
          num4 = timeout;
        }
        if ("cloudflareWaitUntil" in obj5) {
          let cloudflareWaitUntil;
          if (obj5 != null) {
            cloudflareWaitUntil = obj5.cloudflareWaitUntil;
          }
          if (typeof cloudflareWaitUntil === "function") {
            obj5.cloudflareWaitUntil(closure_130_3(num4));
          }
        }
        if ("cloudflareCtx" in obj5) {
          const cloudflareCtx = obj5.cloudflareCtx;
          let waitUntil;
          if (cloudflareCtx != null) {
            waitUntil = cloudflareCtx.waitUntil;
          }
          if (typeof waitUntil === "function") {
            const cloudflareCtx2 = obj5.cloudflareCtx;
            cloudflareCtx2.waitUntil(closure_130_3(num4));
          }
        }
        const _Symbol = Symbol;
        if (closure_130_0(closure_130_1[3]).GLOBAL_OBJ[Symbol.for(Symbol, "@vercel/request-context")]) {
          const obj3 = closure_130_0(closure_130_1[4]);
          obj3.vercelWaitUntil(closure_130_3(num4));
        } else {
          const _process = process;
          let tmp21 = typeof process !== "undefined";
          if (tmp21) {
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
            tmp21 = NETLIFY;
          }
          if (tmp21) {
            c3 = 2;
            c4 = 1;
            const obj7 = { value: closure_130_3(num4), done: false };
            return obj7;
          }
        }
      }
    } else if (arg0 === 1) {
      c4 = 3;
      throw value;
    } else if (arg0 === 2) {
      c4 = 3;
      obj = { value, done: true };
      return obj;
    }
    await "IconComponent";
    obj5 = closure_0;
    if (closure_0 === undefined) {
      obj5 = {};
    }
    return "Set";
  });
  return obj(...arguments);
};
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const flushIfServerless = function flushIfServerless() {
  return obj(...arguments);
};
