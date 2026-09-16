// discord_app/modules/messages/getBurstAnimation.native.tsx
import asyncGeneratorStepDefault from "../../../_runtime/00005_asyncGeneratorStep.js";

const items = [
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
  {
    load() {
      return closure_0(7906);
    },
  },
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
];
const items1 = [
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
  {
    load() {
      return closure_0(7924);
    },
  },
  {
    load() {
      return closure_0(7925);
    },
  },
  {
    load() {
      return closure_0(7926);
    },
  },
  {
    load() {
      return closure_0(7927);
    },
  },
  {
    load() {
      return closure_0(7928);
    },
  },
  {
    load() {
      return closure_0(7929);
    },
  },
  {
    load() {
      return closure_0(7930);
    },
  },
  {
    load() {
      return closure_0(7931);
    },
  },
  {
    load() {
      return closure_0(7932);
    },
  },
  {
    load() {
      return closure_0(7933);
    },
  },
  {
    load() {
      return closure_0(7934);
    },
  },
  {
    load() {
      return closure_0(7935);
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
          return { value: "PX_16", done: true };
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
        burstAnimationHash = closure_0(dependencyMap[37]).getBurstAnimationHash(
          "" + closure_132_0 + closure_132_1 + closure_132_2,
        );
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
