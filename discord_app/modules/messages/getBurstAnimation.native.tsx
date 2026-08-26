// discord_app/modules/messages/getBurstAnimation.native.tsx
import asyncGeneratorStepDefault from "../../../_runtime/00005_asyncGeneratorStep.js";

let closure_0 = arg1;
let obj = {
  load() {
    return callback(7455);
  }
};
const items = [
  obj,
  {
    load() {
      return callback(7456);
    }
  },
  {
    load() {
      return callback(7457);
    }
  },
  {
    load() {
      return callback(7458);
    }
  },
  {
    load() {
      return callback(7459);
    }
  },
  {
    load() {
      return callback(7460);
    }
  },
  {
    load() {
      return callback(7461);
    }
  },
  {
    load() {
      return callback(7462);
    }
  },
  {
    load() {
      return callback(7463);
    }
  },
  {
    load() {
      return callback(7464);
    }
  },
  {
    load() {
      return callback(7465);
    }
  },
  {
    load() {
      return callback(7466);
    }
  },
  {
    load() {
      return callback(7467);
    }
  },
  {
    load() {
      return callback(7468);
    }
  },
  {
    load() {
      return callback(7469);
    }
  },
  {
    load() {
      return callback(7470);
    }
  },
  {
    load() {
      return callback(7471);
    }
  },
  {
    load() {
      return callback(7472);
    }
  }
];
obj = {
  load() {
    return callback(7473);
  }
};
const items1 = [
  obj,
  {
    load() {
      return callback(7474);
    }
  },
  {
    load() {
      return callback(7475);
    }
  },
  {
    load() {
      return callback(7476);
    }
  },
  {
    load() {
      return callback(7477);
    }
  },
  {
    load() {
      return callback(7478);
    }
  },
  {
    load() {
      return callback(7479);
    }
  },
  {
    load() {
      return callback(7480);
    }
  },
  {
    load() {
      return callback(7481);
    }
  },
  {
    load() {
      return callback(7482);
    }
  },
  {
    load() {
      return callback(7483);
    }
  },
  {
    load() {
      return callback(7484);
    }
  },
  {
    load() {
      return callback(7485);
    }
  },
  {
    load() {
      return callback(7486);
    }
  },
  {
    load() {
      return callback(7487);
    }
  },
  {
    load() {
      return callback(7488);
    }
  },
  {
    load() {
      return callback(7489);
    }
  },
  {
    load() {
      return callback(7490);
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