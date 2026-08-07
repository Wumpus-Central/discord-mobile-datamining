// discord_app/modules/messages/getBurstAnimation.native.tsx
let closure_0 = arg1;
let obj = {
  load() {
    return callback(7185);
  }
};
const items = [
  obj,
  {
    load() {
      return callback(7186);
    }
  },
  {
    load() {
      return callback(7187);
    }
  },
  {
    load() {
      return callback(7188);
    }
  },
  {
    load() {
      return callback(7189);
    }
  },
  {
    load() {
      return callback(7190);
    }
  },
  {
    load() {
      return callback(7191);
    }
  },
  {
    load() {
      return callback(7192);
    }
  },
  {
    load() {
      return callback(7193);
    }
  },
  {
    load() {
      return callback(7194);
    }
  },
  {
    load() {
      return callback(7195);
    }
  },
  {
    load() {
      return callback(7196);
    }
  },
  {
    load() {
      return callback(7197);
    }
  },
  {
    load() {
      return callback(7198);
    }
  },
  {
    load() {
      return callback(7199);
    }
  },
  {
    load() {
      return callback(7200);
    }
  },
  {
    load() {
      return callback(7201);
    }
  },
  {
    load() {
      return callback(7202);
    }
  }
];
obj = {
  load() {
    return callback(7203);
  }
};
const items1 = [
  obj,
  {
    load() {
      return callback(7204);
    }
  },
  {
    load() {
      return callback(7205);
    }
  },
  {
    load() {
      return callback(7206);
    }
  },
  {
    load() {
      return callback(7207);
    }
  },
  {
    load() {
      return callback(7208);
    }
  },
  {
    load() {
      return callback(7209);
    }
  },
  {
    load() {
      return callback(7210);
    }
  },
  {
    load() {
      return callback(7211);
    }
  },
  {
    load() {
      return callback(7212);
    }
  },
  {
    load() {
      return callback(7213);
    }
  },
  {
    load() {
      return callback(7214);
    }
  },
  {
    load() {
      return callback(7215);
    }
  },
  {
    load() {
      return callback(7216);
    }
  },
  {
    load() {
      return callback(7217);
    }
  },
  {
    load() {
      return callback(7218);
    }
  },
  {
    load() {
      return callback(7219);
    }
  },
  {
    load() {
      return callback(7220);
    }
  }
];
closure_0 = require("module_7189")((arg0, arg1, arg2) => {
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
        return { value: "T", done: null };
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
            return { value: "PX_8", done: "Array" };
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
const result = require("module_7186").fileFinishedImporting("modules/messages/getBurstAnimation.native.tsx");

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