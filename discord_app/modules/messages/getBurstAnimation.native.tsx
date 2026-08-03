let closure_0 = arg1;
let obj = {
  load() {
    return callback(6101);
  }
};
const items = [
  obj,
  {
    load() {
      return callback(6102);
    }
  },
  {
    load() {
      return callback(6103);
    }
  },
  {
    load() {
      return callback(6104);
    }
  },
  {
    load() {
      return callback(6105);
    }
  },
  {
    load() {
      return callback(6106);
    }
  },
  {
    load() {
      return callback(6107);
    }
  },
  {
    load() {
      return callback(6108);
    }
  },
  {
    load() {
      return callback(6109);
    }
  },
  {
    load() {
      return callback(6110);
    }
  },
  {
    load() {
      return callback(6111);
    }
  },
  {
    load() {
      return callback(6112);
    }
  },
  {
    load() {
      return callback(6113);
    }
  },
  {
    load() {
      return callback(6114);
    }
  },
  {
    load() {
      return callback(6115);
    }
  },
  {
    load() {
      return callback(6116);
    }
  },
  {
    load() {
      return callback(6117);
    }
  },
  {
    load() {
      return callback(6118);
    }
  }
];
obj = {
  load() {
    return callback(6119);
  }
};
const items1 = [
  obj,
  {
    load() {
      return callback(6120);
    }
  },
  {
    load() {
      return callback(6121);
    }
  },
  {
    load() {
      return callback(6122);
    }
  },
  {
    load() {
      return callback(6123);
    }
  },
  {
    load() {
      return callback(6124);
    }
  },
  {
    load() {
      return callback(6125);
    }
  },
  {
    load() {
      return callback(6126);
    }
  },
  {
    load() {
      return callback(6127);
    }
  },
  {
    load() {
      return callback(6128);
    }
  },
  {
    load() {
      return callback(6129);
    }
  },
  {
    load() {
      return callback(6130);
    }
  },
  {
    load() {
      return callback(6131);
    }
  },
  {
    load() {
      return callback(6132);
    }
  },
  {
    load() {
      return callback(6133);
    }
  },
  {
    load() {
      return callback(6134);
    }
  },
  {
    load() {
      return callback(6135);
    }
  },
  {
    load() {
      return callback(6136);
    }
  }
];
closure_0 = require("module_6105")((arg0, arg1, arg2) => {
  let closure_0 = arg0;
  let closure_1 = arg1;
  let closure_2 = arg2;
  let closure_3 = arg3;
  let c6 = 0;
  let c7 = 0;
  const iter = (function*(arg0, arg1, arg2) {
    if (c7 === 2) {
      c7 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
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
            throw arg1;
          } else if (arg0 === 2) {
            c7 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let closure_5 = tmp5;
            let burstAnimationHash = tmp2;
            let flag;
            if (flag === undefined) {
              flag = false;
            }
            burstAnimationHash = undefined;
            c6 = 1;
            c7 = 1;
            return { value: "ct", done: "Array" };
          }
        } else if (arg0 === 1) {
          c7 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c7 = 3;
          const obj1 = { value: null, done: true };
          obj1[0] = arg1;
          return obj1;
        } else {
          const _HermesInternal = HermesInternal;
          burstAnimationHash = callback(table[37]).getBurstAnimationHash("" + callback + table + closure_2);
          let tmp10 = closure_5;
          if (flag) {
            let tmp6 = closure_2;
          } else {
            tmp6 = length;
          }
          tmp10 = burstAnimationHash;
          obj = tmp6[burstAnimationHash % length.length];
          obj.load();
          c7 = 3;
          const obj5 = callback(table[37]);
        }
      } catch (tmp16) {
        c7 = tmp;
        throw tmp16;
      }
    }
  })();
  iter.next();
  return iter;
});
const result = require("module_6102").fileFinishedImporting("modules/messages/getBurstAnimation.native.tsx");

export const getBurstAnimation = function() {
  const self = this;
  const apply = closure_0.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};