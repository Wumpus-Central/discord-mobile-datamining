// === Module 1566: useThenable ===

// Module 1566 (useThenable)
import asyncGeneratorStep from "asyncGeneratorStep";
import _slicedToArray from "_slicedToArray";
import noop from "noop";


export default function useThenable(arg0) {
  let noop;
  let tmp3;
  const first = items(React.useState(arg0), 1)[0];
  items = [false, undefined];
  first.then((arg0) => {
    const items = [true, arg0];
  });
  [tmp3, noop] = items(React.useState(items), 2);
  const first1 = items(tmp3, 1)[0];
  let items1 = [first, first1];
  const effect = React.useEffect(() => {
    let asyncGeneratorStep = false;
    asyncGeneratorStep = first(function*() {
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
          return { value: "HermesInternal", done: null };
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
              let _slicedToArray = tmp3;
              let asyncGeneratorStep = tmp7;
              asyncGeneratorStep = undefined;
              let c3 = 1;
              c4 = 2;
              c5 = 1;
              const obj1 = { value: null, done: false };
              obj1[0] = asyncGeneratorStep;
              return obj1;
            }
          } else if (1 === tmp7) {
            c3 = 0;
            if (!outer1_0) {
              const items = [true, asyncGeneratorStep];
              outer2_2(items);
            }
            throw noop;
          } else if (arg0 === 1) {
            c5 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 0;
            if (!outer1_0) {
              const items1 = [true, asyncGeneratorStep];
              outer2_2(items1);
            }
            c5 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            asyncGeneratorStep = arg1;
            c3 = 0;
            if (!outer1_0) {
              const items2 = [true, asyncGeneratorStep];
              outer2_2(items2);
            }
            c5 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp28) {
          noop = tmp28;
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
        const apply = asyncGeneratorStep.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      })();
    }
    return () => {
      let c0 = true;
    };
  }, items1);
  return tmp3;
};