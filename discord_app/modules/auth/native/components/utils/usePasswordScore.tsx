// discord_app/modules/auth/native/components/utils/usePasswordScore.tsx
import set from "set";
import _slicedToArray from "_slicedToArray";
import noop from "noop";

const require = arg1;
const result = require("noop").fileFinishedImporting("modules/auth/native/components/utils/usePasswordScore.tsx");

export const PasswordScore = { WEAK: 2, [2]: "WEAK", MEDIUM: 3, [3]: "MEDIUM", STRONG: 4, [4]: "STRONG" };
export const usePasswordScore = function usePasswordScore(first) {
  let set;
  let dependencyMap;
  let tmp2;
  let tmp4;
  let closure_0 = first;
  [tmp2, dependencyMap] = callback(React.useState(null), 2);
  let tmp = callback(React.useState(null), 2);
  [tmp4, set] = callback(React.useState(null), 2);
  callback = React.useRef(null);
  const effect = React.useEffect(() => {
    let lib;
    lib = outer1_2((arg0) => {
      let closure_0 = arg0;
      let c5 = 0;
      let c6 = 0;
      let c4 = 0;
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
            return { value: "T", done: null };
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
                let set = tmp3;
                let closure_1 = tmp7;
                let lib;
                if (null != lib) {
                  if (arr.length > 0) {
                    let c4 = 1;
                    let obj1 = lib(outer2_1[4]);
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
                outer1_1(null);
                outer1_2(null);
              } else if (arg0 === 1) {
                c6 = 3;
                throw arg1;
              } else if (arg0 !== 2) {
                lib = arg1;
                outer1_1(lib.password_strength);
                outer1_2(lib.valid);
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
            let _slicedToArray = tmp24;
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
    _slicedToArray.current = lib(outer1_1[3]).throttle(function() {
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