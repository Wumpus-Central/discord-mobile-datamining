// === Module 15889: usePasswordRegistrationStep ===

// Module 15889 (usePasswordRegistrationStep)
import getErrorDefault from "getError" /* 6445 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

const require = fn;
const useRegistrationUIStore = fn(15867).useRegistrationUIStore;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/auth/native/components/utils/usePasswordRegistrationStep.tsx");

export const usePasswordRegistrationStep = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = require("c").c(12);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function l(registrationOptions) {
      return registrationOptions.registrationOptions;
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  let str = useRegistrationUIStore(first).password;
  if (str == null) {
    str = "";
  }
  const tmp7 = _slicedToArray(noop.useState(str), 2);
  const first1 = tmp7[0];
  _require = first1;
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function c(errors) {
      return errors.errors;
    };
    cResult[1] = fn2;
    let tmp8 = fn2;
  } else {
    tmp8 = cResult[1];
  }
  const tmp5Result = useRegistrationUIStore(tmp8);
  if (cResult[2] !== tmp5Result) {
    const tmp12 = getErrorDefault("password", tmp5Result);
    cResult[2] = tmp5Result;
    cResult[3] = tmp12;
    let tmp10 = tmp12;
  } else {
    tmp10 = cResult[3];
  }
  importDefault = tmp10;
  let obj = require("c");
  const passwordScore1 = require("usePasswordScore").usePasswordScore(first1);
  const passwordScore = passwordScore1.passwordScore;
  let tmp14 = null == first1;
  if (!tmp14) {
    tmp14 = "" === first1;
  }
  if (!tmp14) {
    let tmp15 = first1.length < 8 || null != tmp10;
    if (!tmp15) {
      tmp15 = false === passwordScore1.passwordValid;
    }
    tmp14 = tmp15;
  }
  if (cResult[4] === first1) {
    if (cResult[5] === tmp10) {
      let tmp16 = cResult[6];
    }
    if (cResult[7] === first1) {
      if (cResult[8] === passwordScore) {
        if (cResult[9] === tmp14) {
          if (cResult[10] === tmp16) {
            let tmp17 = cResult[11];
          }
          return tmp17;
        }
      }
    }
    let obj2 = { password: first1, setPassword: tmp7[1], passwordScore, preventSubmitPassword: tmp14, validatePassword: tmp16 };
    cResult[7] = first1;
    cResult[8] = passwordScore;
    cResult[9] = tmp14;
    cResult[10] = tmp16;
    cResult[11] = obj2;
    tmp17 = obj2;
  }
  _require = asyncGeneratorStep(async () => {
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
        return { value: "IconComponent", done: null };
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
            if (null != tmp3) {
              if ("" !== tmp3) {
                if (tmp3.length < 8) {
                  const intl2 = tmp3(1126).intl;
                  c4 = 3;
                  const obj5 = { value: intl2.string(tmp3(1126).t.DfaKHr), done: true };
                  return obj5;
                } else if (null != c1) {
                  c4 = 3;
                  const obj6 = { value: tmp14, done: true };
                  return obj6;
                } else {
                  c3 = 1;
                  c1 = 2;
                  c4 = 1;
                  const obj7 = { value: tmp3(15878).scorePassword(tmp3), done: false };
                  return obj7;
                }
              }
            }
            const intl3 = tmp3(1126).intl;
            c4 = 3;
            const obj8 = { value: intl3.string(tmp3(1126).t.R98xD5), done: true };
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
          const intl = tmp3(1126).intl;
          c3 = 0;
          c4 = 3;
          const obj = { value: intl.string(tmp3(1126).t.DfaKHr), done: true };
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
  });
  const fn3 = function() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  };
  cResult[4] = first1;
  cResult[5] = tmp10;
  cResult[6] = fn3;
  tmp16 = fn3;
  const tmpResult = require("usePasswordScore");
}) : (() => {
  let str = useRegistrationUIStore((registrationOptions) => registrationOptions.registrationOptions).password;
  if (str == null) {
    str = "";
  }
  let tmp2 = _slicedToArray(noop.useState(str), 2);
  const password = tmp2[0];
  const tmp5 = require("getError")("password", useRegistrationUIStore((errors) => errors.errors));
  importDefault = tmp5;
  const tmpResult = useRegistrationUIStore((errors) => errors.errors);
  const passwordScore = password(passwordValid[7]).usePasswordScore(password);
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
  let obj2 = password(passwordValid[7]);
  return {
    password,
    setPassword: tmp2[1],
    passwordScore: passwordScore.passwordScore,
    preventSubmitPassword: memo,
    validatePassword: noop.useCallback(asyncGeneratorStep(async () => {
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
          return { value: "IconComponent", done: null };
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
                    const intl2 = tmp3(tmp25[8]).intl;
                    c4 = 3;
                    const obj5 = { value: intl2.string(tmp3(tmp25[8]).t.DfaKHr), done: true };
                    return obj5;
                  } else if (null != closure_1) {
                    c4 = 3;
                    const obj6 = { value: tmp14, done: true };
                    return obj6;
                  } else {
                    c3 = 1;
                    c1 = 2;
                    c4 = 1;
                    const obj7 = { value: tmp3(tmp25[9]).scorePassword(first), done: false };
                    return obj7;
                  }
                }
              }
              const intl3 = tmp3(tmp25[8]).intl;
              c4 = 3;
              const obj8 = { value: intl3.string(tmp3(tmp25[8]).t.R98xD5), done: true };
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
            const intl = tmp3(tmp25[8]).intl;
            c3 = 0;
            c4 = 3;
            const obj = { value: intl.string(tmp3(tmp25[8]).t.DfaKHr), done: true };
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
    }), items1)
  };
});