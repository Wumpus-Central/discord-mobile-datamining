// === Module 7424: getBurstAnimation ===

// Module 7424 (getBurstAnimation)
import _asyncToGeneratorDefault from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let closure_5;

const obj = {
  load() {
    return require("module_7425");
  }
};
const items = [
  obj,
  {
    load() {
      return require("module_7426");
    }
  },
  {
    load() {
      return require("module_7427");
    }
  },
  {
    load() {
      return require("module_7428");
    }
  },
  {
    load() {
      return require("module_7429");
    }
  },
  {
    load() {
      return require("module_7430");
    }
  },
  {
    load() {
      return require("module_7431");
    }
  },
  {
    load() {
      return require("module_7432");
    }
  },
  {
    load() {
      return require("module_7433");
    }
  },
  {
    load() {
      return require("module_7434");
    }
  },
  {
    load() {
      return require("module_7435");
    }
  },
  {
    load() {
      return require("module_7436");
    }
  },
  {
    load() {
      return require("module_7437");
    }
  },
  {
    load() {
      return require("module_7438");
    }
  },
  {
    load() {
      return require("module_7439");
    }
  },
  {
    load() {
      return require("module_7440");
    }
  },
  {
    load() {
      return require("module_7441");
    }
  },
  {
    load() {
      return require("module_7442");
    }
  }
];
const obj2 = {
  load() {
    return require("module_7443");
  }
};
const items1 = [
  obj2,
  {
    load() {
      return require("module_7444");
    }
  },
  {
    load() {
      return require("module_7445");
    }
  },
  {
    load() {
      return require("module_7446");
    }
  },
  {
    load() {
      return require("module_7447");
    }
  },
  {
    load() {
      return require("module_7448");
    }
  },
  {
    load() {
      return require("module_7449");
    }
  },
  {
    load() {
      return require("module_7450");
    }
  },
  {
    load() {
      return require("module_7451");
    }
  },
  {
    load() {
      return require("module_7452");
    }
  },
  {
    load() {
      return require("module_7453");
    }
  },
  {
    load() {
      return require("module_7454");
    }
  },
  {
    load() {
      return require("module_7455");
    }
  },
  {
    load() {
      return require("module_7456");
    }
  },
  {
    load() {
      return require("module_7457");
    }
  },
  {
    load() {
      return require("module_7458");
    }
  },
  {
    load() {
      return require("module_7459");
    }
  },
  {
    load() {
      return require("module_7460");
    }
  }
];
let closure_0 = _asyncToGeneratorDefault((arg0, arg1, arg2) => {
  let closure_4;
  closure_0 = arg0;
  let closure_1 = arg1;
  let closure_2 = arg2;
  const length = arg3;
  let c6 = 0;
  let c7 = 0;
  const iter = (function*(arg0, value, arg2) {
    if (c7 === 2) {
      c7 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        return { value, done: true };
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        let flag;
        c7 = 2;
        if (0 === c6) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            return { value, done: true };
          } else {
            closure_5 = tmp4;
            let burstAnimationHash = tmp;
            flag = length;
            if (length === undefined) {
              flag = false;
            }
            burstAnimationHash = undefined;
            c6 = 1;
            c7 = 1;
            return { value: "Reflect", done: true };
          }
        } else if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c7 = 3;
          return { value, done: true };
        } else {
          const _HermesInternal = HermesInternal;
          const obj6 = closure_0(closure_1[37]);
          burstAnimationHash = obj6.getBurstAnimationHash("" + closure_0 + closure_1 + closure_2);
          c7 = 3;
          const obj5 = { value: obj.load(), done: true };
          return obj5;
        }
      } catch (tmp14) {
        c7 = 3;
        throw tmp14;
      }
    }
  })();
  iter.next();
  return iter;
});
const result = size.fileFinishedImporting("modules/messages/getBurstAnimation.native.tsx");

export const getBurstAnimation = function() {
  return closure_0(...arguments);
};