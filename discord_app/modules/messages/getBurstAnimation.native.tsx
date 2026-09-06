// discord_app/modules/messages/getBurstAnimation.native.tsx
import asyncGeneratorStepDefault from "../../../_runtime/00005_asyncGeneratorStep.js";

let obj = {
  load() {
    return closure_0(7786);
  },
};
const items = [
  obj,
  {
    load() {
      return closure_0(7787);
    },
  },
  {
    load() {
      return closure_0(7788);
    },
  },
  {
    load() {
      return closure_0(7789);
    },
  },
  {
    load() {
      return closure_0(7790);
    },
  },
  {
    load() {
      return closure_0(7791);
    },
  },
  {
    load() {
      return closure_0(7792);
    },
  },
  {
    load() {
      return closure_0(7793);
    },
  },
  {
    load() {
      return closure_0(7794);
    },
  },
  {
    load() {
      return closure_0(7795);
    },
  },
  {
    load() {
      return closure_0(7796);
    },
  },
  {
    load() {
      return closure_0(7797);
    },
  },
  {
    load() {
      return closure_0(7798);
    },
  },
  {
    load() {
      return closure_0(7799);
    },
  },
  {
    load() {
      return closure_0(7800);
    },
  },
  {
    load() {
      return closure_0(7801);
    },
  },
  {
    load() {
      return closure_0(7802);
    },
  },
  {
    load() {
      return closure_0(7803);
    },
  },
];
obj = {
  load() {
    return closure_0(7804);
  },
};
const items1 = [
  obj,
  {
    load() {
      return closure_0(7805);
    },
  },
  {
    load() {
      return closure_0(7806);
    },
  },
  {
    load() {
      return closure_0(7807);
    },
  },
  {
    load() {
      return closure_0(7808);
    },
  },
  {
    load() {
      return closure_0(7809);
    },
  },
  {
    load() {
      return closure_0(7810);
    },
  },
  {
    load() {
      return closure_0(7811);
    },
  },
  {
    load() {
      return closure_0(7812);
    },
  },
  {
    load() {
      return closure_0(7813);
    },
  },
  {
    load() {
      return closure_0(7814);
    },
  },
  {
    load() {
      return closure_0(7815);
    },
  },
  {
    load() {
      return closure_0(7816);
    },
  },
  {
    load() {
      return closure_0(7817);
    },
  },
  {
    load() {
      return closure_0(7818);
    },
  },
  {
    load() {
      return closure_0(7819);
    },
  },
  {
    load() {
      return closure_0(7820);
    },
  },
  {
    load() {
      return closure_0(7821);
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
