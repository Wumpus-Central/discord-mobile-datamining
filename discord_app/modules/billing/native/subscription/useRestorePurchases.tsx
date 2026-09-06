// === Module 15210: useRestorePurchases ===

// Module 15210 (useRestorePurchases)
import LoggerDefault from "Logger" /* 3 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

let closure_5 = new LoggerDefault("useRestorePurchases");
const size = fn(2);
const result = size.fileFinishedImporting("modules/billing/native/subscription/useRestorePurchases.tsx");

export default function useRestorePurchases() {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  let flag = obj.forceRestore;
  if (flag === undefined) {
    flag = true;
  }
  _slicedToArray = async function _restore(noop, value) {
    if (logger === 2) {
      logger = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp7 === 3) {
      if (noop === 1) {
        throw value;
      } else if (noop === 2) {
        let obj = { value, done: true };
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        logger = 2;
        if (0 === c4) {
          if (noop === 1) {
            logger = 3;
            throw value;
          } else if (noop === 2) {
            logger = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_0 = tmp8;
            asyncGeneratorStep(true);
            logger.log("isRestoring true");
            c3 = 2;
            let obj1 = closure_0(tmp4[4]);
            c4 = 3;
            logger = 1;
            obj1 = { value: null, done: false };
            obj1.value = obj1.restoreAndApplyPurchases();
            return obj1;
          }
        } else if (1 === tmp8) {
          c3 = 0;
          closure_129_2(false);
          logger.log("isRestoring false");
          throw closure_2;
        } else {
          if (2 === tmp8) {
            c3 = 1;
            closure_128_0 = closure_2;
            logger.error(closure_128_0);
            c3 = 0;
            closure_129_2(false);
            logger.log("isRestoring false");
            logger = 3;
          } else if (noop === 1) {
            logger = 3;
            throw value;
          } else if (noop !== 2) {
            logger.log("restored unfinished transactions");
            closure_129_1.current = true;
            c3 = 1;
          }
          c3 = 0;
          closure_129_2(false);
          logger.log("isRestoring false");
          logger = 3;
          obj = { value, done: true };
          return obj;
        }
      } catch (tmp43) {
        closure_2 = tmp43;
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
  };
  noop.useRef(false);
  let tmp = _slicedToArray(noop.useState(false), 2);
  closure_2 = tmp[1];
  const items = [flag];
  const effect = noop.useEffect(() => {
    let tmp = flag;
    if (!flag) {
      tmp = !ref.current;
    }
    if (tmp) {
      (function restore() {
        const self = this;
        const apply = closure_1_3.apply;
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