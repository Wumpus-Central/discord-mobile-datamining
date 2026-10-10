// discord_app/modules/messages/getBurstAnimation.native.tsx
import asyncGeneratorStepDefault from "../../../_runtime/00005_asyncGeneratorStep.js";

const items = [
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
  {
    load() {
      return closure_0(7936);
    },
  },
  {
    load() {
      return closure_0(7937);
    },
  },
  {
    load() {
      return closure_0(7938);
    },
  },
  {
    load() {
      return closure_0(7939);
    },
  },
  {
    load() {
      return closure_0(7940);
    },
  },
  {
    load() {
      return closure_0(7941);
    },
  },
  {
    load() {
      return closure_0(7942);
    },
  },
  {
    load() {
      return closure_0(7943);
    },
  },
  {
    load() {
      return closure_0(7944);
    },
  },
];
const items1 = [
  {
    load() {
      return closure_0(7945);
    },
  },
  {
    load() {
      return closure_0(7946);
    },
  },
  {
    load() {
      return closure_0(7947);
    },
  },
  {
    load() {
      return closure_0(7948);
    },
  },
  {
    load() {
      return closure_0(7949);
    },
  },
  {
    load() {
      return closure_0(7950);
    },
  },
  {
    load() {
      return closure_0(7951);
    },
  },
  {
    load() {
      return closure_0(7952);
    },
  },
  {
    load() {
      return closure_0(7953);
    },
  },
  {
    load() {
      return closure_0(7954);
    },
  },
  {
    load() {
      return closure_0(7955);
    },
  },
  {
    load() {
      return closure_0(7956);
    },
  },
  {
    load() {
      return closure_0(7957);
    },
  },
  {
    load() {
      return closure_0(7958);
    },
  },
  {
    load() {
      return closure_0(7959);
    },
  },
  {
    load() {
      return closure_0(7960);
    },
  },
  {
    load() {
      return closure_0(7961);
    },
  },
  {
    load() {
      return closure_0(7962);
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
      return { value: "IconComponent", done: "+51" };
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
          return { value: "Set", done: true };
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
