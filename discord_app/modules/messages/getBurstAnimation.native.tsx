// discord_app/modules/messages/getBurstAnimation.native.tsx
import _asyncToGeneratorDefault from "../../../_runtime/metro/00005__asyncToGenerator.js";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let closure_5;

const obj = {
  load() {
    return require("../../../_runtime/metro/07414__.js");
  },
};
const items = [
  obj,
  {
    load() {
      return require("../../../_runtime/metro/07415__.js");
    },
  },
  {
    load() {
      return require("../../../_runtime/metro/07416__.js");
    },
  },
  {
    load() {
      return require("../../../_runtime/metro/07417__.js");
    },
  },
  {
    load() {
      return require("../../../_runtime/metro/07418__.js");
    },
  },
  {
    load() {
      return require("../../../_runtime/metro/07419__.js");
    },
  },
  {
    load() {
      return require("../../../_runtime/metro/07420__.js");
    },
  },
  {
    load() {
      return require("../../../_runtime/metro/07421__.js");
    },
  },
  {
    load() {
      return require("../../../_runtime/metro/07422__.js");
    },
  },
  {
    load() {
      return require("../../../_runtime/metro/07423__.js");
    },
  },
  {
    load() {
      return require("../../../_runtime/metro/07424__.js");
    },
  },
  {
    load() {
      return require("../../../_runtime/metro/07425__.js");
    },
  },
  {
    load() {
      return require("../../../_runtime/metro/07426__.js");
    },
  },
  {
    load() {
      return require("../../../_runtime/metro/07427__.js");
    },
  },
  {
    load() {
      return require("../../../_runtime/metro/07428__.js");
    },
  },
  {
    load() {
      return require("../../../_runtime/metro/07429__.js");
    },
  },
  {
    load() {
      return require("../../../_runtime/metro/07430__.js");
    },
  },
  {
    load() {
      return require("../../../_runtime/metro/07431__.js");
    },
  },
];
const obj2 = {
  load() {
    return require("../../../_runtime/metro/07432__.js");
  },
};
const items1 = [
  obj2,
  {
    load() {
      return require("../../../_runtime/metro/07433__.js");
    },
  },
  {
    load() {
      return require("../../../_runtime/metro/07434__.js");
    },
  },
  {
    load() {
      return require("../../../_runtime/metro/07435__.js");
    },
  },
  {
    load() {
      return require("../../../_runtime/metro/07436__.js");
    },
  },
  {
    load() {
      return require("../../../_runtime/metro/07437__.js");
    },
  },
  {
    load() {
      return require("../../../_runtime/metro/07438__.js");
    },
  },
  {
    load() {
      return require("../../../_runtime/metro/07439__.js");
    },
  },
  {
    load() {
      return require("../../../_runtime/metro/07440__.js");
    },
  },
  {
    load() {
      return require("../../../_runtime/metro/07441__.js");
    },
  },
  {
    load() {
      return require("../../../_runtime/metro/07442__.js");
    },
  },
  {
    load() {
      return require("../../../_runtime/metro/07443__.js");
    },
  },
  {
    load() {
      return require("../../../_runtime/metro/07444__.js");
    },
  },
  {
    load() {
      return require("../../../_runtime/metro/07445__.js");
    },
  },
  {
    load() {
      return require("../../../_runtime/metro/07446__.js");
    },
  },
  {
    load() {
      return require("../../../_runtime/metro/07447__.js");
    },
  },
  {
    load() {
      return require("../../../_runtime/metro/07448__.js");
    },
  },
  {
    load() {
      return require("../../../_runtime/metro/07449__.js");
    },
  },
];
let closure_0 = _asyncToGeneratorDefault((arg0, arg1, arg2) => {
  let closure_4;
  closure_0 = arg0;
  let closure_1 = arg1;
  let closure_2 = arg2;
  const length = arg3;
  let c6 = 0;
  let c7 = 0;
  const iter = (function* (arg0, value, arg2) {
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
            return { value: "Set", done: true };
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

export const getBurstAnimation = function () {
  return closure_0(...arguments);
};
