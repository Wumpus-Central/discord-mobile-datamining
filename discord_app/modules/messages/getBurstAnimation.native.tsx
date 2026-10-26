// === Module 4930: getBurstAnimation ===

// Module 4930 (getBurstAnimation)
import asyncGeneratorStepDefault from "asyncGeneratorStep" /* 5 */;

const items = [
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
  },
  {
    load() {
      return closure_0(4941);
    }
  },
  {
    load() {
      return closure_0(4942);
    }
  },
  {
    load() {
      return closure_0(4943);
    }
  },
  {
    load() {
      return closure_0(4944);
    }
  },
  {
    load() {
      return closure_0(4945);
    }
  },
  {
    load() {
      return closure_0(4946);
    }
  },
  {
    load() {
      return closure_0(4947);
    }
  },
  {
    load() {
      return closure_0(4948);
    }
  }
];
const items1 = [
  {
    load() {
      return closure_0(4949);
    }
  },
  {
    load() {
      return closure_0(4950);
    }
  },
  {
    load() {
      return closure_0(4951);
    }
  },
  {
    load() {
      return closure_0(4952);
    }
  },
  {
    load() {
      return closure_0(4953);
    }
  },
  {
    load() {
      return closure_0(4954);
    }
  },
  {
    load() {
      return closure_0(4955);
    }
  },
  {
    load() {
      return closure_0(4956);
    }
  },
  {
    load() {
      return closure_0(4957);
    }
  },
  {
    load() {
      return closure_0(4958);
    }
  },
  {
    load() {
      return closure_0(4959);
    }
  },
  {
    load() {
      return closure_0(4960);
    }
  },
  {
    load() {
      return closure_0(4961);
    }
  },
  {
    load() {
      return closure_0(4962);
    }
  },
  {
    load() {
      return closure_0(4963);
    }
  },
  {
    load() {
      return closure_0(4964);
    }
  },
  {
    load() {
      return closure_0(4965);
    }
  },
  {
    load() {
      return closure_0(4966);
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
      return { value: "IconComponent", done: "+352" };
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
          return { value: "Reflect", done: null };
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