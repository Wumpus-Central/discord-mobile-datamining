// discord_app/modules/auth/native/components/utils/usePasswordRegistrationStep.tsx
import asyncGeneratorStep from "../../../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

const require = fn;
const useRegistrationUIStore = fn(16098).useRegistrationUIStore;
const size = fn(2);
const result = size.fileFinishedImporting("modules/auth/native/components/utils/usePasswordRegistrationStep.tsx");

export const usePasswordRegistrationStep = function usePasswordRegistrationStep() {
  let str = useRegistrationUIStore((registrationOptions) => registrationOptions.registrationOptions).password;
  if (str == null) {
    str = "";
  }
  let tmp2 = _slicedToArray(noop.useState(str), 2);
  const password = tmp2[0];
  const tmp5 = require("getError")(
    "password",
    useRegistrationUIStore((errors) => errors.errors),
  );
  importDefault = tmp5;
  const tmpResult = useRegistrationUIStore((errors) => errors.errors);
  const passwordScore = password(passwordValid[5]).usePasswordScore(password);
  passwordValid = passwordScore.passwordValid;
  const items = [password, tmp5, passwordValid];
  const memo = noop.useMemo(() => {
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
  const items1 = [password, tmp5];
  let obj2 = password(passwordValid[5]);
  return {
    password,
    setPassword: tmp2[1],
    passwordScore: passwordScore.passwordScore,
    preventSubmitPassword: memo,
    validatePassword: noop.useCallback(
      asyncGeneratorStep(async () => {
        if (c4 === 2) {
          c4 = 3;
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
            c4 = 2;
            if (0 === c1) {
              if (arg0 === 1) {
                c4 = 3;
                throw value;
              } else if (arg0 === 2) {
                c4 = 3;
                const obj4 = { value, done: true };
                return obj4;
              } else {
                if (null != first) {
                  if ("" !== first) {
                    if (first.length < 8) {
                      const intl2 = tmp3(tmp25[6]).intl;
                      c4 = 3;
                      const obj5 = { value: intl2.string(tmp3(tmp25[6]).t.DfaKHr), done: true };
                      return obj5;
                    } else if (null != closure_1) {
                      c4 = 3;
                      const obj6 = { value: tmp14, done: true };
                      return obj6;
                    } else {
                      c3 = 1;
                      c1 = 2;
                      c4 = 1;
                      const obj7 = { value: tmp3(tmp25[7]).scorePassword(first), done: false };
                      return obj7;
                    }
                  }
                }
                const intl3 = tmp3(tmp25[6]).intl;
                c4 = 3;
                const obj8 = { value: intl3.string(tmp3(tmp25[6]).t.R98xD5), done: true };
                return obj8;
              }
            } else {
              if (1 === tmp7) {
                c3 = 0;
                c4 = 3;
              } else if (arg0 === 1) {
                c4 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 0;
                c4 = 3;
                const obj9 = { value, done: true };
                return obj9;
              } else if (false !== value.valid) {
                c3 = 0;
              }
              const intl = tmp3(tmp25[6]).intl;
              c3 = 0;
              c4 = 3;
              const obj = { value: intl.string(tmp3(tmp25[6]).t.DfaKHr), done: true };
              return obj;
            }
          } catch (tmp25) {
            if (tmp4 === c3) {
              c4 = tmp2;
              throw tmp25;
            } else {
              c1 = tmp;
            }
          }
        }
      }),
      items1,
    ),
  };
};
