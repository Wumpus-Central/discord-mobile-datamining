// === Module 4904: getBurstAnimation ===

// Module 4904 (getBurstAnimation)
import asyncGeneratorStepDefault from "asyncGeneratorStep" /* 5 */;

const items = [
  {
    load() {
      return closure_0(4905);
    }
  },
  {
    load() {
      return closure_0(4906);
    }
  },
  {
    load() {
      return closure_0(4907);
    }
  },
  {
    load() {
      return closure_0(4908);
    }
  },
  {
    load() {
      return closure_0(4909);
    }
  },
  {
    load() {
      return closure_0(4910);
    }
  },
  {
    load() {
      return closure_0(4911);
    }
  },
  {
    load() {
      return closure_0(4912);
    }
  },
  {
    load() {
      return closure_0(4913);
    }
  },
  {
    load() {
      return closure_0(4914);
    }
  },
  {
    load() {
      return closure_0(4915);
    }
  },
  {
    load() {
      return closure_0(4916);
    }
  },
  {
    load() {
      return closure_0(4917);
    }
  },
  {
    load() {
      return closure_0(4918);
    }
  },
  {
    load() {
      return closure_0(4919);
    }
  },
  {
    load() {
      return closure_0(4920);
    }
  },
  {
    load() {
      return closure_0(4921);
    }
  },
  {
    load() {
      return closure_0(4922);
    }
  }
];
const items1 = [
  {
    load() {
      return closure_0(4923);
    }
  },
  {
    load() {
      return closure_0(4924);
    }
  },
  {
    load() {
      return closure_0(4925);
    }
  },
  {
    load() {
      return closure_0(4926);
    }
  },
  {
    load() {
      return closure_0(4927);
    }
  },
  {
    load() {
      return closure_0(4928);
    }
  },
  {
    load() {
      return closure_0(4929);
    }
  },
  {
    load() {
      return closure_0(4930);
    }
  },
  {
    load() {
      return closure_0(4931);
    }
  },
  {
    load() {
      return closure_0(4932);
    }
  },
  {
    load() {
      return closure_0(4933);
    }
  },
  {
    load() {
      return closure_0(4934);
    }
  },
  {
    load() {
      return closure_0(4935);
    }
  },
  {
    load() {
      return closure_0(4936);
    }
  },
  {
    load() {
      return closure_0(4937);
    }
  },
  {
    load() {
      return closure_0(4938);
    }
  },
  {
    load() {
      return closure_0(4939);
    }
  },
  {
    load() {
      return closure_0(4940);
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