// === Module 13174: acomRetry ===

// Module 13174 (acomRetry)
import BackoffDefault from "Backoff" /* 569 */;
import ErrorUtilsAll from "ErrorUtils" /* 13169 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import size from "module_2" /* 2 */;

let c6, c7;

function parseACOMErrorCode(message) {
  obj = ErrorUtilsAll;
  const underlyingIOSError = obj.getUnderlyingIOSError(message);
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
let obj = function _retryACOMRequest() {
  let id;
  obj = _asyncToGenerator(async function(arg0) {
    let closure_2;
    let obj11;
    let closure_0 = arg0;
    if (c7 === 2) {
      c7 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c4;
      let closure_5;
      try {
        let id2;
        let closure_3;
        let closure_4;
        let error;
        c7 = 2;
        if (0 === c6) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_5 = undefined;
            const self5 = this;
            const self6 = this;
            const tmp59 = new BackoffDefault(500, 4000);
            let closure_1 = tmp59;
            id2 = id.getId();
            const _Date3 = Date;
            closure_3 = Date.now() + 60000;
            closure_4 = 1;
            if (closure_4 > 3) {
              const _Error = Error;
              const self3 = this;
              const self4 = this;
              error = new Error("Unreachable code in retryACOMRequest");
              throw error;
            }
          }
        } else if (1 === c6) {
          c4 = 0;
          error = closure_5;
          closure_5 = closure_131_8(error);
          if (closure_5 === closure_131_6.REPEATED_REQUEST_REFERENCE_ID) {
            const obj4 = { kind: "already_applied", error };
            c7 = 3;
            const obj5 = { value: obj4, done: true };
            return obj5;
          } else {
            if (closure_131_9(closure_5)) {
              if (3 !== closure_4) {
                const _Date = Date;
                if (Date.now() < closure_3) {
                  const self = this;
                  const self2 = this;
                  const promise = new Promise((arg0) => obj11.fail(arg0));
                  c6 = 3;
                  c7 = 1;
                  const obj6 = { value: promise, done: false };
                  return obj6;
                }
              }
            }
            throw error;
          }
        } else if (2 === c6) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            c7 = 3;
            const obj7 = { value, done: true };
            return obj7;
          } else {
            obj11.value = value;
            c4 = 0;
            c7 = 3;
            const obj8 = { value: obj11, done: true };
            return obj8;
          }
        } else if (3 === c6) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            const obj9 = { value, done: true };
            return obj9;
          } else {
            const items = [, ];
            const obj13 = closure_131_1(closure_131_3[4]);
            items[0] = obj13.awaitOnline();
            const _Math = Math;
            const _Date2 = Date;
            const obj14 = closure_131_0(closure_131_3[5]);
            items[1] = obj14.timeoutPromise(Math.max(0, closure_3 - Date.now()));
            c6 = 4;
            c7 = 1;
            const obj10 = { value: race(items), done: false };
            return obj10;
          }
        } else if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c7 = 3;
          obj = { value, done: true };
          return obj;
        } else if (id2 !== closure_131_5.getId()) {
          throw error;
        } else {
          closure_4 = closure_4 + 1;
        }
        c4 = 1;
        obj11 = { kind: "completed" };
        c6 = 2;
        c7 = 1;
        const obj12 = { value: closure_0(), done: false };
        return obj12;
      } catch (tmp38) {
        closure_5 = tmp38;
        if (0 === c4) {
          c7 = 3;
          throw tmp38;
        } else {
          c6 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
const constants = { REPEATED_REQUEST_REFERENCE_ID: 4000097, [4000097]: "REPEATED_REQUEST_REFERENCE_ID", RATE_LIMIT_EXCEEDED: 4290000, [4290000]: "RATE_LIMIT_EXCEEDED", GENERAL_INTERNAL_RETRYABLE: 5000001, [5000001]: "GENERAL_INTERNAL_RETRYABLE" };
const re7 = /code:\s*(\d{7})(?!\d)/;
const result = size.fileFinishedImporting("modules/billing/native/apple/acomRetry.tsx");

export { parseACOMErrorCode };
export const retryACOMRequest = function retryACOMRequest() {
  return obj(...arguments);
};