// === Module 15928: usePasswordRegistrationStep ===

// Module 15928 (usePasswordRegistrationStep)
import getErrorDefault from "getError" /* 6452 */;
import RegistrationUIStore from "RegistrationUIStore" /* 15906 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let c1, c4, importDefault;

const useRegistrationUIStore = RegistrationUIStore.useRegistrationUIStore;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let closure_1;
  let first;
  let first1;
  let tmp11;
  let tmp8;
  let tmp9;
  const tmp = first1;
  let obj = first1(576);
  const cResult = obj.c(12);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function l(registrationOptions) {
      return registrationOptions.registrationOptions;
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  let str = useRegistrationUIStore(first).password;
  const useState = react.useState;
  if (str == null) {
    str = "";
  }
  [first1, tmp8] = useState(str);
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function c(errors) {
      return errors.errors;
    };
    cResult[1] = fn2;
    tmp9 = fn2;
  } else {
    tmp9 = cResult[1];
  }
  const tmp5Result = useRegistrationUIStore(tmp9);
  if (cResult[2] !== tmp5Result) {
    const tmp13 = getErrorDefault("password", tmp5Result);
    cResult[2] = tmp5Result;
    cResult[3] = tmp13;
    tmp11 = tmp13;
  } else {
    tmp11 = cResult[3];
  }
  importDefault = tmp11;
  const tmpResult = tmp(15929);
  const passwordScore1 = tmpResult.usePasswordScore(first1);
  const passwordScore = passwordScore1.passwordScore;
  let tmp15 = null == first1;
  const passwordValid = passwordScore1.passwordValid;
  if (!tmp15) {
    tmp15 = "" === first1;
  }
  if (!tmp15) {
    let tmp16 = first1.length < 8 || null != tmp11;
    if (!tmp16) {
      tmp16 = false === passwordValid;
    }
    tmp15 = tmp16;
  }
  if (cResult[4] === first1) {
    let tmp17;
    if (cResult[5] === tmp11) {
      tmp17 = cResult[6];
    }
    if (cResult[7] === first1) {
      if (cResult[8] === passwordScore) {
        if (cResult[9] === tmp15) {
          let tmp18;
          if (cResult[10] === tmp17) {
            tmp18 = cResult[11];
          }
          return tmp18;
        }
      }
    }
    let obj2 = { password: first1, setPassword: tmp8, passwordScore, preventSubmitPassword: tmp15, validatePassword: tmp17 };
    cResult[7] = first1;
    cResult[8] = passwordScore;
    cResult[9] = tmp15;
    cResult[10] = tmp17;
    cResult[11] = obj2;
    tmp18 = obj2;
  }
  let closure_0 = _asyncToGenerator(async () => {
    let obj3;
    if (c4 === 2) {
      c4 = 3;
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
      let c3;
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
            if (null != tmp) {
              if ("" !== tmp) {
                if (tmp.length < 8) {
                  const intl2 = tmp(dependencyMap[8]).intl;
                  c4 = 3;
                  const obj5 = { value: intl2.string(tmp(dependencyMap[8]).t.DfaKHr), done: true };
                  return obj5;
                } else if (null != c1) {
                  c4 = 3;
                  const obj6 = { value: tmp11, done: true };
                  return obj6;
                } else {
                  c3 = 1;
                  c1 = 2;
                  c4 = 1;
                  const obj7 = { value: obj3.scorePassword(tmp), done: false };
                  obj3 = tmp(dependencyMap[9]);
                  return obj7;
                }
              }
            }
            const intl3 = tmp(dependencyMap[8]).intl;
            c4 = 3;
            const obj8 = { value: intl3.string(tmp(dependencyMap[8]).t.R98xD5), done: true };
            return obj8;
          }
        } else {
          if (1 === tmp4) {
            c3 = 0;
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            c4 = 3;
            const obj9 = { value, done: true };
            return obj9;
          } else if (false === value.valid) {
            const intl = tmp(dependencyMap[8]).intl;
            c3 = 0;
            c4 = 3;
            const obj = { value: intl.string(tmp(dependencyMap[8]).t.DfaKHr), done: true };
            return obj;
          } else {
            c3 = 0;
          }
          c4 = 3;
          return { value: null, done: true };
        }
      } catch (tmp22) {
        let closure_2 = tmp22;
        if (0 === c3) {
          c4 = 3;
          throw tmp22;
        } else {
          c1 = 1;
        }
      }
    }
  });
  const fn3 = function() {
    return closure_0(...arguments);
  };
  cResult[4] = first1;
  cResult[5] = tmp11;
  cResult[6] = fn3;
  tmp17 = fn3;
}) : (() => {
  let closure_1;
  let password;
  let passwordValid;
  let tmp4;
  let str = useRegistrationUIStore((registrationOptions) => registrationOptions.registrationOptions).password;
  const useState = react.useState;
  if (str == null) {
    str = "";
  }
  [password, tmp4] = useState(str);
  const tmpResult = useRegistrationUIStore((errors) => errors.errors);
  const tmp6 = require("getError")("password", tmpResult);
  importDefault = tmp6;
  let obj2 = password(passwordValid[7]);
  const passwordScore1 = obj2.usePasswordScore(password);
  passwordValid = passwordScore1.passwordValid;
  const items = [password, tmp6, passwordValid];
  const passwordScore = passwordScore1.passwordScore;
  const memo = react.useMemo(() => {
    let tmp = null == first || "" === first;
    if (!tmp) {
      tmp = first.length < 8 || null != closure_1 || false === passwordValid;
      const tmp2 = first.length < 8 || null != closure_1 || false === passwordValid;
    }
    return tmp;
  }, items);
  const items1 = [password, tmp6];
  let obj3 = {
    password,
    setPassword: tmp4,
    passwordScore,
    preventSubmitPassword: memo,
    validatePassword: react.useCallback(_asyncToGenerator(async () => {
      let closure_0;
      let closure_2;
      let obj3;
      if (c4 === 2) {
        c4 = 3;
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
        let c3;
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
                    const intl2 = tmp(passwordValid[8]).intl;
                    c4 = 3;
                    const obj5 = { value: intl2.string(tmp(passwordValid[8]).t.DfaKHr), done: true };
                    return obj5;
                  } else if (null != closure_1) {
                    c4 = 3;
                    const obj6 = { value: tmp11, done: true };
                    return obj6;
                  } else {
                    c3 = 1;
                    c1 = 2;
                    c4 = 1;
                    const obj7 = { value: obj3.scorePassword(first), done: false };
                    obj3 = tmp(passwordValid[9]);
                    return obj7;
                  }
                }
              }
              const intl3 = tmp(passwordValid[8]).intl;
              c4 = 3;
              const obj8 = { value: intl3.string(tmp(passwordValid[8]).t.R98xD5), done: true };
              return obj8;
            }
          } else {
            if (1 === tmp4) {
              c3 = 0;
            } else if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              c4 = 3;
              const obj9 = { value, done: true };
              return obj9;
            } else if (false === value.valid) {
              const intl = tmp(passwordValid[8]).intl;
              c3 = 0;
              c4 = 3;
              const obj = { value: intl.string(tmp(passwordValid[8]).t.DfaKHr), done: true };
              return obj;
            } else {
              c3 = 0;
            }
            c4 = 3;
            return { value: null, done: true };
          }
        } catch (tmp22) {
          passwordValid = tmp22;
          if (0 === c3) {
            c4 = 3;
            throw tmp22;
          } else {
            c1 = 1;
          }
        }
      }
    }), items1)
  };
  return obj3;
});
const result = size.fileFinishedImporting("modules/auth/native/components/utils/usePasswordRegistrationStep.tsx");

export const usePasswordRegistrationStep = tmp2;