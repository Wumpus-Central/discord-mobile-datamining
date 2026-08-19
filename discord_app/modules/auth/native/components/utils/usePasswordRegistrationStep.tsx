// discord_app/modules/auth/native/components/utils/usePasswordRegistrationStep.tsx
import asyncGeneratorStep from "../../../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../../../_runtime/metro/00032__slicedToArray.js";
import noop from "../../../../../../_runtime/00019_noop.js";
import { useRegistrationUIStore } from "../../RegistrationUIStore.tsx";

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/auth/native/components/utils/usePasswordRegistrationStep.tsx");

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
  const tmpResult = useRegistrationUIStore((errors) => errors.errors);
  const passwordScore = first(passwordValid[5]).usePasswordScore(first);
  passwordValid = passwordScore.passwordValid;
  const items = [first, tmp5, passwordValid];
  const memo = obj.useMemo(() => {
    let tmp = null == first;
    if (!tmp) {
      tmp = "" === first;
    }
    if (!tmp) {
      let tmp2 = first.length < 8;
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
          throw valid;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = valid;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c4 = 2;
          if (0 === c1) {
            if (arg0 === 1) {
              c4 = 3;
              throw valid;
            } else if (arg0 === 2) {
              c4 = 3;
              obj = { value: null, done: true };
              obj[0] = valid;
              return obj;
            } else {
              closure_0 = tmp3;
              if (null != first) {
                if ("" !== first) {
                  if (first.length < 8) {
                    const intl2 = first(passwordValid[6]).intl;
                    c4 = 3;
                    obj1 = { value: null, done: true };
                    obj1[0] = intl2.string(first(passwordValid[6]).t.DfaKHr);
                    return obj1;
                  } else if (null != c1) {
                    c4 = 3;
                    let obj2 = { value: null, done: true };
                    obj2[0] = tmp14;
                    return obj2;
                  } else {
                    c3 = 1;
                    obj2 = first(passwordValid[7]);
                    c1 = 2;
                    c4 = 1;
                    const obj3 = { value: null, done: false };
                    obj3[0] = obj2.scorePassword(first);
                    return obj3;
                  }
                }
              }
              const intl3 = first(passwordValid[6]).intl;
              c4 = 3;
              const obj4 = { value: null, done: true };
              obj4[0] = intl3.string(first(passwordValid[6]).t.R98xD5);
              return obj4;
            }
          } else {
            if (1 === tmp7) {
              c3 = 0;
              c4 = 3;
            } else if (arg0 === 1) {
              c4 = 3;
              throw valid;
            } else if (arg0 === 2) {
              c3 = 0;
              c4 = 3;
              const obj5 = { value: null, done: true };
              obj5[0] = valid;
              return obj5;
            } else if (false !== valid.valid) {
              c3 = 0;
            }
            const intl = first(passwordValid[6]).intl;
            c3 = 0;
            c4 = 3;
            obj = { value: null, done: true };
            obj[0] = intl.string(first(passwordValid[6]).t.DfaKHr);
            return obj;
          }
        } catch (tmp25) {
          closure_2 = tmp25;
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