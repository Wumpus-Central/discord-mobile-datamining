// discord_app/modules/messages/getBurstAnimation.native.tsx
import asyncGeneratorStepDefault from "../../../_runtime/00005_asyncGeneratorStep.js";

let obj = {
  load() {
    return closure_0(7888);
  },
};
const items = [
  obj,
  {
    load() {
      return closure_0(7889);
    },
  },
  {
    load() {
      return closure_0(7890);
    },
  },
  {
    load() {
      return closure_0(7891);
    },
  },
  {
    load() {
      return closure_0(7892);
    },
  },
  {
    load() {
      return closure_0(7893);
    },
  },
  {
    load() {
      return closure_0(7894);
    },
  },
  {
    load() {
      return closure_0(7895);
    },
  },
  {
    load() {
      return closure_0(7896);
    },
  },
  {
    load() {
      return closure_0(7897);
    },
  },
  {
    load() {
      return closure_0(7898);
    },
  },
  {
    load() {
      return closure_0(7899);
    },
  },
  {
    load() {
      return closure_0(7900);
    },
  },
  {
    load() {
      return closure_0(7901);
    },
  },
  {
    load() {
      return closure_0(7902);
    },
  },
  {
    load() {
      return closure_0(7903);
    },
  },
  {
    load() {
      return closure_0(7904);
    },
  },
  {
    load() {
      return closure_0(7905);
    },
  },
];
obj = {
  load() {
    return closure_0(7906);
  },
};
const items1 = [
  obj,
  {
    load() {
      return closure_0(7907);
    },
  },
  {
    load() {
      return closure_0(7908);
    },
  },
  {
    load() {
      return closure_0(7909);
    },
  },
  {
    load() {
      return closure_0(7910);
    },
  },
  {
    load() {
      return closure_0(7911);
    },
  },
  {
    load() {
      return closure_0(7912);
    },
  },
  {
    load() {
      return closure_0(7913);
    },
  },
  {
    load() {
      return closure_0(7914);
    },
  },
  {
    load() {
      return closure_0(7915);
    },
  },
  {
    load() {
      return closure_0(7916);
    },
  },
  {
    load() {
      return closure_0(7917);
    },
  },
  {
    load() {
      return closure_0(7918);
    },
  },
  {
    load() {
      return closure_0(7919);
    },
  },
  {
    load() {
      return closure_0(7920);
    },
  },
  {
    load() {
      return closure_0(7921);
    },
  },
  {
    load() {
      return closure_0(7922);
    },
  },
  {
    load() {
      return closure_0(7923);
    },
  },
];
let closure_0 = asyncGeneratorStepDefault(function* (arg0, arg1, arg2) {
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
        burstAnimationHash = closure_0(dependencyMap[37]).getBurstAnimationHash(
          "" + closure_132_0 + closure_132_1 + closure_132_2,
        );
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

export const getBurstAnimation = function () {
  const self = this;
  const apply = closure_0.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
