// discord_app/modules/billing/native/subscription/useRestorePurchases.tsx
import LoggerDefault from "../../../debug/Logger.tsx";
import _asyncToGenerator from "../../../../../_runtime/metro/00005__asyncToGenerator.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../../_runtime/00019_react.js";
import size from "../../../../../_runtime/metro/00002__.js";

let c4;

let closure_5 = new LoggerDefault("useRestorePurchases");
new LoggerDefault("useRestorePurchases");
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
  obj = function _restore() {
    obj = _asyncToGenerator(async () => {
      let logger;
      let obj2;
      if (logger === 2) {
        logger = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        let c3;
        try {
          let closure_0;
          logger = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              logger = 3;
              throw value;
            } else if (arg0 === 2) {
              logger = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              let closure_1 = tmp;
              closure_0 = tmp4;
              closure_2_2(true);
              logger.log("isRestoring true");
              c3 = 2;
              c4 = 3;
              logger = 1;
              const obj5 = { value: obj2.restoreAndApplyPurchases(), done: false };
              obj2 = closure_0(closure_1[4]);
              return obj5;
            }
          } else if (1 === c4) {
            c3 = 0;
            closure_129_2(false);
            logger.log("isRestoring false");
            throw closure_2;
          } else {
            if (2 === c4) {
              c3 = 1;
              closure_0 = closure_2;
              logger.error(closure_0);
            } else if (arg0 === 1) {
              logger = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              closure_129_2(false);
              logger.log("isRestoring false");
              logger = 3;
              obj = { value, done: true };
              return obj;
            } else {
              logger.log("restored unfinished transactions");
              closure_129_1.current = true;
              c3 = 1;
            }
            c3 = 0;
            closure_129_2(false);
            logger.log("isRestoring false");
            logger = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp39) {
          closure_2 = tmp39;
          if (0 === c3) {
            logger = 3;
            throw tmp39;
          } else if (1 === tmp41) {
            c4 = 1;
          } else {
            c4 = 2;
          }
        }
      }
    });
    return obj(...arguments);
  };
  const ref = react.useRef(false);
  let tmp = obj(react.useState(false), 2);
  let closure_2 = tmp[1];
  const items = [flag];
  const first = tmp[0];
  const effect = react.useEffect(() => {
    function restore() {
      return obj(...arguments);
    }
    const tmp = flag || !ref.current;
    if (tmp) {
      restore();
    }
  }, items);
  return first;
}
