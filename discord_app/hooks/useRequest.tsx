// === Module 12203: useRequest ===

// Module 12203 (useRequest)
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("hooks/useRequest.tsx");

export default function useRequest(archiveSubscriptionListing) {
  closure_0 = archiveSubscriptionListing;
  const tmp = _slicedToArray(noop.useState(false), 2);
  closure_1 = tmp[1];
  const tmp2 = _slicedToArray(noop.useState(null), 2);
  closure_2 = tmp2[1];
  let items = [archiveSubscriptionListing];
  const items1 = [
    noop.useCallback(asyncGeneratorStep(async () => {
      closure_0 = [...arguments];
      c5 = 0;
      c6 = 0;
      c4 = 0;
      const iter = (async (arg0) => {
        if (c6 === 2) {
          c6 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp8 === 3) {
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
            c6 = 2;
            if (0 === c5) {
              if (arg0 === 1) {
                c6 = 3;
                throw value;
              } else if (arg0 === 2) {
                c6 = 3;
                obj = { value, done: true };
                return obj;
              } else {
                closure_129_0 = closure_0;
                c5 = 1;
                c6 = 1;
                return { value: "PX_16", done: true };
              }
            } else if (1 === tmp9) {
              if (arg0 === 1) {
                c6 = 3;
                throw value;
              } else if (arg0 === 2) {
                c6 = 3;
                const obj1 = { value, done: true };
                return obj1;
              } else {
                c4 = 2;
                closure_130_2(null);
                closure_130_1(true);
                const items = [];
                HermesBuiltin.arraySpread(closure_129_0, 0);
                c5 = 4;
                c6 = 1;
                const obj2 = { value: HermesBuiltin.apply(items, undefined), done: false };
                return obj2;
              }
            } else if (2 === tmp9) {
              c4 = 0;
              closure_130_1(false);
              throw closure_3;
            } else if (3 === tmp9) {
              c4 = 1;
              closure_129_1 = closure_3;
              const intl = closure_0(tmp4[3]).intl;
              if (closure_129_1.message === intl.string(closure_0(tmp4[3]).t.N2yb9a)) {
                c4 = 0;
                closure_130_1(false);
                c6 = 3;
                return { value: "HermesInternal", done: null };
              } else {
                if (closure_129_1 instanceof tmp6(tmp4[4])) {
                  let tmp37 = closure_129_1;
                } else {
                  tmp37 = new tmp6(tmp4[4])(closure_129_1);
                }
                closure_130_2(tmp37);
              }
            } else if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 0;
              closure_130_1(false);
              c6 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              c4 = 0;
              closure_130_1(false);
              c6 = 3;
              obj = { value, done: true };
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