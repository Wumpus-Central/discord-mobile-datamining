// === Module 8194: getBurstAnimation ===

// Module 8194 (getBurstAnimation)
import asyncGeneratorStepDefault from "asyncGeneratorStep" /* 5 */;

const items = [
  {
    load() {
      return closure_0(8195);
    }
  },
  {
    load() {
      return closure_0(8196);
    }
  },
  {
    load() {
      return closure_0(8197);
    }
  },
  {
    load() {
      return closure_0(8198);
    }
  },
  {
    load() {
      return closure_0(8199);
    }
  },
  {
    load() {
      return closure_0(8200);
    }
  },
  {
    load() {
      return closure_0(8201);
    }
  },
  {
    load() {
      return closure_0(8202);
    }
  },
  {
    load() {
      return closure_0(8203);
    }
  },
  {
    load() {
      return closure_0(8204);
    }
  },
  {
    load() {
      return closure_0(8205);
    }
  },
  {
    load() {
      return closure_0(8206);
    }
  },
  {
    load() {
      return closure_0(8207);
    }
  },
  {
    load() {
      return closure_0(8208);
    }
  },
  {
    load() {
      return closure_0(8209);
    }
  },
  {
    load() {
      return closure_0(8210);
    }
  },
  {
    load() {
      return closure_0(8211);
    }
  },
  {
    load() {
      return closure_0(8212);
    }
  }
];
const items1 = [
  {
    load() {
      return closure_0(8213);
    }
  },
  {
    load() {
      return closure_0(8214);
    }
  },
  {
    load() {
      return closure_0(8215);
    }
  },
  {
    load() {
      return closure_0(8216);
    }
  },
  {
    load() {
      return closure_0(8217);
    }
  },
  {
    load() {
      return closure_0(8218);
    }
  },
  {
    load() {
      return closure_0(8219);
    }
  },
  {
    load() {
      return closure_0(8220);
    }
  },
  {
    load() {
      return closure_0(8221);
    }
  },
  {
    load() {
      return closure_0(8222);
    }
  },
  {
    load() {
      return closure_0(8223);
    }
  },
  {
    load() {
      return closure_0(8224);
    }
  },
  {
    load() {
      return closure_0(8225);
    }
  },
  {
    load() {
      return closure_0(8226);
    }
  },
  {
    load() {
      return closure_0(8227);
    }
  },
  {
    load() {
      return closure_0(8228);
    }
  },
  {
    load() {
      return closure_0(8229);
    }
  },
  {
    load() {
      return closure_0(8230);
    }
  }
];
let closure_0 = asyncGeneratorStepDefault(function*(arg0, arg1, arg2) {
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
      return { value: "IconComponent", done: null };
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
          return { value: "Reflect", done: true };
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
        burstAnimationHash = closure_0(dependencyMap[37]).getBurstAnimationHash("" + closure_132_0 + closure_132_1 + closure_132_2);
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