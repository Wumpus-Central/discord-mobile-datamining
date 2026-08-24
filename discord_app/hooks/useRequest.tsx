// === Module 11429: useRequest ===

// Module 11429 (useRequest)
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "_slicedToArray" /* 32 */;
import closure_5 from "noop" /* 19 */;

const require = arg1;
const result = require("set").fileFinishedImporting("hooks/useRequest.tsx");

export default function useRequest(arg0) {
  closure_0 = arg0;
  const tmp = callback2(React.useState(false), 2);
  closure_1 = tmp[1];
  const tmp2 = callback2(React.useState(null), 2);
  closure_2 = tmp2[1];
  let items = [arg0];
  const items1 = [
    React.useCallback(callback(() => {
      closure_0 = [...arguments];
      c5 = 0;
      c6 = 0;
      c4 = 0;
      const iter = (function*() {
        if (c6 === 2) {
          c6 = 3;
          HermesBuiltin.throwTypeError();
        } else if (tmp8 === 3) {
          if (arg0 === 1) {
            throw arg1;
          } else if (arg0 === 2) {
            let obj = { value: null, done: true };
            obj[0] = arg1;
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
                throw arg1;
              } else if (arg0 === 2) {
                c6 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                const callback2 = tmp4;
                let lib = tmp6;
                c5 = 1;
                c6 = 1;
                return { value: "ct", done: true };
              }
            } else if (1 === tmp9) {
              if (arg0 === 1) {
                c6 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c6 = 3;
                obj1 = { value: null, done: true };
                obj1[0] = arg1;
                return obj1;
              } else {
                c4 = 2;
                callback2(null);
                lib(true);
                const items = [];
                HermesBuiltin.arraySpread(callback, 0);
                c5 = 4;
                c6 = 1;
                const obj2 = { value: null, done: false };
                obj2[0] = HermesBuiltin.apply(items, undefined);
                return obj2;
              }
            } else if (2 === tmp9) {
              c4 = 0;
              lib(false);
              throw closure_3;
            } else if (3 === tmp9) {
              c4 = 1;
              lib = closure_3;
              const intl = callback(closure_1_2[3]).intl;
              if (lib.message === intl.string(callback(closure_1_2[3]).t.N2yb9a)) {
                c4 = 0;
                closure_1_1(false);
                c6 = 3;
                return { value: "HermesInternal", done: null };
              } else {
                if (lib instanceof closure_1_1(closure_1_2[4])) {
                  let tmp37 = lib;
                } else {
                  tmp37 = new closure_1_1(closure_1_2[4])(lib);
                }
                closure_1_2(tmp37);
                const tmp26 = closure_1_2;
              }
            } else if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 0;
              lib(false);
              c6 = 3;
              const obj3 = { value: null, done: true };
              obj3[0] = arg1;
              return obj3;
            } else {
              c4 = 0;
              lib(false);
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            }
          } catch (tmp60) {
            closure_3 = tmp60;
            if (tmp5 === c4) {
              c6 = tmp3;
              throw tmp60;
            } else if (tmp2 === tmp62) {
              c5 = tmp;
            } else {
              c5 = tmp3;
            }
          }
        }
      })();
      iter.next();
      return iter;
    }), items),
    { loading: tmp[0], error: tmp2[0] }
  ];
  return items1;
};