// discord_app/modules/billing/native/apple/acomRetry.tsx
import getUnderlyingIOSExceptionRecursivelyAll from "../../../../utils/ErrorUtils.tsx";
import closure_4 from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import closure_5 from "../../../../stores/AuthenticationStore.tsx";

const require = arg1;
function parseACOMErrorCode(message) {
  const underlyingIOSError = getUnderlyingIOSExceptionRecursivelyAll.getUnderlyingIOSError(message);
  let match = null;
  if (null != underlyingIOSError) {
    match = regex.exec(underlyingIOSError);
  }
  if (null != match) {
    const _Number2 = Number;
    return Number(match[1]);
  } else {
    const _Error = Error;
    let match1 = null;
    if (message instanceof Error) {
      match1 = regex.exec(message.message);
    }
    let NumberResult = null;
    if (null != match1) {
      const _Number = Number;
      NumberResult = Number(match1[1]);
    }
    return NumberResult;
  }
  const obj = getUnderlyingIOSExceptionRecursivelyAll;
}
function isRetryableACOMCode(arg0) {
  return arg0 === constants.GENERAL_INTERNAL_RETRYABLE || arg0 === constants.RATE_LIMIT_EXCEEDED;
}
function _retryACOMRequest() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c6 = 0;
    c7 = 0;
    c4 = 0;
    return (function*(arg0, value) {
      if (c7 === 2) {
        c7 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = value;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c7 = 2;
          if (0 === constants) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              obj = { value: null, done: true };
              obj[0] = value;
              return obj;
            } else {
              dependencyMap = tmp3;
              let id2 = tmp7;
              let obj8;
              id2 = undefined;
              dependencyMap = undefined;
              c4 = undefined;
              let id;
              const tmp70 = new closure_1_1(closure_1_3[3])(500, 4000);
              obj8 = tmp70;
              id2 = closure_1_5.getId();
              const _Date3 = Date;
              dependencyMap = Date.now() + 60000;
              c4 = 1;
              if (c4 > 3) {
                const _Error = Error;
                error = new Error("Unreachable code in retryACOMRequest");
                throw error;
              }
            }
          } else if (1 === tmp7) {
            c4 = 0;
            constants = id;
            id = callback2(constants);
            if (id === constants.REPEATED_REQUEST_REFERENCE_ID) {
              obj1 = { kind: "already_applied", error: null };
              obj1[1] = constants;
              c7 = 3;
              const obj2 = { value: null, done: true };
              obj2[0] = obj1;
              return obj2;
            } else {
              if (callback3(id)) {
                if (3 !== c4) {
                  const _Date = Date;
                  if (Date.now() < dependencyMap) {
                    const promise = new Promise((arg0) => obj8.fail(arg0));
                    constants = 3;
                    c7 = 1;
                    const obj3 = { value: null, done: false };
                    obj3[0] = promise;
                    return obj3;
                  }
                }
              }
              throw constants;
            }
          } else if (2 === tmp7) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 0;
              c7 = 3;
              const obj4 = { value: null, done: true };
              obj4[0] = value;
              return obj4;
            } else {
              obj8.value = value;
              c4 = 0;
              c7 = 3;
              const obj5 = { value: null, done: true };
              obj5[0] = obj8;
              return obj5;
            }
          } else if (3 === tmp7) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              const obj6 = { value: null, done: true };
              obj6[0] = value;
              return obj6;
            } else {
              const items = [obj8(1474).awaitOnline(), ];
              const obj13 = obj8(1474);
              const _Math = Math;
              const _Date2 = Date;
              items[1] = callback(4263).timeoutPromise(Math.max(0, dependencyMap - Date.now()));
              constants = 4;
              c7 = 1;
              const obj7 = { value: null, done: false };
              obj7[0] = Promise.race(items);
              return obj7;
            }
          } else if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            obj = { value: null, done: true };
            obj[0] = value;
            return obj;
          } else if (id2 !== id.getId()) {
            throw constants;
          } else {
            c4 = c4 + 1;
          }
          c4 = 1;
          obj8 = { kind: "completed" };
          constants = 2;
          c7 = 1;
          const obj9 = { value: null, done: false };
          obj9[0] = callback();
          return obj9;
        } catch (tmp45) {
          id = tmp45;
          if (tmp4 === c4) {
            c7 = tmp2;
            throw tmp45;
          } else {
            constants = tmp;
          }
        }
      }
    })();
  });
  closure_10 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_6 = { REPEATED_REQUEST_REFERENCE_ID: 4000097, [4000097]: "REPEATED_REQUEST_REFERENCE_ID", RATE_LIMIT_EXCEEDED: 4290000, [4290000]: "RATE_LIMIT_EXCEEDED", GENERAL_INTERNAL_RETRYABLE: 5000001, [5000001]: "GENERAL_INTERNAL_RETRYABLE" };
const re7 = /code:\s*(\d{7})(?!\d)/;
const result = require("set").fileFinishedImporting("modules/billing/native/apple/acomRetry.tsx");

export { parseACOMErrorCode };
export const retryACOMRequest = function retryACOMRequest(arg0) {
  const self = this;
  const apply = _retryACOMRequest.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};