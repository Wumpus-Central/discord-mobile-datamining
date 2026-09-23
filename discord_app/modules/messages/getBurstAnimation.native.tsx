// === Module 8112: getBurstAnimation ===

// Module 8112 (getBurstAnimation)
import asyncGeneratorStepDefault from "asyncGeneratorStep" /* 5 */;

const items = [
  {
    load() {
      return closure_0(8113);
    }
  },
  {
    load() {
      return closure_0(8114);
    }
  },
  {
    load() {
      return closure_0(8115);
    }
  },
  {
    load() {
      return closure_0(8116);
    }
  },
  {
    load() {
      return closure_0(8117);
    }
  },
  {
    load() {
      return closure_0(8118);
    }
  },
  {
    load() {
      return closure_0(8119);
    }
  },
  {
    load() {
      return closure_0(8120);
    }
  },
  {
    load() {
      return closure_0(8121);
    }
  },
  {
    load() {
      return closure_0(8122);
    }
  },
  {
    load() {
      return closure_0(8123);
    }
  },
  {
    load() {
      return closure_0(8124);
    }
  },
  {
    load() {
      return closure_0(8125);
    }
  },
  {
    load() {
      return closure_0(8126);
    }
  },
  {
    load() {
      return closure_0(8127);
    }
  },
  {
    load() {
      return closure_0(8128);
    }
  },
  {
    load() {
      return closure_0(8129);
    }
  },
  {
    load() {
      return closure_0(8130);
    }
  }
];
const items1 = [
  {
    load() {
      return closure_0(8131);
    }
  },
  {
    load() {
      return closure_0(8132);
    }
  },
  {
    load() {
      return closure_0(8133);
    }
  },
  {
    load() {
      return closure_0(8134);
    }
  },
  {
    load() {
      return closure_0(8135);
    }
  },
  {
    load() {
      return closure_0(8136);
    }
  },
  {
    load() {
      return closure_0(8137);
    }
  },
  {
    load() {
      return closure_0(8138);
    }
  },
  {
    load() {
      return closure_0(8139);
    }
  },
  {
    load() {
      return closure_0(8140);
    }
  },
  {
    load() {
      return closure_0(8141);
    }
  },
  {
    load() {
      return closure_0(8142);
    }
  },
  {
    load() {
      return closure_0(8143);
    }
  },
  {
    load() {
      return closure_0(8144);
    }
  },
  {
    load() {
      return closure_0(8145);
    }
  },
  {
    load() {
      return closure_0(8146);
    }
  },
  {
    load() {
      return closure_0(8147);
    }
  },
  {
    load() {
      return closure_0(8148);
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