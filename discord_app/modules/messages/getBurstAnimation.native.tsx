// === Module 7497: items ===

// Module 7497 (items)
import asyncGeneratorStepDefault from "asyncGeneratorStep" /* 5 */;

let closure_0 = arg1;
let obj = {
  load() {
    return callback(7498);
  }
};
const items = [
  obj,
  {
    load() {
      return callback(7499);
    }
  },
  {
    load() {
      return callback(7500);
    }
  },
  {
    load() {
      return callback(7501);
    }
  },
  {
    load() {
      return callback(7502);
    }
  },
  {
    load() {
      return callback(7503);
    }
  },
  {
    load() {
      return callback(7504);
    }
  },
  {
    load() {
      return callback(7505);
    }
  },
  {
    load() {
      return callback(7506);
    }
  },
  {
    load() {
      return callback(7507);
    }
  },
  {
    load() {
      return callback(7508);
    }
  },
  {
    load() {
      return callback(7509);
    }
  },
  {
    load() {
      return callback(7510);
    }
  },
  {
    load() {
      return callback(7511);
    }
  },
  {
    load() {
      return callback(7512);
    }
  },
  {
    load() {
      return callback(7513);
    }
  },
  {
    load() {
      return callback(7514);
    }
  },
  {
    load() {
      return callback(7515);
    }
  }
];
obj = {
  load() {
    return callback(7516);
  }
};
const items1 = [
  obj,
  {
    load() {
      return callback(7517);
    }
  },
  {
    load() {
      return callback(7518);
    }
  },
  {
    load() {
      return callback(7519);
    }
  },
  {
    load() {
      return callback(7520);
    }
  },
  {
    load() {
      return callback(7521);
    }
  },
  {
    load() {
      return callback(7522);
    }
  },
  {
    load() {
      return callback(7523);
    }
  },
  {
    load() {
      return callback(7524);
    }
  },
  {
    load() {
      return callback(7525);
    }
  },
  {
    load() {
      return callback(7526);
    }
  },
  {
    load() {
      return callback(7527);
    }
  },
  {
    load() {
      return callback(7528);
    }
  },
  {
    load() {
      return callback(7529);
    }
  },
  {
    load() {
      return callback(7530);
    }
  },
  {
    load() {
      return callback(7531);
    }
  },
  {
    load() {
      return callback(7532);
    }
  },
  {
    load() {
      return callback(7533);
    }
  }
];
closure_0 = asyncGeneratorStepDefault((arg0, arg1, arg2) => {
  closure_0 = arg0;
  closure_1 = arg1;
  closure_2 = arg2;
  closure_3 = arg3;
  c6 = 0;
  c7 = 0;
  const iter = (function*(arg0, arg1, arg2) {
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
        return { value: "HermesInternal", done: "HermesInternal" };
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
            return { value: "Object", done: true };
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

export const getBurstAnimation = function() {
  const self = this;
  const apply = closure_0.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};