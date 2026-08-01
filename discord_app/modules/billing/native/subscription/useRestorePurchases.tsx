// === Module 14246: useRestorePurchases ===

// Module 14246 (useRestorePurchases)
import set from "set";
import _slicedToArray from "_slicedToArray";
import noop from "noop";

let c5 = new require("timestamp")("useRestorePurchases");
const tmp2 = new require("timestamp")("useRestorePurchases");
const result = require("noop").fileFinishedImporting("modules/billing/native/subscription/useRestorePurchases.tsx");

export default function useRestorePurchases() {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  let flag = obj.forceRestore;
  if (flag === undefined) {
    flag = true;
  }
  let closure_1;
  let set;
  function _restore(noop, arg1) {
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
              let closure_1 = tmp4;
              let closure_0 = tmp8;
              outer1_2(true);
              logger.log("isRestoring true");
              let c3 = 2;
              let obj1 = outer1_0(outer1_1[4]);
              c4 = 3;
              logger = 1;
              obj1 = { value: null, done: false };
              obj1[0] = obj1.restoreAndApplyPurchases();
              return obj1;
            }
          } else if (1 === tmp8) {
            c3 = 0;
            outer1_2(false);
            logger.log("isRestoring false");
            throw callback;
          } else {
            if (2 === tmp8) {
              c3 = 1;
              outer1_0 = callback;
              logger.error(outer1_0);
              c3 = 0;
              outer1_2(false);
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
            callback(false);
            logger.log("isRestoring false");
            logger = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          }
        } catch (tmp43) {
          callback = tmp43;
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
    const _restore = tmp;
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
  set = tmp[1];
  const items = [flag];
  const effect = React.useEffect(() => {
    let tmp = flag;
    if (!flag) {
      tmp = !ref.current;
    }
    if (tmp) {
      (function restore() {
        const self = this;
        const apply = _slicedToArray.apply;
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