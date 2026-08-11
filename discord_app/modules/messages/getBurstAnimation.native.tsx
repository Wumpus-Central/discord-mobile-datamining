// discord_app/modules/messages/getBurstAnimation.native.tsx
let closure_0 = arg1;
let obj = {
  load() {
    return callback(7246);
  }
};
const items = [
  obj,
  {
    load() {
      return callback(7247);
    }
  },
  {
    load() {
      return callback(7248);
    }
  },
  {
    load() {
      return callback(7249);
    }
  },
  {
    load() {
      return callback(7250);
    }
  },
  {
    load() {
      return callback(7251);
    }
  },
  {
    load() {
      return callback(7252);
    }
  },
  {
    load() {
      return callback(7253);
    }
  },
  {
    load() {
      return callback(7254);
    }
  },
  {
    load() {
      return callback(7255);
    }
  },
  {
    load() {
      return callback(7256);
    }
  },
  {
    load() {
      return callback(7257);
    }
  },
  {
    load() {
      return callback(7258);
    }
  },
  {
    load() {
      return callback(7259);
    }
  },
  {
    load() {
      return callback(7260);
    }
  },
  {
    load() {
      return callback(7261);
    }
  },
  {
    load() {
      return callback(7262);
    }
  },
  {
    load() {
      return callback(7263);
    }
  }
];
obj = {
  load() {
    return callback(7264);
  }
};
const items1 = [
  obj,
  {
    load() {
      return callback(7265);
    }
  },
  {
    load() {
      return callback(7266);
    }
  },
  {
    load() {
      return callback(7267);
    }
  },
  {
    load() {
      return callback(7268);
    }
  },
  {
    load() {
      return callback(7269);
    }
  },
  {
    load() {
      return callback(7270);
    }
  },
  {
    load() {
      return callback(7271);
    }
  },
  {
    load() {
      return callback(7272);
    }
  },
  {
    load() {
      return callback(7273);
    }
  },
  {
    load() {
      return callback(7274);
    }
  },
  {
    load() {
      return callback(7275);
    }
  },
  {
    load() {
      return callback(7276);
    }
  },
  {
    load() {
      return callback(7277);
    }
  },
  {
    load() {
      return callback(7278);
    }
  },
  {
    load() {
      return callback(7279);
    }
  },
  {
    load() {
      return callback(7280);
    }
  },
  {
    load() {
      return callback(7281);
    }
  }
];
closure_0 = require("module_7250")((arg0, arg1, arg2) => {
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
const result = require("module_7247").fileFinishedImporting("modules/messages/getBurstAnimation.native.tsx");

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