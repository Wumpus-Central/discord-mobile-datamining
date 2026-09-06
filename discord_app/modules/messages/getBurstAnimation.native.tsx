// discord_app/modules/messages/getBurstAnimation.native.tsx
import asyncGeneratorStepDefault from "../../../_runtime/00005_asyncGeneratorStep.js";

let closure_0 = arg1;
let obj = {
  load() {
    return callback(7786);
  },
};
const items = [
  obj,
  {
    load() {
      return callback(7787);
    },
  },
  {
    load() {
      return callback(7788);
    },
  },
  {
    load() {
      return callback(7789);
    },
  },
  {
    load() {
      return callback(7790);
    },
  },
  {
    load() {
      return callback(7791);
    },
  },
  {
    load() {
      return callback(7792);
    },
  },
  {
    load() {
      return callback(7793);
    },
  },
  {
    load() {
      return callback(7794);
    },
  },
  {
    load() {
      return callback(7795);
    },
  },
  {
    load() {
      return callback(7796);
    },
  },
  {
    load() {
      return callback(7797);
    },
  },
  {
    load() {
      return callback(7798);
    },
  },
  {
    load() {
      return callback(7799);
    },
  },
  {
    load() {
      return callback(7800);
    },
  },
  {
    load() {
      return callback(7801);
    },
  },
  {
    load() {
      return callback(7802);
    },
  },
  {
    load() {
      return callback(7803);
    },
  },
];
obj = {
  load() {
    return callback(7804);
  },
};
const items1 = [
  obj,
  {
    load() {
      return callback(7805);
    },
  },
  {
    load() {
      return callback(7806);
    },
  },
  {
    load() {
      return callback(7807);
    },
  },
  {
    load() {
      return callback(7808);
    },
  },
  {
    load() {
      return callback(7809);
    },
  },
  {
    load() {
      return callback(7810);
    },
  },
  {
    load() {
      return callback(7811);
    },
  },
  {
    load() {
      return callback(7812);
    },
  },
  {
    load() {
      return callback(7813);
    },
  },
  {
    load() {
      return callback(7814);
    },
  },
  {
    load() {
      return callback(7815);
    },
  },
  {
    load() {
      return callback(7816);
    },
  },
  {
    load() {
      return callback(7817);
    },
  },
  {
    load() {
      return callback(7818);
    },
  },
  {
    load() {
      return callback(7819);
    },
  },
  {
    load() {
      return callback(7820);
    },
  },
  {
    load() {
      return callback(7821);
    },
  },
];
closure_0 = asyncGeneratorStepDefault((arg0, arg1, arg2) => {
  closure_0 = arg0;
  closure_1 = arg1;
  closure_2 = arg2;
  closure_3 = arg3;
  c6 = 0;
  c7 = 0;
  const iter = (function* (arg0, arg1, arg2) {
    if (c7 === 2) {
      c7 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp4 === 3) {
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
        c7 = 2;
        if (0 === c6) {
          if (arg0 === 1) {
            c7 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c7 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            closure_5 = tmp5;
            let burstAnimationHash = tmp2;
            let flag;
            if (flag === undefined) {
              flag = false;
            }
            burstAnimationHash = undefined;
            c6 = 1;
            c7 = 1;
            return { value: "PX_16", done: true };
          }
        } else if (arg0 === 1) {
          c7 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c7 = 3;
          obj1 = { value: null, done: true };
          obj1[0] = arg1;
          return obj1;
        } else {
          const _HermesInternal = HermesInternal;
          burstAnimationHash = callback(table[37]).getBurstAnimationHash("" + callback + table + closure_2);
          let tmp10 = closure_5;
          if (flag) {
            let tmp6 = closure_2;
          } else {
            tmp6 = length;
          }
          tmp10 = burstAnimationHash;
          obj = tmp6[burstAnimationHash % length.length];
          obj.load();
          c7 = 3;
          const obj5 = callback(table[37]);
        }
      } catch (tmp16) {
        c7 = tmp;
        throw tmp16;
      }
    }
  })();
  iter.next();
  return iter;
});
const result = require("set").fileFinishedImporting("modules/messages/getBurstAnimation.native.tsx");

export const getBurstAnimation = function () {
  const self = this;
  const apply = closure_0.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
