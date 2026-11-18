// discord_app/modules/messages/getBurstAnimation.native.tsx
import asyncGeneratorStepDefault from "../../../_runtime/00005_asyncGeneratorStep.js";

const items = [
  {
    load() {
      return closure_0(4783);
    },
  },
  {
    load() {
      return closure_0(4784);
    },
  },
  {
    load() {
      return closure_0(4785);
    },
  },
  {
    load() {
      return closure_0(4786);
    },
  },
  {
    load() {
      return closure_0(4787);
    },
  },
  {
    load() {
      return closure_0(4788);
    },
  },
  {
    load() {
      return closure_0(4789);
    },
  },
  {
    load() {
      return closure_0(4790);
    },
  },
  {
    load() {
      return closure_0(4791);
    },
  },
  {
    load() {
      return closure_0(4792);
    },
  },
  {
    load() {
      return closure_0(4793);
    },
  },
  {
    load() {
      return closure_0(4794);
    },
  },
  {
    load() {
      return closure_0(4795);
    },
  },
  {
    load() {
      return closure_0(4796);
    },
  },
  {
    load() {
      return closure_0(4797);
    },
  },
  {
    load() {
      return closure_0(4798);
    },
  },
  {
    load() {
      return closure_0(4799);
    },
  },
  {
    load() {
      return closure_0(4800);
    },
  },
];
const items1 = [
  {
    load() {
      return closure_0(4801);
    },
  },
  {
    load() {
      return closure_0(4802);
    },
  },
  {
    load() {
      return closure_0(4803);
    },
  },
  {
    load() {
      return closure_0(4804);
    },
  },
  {
    load() {
      return closure_0(4805);
    },
  },
  {
    load() {
      return closure_0(4806);
    },
  },
  {
    load() {
      return closure_0(4807);
    },
  },
  {
    load() {
      return closure_0(4808);
    },
  },
  {
    load() {
      return closure_0(4809);
    },
  },
  {
    load() {
      return closure_0(4810);
    },
  },
  {
    load() {
      return closure_0(4811);
    },
  },
  {
    load() {
      return closure_0(4812);
    },
  },
  {
    load() {
      return closure_0(4813);
    },
  },
  {
    load() {
      return closure_0(4814);
    },
  },
  {
    load() {
      return closure_0(4815);
    },
  },
  {
    load() {
      return closure_0(4816);
    },
  },
  {
    load() {
      return closure_0(4817);
    },
  },
  {
    load() {
      return closure_0(4818);
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
