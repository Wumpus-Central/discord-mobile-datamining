// === Module 14739: useRestorePurchases ===

// Module 14739 (useRestorePurchases)
import timestampDefault from "timestamp" /* 3 */;
import closure_2 from "asyncGeneratorStep" /* 5 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;

let closure_5 = new timestampDefault("useRestorePurchases");
const tmp2 = new timestampDefault("useRestorePurchases");
const result = require("set").fileFinishedImporting("modules/billing/native/subscription/useRestorePurchases.tsx");

export default function useRestorePurchases() {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  let flag = obj.forceRestore;
  if (flag === undefined) {
    flag = true;
  }
  closure_1 = undefined;
  closure_2 = undefined;
  function _restore(closure_4, arg1) {
    const self = this;
    const tmp = callback(function*() {
      if (logger === 2) {
        logger = 3;
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
          logger = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              logger = 3;
              throw arg1;
            } else if (arg0 === 2) {
              logger = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_1 = tmp4;
              let callback = tmp8;
              closure_1_2(true);
              logger.log("isRestoring true");
              c3 = 2;
              obj1 = callback(closure_1_1[4]);
              c4 = 3;
              logger = 1;
              obj1 = { value: null, done: false };
              obj1[0] = obj1.restoreAndApplyPurchases();
              return obj1;
            }
          } else if (1 === tmp8) {
            c3 = 0;
            closure_1_2(false);
            logger.log("isRestoring false");
            throw callback2;
          } else {
            if (2 === tmp8) {
              c3 = 1;
              callback = callback2;
              logger.error(callback);
              c3 = 0;
              closure_1_2(false);
              logger.log("isRestoring false");
              logger = 3;
            } else if (arg0 === 1) {
              logger = 3;
              throw arg1;
            } else if (arg0 !== 2) {
              logger.log("restored unfinished transactions");
              closure_1.current = true;
              c3 = 1;
            }
            c3 = 0;
            callback2(false);
            logger.log("isRestoring false");
            logger = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          }
        } catch (tmp43) {
          callback2 = tmp43;
          if (tmp5 === c3) {
            logger = tmp3;
            throw tmp43;
          } else if (tmp2 === tmp45) {
            c4 = tmp2;
          } else {
            c4 = tmp;
          }
        }
      }
    });
    closure_3 = tmp;
    const apply = tmp.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  closure_1 = React.useRef(false);
  let tmp = _restore(React.useState(false), 2);
  closure_2 = tmp[1];
  const items = [flag];
  const effect = React.useEffect(() => {
    let tmp = flag;
    if (!flag) {
      tmp = !ref.current;
    }
    if (tmp) {
      (function restore() {
        const self = this;
        const apply = closure_3.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      })();
    }
  }, items);
  return tmp[0];
};