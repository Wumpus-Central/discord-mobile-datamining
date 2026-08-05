// discord_app/modules/auth/native/components/utils/usePasswordRegistrationStep.tsx
import PasswordScore from "PasswordScore";
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import { useRegistrationUIStore } from "useRegistrationUIStore";

const require = arg1;
const result = require("noop").fileFinishedImporting("modules/auth/native/components/utils/usePasswordRegistrationStep.tsx");

export const usePasswordRegistrationStep = function usePasswordRegistrationStep() {
  let obj = React;
  let str = useRegistrationUIStore((registrationOptions) => registrationOptions.registrationOptions).password;
  if (str == null) {
    str = "";
  }
  let tmp2 = callback2(React.useState(str), 2);
  const first = tmp2[0];
  const tmp5 = importDefault(passwordValid[4])("password", useRegistrationUIStore((errors) => errors.errors));
  importDefault = tmp5;
  let tmp = useRegistrationUIStore;
  const tmpResult = useRegistrationUIStore((errors) => errors.errors);
  const passwordScore = first(passwordValid[5]).usePasswordScore(first);
  passwordValid = passwordScore.passwordValid;
  const items = [first, tmp5, passwordValid];
  const memo = obj.useMemo(() => {
    let tmp = null == first;
    if (!tmp) {
      tmp = "" === arr;
    }
    if (!tmp) {
      let tmp2 = arr.length < 8;
      if (!tmp2) {
        tmp2 = null != closure_1;
      }
      if (!tmp2) {
        tmp2 = false === passwordValid;
      }
      tmp = tmp2;
    }
    return tmp;
  }, items);
  const items1 = [first, tmp5];
  obj = {
    password: first,
    setPassword: tmp2[1],
    passwordScore: passwordScore.passwordScore,
    preventSubmitPassword: memo,
    validatePassword: obj.useCallback(callback(function*() {
      if (c4 === 2) {
        c4 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "T", done: null };
        }
      } else {
        try {
          c4 = 2;
          if (0 === c1) {
            if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let closure_0 = tmp3;
              if (null != outer1_0) {
                if ("" !== arr) {
                  if (arr.length < 8) {
                    const intl2 = outer1_0(outer1_2[6]).intl;
                    c4 = 3;
                    const obj1 = { value: null, done: true };
                    obj1[0] = intl2.string(outer1_0(outer1_2[6]).t.DfaKHr);
                    return obj1;
                  } else if (null != c1) {
                    c4 = 3;
                    let obj2 = { value: null, done: true };
                    obj2[0] = tmp14;
                    return obj2;
                  } else {
                    let c3 = 1;
                    obj2 = outer1_0(outer1_2[7]);
                    c1 = 2;
                    c4 = 1;
                    const obj3 = { value: null, done: false };
                    obj3[0] = obj2.scorePassword(arr);
                    return obj3;
                  }
                }
              }
              const intl3 = outer1_0(outer1_2[6]).intl;
              c4 = 3;
              const obj4 = { value: null, done: true };
              obj4[0] = intl3.string(outer1_0(outer1_2[6]).t.R98xD5);
              return obj4;
            }
          } else {
            if (1 === tmp7) {
              c3 = 0;
              c4 = 3;
            } else if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c3 = 0;
              c4 = 3;
              const obj5 = { value: null, done: true };
              obj5[0] = arg1;
              return obj5;
            } else if (false !== arg1.valid) {
              c3 = 0;
            }
            const intl = outer1_0(outer1_2[6]).intl;
            c3 = 0;
            c4 = 3;
            obj = { value: null, done: true };
            obj[0] = intl.string(outer1_0(outer1_2[6]).t.DfaKHr);
            return obj;
          }
        } catch (tmp25) {
          let closure_2 = tmp25;
          if (tmp4 === c3) {
            c4 = tmp2;
            throw tmp25;
          } else {
            c1 = tmp;
          }
        }
      }
    }), items1)
  };
  return obj;
};