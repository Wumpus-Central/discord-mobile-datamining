// discord_app/modules/messages/getBurstAnimation.native.tsx
import asyncGeneratorStepDefault from "../../../_runtime/00005_asyncGeneratorStep.js";

const items = [
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
  {
    load() {
      return closure_0(5005);
    },
  },
  {
    load() {
      return closure_0(5006);
    },
  },
  {
    load() {
      return closure_0(5007);
    },
  },
  {
    load() {
      return closure_0(5008);
    },
  },
  {
    load() {
      return closure_0(5009);
    },
  },
  {
    load() {
      return closure_0(5010);
    },
  },
  {
    load() {
      return closure_0(5011);
    },
  },
  {
    load() {
      return closure_0(5012);
    },
  },
  {
    load() {
      return closure_0(5013);
    },
  },
  {
    load() {
      return closure_0(5014);
    },
  },
  {
    load() {
      return closure_0(5015);
    },
  },
  {
    load() {
      return closure_0(5016);
    },
  },
  {
    load() {
      return closure_0(5017);
    },
  },
  {
    load() {
      return closure_0(5018);
    },
  },
  {
    load() {
      return closure_0(5019);
    },
  },
  {
    load() {
      return closure_0(5020);
    },
  },
];
const items1 = [
  {
    load() {
      return closure_0(5021);
    },
  },
  {
    load() {
      return closure_0(5022);
    },
  },
  {
    load() {
      return closure_0(5023);
    },
  },
  {
    load() {
      return closure_0(5024);
    },
  },
  {
    load() {
      return closure_0(5025);
    },
  },
  {
    load() {
      return closure_0(5026);
    },
  },
  {
    load() {
      return closure_0(5027);
    },
  },
  {
    load() {
      return closure_0(5028);
    },
  },
  {
    load() {
      return closure_0(5029);
    },
  },
  {
    load() {
      return closure_0(5030);
    },
  },
  {
    load() {
      return closure_0(5031);
    },
  },
  {
    load() {
      return closure_0(5032);
    },
  },
  {
    load() {
      return closure_0(5033);
    },
  },
  {
    load() {
      return closure_0(5034);
    },
  },
  {
    load() {
      return closure_0(5035);
    },
  },
  {
    load() {
      return closure_0(5036);
    },
  },
  {
    load() {
      return closure_0(5037);
    },
  },
  {
    load() {
      return closure_0(5038);
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
