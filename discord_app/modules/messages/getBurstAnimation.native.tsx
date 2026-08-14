// discord_app/modules/messages/getBurstAnimation.native.tsx
let closure_0 = arg1;
let obj = {
  load() {
    return callback(7312);
  }
};
const items = [
  obj,
  {
    load() {
      return callback(7313);
    }
  },
  {
    load() {
      return callback(7314);
    }
  },
  {
    load() {
      return callback(7315);
    }
  },
  {
    load() {
      return callback(7316);
    }
  },
  {
    load() {
      return callback(7317);
    }
  },
  {
    load() {
      return callback(7318);
    }
  },
  {
    load() {
      return callback(7319);
    }
  },
  {
    load() {
      return callback(7320);
    }
  },
  {
    load() {
      return callback(7321);
    }
  },
  {
    load() {
      return callback(7322);
    }
  },
  {
    load() {
      return callback(7323);
    }
  },
  {
    load() {
      return callback(7324);
    }
  },
  {
    load() {
      return callback(7325);
    }
  },
  {
    load() {
      return callback(7326);
    }
  },
  {
    load() {
      return callback(7327);
    }
  },
  {
    load() {
      return callback(7328);
    }
  },
  {
    load() {
      return callback(7329);
    }
  }
];
obj = {
  load() {
    return callback(7330);
  }
};
const items1 = [
  obj,
  {
    load() {
      return callback(7331);
    }
  },
  {
    load() {
      return callback(7332);
    }
  },
  {
    load() {
      return callback(7333);
    }
  },
  {
    load() {
      return callback(7334);
    }
  },
  {
    load() {
      return callback(7335);
    }
  },
  {
    load() {
      return callback(7336);
    }
  },
  {
    load() {
      return callback(7337);
    }
  },
  {
    load() {
      return callback(7338);
    }
  },
  {
    load() {
      return callback(7339);
    }
  },
  {
    load() {
      return callback(7340);
    }
  },
  {
    load() {
      return callback(7341);
    }
  },
  {
    load() {
      return callback(7342);
    }
  },
  {
    load() {
      return callback(7343);
    }
  },
  {
    load() {
      return callback(7344);
    }
  },
  {
    load() {
      return callback(7345);
    }
  },
  {
    load() {
      return callback(7346);
    }
  },
  {
    load() {
      return callback(7347);
    }
  }
];
closure_0 = require("module_7316")((arg0, arg1, arg2) => {
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
            return { value: "ct", done: true };
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
const result = require("module_7313").fileFinishedImporting("modules/messages/getBurstAnimation.native.tsx");

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