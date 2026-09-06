// === Module 17711: useCreateCreatorMonetizationEnableRequest ===

// Module 17711 (useCreateCreatorMonetizationEnableRequest)
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/creator_monetization_eligibility/useCreateCreatorMonetizationEnableRequest.tsx");

export default function useCreateCreatorMonetizationEnableRequest(arg0) {
  closure_0 = arg0;
  const tmp = _slicedToArray(noop.useState(), 2);
  closure_1 = tmp[1];
  [tmp3, dependencyMap] = _slicedToArray(noop.useState(false), 2);
  const tmp4 = _slicedToArray(noop.useState(false), 2);
  asyncGeneratorStep = tmp4[1];
  let obj = { error: tmp[0], loading: tmp3, createEnableRequest: null, submittedRequest: tmp4[0] };
  const items = [arg0];
  obj.createEnableRequest = noop.useCallback(asyncGeneratorStep(async () => {
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp7 === 3) {
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
            closure_0 = tmp8;
            if (null != closure_0) {
              dependencyMap(true);
              tmp4(undefined);
              v0(false);
              c3 = 2;
              let obj1 = tmp4(tmp44[3]);
              c4 = 3;
              c5 = 1;
              obj1 = { value: null, done: false };
              obj1.value = obj1.createCreatorMonetizationEnableRequest(tmp52);
              return obj1;
            } else {
              c5 = 3;
            }
          }
        } else if (1 !== tmp8) {
          if (2 === tmp8) {
            c3 = 1;
            closure_128_0 = tmp44;
            const tmp25 = new closure_0(tmp44[4])(closure_128_0);
            closure_129_1(tmp25);
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            closure_129_2(false);
            c5 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_129_3(true);
            c3 = 1;
          }
          c3 = 0;
          closure_129_2(false);
        }
        c3 = 0;
        closure_129_2(false);
        throw tmp44;
      } catch (tmp44) {
        if (tmp5 === c3) {
          c5 = tmp3;
          throw tmp44;
        } else if (tmp2 === tmp46) {
          c4 = tmp2;
        } else {
          c4 = tmp;
        }
      }
    }
  }), items);
  return obj;
};