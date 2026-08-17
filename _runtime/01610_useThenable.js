// _runtime/01610_useThenable.js
import closure_0 from "asyncGeneratorStep" /* 5 */;
import closure_1 from "_slicedToArray" /* 32 */;
import closure_2 from "noop" /* 19 */;


export const useThenable = function useThenable(arg0) {
  const first = items(React.useState(arg0), 1)[0];
  items = [false, undefined];
  first.then((arg0) => {
    items = [true, arg0];
  });
  [tmp3, closure_2] = items(React.useState(items), 2);
  const first1 = items(tmp3, 1)[0];
  let items1 = [first, first1];
  const effect = React.useEffect(() => {
    closure_0 = false;
    closure_0 = first(function*() {
      if (c5 === 2) {
        c5 = 3;
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
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c5 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_1 = tmp3;
              closure_0 = tmp7;
              closure_0 = undefined;
              c3 = 1;
              c4 = 2;
              c5 = 1;
              obj1 = { value: null, done: false };
              obj1[0] = closure_0;
              return obj1;
            }
          } else if (1 === tmp7) {
            c3 = 0;
            if (!closure_1_0) {
              items = [true, closure_0];
              closure_2_2(items);
            }
            throw closure_2;
          } else if (arg0 === 1) {
            c5 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 0;
            if (!closure_1_0) {
              const items1 = [true, closure_0];
              closure_2_2(items1);
            }
            c5 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            closure_0 = arg1;
            c3 = 0;
            if (!closure_1_0) {
              const items2 = [true, closure_0];
              closure_2_2(items2);
            }
            c5 = 3;
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } catch (tmp28) {
          closure_2 = tmp28;
          if (tmp4 === c3) {
            c5 = tmp2;
            throw tmp28;
          } else {
            c4 = tmp;
          }
        }
      }
    });
    if (!first1) {
      (function resolve() {
        const self = this;
        const apply = closure_0.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      })();
    }
    return () => {
      c0 = true;
    };
  }, items1);
  return tmp3;
};