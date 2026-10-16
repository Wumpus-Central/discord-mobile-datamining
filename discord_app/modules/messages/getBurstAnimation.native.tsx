// === Module 8148: getBurstAnimation ===

// Module 8148 (getBurstAnimation)
import asyncGeneratorStepDefault from "asyncGeneratorStep" /* 5 */;

const items = [
  {
    load() {
      return closure_0(8149);
    }
  },
  {
    load() {
      return closure_0(8150);
    }
  },
  {
    load() {
      return closure_0(8151);
    }
  },
  {
    load() {
      return closure_0(8152);
    }
  },
  {
    load() {
      return closure_0(8153);
    }
  },
  {
    load() {
      return closure_0(8154);
    }
  },
  {
    load() {
      return closure_0(8155);
    }
  },
  {
    load() {
      return closure_0(8156);
    }
  },
  {
    load() {
      return closure_0(8157);
    }
  },
  {
    load() {
      return closure_0(8158);
    }
  },
  {
    load() {
      return closure_0(8159);
    }
  },
  {
    load() {
      return closure_0(8160);
    }
  },
  {
    load() {
      return closure_0(8161);
    }
  },
  {
    load() {
      return closure_0(8162);
    }
  },
  {
    load() {
      return closure_0(8163);
    }
  },
  {
    load() {
      return closure_0(8164);
    }
  },
  {
    load() {
      return closure_0(8165);
    }
  },
  {
    load() {
      return closure_0(8166);
    }
  }
];
const items1 = [
  {
    load() {
      return closure_0(8167);
    }
  },
  {
    load() {
      return closure_0(8168);
    }
  },
  {
    load() {
      return closure_0(8169);
    }
  },
  {
    load() {
      return closure_0(8170);
    }
  },
  {
    load() {
      return closure_0(8171);
    }
  },
  {
    load() {
      return closure_0(8172);
    }
  },
  {
    load() {
      return closure_0(8173);
    }
  },
  {
    load() {
      return closure_0(8174);
    }
  },
  {
    load() {
      return closure_0(8175);
    }
  },
  {
    load() {
      return closure_0(8176);
    }
  },
  {
    load() {
      return closure_0(8177);
    }
  },
  {
    load() {
      return closure_0(8178);
    }
  },
  {
    load() {
      return closure_0(8179);
    }
  },
  {
    load() {
      return closure_0(8180);
    }
  },
  {
    load() {
      return closure_0(8181);
    }
  },
  {
    load() {
      return closure_0(8182);
    }
  },
  {
    load() {
      return closure_0(8183);
    }
  },
  {
    load() {
      return closure_0(8184);
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
      return { value: "IconComponent", done: null };
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
          return { value: "test", done: true };
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

export const getBurstAnimation = function getBurstAnimation() {
  const self = this;
  const apply = closure_0.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};