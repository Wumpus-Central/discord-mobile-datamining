// _runtime/metro/01593__.js
import asyncGeneratorStep from "../00005_asyncGeneratorStep.js";
import _slicedToArray from "00032__.js";
import noop from "00019__.js";

export const useThenable = function useThenable(arg0) {
  const first = items(noop.useState(arg0), 1)[0];
  items = [false, undefined];
  first.then((result) => {
    items = [true, result];
  });
  [tmp3, noop] = items(noop.useState(items), 2);
  const first1 = items(tmp3, 1)[0];
  let items1 = [first, first1];
  const effect = noop.useEffect(() => {
    c0 = first(function* () {
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj = { value, done: true };
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              closure_1 = tmp3;
              closure_0 = tmp7;
              closure_128_0 = undefined;
              c3 = 1;
              c4 = 2;
              c5 = 1;
              const obj1 = { value, done: false };
              return obj1;
            }
          } else if (1 === tmp7) {
            c3 = 0;
            if (!closure_0) {
              items = [true, closure_128_0];
              noop(items);
            }
            throw closure_2;
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            if (!closure_0) {
              const items1 = [true, closure_128_0];
              noop(items1);
            }
            c5 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_128_0 = value;
            c3 = 0;
            if (!closure_0) {
              const items2 = [true, closure_128_0];
              noop(items2);
            }
            c5 = 3;
            return { value: "HermesInternal", done: null };
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
        const apply = c0.apply;
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
