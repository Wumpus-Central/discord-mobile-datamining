// discord_app/modules/mfa/native/screens/SmsScreen.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import Constants from "../../../../Constants.tsx";
import HTTPUtils from "../../../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import _asyncToGenerator from "../../../../../_runtime/metro/00005__asyncToGenerator.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import react_mod from "../../../../../_runtime/00019_react.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import size from "../../../../../_runtime/metro/00002__.js";

let closure_2, closure_4, dependencyMap;

let c9;
let metroImportAll;
let react = react_mod;
const View = react_native.View;
const Endpoints = Constants.Endpoints;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
const result = size.fileFinishedImporting("modules/mfa/native/screens/SmsScreen.tsx");

export default function SmsScreen(mfaChallenge) {
  let _undefined;
  let _undefined2;
  let c3;
  let c6;
  let c7;
  let closure_5;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let items1;
  let obj3;
  let obj6;
  let tmp11;
  let tmp13;
  let tmp17;
  let tmp7;
  mfaChallenge = mfaChallenge.mfaChallenge;
  const finish = mfaChallenge.finish;
  dependencyMap = undefined;
  c3 = undefined;
  let first1;
  react = undefined;
  c6 = undefined;
  c7 = undefined;
  function handleChange(Button) {
    return obj(...arguments);
  }
  let obj = function _handleChange() {
    obj = _asyncToGenerator(async (arg0) => {
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
        let c5;
        try {
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
              let closure_3 = tmp;
              closure_2 = tmp4;
              closure_2_5(closure_0);
              const tmp34 = closure_0;
              if (closure_0.length === closure_0(closure_2[10]).SMS_CODE_LENGTH) {
                closure_2_2(null);
                _undefined(true);
                c5 = 1;
                const obj4 = { mfaType: "sms", data: tmp34 };
                c6 = 2;
                c7 = 1;
                const obj5 = { value: finish(obj4), done: false };
                return obj5;
              }
            }
          } else {
            if (1 === c6) {
              c5 = 0;
              closure_0 = closure_4;
              const body = closure_0.body;
              let message;
              if (body != null) {
                message = body.message;
              }
              let message2 = message;
              if (message == null) {
                message2 = closure_0.message;
              }
              closure_131_2(message2);
            } else if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 0;
              c7 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              closure_131_7(true);
              c5 = 0;
            }
            closure_131_3(false);
          }
          c7 = 3;
          return { value: "IconComponent", done: null };
        } catch (tmp27) {
          closure_4 = tmp27;
          if (0 === c5) {
            c7 = 3;
            throw tmp27;
          } else {
            c6 = 1;
          }
        }
      }
    });
    return obj(...arguments);
  };
  obj = function _handleResend() {
    let ticket;
    obj = _asyncToGenerator(async () => {
      let obj4;
      if (c6 === 2) {
        c6 = 3;
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
        try {
          let closure_1;
          let message1;
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              closure_2 = tmp;
              closure_1 = tmp4;
              message1 = undefined;
              closure_2_2(null);
              _undefined(true);
              const intl2 = message1(closure_2[8]).intl;
              _undefined2(intl2.string(message1(closure_2[8]).t.LQdCQE));
              c4 = 2;
              const HTTP = message1(closure_2[9]).HTTP;
              const request = {
                url: constants.LOGIN_SMS_SEND,
                body: obj4,
                oldFormErrors: true,
                rejectWithError: false,
              };
              obj4 = { ticket: ticket.ticket };
              c5 = 3;
              c6 = 1;
              const obj5 = { value: HTTP.post(request), done: false };
              return obj5;
            }
          } else if (1 === c5) {
            c4 = 0;
            closure_130_3(false);
            throw closure_3;
          } else {
            if (2 === c5) {
              c4 = 1;
              closure_1 = closure_3;
              const message = closure_1.message;
              message1 = message;
              if (message == null) {
                const body = closure_1.body;
                message1 = undefined;
                if (body != null) {
                  message1 = body.message;
                }
              }
              closure_130_2(message1);
              closure_130_6(undefined);
            } else if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 0;
              closure_130_3(false);
              c6 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              message1 = value;
              const intl = message1(closure_2[8]).intl;
              const obj6 = { phoneNumber: message1.body.phone };
              closure_130_6(intl.formatToPlainString(message1(closure_2[8]).t["8r6h7+"], obj6));
              c4 = 1;
            }
            c4 = 0;
            closure_130_3(false);
            c6 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp30) {
          closure_3 = tmp30;
          if (0 === c4) {
            c6 = 3;
            throw tmp30;
          } else if (1 === tmp32) {
            c5 = 1;
          } else {
            c5 = 2;
          }
        }
      }
    });
    return obj(...arguments);
  };
  const tmp = dependencyMap;
  const tmp2 = finish(6432)();
  obj = finish(15505);
  const screenStyles = obj.useScreenStyles(tmp2);
  const tmp4 = first1(react.useState(null), 2);
  dependencyMap = tmp4[1];
  const first = tmp4[0];
  [tmp7, c3] = first1(react.useState(false), 2);
  first1(react.useState(false), 2);
  const tmp8 = first1(react.useState(""), 2);
  first1 = tmp8[0];
  react = tmp8[1];
  const useState = react.useState;
  let intl = mfaChallenge(1126).intl;
  [tmp11, c6] = first1(useState(intl.string(mfaChallenge(1126).t.LQdCQE)), 2);
  const tmp10 = first1(useState(intl.string(mfaChallenge(1126).t.LQdCQE)), 2);
  [tmp13, c7] = first1(react.useState(false), 2);
  const items = [mfaChallenge.ticket];
  first1(react.useState(false), 2);
  const effect = react.useEffect(() => {
    closure_2(null);
    const HTTP = HTTPUtils.HTTP;
    const request = { url: Endpoints.LOGIN_SMS_SEND, body: obj, oldFormErrors: true, rejectWithError: false };
    obj = { ticket: mfaChallenge.ticket };
    const postResult = HTTP.post(request);
    const nextPromise = postResult.then((body) => {
      const intl = mfaChallenge(closure_2[8]).intl;
      obj = { phoneNumber: body.body.phone };
      _undefined2(intl.formatToPlainString(mfaChallenge(closure_2[8]).t["8r6h7+"], obj));
    });
    nextPromise.catch((error) => {
      const body = error.body;
      let message;
      if (body != null) {
        message = body.message;
      }
      if (message == null) {
        message = error.message;
      }
      closure_1_2(message);
      _undefined2(undefined);
    });
  }, items);
  let obj2 = {
    headerText: intl2.string(mfaChallenge(1126).t.o4JNrO),
    subtitle: tmp11,
    input: obj(c6, obj3),
    submit: tmp15(tmp17, obj6),
    screenProps: { mfaChallenge, finish },
    mfaMethod: "sms",
  };
  const tmp16 = finish(15504);
  intl2 = mfaChallenge(1126).intl;
  obj3 = { style: screenStyles.inputContainer, children: items1 };
  let obj4 = {
    autoFocus: true,
    autoCapitalize: "characters",
    maxLength: mfaChallenge(15508).SMS_CODE_LENGTH,
    autoComplete: "sms-otp",
    textContentType: "oneTimeCode",
    keyboardType: "number-pad",
    onChange: handleChange,
    label: intl3.string(mfaChallenge(1126).t["/sHnXc"]),
    placeholder: intl4.string(mfaChallenge(1126).t.tARzgo),
    errorMessage: first,
  };
  const TextInput = mfaChallenge(6098).TextInput;
  intl3 = mfaChallenge(1126).intl;
  intl4 = mfaChallenge(1126).intl;
  items1 = [handleChange(TextInput, obj4)];
  let obj5 = {
    text: intl5.string(mfaChallenge(1126).t.WbaP3r),
    variant: "secondary",
    size: "sm",
    onPress: function handleResend() {
      return obj(...arguments);
    },
  };
  const Button = mfaChallenge(5594).Button;
  intl5 = mfaChallenge(1126).intl;
  items1[1] = handleChange(Button, obj5);
  obj6 = {
    variant: "primary",
    text: intl6.string(mfaChallenge(1126).t.geKm7t),
    loading: tmp7 || tmp13,
    onPress() {
      handleChange(first1);
    },
    disabled: tmp7,
  };
  tmp17 = finish(15503);
  intl6 = mfaChallenge(1126).intl;
  const tmp9 = mfaChallenge;
  if (!tmp7) {
    tmp7 = tmp13;
  }
  if (!tmp7) {
    tmp7 = first1.length !== tmp9(15508).SMS_CODE_LENGTH;
  }
  return handleChange(tmp16, obj2);
}
