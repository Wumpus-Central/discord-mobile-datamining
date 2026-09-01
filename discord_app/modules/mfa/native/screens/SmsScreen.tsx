// === Module 15278: SmsScreen ===

// Module 15278 (SmsScreen)
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "_slicedToArray" /* 32 */;
import closure_5 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { Endpoints } from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;

const require = arg1;
({ jsx: closure_8, jsxs: c9 } = jsxProd);
const result = require("set").fileFinishedImporting("modules/mfa/native/screens/SmsScreen.tsx");

export default function SmsScreen() {
  function handleChange(Button, arg1) {
    const self = this;
    const apply = _handleChange.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  function _handleChange(View, arg1) {
    const self = this;
    const tmp = closure_1_3((arg0) => {
      closure_0 = arg0;
      c6 = 0;
      c7 = 0;
      c5 = 0;
      return (function*(arg0) {
        if (v02 === 2) {
          v02 = 3;
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
            v02 = 2;
            let SMS_CODE_LENGTH = c6;
            if (0 === c6) {
              if (arg0 === 1) {
                v02 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                v02 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                const callback = tmp3;
                v0(lib);
                SMS_CODE_LENGTH = lib(closure_1_2[11]).SMS_CODE_LENGTH;
                if (lib.length === SMS_CODE_LENGTH) {
                  closure_1_2(null);
                  closure_1_3(true);
                  v0 = 1;
                  obj1 = { mfaType: "sms", data: null };
                  obj1[1] = tmp37;
                  c6 = 2;
                  v02 = 1;
                  const obj2 = { value: null, done: false };
                  obj2[0] = closure_1_1(obj1);
                  return obj2;
                }
                tmp37 = lib;
              }
            } else {
              if (1 === SMS_CODE_LENGTH) {
                v0 = 0;
                lib = closure_4;
                const body = lib.body;
                let message;
                if (body != null) {
                  message = body.message;
                }
                if (message == null) {
                  message = lib.message;
                }
                SMS_CODE_LENGTH(message);
                const tmp14 = SMS_CODE_LENGTH;
              } else if (arg0 === 1) {
                v02 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                v0 = 0;
                v02 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                v02(true);
                v0 = 0;
              }
              SMS_CODE_LENGTH = callback(false);
            }
            v02 = 3;
          } catch (tmp28) {
            closure_4 = tmp28;
            if (tmp4 === v0) {
              v02 = tmp2;
              throw tmp28;
            } else {
              c6 = tmp;
            }
          }
        }
      })();
    });
    closure_9 = tmp;
    const apply = tmp.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  function _handleResend() {
    const self = this;
    const tmp = closure_1_3(function*() {
      if (v0 === 2) {
        v0 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp7 === 3) {
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
          v0 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              v0 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              v0 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_2 = tmp4;
              closure_1 = tmp8;
              let body;
              closure_1_2(null);
              closure_1_3(true);
              const intl2 = closure_1_0(closure_1_2[9]).intl;
              v0(intl2.string(closure_1_0(closure_1_2[9]).t.LQdCQE));
              c4 = 2;
              const HTTP = closure_1_0(closure_1_2[10]).HTTP;
              obj1 = { url: null, body: null, oldFormErrors: true, rejectWithError: false };
              obj1[0] = closure_1_7.LOGIN_SMS_SEND;
              const obj2 = { ticket: null };
              obj2[0] = closure_1_0.ticket;
              obj1[1] = obj2;
              c5 = 3;
              v0 = 1;
              const obj3 = { value: null, done: false };
              obj3[0] = HTTP.post(obj1);
              return obj3;
            }
          } else if (1 === tmp8) {
            c4 = 0;
            callback(false);
            throw callback;
          } else {
            if (2 === tmp8) {
              c4 = 1;
              closure_1 = callback;
              let message = closure_1.message;
              body = message;
              if (message == null) {
                body = closure_1.body;
                message = undefined;
                if (body != null) {
                  message = body.message;
                }
                body = message;
              }
              closure_2(body);
              v0(undefined);
              c4 = 0;
              closure_1_3(false);
              v0 = 3;
              const tmp16 = closure_2;
            } else if (arg0 === 1) {
              v0 = 3;
              throw arg1;
            } else if (arg0 !== 2) {
              body = arg1;
              const intl = closure_1_0(closure_1_2[9]).intl;
              const obj4 = { phoneNumber: null };
              obj4[0] = body.body.phone;
              v0(intl.formatToPlainString(closure_1_0(closure_1_2[9]).t["8r6h7+"], obj4));
              c4 = 1;
            }
            c4 = 0;
            closure_1_3(false);
            v0 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          }
        } catch (tmp34) {
          callback = tmp34;
          if (tmp5 === c4) {
            v0 = tmp3;
            throw tmp34;
          } else if (tmp2 === tmp36) {
            c5 = tmp2;
          } else {
            c5 = tmp;
          }
        }
      }
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
  let obj = mfaChallenge(15268);
  mfaChallenge = obj.useMfaChallenge();
  mfaChallenge = mfaChallenge.mfaChallenge;
  const finish = mfaChallenge.finish;
  obj1 = finish(15271);
  const screenStyles = obj1.useScreenStyles(finish(7717)());
  const tmp6 = first(React.useState(null), 2);
  dependencyMap = tmp6[1];
  let tmp = mfaChallenge;
  const tmp4 = finish(7717)();
  [tmp8, closure_3] = first(React.useState(false), 2);
  const tmp9 = first(React.useState(""), 2);
  first = tmp9[0];
  React = tmp9[1];
  let intl = mfaChallenge(1236).intl;
  const tmp7 = first(React.useState(false), 2);
  [tmp11, View] = first(React.useState(intl.string(mfaChallenge(1236).t.LQdCQE)), 2);
  const tmp10 = first(React.useState(intl.string(mfaChallenge(1236).t.LQdCQE)), 2);
  [tmp13, Endpoints] = first(React.useState(false), 2);
  const items = [mfaChallenge.ticket];
  const effect = React.useEffect(() => {
    dependencyMap(null);
    const HTTP = mfaChallenge(530).HTTP;
    obj = { url: closure_1_7.LOGIN_SMS_SEND, body: obj, oldFormErrors: true, rejectWithError: false };
    obj = { ticket: mfaChallenge.ticket };
    const postResult = HTTP.post(obj);
    HTTP.post(obj).then((body) => {
      const intl = closure_1_0(closure_1_2[9]).intl;
      callback(intl.formatToPlainString(closure_1_0(closure_1_2[9]).t["8r6h7+"], { phoneNumber: body.body.phone }));
    }).catch((body) => {
      body = body.body;
      let message;
      if (body != null) {
        message = body.message;
      }
      if (message == null) {
        message = body.message;
      }
      closure_2(message);
      callback(undefined);
    });
  }, items);
  obj = { headerText: null, subtitle: null, input: null, submit: null, mfaMethod: "sms" };
  const tmp12 = first(React.useState(false), 2);
  let intl2 = mfaChallenge(1236).intl;
  obj[0] = intl2.string(mfaChallenge(1236).t.o4JNrO);
  obj[1] = tmp11;
  obj = { style: screenStyles.inputContainer, children: null };
  obj1 = { autoFocus: true, autoCapitalize: "characters", maxLength: mfaChallenge(15275).SMS_CODE_LENGTH, autoComplete: "sms-otp", textContentType: "oneTimeCode", keyboardType: "number-pad", onChange: handleChange, label: null, accessibilityLabel: null, placeholder: null, errorMessage: null };
  const intl3 = mfaChallenge(1236).intl;
  obj1[7] = intl3.string(mfaChallenge(1236).t["/sHnXc"]);
  const intl4 = mfaChallenge(1236).intl;
  obj1[8] = intl4.string(mfaChallenge(1236).t.HZPBOd);
  const intl5 = mfaChallenge(1236).intl;
  obj1[9] = intl5.string(mfaChallenge(1236).t.tARzgo);
  obj1[10] = tmp6[0];
  const items1 = [handleChange(mfaChallenge(7705).TextInput, obj1), ];
  let obj2 = { text: null, variant: "secondary", size: "sm", onPress: null };
  const intl6 = mfaChallenge(1236).intl;
  obj2[0] = intl6.string(mfaChallenge(1236).t.WbaP3r);
  obj2[3] = function handleResend() {
    const self = this;
    const apply = _handleResend.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  };
  items1[1] = handleChange(mfaChallenge(4928).Button, obj2);
  obj[1] = items1;
  obj[2] = _handleChange(View, obj);
  let obj3 = { variant: "primary", text: null, loading: null, onPress: null, disabled: null };
  let tmp16 = finish(15270);
  const intl7 = mfaChallenge(1236).intl;
  obj3[1] = intl7.string(mfaChallenge(1236).t.geKm7t);
  let tmp18 = tmp8;
  if (!tmp8) {
    tmp18 = tmp13;
  }
  obj3[2] = tmp18;
  obj3[3] = function onPress() {
    handleChange(first);
  };
  if (!tmp8) {
    tmp8 = tmp13;
  }
  if (!tmp8) {
    tmp8 = first.length !== tmp(15275).SMS_CODE_LENGTH;
  }
  obj3[4] = tmp8;
  obj[3] = handleChange(finish(15273), obj3);
  return handleChange(tmp16, obj);
};