// discord_app/modules/mfa/native/screens/SmsScreen.tsx
import HTTPUtils from "../../../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const Endpoints = fn(1074).Endpoints;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("modules/mfa/native/screens/SmsScreen.tsx");

export default function SmsScreen(mfaChallenge) {
  mfaChallenge = mfaChallenge.mfaChallenge;
  const finish = mfaChallenge.finish;
  c3 = undefined;
  let first;
  noop = undefined;
  c6 = undefined;
  c7 = undefined;
  function handleChange(Button) {
    const self = this;
    const apply = closure_9.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  closure_9 = async function _handleChange() {
    c6 = 0;
    c7 = 0;
    c5 = 0;
    return (async (arg0) => {
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
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c7 = 2;
          SMS_CODE_LENGTH = c6;
          if (0 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              closure_3 = tmp3;
              closure_2_5(data);
              SMS_CODE_LENGTH = data(SMS_CODE_LENGTH[10]).SMS_CODE_LENGTH;
              if (data.length === SMS_CODE_LENGTH) {
                closure_2_2(null);
                closure_2_3(true);
                c5 = 1;
                const obj4 = { mfaType: "sms", data };
                c6 = 2;
                c7 = 1;
                const obj5 = { value: finish(obj4), done: false };
                return obj5;
              }
            }
          } else {
            if (1 === SMS_CODE_LENGTH) {
              c5 = 0;
              closure_130_0 = closure_4;
              const body = closure_130_0.body;
              message = undefined;
              if (body != null) {
                message = body.message;
              }
              if (message == null) {
                message = closure_130_0.message;
              }
              closure_131_2(message);
            } else if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 0;
              c7 = 3;
              const obj = { value, done: true };
              return obj;
            } else {
              closure_131_7(true);
              c5 = 0;
            }
            SMS_CODE_LENGTH = closure_131_3(false);
          }
          c7 = 3;
        } catch (tmp28) {
          closure_4 = tmp28;
          if (tmp4 === c5) {
            c7 = tmp2;
            throw tmp28;
          } else {
            c6 = tmp;
          }
        }
      }
    })();
  };
  closure_10 = async function _handleResend() {
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp7 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
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
            closure_1 = tmp8;
            closure_129_0 = undefined;
            dependencyMap(null);
            asyncGeneratorStep(true);
            const intl2 = message1(tmp4[8]).intl;
            View(intl2.string(message1(tmp4[8]).t.LQdCQE));
            c4 = 2;
            const HTTP = message1(tmp4[9]).HTTP;
            const request = { url: constants.LOGIN_SMS_SEND, body: null, oldFormErrors: true, rejectWithError: false };
            const obj4 = { ticket: ticket.ticket };
            request.body = obj4;
            c5 = 3;
            c6 = 1;
            const obj5 = { value: HTTP.post(request), done: false };
            return obj5;
          }
        } else if (1 === tmp8) {
          c4 = 0;
          closure_130_3(false);
          throw closure_3;
        } else {
          if (2 === tmp8) {
            c4 = 1;
            closure_129_1 = closure_3;
            const message = closure_129_1.message;
            message1 = message;
            if (message == null) {
              const body = closure_129_1.body;
              message1 = undefined;
              if (body != null) {
                message1 = body.message;
              }
            }
            closure_130_2(message1);
            closure_130_6(undefined);
            c4 = 0;
            closure_130_3(false);
            c6 = 3;
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 !== 2) {
            closure_129_0 = value;
            const intl = message1(tmp4[8]).intl;
            const obj6 = { phoneNumber: closure_129_0.body.phone };
            closure_130_6(intl.formatToPlainString(message1(tmp4[8]).t["8r6h7+"], obj6));
            c4 = 1;
          }
          c4 = 0;
          closure_130_3(false);
          c6 = 3;
          const obj = { value, done: true };
          return obj;
        }
      } catch (tmp34) {
        closure_3 = tmp34;
        if (tmp5 === c4) {
          c6 = tmp3;
          throw tmp34;
        } else if (tmp2 === tmp36) {
          c5 = tmp2;
        } else {
          c5 = tmp;
        }
      }
    }
  };
  const tmp2 = finish(7182)();
  const screenStyles = finish(15947).useScreenStyles(tmp2);
  const tmp4 = first(noop.useState(null), 2);
  dependencyMap = tmp4[1];
  let obj = finish(15947);
  [tmp6, c3] = first(noop.useState(false), 2);
  const tmp7 = first(noop.useState(""), 2);
  first = tmp7[0];
  noop = tmp7[1];
  let intl = mfaChallenge(1115).intl;
  const tmp5 = first(noop.useState(false), 2);
  const tmp8 = mfaChallenge;
  [tmp10, c6] = first(noop.useState(intl.string(mfaChallenge(1115).t.LQdCQE)), 2);
  const tmp9 = first(noop.useState(intl.string(mfaChallenge(1115).t.LQdCQE)), 2);
  [tmp12, c7] = first(noop.useState(false), 2);
  const items = [mfaChallenge.ticket];
  const effect = noop.useEffect(() => {
    dependencyMap(null);
    const HTTP = HTTPUtils.HTTP;
    const request = {
      url: Endpoints.LOGIN_SMS_SEND,
      body: { ticket: mfaChallenge.ticket },
      oldFormErrors: true,
      rejectWithError: false,
    };
    const obj = { ticket: mfaChallenge.ticket };
    const postResult = HTTP.post(request);
    HTTP.post(request)
      .then((body) => {
        const intl = mfaChallenge(1115).intl;
        closure_1_6(intl.formatToPlainString(mfaChallenge(1115).t["8r6h7+"], { phoneNumber: body.body.phone }));
      })
      .catch((error) => {
        const body = error.body;
        let message;
        if (body != null) {
          message = body.message;
        }
        if (message == null) {
          message = error.message;
        }
        dependencyMap(message);
        closure_1_6(undefined);
      });
  }, items);
  let obj2 = { headerText: null, subtitle: null, input: null, submit: null, screenProps: null, mfaMethod: "sms" };
  const tmp11 = first(noop.useState(false), 2);
  let intl2 = mfaChallenge(1115).intl;
  obj2.headerText = intl2.string(mfaChallenge(1115).t.o4JNrO);
  obj2.subtitle = tmp10;
  let obj3 = { style: screenStyles.inputContainer, children: null };
  let obj4 = {
    autoFocus: true,
    autoCapitalize: "characters",
    maxLength: mfaChallenge(15951).SMS_CODE_LENGTH,
    autoComplete: "sms-otp",
    textContentType: "oneTimeCode",
    keyboardType: "number-pad",
    onChange: handleChange,
    label: null,
    placeholder: null,
    errorMessage: null,
  };
  const intl3 = mfaChallenge(1115).intl;
  obj4.label = intl3.string(mfaChallenge(1115).t["/sHnXc"]);
  const intl4 = mfaChallenge(1115).intl;
  obj4.placeholder = intl4.string(mfaChallenge(1115).t.tARzgo);
  obj4.errorMessage = tmp4[0];
  const items1 = [handleChange(mfaChallenge(6843).TextInput, obj4)];
  let obj5 = { text: null, variant: "secondary", size: "sm", onPress: null };
  const intl5 = mfaChallenge(1115).intl;
  obj5.text = intl5.string(mfaChallenge(1115).t.WbaP3r);
  obj5.onPress = function handleResend() {
    const self = this;
    const apply = closure_10.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  };
  items1[1] = handleChange(mfaChallenge(5186).Button, obj5);
  obj3.children = items1;
  obj2.input = closure_9(c6, obj3);
  let obj6 = { variant: "primary", text: null, loading: null, onPress: null, disabled: null };
  const tmp15 = finish(15946);
  const intl6 = mfaChallenge(1115).intl;
  obj6.text = intl6.string(mfaChallenge(1115).t.geKm7t);
  let tmp17 = tmp6;
  if (!tmp6) {
    tmp17 = tmp12;
  }
  obj6.loading = tmp17;
  obj6.onPress = function onPress() {
    handleChange(first);
  };
  if (!tmp6) {
    tmp6 = tmp12;
  }
  if (!tmp6) {
    tmp6 = first.length !== tmp8(15951).SMS_CODE_LENGTH;
  }
  obj6.disabled = tmp6;
  obj2.submit = handleChange(finish(15949), obj6);
  obj2.screenProps = { mfaChallenge, finish };
  return handleChange(tmp15, obj2);
}
