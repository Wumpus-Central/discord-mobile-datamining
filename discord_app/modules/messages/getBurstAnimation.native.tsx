// discord_app/modules/messages/getBurstAnimation.native.tsx
import asyncGeneratorStepDefault from "../../../_runtime/00005_asyncGeneratorStep.js";

const items = [
  {
    load() {
      return closure_0(7988);
    },
  },
  {
    load() {
      return closure_0(7989);
    },
  },
  {
    load() {
      return closure_0(7990);
    },
  },
  {
    load() {
      return closure_0(7991);
    },
  },
  {
    load() {
      return closure_0(7992);
    },
  },
  {
    load() {
      return closure_0(7993);
    },
  },
  {
    load() {
      return closure_0(7994);
    },
  },
  {
    load() {
      return closure_0(7995);
    },
  },
  {
    load() {
      return closure_0(7996);
    },
  },
  {
    load() {
      return closure_0(7997);
    },
  },
  {
    load() {
      return closure_0(7998);
    },
  },
  {
    load() {
      return closure_0(7999);
    },
  },
  {
    load() {
      return closure_0(8000);
    },
  },
  {
    load() {
      return closure_0(8001);
    },
  },
  {
    load() {
      return closure_0(8002);
    },
  },
  {
    load() {
      return closure_0(8003);
    },
  },
  {
    load() {
      return closure_0(8004);
    },
  },
  {
    load() {
      return closure_0(8005);
    },
  },
];
const items1 = [
  {
    load() {
      return closure_0(8006);
    },
  },
  {
    load() {
      return closure_0(8007);
    },
  },
  {
    load() {
      return closure_0(8008);
    },
  },
  {
    load() {
      return closure_0(8009);
    },
  },
  {
    load() {
      return closure_0(8010);
    },
  },
  {
    load() {
      return closure_0(8011);
    },
  },
  {
    load() {
      return closure_0(8012);
    },
  },
  {
    load() {
      return closure_0(8013);
    },
  },
  {
    load() {
      return closure_0(8014);
    },
  },
  {
    load() {
      return closure_0(8015);
    },
  },
  {
    load() {
      return closure_0(8016);
    },
  },
  {
    load() {
      return closure_0(8017);
    },
  },
  {
    load() {
      return closure_0(8018);
    },
  },
  {
    load() {
      return closure_0(8019);
    },
  },
  {
    load() {
      return closure_0(8020);
    },
  },
  {
    load() {
      return closure_0(8021);
    },
  },
  {
    load() {
      return closure_0(8022);
    },
  },
  {
    load() {
      return closure_0(8023);
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
