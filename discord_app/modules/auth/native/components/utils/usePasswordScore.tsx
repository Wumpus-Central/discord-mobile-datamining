// === Module 16100: usePasswordScore ===

// Module 16100 (usePasswordScore)
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/auth/native/components/utils/usePasswordScore.tsx");

export const PasswordScore = { WEAK: 2, [2]: "WEAK", MEDIUM: 3, [3]: "MEDIUM", STRONG: 4, [4]: "STRONG" };
export const usePasswordScore = function usePasswordScore(password) {
  [tmp2, dependencyMap] = noop.useState(null);
  let tmp = _slicedToArray(noop.useState(null), 2);
  [tmp4, asyncGeneratorStep] = noop.useState(null);
  _slicedToArray = noop.useRef(null);
  const effect = noop.useEffect(() => {
    password = asyncGeneratorStep(async (arg0) => {
      if (c6 === 2) {
        c6 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
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
              const obj4 = { value, done: true };
              return obj4;
            } else {
              closure_1 = tmp7;
              closure_129_0 = undefined;
              if (null != closure_0) {
                if (closure_0.length > 0) {
                  c4 = 1;
                  c5 = 2;
                  c6 = 1;
                  const obj5 = { value: closure_0(dependencyMap[4]).scorePassword(closure_0), done: false };
                  return obj5;
                }
              }
            }
          } else {
            if (1 === tmp7) {
              c4 = 0;
              closure_1(null);
              tmp3(null);
            } else if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 !== 2) {
              closure_129_0 = value;
              closure_1(closure_129_0.password_strength);
              tmp3(closure_129_0.valid);
              c4 = 0;
            }
            c4 = 0;
            c6 = 3;
            const obj = { value, done: true };
            return obj;
          }
          c6 = 3;
        } catch (tmp24) {
          closure_3 = tmp24;
          if (tmp4 === c4) {
            c6 = tmp2;
            throw tmp24;
          } else {
            c5 = tmp;
          }
        }
      }
    });
    ref.current = password(dependencyMap[3]).throttle(function() {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }, 250);
    return () => {
      const current = ref.current;
      let cancel;
      if (current != null) {
        cancel = current.cancel;
      }
      if (null != cancel) {
        const current2 = ref.current;
        current2.cancel();
      }
    };
  }, []);
  const items = [password];
  const effect1 = noop.useEffect(() => {
    let tmp = null != ref.current;
    if (tmp) {
      tmp = password.length > 0;
    }
    if (tmp) {
      ref.current(password);
    }
  }, items);
  return { passwordScore, passwordValid };
};