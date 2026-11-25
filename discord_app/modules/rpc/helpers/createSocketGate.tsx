// discord_app/modules/rpc/helpers/createSocketGate.tsx
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";

const size = fn(2);
let result = size.fileFinishedImporting("modules/rpc/helpers/createSocketGate.tsx");

export default function createSocketGate(cooldownMs) {
  cooldownMs = cooldownMs.cooldownMs;
  function tryAcquire(socket) {
    let obj1 = weakMap.get(socket);
    if (obj1 == null) {
      obj1 = { inFlight: false, readyAt: 0 };
    }
    let fn = null;
    if (!obj1.inFlight) {
      let _Date = Date;
      fn = null;
      if (Date.now() >= obj1.readyAt) {
        obj1.inFlight = true;
        const result = weakMap.set(socket, obj1);
        fn = () => {
          let obj = arg0;
          if (arg0 === undefined) {
            obj = {};
          }
          let flag = obj.startCooldown;
          if (flag === undefined) {
            flag = true;
          }
          obj1.inFlight = false;
          if (flag) {
            flag = cooldownMs > 0;
          }
          if (flag) {
            const _Date = Date;
            obj1.readyAt = Date.now() + cooldownMs;
          }
        };
      }
    }
    return fn;
  }
  closure_3 = async function _runExclusive(arg0, arg1) {
    closure_0 = arg0;
    closure_1 = arg1;
    c4 = 0;
    c7 = 0;
    c6 = 0;
    return (async (arg0, value, arg2) => {
      if (c7 === 2) {
        c7 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c7 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              closure_3 = tmp4;
              closure_131_0 = undefined;
              const tmp23 = tryAcquire(closure_0);
              closure_131_0 = tmp23;
              if (null == tmp23) {
                c7 = 3;
                const obj4 = { value, done: true };
                return obj4;
              } else {
                c6 = 1;
                c4 = 2;
                c7 = 1;
                const obj5 = { value: closure_1(), done: false };
                return obj5;
              }
            }
          } else if (1 === tmp7) {
            c6 = 0;
            closure_131_0();
            throw closure_5;
          } else if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 0;
            closure_131_0();
            c7 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            c6 = 0;
            closure_131_0();
            c7 = 3;
            const obj = { value, done: true };
            return obj;
          }
        } catch (tmp24) {
          closure_5 = tmp24;
          if (tmp3 === c6) {
            c7 = tmp2;
            throw tmp24;
          } else {
            c4 = tmp;
          }
        }
      }
    })();
  };
  const weakMap = new WeakMap();
  return {
    tryAcquire,
    runExclusive(socket, arg1, arg2) {
      const self = this;
      const apply = closure_3.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    },
  };
}
