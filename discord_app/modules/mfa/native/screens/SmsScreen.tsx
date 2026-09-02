// discord_app/modules/mfa/native/screens/SmsScreen.tsx
import closure_3 from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import closure_4 from "../../../../../_runtime/metro/00032__slicedToArray.js";
import closure_5 from "../../../../../_runtime/00019_noop.js";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import { Endpoints } from "../../../../Constants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";

const require = arg1;
({ jsx: closure_8, jsxs: c9 } = jsxProd);
const result = require("set").fileFinishedImporting("modules/mfa/native/screens/SmsScreen.tsx");

export default function SmsScreen(mfaChallenge) {
  mfaChallenge = mfaChallenge.mfaChallenge;
  const finish = mfaChallenge.finish;
  dependencyMap = undefined;
  c3 = undefined;
  let first;
  let React;
  c6 = undefined;
  c7 = undefined;
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
  function _handleChange(c6, arg1) {
    const self = this;
    const tmp = _undefined((arg0) => {
      closure_0 = arg0;
      c6 = 0;
      c7 = 0;
      c5 = 0;
      return (function* (arg0) {
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
                SMS_CODE_LENGTH = lib(closure_1_2[10]).SMS_CODE_LENGTH;
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
    const tmp = _undefined(function* () {
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
              const intl2 = closure_1_0(closure_1_2[8]).intl;
              v0(intl2.string(closure_1_0(closure_1_2[8]).t.LQdCQE));
              c4 = 2;
              const HTTP = closure_1_0(closure_1_2[9]).HTTP;
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
              const intl = closure_1_0(closure_1_2[8]).intl;
              const obj4 = { phoneNumber: null };
              obj4[0] = body.body.phone;
              v0(intl.formatToPlainString(closure_1_0(closure_1_2[8]).t["8r6h7+"], obj4));
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
  let obj = finish(15499);
  const screenStyles = obj.useScreenStyles(finish(7726)());
  const tmp4 = first(React.useState(null), 2);
  dependencyMap = tmp4[1];
  const tmp2 = finish(7726)();
  [tmp6, c3] = first(React.useState(false), 2);
  const tmp7 = first(React.useState(""), 2);
  first = tmp7[0];
  React = tmp7[1];
  let intl = mfaChallenge(1233).intl;
  const tmp5 = first(React.useState(false), 2);
  const tmp8 = mfaChallenge;
  [tmp10, c6] = first(React.useState(intl.string(mfaChallenge(1233).t.LQdCQE)), 2);
  const tmp9 = first(React.useState(intl.string(mfaChallenge(1233).t.LQdCQE)), 2);
  [tmp12, c7] = first(React.useState(false), 2);
  const items = [mfaChallenge.ticket];
  const effect = React.useEffect(() => {
    dependencyMap(null);
    const HTTP = mfaChallenge(527).HTTP;
    obj = { url: _undefined2.LOGIN_SMS_SEND, body: obj, oldFormErrors: true, rejectWithError: false };
    obj = { ticket: mfaChallenge.ticket };
    const postResult = HTTP.post(obj);
    HTTP.post(obj)
      .then((body) => {
        const intl = closure_1_0(closure_1_2[8]).intl;
        callback(intl.formatToPlainString(closure_1_0(closure_1_2[8]).t["8r6h7+"], { phoneNumber: body.body.phone }));
      })
      .catch((body) => {
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
  obj = { headerText: null, subtitle: null, input: null, submit: null, screenProps: null, mfaMethod: "sms" };
  const tmp11 = first(React.useState(false), 2);
  let intl2 = mfaChallenge(1233).intl;
  obj[0] = intl2.string(mfaChallenge(1233).t.o4JNrO);
  obj[1] = tmp10;
  obj = { style: screenStyles.inputContainer, children: null };
  obj1 = {
    autoFocus: true,
    autoCapitalize: "characters",
    maxLength: mfaChallenge(15503).SMS_CODE_LENGTH,
    autoComplete: "sms-otp",
    textContentType: "oneTimeCode",
    keyboardType: "number-pad",
    onChange: handleChange,
    label: null,
    accessibilityLabel: null,
    placeholder: null,
    errorMessage: null,
  };
  const intl3 = mfaChallenge(1233).intl;
  obj1[7] = intl3.string(mfaChallenge(1233).t["/sHnXc"]);
  const intl4 = mfaChallenge(1233).intl;
  obj1[8] = intl4.string(mfaChallenge(1233).t.HZPBOd);
  const intl5 = mfaChallenge(1233).intl;
  obj1[9] = intl5.string(mfaChallenge(1233).t.tARzgo);
  obj1[10] = tmp4[0];
  const items1 = [handleChange(mfaChallenge(7714).TextInput, obj1)];
  let obj2 = { text: null, variant: "secondary", size: "sm", onPress: null };
  const intl6 = mfaChallenge(1233).intl;
  obj2[0] = intl6.string(mfaChallenge(1233).t.WbaP3r);
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
  obj[2] = _handleChange(c6, obj);
  let obj3 = { variant: "primary", text: null, loading: null, onPress: null, disabled: null };
  const tmp15 = finish(15498);
  const intl7 = mfaChallenge(1233).intl;
  obj3[1] = intl7.string(mfaChallenge(1233).t.geKm7t);
  let tmp17 = tmp6;
  if (!tmp6) {
    tmp17 = tmp12;
  }
  obj3[2] = tmp17;
  obj3[3] = function onPress() {
    handleChange(first);
  };
  if (!tmp6) {
    tmp6 = tmp12;
  }
  if (!tmp6) {
    tmp6 = first.length !== tmp8(15503).SMS_CODE_LENGTH;
  }
  obj3[4] = tmp6;
  obj[3] = handleChange(finish(15501), obj3);
  obj[4] = { mfaChallenge, finish };
  return handleChange(tmp15, obj);
}
