// === Module 4751: getBurstAnimation ===

// Module 4751 (getBurstAnimation)
import asyncGeneratorStepDefault from "asyncGeneratorStep" /* 5 */;

const items = [
  {
    load() {
      return closure_0(4752);
    }
  },
  {
    load() {
      return closure_0(4753);
    }
  },
  {
    load() {
      return closure_0(4754);
    }
  },
  {
    load() {
      return closure_0(4755);
    }
  },
  {
    load() {
      return closure_0(4756);
    }
  },
  {
    load() {
      return closure_0(4757);
    }
  },
  {
    load() {
      return closure_0(4758);
    }
  },
  {
    load() {
      return closure_0(4759);
    }
  },
  {
    load() {
      return closure_0(4760);
    }
  },
  {
    load() {
      return closure_0(4761);
    }
  },
  {
    load() {
      return closure_0(4762);
    }
  },
  {
    load() {
      return closure_0(4763);
    }
  },
  {
    load() {
      return closure_0(4764);
    }
  },
  {
    load() {
      return closure_0(4765);
    }
  },
  {
    load() {
      return closure_0(4766);
    }
  },
  {
    load() {
      return closure_0(4767);
    }
  },
  {
    load() {
      return closure_0(4768);
    }
  },
  {
    load() {
      return closure_0(4769);
    }
  }
];
const items1 = [
  {
    load() {
      return closure_0(4770);
    }
  },
  {
    load() {
      return closure_0(4771);
    }
  },
  {
    load() {
      return closure_0(4772);
    }
  },
  {
    load() {
      return closure_0(4773);
    }
  },
  {
    load() {
      return closure_0(4774);
    }
  },
  {
    load() {
      return closure_0(4775);
    }
  },
  {
    load() {
      return closure_0(4776);
    }
  },
  {
    load() {
      return closure_0(4777);
    }
  },
  {
    load() {
      return closure_0(4778);
    }
  },
  {
    load() {
      return closure_0(4779);
    }
  },
  {
    load() {
      return closure_0(4780);
    }
  },
  {
    load() {
      return closure_0(4781);
    }
  },
  {
    load() {
      return closure_0(4782);
    }
  },
  {
    load() {
      return closure_0(4783);
    }
  },
  {
    load() {
      return closure_0(4784);
    }
  },
  {
    load() {
      return closure_0(4785);
    }
  },
  {
    load() {
      return closure_0(4786);
    }
  },
  {
    load() {
      return closure_0(4787);
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
      return { value: "HermesInternal", done: "+60" };
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
          return { value: "Path", done: true };
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

export function getBurstAnimation() {
  const self = this;
  const apply = closure_0.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}