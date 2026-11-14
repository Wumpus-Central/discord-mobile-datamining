// discord_app/modules/messages/getBurstAnimation.native.tsx
import asyncGeneratorStepDefault from "../../../_runtime/00005_asyncGeneratorStep.js";

const items = [
  {
    load() {
      return closure_0(5266);
    },
  },
  {
    load() {
      return closure_0(5267);
    },
  },
  {
    load() {
      return closure_0(5268);
    },
  },
  {
    load() {
      return closure_0(5269);
    },
  },
  {
    load() {
      return closure_0(5270);
    },
  },
  {
    load() {
      return closure_0(5271);
    },
  },
  {
    load() {
      return closure_0(5272);
    },
  },
  {
    load() {
      return closure_0(5273);
    },
  },
  {
    load() {
      return closure_0(5274);
    },
  },
  {
    load() {
      return closure_0(5275);
    },
  },
  {
    load() {
      return closure_0(5276);
    },
  },
  {
    load() {
      return closure_0(5277);
    },
  },
  {
    load() {
      return closure_0(5278);
    },
  },
  {
    load() {
      return closure_0(5279);
    },
  },
  {
    load() {
      return closure_0(5280);
    },
  },
  {
    load() {
      return closure_0(5281);
    },
  },
  {
    load() {
      return closure_0(5282);
    },
  },
  {
    load() {
      return closure_0(5283);
    },
  },
];
const items1 = [
  {
    load() {
      return closure_0(5284);
    },
  },
  {
    load() {
      return closure_0(5285);
    },
  },
  {
    load() {
      return closure_0(5286);
    },
  },
  {
    load() {
      return closure_0(5287);
    },
  },
  {
    load() {
      return closure_0(5288);
    },
  },
  {
    load() {
      return closure_0(5289);
    },
  },
  {
    load() {
      return closure_0(5290);
    },
  },
  {
    load() {
      return closure_0(5291);
    },
  },
  {
    load() {
      return closure_0(5292);
    },
  },
  {
    load() {
      return closure_0(5293);
    },
  },
  {
    load() {
      return closure_0(5294);
    },
  },
  {
    load() {
      return closure_0(5295);
    },
  },
  {
    load() {
      return closure_0(5296);
    },
  },
  {
    load() {
      return closure_0(5297);
    },
  },
  {
    load() {
      return closure_0(5298);
    },
  },
  {
    load() {
      return closure_0(5299);
    },
  },
  {
    load() {
      return closure_0(5300);
    },
  },
  {
    load() {
      return closure_0(5301);
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
