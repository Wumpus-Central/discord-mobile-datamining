// === Module 13305: acomRetry ===

// Module 13305 (acomRetry)
import BackoffDefault from "Backoff" /* 559 */;
import ErrorUtilsAll from "ErrorUtils" /* 13301 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;

const require = fn;
function parseACOMErrorCode(message) {
  const underlyingIOSError = ErrorUtilsAll.getUnderlyingIOSError(message);
  let match = null;
  if (null != underlyingIOSError) {
    match = re7.exec(underlyingIOSError);
  }
  if (null != match) {
    const _Number2 = Number;
    return Number(match[1]);
  } else {
    const _Error = Error;
    let match1 = null;
    if (message instanceof Error) {
      match1 = re7.exec(message.message);
    }
    let NumberResult = null;
    if (null != match1) {
      const _Number = Number;
      NumberResult = Number(match1[1]);
    }
    return NumberResult;
  }
}
function isRetryableACOMCode(arg0) {
  return arg0 === constants.GENERAL_INTERNAL_RETRYABLE || arg0 === constants.RATE_LIMIT_EXCEEDED;
}
let closure_10 = async function _retryACOMRequest(arg0) {
  if (c7 === 2) {
    c7 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
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
      c7 = 2;
      if (0 === c6) {
        if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c7 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_3 = tmp3;
          closure_2 = tmp7;
          closure_130_0 = closure_0;
          closure_130_1 = undefined;
          let id2;
          closure_130_3 = undefined;
          closure_130_4 = undefined;
          closure_130_5 = undefined;
          const tmp69 = new BackoffDefault(500, 4000);
          closure_130_1 = tmp69;
          id2 = id.getId();
          const _Date3 = Date;
          closure_130_3 = Date.now() + 60000;
          closure_130_4 = 1;
          if (closure_130_4 > 3) {
            const _Error = Error;
            const error = new Error("Unreachable code in retryACOMRequest");
            throw error;
          }
        }
      } else if (1 === tmp7) {
        c4 = 0;
        closure_130_6 = closure_5;
        closure_130_5 = closure_131_8(closure_130_6);
        if (closure_130_5 === closure_131_6.REPEATED_REQUEST_REFERENCE_ID) {
          const obj1 = { kind: "already_applied", error: closure_130_6 };
          c7 = 3;
          const obj2 = { value: obj1, done: true };
          return obj2;
        } else {
          if (closure_131_9(closure_130_5)) {
            if (3 !== closure_130_4) {
              const _Date = Date;
              if (Date.now() < closure_130_3) {
                const promise = new Promise((arg0) => obj8.fail(arg0));
                c6 = 3;
                c7 = 1;
                const obj3 = { value: promise, done: false };
                return obj3;
              }
            }
          }
          throw closure_130_6;
        }
      } else if (2 === tmp7) {
        if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 0;
          c7 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          obj8.value = value;
          c4 = 0;
          c7 = 3;
          const obj5 = { value: obj8, done: true };
          return obj5;
        }
      } else if (3 === tmp7) {
        if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c7 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          const items = [closure_131_1(closure_131_3[4]).awaitOnline(), ];
          const obj13 = closure_131_1(closure_131_3[4]);
          const _Math = Math;
          const _Date2 = Date;
          items[1] = closure_131_0(closure_131_3[5]).timeoutPromise(Math.max(0, closure_130_3 - Date.now()));
          c6 = 4;
          c7 = 1;
          const obj7 = { value: Promise.race(items), done: false };
          return obj7;
        }
      } else if (arg0 === 1) {
        c7 = 3;
        throw value;
      } else if (arg0 === 2) {
        c7 = 3;
        obj = { value, done: true };
        return obj;
      } else if (id2 !== closure_131_5.getId()) {
        throw closure_130_6;
      } else {
        closure_130_4 = closure_130_4 + 1;
      }
      c4 = 1;
      obj8 = { kind: "completed" };
      c6 = 2;
      c7 = 1;
      const obj9 = { value: closure_130_0(), done: false };
      return obj9;
    } catch (tmp45) {
      closure_5 = tmp45;
      if (tmp4 === c4) {
        c7 = tmp2;
        throw tmp45;
      } else {
        c6 = tmp;
      }
    }
  }
};
const constants = { REPEATED_REQUEST_REFERENCE_ID: 4000097, [4000097]: "REPEATED_REQUEST_REFERENCE_ID", RATE_LIMIT_EXCEEDED: 4290000, [4290000]: "RATE_LIMIT_EXCEEDED", GENERAL_INTERNAL_RETRYABLE: 5000001, [5000001]: "GENERAL_INTERNAL_RETRYABLE" };
const re7 = /code:\s*(\d{7})(?!\d)/;
const size = fn(2);
const result = size.fileFinishedImporting("modules/billing/native/apple/acomRetry.tsx");

export { parseACOMErrorCode };
export const retryACOMRequest = function retryACOMRequest() {
  const self = this;
  const apply = closure_10.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};