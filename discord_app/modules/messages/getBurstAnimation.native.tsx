// discord_app/modules/messages/getBurstAnimation.native.tsx
import asyncGeneratorStepDefault from "../../../_runtime/00005_asyncGeneratorStep.js";

let closure_0 = arg1;
let obj = {
  load() {
    return callback(7389);
  }
};
const items = [
  obj,
  {
    load() {
      return callback(7390);
    }
  },
  {
    load() {
      return callback(7391);
    }
  },
  {
    load() {
      return callback(7392);
    }
  },
  {
    load() {
      return callback(7393);
    }
  },
  {
    load() {
      return callback(7394);
    }
  },
  {
    load() {
      return callback(7395);
    }
  },
  {
    load() {
      return callback(7396);
    }
  },
  {
    load() {
      return callback(7397);
    }
  },
  {
    load() {
      return callback(7398);
    }
  },
  {
    load() {
      return callback(7399);
    }
  },
  {
    load() {
      return callback(7400);
    }
  },
  {
    load() {
      return callback(7401);
    }
  },
  {
    load() {
      return callback(7402);
    }
  },
  {
    load() {
      return callback(7403);
    }
  },
  {
    load() {
      return callback(7404);
    }
  },
  {
    load() {
      return callback(7405);
    }
  },
  {
    load() {
      return callback(7406);
    }
  }
];
obj = {
  load() {
    return callback(7407);
  }
};
const items1 = [
  obj,
  {
    load() {
      return callback(7408);
    }
  },
  {
    load() {
      return callback(7409);
    }
  },
  {
    load() {
      return callback(7410);
    }
  },
  {
    load() {
      return callback(7411);
    }
  },
  {
    load() {
      return callback(7412);
    }
  },
  {
    load() {
      return callback(7413);
    }
  },
  {
    load() {
      return callback(7414);
    }
  },
  {
    load() {
      return callback(7415);
    }
  },
  {
    load() {
      return callback(7416);
    }
  },
  {
    load() {
      return callback(7417);
    }
  },
  {
    load() {
      return callback(7418);
    }
  },
  {
    load() {
      return callback(7419);
    }
  },
  {
    load() {
      return callback(7420);
    }
  },
  {
    load() {
      return callback(7421);
    }
  },
  {
    load() {
      return callback(7422);
    }
  },
  {
    load() {
      return callback(7423);
    }
  },
  {
    load() {
      return callback(7424);
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
            return { value: "ct", done: true };
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