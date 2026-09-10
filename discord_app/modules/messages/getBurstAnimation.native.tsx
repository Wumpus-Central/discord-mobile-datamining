// === Module 7836: getBurstAnimation ===

// Module 7836 (getBurstAnimation)
import asyncGeneratorStepDefault from "asyncGeneratorStep" /* 5 */;

let obj = {
  load() {
    return closure_0(7837);
  }
};
const items = [
  obj,
  {
    load() {
      return closure_0(7838);
    }
  },
  {
    load() {
      return closure_0(7839);
    }
  },
  {
    load() {
      return closure_0(7840);
    }
  },
  {
    load() {
      return closure_0(7841);
    }
  },
  {
    load() {
      return closure_0(7842);
    }
  },
  {
    load() {
      return closure_0(7843);
    }
  },
  {
    load() {
      return closure_0(7844);
    }
  },
  {
    load() {
      return closure_0(7845);
    }
  },
  {
    load() {
      return closure_0(7846);
    }
  },
  {
    load() {
      return closure_0(7847);
    }
  },
  {
    load() {
      return closure_0(7848);
    }
  },
  {
    load() {
      return closure_0(7849);
    }
  },
  {
    load() {
      return closure_0(7850);
    }
  },
  {
    load() {
      return closure_0(7851);
    }
  },
  {
    load() {
      return closure_0(7852);
    }
  },
  {
    load() {
      return closure_0(7853);
    }
  },
  {
    load() {
      return closure_0(7854);
    }
  }
];
obj = {
  load() {
    return closure_0(7855);
  }
};
const items1 = [
  obj,
  {
    load() {
      return closure_0(7856);
    }
  },
  {
    load() {
      return closure_0(7857);
    }
  },
  {
    load() {
      return closure_0(7858);
    }
  },
  {
    load() {
      return closure_0(7859);
    }
  },
  {
    load() {
      return closure_0(7860);
    }
  },
  {
    load() {
      return closure_0(7861);
    }
  },
  {
    load() {
      return closure_0(7862);
    }
  },
  {
    load() {
      return closure_0(7863);
    }
  },
  {
    load() {
      return closure_0(7864);
    }
  },
  {
    load() {
      return closure_0(7865);
    }
  },
  {
    load() {
      return closure_0(7866);
    }
  },
  {
    load() {
      return closure_0(7867);
    }
  },
  {
    load() {
      return closure_0(7868);
    }
  },
  {
    load() {
      return closure_0(7869);
    }
  },
  {
    load() {
      return closure_0(7870);
    }
  },
  {
    load() {
      return closure_0(7871);
    }
  },
  {
    load() {
      return closure_0(7872);
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
      let obj = { value, done: true };
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
          throw value;
        } else if (arg0 === 2) {
          c7 = 3;
          obj = { value, done: true };
          return obj;
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
          return { value: "PX_16", done: true };
        }
      } else if (arg0 === 1) {
        c7 = 3;
        throw value;
      } else if (arg0 === 2) {
        c7 = 3;
        const obj1 = { value, done: true };
        return obj1;
      } else {
        const _HermesInternal = HermesInternal;
        burstAnimationHash = closure_0(dependencyMap[37]).getBurstAnimationHash("" + closure_132_0 + closure_132_1 + closure_132_2);
        if (closure_132_3) {
          let tmp6 = closure_2;
        } else {
          tmp6 = length;
        }
        obj = tmp6[burstAnimationHash % length.length];
        obj.load();
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