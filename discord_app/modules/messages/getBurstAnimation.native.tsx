// discord_app/modules/messages/getBurstAnimation.native.tsx
import asyncGeneratorStepDefault from "../../../_runtime/00005_asyncGeneratorStep.js";

const items = [
  {
    load() {
      return closure_0(4877);
    },
  },
  {
    load() {
      return closure_0(4878);
    },
  },
  {
    load() {
      return closure_0(4879);
    },
  },
  {
    load() {
      return closure_0(4880);
    },
  },
  {
    load() {
      return closure_0(4881);
    },
  },
  {
    load() {
      return closure_0(4882);
    },
  },
  {
    load() {
      return closure_0(4883);
    },
  },
  {
    load() {
      return closure_0(4884);
    },
  },
  {
    load() {
      return closure_0(4885);
    },
  },
  {
    load() {
      return closure_0(4886);
    },
  },
  {
    load() {
      return closure_0(4887);
    },
  },
  {
    load() {
      return closure_0(4888);
    },
  },
  {
    load() {
      return closure_0(4889);
    },
  },
  {
    load() {
      return closure_0(4890);
    },
  },
  {
    load() {
      return closure_0(4891);
    },
  },
  {
    load() {
      return closure_0(4892);
    },
  },
  {
    load() {
      return closure_0(4893);
    },
  },
  {
    load() {
      return closure_0(4894);
    },
  },
];
const items1 = [
  {
    load() {
      return closure_0(4895);
    },
  },
  {
    load() {
      return closure_0(4896);
    },
  },
  {
    load() {
      return closure_0(4897);
    },
  },
  {
    load() {
      return closure_0(4898);
    },
  },
  {
    load() {
      return closure_0(4899);
    },
  },
  {
    load() {
      return closure_0(4900);
    },
  },
  {
    load() {
      return closure_0(4901);
    },
  },
  {
    load() {
      return closure_0(4902);
    },
  },
  {
    load() {
      return closure_0(4903);
    },
  },
  {
    load() {
      return closure_0(4904);
    },
  },
  {
    load() {
      return closure_0(4905);
    },
  },
  {
    load() {
      return closure_0(4906);
    },
  },
  {
    load() {
      return closure_0(4907);
    },
  },
  {
    load() {
      return closure_0(4908);
    },
  },
  {
    load() {
      return closure_0(4909);
    },
  },
  {
    load() {
      return closure_0(4910);
    },
  },
  {
    load() {
      return closure_0(4911);
    },
  },
  {
    load() {
      return closure_0(4912);
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
