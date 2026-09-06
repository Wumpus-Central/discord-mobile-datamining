// discord_app/modules/verification/native/components/VerifyPhone.tsx
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/verification/native/components/VerifyPhone.tsx");

export default function VerifyPhone(phone) {
  phone = phone.phone;
  _require = phone;
  let flag = phone.loading;
  if (flag === undefined) {
    flag = false;
  }
  ({ error, onCodeEnteredIntercept } = phone);
  const onVerified = phone.onVerified;
  _slicedToArray = undefined;
  let onCodeEntered;
  ({ backgroundStyle, disableKeyboardAvoidingView } = phone);
  const tmp = _slicedToArray(onCodeEntered.useState(null), 2);
  asyncGeneratorStep = tmp[1];
  const tmp2 = _slicedToArray(onCodeEntered.useState(false), 2);
  _slicedToArray = tmp2[1];
  asyncGeneratorStep(async (arg0) => {
    if (c6 === 2) {
      c6 = 3;
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
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            onCodeEnteredIntercept = tmp7;
            closure_129_0 = closure_0;
            let token;
            c4 = 1;
            if (null != onCodeEnteredIntercept) {
              c5 = 3;
              c6 = 1;
              const obj1 = { value: onCodeEnteredIntercept(closure_0), done: false };
              return obj1;
            }
          }
        } else {
          if (1 === tmp7) {
            c4 = 0;
            const body = tmp25.body;
            let message;
            if (body != null) {
              message = body.message;
            }
            tmp25(message);
            c6 = 3;
          } else if (2 === tmp7) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 !== 2) {
              token = value.token;
              tmp3(token);
              c4 = 0;
            }
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            obj = { value, done: true };
            return obj;
          } else if (value) {
            c4 = 0;
            c6 = 3;
            return { value: "HermesInternal", done: null };
          }
          c4 = 0;
          c6 = 3;
          let obj2 = { value, done: true };
          return obj2;
        }
        obj2 = onCodeEnteredIntercept(onVerified[4]);
        c5 = 2;
        c6 = 1;
        const obj3 = { value: obj2.verifyPhone(closure_0, closure_129_0, false), done: false };
        return obj3;
      } catch (tmp25) {
        if (tmp4 === c4) {
          c6 = tmp2;
          throw tmp25;
        } else {
          c5 = tmp;
        }
      }
    }
  });
  const items = [onCodeEnteredIntercept, onVerified, phone];
  onCodeEntered = onCodeEntered.useCallback(function () {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }, items);
  _require = asyncGeneratorStep(async (arg0) => {
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
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
        c3 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_1 = tmp4;
            closure_1_4(true);
            c2 = 1;
            c3 = 1;
            const obj1 = { value: onCodeEntered(closure_0), done: false };
            return obj1;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          obj = { value, done: true };
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
  });
  const items1 = [onCodeEntered];
  const callback1 = onCodeEntered.useCallback(function () {
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
  let obj = {
    title: null,
    description: null,
    error: null,
    backgroundStyle: null,
    loading: null,
    onCodeEntered: null,
    codeType: null,
    disabled: null,
    disableKeyboardAvoidingView: null,
  };
  const intl = require("util").intl;
  obj.title = intl.string(require("util").t.Xclkxp);
  const intl2 = require("util").intl;
  obj.description = intl2.string(require("util").t["4qMI6A"]);
  if (error == null) {
    error = tmp[0];
  }
  obj.error = error;
  obj.backgroundStyle = backgroundStyle;
  obj.loading = flag;
  obj.onCodeEntered = onCodeEntered;
  obj.codeType = require("CodeField").CodeType.NUMERIC;
  obj.disabled = tmp2[0];
  obj.disableKeyboardAvoidingView = disableKeyboardAvoidingView;
  return jsx(onCodeEnteredIntercept(onVerified[6]), {
    title: null,
    description: null,
    error: null,
    backgroundStyle: null,
    loading: null,
    onCodeEntered: null,
    codeType: null,
    disabled: null,
    disableKeyboardAvoidingView: null,
  });
}
