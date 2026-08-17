// discord_app/modules/auth/native/components/utils/usePasswordScore.tsx
import closure_2 from "asyncGeneratorStep" /* 5 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/auth/native/components/utils/usePasswordScore.tsx");

export const PasswordScore = { WEAK: 2, [2]: "WEAK", MEDIUM: 3, [3]: "MEDIUM", STRONG: 4, [4]: "STRONG" };
export const usePasswordScore = function usePasswordScore(first) {
  closure_0 = first;
  [tmp2, dependencyMap] = callback(React.useState(null), 2);
  let tmp = callback(React.useState(null), 2);
  [tmp4, closure_2] = callback(React.useState(null), 2);
  callback = React.useRef(null);
  const effect = React.useEffect(() => {
    let lib;
    lib = closure_1_2((arg0) => {
      closure_0 = arg0;
      c5 = 0;
      c6 = 0;
      c4 = 0;
      return (function*(arg0) {
        if (c6 === 2) {
          c6 = 3;
          HermesBuiltin.throwTypeError();
        } else if (tmp6 === 3) {
          if (arg0 === 1) {
            throw arg1;
          } else if (arg0 === 2) {
            let obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } else {
          try {
            c6 = 2;
            if (0 === c5) {
              if (arg0 === 1) {
                c6 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c6 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                closure_2 = tmp3;
                closure_1 = tmp7;
                let lib;
                if (null != lib) {
                  if (arr.length > 0) {
                    c4 = 1;
                    obj1 = lib(closure_2_1[4]);
                    c5 = 2;
                    c6 = 1;
                    obj1 = { value: null, done: false };
                    obj1[0] = obj1.scorePassword(arr);
                    return obj1;
                  }
                }
              }
            } else {
              if (1 === tmp7) {
                c4 = 0;
                closure_1_1(null);
                closure_1_2(null);
              } else if (arg0 === 1) {
                c6 = 3;
                throw arg1;
              } else if (arg0 !== 2) {
                lib = arg1;
                closure_1_1(lib.password_strength);
                closure_1_2(lib.valid);
                c4 = 0;
              }
              c4 = 0;
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
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
      })();
    });
    closure_3.current = lib(closure_1_1[3]).throttle(function() {
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
  const items = [first];
  const effect1 = React.useEffect(() => {
    let tmp = null != ref.current;
    if (tmp) {
      tmp = lib.length > 0;
    }
    if (tmp) {
      ref.current(lib);
    }
  }, items);
  return { passwordScore, passwordValid };
};