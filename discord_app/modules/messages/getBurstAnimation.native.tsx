// === Module 7199: getBurstAnimation ===

// Module 7199 (getBurstAnimation)
import asyncGeneratorStepDefault from "asyncGeneratorStep" /* 5 */;

const items = [
  {
    load() {
      return closure_0(7200);
    }
  },
  {
    load() {
      return closure_0(7201);
    }
  },
  {
    load() {
      return closure_0(7202);
    }
  },
  {
    load() {
      return closure_0(7203);
    }
  },
  {
    load() {
      return closure_0(7204);
    }
  },
  {
    load() {
      return closure_0(7205);
    }
  },
  {
    load() {
      return closure_0(7206);
    }
  },
  {
    load() {
      return closure_0(7207);
    }
  },
  {
    load() {
      return closure_0(7208);
    }
  },
  {
    load() {
      return closure_0(7209);
    }
  },
  {
    load() {
      return closure_0(7210);
    }
  },
  {
    load() {
      return closure_0(7211);
    }
  },
  {
    load() {
      return closure_0(7212);
    }
  },
  {
    load() {
      return closure_0(7213);
    }
  },
  {
    load() {
      return closure_0(7214);
    }
  },
  {
    load() {
      return closure_0(7215);
    }
  },
  {
    load() {
      return closure_0(7216);
    }
  },
  {
    load() {
      return closure_0(7217);
    }
  }
];
const items1 = [
  {
    load() {
      return closure_0(7218);
    }
  },
  {
    load() {
      return closure_0(7219);
    }
  },
  {
    load() {
      return closure_0(7220);
    }
  },
  {
    load() {
      return closure_0(7221);
    }
  },
  {
    load() {
      return closure_0(7222);
    }
  },
  {
    load() {
      return closure_0(7223);
    }
  },
  {
    load() {
      return closure_0(7224);
    }
  },
  {
    load() {
      return closure_0(7225);
    }
  },
  {
    load() {
      return closure_0(7226);
    }
  },
  {
    load() {
      return closure_0(7227);
    }
  },
  {
    load() {
      return closure_0(7228);
    }
  },
  {
    load() {
      return closure_0(7229);
    }
  },
  {
    load() {
      return closure_0(7230);
    }
  },
  {
    load() {
      return closure_0(7231);
    }
  },
  {
    load() {
      return closure_0(7232);
    }
  },
  {
    load() {
      return closure_0(7233);
    }
  },
  {
    load() {
      return closure_0(7234);
    }
  },
  {
    load() {
      return closure_0(7235);
    }
  }
];
let closure_0 = asyncGeneratorStepDefault(function*(arg0, arg1, arg2) {
  if (c7 === 2) {
    c7 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c7 = 2;
      if (0 === c6) {
        if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c7 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_5 = tmp5;
          closure_4 = tmp2;
          closure_132_3 = undefined;
          closure_132_0 = closure_0;
          closure_132_1 = dependencyMap;
          closure_132_2 = closure_2;
          let flag = length;
          if (length === undefined) {
            flag = false;
          }
          closure_132_3 = flag;
          let burstAnimationHash;
          c6 = 1;
          c7 = 1;
          return { value: "flex", done: true };
        }
      } else if (arg0 === 1) {
        c7 = 3;
        throw value;
      } else if (arg0 === 2) {
        c7 = 3;
        const obj4 = { value, done: true };
        return obj4;
      } else {
        const _HermesInternal = HermesInternal;
        burstAnimationHash = closure_0(dependencyMap[37]).getBurstAnimationHash("" + closure_132_0 + closure_132_1 + closure_132_2);
        if (closure_132_3) {
          let tmp6 = closure_2;
        } else {
          tmp6 = length;
        }
        tmp6[burstAnimationHash % length.length].load();
        c7 = 3;
        const obj5 = closure_0(dependencyMap[37]);
      }
    } catch (tmp16) {
      c7 = tmp;
      throw tmp16;
    }
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/messages/getBurstAnimation.native.tsx");

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