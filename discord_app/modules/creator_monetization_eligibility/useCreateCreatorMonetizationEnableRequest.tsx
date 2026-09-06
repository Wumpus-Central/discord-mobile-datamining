// === Module 17711: useCreateCreatorMonetizationEnableRequest ===

// Module 17711 (useCreateCreatorMonetizationEnableRequest)
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "_slicedToArray" /* 32 */;
import closure_5 from "noop" /* 19 */;

const result = require("set").fileFinishedImporting("modules/creator_monetization_eligibility/useCreateCreatorMonetizationEnableRequest.tsx");

export default function useCreateCreatorMonetizationEnableRequest(arg0) {
  closure_0 = arg0;
  const tmp = callback2(React.useState(), 2);
  closure_1 = tmp[1];
  [tmp3, dependencyMap] = callback2(React.useState(false), 2);
  const tmp4 = callback2(React.useState(false), 2);
  let callback = tmp4[1];
  const tmp2 = callback2(React.useState(false), 2);
  const items = [arg0];
  return {
    error: tmp[0],
    loading: tmp3,
    createEnableRequest: React.useCallback(callback(function*() {
      if (c5 === 2) {
        c5 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp7 === 3) {
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
              const callback = tmp4;
              closure_0 = tmp8;
              if (null != closure_1_0) {
                closure_1_2(true);
                closure_1_1(undefined);
                v0(false);
                v0 = 2;
                obj1 = closure_1_1(closure_1_2[3]);
                c4 = 3;
                c5 = 1;
                obj1 = { value: null, done: false };
                obj1[0] = obj1.createCreatorMonetizationEnableRequest(tmp53);
                return obj1;
              } else {
                c5 = 3;
              }
            }
          } else if (1 !== tmp8) {
            if (2 === tmp8) {
              v0 = 1;
              closure_0 = callback2;
              const tmp25 = new closure_1_0(closure_1_2[4])(closure_0);
              callback(tmp25);
            } else if (arg0 === 1) {
              c5 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              v0 = 0;
              callback2(false);
              c5 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              v0(true);
              v0 = 1;
            }
            v0 = 0;
            callback2(false);
          }
          v0 = 0;
          callback2(false);
          throw callback2;
        } catch (tmp44) {
          callback2 = tmp44;
          if (tmp5 === v0) {
            c5 = tmp3;
            throw tmp44;
          } else if (tmp2 === tmp46) {
            c4 = tmp2;
          } else {
            c4 = tmp;
          }
        }
      }
    }), items),
    submittedRequest: tmp4[0]
  };
};