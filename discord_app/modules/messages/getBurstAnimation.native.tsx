// discord_app/modules/messages/getBurstAnimation.native.tsx
import asyncGeneratorStepDefault from "../../../_runtime/00005_asyncGeneratorStep.js";

const items = [
  {
    load() {
      return closure_0(4969);
    },
  },
  {
    load() {
      return closure_0(4970);
    },
  },
  {
    load() {
      return closure_0(4971);
    },
  },
  {
    load() {
      return closure_0(4972);
    },
  },
  {
    load() {
      return closure_0(4973);
    },
  },
  {
    load() {
      return closure_0(4974);
    },
  },
  {
    load() {
      return closure_0(4975);
    },
  },
  {
    load() {
      return closure_0(4976);
    },
  },
  {
    load() {
      return closure_0(4977);
    },
  },
  {
    load() {
      return closure_0(4978);
    },
  },
  {
    load() {
      return closure_0(4979);
    },
  },
  {
    load() {
      return closure_0(4980);
    },
  },
  {
    load() {
      return closure_0(4981);
    },
  },
  {
    load() {
      return closure_0(4982);
    },
  },
  {
    load() {
      return closure_0(4983);
    },
  },
  {
    load() {
      return closure_0(4984);
    },
  },
  {
    load() {
      return closure_0(4985);
    },
  },
  {
    load() {
      return closure_0(4986);
    },
  },
];
const items1 = [
  {
    load() {
      return closure_0(4987);
    },
  },
  {
    load() {
      return closure_0(4988);
    },
  },
  {
    load() {
      return closure_0(4989);
    },
  },
  {
    load() {
      return closure_0(4990);
    },
  },
  {
    load() {
      return closure_0(4991);
    },
  },
  {
    load() {
      return closure_0(4992);
    },
  },
  {
    load() {
      return closure_0(4993);
    },
  },
  {
    load() {
      return closure_0(4994);
    },
  },
  {
    load() {
      return closure_0(4995);
    },
  },
  {
    load() {
      return closure_0(4996);
    },
  },
  {
    load() {
      return closure_0(4997);
    },
  },
  {
    load() {
      return closure_0(4998);
    },
  },
  {
    load() {
      return closure_0(4999);
    },
  },
  {
    load() {
      return closure_0(5000);
    },
  },
  {
    load() {
      return closure_0(5001);
    },
  },
  {
    load() {
      return closure_0(5002);
    },
  },
  {
    load() {
      return closure_0(5003);
    },
  },
  {
    load() {
      return closure_0(5004);
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
          return { value: "flexDirection", done: true };
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
