// discord_app/modules/network/networkAwareRetry.tsx
import closure_3 from "../../../_runtime/00005_asyncGeneratorStep.js";
import closure_4 from "../../stores/AuthenticationStore.tsx";

const require = arg1;
function _networkAwareRetry() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    closure_1 = arg1;
    c6 = 0;
    c7 = 0;
    c5 = 0;
    const iter = (function*(arg0) {
      if (c7 === 2) {
        c7 = 3;
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
          c7 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c7 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_3 = tmp3;
              dependencyMap = tmp7;
              let num14;
              if (num14 === undefined) {
                num14 = 3;
              }
              dependencyMap = undefined;
              closure_3 = undefined;
              c6 = 1;
              c7 = 1;
              return { value: "ct", done: true };
            }
          } else {
            if (1 === tmp7) {
              if (arg0 === 1) {
                c7 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c7 = 3;
                obj1 = { value: null, done: true };
                obj1[0] = arg1;
                return obj1;
              } else {
                dependencyMap = store.getId();
                closure_3 = 0;
                if (closure_3 >= num14) {
                  const _Error2 = Error;
                  error = new Error("Unreachable code in networkAwareRetry");
                  throw error;
                }
              }
            } else if (2 === tmp7) {
              c5 = 0;
              if (closure_3 + 1 >= num14) {
                throw store;
              } else {
                let obj6 = callback(4328);
                c6 = 4;
                c7 = 1;
                const obj2 = { value: null, done: false };
                obj2[0] = obj6.timeoutPromise(2000 * (closure_3 + 1));
                return obj2;
              }
            } else if (3 === tmp7) {
              if (arg0 === 1) {
                c7 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c5 = 0;
                c7 = 3;
                const obj3 = { value: null, done: true };
                obj3[0] = arg1;
                return obj3;
              } else {
                c5 = 0;
                c7 = 3;
                const obj4 = { value: null, done: true };
                obj4[0] = arg1;
                return obj4;
              }
            } else if (4 === tmp7) {
              if (arg0 === 1) {
                c7 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c7 = 3;
                const obj5 = { value: null, done: true };
                obj5[0] = arg1;
                return obj5;
              } else {
                obj1 = num14(1474);
                c6 = 5;
                c7 = 1;
                obj6 = { value: null, done: false };
                obj6[0] = obj1.awaitOnline();
                return obj6;
              }
            } else if (arg0 === 1) {
              c7 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c7 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else if (dependencyMap !== store.getId()) {
              const _Error = Error;
              const error1 = new Error("User changed.");
              throw error1;
            } else {
              closure_3 = closure_3 + 1;
            }
            c5 = 1;
            c6 = 3;
            c7 = 1;
            const obj7 = { value: null, done: false };
            obj7[0] = callback();
            return obj7;
          }
        } catch (tmp47) {
          store = tmp47;
          if (tmp4 === c5) {
            c7 = tmp2;
            throw tmp47;
          } else {
            c6 = tmp;
          }
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
const result = require("set").fileFinishedImporting("modules/network/networkAwareRetry.tsx");

export default function networkAwareRetry() {
  const self = this;
  const apply = _networkAwareRetry.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};