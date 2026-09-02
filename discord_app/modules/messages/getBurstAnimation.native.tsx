// discord_app/modules/messages/getBurstAnimation.native.tsx
import asyncGeneratorStepDefault from "../../../_runtime/00005_asyncGeneratorStep.js";

let closure_0 = arg1;
let obj = {
  load() {
    return callback(7540);
  },
};
const items = [
  obj,
  {
    load() {
      return callback(7541);
    },
  },
  {
    load() {
      return callback(7542);
    },
  },
  {
    load() {
      return callback(7543);
    },
  },
  {
    load() {
      return callback(7544);
    },
  },
  {
    load() {
      return callback(7545);
    },
  },
  {
    load() {
      return callback(7546);
    },
  },
  {
    load() {
      return callback(7547);
    },
  },
  {
    load() {
      return callback(7548);
    },
  },
  {
    load() {
      return callback(7549);
    },
  },
  {
    load() {
      return callback(7550);
    },
  },
  {
    load() {
      return callback(7551);
    },
  },
  {
    load() {
      return callback(7552);
    },
  },
  {
    load() {
      return callback(7553);
    },
  },
  {
    load() {
      return callback(7554);
    },
  },
  {
    load() {
      return callback(7555);
    },
  },
  {
    load() {
      return callback(7556);
    },
  },
  {
    load() {
      return callback(7557);
    },
  },
];
obj = {
  load() {
    return callback(7558);
  },
};
const items1 = [
  obj,
  {
    load() {
      return callback(7559);
    },
  },
  {
    load() {
      return callback(7560);
    },
  },
  {
    load() {
      return callback(7561);
    },
  },
  {
    load() {
      return callback(7562);
    },
  },
  {
    load() {
      return callback(7563);
    },
  },
  {
    load() {
      return callback(7564);
    },
  },
  {
    load() {
      return callback(7565);
    },
  },
  {
    load() {
      return callback(7566);
    },
  },
  {
    load() {
      return callback(7567);
    },
  },
  {
    load() {
      return callback(7568);
    },
  },
  {
    load() {
      return callback(7569);
    },
  },
  {
    load() {
      return callback(7570);
    },
  },
  {
    load() {
      return callback(7571);
    },
  },
  {
    load() {
      return callback(7572);
    },
  },
  {
    load() {
      return callback(7573);
    },
  },
  {
    load() {
      return callback(7574);
    },
  },
  {
    load() {
      return callback(7575);
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
