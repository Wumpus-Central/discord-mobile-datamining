// === Module 7801: VerifyPhone ===

// Module 7801 (VerifyPhone)
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "_slicedToArray" /* 32 */;
import closure_5 from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/verification/native/components/VerifyPhone.tsx");

export default function VerifyPhone(phone) {
  phone = phone.phone;
  let _require = phone;
  let flag = phone.loading;
  if (flag === undefined) {
    flag = false;
  }
  ({ error, onCodeEnteredIntercept } = phone);
  const onVerified = phone.onVerified;
  let callback;
  let callback2;
  callback = undefined;
  ({ backgroundStyle, disableKeyboardAvoidingView } = phone);
  const tmp = callback2(callback.useState(null), 2);
  callback = tmp[1];
  const tmp2 = callback2(callback.useState(false), 2);
  callback2 = tmp2[1];
  _require = undefined;
  _require = callback((arg0) => {
    closure_0 = arg0;
    c5 = 0;
    c6 = 0;
    c4 = 0;
    return (function*(arg0, token) {
      if (c6 === 2) {
        c6 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw token;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = token;
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
              throw token;
            } else if (arg0 === 2) {
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = token;
              return obj;
            } else {
              closure_2 = tmp3;
              token = tmp7;
              token = undefined;
              c4 = 1;
              if (null != closure_1_1) {
                c5 = 3;
                c6 = 1;
                obj1 = { value: null, done: false };
                obj1[0] = closure_1_1(closure_0);
                return obj1;
              }
            }
          } else {
            if (1 === tmp7) {
              c4 = 0;
              body = body.body;
              let message;
              if (body != null) {
                message = body.message;
              }
              closure_1_3(message);
              c6 = 3;
              const tmp16 = closure_1_3;
            } else if (2 === tmp7) {
              if (arg0 === 1) {
                c6 = 3;
                throw token;
              } else if (arg0 !== 2) {
                token = token.token;
                closure_1_2(token);
                c4 = 0;
              }
            } else if (arg0 === 1) {
              c6 = 3;
              throw token;
            } else if (arg0 === 2) {
              c4 = 0;
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = token;
              return obj;
            } else if (token) {
              c4 = 0;
              c6 = 3;
              return { value: "HermesInternal", done: null };
            }
            c4 = 0;
            c6 = 3;
            let obj2 = { value: null, done: true };
            obj2[0] = token;
            return obj2;
          }
          obj2 = onCodeEnteredIntercept(onVerified[4]);
          c5 = 2;
          c6 = 1;
          const obj3 = { value: null, done: false };
          obj3[0] = obj2.verifyPhone(closure_0, closure_0, false);
          return obj3;
        } catch (tmp25) {
          body = tmp25;
          if (tmp4 === c4) {
            c6 = tmp2;
            throw tmp25;
          } else {
            c5 = tmp;
          }
        }
      }
    })();
  });
  const items = [onCodeEnteredIntercept, onVerified, phone];
  callback = callback.useCallback(function() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }, items);
  _require = undefined;
  _require = callback((arg0) => {
    closure_0 = arg0;
    c2 = 0;
    c3 = 0;
    return (function*(arg0) {
      if (c3 === 2) {
        c3 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp3 === 3) {
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
          c3 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c3 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c3 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_1 = tmp4;
              closure_1_4(true);
              c2 = 1;
              c3 = 1;
              obj1 = { value: null, done: false };
              obj1[0] = closure_1_5(closure_0);
              return obj1;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            closure_1_4(false);
            c3 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp12) {
          c3 = tmp;
          throw tmp12;
        }
      }
    })();
  });
  const items1 = [callback];
  const callback1 = callback.useCallback(function() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }, items1);
  onCodeEnteredIntercept(onVerified[5])(callback1);
  let obj = { title: null, description: null, error: null, backgroundStyle: null, loading: null, onCodeEntered: null, codeType: null, disabled: null, disableKeyboardAvoidingView: null };
  const intl = _require(onVerified[7]).intl;
  obj[0] = intl.string(_require(onVerified[7]).t.Xclkxp);
  const intl2 = _require(onVerified[7]).intl;
  obj[1] = intl2.string(_require(onVerified[7]).t["4qMI6A"]);
  if (error == null) {
    error = tmp[0];
  }
  obj[2] = error;
  obj[3] = backgroundStyle;
  obj[4] = flag;
  obj[5] = callback;
  obj[6] = _require(onVerified[6]).CodeType.NUMERIC;
  obj[7] = tmp2[0];
  obj[8] = disableKeyboardAvoidingView;
  return jsx(onCodeEnteredIntercept(onVerified[6]), { title: null, description: null, error: null, backgroundStyle: null, loading: null, onCodeEntered: null, codeType: null, disabled: null, disableKeyboardAvoidingView: null });
};