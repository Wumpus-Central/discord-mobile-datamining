// discord_app/modules/messages/getBurstAnimation.native.tsx
let closure_0 = arg1;
let obj = {
  load() {
    return callback(7139);
  }
};
const items = [
  obj,
  {
    load() {
      return callback(7140);
    }
  },
  {
    load() {
      return callback(7141);
    }
  },
  {
    load() {
      return callback(7142);
    }
  },
  {
    load() {
      return callback(7143);
    }
  },
  {
    load() {
      return callback(7144);
    }
  },
  {
    load() {
      return callback(7145);
    }
  },
  {
    load() {
      return callback(7146);
    }
  },
  {
    load() {
      return callback(7147);
    }
  },
  {
    load() {
      return callback(7148);
    }
  },
  {
    load() {
      return callback(7149);
    }
  },
  {
    load() {
      return callback(7150);
    }
  },
  {
    load() {
      return callback(7151);
    }
  },
  {
    load() {
      return callback(7152);
    }
  },
  {
    load() {
      return callback(7153);
    }
  },
  {
    load() {
      return callback(7154);
    }
  },
  {
    load() {
      return callback(7155);
    }
  },
  {
    load() {
      return callback(7156);
    }
  }
];
obj = {
  load() {
    return callback(7157);
  }
};
const items1 = [
  obj,
  {
    load() {
      return callback(7158);
    }
  },
  {
    load() {
      return callback(7159);
    }
  },
  {
    load() {
      return callback(7160);
    }
  },
  {
    load() {
      return callback(7161);
    }
  },
  {
    load() {
      return callback(7162);
    }
  },
  {
    load() {
      return callback(7163);
    }
  },
  {
    load() {
      return callback(7164);
    }
  },
  {
    load() {
      return callback(7165);
    }
  },
  {
    load() {
      return callback(7166);
    }
  },
  {
    load() {
      return callback(7167);
    }
  },
  {
    load() {
      return callback(7168);
    }
  },
  {
    load() {
      return callback(7169);
    }
  },
  {
    load() {
      return callback(7170);
    }
  },
  {
    load() {
      return callback(7171);
    }
  },
  {
    load() {
      return callback(7172);
    }
  },
  {
    load() {
      return callback(7173);
    }
  },
  {
    load() {
      return callback(7174);
    }
  }
];
closure_0 = require("module_7143")((arg0, arg1, arg2) => {
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
const result = require("module_7140").fileFinishedImporting("modules/messages/getBurstAnimation.native.tsx");

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